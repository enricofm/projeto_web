const navigationHeight = document.querySelector('.navigation').offsetHeight
document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px")

document.getElementById("conta").onclick = function () {
  location.href = "login.html"
}