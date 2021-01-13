export default function fetchHolidays() {
  const HOLIDAYS_JP_API = 'https://holidays-jp.github.io/api/v1/date.json';
  return fetch(HOLIDAYS_JP_API)
    .then((data) => data.json())
    .then((json) => {
      return json;
    });
}