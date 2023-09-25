import express from 'express';
import { BookRoutes } from '../modules/Books/Book.route';
import { CategoryRoute } from '../modules/Category/category.route';
import { UserRoutes } from '../modules/User/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ProfileRoutes } from '../modules/profile/profile.route';

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
