$(function(){const t=["apple","banana","cherries","grapes","mango","orange","peach","pear","pineapple","watermelon"],e=$("#start-game"),o=$("#scoreValue"),a=$("#score-game-over-value"),n=$("#valueLife"),r=$("#fruits-container"),c=$("#modal-game-over"),h=$("#fruit");let l,s,m,p,u=!1;h.mouseover(function(){l++,o.html(l),clearInterval(p),h.hide("explode",500),setTimeout(g,500)});const d=function(){for(n.empty(),i=0;i<s;i++)n.append("<img src='img/heart.png' class='heart'>")},f=function(){h.attr("src","img/"+t[Math.round(9*Math.random())]+".png")},g=function(){h.show(),f(),h.css({left:Math.round(90*Math.random())+"%",top:-100}),m=1+Math.round(5*Math.random()),p=setInterval(function(){h.css("top",h.position().top+m),h.position().top>r.height()&&(s>1?(h.show(),f(),h.css({left:Math.round(90*Math.random())+"%",top:-100}),m=1+Math.round(5*Math.random()),s--,d()):(u=!1,n.html("You lose"),e.html("Start game"),c.show(),a.html(l),clearInterval(p),h.hide()))},10)};e.click(function(){1==u?location.reload():(u=!0,l=0,o.html(l),s=3,d(),e.html("Reset game"),g())}),c.click(function(){c.hide()})});