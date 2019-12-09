export default date => {
  const [, month, day, year] = new Date(date).toDateString().split(' ');
  return { month, day, year };
};
