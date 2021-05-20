function pending(){
    var btnStart = document.querySelector('.btn-start');
    var btnStop = document.querySelector('.btn-stop');
    var btnReset = document.querySelector('.btn-reset');

    var eSecond = document.querySelector('#seconds');
    var eTicks = document.querySelector('#ticks');
    var seconds = 00;
    var ticks = 00;
    var interval;
    btnStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start,10)
    }
    
    btnStop.onclick = function(){
        clearInterval(interval);
    }
    btnReset.onclick = function(){
        clearInterval(interval);
        ticks = '00';
        seconds = '00';
        eSecond.innerHTML = seconds;
        eTicks.innerHTML = ticks;
    }
    function start() {
        ticks++;
        if(ticks <= 9){
            eTicks.innerHTML = '0' + ticks;
        }
        if(ticks > 9){
            eTicks.innerHTML = ticks;
        }
        if(ticks > 99){
            seconds++;
            ticks = 0;
            eSecond.innerHTML = '0' + seconds;
            eTicks.innerHTML = '0' + ticks;

        }
        if(seconds > 9){
            eSecond.innerHTML = seconds;
        }
        
    }
}