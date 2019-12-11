const setPosition = (triggerSize, popoverSize, windowWidth, placement) => {
  let aX = 0;
  const aY = 0;
  let pX = 0;
  let pY = 0;
  let place = 'under';
  // set margin of the popover to the screen
  const marginNeeded = 4;

  // only adjust Y when the placement set to "top-bottom"
  if (placement === 'top-bottom') {
    const topRemainedMargin = triggerSize.top - triggerSize.height / 2;
    const need = popoverSize.height + marginNeeded;

    if (topRemainedMargin >= need) {
      // render above trigger;
      // 14 is the arrow dimension
      pY = -need - triggerSize.height - 14;
      place = 'above';
    }
  }

  // if (placement === 'dropdown'), only adjust X position
  const rightRemainedMargin =
    windowWidth - triggerSize.left - triggerSize.width / 2;
  const leftRemainedMargin = triggerSize.left + triggerSize.width / 2;
  const middle = (triggerSize.width - popoverSize.width) / 2;
  const need = Math.abs(middle) + marginNeeded;

  if (rightRemainedMargin < need && leftRemainedMargin > need) {
    // render to left
    // 7 is half of the arrow dimension
    aX = popoverSize.width + marginNeeded - rightRemainedMargin - 7;
    pX = middle - (popoverSize.width / 2 - rightRemainedMargin) - marginNeeded;
  } else if (leftRemainedMargin < need && rightRemainedMargin > need) {
    // render to right
    aX = leftRemainedMargin - 7 - marginNeeded;
    pX = marginNeeded - triggerSize.left;
  } else {
    // render to middle
    aX = popoverSize.width / 2 - 7;
    pX = middle;
  }
  return { aX, aY, pX, pY, place };
};

export default setPosition;
