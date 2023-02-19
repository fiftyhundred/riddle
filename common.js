// Script reflected on all pages
//ネタバレしかないから注意だぞ？
ALNUM = "abcdefghijklmnopqrstuvwxyz0123456789";

function gonext() {
    var word = document.getElementById("keyword").value;
    document.location.href= word + '.html';
}

function gokeynext() {
    var word = document.getElementById("keyword").value;
    word = wordtrim(word);
    document.location.href= word + '.html';
}

function enter(keycode) {
    if (keycode == 13){
      gonext();
    }
}

function resetkey() {
    document.getElementById("keyword").value = "";
}

function setkey(word) {
    var old = document.getElementById("keyword").value;
    if (old.length == 4) return;
    document.getElementById("keyword").value = old + word;
}

function trim(word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
	var c = word.charAt(i);
	if (ALNUM.indexOf(c, 0) == -1) continue;
	result += c;
    }
    return result;
}

function wordtrim(word){
  if(word.indexOf("かぎ")!=-1|word.indexOf("カギ")!=-1|word.indexOf("鍵")!=-1|word.indexOf("key")!=-1){
    return "roomkey";
  }else if(word.indexOf("ピッキング")!=-1){
    return "picking";
  }
  return "undefined";
}

function setinCookie (attr, valu) {
  var cData = attr + "=" + encodeURIComponent(valu) +";";
  document.cookie = cData + "max-age=2592000;path=/";
}

function resetinCookie (attr) {
  var cData = attr + "=;";
  document.cookie = cData + "max-age=-1";
}

function getinCookie(attr){
  var i = document.cookie.indexOf(attr);
  if(i<0){
    return "";
  }
  var pick = document.cookie.substr(i);
  var fr = pick.indexOf("=");
  var to = pick.indexOf(";");
  if(to <= 0){
    to = pick.length
  }
  return decodeURIComponent(pick.substring(fr+1,to));
}

function keyword(attr){
  return "<b>"+attr+getinCookie(attr)+"</b>"
}

function collect(card,num){
  var x = parseInt(getinCookie(card));
  if(isNaN(x)){
    x = 0;
  }
  setinCookie(card,String(x|num));
}

function getcard(card){
  var x = parseInt(getinCookie(card));
  if(isNaN(x)){
    x = 0;
  }
  return x;
}

function resetallCookie(){
  var result = window.confirm('進行状況をリセットしますか?');
  if(result==true){
    for(i=1;i<=7;i++){
      resetinCookie("("+String(i)+")");
    }
    resetinCookie("card1");
    resetinCookie("goout");
    resetinCookie("keycard");
    resetinCookie("item");
    resetinCookie("boxkey");
    resetinCookie("hint2");
    resetinCookie("newexplore");
    resetinCookie("newknown");
    resetinCookie("completecard_1");
    window.location.reload(true);
  }
}

function knowncard1(){
  document.write("翔兄が急に探偵をやめようとしたのは"+keyword("(1)")+"に違いない。どうせ"+keyword("(2)")+"が関係があるはずだ。<br>"
  +"翔兄が命の危機に瀕していること、"+keyword("(3)")+"こと、"+keyword("(4)")+"こと、"+keyword("(5)")+"ことから<br>"
  +keyword("(6)")+"の可能性がある。<br>もしそうならば"+keyword("(7)")+"のではないだろうか。");
}

function checkrouse(){
  var link = "";
  for (var i=1;i<=4;i++){
    var suitchar = document.getElementById('suit' + String(i)).value;
    var numchar = document.getElementById('num' + String(i)).value;
    link = link + suitchar + numchar;
  }
  location.href = link + ".html";
}
