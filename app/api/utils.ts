import { mapValues } from 'lodash';

export const DEFAULT_TIMESOURCE = () => new Date();
let timeSource = DEFAULT_TIMESOURCE;

export function getTime() {
  return timeSource();
}

export function setTimesource(newTimeSource: () => Date) {
  timeSource = newTimeSource;
}
