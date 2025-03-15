import { toast } from "react-toastify";

export interface Response {
  status: string;
  message: string;
}

export interface APIResponse<T = Response> {
  data: T;
}

export interface APIError<T = unknown> {
  response?: APIResponse<T>;
}

const errorMessage = (error: APIError) => {
  toast.error((error.response?.data as Response)?.message);
};

export default errorMessage;
