let isError = false;
const setError = function () {
  isError = true;
};

let user = null;
const setUser = function (newUser) {
  user = newUser;
};
//callback
const getUserInfo = (Id, name, someBase) => {
  someBase(`Data about user:
	userId: ${Id}
	name: ${name}`);
};

getUserInfo('User-1', 'Anton', (user, error) => {
  if (error) {
    console.log('It is error => ', error);
    return setError();
  } else {
    setUser(user);
  }
});

console.log(user); //null
console.log(isError); //false

//Promise
const getUsersPromise = (userId) => {

}

const p = new Promise(function(resolve, reject) {

})
//
const getUserCb = (number, cb) => {
  if (number > 5) {
    cb('You have won');
  } else {
    cb('less then this number');
  }
};

getUserCb(1, (success, error) => {
  if (error) {
    console.log('error => ', error);
  } else {
    console.log('success => ', success);
  }
});

const getUserPromise = (number) => {
	return new Promise((res, rej) => {
		getUserCb(1, (success, error) => {
			if (number > 5) {
				res('success =>', success);
			} else {
				rej('Sad, it is error and less then 5 => ', error);
			}
		})
	})
};
getUserPromise(8)
  .then((success) => {
    console.log('Hey, success => ', success);
  })
  .catch((error) => {
    console.log('Oh, error => ', error);
  });
