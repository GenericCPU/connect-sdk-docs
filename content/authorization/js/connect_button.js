document.write('<link rel="stylesheet" href="https://handcash.io/resources/connectbutton/css/style.css"/>');

const connectButton = document.getElementById('connectButton');
const appId = connectButton.getAttribute('app-id');

function connectWithHandCash() {
}
console.log(connectButton);
connectButton.addEventListener('click', connectWithHandCash, false);