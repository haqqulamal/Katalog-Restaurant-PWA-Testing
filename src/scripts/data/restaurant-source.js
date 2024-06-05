import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDb {
  static async getRestaurantDb() {
    const response = await axios.get(API_ENDPOINT.LIST);
    const { data } = response;
    return data.restaurants;
  }

  static async detailRestaurantDb(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    const { data } = response;
    return data.restaurant;
  }
}

export default RestaurantDb;
