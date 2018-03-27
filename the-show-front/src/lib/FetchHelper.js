import ExternalUrl from '../constants/ExternalUrl';

const { imagesLocalhost } = ExternalUrl;

export default {
  fetchWeekOneImages() {
    return fetch(imagesLocalhost).then(response => response.json());
  },

  uploadImageFile(data) {
    console.log(data);
    return fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data
    });
  }
};
