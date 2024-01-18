import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
//
import useConfigContext from 'hooks/useConfigContext';

const TodoList: React.FC<{}> = () => {
  const navigation = useNavigate();
  const { todoId, setTodoId } = useConfigContext();

  useEffect(() => {
    setTodoId('3a4cc747-2974-4c9f-bbbe-9c4a0d4d1275');
  }, []);

  return <Stack onClick={() => navigation('/detail')}>Todo List</Stack>;
};

export default TodoList;
