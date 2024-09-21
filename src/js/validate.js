const isMovable = (currTile, targetTile) => {
    // 같은 색상 기물이 있는지 체크
    let currTileEle = getTargetTileElement(currTile);
    let targetTileEle = getTargetTileElement(targetTile);

    if (targetTileEle.innerText && !isKillable(currTileEle, targetTileEle)) {
        return false;
    }
    return true;
}

/**
 * 먹을 수 있는 기물인지 체크
 */
const isKillable = (currTileEle, targetTileEle) => {
    return currTileEle.classList.contains('black') !== targetTileEle.classList.contains('black');
}
/**
 * 승급 체크
 */
const checkPromotion = (currTile) => {
    let currTileEle = getTargetTileElement(currTile);
    let currTileType = currTileEle.innerText;
    let currTileColor = currTileEle.classList.contains('black') ? 'black' : 'white';
    let currTileRow = currTileEle.parentElement.rowIndex;
    if (currTileType === '♙' && currTileRow === 0) {
        return true;
    }
    if (currTileType === '♟' && currTileRow === 7) {
        return true;
    }
    return false;
}