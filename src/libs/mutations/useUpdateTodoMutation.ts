import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_TODO } from '../constants/keys';
import { updateApi } from '../apis/todo-api';
import { TodoType } from 'types/todo';

export const useUpdateTodoMutation = () =>
  useMutation({
    mutationKey: [UPDATE_TODO],
    mutationFn: updateApi,
    onSuccess: ({ data }: AxiosResponse) => data.data as TodoType,
  });
