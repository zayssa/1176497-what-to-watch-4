export const getTextRuntime = (runtime) => {
  let result = ``;
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;

  if (hours) {
    result += `${hours}h`;
    if (minutes) {
      result += ` `;
    }
  }

  if (minutes) {
    result += `${minutes}m`;
  }

  return result;
};
