const [info, phases] = [].slice.apply(document.querySelector('.buttons').children);

function sendInfoAboutSettings() {
  console.error('send');

}

function sendInfoAboutSkips() {

}

function sendAboutUsers() {
    setTimeout(() => {

    }, 3600000)
}

window.addEventListener('click', sendInfoAboutSettings);
