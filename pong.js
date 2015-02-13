count = 0;
a=121;
function hit(){
    //document.write("hit");
    dx = -dx;
    dy = -dy;
    //inteval--;
}
function out(){
    x=500;
    y=400;
    //score = document.getElementById("score");
    // var a  = parseInt(score.innerHTML(),10);
    // score.innerHTML() = a--;
    //alert(a);
}
function move(){
    var bat_y = parseInt(bat1.style.top,10);
    var text_y = parseInt(text.style.top,10);
    var text_x = parseInt(text.style.left,10); 
    if(x==900){
        hit();
    }
    if(x==10 && y>a && y<=(a+100000) ){
        hit();
        //document.write('here');   
    }
    if(x > 900){
        out();
    }
    //document.write(text_x);
    if(x < 10){
        out();  
        //document.write(a);
        
    }   
    /*
    if(parseInt(text.style.left,10)==10 && (parseInt(text.style.top,10) > parseInt(bat1.style.top,10))){
        hit();  
        alert("win");
    }
    //alert('hello');
    ///document.write( parseInt(bat1.style.left,10) + " and "+ parseInt(text.style.left,10));
    if(parseInt(text.style.left,10) < 10)
        out();
    */
    if(x+dx > (screen.availWidth -w) || (x+dx<0)){
        dx = -dx;
    }
    if(y+dy > (screen.availHeight -h) || (y+dy<0)){
        dy = -dy;
    }
    x+=dx;
    y+=dy;
    text.style.position = "absolute";
    text.style.left = x;
    text.style.top = y;
    if(count%3==0){
        text.style.color="red";
    }else if(count%2==0){
        text.style.color="green";
    }else{
        text.style.color="blue";
    }
    count++;
}
function follow(event){
        ev=event||window.event; //get event info
        bat1.style.position="absolute";
        bat2.style.position="absolute";
        //text.style.left = ev.clientX +2 + "px";
        a = ev.clientY;
        bat1.style.top = ev.clientY ;
        bat2.style.top = ev.clientY ;
    }
    function start(){

    var map = []; //to store multiple keyPresses
    document.onkeydown = document.onkeyup = function(e){
        e = e || window.event;
        map[e.which] = e.type == 'keydown';
        if(map[38] && map[87]){// Left: up Right:up
           bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) - 10) + 'px';
           bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) - 10) + 'px';
        }else if(map[40] && map[87]){ // Left: up Right: down
            bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) + 10) + 'px';
            bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) - 10) + 'px';
        }else if(map[38] && map[83]){ //Left: down Right:up
            bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) - 10) + 'px';
            bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) + 10) + 'px';
        }else if(map[40] && map[83]){ //Left: down Right:down
            bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) + 10) + 'px';
            bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) + 10) + 'px';
        }else if(map[38]){
            bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) - 10) + 'px';
        }else if(map[40]){
            bat2.style.top = ((parseInt(bat2.style.top, 10) || 0) + 10) + 'px';
        }else if(map[87]){
            bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) - 10) + 'px';
        }else if(map[40]){
            bat1.style.top = ((parseInt(bat1.style.top, 10) || 0) + 10) + 'px';
        }

            
    }

    x=0,y=0,w=200,h=200;
    text = document.getElementById("text");
    bat1 = document.getElementById("bat1");
    bat2 = document.getElementById("bat2");
    dx=5,dy=5;
    interval =10;
    id_timeout = setInterval(move,interval);


}