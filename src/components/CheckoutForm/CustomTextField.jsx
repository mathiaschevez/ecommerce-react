import React from 'react';
import { useForm, useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => ( 
        <TextField {...field} label={label} required={required}/>)}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  );
}

export default FormInput;
