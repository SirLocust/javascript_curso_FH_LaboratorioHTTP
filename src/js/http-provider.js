const jokeUrl = 'https://api.chucknorris.io/jokes/random';

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

export { getJoke as default };
