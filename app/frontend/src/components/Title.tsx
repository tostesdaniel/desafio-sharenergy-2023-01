interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="min-w-0 flex-1">
      <h1 className="text-2xl font-bold leading-7 text-gray-900">{title}</h1>
    </div>
  );
}
