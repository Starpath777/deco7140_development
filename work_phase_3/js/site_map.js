// js/site_map.js

// ========== IMPORTS 导入模块 ==========
// Keep track of external modules being used / 跟踪所使用的外部模块
import { initAccordion } from './modules/accordion.js'; // 引入手风琴初始化函数 / Import accordion initializer function

// ========== CONSTANTS 常量定义 ==========
// Define values that don't change, e.g., page titles, URLs / 定义不会改变的值，如页面标题、URL 等
// (无常量在此文件中) / (No constants in this file)

// ========== VARIABLES 变量定义 ==========
// Define values that will change, e.g., user inputs, counters / 定义会改变的值，如用户输入、计数器等
// (无可变变量在此文件中) / (No variables in this file)

// ========== FUNCTIONS 函数分组 ==========
// Group code into functions to make it reusable / 将代码分组到函数中以提高可重用性
// (此文件未定义新函数，仅调用导入函数) / (No new functions defined here, only calling imported function)

// ========== EVENT LISTENERS 事件监听 ==========
// The code that runs when a user interacts with the page / 用户与页面交互时运行的代码

// DOMContentLoaded equivalent: run when script is executed after DOM parsing
// 在脚本执行后立即运行（等同于 DOMContentLoaded），在此文件中直接调用 initAccordion

// Initialize accordion after DOM is rendered / DOM 渲染完毕后，初始化所有 class="accordion" 的手风琴
initAccordion('.accordion'); // 调用 initAccordion 并传入选择器 '.accordion' / Call initAccordion with selector '.accordion' to enable accordion behavior
