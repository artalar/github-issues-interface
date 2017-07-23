

/** return parsed date string
 * @param {string} date
 */
export default (rawDate) => {
  const date = new Date(rawDate);

  return `${date.getFullYear()}.${date.getMonth()}.${date.getDay()} ` +
    `${date.getHours()}:${date.getMinutes()}`;
}