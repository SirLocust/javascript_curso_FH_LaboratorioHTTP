import './app.css';

import * as CRUD from './js/CRUD-provider';

CRUD.getUser(1).then(console.log);
CRUD.createUser({
  name: 'Fernando',
  job: 'Carpintero',
}).then(console.log);
