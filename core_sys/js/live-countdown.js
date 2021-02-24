function dateCounter() {
 
    var timer = setInterval(function() {
    //現在の日時取得
    var nowDate = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2021/03/12 13:54:30");//2月中は目をつぶってください
    //var anyDate = new Date("2021/02/12 13:54:30");//デバッグ用
    //日数を計算
    //var daysBetween = Math.ceil((anyDate - nowDate)/(1000*60*60*24));
    var daysBetween = anyDate.getDay() - nowDate.getDay();
    var ms = (anyDate - nowDate);
    if (ms >= 0) {
        //時間を取得
        var h = Math.floor(ms / 3600000);
        var _h = h % 24;
        //分を取得
        var m = Math.floor((ms - h * 3600000) / 60000);
        //秒を取得
        var s = Math.round((ms - h * 3600000 - m * 60000) / 1000);
 
        //HTML上に出力
        document.getElementById("live").innerHTML = daysBetween + "日と" +_h + "時間" + m + "分" +s + "秒";
 
        if ((h == 0) && (m == 0) && (s == 0)) {
        clearInterval(timer);
        document.getElementById("live").innerHTML = "<a href=https://youtu.be/6jBMaeR8qNA>配信中！</a>"
        }
    }else{
        document.getElementById("live").innerHTML = "<a href=https://youtu.be/6jBMaeR8qNA>配信中！</a>";
    }
    }, 1000);
}
dateCounter();