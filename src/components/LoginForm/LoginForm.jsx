import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import { Field, Formik, Form } from 'formik';
import { Button } from 'components/Button';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="email">
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};
