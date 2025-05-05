// js/modules/accordion.js

/**
 * 初始化所有手风琴容器
 * @param {string} containerSelector - 手风琴容器的选择器，例如 '.accordion'
 */
function initAccordion(containerSelector) {
    // 找到页面上所有手风琴容器
    const accordions = document.querySelectorAll(containerSelector);
  
    accordions.forEach(container => {
      // 在当前容器内，选出所有标题按钮
      const headers = container.querySelectorAll('.accordion-header');
  
      headers.forEach(header => {
        header.addEventListener('click', () => {
          // 找到标题对应的父元素 accordion-item
          const item = header.parentElement;
          // 切换 open 类，负责展开/收起内容
          item.classList.toggle('open');
        });
      });
    });
  }
  
  export { initAccordion };
  