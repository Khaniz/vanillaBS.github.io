const clock = document.querySelector("#clock")

CurrentTime();
var intervalTime = setInterval(CurrentTime, 1000);

function CurrentTime(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    clock.innerHTML=`${currentHour} : ${currentMinute}`;
}