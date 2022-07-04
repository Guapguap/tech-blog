const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postsRoutes = require('./posts-routes');
const commentsRoutes = require('./comments-routes');
router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;