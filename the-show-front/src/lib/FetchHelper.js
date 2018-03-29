import ExternalUrl from '../constants/ExternalUrl';

const { imagesLocalhost } = ExternalUrl;

export default {
  fetchWeekOneImages() {
    return fetch(imagesLocalhost).then(response => response.json());
  },

  uploadImageFile(form) {
    const data = new FormData();
    data.append('file', form.file);
    data.append('filename', form.file.name);
    data.append('title', form.title);
    data.append('category', form.category);
    data.append('description', form.description);
    data.append('latitude', form.map.latitude.toString());
    data.append('longitude', form.map.longitude.toString());

    return fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data
    });
  },

  retrieveLocation(google, address) {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          resolve(results[0].geometry.location);
        } else {
          reject(new Error('Impossible to retrieve a location'));
        }
      });
    });
  }
};
