import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { defineMediaType } from '../services/helpers/defineMediaType';
import { DogResponse } from '../services/interfaces/dog.interface';
import { requestDog } from '../services/requests';

export default function Dogs() {
  const [dog, setDog] = useState('');
  const [mediaType, setMediaType] = useState<string | undefined>(undefined);

  const requestNewDog = async () => {
    try {
      const { data }: AxiosResponse<DogResponse> = await requestDog();
      return setDog(data.url);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    requestNewDog();
  }, []);

  useEffect(() => {
    setMediaType(defineMediaType(dog));
  }, [dog]);

  return (
    <>
      <div className="flex items-center justify-center">
        <Title title="Dogs" />
        <div className="ml-4">
          <button
            type="button"
            onClick={requestNewDog}
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Gerar cão
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:px-8">
        {mediaType === 'image' ? (
          <img
            src={dog}
            alt="dog"
            className="h-full w-full rounded-lg object-cover object-center"
          />
        ) : mediaType === 'video' ? (
          <video src={dog} autoPlay={true} muted={true}></video>
        ) : (
          <div>Formato de mídia não suportado</div>
        )}
      </div>
    </>
  );
}
