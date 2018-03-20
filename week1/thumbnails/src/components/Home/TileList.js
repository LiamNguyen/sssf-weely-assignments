import RoutePathConstants from '../../constants/RoutePathConstants';
import JsLogo from '../../assets/images/javascript_logo.png';

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
    imageUrl: JsLogo
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