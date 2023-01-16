interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="sm:flex-auto">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
    </div>
  );
}
