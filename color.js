// var colors=["rgb(255, 0, 0)",
//             "rgb(0, 255, 0)",
//             "rgb(0, 0, 255)",
//             "rgb(255, 255, 0)",
//             "rgb(255, 0, 255)",
//             "rgb(0, 255, 255)"
// ]
var x = 6;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var all = document.querySelector("#main");
var msg = document.querySelector("#message");
var h1= document.querySelector("h1");
var button = document.querySelector("#new");
var select = document.getElementById("select");
var sq=document.querySelectorAll(".square");
var colors;
var top=document.querySelector("#top");

colors = random(x);
//var colors;

var selected =colors[Math.floor(((Math.random())*x)+1)];

select.textContent = selected;
var i;


easy.addEventListener("click",function () {
          x=3;
          hard.classList.remove("on");
          easy.classList.add("on");
          colors = random(x);

          selected =colors[Math.floor(((Math.random())*x)+1)];
          select.textContent = selected;

          for(i=0;i<sq.length;i++)
          {
            if(colors[i])
            {
            sq[i].style.background=colors[i];
            sq[i].style.color=colors[i];
            }
            else {
              sq[i].style.display="none";
            }
          }




          h1.style.background="steelblue";

})

hard.addEventListener("click",function(){
            x=6;
            hard.classList.add("on");
            easy.classList.remove("on");
            colors = random(x);
            selected =colors[Math.floor(((Math.random())*x)+1)];
            select.textContent = selected;

            for(i=0;i<sq.length;i++)
            {

              sq[i].style.background=colors[i];
              sq[i].style.color=colors[i];
              sq[i].style.display="block";

            }

});





button.addEventListener("click",function () {
    button.textContent="New Colors";
    h1.style.background="steelblue";

  //  h1.style.background= steelblue;
    colors = random(x);
    selected =colors[Math.floor(((Math.random())*x)+1)];
    select.textContent = selected;

    msg.textContent="";
    for(i=0;i<sq.length;i++)
    {
      if(colors[i])
      sq[i].style.background=colors[i];
      sq[i].style.color=colors[i];
    }

})

for(i=0;i<sq.length;i++)
{
  sq[i].style.background=colors[i];
  sq[i].style.color=colors[i];

  sq[i].addEventListener("click",
        function () {
          var chk = this.style.color;
                  if(chk==selected)
                {  alert("right answer");
                    msg.textContent="Correct!";
                    for(i=0;i<sq.length;i++)
                    sq[i].style.background=selected;
                    h1.style.background=selected;
                    button.textContent="Play Again?"
              }  else {
                  this.style.background = "#232323";
                  msg.textContent="Try Again";
                  }

         })
}

function random(num){
 var arr = [];
  for(i=0;i<num;i++)
  {
    var r = Math.floor((Math.random())*256);
    var g = Math.floor((Math.random())*256);
    var b = Math.floor((Math.random())*256);

    arr[i] = "rgb(" + r +", " +g +", "+b+")";

  }
  return arr;
}
