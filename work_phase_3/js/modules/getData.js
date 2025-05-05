// js/modules/getData.js

const fetchGetData = (url, headers = {}) => {
    return fetch(url, {
      method: 'GET',
      headers: headers
    })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .catch(error => {
      console.error('Fetch GET 错误：', error);
      return null;
    });
  };
  
  export { fetchGetData };
  