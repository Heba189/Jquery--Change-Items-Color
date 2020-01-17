let colorContainers = $(".Color-item");
colorContainers.eq(0).css("background-color","#09c")
colorContainers.eq(1).css("background-color","#ccc")
colorContainers.eq(2).css("background-color","yellow")
colorContainers.eq(3).css("background-color","lightblue")
colorContainers.eq(4).css("background-color","orange")
colorContainers.eq(5).css("background-color","tomato")

colorContainers.click(function(){
   let Color = $(this).css("backgroundColor");
   $("#features").css("color",Color)
   $("i").css("color",Color)
   $("#s1").css("color",Color)
   $("#s2").css("color",Color)
   $("#navbar li.current").css("color",Color)
   $(body).css("backgroundColor", Color)
})


//slide left by icon cogs
$("#options-container i").click(function(){
    //return width with padding + margin
    let boxWidth = $(".options-box").outerWidth(true);


    //check options-container left

    if($("#options-container").css("left") == "0px"){
        $("#options-container").animate({left:`-${boxWidth}px`},1000)
    }
    else{
        $("#options-container").animate({left:'0px'},1000)
    }
 
})

