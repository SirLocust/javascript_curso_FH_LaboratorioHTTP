const { getUsers } = require('./http-provider');

const { body } = document;
let tBody;

const createHtml = () => {
  const html = `
  <table class="table text-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `;
  const div = document.createElement('div');
  div.innerHTML = html;

  body.appendChild(div);
  tBody = document.querySelector('tbody');
};

const drawUser = (user) => {
  const trDraw = `
  <th scope="row">${user.id}</th>
  <td>${user.email}</td>
  <td>${user.first_name} ${user.last_name}</td>
  <td>
    <img class="img-thumbnail" src="${user.avatar}"
  </td>
  `;
  const tr = document.createElement('tr');
  tr.innerHTML = trDraw;
  tBody.appendChild(tr);
};

const init = async () => {
  createHtml();
  const users = await getUsers();
  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    drawUser(user);
  }
};

export { init as default };
