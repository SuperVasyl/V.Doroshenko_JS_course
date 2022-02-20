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
  };
  let bodyJson = JSON.stringify(body);

  let response = await fetch(url, {
    method: 'POST',
    body: bodyJson,
    headers: {
      Authorization: 'x-token-123456789',
    },
  });

  let json = await response.json();
  // let json = await response.blob(); //another different ways to take data from server
  // let json = await response.text();
  // console.log(response);
  console.log(json);

  // let response1 = await fetch('https://api.monobank.ua/personal/client-info');
  // let json1 = await response1.json();
  // console.log(json1);
};

getUsers();

// https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid={}
//dayly forecast for Lviv

// https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&lang=ua&appid={}
//forecast with ucrainian languages and metric temperature

// https://www.youtube.com/watch?v=8OgQdlQzA-U&list=PLvaxnpPm_Z5LFxlTOETFpWAjxWueMiMb3&index=8

// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=1 //js course minin

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

// https://docs.google.com/document/d/1ApQzDtOEe-dxjrA7BjGJpaFjIzj__CzE_sKbX6A1APw/edit

// http://old.code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html
