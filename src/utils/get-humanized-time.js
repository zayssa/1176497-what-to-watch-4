const addLeadingZero = (num) => {
  return `0${num}`.slice(-2);
};

export const getHumanizedTime = (runtime) => {
  let result = ``;
  const cleanRuntime = runtime - runtime % 1;
  const seconds = cleanRuntime % 60;
  const minutes = ((cleanRuntime - seconds) / 60) % 60;
  const hours = (cleanRuntime - minutes * 60 - seconds) / 3600;

  if (hours) {
    result += `${hours}:`;
  }

  result += `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;

  return result;
};
