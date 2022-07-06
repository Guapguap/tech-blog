const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
// const authorize = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(postData => res.json(postData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

module.exports = router;