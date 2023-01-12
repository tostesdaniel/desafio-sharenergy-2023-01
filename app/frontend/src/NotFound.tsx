import logo from './logo.png';

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Desafio SHARENERGY 2023/01</span>
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-yellow-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Página não encontrada.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Desculpe, não pudemos encontrar a página procurada.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-yellow-600 hover:text-yellow-500"
              >
                Página inicial
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
