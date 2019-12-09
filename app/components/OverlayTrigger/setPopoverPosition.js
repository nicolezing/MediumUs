const setPosition = (triggerSize, popoverSize, placement) => {
  let aX = 0;
  const aY = 0;
  let pX = 0;
  let pY = 0;
  let place = 'under';
  // margin of the popover to the screen
  const marginNeeded = 4;

  if (placement === 'top-bottom') {
    const topRemainedMargin = triggerSize.top - triggerSize.height / 2;
    const need = popoverSize.height + marginNeeded;

    if (topRemainedMargin >= need) {
      // console.log('should be top');
      // 14 is the arrow dimension
      pY = -need - triggerSize.height - 14;
      place = 'above';
    }
  }

  // if (placement === 'dropdown'), only adjust x position
  const windowW = window.innerWidth;
  const rightRemainedMargin =
    windowW - triggerSize.left - triggerSize.width / 2;
  const leftRemainedMargin = triggerSize.left + triggerSize.width / 2;
  const middle = (triggerSize.width - popoverSize.width) / 2;
  const need = Math.abs(middle) + marginNeeded;

  if (rightRemainedMargin < need && leftRemainedMargin > need) {
    // console.log('render to left');
    // 7 is half of the arrow dimension
    aX = popoverSize.width + marginNeeded - rightRemainedMargin - 7;
    pX = middle - (popoverSize.width / 2 - rightRemainedMargin) - marginNeeded;
  } else if (leftRemainedMargin < need && rightRemainedMargin > need) {
    // console.log('to right');
    aX = leftRemainedMargin - 7 - marginNeeded;
    pX = marginNeeded - triggerSize.left;
  } else {
    // console.log('to middle');
    aX = popoverSize.width / 2 - 7;
    pX = middle;
  }
  return { aX, aY, pX, pY, place };
};

export default setPosition;
