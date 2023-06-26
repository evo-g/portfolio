function findStartDate(startDate) {
  // Get the current date
  var currentDate = new Date();

  // Convert the start date to a Date object
  var startDateObj = new Date(startDate);

  // Calculate the time difference in milliseconds
  var timeDiff = currentDate.getTime() - startDateObj.getTime();

  // Calculate the time difference in seconds, minutes, hours, and days
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  let years = Math.floor(days/ 365)

  // Format the time difference in a "time ago" format
  if (years > 0) {
    return `${years} years`
  } else if (days > 0) {
    return days + " day(s) ago";
  } else if (hours > 0) {
    return hours + " hour(s) ago";
  } else if (minutes > 0) {
    return minutes + " minute(s) ago";
  } else {
    return "Just now";
  }
}

export const mainTechnologies = [
  {
    id: 1,
    title: 'JavaScript',
    alt: 'javaScript',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 2,
    title: 'CSS',
    alt: 'css',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 3,
    title: 'HTML',
    alt: 'html',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 4,
    title: 'React.js',
    alt: 'reactjs',
    experience: findStartDate('2018-03-01')
  },
  {
    id: 5,
    title: 'Node.js',
    alt: 'nodejs',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 6,
    title: 'Express.js',
    alt: 'expressjs',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 7,
    title: 'MongoDB',
    alt: 'mongodb',
    experience: '2 years'
  },
  {
    id: 8,
    title: 'Redux',
    alt: 'redux',
    experience: '3 years'
  },
  {
    id: 9,
    title: 'Heroku',
    alt: 'heroku',
    experience: '2 years'
  },
  {
    id: 10,
    title: 'Parcel.js',
    alt: 'parcel',
    experience: '3 years'
  },
  {
    id: 11,
    title: 'Netlify',
    alt: 'netlify',
    experience: '3 years'
  },
  {
    id: 12,
    title: 'ES6',
    alt: 'es6',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 13,
    title: 'Git',
    alt: 'git',
    experience: '4 years'
  },
  {
    id: 14,
    title: 'ServiceNow',
    img: null,
    alt: 'service now platform',
    experience: '2 years'
  },
];

export const servicesMedium = [
  {
    id: 1,
    title: 'Expo',
    alt: 'expo',
    experience: '1 1/2 years'
  },
  {
    id: 2,
    title: 'Webpack',
    alt: 'webpack',
    experience: '1 1/2 years'
  },
  {
    id: 3,
    title: 'Mongoose',
    alt: 'mongoose',
    experience: '1 1/2 years'
  },
  {
    id: 5,
    title: 'loopback',
    alt: 'loopback',
    experience: '1 1/2 years'
  },
  {
    id: 6,
    title: 'JQuery',
    alt: 'jquery',
    experience: '1 year'
  },
  {
    id: 7,
    title: 'Socket.io',
    alt: 'socket.io',
    experience: '1 years'
  },
  {
    id: 8,
    title: 'MySQL',
    alt: 'mysql',
    experience: '1 1/2 years'
  },
  {
    id: 9,
    title: 'React-Native',
    alt: 'react-native',
    experience: '1 1/2 years'
  },
  {
    id: 10,
    title: 'Cypress.js',
    img: null,
    alt: 'cypress.js',
    experience: '1 year'
  },
  {
    id: 11,
    title: 'Figma',
    img: null,
    alt: 'figma',
    experience: '2 years'
  },
];

export const familiarServices = [
  {
    id: 1,
    title: 'Docker',
    img: null,
    alt: 'docker',
    experience: '1 year'
  },
  {
    id: 2,
    title: 'MobX',
    img: null,
    alt: 'mobx',
    experience: '1/2 year'
  },
  {
    id: 3,
    title: 'Circle-Ci',
    img: null,
    alt: 'circle-ci',
    experience: '1 year'
  },
  {
    id: 4,
    title: 'Puppeteer',
    img: null,
    alt: 'puppeteer',
    experience: 'Actively learning'
  },
  {
    id: 5,
    title: 'TailWindCSS',
    img: null,
    alt: 'tail wind CSS',
    experience: 'Actively learning'
  },
  {
    id: 6,
    title: 'Shopify',
    img: null,
    alt: 'shopify',
    experience: 'Actively learning'
  },
  {
    id: 7,
    title: 'The Open CLI Framework',
    img: null,
    alt: 'The Open CLI Framework',
    experience: '1 month'
  },
  {
    id: 8,
    title: 'Vite.js',
    img: null,
    alt: 'Vite.js',
    experience: 'Actively learning'
  }
]
