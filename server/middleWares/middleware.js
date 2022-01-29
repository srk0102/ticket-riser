const signupMiddleWare = (req, res, next) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePassword = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
  const data = req.body
  if(data!==undefined){
    if(reEmail.test(String(data.email).toLowerCase()) && rePassword.test(String(data.password))){
      next()
    }else{
      next('route')
    }
  }else{
    next('route')
  }
}

module.exports = {signupMiddleWare}