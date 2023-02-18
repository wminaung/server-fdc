localStorage.removeItem("auth");

const loginForm = document.forms.loginForm;
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameVal = loginForm.name.value;
  const emailVal = loginForm.email.value;
  console.log(nameVal, emailVal, "::::");
  if (!nameVal || !emailVal) {
    return;
  }
  const userInfo = { name: nameVal, email: emailVal };

  const res = await fetch(`${window.location.origin}/isAuthencate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const { status, key, userId, userName, message } = await res.json();

  if (status === "success") {
    console.log("key : ", key, " message :", message, userId);
    console.log("isRedirect : ", res.redirected);

    const auth = { key, userId, userName };
    window.localStorage.setItem("auth", JSON.stringify(auth));
    window.location.href = "/";
  } else {
    console.log(message);
  }
});
