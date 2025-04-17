// patches.js
const { StatusBar } = require('react-native');
global.StatusBar = StatusBar || {};
import { API_URL, API_KEY } from '@env';

console.log(API_URL); // https://api.example.com