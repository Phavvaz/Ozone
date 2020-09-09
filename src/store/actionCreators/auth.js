import * as actionTypes from './actionTypes';
import { auth } from '../../firebase';

export const loginBegins = () => {
  return {
    type: actionTypes.LOGIN_BEGINS
  };
};

export const loginSuccess = result => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    result: result
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};

export const logOutBegins = () => {
  return {
    type: actionTypes.AUTH_LOGOUT_BEGINS
  };
};

export const logOutSuccess = success => {
  return {
    type: actionTypes.AUTH_LOGOUT_SUCCESS,
    success: success
  };
};

export const logOutFail = error => {
  return {
    type: actionTypes.AUTH_LOGOUT_FAIL,
    error: error
  };
};

export const onLogOut = () => {
  return dispatch => {
    dispatch(logOutBegins());
    auth()
      .signOut()
      .then(success => {
        // Sign-out successful
        // Clearing our localStorage Items
        console.log(success);
        dispatch(logOutSuccess(success));
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('userId');
      })
      .catch(error => {
        console.log(error);
        logOutFail(error);
      });
  };
};

export const checkAuthTimeOut = expiresIn => {
  return dispatch => {
    setTimeout(() => {
      dispatch(onLogOut());
    }, expiresIn * 1000);
  };
};

export const authConfirm = (email, password) => {
  return dispatch => {
    dispatch(loginBegins());
    // auth.tenantId = 'ozone-61988';
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user);
        // const idTokenResult = res.user
        //   ?.getIdTokenResult()
        //   .then(idTokenResult => idTokenResult);
        const data = {
          idToken: res.user?._lat,
          refreshToken: res.user?.refreshToken,
          userId: res.user?.uid,
          userEmail: res.user?.email,
          expirationDate: new Date(
            new Date().getTime() + Number(3600 * 1000)
          )
        };
        localStorage.setItem('token', data.idToken);
        localStorage.setItem(
          'refreshToken',
          data.refreshToken
        );
        localStorage.setItem('userId', data.userId);
        localStorage.setItem(
          'expirationTime',
          data.expirationDate
        );

        dispatch(loginSuccess(data));
        dispatch(checkAuthTimeOut(Number(3600)));
        console.log(data);
        // const t = res.additionalUserInfo?.profile;
        // console.log(res.user.stsTokenManager);
      })
      .catch(error => {
        dispatch(loginFail(error));
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password.');
        } else {
          console.log(errorMessage);
        }
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(onLogOut());
    } else {
      const expirationDate = new Date(
        localStorage.getItem('expirationTime')
      );
      if (expirationDate <= new Date()) {
        dispatch(onLogOut());
      } else {
        //   auth()
        //     .onAuthStateChanged( (user) => {
        //       if (user) {
        //         // User is signed in.
        //       }
        //     });
        const data = {
          token: localStorage.getItem('token'),
          refreshToken: localStorage.getItem(
            'refreshToken'
          ),
          uid: localStorage.getItem('userId'),
          expirationTime: localStorage.getItem(
            'expirationTime'
          )
        };
        dispatch(loginSuccess(data));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() -
              new Date().getTime()) /
              1000
          )
        );
      }
    }
  };
};
