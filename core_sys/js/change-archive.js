var main_area_page1 = document.getElementById("main_area_page1");
var now_page = 0;
var back_button = document.getElementById("back");
var next_button = document.getElementById("next");
var is_pc = false; 
var max_page = 0;
function next_page(){
    if(now_page + 1 <= max_page){
        now_page++;
        console.log(now_page);
        chack_button_visibility ();
        main_area_page1.src = Get_PCorMOBILE_Page();
    }
}
function back_page(){
    if(now_page - 1 >= 0){
        now_page--;
        console.log(now_page);
        chack_button_visibility ();
        main_area_page1.src = Get_PCorMOBILE_Page();
    }
}
function load_page(){
    main_area_page1.src = Get_PCorMOBILE_Page();
    chack_button_visibility ();
}
function chack_button_visibility (){
    switch(now_page)
    {
        case 0:
            back_button.style.visibility  ="hidden";
            next_button.style.visibility  ="visible";
            break;
        case max_page:
            back_button.style.visibility  ="visible";
            next_button.style.visibility  ="hidden";
            break;
        default:
            back_button.style.visibility  ="visible";
            next_button.style.visibility  ="visible";
    }
}
function Get_PCorMOBILE_Page(){
    
    var path;
    if(is_pc)//PCの場合
    {
        return "../../core_sys/images/main-stage/archive/desktop/desktop_" + now_page + ".png";
    }else{
        return "../../core_sys/images/main-stage/archive/mobile/mobile_" + now_page + ".png";
    }
}
function Set_Max_Page(){
    if(is_pc){
        max_page = 6;
    }else{
        max_page = 13;
    }
}
window.onload = function(){
    console.log(`ウィンドウサイズの横幅`);
    console.log(window.innerWidth);
    if(1080 < window.innerWidth){
        is_pc = true;
    }
    Set_Max_Page();
    load_page();
    
}