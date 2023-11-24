const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./routes/UserRoutes')

const port = 5000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/netflix',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected succcessfuly")
})

app.use(cors());
app.use(express.json());

app.use("/api/user",User)



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })