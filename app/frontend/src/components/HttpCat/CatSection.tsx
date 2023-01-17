import { Dispatch, SetStateAction, useContext } from 'react';
import { CatContext } from '../../context/CatContext';
import classNames from '../../services/helpers/joinClassnames';

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CatSection({ setModalOpen }: Props) {
  const { image, showIntroduction } = useContext(CatContext);

  return (
    <div className="-mx-8 h-full bg-white sm:-mx-6 lg:-mx-8">
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt="Cat"
            className={classNames(
              'h-full w-full',
              showIntroduction
                ? 'object-cover object-center'
                : 'object-cover object-center sm:object-contain'
            )}
          />
        </div>
        <div
          aria-hidden="true"
          className={classNames(
            'absolute inset-0 bg-gray-900',
            showIntroduction ? 'opacity-50' : 'opacity-0'
          )}
        />
        <div
          className={classNames(
            'relative mx-auto flex flex-col items-center py-32 px-6 text-center sm:py-64 lg:py-56 lg:px-0 xl:py-64',
            !showIntroduction && 'invisible'
          )}
        >
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
