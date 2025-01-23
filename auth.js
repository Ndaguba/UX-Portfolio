document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");
  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");

  const encryptedPassword = "34a6ba5311e78bf06711ab7541567317";

  function hashInput(input) {
    return CryptoJS.MD5(input).toString();
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.style.display = "none";

    const enteredPassword = passwordInput.value.trim();
    const hashedInput = hashInput(enteredPassword);

    if (encryptedPassword === hashedInput) {
      sessionStorage.setItem("password", hashedInput);
      modal.style.display = "none";
      window.location.href = "list.html";
      console.log("Password Correct!");
    } else {
      errorMessage.style.display = "block";
    }
  });

  if (sessionStorage.getItem("password") === encryptedPassword) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
});
