function checkPassword() {
  const pwd = document.getElementById("password").value;
  let strength = 0;

  if (pwd.length >= 8) strength++;
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
  if (/\d/.test(pwd)) strength++;
  if (/[\W_]/.test(pwd)) strength++;

  let result = "";
  switch (strength) {
    case 0:
      result = "Very Weak";
      break;
    case 1:
      result = "Weak";
      break;
    case 2:
      result = "Moderate";
      break;
    case 3:
      result = "Strong";
      break;
    case 4:
      result = "Very Strong";
      break;
  }

  document.getElementById("result").innerText = `Strength: ${result}`;
}
