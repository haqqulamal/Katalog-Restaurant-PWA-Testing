/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestoContract';
import RestaurantDataIDB from '../src/scripts/data/restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantDataIDB.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantDataIDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantDataIDB);
});
