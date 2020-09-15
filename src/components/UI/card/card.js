import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './card.module.scss';
import Contain from '../../contain/contain';
import * as action from '../../../store/index';
import Spinner from '../../spinner/spinner';

const Card = props => {
  const { fruits } = { ...props };

  const dispatch = useDispatch();

  useEffect(() => {
    fruits && dispatch(action.initFruitImg());
    fruits &&
      fruits.map(el =>
        dispatch(
          action.getFruitImage(
            el.id,
            el.fruit.imagesUrl[0 * 1]
          )
        )
      );
  }, [dispatch, fruits]);

  const imagesUrl = useSelector(
    state =>
      state.fruits.imagesUrl.length === fruits.length &&
      state.fruits.imagesUrl,
    shallowEqual
  );

  console.log(imagesUrl);

  return (
    <Contain>
      <section className={classes.card}>
        <div className={classes.cardCards}>
          {fruits &&
            fruits.map(fruit => (
              <Link
                className={classes.cardLink}
                to={`/${fruit.fruit.name}+${fruit.id}`}
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

                    <div className={classes.cardDes}>
                      <div className={classes.cardName}>
                        <h3>NAME:</h3>
                        <span>{fruit.fruit.name}</span>
                      </div>

                      <div className={classes.cardName}>
                        <h3>PRICE:</h3>
                        <span>{`${fruit.fruit.price}`}</span>
                      </div>

                      <div className={classes.cardDescript}>
                        <h3>DESCRIPTION:</h3>
                        <span>
                          {fruit.fruit.description}
                        </span>
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
