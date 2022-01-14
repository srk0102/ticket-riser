/**
 * This function will validate Email.
 * @param {String} data.
 * @returns Boolean if given string is perfect email or not.
 */
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return false
  }
  else {
    return true
  }
}

/**
 * This function will validate password.
 * @param {String} password.
 * @returns Boolean if given string is perfect password or not.
 */
const validatePassword = (password) => {
  const re = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
  if (!re.test(String(password))) {
    return false
  }
  else {
    return true
  }
}

/**
 * This function will validate User Name.
 * @param {String} userName 
 * @returns Boolean if given string is perfect User Name or not.
 */
const validateUserName = (userName) => {
  if (userName === "" || userName === undefined) {
    return false
  }
  else {
    return true
  }
}


/**
 * This function will validate email, password and userName.
 * @param {String} data data that need to be verified.
 * @param {String} type type of of data that need to be verified.
 * @returns boolean if data is validate or not
 */
export const validate = (data, type) => {
  switch (type) {
    case "email":
      return validateEmail(data)
    case "password":
      return validatePassword(data)
    default:
    case "userName":
      return validateUserName(data)
      break;
  }
}