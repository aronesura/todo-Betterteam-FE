import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Grid, Stack, Typography } from '@mui/material';
//
import { MainCard } from 'components';
import useConfigContext from 'hooks/useConfigContext';
import { useGetTodoOneQuery } from 'libs/queries/useGetTodoQuery';
import { useGetImageBase64Query } from 'libs/queries/useGetImageQuery';

const TodoDetail: React.FC<{}> = () => {
  const navigation = useNavigate();
  const { todoId } = useConfigContext();
  const { data, refetch: refetchTodo } = useGetTodoOneQuery(todoId);
  const { data: image, refetch: refetchImage } = useGetImageBase64Query(data?.image || '');

  useEffect(() => {
    refetchTodo();
    refetchImage();
  }, [todoId]);

  return (
    <Stack sx={{ maxWidth: '60%', mx: 'auto', py: 5 }} gap={3}>
      <Button
        variant="text"
        sx={{ width: 'fit-content', textTransform: 'capitalize' }}
        onClick={() => navigation('/')}
      >
        Go back
      </Button>
      <MainCard contents={false}>
        <Grid container spacing="20px">
          <Grid item xs={12} md={6}>
            <img src={`data:image/png;base64,${image}`} alt="" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              Name: <Typography component="span">{data?.task}</Typography>
            </Typography>
            <Typography>
              Status:{' '}
              <Typography component="span" textTransform="uppercase">
                {data?.status}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </MainCard>
    </Stack>
  );
};

export default TodoDetail;
