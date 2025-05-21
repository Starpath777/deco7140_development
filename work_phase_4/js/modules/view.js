/**
 * view.js
 * 社区成员列表展示脚本 / Script for displaying community member list
 */

import { fetchGetData } from './modules/getData.js'; // 引入 GET 数据函数 / Import function to fetch data via GET

// DOM 加载完成后执行 / Execute after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // 获取社区成员列表容器 / Get the container element for community members
  const container = document.getElementById('community-list');

  // 发起 GET 请求以获取社区成员数据 / Send a GET request to fetch community member data
  fetchGetData(
    'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', // API 端点 URL / API endpoint URL
    {
      'student_number': 's4876391',   // 学号标识 / Student number identifier
      'uqcloud_zone_id': 'cdfd9774'   // UQ 云区域 ID / UQ cloud zone ID
    }
  ).then(data => {
    // 如果请求失败或返回空数据 / If the request fails or returns no data
    if (!data) {
      container.innerHTML = '<p class="text-danger">Unable to load community members.</p>'; // 显示错误消息 / Display error message
      return;
    }

    // 遍历数据数组，为每个成员创建卡片 / Iterate over the data array and create a card for each member
    data.forEach(member => {
      const card = document.createElement('div'); // 创建卡片容器元素 / Create a div element for the card
      card.className = 'card mb-3';               // 添加 Bootstrap 卡片和间距类 / Add Bootstrap card and margin classes
      // 填充卡片内容，包括姓名和留言 / Populate the card with member name and message
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>       <!-- 成员姓名 / Member name -->
          <p class="card-text">${member.message || 'No message provided.'}</p> <!-- 成员留言或默认提示 / Member message or default note -->
        </div>
      `;
      container.appendChild(card); // 将卡片插入容器 / Append the card to the container
    });
  });
});
