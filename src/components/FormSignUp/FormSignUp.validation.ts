import { useMemo } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required field'),
  email: yup.string().required('Required field').email('Invalid email'),
  password: yup
    .string()
    .required('Required field')
    .min(8, 'Password must have at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Required')
});

export const useValidationSchema = () => useMemo(() => yupResolver(validationSchema), []);
