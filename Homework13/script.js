const users = {
    admin: 'root',
    user: '123',
    Gombo: '2602',
    Arsalan: '0908'
};


const login = prompt('Введите логин');
 if (users[login]!== undefined) {
  const pass = prompt('Введите пароль');
  if (pass === users[login]) {
    alert ('Access Granted');
    
  } else if (pass === null || pass === '') {
    alert('Incorrect password');
    
  } else {
    alert('Wrong password');
  }
} else if (login === null || login === '') {
  alert('Unauthorized user');
  }

