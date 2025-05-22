// 导入 postFormData 工具函数，用于发送表单数据到指定接口  
// Import the postFormData helper function to send form data to a specified API endpoint  
import { postFormData } from './modules/postFormData.js';


// 等待 DOM 完全加载后再执行脚本  
// Wait for the DOMContentLoaded event before running the script  
document.addEventListener('DOMContentLoaded', () => {
    // 获取社区表单元素，用于监听提交  
    // Get the form element with ID 'community-form' to listen for submit events  
    const form = document.getElementById('community-form');
    // 获取反馈显示元素，用于向用户展示状态信息  
    // Get the feedback element with ID 'form-feedback' to display status messages  
    const feedback = document.getElementById('form-feedback');

    // 监听表单提交事件  
    // Listen for the form's 'submit' event  
    form.addEventListener('submit', async (e) => {
        // 阻止浏览器默认的表单提交行为（页面刷新）  
        // Prevent the browser's default form submission (page reload)  
        e.preventDefault();

        // 在页面上显示“正在提交...”提示  
        // Show a "Submitting..." message to the user  
        feedback.textContent = 'Submitting...';

        // 使用 postFormData 发送表单数据，并附带额外字段  
        // Send form data via postFormData, including extra fields  
        const { success, data } = await postFormData(
            form,
            'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
            {
                'student_number':    's4876391',  // 学号 / Student number  
                'uqcloud_zone_id':   'cdfd9774',  // UQCloud 区域 ID / UQCloud zone ID  
            }
        );

        // 根据返回结果更新界面  
        // Update the UI based on the response  
        if (success) {
            // 如果成功，显示服务器返回的消息并重置表单  
            // If successful, display the returned message and reset the form  
            feedback.textContent = data.message;
            form.reset();
        } else {
            // 如果失败，显示错误消息或通用提示  
            // If failed, show the error message or a generic fallback  
            feedback.textContent = data.message || 'Something went wrong.';
        }
    });
});
