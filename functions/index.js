const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HeXZCBHhe5b3zt2K8Gj4O6ovLEpUirXZdZQEmJnUdhOkzEE9mEphrFLG1wDFbKSEij4C02abzttrCJw4le4JQVB00PiYSc8MR')
//stripe secret key: sk_test_51HeXZCBHhe5b3zt2K8Gj4O6ovLEpUirXZdZQEmJnUdhOkzEE9mEphrFLG1wDFbKSEij4C02abzttrCJw4le4JQVB00PiYSc8MR


//API


// App Config
const app = express()

//Middleware
app.use(cors({ origin: true }))
app.use(express.json())


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.get('/devon', (request, response) => response.status(200).send('Hi Devon'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('!Payment Request Received!', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-ac9eb/us-central1/api
