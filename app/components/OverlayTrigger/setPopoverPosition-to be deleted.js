const setPosition = (
  triggerSize,
  popoverSize,
  scrollX,
  scrollY,
  screenWidth,
  screenHeight,
  placement,
) => {
  // set margin of the popover to the screen
  const MARGIN_NEEDED = 4;
  const ARROW_DIMENSION = 14;
  let aX = 0;
  const aY = 0;
  let pX = 0;
  let pY =
    ARROW_DIMENSION / 2 + (scrollY + triggerSize.top + triggerSize.height);
  let place = 'below';

  // adjust Y when the placement set to "top-bottom" or "bottom-top"
  if (placement !== 'dropdown') {
    const topRemainedMargin = triggerSize.top - triggerSize.height / 2;
    const bottomRemainedMargin = screenHeight - triggerSize.bottom;
    const need = popoverSize.height + MARGIN_NEEDED + ARROW_DIMENSION;

    if (
      (placement === 'top-bottom' && topRemainedMargin >= need) ||
      (placement === 'bottom-top' && bottomRemainedMargin < need)
    ) {
      // render above trigger;
      pY = pY - popoverSize.height - triggerSize.height - ARROW_DIMENSION * 2;
      place = 'above';
    }
  }

  // if (placement === 'dropdown'), only adjust X position
  const rightRemainedMargin =
    screenWidth - triggerSize.left - triggerSize.width / 2;
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
