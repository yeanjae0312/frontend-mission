import ItemRepository from './ItemRepository';
import ItemWishRepository from './ItemWishRepository';
import ItemCartRepository from './ItemCartRepository';
import MyInfoRepository from './MyInfoRepository';

const repositories = {
  items: ItemRepository,
  wishItems: ItemWishRepository,
  cartItems: ItemCartRepository,
  myInfo: MyInfoRepository,
};
export default {
  get: (name) => repositories[name],
};
