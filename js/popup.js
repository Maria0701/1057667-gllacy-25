var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".close");
var overlayClose= document.querySelector(".overlay");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=email]");
var userMessage = popup.querySelector("[name=message]");
var form = popup.querySelector(".feedback_form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName")
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
      userName.value=storage;
      userEmail.focus();
    } else {
      userName.focus();
    }
})
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
overlayClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
})

form.addEventListener("submit", function (evt) {
  if (!userName || !userEmail || !userMessage) {
        evt.preventDefault();
        popup.classList.add("modal-error");
      } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value );
      }
    }
  })

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      }
    }
  })
