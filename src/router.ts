import express from 'express';

const router = express.Router();

const loadRoutes = async () => {
  const routes = [
    './components/users/user.route'
  ];

  for (const routePath of routes) {
    const { default: route } = await import(routePath);
    router.use(route);
  }
};

loadRoutes().catch(err => {
  console.error('Error loading routes:', err);
});

export default router;