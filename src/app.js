import './app.css';
import { getUsers } from './js/http-provider';
// import init from './js/chistes-page';
import init from './js/users-page';
getUsers().then(console.table);
init();
