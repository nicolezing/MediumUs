const setPosition = (triggerSize, popoverSize, windowWidth, placement) => {
  let aX = 0;
  const aY = 0;
  let pX = 0;
  let pY = 0;
  let place = 'below';
  // set margin of the popover to the screen
  const MARGIN_NEEDED = 4;
  const ARROW_DIMENSION = 14;

  // only adjust Y when the placement set to "top-bottom"
  if (placement === 'top-bottom') {
    const topRemainedMargin = triggerSize.top - triggerSize.height / 2;
    const need = popoverSize.height + MARGIN_NEEDED;

    if (topRemainedMargin >= need) {
      // render above trigger;
      pY = -need - triggerSize.height - ARROW_DIMENSION;
      place = 'above';
    }
  }

  // if (placement === 'dropdown'), only adjust X position
  const rightRemainedMargin =
    windowWidth - triggerSize.left - triggerSize.width / 2;
  const leftRemainedMargin = triggerSize.left + triggerSize.width / 2;
  const middle = (triggerSize.width - popoverSize.width) / 2;
  const need = Math.abs(middle) + MARGIN_NEEDED;

  if (rightRemainedMargin < need && leftRemainedMargin > need) {
    // render to left
    aX =
      popoverSize.width +
      MARGIN_NEEDED -
      rightRemainedMargin -
      ARROW_DIMENSION / 2;
    pX = middle - (popoverSize.width / 2 - rightRemainedMargin) - MARGIN_NEEDED;
  } else if (leftRemainedMargin < need && rightRemainedMargin > need) {
    // render to right
    aX = leftRemainedMargin - ARROW_DIMENSION / 2 - MARGIN_NEEDED;
    pX = MARGIN_NEEDED - triggerSize.left;
  } else {
    // render to middle
    aX = popoverSize.width / 2 - ARROW_DIMENSION / 2;
    pX = middle;
  }
  return { aX, aY, pX, pY, place };
};

export default setPosition;
