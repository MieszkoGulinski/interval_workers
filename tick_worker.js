// Workaround against setInterval 

function postTick() {
  postMessage("tick")
}
setInterval(postTick, 300)
