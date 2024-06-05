import API_ENDPOINT from '../../globals/api-endpoint';

const restaurantData = (restaurantItem) => `
<div class="restaurant" tabindex="0">
    <div class="restaurant-image">
      <img crossorigin="anonymous" src=${API_ENDPOINT.RESTAURANT_IMAGE + restaurantItem.pictureId
} alt="restaurant food" />
    </div>
    <div class="restaurant-content">
      <a class="card-link-button" href="#/detail/${restaurantItem.id}">${restaurantItem.name
} - ${restaurantItem.city}</a>
    </div>
    <div class="restaurant-head">
      <p class="restaurant-rating">Rating: ${restaurantItem.rating}</p>
    </div>
    <p class="restaurant-desc">
      ${restaurantItem.description.substring(0, 80)}...
    </p>

  </div>
  </div >
    </div >
`;

const detailTemplate = (restaurantDetail) => `
<section class="detail">
<div class="main">
    <div class="detail-image">
    <img crossorigin="anonymous" src="${API_ENDPOINT.RESTAURANT_IMAGE}${
  restaurantDetail.pictureId
}" alt="${restaurantDetail.name}">
    </div>
    <div class="detail-text">
        <div class="wrapper">        
        <h1>${restaurantDetail.name}</h1>
  </button>
        <h2>Rating : ${restaurantDetail.rating}</h2>
        <h2>Alamat : ${restaurantDetail.address} ${restaurantDetail.city}</h2>
        </div>
        <p class="description">${restaurantDetail.description}</p>
    </div>  
    <div class="menus">
        <div class="detail-food">
        <h2>Food</h2>
            <ul class="food-list">
            ${restaurantDetail.menus.foods
    .map(
      (food) => `
                <li>${food.name}</li>
                `,
    )
    .join('')}
            </ul>
        </div> 
        <div class="detail-drink">
        <h2>Drink</h2>
            <ul class="drink-list">
            ${restaurantDetail.menus.drinks
    .map(
      (drink) => `
                <li>${drink.name}</li>
                `,
    )
    .join('')}
            </ul>
        </div> 
    </div>
    <div class="reviews">
    <h2>Review</h2>
    <div class="review-list">
    ${restaurantDetail.customerReviews
    .map(
      (review) => `
    <div class="review-item">
      <p class="review-item-user">${review.name}</p>
      <p class="review-item-text">${review.review}</p>
      <p class="review-item-date">${review.date}</p>
    </div>`,
    )
    .join('')}
  </div>
    </div>
</div>
<div id="favButtonContainer"></div>
</section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantData,
  detailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
