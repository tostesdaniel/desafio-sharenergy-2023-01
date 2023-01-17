import { createContext, Dispatch, SetStateAction } from 'react';
import { StatusCode } from '../services/constants';

interface CatContextProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  selectedStatusCode: StatusCode;
  setSelectedStatusCode: Dispatch<SetStateAction<StatusCode>>;
}

export const CatContext = createContext<CatContextProps>({} as CatContextProps);
