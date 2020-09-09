import React, { useEffect } from 'react';
import * as action from '../../../store/index';
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux';
import classes from '../../../components/UI/card/card.module.scss';
// import { Routes, Route } from 'react-router-dom';

const Fruit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getAllFruits());
  }, [dispatch]);
  const isLoading = useSelector(
    state => state.fruits.loading,
    shallowEqual
  );
  const docsSize = useSelector(
    state =>
      state.fruits.docSize != null && state.fruits.docSize
  );

  const fruitsData = useSelector(
    state =>
      state.fruits.fruitsData.length === docsSize &&
      state.fruits.fruitsData,
    shallowEqual
  );

  useEffect(() => {
    fruitsData && dispatch(action.initFruitImg());
    fruitsData &&
      fruitsData.map(el =>
        dispatch(
          action.getFruitImage(
            el.id,
            el.fruit.imagesUrl[0 * 1]
          )
        )
      );
  }, [dispatch, fruitsData]);

  const imagesUrl = useSelector(
    state =>
      state.fruits.imagesUrl.length === fruitsData.length &&
      state.fruits.imagesUrl,
    shallowEqual
  );
  console.log(docsSize);
  console.log(fruitsData);
  console.log(imagesUrl);

  return (
    <>
      {fruitsData &&
        fruitsData.map(fruit => (
          <>
            <div key={fruit.id}>
              {/* Needs better styling */}
              <div className={classes.cardImg}>
                {imagesUrl ? (
                  <img
                    src={
                      imagesUrl.find(
                        el => el.id === fruit.id
                      ).imgUrl
                    }
                    alt={fruit.fruit.name}
                  />
                ) : (
                  'spinner'
                )}
              </div>
              <div>{fruit.fruit.name}</div>
              <div>{fruit.fruit.description}</div>
              <div>${fruit.fruit.price}</div>
              <div>
                <button
                  onClick={() =>
                    console.log('update Btn clicked')
                  }
                >
                  Update
                </button>
                <button
                  onClick={() =>
                    console.log('delete Btn clicked')
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default Fruit;
