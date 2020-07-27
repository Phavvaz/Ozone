import React, { Component } from 'react';
import classes from './card.module.scss';
import Contain from '../../contain/contain';
import { NavLink } from 'react-router-dom';
import apple from '../../../assets/images/apple_4.jpg';
import banana from '../../../assets/images/bananas-1119790_1920.jpg';
import berry from '../../../assets/images/Berries.jpg';
import blueberry from '../../../assets/images/blueberries-690072_1920.jpg';
import kiwi from '../../../assets/images/kiwi-2673038_1920.png';
import lemon from '../../../assets/images/lemon-1444025_1920.jpg';
import orange from '../../../assets/images/orange.jpg';
import peach from '../../../assets/images/peach-2573836_1920.jpg';
import pear from '../../../assets/images/Pears.jpg';
import pineapple from '../../../assets/images/pineapple-636562_1920.jpg';
import pomegranate from '../../../assets/images/pomegranate-196800_1920.jpg';
import raspberry from '../../../assets/images/raspberries-2431029_1920.jpg';
import strawberry from '../../../assets/images/strawberry-2960533_1920.jpg';
import tangerine from '../../../assets/images/tangerines-1721590_1920.jpg';
import waterMelon from '../../../assets/images/water_melon.jpg';

class Card extends Component {
  state = {
    fruits: [
      {
        name: 'Apple',
        image: apple,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 234
      },
      {
        name: 'Banana',
        image: banana,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 299
      },
      {
        name: 'Berry',
        image: berry,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 134
      },
      {
        name: 'Blueberry',
        image: blueberry,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 294
      },
      {
        name: 'Kiwi',
        image: kiwi,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 200
      },
      {
        name: 'Lemon',
        image: lemon,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 100
      },
      {
        name: 'Orange',
        image: orange,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 104
      },
      {
        name: 'peach',
        image: peach,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 200
      },
      {
        name: 'pear',
        image: pear,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 230
      },
      {
        name: 'pineapple',
        image: pineapple,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 334
      },
      {
        name: 'pomegranate',
        image: pomegranate,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 300
      },
      {
        name: 'raspberry',
        image: raspberry,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 434
      },
      {
        name: 'strawberry',
        image: strawberry,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 300
      },
      {
        name: 'tangerine',
        image: tangerine,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 101
      },
      {
        name: 'water melon',
        image: waterMelon,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 90
      }
    ]
  };

  render() {
    return (
      <section className={classes.card}>
        <Contain>
          <div className={classes.cardCards}>
            {this.state.fruits.map(cur => (
              <div
                className={classes.cardItems}
                key={cur.name}
              >
                <div className={classes.cardImg}>
                  <img src={cur.image} alt={cur.name} />
                </div>

                <div className={classes.cardDes}>
                  <p className={classes.cardName}>
                    <h4>NAME:</h4>
                    <span>{cur.name}</span>
                  </p>

                  <p className={classes.cardName}>
                    <h4>PRICE:</h4>
                    <span>{`${cur.price}$`}</span>
                  </p>

                  <p className={classes.cardDescript}>
                    <h4>DESCRIPTION:</h4>
                    <span>{cur.description}</span>
                  </p>
                </div>

                <NavLink className={classes.cardBtn}>
                  order now
                </NavLink>
              </div>
            ))}
          </div>
        </Contain>
      </section>
    );
  }
}

export default Card;
