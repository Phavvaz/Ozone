import React from 'react';
import Layout from '../../../components/Layout/layout';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Contain from '../../../components/contain/contain';
import classes from './FruitDetail.module.scss';
import shops from '../../../assets/images/shops.svg';
// import Fruit from '../../Admin/Fruit/Fruit';

const FruitDetail = props => {
  // const Location = useLocation().pathname;
  // const params = new URLSearchParams(Location).get(
  //   'Fruits'
  // );
  const urlParam = useParams().fruit;
  const fruits = useSelector(state => state.fruits.fruits);
  const fruit = fruits.filter(el => el.name === urlParam);
  // console.log(urlParam);
  // console.log(fruit[0]);

  return (
    <Layout>
      <Contain>
        <div className={classes.FruitDetail}>
          <h1 className={classes.FruitDetailHeading}>
            {' '}
            This the fruitDetail page
          </h1>
          <div className={classes.FruitDetailItem}>
            <div className={classes.FruitDetailImage}>
              <img
                src={fruit[+0].image}
                alt={fruit[+0].name}
              />
            </div>
            <div className={classes.FruitDetailDes}>
              <h3>NAME:</h3>
              <span>{fruit[+0].name}</span>
            </div>
            <div className={classes.FruitDetailDes}>
              <h3>PRICE:</h3>
              <span>{fruit[+0].price}</span>
            </div>
            <div className={classes.FruitDetailDes}>
              <h3>DESCRIPTION:</h3>
              <span>{fruit[+0].description}</span>
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
