export interface AppResponse<T> {
  status: 200 | 404 | 400;
  data: T;
}
