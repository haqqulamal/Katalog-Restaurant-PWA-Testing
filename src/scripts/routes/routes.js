import Home from '../views/pages/home';
import Detail from '../views/pages/details';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '*': 'NotFound',
};

export default routes;
