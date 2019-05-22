import {Message} from "element-ui";



function alertErrorMsg(msg) {
  Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000
  })
}

function alertSuccessMsg(msg) {
  Message({
    message: msg,
    type: 'success',
    duration: 3 * 1000
  })
}

export {
  alertErrorMsg,
  alertSuccessMsg
}
