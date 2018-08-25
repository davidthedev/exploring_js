let users = [
  {
    id: 1,
    forename: 'John',
    surname: 'Smith',
    username: 'jsmith01'
  },
  {
    id: 2,
    forename: 'Paul',
    surname: 'White',
    username: 'pwhite44'
  },
  {
    id: 3,
    forename: 'Jim',
    surname: 'Second',
    username: 'jimmy02'
  }
];

const newUser = {
  id: 4,
  forename: 'Geoff',
  surname: 'Rod',
  username: 'gd789'
};

function getUsers() {
  return users;
}

function addNewUser(newUser, cb) {
  users.push(newUser);

  return cb();
}

// we call addNewUser and pass in new user details and a callback
// the callback gets executed after the new user has been added
const allUsers = addNewUser(newUser, getUsers);

console.log(allUsers);
