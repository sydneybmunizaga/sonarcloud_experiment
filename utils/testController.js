export default (opts = {}) => {
  if (opts.ignore === true) {
    return true;
  }

  if (process.env.TC_RANDOM === "true") {
    return getRandomResult();
  }

  if (opts.random === true) {
    return getRandomResult();
  }

  if (opts.flaky === true) {
    return getRandomResult([true, true, false, true, true]);
  }

  return true;
};

function getRandomResult(src) {
  const results = src || [true, false];
  return results[Math.floor(Math.random() * results.length)];
}
