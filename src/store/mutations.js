
export default {
  updateSwitcher:function (state, payload) {
    state.switcher = payload.switcher;
    window.localStorage.setItem('switcher', payload.switcher);
  }
}
