import axiosServices from 'utils/axios';
import { TodoCreateType, TodoUpdateType } from 'types/todo';

export const getAllApi = () => axiosServices.get('/api/todos');

export const getOneApi = (id: string) => axiosServices.get(`/api/todos/${id}`);

export const createApi = (payload: TodoCreateType) =>
  axiosServices.post('/api/todos', { ...payload });

export const updateApi = ({ id, ...rest }: TodoUpdateType) =>
  axiosServices.put(`/api/todos/${id}`, { ...rest });

export const deleteOneApi = (id: string) => axiosServices.delete(`/api/todos/${id}`);
