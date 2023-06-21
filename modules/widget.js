import { renderContent } from './content.js';

const createWidget = async () => {
  const widget = document.createElement('div');
  widget.className = 'widget';
  await renderContent(widget);
  return widget;
};

export const addWidget = async (app) => {
  const widget = await createWidget();
  app.append(widget);
};
