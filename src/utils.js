import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const MACHINE_FORMAT = 'YYYY-MM-DD';
function machineDueFormat(dueDate) {
  return dueDate ? dayjs(dueDate).format(MACHINE_FORMAT) : '';
}

function humanizeDueTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function humanizeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getDifferenceTime(dateFrom, dateTo){
  const startDate = dayjs(dateFrom);
  const endDate = dayjs(dateTo);
  const difference = endDate.diff(startDate);
  const differenceHours = Math.floor(difference / (1000 * 60 * 60));
  const differenceMin = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const differenceDays = Math.ceil(differenceHours / 24);

  let differenceTime = `${differenceDays}D ${differenceHours }H ${differenceMin}M`;

  if(differenceDays === 0){
    differenceTime = `${differenceHours }H ${differenceMin }M`;
  }

  if(differenceDays === 0 && differenceHours === 0){
    differenceTime = `${differenceMin}M`;
  }

  return differenceTime;
}

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

export {humanizeDueDate, humanizeDueTime, getDifferenceTime, capitalize,machineDueFormat};
