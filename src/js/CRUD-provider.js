const crudUrl = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const resp = await fetch(`${crudUrl}/${id}`);
  const data = await resp.json();

  return data;
};

const createUser = async (usuario) => {
  const resp = await fetch(crudUrl, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp.json();
};

export { getUser, createUser };
