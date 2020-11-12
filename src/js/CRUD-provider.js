const crudUrl = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const resp = await fetch(`${crudUrl}/${id}`);
  const data = await resp.json();

  return data;
};

export { getUser };
