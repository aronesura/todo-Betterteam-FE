import axiosServices from 'utils/axios';

export const getImageApi = ({
  name,
  action = 'view',
}: {
  name: string;
  action: 'view' | 'download';
}) => axiosServices.get(`/api/image?image=${name}&action=${action}`);

export const getImageBase64Api = (name: string) =>
  axiosServices.get(`/api/image/base64?image=${name}`);
