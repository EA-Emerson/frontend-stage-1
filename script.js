document.addEventListener('DOMContentLoaded', () => {
    const timeUTCElement = document.getElementById('time-utc');
    const dayElement = document.getElementById('day');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        timeUTCElement.textContent = utcTime;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        dayElement.textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});