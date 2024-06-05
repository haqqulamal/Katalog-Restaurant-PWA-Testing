import RestaurantDb from '../../data/restaurant-source';
import restaurantData from '../templates/restaurant-container';
import '../../components/jumbotron';

const Home = {
  async render() {
    return `
    <div class="explore">
                <h1>Find More</h1>
                <div class="list" id="lists"></div>
            </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.getRestaurantDb();
    let dataList = '';
    restaurants.forEach((item) => {
      // console.log(item.pictureId);
      // eslint-disable-next-line spaced-comment
      //restaurantList.insertAdjacentHTML('beforeend', restaurantData(item));
      dataList += restaurantData(item);
    });
    document.querySelector('#lists').innerHTML = dataList;
  },
};

export default Home;
