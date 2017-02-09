export const invoke = (result, args, defaults) => {
  if (typeof result === 'function') {
    return result(args);
  }
  if (result) {
    return result;
  }
  return defaults;
}