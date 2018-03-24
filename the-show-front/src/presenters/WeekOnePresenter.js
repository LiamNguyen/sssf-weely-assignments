import _ from 'lodash';

export default {
  getCategories(imageList) {
    return _.uniqBy(imageList, image => image.category).map(image => image.category);
  }
};
