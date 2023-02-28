const express = require('express');
const app = express();
const verificationRoutes = require('./routes/verificationRoutes');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//app.use('/bundle',  verificationRoutes);
app.get('/bundle', (req, res) => {
    res.status(200).json({
        code: "200"
    })
})

app.listen(3010, () => {
    console.log("Server is running at 3010");
})