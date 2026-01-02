/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from 'react-hook-form';
import type { ReactElement } from 'react';

type Props = {
  name: string;
  render: (field: any) => ReactElement;
};

export function FormField({ name, render }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => render(field)}
    />
  );
}
