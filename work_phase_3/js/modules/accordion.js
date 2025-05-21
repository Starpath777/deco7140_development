// js/modules/accordion.js

/**
 * initialize all accordion containers
 * 初始化所有手风琴容器
 * @param {string} containerSelector - selector for accordion containers, e.g. '.accordion'
 * 容器选择器，例如 '.accordion'
 */
function initAccordion(containerSelector) { // 定义函数 initAccordion，接收容器选择器参数 / Define initAccordion function with selector parameter
  // select all accordion containers on the page
  // 在页面上选取所有手风琴容器元素
  const accordions = document.querySelectorAll(containerSelector); // 使用 querySelectorAll 获取 NodeList / Use querySelectorAll to get a NodeList

  // loop through each container
  // 遍历每个手风琴容器
  accordions.forEach(container => {
    // within this container, select all header buttons
    // 在当前容器内，选出所有带有 .accordion-header 类的元素
    const headers = container.querySelectorAll('.accordion-header');

    // loop through each header element
    // 遍历每个标题按钮
    headers.forEach(header => {
      // attach click event listener to header
      // 为标题按钮添加点击事件监听
      header.addEventListener('click', () => {
        // find parent accordion-item element of this header
        // 找到当前标题对应的父节点 .accordion-item
        const item = header.parentElement;
        // toggle 'open' class to expand or collapse the content
        // 切换 open 类名，用于展开或折叠内容
        item.classList.toggle('open');
      }); // end click listener / 结束点击事件监听
    }); // end headers.forEach / 结束遍历标题按钮
  }); // end accordions.forEach / 结束遍历手风琴容器
} // end initAccordion function / 结束 initAccordion 函数

// export the initAccordion function
// 导出 initAccordion 函数以供外部模块使用
export { initAccordion }; // ES6 模块导出 / ES6 module export
