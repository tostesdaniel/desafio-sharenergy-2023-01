interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="sm:flex-auto">
      <h1 className="text-2xl font-bold leading-7 text-gray-900">{title}</h1>
    </div>
  );
}
