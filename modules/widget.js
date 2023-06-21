import { getTodayContent, getOtherContent, getForecast } from './content.js';

const createWidget = () => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  [getTodayContent(), getOtherContent(), getForecast()].forEach((content) => {
    widget.insertAdjacentHTML('beforeend', content);
  });

  return widget;
};

export const addWidget = (app) => {
  const widget = createWidget();
  app.append(widget);
};
