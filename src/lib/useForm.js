import { useState } from 'react';

import { SubmitError } from './submitForm';

/**
 * Small form-state hook: values, Yup validation (on blur, on change once a
 * field has an error, and on submit) and a send status.
 *
 * status: 'idle' | 'sending' | 'success' | 'error'
 */
export function useForm({ schema, initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');

  const validateField = async (name, nextValues) => {
    if (!(name in schema.fields)) return;
    try {
      await schema.validateAt(name, nextValues);
      setErrors((e) => ({ ...e, [name]: undefined }));
    } catch (err) {
      setErrors((e) => ({ ...e, [name]: err.message }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (errors[name]) validateField(name, next);
  };

  const handleBlur = (event) => {
    validateField(event.target.name, values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formEl = event.currentTarget; // React clears currentTarget after an await
    if (status === 'sending') return;

    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
    } catch (err) {
      const found = {};
      for (const e of err.inner) if (!found[e.path]) found[e.path] = e.message;
      setErrors(found);
      const first = formEl.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus('sending');
    setServerMessage('');
    try {
      await onSubmit(schema.cast(values));
      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      setStatus('error');
      setServerMessage(err.message);
      if (err instanceof SubmitError && err.fieldErrors) {
        setErrors((e) => ({ ...e, ...err.fieldErrors }));
      }
    }
  };

  const reset = () => {
    setStatus('idle');
    setServerMessage('');
    setErrors({});
    setValues(initialValues);
  };

  /** Props to spread onto an MUI TextField for `name`. */
  const field = (name) => ({
    name,
    id: name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: Boolean(errors[name]),
    helperText: errors[name] || ' ',
  });

  return { values, errors, status, serverMessage, field, handleSubmit, reset };
}
