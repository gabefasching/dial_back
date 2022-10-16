const router = require('express').Router()

const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})


// gets pictures
router.get('/pictures', async(req, res, next) => {
    try {
        const ht = req.query.hashtag
        const pics = await client.get('search/tweets.json', {

          q : "#nintendo64 filter:images",
    
        })
        res.send(pics)

    } catch(error) {
        console.log(error.message)
        next(error)
    }
  
})


module.exports = router;
