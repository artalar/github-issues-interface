

/** return parsed date string
 * @param {string} date
 */
export default (rawDate) => {
  const date = new Date(rawDate);

  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ` +
    `${date.getHours()}:${date.getMinutes()}`;
}