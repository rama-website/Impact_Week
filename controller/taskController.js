const fs = require('fs');
const feed = (req, res)=>{
    res.render('homePage')
}

const homePage = (req, res) => {

    res.render('signin', {
        error: ""
    })
}


module.exports = {
    homePage,
    feed
    
}