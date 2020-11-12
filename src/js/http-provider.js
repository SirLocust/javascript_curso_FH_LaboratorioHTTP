const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';
const getJoke = async () => {
  try {
    const resp = await fetch(jokeUrl);
    if (!resp.ok) throw new Error('nose puedo realizar la peticion');
    // eslint-disable-next-line camelcase
    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUsers = async () => {
  const resp = await fetch(usersUrl);
  const { data: usuarios } = await resp.json();
  return usuarios;
};

export { getJoke, getUsers };
