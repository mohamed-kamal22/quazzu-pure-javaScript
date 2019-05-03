/*jslint plusplus: true, evil: true */
/*global document,window, */


//  NavBar 

var myNav = document.createElement("div"),
    myBrand = document.createElement("a"),
    myNavLinks = document.createElement("ul"),
    myContainer = document.createElement("div"),
    myLinks,
    myLinksText,
    liLinks,
    mainColor = "#9c27b0",
    secondeColor = "#a3a3a3",
    i;

document.body.style.margin = "0";
document.body.style.fontFamily = "arial";
document.body.style.boxSizing = "border-box";
myContainer.style.width = "1170px";
myContainer.style.margin = "0 auto";
myContainer.style.padding = "0 10px";
myNav.appendChild(myContainer);
myContainer.appendChild(myBrand);
myContainer.appendChild(myNavLinks);
myNav.style.backgroundColor = "transparent";
myNav.style.padding = "30px";
myNav.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
myBrand.textContent = "Quazzu";
myBrand.style.color = "#fff";
myBrand.style.float = "left";
myBrand.style.fontSize = "34px";
myBrand.style.display = "block";
myBrand.style.margin = "-19px";
myBrand.style.textDecoration = "none";
myBrand.href = "index.html";
myNavLinks.style.listStyle = "none";
myNavLinks.style.float = "right";
myNavLinks.style.marginTop = "-5px";
myAttr = document.createAttribute("class");
myAttr.value = "wow fadeInDown";
myNav.setAttributeNode(myAttr);

for ( i = 1 ; i <=4 ; i++){

    myLinks = document.createElement("li");
    liLinks = document.createElement("a");
    myNavLinks.appendChild(myLinks);
    myLinksText = document.createTextNode("Link" + i);
    myLinks.appendChild(liLinks);
    liLinks.appendChild(myLinksText);
    myLinks.style.display = "inline-block";
    myLinks.style.paddingRight = "30px";
    liLinks.style.color = "#fff";
    liLinks.style.fontSize = "13px";
    liLinks.style.fontWeight = "600";
    liLinks.style.textTransform = "uppercase";
    liLinks.style.textDecoration = "none";
    liLinks.href = "#!";
}


// Header


var myHeader = document.createElement("header"),
    over = document.createElement("div"),
    title = document.createElement("h1"),
    bigTitle = document.createElement("p"),
    title1 = document.createElement("p"),
    btn = document.createElement("button"),
    btn1 = document.createElement("button");

document.body.appendChild(myHeader);
myHeader.style.background = "url(img/background.jpg) center center no-repeat";
myHeader.style.backgroundSize = "cover";
myHeader.style.height = "80vh";
myHeader.appendChild(myNav);
myHeader.appendChild(over);
over.appendChild(title);
over.appendChild(bigTitle);
over.appendChild(title1);
over.appendChild(btn);
over.appendChild(btn1);
over.style.display = "flex";
over.style.justifyContent = "center";
over.style.flexDirection = "column";
over.style.alignItems = "center";
over.style.paddingTop = "50px";
title.textContent = "Welcome To Quazzu";
title.style.color = "#FFF";
title.style.fontSize = "18px";
title.style.fontweight = "none";
bigTitle.style.marginTop = "0";
bigTitle.innerHTML = "Build For The" + "<span style='color: #9c27b0'> " + "Future" + "</span>";
bigTitle.style.color = "#FFF";
bigTitle.style.fontSize = "80px";
bigTitle.style.marginBottom = "20px";
title1.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.";
title1.style.fontSize = "20px";
title1.style.fontweight = "600";
title1.style.color = "#FFF";
btn.textContent = "Learn More";
btn.style.color = "#FFF";
btn.style.fontSize = "18px";
btn.style.backgroundColor = mainColor;
btn.style.padding = "10px 30px";
btn.style.border = "1px solid #9c27b0";
btn.style.borderRadius = "3px";
btn.style.marginBottom = "5px";
btn.style.cursor = "pointer";
btn1.textContent = "Sign Up";
btn1.style.color = mainColor;
btn1.style.fontSize = "18px";
btn1.style.backgroundColor = "#FFF";
btn1.style.padding = "10px 44px";
btn1.style.border = "1px solid #fff";
btn1.style.borderRadius = "3px";
btn1.style.cursor = "pointer";
myAttr2 = document.createAttribute("class");
myAttr2.value = "wow fadeInDown";
myHeader.setAttributeNode(myAttr2);


//First Section

var section1 = document.createElement("div"),
    container2 = document.createElement("div"),
    sec1Div1 = document.createElement("div"),
    sec1Div2 = document.createElement("div"),
    sec1Div3 = document.createElement("div"),
    sec1Div4 = document.createElement("div"),
    div1Img = document.createElement("img"),
    div1Head = document.createElement("h3"),
    div1Par = document.createElement("p"),
    div2Img = document.createElement("img"),
    div2Head = document.createElement("h3"),
    div2Par = document.createElement("p"),
    div3Img = document.createElement("img"),
    div3Head = document.createElement("h3"),
    div3Par = document.createElement("p"),
    div4Img = document.createElement("img"),
    div4Head = document.createElement("h3"),
    div4Par = document.createElement("p"),
    clear = document.createElement("div");


document.body.appendChild(section1);
section1.style.padding = "70px 0";
container2.style.width = "1170px";
container2.style.margin = "0 auto";
container2.style.padding = "0 10px";
section1.appendChild(container2);
container2.appendChild(sec1Div1);
container2.appendChild(sec1Div2);
container2.appendChild(sec1Div3);
container2.appendChild(sec1Div4);
container2.appendChild(clear);
clear.style.clear = "both";
sec1Div1.style.float = "left";
sec1Div1.style.width = "22%";
sec1Div1.style.marginRight = "1%";
sec1Div1.style.textAlign = "center";
sec1Div1.style.marginBottom = "70px";
sec1Div1.appendChild(div1Img);
sec1Div1.appendChild(div1Head);
sec1Div1.appendChild(div1Par);
sec1Div1.style.padding = "10px";
sec1Div1.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
div1Img.src = "img/laptop.svg";
div1Head.textContent = "Web Development";
div1Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
myAttr3 = document.createAttribute("class");
myAttr3.value = "wow fadeInDown";
section1.setAttributeNode(myAttr3);

sec1Div1.onmouseover = function () {
    "use strict";
    div1Img.style.transform = "rotate(360deg)";
    div1Img.style.transition = "all .9s ease-in-out";
};

sec1Div1.onmouseout = function () {
    "use strict";
    div1Img.style.transform = "rotate(-360deg)";
    div1Img.style.transition = "all .9s ease-in-out";
};

sec1Div2.style.float = "left";
sec1Div2.style.width = "22%";
sec1Div2.style.marginRight = "1%";
sec1Div2.style.textAlign = "center";
sec1Div2.appendChild(div2Img);
sec1Div2.appendChild(div2Head);
sec1Div2.appendChild(div2Par);
sec1Div2.style.padding = "10px";
sec1Div2.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
div2Img.src = "img/picture.svg";
div2Head.textContent = "Graphic Design";
div2Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

sec1Div2.onmouseover = function () {
    "use strict";
    div2Img.style.transform = "rotate(360deg)";
    div2Img.style.transition = "all .9s ease-in-out";
};

sec1Div2.onmouseout = function () {
    "use strict";
    div2Img.style.transform = "rotate(-360deg)";
    div2Img.style.transition = "all .9s ease-in-out";
};

sec1Div3.style.float = "left";
sec1Div3.style.width = "22%";
sec1Div3.style.marginRight = "1%";
sec1Div3.style.textAlign = "center";
sec1Div3.appendChild(div3Img);
sec1Div3.appendChild(div3Head);
sec1Div3.appendChild(div3Par);
sec1Div3.style.padding = "10px";
sec1Div3.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
div3Img.src = "img/tweet.svg";
div3Head.textContent = "Social";
div3Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

sec1Div3.onmouseover = function () {
    "use strict";
    div3Img.style.transform = "rotate(360deg)";
    div3Img.style.transition = "all .9s ease-in-out";
};

sec1Div3.onmouseout = function () {
    "use strict";
    div3Img.style.transform = "rotate(-360deg)";
    div3Img.style.transition = "all .9s ease-in-out";
};

sec1Div4.style.float = "left";
sec1Div4.style.width = "22%";
sec1Div4.style.textAlign = "center";
sec1Div4.appendChild(div4Img);
sec1Div4.appendChild(div4Head);
sec1Div4.appendChild(div4Par);
sec1Div4.style.padding = "10px";
sec1Div4.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
div4Img.src = "img/browser.svg";
div4Head.textContent = "Browser";
div4Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

sec1Div4.onmouseover = function () {
    "use strict";
    div4Img.style.transform = "rotate(360deg)";
    div4Img.style.transition = "all .9s ease-in-out";
};

sec1Div4.onmouseout = function () {
    "use strict";
    div4Img.style.transform = "rotate(-360deg)";
    div4Img.style.transition = "all .9s ease-in-out";
};


//Seconde Section

var section2 = document.createElement("div"),
    container3 = document.createElement("div"),
    sec2Div1 = document.createElement("div"),
    sec2Div1Head = document.createElement("h2"),
    sec2Div1Par = document.createElement("p"),
    sec2Div2 = document.createElement("div"),
    sec2Div2Img = document.createElement("img");

document.body.appendChild(section2);
section2.style.backgroundColor = "#f5f5f5";
section2.appendChild(container3);
section2.style.padding = "30px 0";
section2.style.height = "300px";
container3.style.width = "1170px";
container3.style.margin = "0 auto";
container3.style.padding = "0 10px";
container3.appendChild(sec2Div1);
container3.appendChild(sec2Div2);
sec2Div1.style.float = "left";
sec2Div1.style.width = "50%";
sec2Div2.style.float = "left";
sec2Div2.style.width = "50%";
sec2Div2.style.textAlign = "center";
sec2Div1Head.innerHTML = "<span style='color: #9c27b0'>About</span> Us ";
sec2Div1Head.style.fontSize = "50px";
sec2Div1Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.";
sec2Div1Par.style.fontSize = "28px";
sec2Div1Par.style.lineHeight = "1.5";
sec2Div1Par.style.color = "#555";
sec2Div1.appendChild(sec2Div1Head);
sec2Div1.appendChild(sec2Div1Par);
sec2Div2Img.src = "img/tech.jpg";
sec2Div2Img.style.maxWidth = "100%";
sec2Div2Img.style.width = "70%";
sec2Div2Img.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)";
sec2Div2.appendChild(sec2Div2Img);
myAttr4 = document.createAttribute("class");
myAttr4.value = "wow fadeInDown";
section2.setAttributeNode(myAttr4);


//Third Section

var section3 = document.createElement("div"),
    sec3Over = document.createElement("div"),
    sec3Head = document.createElement("h2");

document.body.appendChild(section3);
section3.appendChild(sec3Over);
sec3Over.appendChild(sec3Head);
section3.style.background = "url(img/code.jpg) center center fixed no-repeat";
section3.style.backgroundSize = "cover";
section3.style.height = "130px";
section3.style.color = "#FFF";
section3.style.borderTop = "4px solid #333";
section3.style.borderBottom = "4px solid #333";
section3.style.position = "relative";
sec3Over.style.position = "absolute";
sec3Over.style.width = "100%";
sec3Over.style.height = "100%";
sec3Over.style.top = "0";
sec3Over.style.left = "0";
sec3Over.style.backgroundColor = "rgba(112, 81, 176, 0.55)";
sec3Over.style.textAlign = "center";
sec3Head.style.lineHeight = "60px";
sec3Head.style.fontSize = "40px";
sec3Head.textContent = "For Developers, By Developers";
myAttr4 = document.createAttribute("class");
myAttr4.value = "wow fadeInDown";
section3.setAttributeNode(myAttr4);


//Forth Section 

var section4 = document.createElement("div"),
    container4 = document.createElement("div"),
    sec4Head = document.createElement("h2"),
    sec4Div1 = document.createElement("div"),
    sec4Div2 = document.createElement("div"),
    sec4Div3 = document.createElement("div"),
    sec4Div4 = document.createElement("div"),
    sec4Div5 = document.createElement("div"),
    sec4Div6 = document.createElement("div"),
    sec4Div1Img = document.createElement("img"),
    sec4Div2Img = document.createElement("img"),
    sec4Div3Img = document.createElement("img"),
    sec4Div4Img = document.createElement("img"),
    sec4Div5Img = document.createElement("img"),
    sec4Div6Img = document.createElement("img"),
    clear2 = document.createElement("div");

document.body.appendChild(section4);
section4.appendChild(container4);
section4.style.backgroundColor = "#f5f5f5";
section4.style.padding = "30px 0";
section4.style.textAlign = "center";
clear2.style.clear = "both";
container4.style.width = "1170px";
container4.style.padding = "0 10px";
container4.style.margin = "0 auto";
container4.appendChild(sec4Head);
container4.appendChild(sec4Div1);
container4.appendChild(sec4Div2);
container4.appendChild(sec4Div3);
container4.appendChild(sec4Div4);
container4.appendChild(sec4Div5);
container4.appendChild(sec4Div6);
container4.appendChild(clear2);
sec4Head.innerHTML = "Work With <span style='color: #9c27b0'>Any Language</span>";
sec4Head.style.marginBottom = "50px";
sec4Head.style.fontSize = "30px";
sec4Div1.style.float = "left";
sec4Div1.style.width = "16%";
sec4Div1.appendChild(sec4Div1Img);
sec4Div2.style.float = "left";
sec4Div2.style.width = "16%";
sec4Div2.appendChild(sec4Div2Img);
sec4Div3.style.float = "left";
sec4Div3.style.width = "16%";
sec4Div3.appendChild(sec4Div3Img);
sec4Div4.style.float = "left";
sec4Div4.style.width = "16%";
sec4Div4.appendChild(sec4Div4Img);
sec4Div5.style.float = "left";
sec4Div5.style.width = "16%";
sec4Div5.appendChild(sec4Div5Img);
sec4Div6.style.float = "left";
sec4Div6.style.width = "16%";
sec4Div6.appendChild(sec4Div6Img);
sec4Div1Img.src = "img/node-logo.png";
sec4Div1Img.style.maxWidth = "100%";
sec4Div1Img.style.width = "70%";
sec4Div1Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div1Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div2Img.src = "img/php-logo.png";
sec4Div2Img.style.maxWidth = "100%";
sec4Div2Img.style.width = "70%";
sec4Div2Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div2Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div3Img.src = "img/ruby-logo.png";
sec4Div3Img.style.maxWidth = "100%";
sec4Div3Img.style.width = "70%";
sec4Div3Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div3Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div4Img.src = "img/python-logo.png";
sec4Div4Img.style.maxWidth = "100%";
sec4Div4Img.style.width = "70%";
sec4Div4Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div4Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div5Img.src = "img/c-sharp-logo.png";
sec4Div5Img.style.maxWidth = "100%";
sec4Div5Img.style.width = "70%";
sec4Div5Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div5Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div6Img.src = "img/java-logo.png";
sec4Div6Img.style.maxWidth = "100%";
sec4Div6Img.style.width = "70%";
sec4Div6Img.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};
sec4Div6Img.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
myAttr5 = document.createAttribute("class");
myAttr5.value = "wow fadeInUp";
section4.setAttributeNode(myAttr5);


//Fith Section

var section5 = document.createElement("div"),
    container5 = document.createElement("div"),
    sec5Head = document.createElement("h2"),
    sec5Par = document.createElement("p"),
    sec5User = document.createElement("p"),
    sec5But = document.createElement("button");

document.body.appendChild(section5);
section5.style.padding = "40px 0";
section5.style.textAlign = "center";
section5.appendChild(container5);
container5.style.width = "1170px";
container5.style.padding = "0 10px";
container5.style.margin = "0 auto";
container5.appendChild(sec5Head);
container5.appendChild(sec5Par);
container5.appendChild(sec5User);
container5.appendChild(sec5But);
sec5Head.textContent = "Testemonial";
sec5Par.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.";
sec5Par.style.width = "50%";
sec5Par.style.margin = "10px auto";
sec5Par.style.lineHeight = "1.5";
sec5User.textContent = "-John Doe 2018/4/27";
sec5User.style.fontStyle = "italic";
sec5User.style.fontWeight = "600";
sec5But.textContent = "Read More";
sec5But.style.backgroundColor = "#333";
sec5But.style.color = "#fff";
sec5But.style.borderRadius = "4px";
sec5But.style.border = "1px solid #333";
sec5But.style.padding = "10px 20px";
sec5But.style.cursor = "pointer";
myAttr6 = document.createAttribute("class");
myAttr6.value = "wow fadeInUp";
section5.setAttributeNode(myAttr6);


//Footer

var footer = document.createElement("footer"),
    footerPar = document.createElement("p");

document.body.appendChild(footer);
footer.appendChild(footerPar);
footer.style.backgroundColor = "#4a148c";
footer.style.textAlign = "center";
footer.style.height = "50px";
footer.style.color = "#FFF";
footerPar.textContent = "Quazzu Theme Copy Rights 2019";
footerPar.style.lineHeight = "50px";
myAttr7 = document.createAttribute("class");
myAttr7.value = "wow fadeInUp";
footer.setAttributeNode(myAttr7);


//Button For Scroll Up

var scrollUp = document.createElement("button");

document.body.appendChild(scrollUp);
scrollUp.style.backgroundColor = mainColor;
scrollUp.style.borderRadius = "50%";
scrollUp.style.border = "1px solid #9c27b0";
scrollUp.style.color = "#FFF";
scrollUp.style.fontSize = "10px";
scrollUp.style.fontWeight = "bold";
scrollUp.style.color = "#FFF";
scrollUp.style.width = "40px";
scrollUp.style.position = "fixed";
scrollUp.style.bottom = "15px";
scrollUp.style.right = "15px";
scrollUp.style.display = "none";
scrollUp.style.height = "40px";
scrollUp.style.lineHeight = "40px";
scrollUp.style.textAlign = "center";
scrollUp.style.cursor = "pointer";
scrollUp.textContent = "UP";

window.onscroll = function () {
    "use strict";
  
    if (document.documentElement.scrollTop >= 300) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
};

scrollUp.onclick = function () {
    "use strict";
    scrollTo(document.body, 0, 600)
};

scrollUp.onmouseover = function () {
    "use strict";
    this.style.transform = "translatey(-10px)";
    this.style.transition = "all .5s ease-in-out";
};

scrollUp.onmouseout = function () {
    "use strict";
    this.style.transform = "translatey(0)";
    this.style.transition = "all .5s ease-in-out";
};
