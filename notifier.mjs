import notifier from "node-notifier";
import fs from 'fs';
import * as path from 'path';


const __dirname = path.dirname(new URL(import.meta.url).pathname);

// var notifier = new Growl({
//   name: 'Growl Name Used', // Defaults as 'Node'
//   host: 'localhost',
//   port: 23053
// });

// notifier.notify({
//   title: 'Foo',
//   message: 'Hello World',
//   icon: fs.readFileSync(__dirname + '/testLogo.png'),
//   wait: false, // Wait for User Action against Notification

//   // and other growl options like sticky etc.
//   sticky: false,
//   label: undefined,
//   priority: undefined
// });

// const notifier = require('node-notifier');
// String

import cluster from 'cluster';

notifier.notify('Message');

// Object
notifier.notify({
  title: 'My notification',
  message: 'Hello, there!',
  icon: fs.readFileSync(__dirname + '/testLogo.png'),
});