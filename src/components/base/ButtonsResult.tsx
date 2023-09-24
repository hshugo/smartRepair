import * as React from 'react';
import type { UseFormReset } from 'react-hook-form';
import { FormValues } from 'types/TBrand';
import { defaultValuesBrand } from '../../constants/defaultValuesBrand';

export default function ButtonsResult({ reset }: { reset: UseFormReset<FormValues> }) {
  return (
    <div className='form_row'>
      <button
        className='button buttonBlack'
        type='button'
        onClick={() => {
          reset(defaultValuesBrand);
        }}
      >
        Reset Form
      </button>
      <button className='button'>submit</button>
    </div>
  );
}
