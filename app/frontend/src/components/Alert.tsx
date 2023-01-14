import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function Alert() {
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
          <h3 className="text-sm font-medium text-red-800">Erro</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              Ocorreu um erro. Aguarde alguns minutos e recarregue a página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
