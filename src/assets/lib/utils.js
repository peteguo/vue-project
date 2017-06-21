export const deepCopy = (obj) => {
  if (typeof obj !== 'object') return obj;
  let result;
  // try {
  //   result = JSON.parse(JSON.stringify(obj));
  // } catch (err) {
  if (Array.isArray(obj)) {
    result = [];
    obj.forEach(item => {
      result.push(typeof item === 'object' && !(item instanceof Date) ? deepCopy(item) : item);
    });
  } else {
    result = {};
    Object.keys(obj).forEach( key => {
      result[key] = typeof obj[key] === 'object' && !(obj[key] instanceof Date) ?
        deepCopy(obj[key]) : obj[key];
    });
  }
  // }
  return result;
};

