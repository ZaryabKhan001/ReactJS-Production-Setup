/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FormProvider, useForm, type DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import type { z, ZodObject, ZodRawShape } from 'zod';

type FormProps<TShape extends ZodRawShape> = {
  schema: ZodObject<TShape>;
  defaultValues?: DefaultValues<z.infer<ZodObject<TShape>>>;
  onSubmit: (data: z.infer<ZodObject<TShape>>) => void | Promise<void>;
  children: ReactNode;
};

export function Form<TShape extends ZodRawShape>({ schema, defaultValues, onSubmit, children }: FormProps<TShape>) {
  const methods = useForm<z.infer<ZodObject<TShape>>>({
    resolver: zodResolver(schema) as any,
    defaultValues
  });

  // ✅ extract handleSubmit from methods
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)} // ✅ correct usage
        className="space-y-4 p-8 border border-slate-500 rounded-md m-8">
        {children}
      </form>
    </FormProvider>
  );
}
