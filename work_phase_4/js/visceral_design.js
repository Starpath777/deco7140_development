// js/visceral_design.js

/**
 * Visceral Design Initialization
 * 感官设计初始化
 */

// Import initGalleryViewer function to set up the image viewer panel
// 导入 initGalleryViewer 函数，用于初始化图片查看面板
import { initGalleryViewer } from "./modules/viewer.js"; // Import from viewer module / 从 viewer 模块导入

// Wait for the DOM to finish loading before running initialization
// 等待 DOM 完全加载后再执行初始化代码
document.addEventListener("DOMContentLoaded", () => { // Listen for DOMContentLoaded event / 监听 DOMContentLoaded 事件
    initGalleryViewer(); // Call initGalleryViewer to enable the viewer / 调用 initGalleryViewer 启用查看器功能
}); // End of DOMContentLoaded listener / 结束 监听函数
