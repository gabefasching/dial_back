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
    // const ht = req.query.hashtags
    const ht = '#retrogames'
    // const pics = await client.get('trends/place.json', {
    //   id : 1
    //   // filter:images

    // })
    const pics = await client.get('search/tweets.json', {
      // q :  '#' + ht + ' filter:images'
      q : ht,
      // filter:images

    })
    // res.send(pics['statuses']['retweeted_status']['entities']['media']['media_url_https'])
    // res.send(client.get('trends/place.json'))
    res.send(pics)
    // res.send('ht')
    // res.send(req.query)
})

//  gets pictures
 router.get('/', async(req, res, next) => {
     res.send({ message: 'Ok api is working'})
 })

module.exports = router;
