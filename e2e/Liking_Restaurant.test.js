/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.explore', 5); // Tunggu hingga elemen muncul, maksimum 5 detik
  I.seeElement('.explore');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.kosong');
});
Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.kosong');
  I.amOnPage('/');
  I.seeElement('.judul a');
  const firstRestaurant = locate('.judul a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.judul a');
  const likedRestaurantTitle = await I.grabTextFrom('.judul a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  // unliking the restaurant
  I.waitForElement('.judul a', 5);
  I.seeElement('.judul a');
  I.click('.judul a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.explore');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.kosong');
});
