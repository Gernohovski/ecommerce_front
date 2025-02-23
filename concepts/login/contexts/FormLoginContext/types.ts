import { Dispatch, SetStateAction } from "react";

export type FormLoginContextType = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};
