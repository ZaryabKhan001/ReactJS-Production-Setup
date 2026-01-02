import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  type?: string;
};

export function FormInput({ name, label, type = 'text' }: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col justify-center items-start">
      <label className="text-md font-bold">{label}</label>
      <input
        className="border border-gray-400 rounded-md p-2 w-[20rem]"
        {...register(name)}
        type={type}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
