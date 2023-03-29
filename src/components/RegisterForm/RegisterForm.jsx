import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { Field, Formik, Form } from 'formik';
import { Button } from 'components/Button';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label} htmlFor="email">
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
