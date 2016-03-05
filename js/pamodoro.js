/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var timer = null;
    $(".plus1").click(function(){
        var newVal = parseInt($(".breakTime").attr("value"))  + parseInt(1);
        if (newVal < 1){
            newVal = 1;
        }
        $(".breakTime").val(newVal);
        $(".countdownTimer").text($(".workTime").attr("value")+":00");
    });
    $(".minus1").click(function(){
        var newVal = parseInt($(".breakTime").attr("value")) - parseInt(1);
        $(".breakTime").val(newVal);
        if (newVal < 1){
            newVal = 1;
        }
        $(".countdownTimer").text($(".workTime").attr("value")+":00");
    });
    $(".plus2").click(function(){
        var newVal = parseInt($(".workTime").attr("value"))  + parseInt(1);
        if (newVal < 1){
            newVal = 1;
        }
        $(".workTime").val(newVal);
        clearInterval(timer);
        $(".countdownTimer").text($(".workTime").attr("value")+":00");
        
    });
    $(".minus2").click(function(){
        var newVal = parseInt($(".workTime").attr("value")) - parseInt(1);
        if (newVal < 1){
            newVal = 1;
        }
        $(".workTime").val(newVal);
        $(".countdownTimer").text($(".workTime").attr("value")+":00");
    });
    $(".countdownTimer").text($(".workTime").attr("value")+":00");
    
    clicked = true;
    workTimer = true;
    breakTimer = false;
    function updating(){
        var time = $(".countdownTimer").text();
        var tsec = parseInt(time.slice(-2));
        $(".timeSec").text(tsec.toString());
        var tmin = parseInt(time.slice(-time.length,-3));
        $(".timeMin").text(tmin.toString());
        var timeNum = tmin*60 + tsec;
        $(".timeMin").text(timeNum.toString());
        var currTime = tmin*60 + tsec - 1;
        $(".timeMin").text(currTime.toString());
       // $(".timeMin").text(currTime.toString());
        var secTime = currTime%60;
        var minTime = Math.floor(currTime/60);
        if (currTime < 0){
            return 0;
        }
    //count++;
        //$(".timeMin").text(("0"+secTime.toString()).slice(-2)+":"+ ("0"+minTime.toString()).slice(-2))
        return ("0"+minTime.toString()).slice(-2)+":"+ ("0"+secTime.toString()).slice(-2); 
        //$(".countdownTimer").text(("0"+secTime.toString()).slice(-2)+":"+ ("0"+minTime.toString()).slice(-2)); 
        }
    
    function looping(){
            if (workTimer){
                timer = setInterval(function(){
                    var updateClock = updating();
                    if (updateClock === 0){
                        clearInterval(timer);
                        $(".countdownTimer").text("helloooo");
                        workTimer = false;
                        looping();
                    }
                    $(".countdownTimer").text(updating());
                },1000);
            }
            else{
                $(".countdownTimer").text($(".breakTime").attr("value")+":00");
                var updateClock = updating();
                if (updateClock === 0){
                        clearInterval(timer);
                        workTimer = true;
                        looping();
                    }
                timer = setInterval(function(){
                    $(".countdownTimer").text(updating());
                },1000);
            }
            //timer = setInterval(function(){
            //$(".countdownTimer").text(updating());
        //},1000);
            //}
    }
    
    
    $(".countdownTimer").click(function(){
        if (clicked){
            clicked = !clicked;
            looping();
        }
        else {
            clearInterval(timer);
            clicked = !clicked;
        }
    });
   /* var clicked = true;
    $(".countdownTimer").click(function(){
        var count = 0;
        var time = $(".countdownTimer").text();
        var tsec = parseInt(time.slice(-2));
        var tmin = parseInt(time.slice(-time.length,-3));
        var timeNum = tmin*60 + tsec;
        //var time = parseInt($(".workTime").attr("value"));
        if(clicked){
            clicked = !clicked;
            $(".countdownTimer").attr("value");
            var timer = setInterval(function(){
                    if(count >= (timeNum)){
                        clearInterval(timer);
                    }
                var currTime = timeNum - count;
                var secTime = currTime%60;
                var minTime = Math.floor(currTime/60);
                $(".countdownTimer").text(("0"+minTime.toString()).slice(-2)
                                +":"+ ("0"+secTime.toString()).slice(-2)); 
                count++;
                $(".countdownTimer").click(function(){
                    clearInterval(timer);
                    timer = null;
                });
                
                if($(".plus1,.plus2,.minus1,minus2").click(function(){
                    return true;
                })){
                
                }},1000);
                
            }
            else{
                clicked = !clicked;
            }
    });*/
    
    function resetTimer(){
        clearInterval(timer);
    }
    
    $(".reset").click(resetTimer());
        
 });    
