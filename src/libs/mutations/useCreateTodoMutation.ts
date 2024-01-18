import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { CREATE_TODO } from '../constants/keys';
import { createApi } from '../apis/todo-api';
import { TodoType } from 'types/todo';

export const useCreateTodoMutation = () =>
  useMutation({
    mutationKey: [CREATE_TODO],
    mutationFn: createApi,
    onSuccess: ({ data }: AxiosResponse) => data.data as TodoType,
  });
