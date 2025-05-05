// js/reflective_design.js
import { initAccordion } from './modules/accordion.js';
import { fetchGetData }  from './modules/getData.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. 初始化手风琴
  initAccordion('.accordion');

  // 2. 获取用于渲染社区成员卡片的容器
  const container = document.getElementById('community-list');
  const API_URL   = 'https://your‐api‐domain/api/community/'; // 从课程 API 文档复制

  // 3. 调用 GET 模块，传入学号和 zone id
  fetchGetData(API_URL, {
    student_number: 's4876391',
    uqcloud_zone_id: 'cdfd9774'
  })
  .then(data => {
    if (!data || data.length === 0) {
      container.innerHTML = '<p class="text-warning">暂无社区成员数据。</p>';
      return;
    }
    // 清空初始提示
    container.innerHTML = '';
    data.forEach(member => {
      const card = document.createElement('div');
      card.className = 'card mb-3';
      card.innerHTML = `
        <img src="${member.photo}"
             alt="${member.name} 的头像"
             class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.message || 'No message provided.'}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    container.innerHTML = '<p class="text-danger">无法加载成员列表</p>';
  });
});
