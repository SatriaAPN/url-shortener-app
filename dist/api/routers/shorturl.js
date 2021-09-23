const router = require('express')();
const { shorturl } = require('../controllers');

router.post('/', shorturl.postShortUrl);

router.get('/:uuid', shorturl.getShortUrl);

module.exports = router;