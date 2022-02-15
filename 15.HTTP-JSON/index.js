
// let url = 'https://api.monobank.ua/bank/currency';
// let response = fetch(url);
// response.then(value => console.log(value));
// console.log(response);

let baseUrl = 'https://jsonplaceholder.typicode.com';

// const getUsers = async () => {
// 	let url = `${baseUrl}/users`;
// 	let response = await fetch(url);
// 	let json = await response.json();
// 	console.log(response);
// 	console.log(json); 
// }

const getUsers = async () => {
  let url = `${baseUrl}/users`;
	let body = {
		id: '18481861',
		name: 'Vasyl',
		username: 'Doroshenko',
	}
	let bodyJson = JSON.stringify(body);

  let response = await fetch(url, {
		method: 'POST',
		body: bodyJson,
	});

  let json = await response.json();
  // console.log(response);
  console.log(json);
};

getUsers();



// https://www.youtube.com/watch?v=8OgQdlQzA-U&list=PLvaxnpPm_Z5LFxlTOETFpWAjxWueMiMb3&index=8

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

// https://docs.google.com/document/d/1ApQzDtOEe-dxjrA7BjGJpaFjIzj__CzE_sKbX6A1APw/edit

// http://old.code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html