import RoutePathConstants from '../../constants/RoutePathConstants';
import ES6Logo from '../../assets/images/es6_logo.png';

const {
  weekOne,
  weekTwo,
  weekThree,
  weekFour
} = RoutePathConstants;

export default [
  {
    title: 'Week 1',
    link: `/${weekOne}`,
    imageUrl: ES6Logo,
    customStyle: {
      backgroundColor: '#fdcf27'
    }
  },
  {
    title: 'Week 2',
    link: `/${weekTwo}`,
    imageUrl: ''
  },
  {
    title: 'Week 3',
    link: `/${weekThree}`,
    imageUrl: ''
  },
  {
    title: 'Week 4',
    link: `/${weekFour}`,
    imageUrl: ''
  }
];