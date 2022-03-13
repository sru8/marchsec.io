    let a = 60;
    let b = 4;
    const simple_fn = function() {
        const timer_ele = document.getElementById('minutes ');
        const timer = document.getElementById('seconds');
        timer.innerText = `${a} seconds `;

        console.log("hiiiiiii");
        a -= 1;
        if (a <= 59) {


            timer_ele.innerText = `${b} minutes `;



        }
        if (a <= 0) {
            b -= 1;
            timer_ele.innerText = `${b} seconds `;
            a = 60;

        }
    }



    const stop1 = function() {
        const inter = setInterval(simple_fn, 1000);
    }



    var start = document.getElementById("start");

    start.addEventListener('click', setInterval(simple_fn, 1000));
    start.value = "stop";
    const stop2 = document.getElementById('')