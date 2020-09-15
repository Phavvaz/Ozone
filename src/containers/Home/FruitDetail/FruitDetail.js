import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout/layout';
import { useParams } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import Contain from '../../../components/contain/contain';
import classes from './FruitDetail.module.scss';
import shops from '../../../assets/images/shops.svg';
import * as action from '../../../store/index';
import { storage } from '../../../firebase';

const FruitDetail = props => {
  const dispatch = useDispatch();
  const urlParam = useParams();
  // const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    const id = urlParam.fruit.split(' ')[1 * 1];
    dispatch(action.getFruit(id));
  }, [dispatch, urlParam.fruit]);

  const isLoading = useSelector(
    state => state.fruits.loading,
    shallowEqual
  );
  const fruitData = useSelector(
    state =>
      state.fruits.fruit != null && state.fruits.fruit,
    shallowEqual
  );
  useEffect(() => {
    const fruitImg = fruitData && fruitData.imagesUrl;
    fruitImg &&
      dispatch(action.getFruitImg2(fruitImg[0 * 1]));
  });

  const imgUrl = useSelector(
    state =>
      state.fruits.imageUrl != null && state.fruits.imageUrl
  );
  console.log(fruitData);
  console.log(imgUrl);

  // const getImg = path => {
  //   storage()
  //     .refFromURL(path)
  //     .getDownloadURL()
  //     .then(url => {
  //       console.log(url);
  //       return url;
  //       // setImgUrl(url);
  //     })
  //     .catch(err => err);
  // };

  return (
    <Layout>
      <Contain>
        <div className={classes.FruitDetail}>
          <h1 className={classes.FruitDetailHeading}>
            {' '}
            This the fruit detail page
          </h1>
          <div className={classes.FruitDetailItem}>
            <div className={classes.FruitDetailImage}>
              {imgUrl && (
                <img src={imgUrl} alt={fruitData.name} />
              )}
            </div>
            <div className={classes.FruitDetailDes}>
              <h3>NAME:</h3>
              <span>{fruitData.name}</span>
            </div>
            <div className={classes.FruitDetailDes}>
              <h3>PRICE:</h3>
              <span>{fruitData.price}</span>
            </div>
            <div
              className={[
                classes.FruitDetailDes,
                classes.FruitDetailDes3
              ].join(' ')}
            >
              <h3>DESCRIPTION:</h3>
              <span>{fruitData.description}</span>
            </div>

            {/* Add to cart svg needed here */}
            <button className={classes.FruitDetailBtn}>
              Add to cart
              <svg>
                <use
                  xlinkHref={shops + '#icon-shopping-cart'}
                />
              </svg>
            </button>
          </div>
        </div>
      </Contain>
    </Layout>
  );
};

export default FruitDetail;
