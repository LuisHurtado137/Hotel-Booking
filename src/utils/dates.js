export const nowUnix = () => new Date().valueOf();

export const todayLastHourUnix = () => new Date().setHours(23, 59, 59, 59);

export const dateToUnix = date => {
  debugger;
  let fromUnix = new Date(`${date.from} 00:00:00`).valueOf();
  if (isToday(fromUnix)) {
    fromUnix = nowUnix();
  }
  let toUnix = new Date(`${date.to} 00:00:00`).valueOf();
  if (isToday(toUnix)) {
    toUnix = todayLastHourUnix();
  }

  return { from: fromUnix, to: toUnix };
};

export const isToday = unixDate => {
  const todayUnixWithoutTime = new Date().setHours(0, 0, 0, 0);
  const dateUnixWithoutTime = new Date(unixDate).setHours(0, 0, 0, 0);
  return todayUnixWithoutTime === dateUnixWithoutTime;
};
