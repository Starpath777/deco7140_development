function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // 可选：点击外部区域时关闭菜单
        document.addEventListener("click", (event) => {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    }

    // ✅ 自动设置 aria-current="page"
    const currentPath = window.location.pathname.split("/").pop(); // 获取当前文件名
    const links = document.querySelectorAll(".menu a");

    links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current"); // 防止重复页面设置
        }
    });
}

export { setupMenu };
