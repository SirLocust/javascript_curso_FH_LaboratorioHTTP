import getJoke from './http-provider';

const { body } = document;
let btnJokes;
let olList;
const CreateJokesHtml = () => {
  const html = `  <h1>Chistes</h1>
    <hr />
    <button type="button" name="" id="" class="btn btn-primary">
        new Joke
    </button>
    <ol class="mt-2 list-group ">
    </ol>
    `;
  const divJokes = document.createElement('div');
  divJokes.innerHTML = html;
  body.appendChild(divJokes);
};

const drawJoke = (joke) => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
  olItem.classList.add('list-group-item', 'bg-dark');
  olList.appendChild(olItem);
};

const events = () => {
  olList = document.querySelector('ol');
  btnJokes = document.querySelector('button');

  btnJokes.addEventListener('click', async () => {
    btnJokes.disabled = true;
    drawJoke(await getJoke());
    btnJokes.disabled = false;
  });
};

export default function init() {
  CreateJokesHtml();
  events();
}
