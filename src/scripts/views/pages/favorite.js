import restaurantData from '../templates/restaurant-container';
import '../../components/jumbotron';
import RestaurantDataIDB from '../../data/restaurant-idb';

const Favorite = {
  async render() {
    return `
    <div class="explore">
    <h1>Favorite</h1>
    <h3 class="kosong"></h3>
    <div class="list" id="lists"></div>
</div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    console.log(restaurants);
    // eslint-disable-next-line no-unused-vars
    const empty = document.querySelector('.kosong');

    if (restaurants.length === 0) {
      // eslint-disable-next-line no-undef
      empty.innerHTML = `
      Tidak ada favorite restaurant yang ditampilkan
      `;
    }
    let dataList = '';
    restaurants.forEach((item) => {
      dataList += restaurantData(item);
    });

    document.querySelector('#lists').innerHTML = dataList;
  },
};

export default Favorite;
