
let input = document.getElementById('input')
let inputValue = input.ariaValueMax;

function openUrlIphone(inputValue) {
    const width = 375;
    const height = 812;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
}

function openUrlGalaxy(url) {
    const width = 412;
    const height = 869;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
}

function openUrlIpad(url) {
    const width = 1024;
    const height = 1366;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
}
function openUrlMac(url) {
    const width = 1920;
    const height = 1080;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
}