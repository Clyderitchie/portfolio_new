const router = require('express').Router();
const { Admin } = require('../models');

router.get('/', async (req, res) => {
    try {
       const homepage = await Admin.findAll();
       const homepageData = homepage.map(p => p.get({ plain: true }));
       res.render('homepage', {
        homepageData
       }) 
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message)
    }
});

module.exports = router;