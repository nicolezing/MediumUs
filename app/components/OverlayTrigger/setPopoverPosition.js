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
      console.log('above, triggerSize.height ', triggerSize.height);
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
  console.log('triggerSize ', triggerSize);
  console.log('popoverSize ', popoverSize);
  console.log('scroll ', scrollX, scrollY);
  console.log('margins ', leftRemainedMargin, rightRemainedMargin);
  console.log('middle ', middle);
  console.log('need ', need);
  if (rightRemainedMargin < need && leftRemainedMargin > need) {
    // render to left
    console.log('left');
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
    console.log('right');

    aX = leftRemainedMargin - ARROW_DIMENSION / 2 - MARGIN_NEEDED;
    pX = MARGIN_NEEDED;
  } else {
    // render to middle
    console.log('middle');
    aX = popoverSize.width / 2 - ARROW_DIMENSION / 2;
    pX = middle + (triggerSize.left + scrollX);
  }
  console.log('result : ', aX, aY, pX, pY, place);
  return { aX, aY, pX, pY, place };
};

export default setPosition;
