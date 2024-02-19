$(document).ready(function(){

    //1.
    $("div h2").hover(function(){
        $(this).css("color","red");
       
    },
    function(){
        $(this).css("color","blue");
    });

    //2.
    $("div.rectangle#green").hide();

    //3.
    $("div#checkbox input").checkboxradio({icon: false});

    //4.
    $("div.rectangle").click(function(){
        var rectangleColor = $(this).attr("id");
        $("div#checkbox label").css("color",rectangleColor);
    });

    //5.
    $("div#checkbox input").click(function(){
        var checkboxColor = $(this).val();
        $("div.rectangle#"+checkboxColor).toggle();
    });

    //6.
    $("div#slider").slider({
        min:10,
        max:140,
        value:140,
        slide: function(){
            $("div#largeur label").text($(this).slider("value")+"px");
            $("div.rectangle").width($(this).slider("value")+"px");
        }
    });

    //7.
    $("div#slider").hover(function(){
        $(this).tooltip($(this).title);
    });

    //8.
    $("div#message button").button({icon:"ui-icon-comment"}).click(function(){
        $("div#dialog").dialog("open");
    })
    $("div#dialog").dialog({title: $(this).title,autoOpen:false,
        buttons: [{
            text: "OK",
            click:function(){
                $(this).dialog("close");
            }
        }]       
    });


    //9.
    $("button#add").button({icon:"ui-icon-plus"}).click(function(){
        $(this).before("<p>"+$("div#paragraphe p:first-child").text());
    });
    
    //10.
    $("button#del").button({icon:"ui-icon-minus"}).click(function(){
        $("div#paragraphe p").last().remove();
    });

    //11.
    $("div#animation button").button({icon:"ui-icon-play"}).click(function(){
        $(this).animate({left: "300px"},"slow");
        $(this).animate({left : "0px"},"slow");
    });

    $("div#ajax button").button({icon:"ui-icon-help"}).click(function(){
        $("div#reponse").load("ajax/jquery.txt");
    })

    $("input#datapicker").click(function(){
        $(this).datepicker();
    });
    
    


});