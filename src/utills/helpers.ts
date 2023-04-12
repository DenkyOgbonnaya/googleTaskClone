export const getDoubleValuDate = (date: number) => {
  return String(date).length < 2 ? `0${date}` : date;
};
export const get12HoursTime = (hour: number, min: number) => {
  if (hour === 0) return '';
  if (hour === 0 || String(hour) === '0') {
    return `12:${getDoubleValuDate(min)} AM`;
  }
  if (hour === 12) {
    return `12:${getDoubleValuDate(min)} PM`;
  }
  if (hour > 12) {
    return `${getDoubleValuDate(hour - 12)}:${getDoubleValuDate(min)} PM`;
  } else {
    return `${getDoubleValuDate(hour)}:${getDoubleValuDate(min)} AM`;
  }
};
export const getTimeFromDate = (dateTime: string): [number, number] => {
  // if (!dateTime) return ''
  const date = new Date(dateTime);
  return [date.getHours(), date.getMinutes()];
};
export const get12HoursTimeFromDateTime = (dateTime: string) => {
  if (dateTime.length === 0) return '';

  const [hour, min] = getTimeFromDate(dateTime);

  const time = get12HoursTime(hour, min);

  return time;
};
