export default function onceLoad(cb) {
  let isLoad = false;
  return function (...params) {
    if (!isLoad) {
      isLoad = true;
      return cb.apply(this, params);
    }
  };
}
