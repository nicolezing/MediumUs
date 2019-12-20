function getEventHandler(trigger, showFn, hideFn, delayFn) {
  // onfocus is default for all cases for better accessibility
  let actions = {
    onFocus: delayFn(showFn),
    onBlur: delayFn(hideFn),
  };
  if (trigger === 'click') {
    actions = { onMouseDown: showFn, ...actions };
  }
  if (trigger === 'hover') {
    actions = {
      onMouseOver: delayFn(showFn),
      onMouseOut: delayFn(hideFn),
      ...actions,
    };
  }
  return actions;
}

export { getEventHandler };
