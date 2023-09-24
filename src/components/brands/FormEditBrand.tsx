import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import ButtonsResult from 'components/base/ButtonsResult';
import { FormValues } from 'types/TBrand';
import { defaultValuesBrand } from '../../constants/defaultValuesBrand';

export default function FormEditBrand() {
  const navigate = useNavigate();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: defaultValuesBrand });

  /**
   * TODO - Change se submit and persist in DB
   */
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    navigate(-1); //IF IT IS OK
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form_row'>
        <Controller
          render={({ field }) => <TextField {...field} label='Name' fullWidth />}
          name='name'
          control={control}
        />
        {/*** TODO - Apply erros */}
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      <div className='form_row'>
        <Controller
          render={({ field }) => <TextField {...field} label='Description' fullWidth />}
          name='description'
          control={control}
          defaultValue=''
        />
      </div>
      <ButtonsResult {...{ reset }} />
    </form>
  );
}
