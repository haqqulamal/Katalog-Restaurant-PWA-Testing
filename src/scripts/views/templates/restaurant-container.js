import API_ENDPOINT from '../../globals/api-endpoint';

const restaurantData = (restaurantItem) => `
  <div class="list-katalog">
  <img crossorigin="anonymous" class="gambar lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurantItem.pictureId}" alt="restaurant">
    <div class="kota">${restaurantItem.city}</div>
    <div class="item-content">
        <div class="rating">Rating: <span class="rating-value">${restaurantItem.rating}</span></div>
          <h1 class="judul"><a href="#/detail/${restaurantItem.id}">${restaurantItem.name}</a></h1>
        <div class="deskripsi">${restaurantItem.description.substring(0, 80)}...</div>
    </div>
  </div>
  `;

export default restaurantData;
