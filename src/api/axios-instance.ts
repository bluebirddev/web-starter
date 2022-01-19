import Axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({ baseURL: 'https://petstore.swagger.io/v2' });

/**
 * Custom serializer to convert array params to return:
 * key=a&key=b instead of key=[]a&key=[]b
 */
function paramsSerializer(params: Record<string, unknown>): string {
  if (!params) return '';
  return Object.entries(params)
    .reduce<string[]>((res, [key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          res.push(`${key}=${v}`);
        });
      } else {
        res.push(`${key}=${value}`);
      }
      return res;
    }, [])
    .join('&');
}

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();

  console.log({ config });

  const promise = AXIOS_INSTANCE({
    ...config,
    paramsSerializer,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by Vue Query');
  };

  return promise;
};

export default customInstance;
