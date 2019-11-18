import App from './app';

window.ASPECT_RATIO = 0.460431654676259;

const documentReady = (callback) => {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    callback();
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        callback();
      },
      false
    );
  }
};

documentReady(() => {
  const app = new App();
  document.body.appendChild(app.view);
});
