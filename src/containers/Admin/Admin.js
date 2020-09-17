import React, { useState } from 'react';
import {
  useNavigate,
  Outlet,
  Routes,
  Route
} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux';
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout';
import DashBoard from './DashBoard/Dashboard';
import Sales from './Sales/Sales';
import Fruit from './Fruit/Fruit';
import AdminBlog from './Blog/Blog';
import UnknownRoutes from './404_Routes';
import AddFruit from './Fruit/AddFruit/AddFruit';
import * as action from '../../store/index';
import styles from './admin.module.scss';
import Contain from '../../components/contain/contain';
import Spinner from '../../components/spinner/spinner';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingState = useSelector(
    state => state.adminAuth.loading,
    shallowEqual
  );
  const isLogin = useSelector(
    state => state.adminAuth.result != null
  );
  const formError = useSelector(
    state =>
      state.adminAuth.error
        ? state.adminAuth.error.message
        : null,
    shallowEqual
  );
  const EmailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const Validation = Yup.object({
    email: Yup.string()
      .required('Admin email is required')
      .matches(EmailReg, '*Invalid Email address'),
    password: Yup.string().required(
      'A password is required'
    )
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Validation,
    onSubmit: values => {
      console.log(values);
      const email = values.email;
      const password = values.password;

      try {
        dispatch(action.authConfirm(email, password));
      } catch (error) {
        console.log(error);
        return;
      } finally {
        navigate('dashboard', { replace: true });
      }
    }
  });
  const setFormState = useState(['email', 'password'])[0];
  return (
    <>
      <AdminLayout>
        {isLogin ? (
          <Routes>
            <Route
              path="/dashboard/*"
              element={<DashBoard />}
            />
            <Route path="/sales" element={<Sales />} />
            <Route path="/fruit" element={<Fruit />} />
            <Route
              path="/fruit/addFruit"
              element={<AddFruit />}
            />
            <Route path="/blog" element={<AdminBlog />} />
            <Route path="*" element={<UnknownRoutes />} />
          </Routes>
        ) : null}
        {isLogin ? null : (
          <Contain addStyle={styles.Admin}>
            <form
              onReset={formik.handleReset}
              onSubmit={formik.handleSubmit}
              className={styles.AdminForm}
            >
              {setFormState.map(cur => (
                <div
                  className={styles.AdminLogin}
                  key={cur}
                >
                  <input
                    id={cur}
                    name={cur}
                    type={cur}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.AdminInput}
                    value={formik.values[cur]}
                  />
                  <label
                    htmlFor={cur}
                    className={styles.AdminLabel}
                  >
                    {cur}
                  </label>
                  {formik.touched[cur] &&
                  formik.errors[cur] ? (
                    <div className={styles.AdminError}>
                      {formik.errors[cur]}
                    </div>
                  ) : null}
                </div>
              ))}
              <button
                type="submit"
                className={styles.AdminBtn}
              >
                Login
              </button>

              {loadingState ? <Spinner /> : null}
              <div>{formError}</div>
            </form>
          </Contain>
        )}
      </AdminLayout>
      <Outlet />
    </>
  );
};

export default Admin;
