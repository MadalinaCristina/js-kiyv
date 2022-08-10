function paragraphLog(message) {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector(`.${logContainerClass}`);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);

    document.body.append(logContainer);
  }

  const paragraphElement = document.createElement('p');
  paragraphElement.innerText = message;

  logContainer.append(paragraphElement);
}

console.domLog = paragraphLog;

console.domLog('pauza');
