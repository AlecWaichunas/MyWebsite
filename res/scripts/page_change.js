var tabs = [
            [$("#about_tab"), "about.html"],
            [$("#projects_tab"), "contact.html"],
            [$("#contact_tab"), "contact.html"],
            [$("#resume_tab"), "contact.html"]
        ];
$(document).ready(function(){
    $("#content").load("about.html", function(){
            alert("Loaded");
    });
});

for(var i = 0; i < tabs.length; i++){
    tabs[i][0].click(function(){
        $("#content").empty();
        $("#content").load("../pages/" + (tabs[i][1]));
    });
}
