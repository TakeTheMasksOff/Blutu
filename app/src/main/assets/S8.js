var GalaxyS8 = {
    pos1: {
        media: ["files/s8/s8.png"],
        text1: "Super AMOLED 5.8 inches 1440 x 2960 pixels",
        text2: "Non-removable Li-Ion 3000 mAh<br>Endurance rating 84h",
        text3: "Android 7.0 (Nougat)<br>Snapdragon 835<br>Octa-core (4x2.3 GHz & 4x1.7 GHz)<br> microSD up to 256 GB<br> 64 GB, 4 GB RAM "
    },
    pos2:{
        media: ["files/s8/s8back.png"],
        text1: "Primary: 12 MP, f/1.7,OIS, LED flash<br>1440p@30fps, dual video call,<br> Auto HDR",
        text2: "2160p@30fps, simultaneous 4K video and 9MP<br>image recording, touch focus,<br>face/smile detection",
        text3: "Secondary: 8 MP, f/1.7, autofocus, 1440p@30fps"
    },
    pos3:{
        media:"files/s8/samsung_galaxy_s8_commercial.webm",
        Carousel1: "files/s8/galaxy-s8_secure.png",
        CarouselCaption1: "Iris scan",
        Carousel2: "files/s8/galaxy-s8_intelligence_search_place.png",
        CarouselCaption2: "Get handy information",
        Carousel3: "files/s8/galaxy-s8_intelligence.png",
        CarouselCaption3: "Open the camera to find where to buy."
    },
    price: "files/price.png"
}

function GalaxyS8Commercial(posInPluralDivision){
    if ((divisionCount == 1) && (document.getElementById("sVideo").style.display != "block")) {
        document.getElementById("sVideo").src=GalaxyS8.pos3.media;
        document.getElementById("sVideo").type="video/webm";
        ShowSVIDEO();
    }
    else if (divisionCount == 2) {
        if (posInPluralDivision == 0) {
            document.getElementById("leftTextPart").style.display="none";
            document.getElementById("leftInteractivePart").style.display="none";

            document.getElementById("lCarousel1").src=GalaxyS8.pos3.Carousel1;
            document.getElementById("lCarousel2").src=GalaxyS8.pos3.Carousel2;
            document.getElementById("lCarousel3").src=GalaxyS8.pos3.Carousel3;
            document.getElementById("lCarouselCaption1").innerHTML=GalaxyS8.pos3.CarouselCaption1;
            document.getElementById("lCarouselCaption2").innerHTML=GalaxyS8.pos3.CarouselCaption2;
            document.getElementById("lCarouselCaption3").innerHTML=GalaxyS8.pos3.CarouselCaption3;
            document.getElementById("lCarouselExampleSlidesOnly").style.display="flex";
            ShowDoubleDivision();
            
        }else{
            document.getElementById("rightTextPart").style.display="none";
            document.getElementById("rightInteractivePart").style.display="none";

            document.getElementById("rCarousel1").src=GalaxyS8.pos3.Carousel1;
            document.getElementById("rCarousel2").src=GalaxyS8.pos3.Carousel2;
            document.getElementById("rCarousel3").src=GalaxyS8.pos3.Carousel3;
            document.getElementById("rCarouselCaption1").innerHTML=GalaxyS8.pos3.CarouselCaption1;
            document.getElementById("rCarouselCaption2").innerHTML=GalaxyS8.pos3.CarouselCaption2;
            document.getElementById("rCarouselCaption3").innerHTML=GalaxyS8.pos3.CarouselCaption3;
            document.getElementById("rCarouselExampleSlidesOnly").style.display="flex";
            ShowDoubleDivision();
        }
    }
}

function GalaxyS8Back(posInPluralDivision) {
    if (divisionCount == 1) {
        document.getElementById("sObj").src=GalaxyS8.pos2.media[0];
        document.getElementById("text1").innerHTML=GalaxyS8.pos2.text1;
        document.getElementById("text2").innerHTML=GalaxyS8.pos2.text2;
        document.getElementById("text3").innerHTML=GalaxyS8.pos2.text3;
        document.getElementById("sPrice").src=GalaxyS8.price;

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
            document.getElementById("lObj1").src = GalaxyS8.pos2.media[0];
            document.getElementById("lText1").innerHTML = GalaxyS8.pos2.text1;
            document.getElementById("lText2").innerHTML = GalaxyS8.pos2.text2;
            document.getElementById("lText3").innerHTML = GalaxyS8.pos2.text3;
            document.getElementById("lPrice").src=GalaxyS8.price;

            document.getElementById("lIcon1").src="files/if_Untitled-2-05_536301.png";
            document.getElementById("lIcon2").style.display="none";
            document.getElementById("lIcon3").style.display="none";
            ShowDoubleDivision();
        }else{
            document.getElementById("rCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("rightTextPart").style.display="block";
            document.getElementById("rightInteractivePart").style.display="block";
            //rightIsEmpty=false;  
            document.getElementById("rObj1").src = GalaxyS8.pos2.media[0];
            document.getElementById("rText1").innerHTML = GalaxyS8.pos2.text1;
            document.getElementById("rText2").innerHTML = GalaxyS8.pos2.text2;
            document.getElementById("rText3").innerHTML = GalaxyS8.pos2.text3;
            document.getElementById("rPrice").src=GalaxyS8.price;
            
            document.getElementById("rIcon1").src="files/if_Untitled-2-05_536301.png";
            document.getElementById("rIcon2").style.display="none";
            document.getElementById("rIcon3").style.display="none";
            ShowDoubleDivision();
        }
    }
}

function GalaxyS8Main(posInPluralDivision) {
    if (divisionCount == 1) {
        document.getElementById("sObj").src=GalaxyS8.pos1.media[0];
        document.getElementById("text1").innerHTML=GalaxyS8.pos1.text1;
        document.getElementById("text2").innerHTML=GalaxyS8.pos1.text2;
        document.getElementById("text3").innerHTML=GalaxyS8.pos1.text3;
        document.getElementById("sPrice").src=GalaxyS8.price;

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
            document.getElementById("lObj1").src = GalaxyS8.pos1.media[0];
            document.getElementById("lText1").innerHTML = GalaxyS8.pos1.text1;
            document.getElementById("lText2").innerHTML = GalaxyS8.pos1.text2;
            document.getElementById("lText3").innerHTML = GalaxyS8.pos1.text3;
            document.getElementById("lPrice").src=GalaxyS8.price;

            document.getElementById("lIcon1").src="files/if_phone_115698.png";
            ShowLeftIcons();
            ShowDoubleDivision();
        }else{
            document.getElementById("rCarouselExampleSlidesOnly").style.display="none";
            document.getElementById("rightTextPart").style.display="block";
            document.getElementById("rightInteractivePart").style.display="block";
            //rightIsEmpty=false;  
            document.getElementById("rObj1").src = GalaxyS8.pos1.media[0];
            document.getElementById("rText1").innerHTML = GalaxyS8.pos1.text1;
            document.getElementById("rText2").innerHTML = GalaxyS8.pos1.text2;
            document.getElementById("rText3").innerHTML = GalaxyS8.pos1.text3;
            document.getElementById("rPrice").src=GalaxyS8.price;

            document.getElementById("rIcon1").src="files/if_phone_115698.png";
            ShowRightIcons();
            ShowDoubleDivision();
        }
    }
}