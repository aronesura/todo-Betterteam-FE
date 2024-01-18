import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Button,
  Grid,
  Stack,
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
//
import { TodoType, Status } from 'types/todo';
import { MainCard, FormInput } from 'components';
import SingleFileUpload from 'components/dropzone/SingleFileUpload';
import useConfigContext from 'hooks/useConfigContext';
//
import { useGetTodoOneQuery } from 'libs/queries/useGetTodoQuery';
import { useGetImageBase64Query } from 'libs/queries/useGetImageQuery';
import { useUpdateTodoMutation } from 'libs/mutations/useUpdateTodoMutation';

const TodoDetail: React.FC<{}> = () => {
  const navigation = useNavigate();
  const { todoId } = useConfigContext();
  const { data, refetch: refetchTodo, isLoading } = useGetTodoOneQuery(todoId);
  const { data: image, refetch: refetchImage } = useGetImageBase64Query(data?.image || '');
  const [editable, setEditable] = useState<boolean>(false);
  const [imageEditable, setImageEditable] = useState<boolean>(false);
  const [localState, setLocalState] = useState<TodoType>(data!);
  const [file, setFile] = useState(null);

  const { mutate: updateTodo } = useUpdateTodoMutation();

  useEffect(() => {
    refetchTodo();
    refetchImage();
  }, [todoId]);

  useEffect(() => {
    if (data) setLocalState(data);
  }, [data]);

  const handleSave = () => {
    setEditable(false);
    setImageEditable(false);

    const { createdAt, updatedAt, ...rest } = localState;

    updateTodo({ ...rest, status: localState.status as Status });

    refetchTodo();
    refetchImage();
  };

  const onChangeField = (field: string, value: string) => {
    setLocalState({
      ...localState,
      [field]: value,
    });
  };

  return (
    <Stack sx={{ maxWidth: '60%', mx: 'auto', py: 5 }} gap={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button
          variant="text"
          sx={{ width: 'fit-content', textTransform: 'capitalize' }}
          onClick={() => navigation('/')}
        >
          Go back
        </Button>
        <Button
          variant="text"
          sx={{ width: 'fit-content' }}
          onClick={editable ? () => handleSave() : () => setEditable(true)}
        >
          {editable ? 'Save' : 'Edit'}
        </Button>
      </Stack>

      <MainCard contents={false}>
        <Grid container spacing="20px">
          <Grid item xs={12} md={6}>
            {imageEditable ? (
              <SingleFileUpload
                file={file}
                setFieldValue={(field: string, value: any) => setFile(value)}
              />
            ) : (
              <img src={`data:image/png;base64,${image}`} alt="" style={{ width: '100%' }} />
            )}
            {editable && !imageEditable && (
              <Button variant="text" onClick={() => setImageEditable(true)}>
                Upload
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" gap={3}>
              <FormInput
                label="Name"
                name="task"
                value={localState?.task}
                readOnly={!editable}
                onChangeValue={(value: string) => onChangeField('task', value)}
              />

              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography
                  variant="body1"
                  fontWeight="bolder"
                  color="text.primary"
                  sx={{ width: '60px' }}
                >
                  Status
                </Typography>
                <Select
                  name="status"
                  value={localState?.status as string}
                  onChange={(event: SelectChangeEvent) =>
                    onChangeField('status', event.target.value as string)
                  }
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label', readOnly: !editable }}
                  sx={{ height: '40px', width: '300px' }}
                >
                  {Object.keys(Status).map((key, index) => (
                    <MenuItem key={index} value={Status[key as keyof typeof Status]}>
                      <Typography textTransform="uppercase">{key}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
    </Stack>
  );
};

export default TodoDetail;
