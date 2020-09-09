import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import Logo from '../../Logo/logo';
import Contain from '../../contain/contain';
import * as action from '../../../store/index';

// import Classes from './adminLayout.module.css';

const AdminLayout = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    action.authCheckState();
  }, [dispatch]);
  const navigate = useNavigate();
  const isLogin = useSelector(
    state => state.adminAuth.result != null
  );
  return (
    <>
      <div>
        <Contain>
          <Logo />

          <nav>
            <div>
              <div>
                {/* {isLogin ? ( */}
                <Link to="dashboard">DashBoard</Link>
                {/* ) : null} */}
              </div>

              <div>
                {/* {isLogin ? ( */}
                <Link to="sales">Sales</Link>
                {/* ) : null} */}
              </div>

              <div>
                {/* {isLogin ? ( */}
                <Link to="fruit">Fruit</Link>
                {/* ): null} */}
                {/* {isLogin ? ( */}
                <Link to="fruit/addFruit">Add Fruit</Link>
                {/* ) : null} */}
              </div>

              {/* {isLogin ?  */}
              <Link to="blog">Blog</Link>
              {/* : null} */}
            </div>
          </nav>

          <hr />
          <div>
            <h1>Welcome: admin</h1>
          </div>
          <div>
            <h1>
              Date:{' '}
              {new Date().toDateString() +
                new Date().toLocaleTimeString()}
            </h1>
          </div>
          {isLogin ? (
            <div>
              <button
                onClick={() => {
                  dispatch(action.onLogOut());
                  navigate('/', { replace: true });
                }}
              >
                Logout
              </button>
            </div>
          ) : null}

          {props.children}
        </Contain>
      </div>
    </>
  );
};

export default AdminLayout;
