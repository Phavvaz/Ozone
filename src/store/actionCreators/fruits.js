import * as actionTypes from './actionTypes.js';
import { db, storage } from '../../firebase';
// import { fruitsImageFile } from '../../store/index';

export const initFruitsData = () => {
  return {
    type: actionTypes.INIT_FRUITS
  };
};

export const initFruitsDataSuccess = fruit => {
  return {
    type: actionTypes.INIT_FRUITS_SUCCESS,
    fruit: fruit
  };
};

export const initFruitsDataFailed = error => {
  return {
    type: actionTypes.INIT_FRUITS_FAILS,
    error: error
  };
};

export const documentSize = size => {
  return {
    type: actionTypes.DOC_SIZE,
    docSize: size
  };
};

export const getAllFruits = () => {
  return dispatch => {
    dispatch(initFruitsData());
    db()
      .collection('fruits')
      .get()
      .then(querySnapshot => {
        dispatch(documentSize(querySnapshot.size));
        // const fruits = [];
        querySnapshot.forEach(doc => {
          // console.log(`${doc.id} : ${doc.data()}`);
          const fruitsData = {
            id: doc.id,
            fruit: doc.data()
          };
          // console.log(fruitsData);
          dispatch(initFruitsDataSuccess(fruitsData));
          // fruits.concat(fruitsData);
        });
        // console.log(fruits);
        // return fruits;
        // dispatch(initFruitsDataSuccess(fruits));
      })
      .catch(error => {
        dispatch(initFruitsDataFailed(error));
        console.log(error);
      });
  };
};

export const getFruitSuccess = doc => {
  return {
    type: actionTypes.GET_FRUIT_SUCCESS,
    doc: doc
  };
};

export const getFruit = id => {
  return dispatch => {
    dispatch(initFruitsData());
    const fruit = db().collection('fruits').doc(id);
    fruit
      .get()
      .then(doc => {
        if (doc.exists) {
          // console.log('Document data:', doc.data());
          dispatch(getFruitSuccess(doc.data()));
        } else {
          console.log('No such document!');
        }
      })
      .catch(err => {
        console.log('Error getting document:', err);
        dispatch(initFruitsDataFailed(err));
      });
  };
};

export const initFruitImg = () => {
  return {
    type: actionTypes.INIT_FRUIT_IMG
  };
};

export const fruitImgSuccess = (id, imgUrl) => {
  return {
    type: actionTypes.INIT_FRUIT_IMG_SUCCESS,
    id: id,
    url: imgUrl
  };
};

export const fruitImgfailed = err => {
  return {
    type: actionTypes.INIT_FRUIT_IMG_FAILED,
    error: err
  };
};

export const getFruitImage = (id, imageLink) => {
  return dispatch => {
    storage()
      .refFromURL(imageLink)
      .getDownloadURL()
      .then(url => {
        // console.log(url);
        dispatch(fruitImgSuccess(id, url));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const getFruitImg2Success = url => {
  return {
    type: actionTypes.GET_FRUIT_IMG_2_SUCCESS,
    url: url
  };
};

export const getFruitImg2 = path => {
  return dispatch => {
    storage()
      .refFromURL(path)
      .getDownloadURL()
      .then(url => {
        // console.log(url);
        dispatch(getFruitImg2Success(url));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addFruitBegins = () => {
  return {
    type: actionTypes.ADD_FRUIT_BEGINS
  };
};

export const addFruitSuccess = success => {
  return {
    type: actionTypes.ADD_FRUIT_SUCCESS,
    success: success
  };
};

export const addfruitFail = error => {
  return {
    type: actionTypes.ADD_FRUIT_FAIL,
    error: error
  };
};

export const addFruit = fruitData => {
  return dispatch => {
    dispatch(addFruitBegins());

    const data = {
      name: fruitData.name,
      description: fruitData.description,
      price: fruitData.price
    };
    db()
      .collection('fruits')
      .add(data)
      .then(result => {
        console.log(result);
        dispatch(addFruitSuccess(result));
      })
      .catch(error => {
        console.log(error);
        dispatch(addfruitFail(error));
      });
  };
};
