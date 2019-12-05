import LRU from "lru-cache";
import md5 from "md5";
import axios, { AxiosRequestConfig } from "axios";

enum Status {
  pending = "pending",
  resolved = "resolved"
}

const cache = new LRU(50);

export const useFetchSuspense = <res = any>(
  url: string,
  suspenseFetchOptions: AxiosRequestConfig = {}
): res => {
  const key = `${url}.${md5(JSON.stringify(suspenseFetchOptions))}`;

  const value: any = cache.get(key) || {
    status: Status.pending,
    data: undefined
  };

  if (value.status === Status.resolved) {
    return value.data;
  }

  const promise = axios(url, suspenseFetchOptions).then(res => res.data);

  promise.then(data => {
    cache.set(key, { status: Status.resolved, data });
  });

  throw promise;
};
