import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { Field, Formik, Form } from 'formik';
import { StyledButton } from 'components/Buttons';
import { Box } from 'components/Box';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (
      values.name.trim() === '' ||
      values.password.trim() === '' ||
      values.email.trim() === ''
    ) {
      return toast.error('please, fill all filelds');
    }

    dispatch(register(values));
    resetForm();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form
          style={{
            marginTop: '100px',
          }}
          className={css.form}
        >
          <label className={css.label} htmlFor="name">
            Username
            <Field type="text" name="name" className={css.formInput} />
          </label>
          <label className={css.label} htmlFor="email">
            Email
            <Field type="email" name="email" className={css.formInput} />
          </label>
          <label className={css.label} htmlFor="password">
            Password
            <Field type="password" name="password" className={css.formInput} />
          </label>
          <Box textAlign="center">
            <StyledButton type="submit">Register</StyledButton>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
