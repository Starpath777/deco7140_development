// js/behavioural_design.js
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
  const form     = document.getElementById('community-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedback.textContent = 'Submitting…';

    // 从 API 文档得到的 endpoint
    const endpoint = '/api/community/';  

    // 替换为你的学号 & UQ Cloud Zone ID
    const headers = {
      student_number:  's4876391',
      uqcloud_zone_id: 'cdfd9774'
    };

    const { success, data } = await postFormData(form, endpoint, headers);

    if (success) {
      feedback.textContent = data.message || 'Thanks for joining the community!';
      form.reset();
    } else {
      feedback.textContent = data.message || 'Submission failed. Please try again.';
    }
  });
});
