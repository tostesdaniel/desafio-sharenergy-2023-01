import { Dispatch, SetStateAction, useContext } from 'react';
import { CatContext } from '../../context/CatContext';

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CatSection({ setModalOpen }: Props) {
  const { image } = useContext(CatContext);

  return (
    <div className="-mx-8 bg-white">
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt="Cat"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />
        <div className="relative mx-auto flex flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Gere um gato para um código de status HTTP
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-white">
            Insira um código de status de resposta HTTP e gere uma imagem de um
            lindo gatinho.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Gerar gato
          </button>
        </div>
      </div>
    </div>
  );
}
