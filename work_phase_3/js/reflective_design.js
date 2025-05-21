// js/reflective_design.js

/**
 * Initialize accordion and fetch community data on DOM ready.
 * 在 DOM 完全加载后初始化手风琴并获取社区数据。
 */
import { initAccordion } from './modules/accordion.js'; // Import accordion initializer / 导入手风琴初始化函数
import { fetchGetData }  from './modules/getData.js';    // Import GET helper function / 导入 GET 请求辅助函数

// Listen for DOMContentLoaded to ensure the DOM is fully parsed before running code
// 监听 DOMContentLoaded 事件，确保 DOM 完全解析后再执行脚本
document.addEventListener('DOMContentLoaded', () => {
  initAccordion('.accordion'); // Initialize accordion for elements with .accordion selector / 对匹配 ".accordion" 的元素初始化手风琴

  const container = document.getElementById('community-list'); // Get container for member cards / 获取渲染成员卡片的容器元素
  const API_URL   = 'https://your-api-domain/api/community/';  // Define API endpoint URL / 定义社区 API 的端点 URL

  // Fetch community data with student number and UQ Cloud Zone ID
  // 调用 fetchGetData，传入学号和 UQ Cloud 区域 ID
  fetchGetData(API_URL, {
    student_number: 's4876391',      // Student number header / 学号请求头
    uqcloud_zone_id: 'cdfd9774'      // UQ Cloud Zone ID header / UQ Cloud 区域 ID 请求头
  })
  .then(data => { // Handle successful response / 处理成功响应
    if (!data || data.length === 0) { // If no data returned or empty array / 若 data 为空或长度为 0
      container.innerHTML = '<p class="text-warning">暂无社区成员数据。</p>'; // Show warning message / 显示无数据警告
      return; // Exit early / 提前返回
    }

    container.innerHTML = ''; // Clear any placeholder content / 清空初始提示内容
    data.forEach(member => { // Iterate over each member object / 遍历成员数据数组
      const card = document.createElement('div'); // Create card container element / 创建卡片容器 div
      card.className = 'card mb-3'; // Apply Bootstrap card and margin classes / 应用 card 和 mb-3 类
      card.innerHTML = `
        <img src="${member.photo}" alt="${member.name} 的头像" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.message || 'No message provided.'}</p>
        </div>
      `; // Populate card HTML with image and text / 使用模板字符串填充图片和文本内容
      container.appendChild(card); // Append card to container / 将卡片添加到容器中
    });
  })
  .catch(err => { // Handle fetch or parsing errors / 捕获网络或解析错误
    console.error(err); // Log error to console / 在控制台输出错误
    container.innerHTML = '<p class="text-danger">无法加载成员列表</p>'; // Show error message / 显示加载失败消息
  });
}); // End DOMContentLoaded listener / 结束 DOMContentLoaded 监听




// 引入 postFormData 函数以便提交表单数据 / Import postFormData function for submitting form data
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    // 获取表单元素 / Get the form element
    const form = document.getElementById('community-form');
    // 获取反馈文本容器 / Get the feedback text container
    const feedback = document.getElementById('form-feedback');

    // 监听表单提交事件 / Listen for form submit event
    form.addEventListener('submit', async (e) => {
        e.preventDefault();  
        // 阻止默认提交行为 / Prevent default form submission

        feedback.textContent = 'Submitting...';  
        // 提交时显示提示 / Show submitting indicator

        // 调用 postFormData 发送表单数据 / Call postFormData to send form data
        const { success, data } = await postFormData(
            form,
            'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', // API 接口 URL / API endpoint URL
            {
                'student_number': 's4876391',    // 学号参数 / Student number parameter
                'uqcloud_zone_id': 'cdfd9774',   // UQ 云区域 ID / UQ cloud zone ID
            }
        );

        if (success) {
            // 提交成功时显示服务器返回消息并重置表单 / On success, display server message and reset form
            feedback.textContent = data.message;
            form.reset();
        } else {
            // 出现错误时显示错误消息 / On error, display error message
            feedback.textContent = data.message || 'Something went wrong.';
        }
    });
});
