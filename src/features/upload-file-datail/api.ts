/* eslint-disable no-console */
import { httpClient } from 'src/api/http-client';
import { HttpResponse, ItemsGroup } from './types';

export async function uploadFiles(file: string | Blob, onUploadProgress: any) {
  const formData = new FormData();

  formData.append('file', file);

  const result = await httpClient.post<HttpResponse<ItemsGroup>>(
    '/uploads/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  if (result.status !== 200) {
    throw new Error('an error occured when tried to fetch files');
  }

  return result.data.data;
}

export async function getLeads() {
  const result = await httpClient.get<HttpResponse<ItemsGroup>>(
    '/leads',
    {}
  );
  if (result.status !== 200) {
    throw new Error('an error occured when tried to fetch leads');
  }

  return result.data.data;
}

export async function getUploads() {
  const result = await httpClient.get<HttpResponse<ItemsGroup>>(
    '/uploads',
    {}
  );
  if (result.status !== 200) {
    throw new Error('an error occured when tried to fetch uploads');
  }

  return result.data.data;
}
