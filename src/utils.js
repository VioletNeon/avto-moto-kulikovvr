import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const duration = require('dayjs/plugin/duration');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('ru');

const getDuration = (dateFrom) => {
  const seconds = dayjs().diff(dayjs(dateFrom), 's');
  return dayjs.duration({seconds: -seconds}).humanize(true);
};

export {getDuration};
