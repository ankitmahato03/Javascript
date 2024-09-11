
function teminalTime(){
    setInterval(()=>{
        console.clear();
    const currentDate= new Date();
    let hours=currentDate.getHours();
    let minute= currentDate.getMinutes();
    let second = currentDate.getSeconds();
    console.log(`The time is ${hours}:${minute}:${second}`)
    },1000)
}

teminalTime();
