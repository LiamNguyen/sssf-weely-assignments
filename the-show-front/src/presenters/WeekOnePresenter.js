import _ from 'lodash';

export default {
  getCategories(imageList) {
    return _.uniqBy(imageList, image => image.category)
      .map(image => image.category);
  },

  changeForm(form, field, value, callback) {
    const params = _.cloneDeep(form);
    _.set(params, field, value);
    callback(params);
  }
};
