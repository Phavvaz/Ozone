import React, { useEffect } from 'react';
import * as action from '../../../store/index';
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux';
import classes from '../../../components/UI/card/card.module.scss';
import styles from './Fruit.module.scss';
import Contain from '../../../components/contain/contain';
import Spinner from '../../../components/spinner/spinner';
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
    <div className={styles.Fruit}>
      <Contain addStyle={styles.FruitCon}>
        {fruitsData &&
          fruitsData.map(fruit => (
            <div
              key={fruit.id}
              className={styles.FruitList}
            >
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
                  <Spinner />
                )}
              </div>
              <div className={styles.FruitBottom}>
                <div>{fruit.fruit.name}</div>
                <div className={styles.FruitDes}>
                  {fruit.fruit.description}
                </div>
                <div>${fruit.fruit.price}</div>
                <div className={styles.FruitBtn}>
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
            </div>
          ))}
      </Contain>
    </div>
  );
};

export default Fruit;
