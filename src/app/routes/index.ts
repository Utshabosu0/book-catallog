import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/Books/Book.route';
import { UserRoutes } from '../modules/User/user.route';
import { CategoryRoute } from '../modules/Category/category.route';
import { ProfileRoutes } from '../modules/profile/profile.route';
import { OrderRoutes } from '../modules/order/order.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoute,
  },
  {
    path: '/books',
    routes: BookRoutes,
  },
  {
    path: '/orders',
    routes: OrderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
