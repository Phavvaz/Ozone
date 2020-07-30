import React from 'react';
import classes from './card.module.scss';
import Contain from '../../contain/contain';
import { useNavigate, Link } from 'react-router-dom';

const Card = props => {
  const navigate = useNavigate();
  return (
    <Contain>
      <section className={classes.card}>
        <div className={classes.cardCards}>
          {props.Fruits.map(fruit => (
            <Link to={`/${fruit.name}`}>
              <button
                className={classes.cardItems}
                key={fruit.id}
                // onClick={() =>
                //   navigate('/:fruit', {
                //     replace: true,
                //   })
                // }
              >
                <div>
                  <div className={classes.cardImg}>
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                    />
                  </div>

                  <div className={classes.cardDes}>
                    <div className={classes.cardName}>
                      <h1>NAME:</h1>
                      <span>{fruit.name}</span>
                    </div>

                    <div className={classes.cardName}>
                      <h1>PRICE:</h1>
                      <span>{`${fruit.price}$`}</span>
                    </div>

                    <div className={classes.cardDescript}>
                      <h1>DESCRIPTION:</h1>
                      <span>{fruit.description}</span>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </section>
    </Contain>
  );
};

export default Card;
