import apple from '../../assets/images/apple_4.jpg';
import banana from '../../assets/images/bananas-1119790_1920.jpg';
import berry from '../../assets/images/Berries.jpg';
import blueberry from '../../assets/images/blueberries-690072_1920.jpg';
import kiwi from '../../assets/images/kiwi-2673038_1920.png';
import lemon from '../../assets/images/lemon-1444025_1920.jpg';
import orange from '../../assets/images/orange.jpg';
import peach from '../../assets/images/peach-2573836_1920.jpg';
import pear from '../../assets/images/Pears.jpg';
import pineapple from '../../assets/images/pineapple-636562_1920.jpg';
import pomegranate from '../../assets/images/pomegranate-196800_1920.jpg';
import raspberry from '../../assets/images/raspberries-2431029_1920.jpg';
import strawberry from '../../assets/images/strawberry-2960533_1920.jpg';
import tangerine from '../../assets/images/tangerines-1721590_1920.jpg';
import waterMelon from '../../assets/images/water_melon.jpg';
import * as actionTypes from '../actionCreators/actionTypes.js';

const initialState = {
  fruits: [
    {
      id: 'a',
      name: 'Apple',
      image: apple,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 234
    },
    {
      id: 'b',
      name: 'Banana',
      image: banana,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 299
    },
    {
      id: 'c',
      name: 'Berry',
      image: berry,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 134
    },
    {
      id: 'z',
      name: 'Blueberry',
      image: blueberry,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 294
    },
    {
      id: 'd',
      name: 'Kiwi',
      image: kiwi,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 200
    },
    {
      id: 'e',
      name: 'Lemon',
      image: lemon,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 100
    },
    {
      id: 'f',
      name: 'Orange',
      image: orange,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 104
    },
    {
      id: 'g',
      name: 'peach',
      image: peach,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 200
    },
    {
      id: 'h',
      name: 'pear',
      image: pear,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 230
    },
    {
      id: 'i',
      name: 'pineapple',
      image: pineapple,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 334
    },
    {
      id: 'j',
      name: 'pomegranate',
      image: pomegranate,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 300
    },
    {
      id: 'k',
      name: 'raspberry',
      image: raspberry,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 434
    },
    {
      id: 'l',
      name: 'strawberry',
      image: strawberry,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 300
    },
    {
      id: 'm',
      name: 'tangerine',
      image: tangerine,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 101
    },
    {
      id: 'n',
      name: 'water melon',
      image: waterMelon,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 90
    }
  ]
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_PAGE_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default fruitsReducer;
