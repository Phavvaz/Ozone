import React from 'react';
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
  return (
    <>
      <AdminLayout>
        {/* {isLogin ? ( */}
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
        {/* ) : null} */}
        {isLogin ? null : (
          <div>
            <form
              onReset={formik.handleReset}
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email &&
              formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}

              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password &&
              formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}

              {loadingState ? (
                <div>
                  <h1>Spinner</h1>
                </div>
              ) : null}
              <div>{formError}</div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </AdminLayout>
      <Outlet />
    </>
  );
};

export default Admin;
