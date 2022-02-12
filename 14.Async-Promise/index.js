let isError = false;
const setError = () => {
	isError = true;
};

let user = null;
const setUser = (newUser) => {
	user = newUser;
}
//
getUserCb('users-1', (user, error) => {
	if (error) {
		return setError();
	} else {
		setUser(user)
	}
});

let getUserPromise = new Promise((resolve, reject) => {

})




// https://www.youtube.com/watch?v=Tr82mUcLNO0&list=PLvaxnpPm_Z5LFxlTOETFpWAjxWueMiMb3&index=9
// https://docs.google.com/document/d/1GYB7jT0vCeNm7C9WI02FkL9-85VdxfZaA-UP4VcWksM/edit

// http://old.code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html