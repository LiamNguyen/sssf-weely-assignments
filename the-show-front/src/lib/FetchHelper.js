import ExternalUrl from '../constants/ExternalUrl';

const { images } = ExternalUrl;

export default {
  fetchWeekOneImages() {
    return fetch(images).then(response => response.json());
  }
}