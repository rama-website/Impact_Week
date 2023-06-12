
const checkhomePage = (req, res, next) =>{
    
    console.log(req.header('cookie'))
next();
}

const checkFeedToken = (req, res, next) =>{
    
    console.log(req.header('cookie'))
    next();
}

module.exports={
    checkhomePage,
    checkFeedToken
}