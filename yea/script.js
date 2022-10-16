/* can u put a image that is 51x51 */
var img = document.createElement('img');
img.src = 'https://cdn.discordapp.com/attachments/962467610581151796/1031273694686892032/imagme.png';
img.width = 51;
img.height = 51;
document.body.appendChild(img);
/* put it in the middle */
img.style.position = 'absolute';
img.style.left = '50%';
img.style.top = '50%';
img.style.marginLeft = '-25px';
img.style.marginTop = '-25px';
/* make the background #151515 */
document.body.style.backgroundColor = '#151515';
/* add a text called current cookies: 0 */
var cookies = document.createElement('div');
cookies.innerHTML = 'Current cookies: 0';
cookies.style.color = '#fff';
cookies.style.position = 'absolute';
cookies.style.left = '10px';
cookies.style.top = '10px';
document.body.appendChild(cookies);
/* make it when u press the image the current cookie goes up */
img.onclick = function() {
  cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) + 1);
};
/* put the text in the middle */
cookies.style.left = '50%';
cookies.style.marginLeft = '-100px';
/* put the text in the middle of the screen */
cookies.style.top = '43%';
cookies.style.marginTop = '-10px';
/* put the text to the right */
cookies.style.left = '10px';
cookies.style.marginLeft = '0px';
/* put the text to the left */
cookies.style.left = '-40%';
cookies.style.marginLeft = '-100px';
/* put the text right */
cookies.style.left = '364px';
cookies.style.marginLeft = '0px';
/* make the website responsive */
cookies.style.left = '10px';
cookies.style.marginLeft = '0px';
cookies.style.position = 'absolute';
cookies.style.top = '10px';
cookies.style.marginTop = '0px';
/* put the text in the left 364px */
cookies.style.left = '364px';
cookies.style.marginLeft = '0px';
/* put the text down */
cookies.style.top = '364px';
cookies.style.marginTop = '-200px';
/* make a button thats called save */
var save = document.createElement('button');
save.innerHTML = 'Save';
save.style.position = 'absolute';
save.style.left = '10px';
save.style.top = '364px';
save.style.marginTop = '-200px';
document.body.appendChild(save);
/* put the button in the middle of the screen */
save.style.left = '50%';
save.style.marginLeft = '-50px';
/* put the save button down by 10 pixels */
save.style.top = '374px';
save.style.marginTop = '-130px';
/* make the save button responsive */
save.style.position = 'absolute';
save.style.left = '10px';
save.style.marginLeft = '0px';
save.style.top = '364px';
save.style.marginTop = '-200px';
/* undo */
save.style.position = 'absolute';
save.style.left = '50%';
save.style.marginLeft = '-50px';
save.style.top = '374px';
save.style.marginTop = '-130px';
/* make another button and call it load */
var load = document.createElement('button');
load.innerHTML = 'Load';
load.style.position = 'absolute';
load.style.left = '10px';
load.style.top = '364px';
load.style.marginTop = '-200px';
document.body.appendChild(load);
/* put it on the save button */
load.style.left = '56%';
load.style.marginLeft = '-50px';
load.style.top = '374px';
load.style.marginTop = '-130px';
/* make the save button save your proggress */
save.onclick = function() {
  localStorage.setItem('cookies', cookies.innerHTML.split(': ')[1]);
};
/* make the load button load ur saved progress */
load.onclick = function() {
  cookies.innerHTML = 'Current cookies: ' + localStorage.getItem('cookies');
};
/* make a button called auto clicker */
var autoClicker = document.createElement('button');
autoClicker.innerHTML = 'Auto Clicker';
autoClicker.style.position = 'absolute';
autoClicker.style.left = '10px';
autoClicker.style.top = '364px';
autoClicker.style.marginTop = '-200px';
document.body.appendChild(autoClicker);
/* put the button on load button */
autoClicker.style.left = '62%';
autoClicker.style.marginLeft = '-50px';
autoClicker.style.top = '374px';
autoClicker.style.marginTop = '-130px';
/* make the autoclicker cost 10 cookies and make it give u 1 cookie every secound */
autoClicker.onclick = function() {
  if (parseInt(cookies.innerHTML.split(': ')[1]) >= 10) {
    cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) - 10);
    setInterval(function() {
      cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) + 1);
    }, 1000);
  }
};
/* add a button called farm */
var farm = document.createElement('button');
farm.innerHTML = 'Farm';
farm.style.position = 'absolute';
farm.style.left = '10px';
farm.style.top = '364px';
farm.style.marginTop = '-200px';
document.body.appendChild(farm);
/* put the button on the save button */
farm.style.left = '44%';
farm.style.marginLeft = '-50px';
farm.style.top = '374px';
farm.style.marginTop = '-130px';
/* make the farm button cost 40 cookies and make it give u 5 cookies every 2 secounds */
farm.onclick = function() {
  if (parseInt(cookies.innerHTML.split(': ')[1]) >= 40) {
    cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) - 40);
    setInterval(function() {
      cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) + 5);
    }, 2000);
  }
};
/* make a button called Multiplyer */
var multiplyer = document.createElement('button');
multiplyer.innerHTML = 'Multiplyer';
multiplyer.style.position = 'absolute';
multiplyer.style.left = '10px';
multiplyer.style.top = '364px';
multiplyer.style.marginTop = '-200px';
document.body.appendChild(multiplyer);
/* add a text called Multiplyer count: 0 */
var multiplyerCount = document.createElement('div');
multiplyerCount.innerHTML = 'Multiplyer count: 0';
multiplyerCount.style.color = '#fff';
multiplyerCount.style.position = 'absolute';
multiplyerCount.style.left = '10px';
multiplyerCount.style.top = '10px';
document.body.appendChild(multiplyerCount);
/* make the multiplyer button give u always double the cookies u gain */
multiplyer.onclick = function() {
  if (parseInt(cookies.innerHTML.split(': ')[1]) >= 100) {
    cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) - 100);
    multiplyerCount.innerHTML = 'Multiplyer count: ' + (parseInt(multiplyerCount.innerHTML.split(': ')[1]) + 1);
    img.onclick = function() {
      cookies.innerHTML = 'Current cookies: ' + (parseInt(cookies.innerHTML.split(': ')[1]) + 2);
    };
  }
};
/* put the multiplyer button 70 pixels up */
multiplyer.style.top = '294px';
multiplyer.style.marginTop = '-264px';
/* add a image at the bottom right cornor */
var img2 = document.createElement('img');
img2.src = 'https://cdn.discordapp.com/attachments/962467610581151796/1031278415363448872/unknown.png';
img2.width = 100;
img2.height = 100;
img2.style.position = 'absolute';
img2.style.left = '10px';
img2.style.top = '10px';
document.body.appendChild(img2);
/* put the image down by 50 pixels */
img2.style.top = '330px';
img2.style.marginTop = '0px';