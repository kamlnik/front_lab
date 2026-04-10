let firstClicks = Number(localStorage.getItem("counter")); 

if(firstClicks == 0){
    document.getElementById("clicker_text").innerHTML = 0;
}else{
    document.getElementById("clicker_text").innerHTML = firstClicks - 1;
}


let first_date = Date.now();

function update(){
    let second_date = Date.now();
    let per = (second_date - first_date)/1000;
    let count = Number(localStorage.getItem("counter")) - firstClicks;

    if(per > 0.01 && count > 0){ // избегаем деления на ноль
        document.getElementById("clicker_info").innerHTML = (count / per).toFixed(2);
    }
}

setInterval(function(){ update(); }, 100);

function counter(){

    let count = Number(localStorage.getItem("counter"));
    if(count == 0){
        count = Number(1);
    }
    localStorage.setItem("counter", count + 1);
    document.getElementById("clicker_text").innerHTML = count;
}





