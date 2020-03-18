const { Router } = require('express')
const router = Router()

const webPush = require('../webpush')
let pushSubscription

router.post('/subscription', (req, res) => {
    pushSubscription = req.body
    res.status(200).json()
})

router.post('/new-message', async (req, res) => {

    const { message } = req.body

    const payload = JSON.stringify({
        title: 'My custom Notification',
        message: message
    })

    try {
        await webPush.sendNotification(pushSubscription, payload)
        res.send(200).json()
    } catch (error) {
        console.log(error)
    }
})



module.exports = router