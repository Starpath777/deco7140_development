document.addEventListener('DOMContentLoaded', function() {
    // 获取轮播容器和所有图片
    const carousel = document.querySelector('.visceral-container');
    const images = carousel.querySelectorAll('.visceral');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const intervalTime = 5000; // 轮播间隔时间（毫秒）
    let carouselInterval;

    // 初始化轮播
    function initCarousel() {
        // 设置第一张图片为活动状态
        showImage(0);
        
        // 添加指示器点击事件
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showImage(index);
                resetInterval();
            });
        });
        
        // 添加前后按钮点击事件
        prevBtn.addEventListener('click', () => {
            showImage(currentIndex - 1);
            resetInterval();
        });
        
        nextBtn.addEventListener('click', () => {
            showImage(currentIndex + 1);
            resetInterval();
        });
        
        // 启动自动轮播
        startCarousel();
    }

    // 显示指定索引的图片
    function showImage(index) {
        // 处理边界情况
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        
        // 隐藏所有图片
        images.forEach(img => {
            img.classList.remove('active');
        });
        
        // 移除所有指示器的活动状态
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // 显示当前图片
        images[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // 更新当前索引
        currentIndex = index;
    }

    // 开始自动轮播
    function startCarousel() {
        carouselInterval = setInterval(() => {
            showImage(currentIndex + 1);
        }, intervalTime);
    }

    // 重置轮播间隔
    function resetInterval() {
        clearInterval(carouselInterval);
        startCarousel();
    }

    // 初始化轮播
    initCarousel();
});    