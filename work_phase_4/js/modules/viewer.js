// js/modules/viewer.js

/**
 * initGalleryViewer - Initialize gallery viewer panel.
 * 初始化画廊查看器面板。
 */
const initGalleryViewer = () => { // Define initGalleryViewer arrow function, no parameters. 定义 initGalleryViewer 箭头函数，无参数。
    const viewer = document.getElementById("viewer"); // Get viewer panel element by ID. 获取具有 ID "viewer" 的面板元素。
    const viewerImg = document.getElementById("viewer-img"); // Get <img> element inside viewer for display. 获取查看器内部用于显示图片的 <img> 元素。
    const viewerCaption = document.getElementById("viewer-caption"); // Get element for image description caption. 获取用于显示图片描述的元素。
    const closeBtn = document.getElementById("close-viewer"); // Get close button element. 获取关闭按钮元素。

    // Set up click event on each gallery image
    // 为每张画廊图片设置点击事件
    document.querySelectorAll(".gallery img").forEach(img => { // Select all images in .gallery and iterate. 选取 .gallery 容器中所有 <img> 并遍历。
        img.addEventListener("click", () => { // Add click event listener to image. 为图片添加点击事件监听。
            viewerImg.src = img.src; // Update viewer image source to clicked image. 更新查看器中图片的 src 为点击的图片 src。
            viewerImg.alt = img.alt; // Set alt attribute for accessibility. 设置 alt 属性以增强可访问性。
            viewerCaption.textContent = img.alt; // Set caption text to image alt text. 将图说文本设为 alt 文本。
            viewer.classList.add("open"); // Add .open class to show viewer panel. 添加 .open 类以显示查看器面板。
            viewer.setAttribute("aria-hidden", "false"); // Set aria-hidden to false to indicate visible. 设置 aria-hidden="false" 表示可见。
            document.body.style.overflow = "hidden"; // Disable body scroll when viewer is open. 查看器打开时禁用页面滚动。
        }); // End image click listener. 结束图片点击监听。
    }); // End loop through gallery images. 结束遍历画廊图片。

    // Set up click event on close button
    // 为关闭按钮设置点击事件
    closeBtn.addEventListener("click", () => { // Add click event listener to close button. 为关闭按钮添加点击事件监听。
        viewer.classList.remove("open"); // Remove .open class to hide viewer panel. 移除 .open 类以隐藏查看器面板。
        viewer.setAttribute("aria-hidden", "true"); // Set aria-hidden to true to indicate hidden. 设置 aria-hidden="true" 表示隐藏。
        document.body.style.overflow = "auto"; // Re-enable body scroll when viewer is closed. 查看器关闭时恢复页面滚动。
    }); // End close button click listener. 结束关闭按钮点击监听。
}; // End initGalleryViewer function definition. 结束 initGalleryViewer 函数定义。

export { initGalleryViewer }; // Export initGalleryViewer for external use. 导出 initGalleryViewer 以供外部模块使用。
