sec_sound=new Audio("tic_sound.mp3")
five_min_sound=new Audio("ding dong.mp3")
setInterval(()=>
{
    sec_sound.play();
},100)

setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    
    hrotation= 30*htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;


    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);