function dateCounter() {
 
    var timer = setInterval(function() {
    //現在の日時取得
    var nowDate = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2021/03/13 01:55:00");
    //var anyDate = new Date("2021/02/12 13:54:30");//デバッグ用
    //日数を計算
    //var daysBetween = Math.ceil((anyDate - nowDate)/(1000*60*60*24));
    var daysBetween = anyDate.getDate() - nowDate.getDate();//2月中は目をつぶってください
    //console.log(nowDate);
    //console.log(anyDate);
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
        document.getElementById("live").innerHTML = "Live開始まであと" + daysBetween + "日と" +_h + "時間" + m + "分" +s + "秒";
 
        if ((h == 0) && (m == 0) && (s == 0)) {
        clearInterval(timer);
        document.getElementById("live").innerHTML = "<a href=https://youtu.be/6jBMaeR8qNA>配信中！</a>"
        }
    }else{
        document.getElementById("live").innerHTML = "<a href=https://youtu.be/6jBMaeR8qNA>配信中！</a>";
    }
    }, 1000);
}
//dateCounter();


// ▼ カウントダウンタイマーの設定
function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
  }
  CountdownTimer.prototype = {
    initialize: function (elm, tl, mes) {
      this.elem = document.getElementById(elm);
      this.tl = tl;
      this.mes = mes;
    },
    countDown: function () {
      var timer = '';
      var today = new Date();
      var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
      var hour = Math.floor((day * 24) + ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
      var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
      var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
      var me = this;
  
      if ((this.tl - today) > 0) {
        if (hour) timer += '<span class="cdt_num">' + hour + '<small>時間</small>';
        timer += '<span class="cdt_num">' + this.addZero(min) + '<small>分</small><span class="cdt_num">' + this.addZero(sec) + '<small>秒</small><span class="cdt_num">' + this.addZero(milli) + '';
        this.elem.innerHTML = timer;
        tid = setTimeout(function () {
          me.countDown();
        }, 10);
      } else {
        this.elem.innerHTML = this.mes;
        return;
      }
    },
    addZero: function (num) {
      return ('0' + num).slice(-2);
    }
  }
  
  // ▼ 開始＆終了日時の指定と日付の判別
  function CDT() {
    var myD = Date.now(); // 1970/1/1午前0時から現在までのミリ秒
    var start = new Date('2021-03-12T13:55+09:00'); // 開始日時の指定
    var myS = start.getTime(); // 1970/1/1午前0時からの開始日時までのミリ秒
    var end = new Date('2021-03-12T14:15+09:00'); // 終了日時の指定
    var myE = end.getTime(); // 1970/1/1午前0時から終了日時までのミリ秒
  
    // 今日が開始日前か期間中か終了日後かの判別
    if (myS <= myD && myE >= myD) {
      var text = '終了まで';
      var tl = end;
    } // 期間中
    else if (myS > myD) {
      var text = '開催まで';
      var tl = start;
    } // 開始日前
    else {
      var text = "";
    } // 終了日後
  
    var timer = new CountdownTimer("live", tl, '放送は終了しました'); // 終了日後のテキスト
    timer.countDown();
    target = document.getElementById("cdt_txt");
    target.innerHTML = text;
  }
  window.onload = function () {
    console.log('%c面白いものはなにもないよ。あるのはエラーログだけ。', 'font-weight: bold; font-size: large; color: #843D36');
    CDT();
  }