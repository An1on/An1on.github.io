const [info, phases] = [].slice.apply(document.querySelector('.buttons').children);
ga('create', 'UA-XXXXX-Y', 'auto', 'tracker1');
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
