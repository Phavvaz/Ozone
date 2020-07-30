import * as actionTypes from './actionTypes.js';

// export const initHomePage = () => {
//   return {
//     type: actionTypes.INIT_HOME_PAGE
//   };
// };

export const initHomePageSuccess = () => {
  return {
    type: actionTypes.INIT_HOME_PAGE_SUCCESS
  };
};

// export const initHomePageFailed = error => {
//     return {
//         type: actionTypes.INIT_HOME_PAGE_FAILS,
//         err: error
//     }
// }
