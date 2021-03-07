var main_area = document.getElementById("main_area");
var now_page = 0;
var back_button = document.getElementById("back");
var next_button = document.getElementById("next");
function next_page(){
    if(now_page + 1 <= 20){
        now_page++;
        console.log(now_page);
        chack_button_visibility ();
        main_area.src = "../core_sys/images/theater_manga/" + now_page + ".jpg";
    }
}
function back_page(){
    if(now_page - 1 >= 0){
        now_page--;
        console.log(now_page);
        chack_button_visibility ();
        main_area.src = "../core_sys/images/theater_manga/" + now_page + ".jpg";
    }
}
function load_page(){
    main_area.src = "../core_sys/images/theater_manga/" + now_page + ".jpg";
    chack_button_visibility ();
}
function chack_button_visibility (){
    switch(now_page)
    {
        case 0:
            back_button.style.visibility  ="hidden";
            next_button.style.visibility  ="visible";
            break;
        case 20:
            back_button.style.visibility  ="visible";
            next_button.style.visibility  ="hidden";
            break;
        default:
            back_button.style.visibility  ="visible";
            next_button.style.visibility  ="visible";
    }
}
window.onload = function(){
    load_page();
}