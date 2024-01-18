import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
//
import { Status, TodoCreateType } from 'types/todo';
import { FormInput, MainCard } from 'components';
import SingleFileUpload from 'components/dropzone/SingleFileUpload';
//
import { useCreateTodoMutation } from 'libs/mutations/useCreateTodoMutation';

const TodoCreate: React.FC<{}> = () => {
  const navigation = useNavigate();
  const [localState, setLocalState] = useState<TodoCreateType>({ task: '', status: Status.TODO });
  const [file, setFile] = useState(null);

  const { mutate: createTodo } = useCreateTodoMutation();

  const handleSave = () => {
    if (localState) {
      createTodo({ task: localState.task, status: localState.status as Status });
    }
    navigation('/');
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
        <Button variant="text" sx={{ width: 'fit-content' }} onClick={() => handleSave()}>
          Save
        </Button>
      </Stack>

      <MainCard contents={false}>
        <Grid container spacing="20px">
          <Grid item xs={12} md={6}>
            <SingleFileUpload
              file={file}
              setFieldValue={(field: string, value: any) => setFile(value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" gap={3}>
              <FormInput
                label="Name"
                name="task"
                value={localState?.task}
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
                  inputProps={{ 'aria-label': 'Without label' }}
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

export default TodoCreate;
