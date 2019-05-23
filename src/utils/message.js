import {Message} from "element-ui";

function alertMsg(msg) {
  Message({
    message: msg,
    type: 'success'
  })
}

function alertMsg(msg,time) {
  Message({
    message: msg,
    type: 'success',
    duration: time
  })
}

function alertSuccessMsg(msg) {
  Message({
    message: msg,
    type: 'success',
    showClose: true,
  })
}

function alertSuccessMsg(msg,time) {
  Message({
    message: msg,
    type: 'success',
    duration: time
  })
}

function alertErrorMsg(msg) {
  Message({
    message: msg,
    type: 'error'
  })
}

function alertErrorMsg(msg,time) {
  Message({
    message: msg,
    type: 'error',
    duration: time
  })
}

export {
  alertMsg,
  alertErrorMsg,
  alertSuccessMsg
}
