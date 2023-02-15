var userList;
const _userListDiv = "userList";
const _outputDiv = "outputDiv";
window.onload = async () => {
  M.AutoInit();
  nunjucks.configure("./templates", { autoescape: true });
  userList = await getList();
  renderData(userList);
  getUser(1);
};

const getList = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .catch((e) => {
      document.getElementById(
        _userListDiv
      ).innerHTML = `<li class="collection-item avatar red-text">Retrieving failed with message - ${e.message}</li>`;
    });

const renderData = (data) => {
  const html = nunjucks.render("list.html", { data });
  document.getElementById(_userListDiv).innerHTML = html;
};
const getUser = (id) => {
  const user = userList.find((item) => item.id == id);
  const html = nunjucks.render("data.html", user);
  document.getElementById(_outputDiv).innerHTML = html;
};
