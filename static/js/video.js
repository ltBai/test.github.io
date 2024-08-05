const videoSources = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

const currentVideo = document.getElementById('current-video');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 1; // 中间视频的索引

function loadVideo(index) {
    currentVideo.src = videoSources[index];
    currentVideo.load();
    currentVideo.play();
}

// 初始化视频
loadVideo(currentIndex);

// 添加事件监听器
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = videoSources.length - 1;
    }
    loadVideo(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= videoSources.length) {
        currentIndex = 0;
    }
    loadVideo(currentIndex);
});