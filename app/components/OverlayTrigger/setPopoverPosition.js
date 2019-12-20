const setPosition = (
  triggerSize,
  popoverSize,
  windowWidth,
  scrollX,
  scrollY,
  placement,
) => {
  // set margin of the popover to the screen
  const MARGIN_NEEDED = 4;
  const ARROW_DIMENSION = 14;
  let aX = 0;
  const aY = 0;
  let pX = 0;
  // let pY = triggerSize.height + ARROW_DIMENSION / 2;
  // let pY = 0;
  let pY =
    ARROW_DIMENSION / 2 + (scrollY + triggerSize.top + triggerSize.height);
  let place = 'below';

  // only adjust Y when the placement set to "top-bottom"
  if (placement === 'top-bottom') {
    const topRemainedMargin = triggerSize.top - triggerSize.height / 2;
    const need = popoverSize.height + MARGIN_NEEDED;

    if (topRemainedMargin >= need) {
      // render above trigger;
      pY =
        -need -
        triggerSize.height -
        ARROW_DIMENSION +
        (scrollY + triggerSize.top + triggerSize.height);
      // pY = -popoverSize.height - ARROW_DIMENSION / 2;
      place = 'above';
    }
  }

  // if (placement === 'dropdown'), only adjust X position
  const rightRemainedMargin =
    windowWidth - triggerSize.left - triggerSize.width / 2;
  const leftRemainedMargin = triggerSize.left + triggerSize.width / 2;
  const middle = (triggerSize.width - popoverSize.width) / 2;
  const need = popoverSize.width / 2 + MARGIN_NEEDED;

  if (rightRemainedMargin < need && leftRemainedMargin > need) {
    // render to left
    aX =
      popoverSize.width +
      MARGIN_NEEDED -
      rightRemainedMargin -
      ARROW_DIMENSION / 2;
    pX =
      middle -
      (popoverSize.width / 2 - rightRemainedMargin) -
      MARGIN_NEEDED +
      (triggerSize.left + scrollX);
  } else if (leftRemainedMargin < need && rightRemainedMargin > need) {
    // render to right
    aX = leftRemainedMargin - ARROW_DIMENSION / 2 - MARGIN_NEEDED;
    pX = MARGIN_NEEDED;
  } else {
    // render to middle
    aX = popoverSize.width / 2 - ARROW_DIMENSION / 2;
    pX = middle + (triggerSize.left + scrollX);
  }
  return { aX, aY, pX, pY, place };
};

export default setPosition;
