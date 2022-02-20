// const country = prompt('Select your country, please.');

const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

// const checkTrue = countryList.includes(`${country}`);
// console.log(checkTrue);

// if (checkTrue === true) {
// 	// alert('Selected country is ', country);
// 	console.log(`Country ${country} exists. Thank you!`)
// 	// document.getElementById('txt1').innerHTML = 'Selected country is: ' + country;
// 	document.getElementById('txt1').innerHTML = `Selected country is: ${country}`;
//   // setTimeout(myFunction, 0);
// } else {
// 	// alert('Sorry, this country does not exist.')
// 	console.log(`Sorry, this country ${country} does not exist.`);
// 	// document.getElementById('txt1').innerHTML = 'Sorry, that ' + country + ' does not exist';
// 	document.getElementById('txt1').innerHTML = `Sorry, that ${country} does not exist`;
//   // setTimeout(myFunction, 0);
// };

// let baseUrl =
//   'https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid={}';

// const getWeather = async () => {
// 	let url = baseUrl;
// 	let response = await fetch(url);
// 	let json = await response.json();
// 	// console.log(response);
// 	console.log(json);
// }

// getWeather();

const locationInfo = document.getElementById('demo');
const weatherInfo = document.getElementById('txt1');
const main_info = document.getElementById('main_info');
const date = document.getElementById('date');
const icon = document.getElementById('small_icon');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationInfo.innerHTML = 'Geolocation is not supported by this browser.';
  }
}
function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  // locationInfo.innerHTML = `Latitude:
  //   ${lat}
  //   <br> Longitude:
  //   ${long}`;
  let currentLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=ua&appid={}`;
  console.log(currentLocation);
  // weatherInfo.innerHTML = `this is weather ${currentLocation}`;
  const getCurrentWeather = async () => {
    let url2 = currentLocation;
    let response2 = await fetch(url2);
    let json2 = await response2.json();
    console.log(json2);
    console.log(json2.weather[0].description);
    // console.log(json2.weather[0].icon);
    // let iconDesc = json2.weather[0].icon;
    // console.log(iconDesc);

    weatherInfo.innerHTML = `
		This is weather info:
    <br> Description: ${json2.weather[0].description}
    <br> Temp: ${json2.main.temp}
		<br> Humidity: ${json2.main.humidity}
		<br> Pressure: ${json2.main.pressure}
		<br> Wind speed: ${json2.wind.speed}
		`;

    main_info.innerHTML = `Lviv, ${json2.sys.country}`;
    const dateTime = new Date().toLocaleString();
    date.innerHTML = `${dateTime}`;
    
    let iconDesc = '02d'
    switch (iconDesc) {
      case '01d':
        console.log('☀️');
        break;
      case '02d':
        console.log('🌤️');
        break;
      case '03d':
        console.log('☁️');
        break;
      case '04d':
        console.log('☁️');
        break;
      case '09d':
        console.log('🌧️');
        break;
      case '10d':
        console.log('🌦️');
        break;
      case '11d':
        console.log('🌩️');
        break;
      case '13d':
        console.log('❄️');
        break;
      case '50d':
        console.log('🌫️');
        break;
      default:
        console.log(`Sorry, we are out of ${iconDesc}.`);
    }
    icon.innerHTML = `${iconDesc}`;

  };
  getCurrentWeather();
}

// getCurrentWeather();

// console.log(lat)
/////////////
// function thisLocation() {
// 	navigator.geolocation.getCurrentPosition(success, error);

//   function success(coordinates) {
//     const latit = coordinates.coords.latitude;
//     const longit = coordinates.coords.longitude;
//     console.log(latit, longit);
//   }

//   function error(err) {
//     if (err.code == 1) {
//       alert('Error: Access is denied!');
//     } else if (err.code == 2) {
//       alert('Error: Position is unavailable!');
//     }
//   }
// }

// thisLocation();

// console.log(coordinates);

// let currentLocation =
//   'https://api.openweathermap.org/data/2.5/weather?lat=50.0105216&lon=28.6294016&appid={}';

// let currentLocation =
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longit}&appid={}`;

// const getCurrentWeather = async () => {
//   let url2 = currentLocation;
//   let response2 = await fetch(url2);
//   let json2 = await response2.json();
//   // console.log(response);
//   console.log(json2);
// };

// getCurrentWeather();

// const getIcon = (icon) => {
//   switch (icon.slice(0, -1)) {
//     case '01d':
//       return '☀️';
//     case '02d':
//       return '🌤️';
//     case '03d':
//       return '☁️';
//     case '04d':
//       return '☁️';
//     case '09d':
//       return '🌧️';
//     case '10d':
//       return '🌦️';
//     case '11d':
//       return '🌩️';
//     case '13d':
//       return '❄️';
//     case '50d':
//       return '🌫️';
//   }
// };
