// 게임 시작
const gameStartButton = document.querySelector('#game-start-button');
const gameInitButton = document.querySelector('#game-init-button');
const startNewGame = () => {
    // 게임 시작 버튼 설정, 타이머 시작/중단 설정
    if (gameStartButton.classList.contains('playing')) {
        // 멈추는 경우
        stopTime();
        gameStartButton.innnertext = '다시 시작';
        gameStartButton.className = 'stopped';
    } else {
        if (!gameStartButton.classList.contains('stopped')) {
            // 처음 시작하는 경우
            setGameStartTime();
            // tile click시 이벤트 등록
            document.querySelectorAll('.tile').forEach(tile => {
                tile.addEventListener('click', () => {
                    setClickAction(tile);
                });
            });
            startTime();
        }
        // 처음/다시 시ㅈ작하는 경우
        gameStartButton.innerText = '일시정지';
        startTimer();
        gameStartButton.className = 'playing';
    }
}

gameStartButton.addEventListener('click', startNewGame);
// 게임 초기화 함수 -> 새로고침
const initGame = () => {
    location.reload();
}
gameInitButton.addEventListener('click', initGame);


// tile click시 일어나는 이벤트
const setClickAction = (tile) => {
    toggleTileColor(tile);
    // target칸으로 이동
    if (!isHolding && tile.innerText) {
        isHolding = true;
        tile.classList.add('active');
        setTargetTileColor(tile);
        holdingTile = tile;
    } else if (isHolding && tile.classList.contains('active')) {
        // 기존 칸을 다시 선택시 선택해제
        isHolding = false;
        tile.classList.remove('active');
        removeTargetTileColor();
        holdingTile = null;
    }
}
const remoteTargetTileColor = () => {
    document.querySelectorAll('.target').forEach(targetTile => {
        targetTile.classList.remove('target');
    });
}
// const setTargetTileColor = (tile) => {
//     // a1을 0,0으로 , h8을 7,7로 변환
//     const x = tile.id.split('-')[1] - 1;
//     const y = 7 - tile.id.split('-')[2];

//     // 갈 수 있는 칸들
//     let currTile = [x, y];
//     let possibleMovements;
//     if (pieceMap[tile.innerText].type === 'p') {
//         possibleMovements = pieceMovement