let circle = document.getElementById("cir");

function update(){
    document.addEventListener('mousemove', (e) => {
        circle.style.left = e.clientX - 15 + 'px';
        circle.style.top = e.clientY - 15 + 'px';
    });
}
    
setInterval(function(){ update(); }, 100);