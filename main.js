const express = require('express')
const app = express()
const port = 3000
let obj = {
    name:"anil",
    age:25,
    email:'anil@gmail.com',
    phno:23456784,
    addr:"tpt"
}
app.get('/', (req, res) => res.send(obj))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))