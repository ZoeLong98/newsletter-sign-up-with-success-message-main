const input = document.querySelector("#sub");
input.addEventListener("click", function (e) {
  const status = document.getElementById("status");
  const email = document.getElementById("email");
  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(email.value)) {
    e.preventDefault();
    status.innerText = "Valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 80%, 90%)";
    email.style.color = "hsl(4, 100%, 67%)";
  } else if (email.value === "") {
    e.preventDefault();
  } else {
    localStorage.setItem("email", email.value);
  }
});
