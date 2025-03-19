document.addEventListener('DOMContentLoaded', function() {
  // 获取目标元素
  const moonFestivalElement = document.getElementById('moon-festival');

  // 绑定点击事件
  if (moonFestivalElement) {
    moonFestivalElement.addEventListener('click', function() {
      window.location.href = '中秋赏月.html';
      // 可选：添加跳转动画（参考网页3的星星动画逻辑）
    });
  }

  // 绑定其他可点击项目的点击事件
  document.querySelectorAll('.historical-timeline h3').forEach(item => {
    item.addEventListener('click', function() {
      // 根据不同的标题内容进行跳转
      let link = '';
      if (item.textContent.includes('祭月赏月')) {
        link = '中秋赏月.html';
      } else if (item.textContent.includes('品月饼')) {
        link = '品月饼.html'; // 假设存在品月饼的页面
      } else if (item.textContent.includes('闹花灯')) {
        link = '闹花灯.html'; // 假设存在闹花灯的页面
      } else if (item.textContent.includes('舞火龙')) {
        link = '舞火龙.html'; // 假设存在舞火龙的页面
      }
      if (link) {
        window.location.href = link;
      }
    });
  });

  // 鼠标悬停时自定义光标
  document.querySelectorAll('.historical-timeline h3').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.cursor = 'pointer'; // 设置为手的样式
    });
  });

  // 点击时的动效反馈
  document.querySelectorAll('.historical-timeline h3').forEach(item => {
    item.addEventListener('mousedown', () => {
      item.style.transform = 'scale(0.95)';
    });
    item.addEventListener('mouseup', () => { // 添加mouseup事件以恢复大小
      item.style.transform = 'scale(1)';
    });
    item.addEventListener('mouseleave', () => { // 添加mouseleave事件以恢复大小
      item.style.transform = 'scale(1)';
    });
  });
});
