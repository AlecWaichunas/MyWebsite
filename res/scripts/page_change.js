var filePath = "res/pages/";
var startPage = filePath + "about.html";
var tabs = [
            [$("#profile_pic"), "about.html"],
            [$("#about_tab"), "about.html"],
            [$("#projects_tab"), "projects.html"],
            [$("#contact_tab"), "contact.html"],
            [$("#resume_tab"), "resume.html"]
        ];
var tabSelected = 0;//keep track of which tab is selected

var $content = $("#content");
//load first page
$content.load(startPage);

//get all the tabs a click
for(var i = 0; i < tabs.length; i++){
    //function for variable scope within click event
    (function(tab, link, startPos){
        tab.on("click", function(){
            var header = $("#content_header");
            var body = $("#content_body");

            var minWidth = $("#content").css("min-width");
            $("#content").css({"min-width": $("#content").width()});
            $("body").css({"overflow-x": "hidden"});


            var moveChildren = function(leftAmount, parent, time){
                parent.children().each(function(){
                    this.animate({
                        fontSize: 0
                    }, time);
                });
            };

            moveChildren($(document).width(), header, 500);

            /*moveChildren($(document).width(), headerChildren, 500);
            moveChildren($(document).width(), bodyChildren, 500);

            setTimeout(function(){
                $("#content").empty();
                $("#content").load(link);
                moveChildren($(document).width(), $("#content_header").children(), 0);
                moveChildren($(document).width(), $("#content_body").children(), 0);
                moveChildren(startPos, $("#content_header").children(), 500);
                moveChildren(startPos, $("#content_body").children(), 500);
                setTimeout(function(){
                    $("#content").css({"min-width": minWidth})
                    $("body").css({"overflow-x": "auto"})
                }, 500)
            }, 500)
            /*
            $("#content").animate({
                left: $(document).width(),
            }, 500, function(){
                $("#content").empty();
                $("#content").load(link);
                $("#content").animate({
                    left: startPos
                }, 500, function(){
                });
            });*/
        });
    })(tabs[i][0], filePath + tabs[i][1], $content.position().left);
}
