// Hetkumar Goyani

var pictures = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg", "images/img5.jpeg", "images/img6.jpeg", "images/img7.jpeg", "images/img8.jpeg", "images/img9.jpeg"];
var timea;
var timeb;
var timec;
var x = 0;
var i = 0;
var seccount;
var second;
var h;

function picChange1() {
    var pics = document.getElementById("pic-1");
    x = Math.floor(Math.random() * 8);
    pics.src = pictures[x];
    i += 1;
    document.getElementById("imgcot").innerHTML = "Image has updated " + i + " times"; 
} 

var y = 0;
function picChange2() {
    var pics = document.getElementById("pic-2");
    y = Math.floor(Math.random() * 8);
    pics.src = pictures[y];
    i += 1;
    document.getElementById("imgcot").innerHTML = "Image has updated " + i + " times";
} 

var z = 0;
function picChange3() {
    var pics = document.getElementById("pic-3");
    z = Math.floor(Math.random() * 8);
    pics.src = pictures[z];
    i += 1;
    document.getElementById("imgcot").innerHTML = "Image has updated " + i + " times";
} 

function inputTime() {
    var q = parseInt(document.getElementById("time").value);
    clearInterval(timea);
    timea = setInterval(picChange1,q);
    clearInterval(timeb);
    timeb = setInterval(picChange2, q);
    clearInterval(timec);
    timec =setInterval(picChange3,q);
    seccount = q;
    second = setInterval(imgsec, 100);
    h = q;
}

function imgsec() {
    var second1 = document.getElementById("seccot");
    second1.innerHTML = "Time until automatic refresh: " + ( seccount / 1000 ).toFixed(1);
    seccount -= 100;
    if ( seccount == 0 ) {
        clearInterval(second);
        seccount = h;
        second = setInterval(imgsec, 100);
    }
}