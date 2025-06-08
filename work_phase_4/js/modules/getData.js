/**
 * fetchGetData: 发送 GET 请求并返回 JSON 数据 / Send a GET request and return parsed JSON
 * @param {string} url - 请求的地址 / The URL to fetch data from
 * @param {Object} headers - 可选的请求头 / Optional request headers
 * @returns {Promise<Object|null>} 解析后的 JSON 对象，失败时返回 null / Parsed JSON object, or null on error
 */
const fetchGetData = (url, headers = {}) => {
  // 调用 fetch 发起 GET 请求 / Use fetch to send a GET request
  return fetch(url, {
    method: 'GET',     // 请求方法：GET / HTTP method: GET
    headers: headers,  // 请求头 / Request headers
  })
    .then(response => {
      // 检查响应状态 / Check if response status is OK (200–299)
      if (!response.ok) {
        // 抛出错误以进入 catch 分支 / Throw error to trigger catch block
        throw new Error('Server returned an error.');
      }
      // 解析并返回 JSON / Parse and return JSON
      return response.json();
    })
    .catch(error => {
      // 输出错误日志 / Log error to console
      console.error('Error fetching data:', error);
      // 返回 null 表示请求失败 / Return null to indicate failure
      return null;
    });
};

// 导出 fetchGetData 函数以便其他模块使用 / Export fetchGetData for use in other modules
export { fetchGetData };
