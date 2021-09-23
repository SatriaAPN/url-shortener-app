const router = require('express')();
const path = require('path');

router.use('/api/shorturl', require('./shorturl'));

router.use('/', (req, res, next ) => {
    res.status(200).sendFile(path.join(__dirname, '../../../views/public/home.html'));
});


module.exports = router;