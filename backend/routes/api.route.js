const router = require('express').Router();

const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})


// gets pictures
router.get('/pictures', async(req, req, next) => {
    const ht = req.query.hashtag;
    const pics = await client.get('search/tweets.json', {
      ht,
      filter:images

    })
    res.send(pics);
});

//  gets pictures
 router.get('/', async(req, req, next) => {
     res.send({ message: 'Ok api is working'});
 });

module.exports = router;
