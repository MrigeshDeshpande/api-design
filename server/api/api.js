var router=require('express').Router();

//api router will mount other routers for all resources

//Each resource directory has a resourceRoutes.js -> require them and mount them to their respective routes

router.use('/users',require('./user/userRoutes'));
router.use('/categories',require('./category/categoryRoutes'));
router.use('/posts',require('./post/postRoutes'));

module.exports=router;