console.log("Digital Clock")
// Calling Function Time
time();

function time(){
// Declaring variable
    let hourDisplay = document.getElementById('hour');               
    let minitueDisplay = document.getElementById('minitue');
    let secDisplay = document.getElementById('sec');
// Getting Current Seconds Minutes and Hours
// Function to continusly update time
setInterval(function(){
        let sec = new Date().getSeconds();
        let minitue = new Date().getMinutes();
        let hour = new Date().getHours();
        hour = (hour % 12) || 12;
        secDisplay.innerText = sec;
        minitueDisplay.innerText = minitue;
        hourDisplay.innerText = hour;
    }, 1000);
}
// Adding event listener on start button
document.getElementById('startStop').addEventListener('click', stopWatch);
function stopWatch(){
// Declaring Variables
    let hourDisplay = document.getElementById('stopHour');
    let minitueDisplay = document.getElementById('stopMinitue');
    let secDisplay = document.getElementById('stopSec');
    let milDisplay = document.getElementById('stopmil');
    let mil = 00;
    let sec =00;
    let minitue = 00;
    let hour = 00;
    
    if(milDisplay.innerText==0){
        mil = 00;
    }
    else{
        mil = parseInt(milDisplay.innerText)
    }
    if(secDisplay.innerText==0){
        sec = 00;
    }
    else{
        sec = parseInt(secDisplay.innerText)
    }
    if(minitueDisplay.innerText==0){
        minitue = 00;
    }
    else{
        minitue = parseInt(minitueDisplay.innerText)
    }
    if(hourDisplay.innerText==0){
        hour = 00;
    }
    else{
        hour = parseInt(hourDisplay.innerText)
    }
// To continusly update Time
    var stopwatch = setInterval(function updateTime(){
        mil += 1;
        milDisplay.innerText = mil;
        if(mil==100){
            mil=0;
            sec = sec + 01;
            secDisplay.innerText = sec;
        }        
        if(sec==60){
            sec = 0;
            minitue += 1;
            minitueDisplay.innerText = minitue;
        }
        if(minitue==60){
            minitue = 0;
            hour += 1;
            hourDisplay.innerText = hour;
        }
    },1 );
// To stop stopwatch
    document.getElementById('stopStop').addEventListener('click', function(){
        clearInterval(stopwatch)
    })
    
}
// To reset stopwatch
document.getElementById('resetStop').addEventListener('click', function(){
    let hourDisplay = document.getElementById('stopHour');
    let minitueDisplay = document.getElementById('stopMinitue');
    let secDisplay = document.getElementById('stopSec');
    let milDisplay = document.getElementById('stopmil');
    hourDisplay.innerText = '00';
    minitueDisplay.innerText = '00';
    secDisplay.innerText = '00';
    milDisplay.innerText = '00'
});
// Calling Function Alarm
alarm();
function alarm(){
// Declaring Variables
    let hourDisplay = document.getElementById('alHour');
    let minitueDisplay = document.getElementById('alMinitue');
    let secDisplay = document.getElementById('alSec');
// Opening Set Time Dialog Box
    document.getElementById('setAlarm').addEventListener('click', function(){
        document.querySelector('.alarmScreen').style.display = 'flex';
    })
// Closing Set Time Dialog Box
    document.getElementById('cancelAlarm').addEventListener('click', function(){
        document.querySelector('.alarmScreen').style.display = 'none';
    });
// Activating Timmer
document.getElementById('activateAlarm').addEventListener('click', function activateAlarm(){
    clearInterval(alarm)
    document.querySelector('.alarmScreen').style.display = 'none';          // Close dialog box after activating
    // Declaring Variables
    let sec = 0;
    let minitue = 0
    let hour = 0
    if(!(secDisplay.innerText==0)){
        sec = 00;
        minitue = 00;
        hour = 00;
    }
    else{
        sec = document.getElementById('setalS').value;
        minitue = document.getElementById('setalM').value;
        hour = document.getElementById('setalH').value;
    }
    // If someone has enter wrong input
        if((hour.length==0)&&(hour.length==0)&&(hour.length==0)){
            alert('Please Enter Correct Value')
            return ;
        }
    // Updating Timmer to DOM
        secDisplay.innerText = parseInt(sec);
        minitueDisplay.innerText = parseInt(minitue);
        hourDisplay.innerText = parseInt(hour);
        var alarm = setInterval(function (){
            sec-=1;
            secDisplay.innerText = sec;
            if(sec==00){
                if((sec==00) && (minitue==0) && (hour==0)){
                    alert('Timmer Is Over');
                    clearInterval(alarm);
                    sec = 00;
                    console.log('Trigered')
                }
                sec = 60;
                if(minitue==0){
                    minitue = 0;
                }
                else{
                    minitue -= 1;
                }
                minitueDisplay.innerText = minitue;
            }
            if(minitue==00 && hour!=0){
                minitue = 60;
                if (hour==0){
                    hour = 0;
                }
                else{
                    hour -= 1;
                }
                hourDisplay.innerText = hour;
            }
        },1000)
    });
}