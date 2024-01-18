import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { GET_ALL_TODOS, GET_ONE_TODO } from '../constants/keys';
import { getAllApi, getOneApi } from '../apis/todo-api';
import { TodoType } from 'types/todo';

export const useGetTodoAllQuery = () =>
  useQuery({
    queryKey: [GET_ALL_TODOS],
    queryFn: getAllApi,
    select: ({ data }: AxiosResponse) => data.data as TodoType[],
  });

export const useGetTodoOneQuery = (id: string) =>
  useQuery({
    queryKey: [GET_ONE_TODO, id],
    queryFn: () => getOneApi(id),
    select: ({ data }: AxiosResponse) => data.data as TodoType,
  });
