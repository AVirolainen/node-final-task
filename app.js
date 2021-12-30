const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()

app.use(express.json({extended: true}))
const PORT = config.get('port') || 5000

app.use('/api/hello', require("./routes/hello.routes"))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
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