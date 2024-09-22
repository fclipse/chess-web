/**
 * 접기/펼치기 버튼을 클릭하면 해당 요소를 숨기거나 보여줍니다.
 */
const hideButton = document.querySelectorAll('.hide-button');
hideButton.forEach(button => {
    let hideState = true;
    button.addEventListener('click', () => {
        if (hideState) {
            hideState = false;
            button.innerText = '보이기';
        } else {
            hideState = true;
            button.innerText = '접기';
        }
        const target = button.dataset.target;
        const targetElement = document.querySelector(target);
        targetElement.classList.toggle('hidden');
    });
});

/**
 * 게임 모드(<select id="game-mode">)에서 value=0인 정규 모드 선택시에 <select id="timer">의 disabled 속성을 해제합니다.
 * 만약 다른 값을 고를 경우, 다시 disabled 속성을 추가합니다.
 */
const gameMode = document.querySelector('#game-mode');
const timer = document.querySelector('#timer');
gameMode.addEventListener('change', () => {
    if (gameMode.value === '1') {
        timer.disabled = false;
    } else {
        timer.disabled = true;
    }
});