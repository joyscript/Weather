export const getDate = () => {
  const date = new Date();
  const dateString = date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });

  const day = dateString.slice(0, -3).replace('.', '');
  const weekday = date.toLocaleString('ru-RU', { weekday: 'long' });
  const time = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false });

  return { day, weekday, time };
};

export const getWeather = async (city) => {
  const key = '4bb428ba7924feb431066c5f16731af7';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Ошибка запроса, статус: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
