import Title from '../components/Title';

export default function Dogs() {
  return (
    <div className="flex items-center justify-center">
      <Title title="Dogs" />
      <div className="ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Gerar cão
        </button>
      </div>
    </div>
  );
}
