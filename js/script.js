////////////////////////Открытие главного меню
var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn');

navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
////////////////////////////////////////////////////

////////////////////////Открытие модальных окон формы
var entryForm = document.querySelector(".contest__form");
var name = entryForm.querySelector("[name=name]");
var email = entryForm.querySelector("[name=email]");
var modalReport = document.querySelector(".modal-report");
var modalFail = document.querySelector(".modal-report--fail");
var modalWin = document.querySelector(".modal-report--win");
var modalOk = modalReport.querySelector("[name=ok]");

entryForm.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    modalFail.classList.add("modal-report--opened");
  }
});

modalOk.addEventListener("click", function(event) {
  event.preventDefault();
  modalFail.classList.remove("modal-report--opened");
});
////////////////////////////////////////////////////
