function timer() {

    const endDate = new Date('Dec 12, 2024, 00:00:00');

    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    let timeInterval

    function updateTimer() {
        const now = new Date();

        const timeDifferens = now - endDate ;

        if (timeDifferens <= 0) {
            daysElement.innerText = "0";
            hoursElement.innerText = "0";
            minutesElement.innerText = "0";
            secondsElement.innerText = "0";
            clearInterval(timeInterval);
            return;
        }

        const days = Math.floor(timeDifferens / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifferens % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifferens % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifferens % (1000 * 60)) / (1000));

        daysElement.innerText = days < 10 ? "0" + days : days;
        hoursElement.innerText = hours < 10 ? "0" + hours : hours;
        minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;

        if (seconds<10) {
        secondsElement.innerText = '0' + seconds;
        } else {
            secondsElement.innerText = seconds;
        }
    }

    updateTimer()

    timeInterval = setInterval(updateTimer, 1000);
}

export default timer;