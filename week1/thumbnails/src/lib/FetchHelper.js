import ExternalUrl from '../constants/ExternalUrl';

const { weekOneImages } = ExternalUrl;

export default {
  fetchWeekOneImages() {
    return fetch(weekOneImages).then(response => response.json());
  }
}