import * as React from 'react';
import { useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='form-group'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={'form-control ' + (meta.touched && meta.error ? 'is-invalid' : '')} 
        {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='form-group'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className={'form-control ' + (meta.touched && meta.error ? 'is-invalid' : '')} 
        {...field} {...props} >
          {props.children}
        </select>
      {meta.touched && meta.error ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField({...props, type: 'checkbox'});
  return (
    <div className='form-group'>
      <div className='form-check'>
        <input type='checkbox' className={'form-check-input ' + (meta.touched && meta.error ? 'is-invalid' : '')} 
          {...field} {...props} />
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
    </div>
  );
};