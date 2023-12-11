let txt1 = document.getElementsByid("txt1");
let txt2 = document.getElementsByid("txt2");
let txt3 = document.getElementsByid("txt3");
let txt4 = document.getElementsByid("txt4");
let txt5 = document.getElementsByid("txt5");
let txt6 = document.getElementsByid("txt6");

let card1 = document.getElementsByid("card1");
let card2 = document.getElementsByid("card2");
let card3 = document.getElementsByid("card3");
let card4 = document.getElementsByid("card4");
let card5 = document.getElementsByid("card5");
let card6 = document.getElementsByid("card6");

function chCard1() {
	document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";

    document.getElementById("card1").style.display = "flex";
    document.getElementById("txt1").style.color = 'black';

    document.getElementById("txt2").style.color = 'transparent';
    document.getElementById("txt3").style.color = 'transparent';
    document.getElementById("txt4").style.color = 'transparent';
    document.getElementById("txt5").style.color = 'transparent';
    document.getElementById("txt6").style.color = 'transparent';
};

function ChCard2(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";

    document.getElementById("card2").style.display = "flex";
    document.getElementById("txt2").style.color = 'black';

    document.getElementById("txt1").style.color = 'transparent';
    document.getElementById("txt3").style.color = 'transparent';
    document.getElementById("txt4").style.color = 'transparent';
    document.getElementById("txt5").style.color = 'transparent';
    document.getElementById("txt6").style.color = 'transparent';
};

function ChCard3(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";

    document.getElementById("card3").style.display = "flex";
    document.getElementById("txt3").style.color = 'black';

    document.getElementById("txt1").style.color = 'transparent';
    document.getElementById("txt2").style.color = 'transparent';
    document.getElementById("txt4").style.color = 'transparent';
    document.getElementById("txt5").style.color = 'transparent';
    document.getElementById("txt6").style.color = 'transparent';
};

function ChCard4(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";

    document.getElementById("card4").style.display = "flex";
    document.getElementById("txt4").style.color = 'black';

    document.getElementById("txt1").style.color = 'transparent';
    document.getElementById("txt2").style.color = 'transparent';
    document.getElementById("txt3").style.color = 'transparent';
    document.getElementById("txt5").style.color = 'transparent';
    document.getElementById("txt6").style.color = 'transparent';
    // document.getElementById("txt2").style.padding = "10px";
};

function ChCard5(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card6").style.display = "none";

    document.getElementById("card5").style.display = "flex";
    document.getElementById("txt5").style.color = 'black';

    document.getElementById("txt1").style.color = 'transparent';
    document.getElementById("txt2").style.color = 'transparent';
    document.getElementById("txt4").style.color = 'transparent';
    document.getElementById("txt3").style.color = 'transparent';
    document.getElementById("txt6").style.color = 'transparent';
    // document.getElementById("txt2").style.padding = "10px";
};

function ChCard6(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card3").style.display = "none";

    document.getElementById("card6").style.display = "flex";
    document.getElementById("txt6").style.color = 'black';

    document.getElementById("txt1").style.color = 'transparent';
    document.getElementById("txt2").style.color = 'transparent';
    document.getElementById("txt4").style.color = 'transparent';
    document.getElementById("txt5").style.color = 'transparent';
    document.getElementById("txt3").style.color = 'transparent';
};


// function ChCard2(card2, txt2){
//     if(card2.style.display == 'none'){
//         card2.style.display = 'flex';
//     }
//     else{
//         card2.style.display == 'none';
//     }

//     if(txt2.style.color == 'transparent'){
//         txt2.style.color == 'black';
//         txt2.style.padding = '20px';
//     }
//     else{
//         txt2.style.color = 'transparent';
//         txt2.style.padding = '0px';
//     }
    
    // document.getElementById("txt2").style.color = 'black';
    // document.getElementById("txt2").style.padding = "10px";
// };