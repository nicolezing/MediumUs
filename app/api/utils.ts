import { mapValues } from 'lodash';
import { getDb } from '.';
import { Transaction } from '@firebase/firestore-types';

export const DEFAULT_TIMESOURCE = () => new Date();
let timeSource = DEFAULT_TIMESOURCE;

export function getTime() {
  return timeSource();
}

export function setTimesource(newTimeSource: () => Date) {
  timeSource = newTimeSource;
}

class _InternalAbortTxn {
  value: any;

  constructor(returnValue: any) {
    this.value = returnValue;
  }
}
function abortTxn<R>(returnValue?: R) {
  throw new _InternalAbortTxn(returnValue);
}
export function runTransaction<R>(
  cb: (txn: Transaction, abort: (returnValue?: R) => void) => Promise<R | void>,
): Promise<R> {
  return getDb()
    .runTransaction(txn => cb(txn, abortTxn))
    .catch(e => {
      if (e instanceof _InternalAbortTxn) {
        return e.value;
      } else {
        throw e;
      }
    });
}
