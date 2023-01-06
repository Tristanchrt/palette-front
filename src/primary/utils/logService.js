const debug = (context, message) => {
  // if (process.env.NODE_ENV !== 'production') {
  console.debug(`[DEBUG] ${JSON.stringify(message)}`, context);
  // }
};
const log = (context, message) => {
  console.log(`[INFO] ${JSON.stringify(message)}`, context);
};
const error = (context, message, trace) => {
  console.error(`[ERROR] ${JSON.stringify(message)}`, trace, context);
};
const warn = (context, message) => {
  console.warn(`[WARN] ${JSON.stringify(message)}`, context);
};
const verbose = (context, message) => {
  // if (process.env.NODE_ENV !== 'production') {
  console.verbose(`[VERBOSE] ${JSON.stringify(message)}`, context);
  // }
};
export default { debug, warn, verbose, error, log };
