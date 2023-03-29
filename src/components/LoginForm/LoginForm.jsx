import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import { Field, Formik, Form } from 'formik';
import { Box } from 'components/Box';
import { StyledButton } from 'components/Buttons';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values.password.trim() === '' || values.email.trim() === '') {
      return toast.error('please, fill all filelds');
    }
    dispatch(logIn(values));
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
          className={css.form}
          style={{
            marginTop: '100px',
          }}
        >
          <label className={css.label} htmlFor="email">
            Email
            <Field type="email" name="email" className={css.formInput} />
          </label>
          <label className={css.label} htmlFor="password">
            Password
            <Field type="password" name="password" className={css.formInput} />
          </label>
          <Box textAlign="center">
            <StyledButton variant="contained" type="submit">
              Log In
            </StyledButton>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
