const sendData = () => {
  const email = document.getElementById("email").value.trim();
  const code = document.getElementById("code").value.trim();
  const phone = document.getElementById("phone").value.trim();
  let valid = true;
  if (
    email === "" ||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    valid = false;
    document.getElementById("email").classList.add("invalid");
  }
  if (
    phone === "" ||
    code === "" ||
    !/^\d+$/.test(phone) ||
    phone.length !== 10
  ) {
    console.log(
      phone === "",
      code === "",
      !/^\d+$/.test(phone),
      phone.length !== 10
    );
    valid = false;
    document.getElementById("phone").classList.add("invalid");
  }
  if (valid) {
    window.open(
      `./thanks.html?email=${email}&code=${code}&phone=${phone}`,
      "_self"
    );
  }
};
const init = () => {
  M.AutoInit();
  document.getElementById("submit").onclick = sendData;
};
window.onload = () => {
  init();
};
