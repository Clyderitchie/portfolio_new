const router = require('express').Router();
const { Admin, Users, FizzBuzz } = require('../models');

router.get('/', async (req, res) => {
    try {
       const homepage = await Admin.findAll();
       const homepageData = homepage.map(p => p.get({ plain: true }));
       res.render('homepage', {
        homepageData
       }) 
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

router.get('/fizzBuzz', async (req, res) => {
    try {
        const fizzbuzzData = await FizzBuzz.findAll({ include: { model: Users}});
        const fizzBuzz = fizzbuzzData.map(p => p.get({ plain: true }));
        // const usernames = fizzBuzz.map(fb => fb.User && fb.User.username || '');
        console.log("Looking for username's: ", fizzBuzz);
        // console.log("usernames var returning: ", usernames);
        res.render('fizzBuzz', {
            fizzBuzz,
            // usernames
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

module.exports = router;