export const getDate = () => {
  const date = new Date();
  const dateString = date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });

  const day = dateString.slice(0, -3).replace('.', '');
  const weekday = date.toLocaleString('ru-RU', { weekday: 'long' });
  const time = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false });

  return {day, weekday, time}
};
