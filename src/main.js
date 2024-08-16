import './styles/main.css'

import { createApp } from 'vue'
import moment from 'moment';
import App from './App.vue'
import router from './router'

(function () {
  const currentUrl = window.location.href;

  // Define the base URL for your GitHub Pages site
  const baseUrl = 'https://izainulabideen.github.io/pagecms';

  // Check if the URL starts with the base URL but doesn't have the correct path
  if (!currentUrl.startsWith(baseUrl)) {
    // Redirect to the correct base URL
    window.location.href = baseUrl + window.location.pathname + window.location.search;
  }

  // Alternatively, if you want to append a specific path to all URLs:
  // const newPath = '/pagecms' + window.location.pathname;
  // if (!window.location.pathname.startsWith('/pagecms')) {
  //   window.location.href = baseUrl + newPath + window.location.search;
  // }
})();


function fromNow(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
  return '';
}

function fileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const app = createApp(App)

app.use(router)

app.config.globalProperties.$filters = { fromNow, fileSize };

app.mount('#app')