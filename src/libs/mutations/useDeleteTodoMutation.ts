import { useMutation } from '@tanstack/react-query';
import { DELETE_TODO } from '../constants/keys';
import { deleteOneApi } from '../apis/todo-api';

export const useDeleteTodoMutation = () =>
  useMutation({
    mutationKey: [DELETE_TODO],
    mutationFn: deleteOneApi,
  });
