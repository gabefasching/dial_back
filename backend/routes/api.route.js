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
        //   q :  ht + ' filter:images'
        // q : ht
          q : "#retrogame filter:images",
          // filter:images
    
        })
        res.send(pics)

    } catch(error) {
        console.log(error.message)
        next(error)
    }
    // const ht = '#retrogames'
    // const pics = await client.get('trends/place.json', {
    //   id : 1
    //   // filter:images

    // })
    // res.send(pics['statuses']['retweeted_status']['entities']['media']['media_url_https'])
    // res.send(client.get('trends/place.json'))
    // res.send(pics)
    // res.send('ht')
})

//  gets pictures
//  router.get('/', async(req, res, next) => {
//      res.send({ message: 'Ok api is working'})
//  })

module.exports = router;
