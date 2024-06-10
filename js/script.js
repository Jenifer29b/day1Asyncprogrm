

let seconds = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const timer = (seconds) => {
    setTimeout(() => {
        document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[0];
        setTimeout(() => {
            document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[1];
            setTimeout(() => {
                document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[2];
                setTimeout(() => {
                    document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[3];
                    setTimeout(() => {
                        document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[4];
                        setTimeout(() => {
                            document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[5];
                            setTimeout(() => {
                                document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[6];
                                setTimeout(() => {
                                    document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[7];
                                    setTimeout(() => {
                                        document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[8];
                                        setTimeout(() => {
                                            document.getElementById("safeTimerDisplay").innerHTML = "00:" + seconds[9];
                                            setTimeout(() => {
                                                document.getElementById("safeTimerDisplay").innerHTML = "Happy Independence day"
                                            })
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    })
}


console.log(timer(seconds))


