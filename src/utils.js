import dayjs from 'dayjs';
import 'dayjs/locale/ru';

var duration = require('dayjs/plugin/duration');
var relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('ru');

const getDuration = (dateFrom) => {
    let seconds = dayjs().diff(dateFrom, 's');
    return dayjs.duration({seconds: -seconds}).humanize(true);
};

export {getDuration};
