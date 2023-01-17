import { createContext, Dispatch, SetStateAction } from 'react';
import { StatusCode } from '../services/constants';

interface CatContextType {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  selectedStatusCode: StatusCode;
  setSelectedStatusCode: Dispatch<SetStateAction<StatusCode>>;
  showIntroduction: boolean;
  setShowIntroduction: Dispatch<SetStateAction<boolean>>;
}

export const CatContext = createContext<CatContextType>({} as CatContextType);
