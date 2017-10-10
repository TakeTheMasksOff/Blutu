var G6 = {
    pos1: {
        media: ["files/G6/G6.png"],
        text1: "IPS 5.7 inches 1440 x 2880 pixels",
        text2: "Non-removable Li-Po 3300 mAh<br>Endurance rating 72h",
        text3: "Android 7.0 (Nougat)<br>Snapdragon 821<br>Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)<br> microSD up to 256 GB<br> 32/64/128 GB, 4 GB RAM"
    },
    pos2:{
        media: ["files/G6/G6back.png"],
        text1: "Primary: Dual 13 MP (f/1.8, OIS, 3-axis, phase detection AF)<br>13 MP (f/2.4, no AF), dual-LED flash",
        text2: "2160p@30fps, HDR, stereo sound, touch focus",
        text3: "Secondary: 5 MP, f/2.2, 1080p"
    },
    pos3:{
        media:"files/g6/lg_g6_commercial.webm",
        Carousel1: "files/G6/lg-g6_camera-front_selfie.png",
        CarouselCaption1: "Wide Angle Front Camera ",
        Carousel2: "files/G6/lg-g6_square-camera.png",
        CarouselCaption2: "Combine two photos for creative files",
        Carousel3: "files/G6/lg-g6_water-resistant.png",
        CarouselCaption3: "Built for the unexpected"
    },
    price: "files/price.png"
}

function G6Commercial(posInPluralDivision){
    if ((divisionCount == 1) && (document.getElementById("sVideo").style.display != "block")) {
        document.getElementById("sVideo").src=G6.pos3.media;
        document.getElementById("sVideo").type="video/webm";
        ShowSVIDEO();
    }
    else if (divisionCount == 2) {
        if (posInPluralDivision == 0) {
            document.getElementById("leftTextPart").style.display="none";
            document.getElementById("leftInteractivePart").style.display="none";

            document.getElementById("lCarousel1").src=G6.pos3.Carousel1;
            document.getElementById("lCarousel2").src=G6.pos3.Carousel2;
            document.getElementById("lCarousel3").src=G6.pos3.Carousel3;
            document.getElementById("lCarouselCaption1").innerHTML=G6.pos3.CarouselCaption1;
            document.getElementById("lCarouselCaption2").innerHTML=G6.pos3.CarouselCaption2;
            document.getElementById("lCarouselCaption3").innerHTML=G6.pos3.CarouselCaption3;
            document.getElementById("lCarouselExampleSlidesOnly").style.display="flex";
            ShowDoubleDivision();
        }else{
            document.getElementById("rightTextPart").style.display="none";
            document.getElementById("rightInteractivePart").style.display="none";

            document.getElementById("rCarousel1").src=G6.pos3.Carousel1;
            document.getElementById("rCarousel2").src=G6.pos3.Carousel2;
            document.getElementById("rCarousel3").src=G6.pos3.Carousel3;
            document.getElementById("rCarouselCaption1").innerHTML=G6.pos3.CarouselCaption1;
            document.getElementById("rCarouselCaption2").innerHTML=G6.pos3.CarouselCaption2;
            document.getElementById("rCarouselCaption3").innerHTML=G6.pos3.CarouselCaption3;
            document.getElementById("rCarouselExampleSlidesOnly").style.display="flex";
            ShowDoubleDivision();
        }
    }
}

function G6Back(posInPluralDivision) {
    if (divisionCount == 1) {
        document.getElementById("sObj").src=G6.pos2.media[0];
        document.getElementById("text1").innerHTML=G6.pos2.text1;
        document.getElementById("text2").innerHTML=G6.pos2.text2;
        document.getElementById("text3").innerHTML=G6.pos2.text3;
        document.getElementById("sPrice").src=G6.price;

        document.getElementById("icon2").src="files/if_Untitled-2-05_536301.png";
        document.getElementById("icon1").style.display="none";
        document.getElementById("icon3").style.display="none";
        ShowSingleDivision();
    }
    else if (divisionCount == 2) {
        if (posInPluralDivision == 0) {
            document.getElementById("lCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("leftTextPart").style.display="block";
            document.getElementById("leftInteractivePart").style.display="block";
            //leftIsEmpty=false;  
            document.getElementById("lObj1").src = G6.pos2.media[0];
            document.getElementById("lText1").innerHTML = G6.pos2.text1;
            document.getElementById("lText2").innerHTML = G6.pos2.text2;
            document.getElementById("lText3").innerHTML = G6.pos2.text3;
            document.getElementById("lPrice").src=G6.price;

            document.getElementById("lIcon1").src="files/if_Untitled-2-05_536301.png";
            document.getElementById("lIcon2").style.display="none";
            document.getElementById("lIcon3").style.display="none";
            ShowDoubleDivision();
        }else{
            document.getElementById("rCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("rightTextPart").style.display="block";
            document.getElementById("rightInteractivePart").style.display="block";
            //rightIsEmpty=false;  
            document.getElementById("rObj1").src = G6.pos2.media[0];
            document.getElementById("rText1").innerHTML = G6.pos2.text1;
            document.getElementById("rText2").innerHTML = G6.pos2.text2;
            document.getElementById("rText3").innerHTML = G6.pos2.text3;
            document.getElementById("rPrice").src=G6.price;

            document.getElementById("rIcon1").src="files/if_Untitled-2-05_536301.png";
            document.getElementById("rIcon2").style.display="none";
            document.getElementById("rIcon3").style.display="none";
            ShowDoubleDivision();
        }
    }
}

function G6Main(posInPluralDivision) {
    if (divisionCount == 1) {
        document.getElementById("sObj").src=G6.pos1.media[0];
        document.getElementById("text1").innerHTML=G6.pos1.text1;
        document.getElementById("text2").innerHTML=G6.pos1.text2;
        document.getElementById("text3").innerHTML=G6.pos1.text3;
        document.getElementById("sPrice").src=G6.price;

        document.getElementById("icon2").src="files/if_battery_2_103375.png";
        ShowIcons();
        ShowSingleDivision();
    }
    if (divisionCount == 2) {
        if (posInPluralDivision == 0) {
            document.getElementById("lCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("leftTextPart").style.display="block";
            document.getElementById("leftInteractivePart").style.display="block";
            //leftIsEmpty=false;  
            document.getElementById("lObj1").src = G6.pos1.media[0];
            document.getElementById("lText1").innerHTML = G6.pos1.text1;
            document.getElementById("lText2").innerHTML = G6.pos1.text2;
            document.getElementById("lText3").innerHTML = G6.pos1.text3;
            document.getElementById("lPrice").src=G6.price;

            document.getElementById("lIcon1").src="files/if_phone_115698.png";
            ShowLeftIcons();
            ShowDoubleDivision();
        }else{
            document.getElementById("rCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("rightTextPart").style.display="block";
            document.getElementById("rightInteractivePart").style.display="block";
            //rightIsEmpty=false;  
            document.getElementById("rObj1").src = G6.pos1.media[0];
            document.getElementById("rText1").innerHTML = G6.pos1.text1;
            document.getElementById("rText2").innerHTML = G6.pos1.text2;
            document.getElementById("rText3").innerHTML = G6.pos1.text3;
            document.getElementById("rPrice").src=G6.price;

            document.getElementById("rIcon1").src="files/if_phone_115698.png";
            ShowRightIcons();
            ShowDoubleDivision();
        }
    }
}