export const timestamp = (_store) => (next) => (action) =>
  next({
    ...action,
    meta: { ...action.meta, timestamp: new Date().getTime() },
  });

// Middleware example: redirects on error actions
export const errorRedirection =
  (history, redirectionsMap) => (_store) => (next) => (action) => {
    const result = next(action);
    if (action.error) {
      const redirection = redirectionsMap[action.payload?.statusCode];
      if (redirection) {
        history.push(redirection);
      }
    }
    return result;
  };
