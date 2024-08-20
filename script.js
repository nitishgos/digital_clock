function updatetime(){
    const timeElement= document.getElementById('time');
    const now=new Date();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    hour= hour<10 ? '0'+hour : hour;
    minute= minute<10 ? '0'+ minute : minute;
    second= second<10 ? '0'+ second : second;
    timeElement.textContent=`${hour}:${minute}:${second}`;
}
setInterval(updatetime,1000);
updatetime();