import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { GET_IMAGE } from '../constants/keys';
import { getImageApi, getImageBase64Api } from '../apis/image-api';

export const useGetImageQuery = (query: { name: string; action: 'view' | 'download' }) =>
  useQuery({
    queryKey: [GET_IMAGE, query],
    queryFn: () => getImageApi(query),
    select: ({ data }: AxiosResponse) => data.data,
  });

export const useGetImageBase64Query = (name: string) =>
  useQuery({
    queryKey: [GET_IMAGE, name],
    queryFn: () => getImageBase64Api(name),
    select: ({ data }: AxiosResponse) => data.data,
  });
