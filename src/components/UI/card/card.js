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
            <Link
              className={classes.cardLink}
              to={`/${fruit.name}`}
              key={fruit.id}
            >
              <button
                className={classes.cardItems}
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
                      <h3>NAME:</h3>
                      <span>{fruit.name}</span>
                    </div>

                    <div className={classes.cardName}>
                      <h3>PRICE:</h3>
                      <span>{`${fruit.price}$`}</span>
                    </div>

                    <div className={classes.cardDescript}>
                      <h3>DESCRIPTION:</h3>
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
