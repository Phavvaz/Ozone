import React from 'react';
import Layout from '../../../components/Layout/layout';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
      <div>
        <h1> This the fruitDetail page</h1>
        <div>
          <img src={fruit[+0].image} alt={fruit[+0].name} />
        </div>
        <div>
          <h1>{fruit[+0].name}</h1>
        </div>
        <div>
          <h1>{fruit[+0].price}</h1>
        </div>
        <div>
          <h1>{fruit[+0].description}</h1>
        </div>

        {/* Add to cart svg needed here */}
        <button>Add to cart</button>
      </div>
    </Layout>
  );
};

export default FruitDetail;
