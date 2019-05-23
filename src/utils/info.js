
const userInfo = 'Admin-Info';

function getUser() {
  let userStr = window.localStorage.getItem(userInfo);
  if(userStr){
    return JSON.parse(userStr);
  }
  return null;
}

function setUser(user) {
  let userStr = JSON.stringify(user);
  window.localStorage.setItem(userInfo,userStr);
}

function removeUser() {
  window.localStorage.removeItem(userInfo);
}

export {
  getUser,
  setUser,
  removeUser
}
