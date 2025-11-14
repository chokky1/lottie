// index.tsx를 브라우저에서 바로 실행 가능하게 JS로 변환한 예시

import lottie from 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';

const root = document.getElementById('root');

const container = document.createElement('div');
container.style.width = '300px';
container.style.height = '300px';
container.className = 'm-10';
root.appendChild(container);

// Lottie 애니메이션 로딩
fetch('lottie.json')
  .then(res => res.json())
  .then(data => {
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data
    });
  });

// 예시 버튼 추가
const button = document.createElement('button');
button.textContent = 'Click Me';
button.className = 'mt-5 px-4 py-2 bg-blue-500 text-white rounded';
root.appendChild(button);

button.addEventListener('click', () => {
  alert('Button clicked!');
});
