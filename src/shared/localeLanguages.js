import {
  GREGORIAN_MONTHS,
  GREGORIAN_WEEK_DAYS,
  AMHARIC_MONTHS,
  AMHARIC_WEEK_DAYS,
} from "./constants";

import { toEthiopian, toGregorian } from "./ethCalendar";

const localeLanguages = {
  en: {
    months: GREGORIAN_MONTHS,
    weekDays: GREGORIAN_WEEK_DAYS,
    weekStartingIndex: 0,
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
    transformDigit(digit) {
      return digit;
    },
    nextMonth: "Next Month",
    previousMonth: "Previous Month",
    openMonthSelector: "Open Month Selector",
    openYearSelector: "Open Year Selector",
    closeMonthSelector: "Close Month Selector",
    closeYearSelector: "Close Year Selector",
    from: "from",
    to: "to",
    defaultPlaceholder: "Select...",
    digitSeparator: ",",
    yearLetterSkip: 0,
    isRtl: false,
  },
  am: {
    months: AMHARIC_MONTHS,
    weekDays: AMHARIC_WEEK_DAYS,
    weekStartingIndex: 6,
    getToday(gregorainTodayObject) {
      const ethDate = toEthiopian(
        gregorainTodayObject.year,
        gregorainTodayObject.month,
        gregorainTodayObject.day
      );

      return { year: ethDate[0], month: ethDate[1], day: ethDate[2] };
    },
    toNativeDate(date) {
      const gregDate = toGregorian(date.year, date.month, date.day);
      return new Date(gregDate[0], gregDate[1] - 1, gregDate[2]);
    },
    getMonthLength(date) {
      if (date.month !== 13) {
        return 30;
      }
      return date.year % 4 === 3 ? 6 : 5;
    },
    transformDigit(digit) {
      return digit;
    },
    nextMonth: "Next Month",
    previousMonth: "Previous Month",
    openMonthSelector: "Open Month Selector",
    openYearSelector: "Open Year Selector",
    closeMonthSelector: "Close Month Selector",
    closeYearSelector: "Close Year Selector",
    from: "from",
    to: "to",
    defaultPlaceholder: "Select...",
    digitSeparator: ",",
    yearLetterSkip: 0,
    isRtl: false,
  },
};

const getLocaleDetails = (locale) => {
  if (typeof locale === "string") return localeLanguages[locale];
  return locale;
};

export { localeLanguages };
export default getLocaleDetails;
