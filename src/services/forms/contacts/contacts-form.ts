// Import core
import { ContactFormData } from '@interfaces/forms';
import useAsyncAction from '@services/hooks/useAsyncAction';
import React, { useMemo, useState } from 'react';

// Import third parts
import { useForm } from 'react-hook-form';

type SubmitFn = (data: ContactFormData) => Promise<any>;
const useContactsForm = () => {
  const [serverError, setServerError] = useState<string>('');
  const [serverSuccess, setServerSuccess] = useState<string>('');
  const methods = useForm<ContactFormData>({});

  const [submit, submitInProgress] = useAsyncAction<SubmitFn>(
    async (data: ContactFormData) => {
      console.log('Submit form via useAsyncAction(): ', data);
    },
    []
  ); // product, cartAddItem

  return {
    submit: useMemo(
      () => methods.handleSubmit(submit),
      [methods.handleSubmit, submit]
    ),
    submitInProgress: submitInProgress || methods.formState.isSubmitting,
    formState: methods.formState,
    register: methods.register,
    watch: methods.watch,
    serverError,
    setServerError,
    serverSuccess,
    setServerSuccess,
  };
};

export default useContactsForm;
