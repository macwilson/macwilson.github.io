// Get modal, get button/card, get span to close
// When clicked, open, when click on span or elsewhere, close

//PPO modal
var ppo = document.getElementById('ppo');
var pp_btn = document.getElementsByClassName("card")[0];
var span0 = document.getElementsByClassName("close")[0];
pp_btn.onclick = function() { ppo.style.display = "block"; }
span0.onclick = function() { ppo.style.display = "none"; }


//Synaptive work modal
var syn = document.getElementById('synaptive');
var syn_btn = document.getElementsByClassName("card")[1];
var span1 = document.getElementsByClassName("close")[1];
syn_btn.onclick = function() { syn.style.display = "block"; }
span1.onclick = function() { syn.style.display = "none"; }


//NN work modal
var nn1 = document.getElementById('plan');
var nn1_btn = document.getElementsByClassName('card')[2];
var span2 = document.getElementsByClassName("close")[2];
nn1_btn.onclick = function() { nn1.style.display = "block";}
span2.onclick = function() { nn1.style.display = "none";}


//VIP work modal
var vip = document.getElementById('viplab');
var vip_btn =document.getElementsByClassName("card")[3];
var span3 = document.getElementsByClassName("close")[3];
vip_btn.onclick = function() {vip.style.display = "block";}
span3.onclick = function() { vip.style.display = "none"; }


//stair tracker modal
var str=document.getElementById('stairs');
var str_btn = document.getElementsByClassName("card")[4];
var span4 = document.getElementsByClassName("close")[4];
str_btn.onclick = function() {str.style.display = "block";}
span4.onclick = function() { str.style.display = "none"; }


//Powered arm modal
var pow=document.getElementById('poweredarm');
var pow_btn = document.getElementsByClassName("card")[5];
var span5 = document.getElementsByClassName("close")[5];
pow_btn.onclick = function() {pow.style.display = "block";}
span5.onclick = function() { pow.style.display = "none"; }


//NN project modal
var nn2 = document.getElementById('natalnet');
var nn2_btn =document.getElementsByClassName("card")[6];
var span6 = document.getElementsByClassName("close")[6];
nn2_btn.onclick = function() {nn2.style.display = "block";}
span6.onclick = function() { nn2.style.display = "none"; }


//antifreeze project modal
var fog = document.getElementById('antifreeze');
var fog_btn =document.getElementsByClassName("card")[7];
var span7 = document.getElementsByClassName("close")[7];
fog_btn.onclick = function() {fog.style.display = "block";}
span7.onclick = function() { fog.style.display = "none"; }


//shelmet modal
var shl = document.getElementById('shelmet');
var shl_btn =document.getElementsByClassName("card")[8];
var span8 = document.getElementsByClassName("close")[8];
shl_btn.onclick = function() {shl.style.display = "block";}
span8.onclick = function() { shl.style.display = "none"; }


//furniture modal
var frn = document.getElementById('furniture');
var frn_btn =document.getElementsByClassName("card")[9];
var span9 = document.getElementsByClassName("close")[9];
frn_btn.onclick = function() {frn.style.display = "block";}
span9.onclick = function() { frn.style.display = "none"; }


//website modal
var web = document.getElementById('site');
var web_btn =document.getElementsByClassName("card")[10];
var span10 = document.getElementsByClassName("close")[10];
web_btn.onclick = function() {web.style.display = "block";}
span10.onclick = function() { web.style.display = "none"; }


//publications modal
var pub = document.getElementById('publications');
var pub_btn =document.getElementsByClassName("card")[11];
var span11 = document.getElementsByClassName("close")[11];
pub_btn.onclick = function() {pub.style.display = "block";}
span11.onclick = function() { pub.style.display = "none"; }


//awards modal
var awd = document.getElementById('awards');
var awd_btn =document.getElementsByClassName("card")[12];
var span12 = document.getElementsByClassName("close")[12];
awd_btn.onclick = function() {awd.style.display = "block";}
span12.onclick = function() { awd.style.display = "none"; }


//honours modal
var hon = document.getElementById('otherhonours');
var hon_btn =document.getElementsByClassName("card")[13];
var span13 = document.getElementsByClassName("close")[13];
hon_btn.onclick = function() {hon.style.display = "block";}
span13.onclick = function() { hon.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == ppo) {ppo.style.display = "none";}
  if (event.target == syn) {syn.style.display = "none";}
  if (event.target == nn1) {nn1.style.display = "none";}
  if (event.target == vip) {vip.style.display = "none";}
  if (event.target == str) {str.style.display = "none";}
  if (event.target == pow) {pow.style.display = "none";}
  if (event.target == nn2) {nn2.style.display = "none";}
  if (event.target == fog) {fog.style.display = "none";}
  if (event.target == shl) {shl.style.display = "none";}
  if (event.target == frn) {frn.style.display = "none";}
  if (event.target == web) {web.style.display = "none";}
  if (event.target == pub) {pub.style.display = "none";}
  if (event.target == awd) {awd.style.display = "none";}
  if (event.target == hon) {hon.style.display = "none";}
}


