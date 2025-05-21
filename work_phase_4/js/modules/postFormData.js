/**
 * postFormData: 发送包含表单数据的 POST 请求并返回响应的 JSON / Send a POST request with form data and return parsed JSON response
 *
 * @param {HTMLFormElement} formEl - 要提交的表单元素 / The form element to submit
 * @param {string} endpointUrl - 接口地址 / The endpoint URL to send the request
 * @param {Object} customHeaders - 可选的请求头 / Optional custom request headers
 * @returns {Promise<{success: boolean, data: Object}>} 包含 success 标志和响应数据的对象 / Returns an object containing a success flag and the response data
 */
const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    // 将表单元素转换为 FormData 对象 / Create a FormData object from the form element
    const formData = new FormData(formEl);

    try {
        // 使用 fetch 发送 POST 请求 / Use fetch to send a POST request
        const response = await fetch(endpointUrl, {
            method: 'POST',         // 请求方法：POST / HTTP method: POST
            headers: customHeaders, // 自定义请求头 / Custom headers
            body: formData          // 请求体为表单数据 / Body payload is the form data
        });

        // 解析响应 JSON / Parse the response as JSON
        const data = await response.json();

        // 返回成功状态和数据 / Return success status and data
        return {
            success: response.ok && data.status === 'success', // 当 HTTP 状态 OK 且 data.status 为 'success' 时标记为成功 / Mark success if HTTP OK and data.status is 'success'
            data,                                              // 返回的 JSON 数据 / The parsed JSON data
        };
    } catch (error) {
        // 捕获网络或服务器错误并返回错误信息 / Catch network or server errors and return error details
        return {
            success: false,                                      // 标记为失败 / Indicates failure
            data: { message: 'Network or server error.', error } // 返回错误消息和 Error 对象 / Return an error message and the Error object
        };
    }
};

// 导出 postFormData 函数以便其他模块使用 / Export postFormData for use in other modules
export { postFormData };  
