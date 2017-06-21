import * as indexAPI from '../api/indexAPI'

export const cityMapList = (params) => {
  return indexAPI._cityMapList(params).then((data) => Promise.resolve(data));
}

export const alarmList = (params) => {
  return indexAPI._alarm(params).then((data) => Promise.resolve(data));
}
