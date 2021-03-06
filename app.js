require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json({extended: true}))
const PORT = 5000

app.use('/weather', require("./routes/weather.routes"))

async function start() {
    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(process.env.PORT || PORT, () => {
            console.log(`app has been started on port ${PORT}`)
        })
    }
    catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }   
}

start()