import { renderContent } from './content.js';

const createWidget = () => {
  const widget = document.createElement('div');
  widget.className = 'widget';
  renderContent(widget);
  return widget;
};

export const addWidget = (app) => {
  const widget = createWidget();
  app.append(widget);
};
