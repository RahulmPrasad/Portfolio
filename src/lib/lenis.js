let instance = null;
const pending = new Set();

export function setLenis(lenis) {
  instance = lenis;
  if (lenis) {
    pending.forEach((cb) => cb(lenis));
    pending.clear();
  }
}

// Calls `callback` with the Lenis instance once it exists (immediately if
// it's already ready). Returns an unsubscribe function.
export function onLenisReady(callback) {
  if (instance) {
    callback(instance);
    return () => {};
  }
  pending.add(callback);
  return () => pending.delete(callback);
}
