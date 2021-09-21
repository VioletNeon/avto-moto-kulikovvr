import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const duration = require('dayjs/plugin/duration');
const relativeTime = require('dayjs/plugin/relativeTime');
const KEYCODE_TAB = 9;
const NAME_KEYBOARD_TAB = 'Tab';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('ru');

const getDuration = (dateFrom) => {
  const seconds = dayjs().diff(dayjs(dateFrom), 's');
  return dayjs.duration({seconds: -seconds}).humanize(true);
};

const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (evt) => {
    const isTabPressed = (evt.key === NAME_KEYBOARD_TAB || evt.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }
  });
};

export {getDuration, trapFocus};
