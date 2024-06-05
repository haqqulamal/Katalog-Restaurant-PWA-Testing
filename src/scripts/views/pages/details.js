import RestaurantDataIDB from '../../data/restaurant-idb';
import RestaurantDb from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import { detailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `<div tabindex="0">
    <section id="detail-rest"></section>
    <div class="like" id="likeButtonContainer"></div>
  </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDb.detailRestaurantDb(url.id);

    const restaurantContainer = document.querySelector('#detail-rest');
    restaurantContainer.innerHTML = detailTemplate(
      restaurant,
    );

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: RestaurantDataIDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
