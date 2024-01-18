import React from 'react';
import { useNavigate } from 'react-router';
import { List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
//
import useConfigContext from 'hooks/useConfigContext';
import { useGetTodoAllQuery } from 'libs/queries/useGetTodoQuery';
import { MainCard } from 'components';

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none',
};

const TodoList: React.FC<{}> = () => {
  const navigation = useNavigate();
  const { setTodoId } = useConfigContext();
  const { data: todos } = useGetTodoAllQuery();

  return (
    <Stack sx={{ maxWidth: '60%', mx: 'auto', py: 5 }}>
      <MainCard content={false}>
        <List
          component="nav"
          sx={{
            py: 0,
            '& .MuiListItemButton-root': {
              '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' },
            },
          }}
        >
          {todos?.length ? (
            todos.map((todo, index) => {
              const isLast = index === todos.length - 1;

              return (
                <ListItemButton
                  key={todo.id}
                  divider={!isLast}
                  onClick={() => {
                    setTodoId(todo.id);
                    navigation('/detail');
                  }}
                >
                  <ListItemText
                    primary={<Typography variant="subtitle1">{todo.task}</Typography>}
                    secondary={dayjs(todo.updatedAt).format('YYYY/MM/DD HH:mm')}
                  />
                  <Stack sx={{ height: '100%' }}>
                    <Typography variant="subtitle1" noWrap textTransform="capitalize">
                      {todo.status}
                    </Typography>
                  </Stack>
                </ListItemButton>
              );
            })
          ) : (
            <Typography>No Tasks</Typography>
          )}
        </List>
      </MainCard>
    </Stack>
  );
};

export default TodoList;
