import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Error } from '../routes/RandomUsers';

interface Props {
  error: Error | null;
}

export default function Alert({ error }: Props) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {(error?.statusText === 'Too Many Requests' && 'Muitos pedidos') ||
              'Encontramos um problema'}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              {error
                ? 'Você buscou muitos usuários no último minuto. Aguarde alguns minutos e recarregue a página.'
                : 'Ocorreu algo inesperado. Tente recarregar a página.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
