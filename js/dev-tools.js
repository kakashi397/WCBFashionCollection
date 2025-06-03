/**
 * このスクリプトは Webサイト本体には関係ありませんが、
 * HTML構造を自動生成するため、プロジェクトには含めています。
 */

// galleryセクションのli要素を生成するスクリプト
const thumbnails = document.querySelector('.js-generateThumbnails');

for (let i = 1; i < 10; i++) {
  const content = `<li><img class="js-thumbnails" src="images/img${i}.jpg" alt=""></li>`;
  thumbnails.insertAdjacentHTML('beforeend', content);
};