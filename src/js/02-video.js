import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeKey = 'videoplayer-current-time';
const initSeconds = localStorage.getItem(timeKey);

if (initSeconds) {
    player.setCurrentTime(initSeconds);
}

function saveCurrentTime(seconds) {
    localStorage.setItem(timeKey, seconds);
}

const saveTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', data => {
    saveTime(data.seconds);
});
