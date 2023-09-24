import React from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values: FormValues) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export default function FormEditBrand() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  /**
   * TODO - Change se submit and persist in DB
   */
  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data);
    navigate(-1);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register('firstName')} placeholder='Bill' />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName')} placeholder='Luo' />

      <input type='submit' />
    </form>
  );
}
