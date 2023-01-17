import { createContext, Dispatch, SetStateAction } from 'react';
import { StatusCode } from '../services/constants';

interface CatContextProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  selectedStatusCode: StatusCode;
  setSelectedStatusCode: Dispatch<SetStateAction<StatusCode>>;
  showIntroduction: boolean;
  setShowIntroduction: Dispatch<SetStateAction<boolean>>;
}

export const CatContext = createContext<CatContextProps>({} as CatContextProps);
