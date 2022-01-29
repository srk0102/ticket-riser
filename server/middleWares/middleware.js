const signupMiddleWare = (req, res, next) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePassword = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
  const data = req.body
  console.log(data);
  if(Object.keys(data).length !== 0){
    if(reEmail.test(String(data.email).toLowerCase()) && rePassword.test(String(data.password)) && data.userName){
      next()
    }else{
      next('email or password are not matching the validation or UserName is missing')
    }
  }else{
    next('Cannot push empty data into to DB')
  }
}

module.exports = {signupMiddleWare}