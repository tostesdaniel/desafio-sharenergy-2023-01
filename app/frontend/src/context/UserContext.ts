import { createContext, Dispatch, SetStateAction } from 'react';

interface UserContextType {
  refreshUsers: boolean;
  setRefreshUsers: Dispatch<SetStateAction<boolean>>;
}

export const UsersContext = createContext<UserContextType>(
  {} as UserContextType
);
