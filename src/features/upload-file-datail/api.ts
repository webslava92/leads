import { httpClient } from 'src/api/http-client';
import { HttpResponse, ItemsGroup } from './types';

export async function uploadFiles(file: string | Blob, onUploadProgress: any) {
  const formData = new FormData();

  formData.append('file', file);

  const result = await httpClient.post<HttpResponse<ItemsGroup>>(
    '/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  if (result.data.status !== 200) {
    throw new Error('an error occured when tried to fetch aliases');
  }

  return result.data.data;
}

export async function getData() {
  const result = await httpClient.get<HttpResponse<ItemsGroup>>(
    '/leads',
    {}
  );
  if (result.data.status !== 200) {
    throw new Error('an error occured when tried to fetch aliases');
  }

  return result.data.data;
}

export async function getUploads() {
  const result = await httpClient.get<HttpResponse<ItemsGroup>>(
    '/uploads',
    {}
  );
  if (result.data.status !== 200) {
    throw new Error('an error occured when tried to fetch aliases');
  }

  return result.data.data;
}
