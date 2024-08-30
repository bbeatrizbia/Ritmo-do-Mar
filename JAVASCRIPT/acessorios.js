
let to =new Date('jul 09 2024 00:00:0');
function update(){
    let from =new Date();
        diff=to-from;
        if(diff>0){
        days=setTwoDigi(Math.floor(diff/1000/60/60/24)),
        hours=setTwoDigi(Math.floor(diff/1000/60/60)%24),
        min=setTwoDigi(Math.floor(diff/1000/60)%60),
        sec=setTwoDigi(Math.floor(diff/1000)%60)
        document.querySelector('#days').innerText=days
        document.querySelector('#hours').innerText=hours
        document.querySelector('#min').innerText=min
        document.querySelector('#sec').innerText=sec            
}else{
    clearInterval(interval);
    document.querySelector('body').classList.add('alert')
}

}

let interval=setInterval(update,1000)

function setTwoDigi(argument) {
    return argument>9?argument:'0'+argument;
}f