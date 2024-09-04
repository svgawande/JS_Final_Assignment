function upDate(previewPic){
    let x = previewPic.src;
    document.getElementById("image").style.width= "600px";
    document.getElementById("image").style.height= "auto";
    document.getElementById("image").style.backgroundImage = "url('"+x;"')";
    document.getElementById("image").innerHTML = previewPic.alt;
    }
	
function unDo(){
    document.getElementById("image").style.backgroundImage = "url('";"')";
    document.getElementById("image").innerHTML = 'Hover over an image below or tab to display images here.';	
    document.getElementById("image").style.width= "575px";
}

function onTabFocus(tabImg){
    let imgSource = tabImg.src; 
    document.getElementById("image").style.backgroundImage = "url('"+imgSource;"')";
    document.getElementById("image").innerHTML = tabImg.alt;
}    

function setRandomImg(img){
    console.log("I am in seRandomImage Function");
    imgArray = ["Resized_eagle.JPG","Resized_IndianGrayHornabill.JPG","Resuzed_parrot.JPG","Resized_JungleOwlet.JPG","Resuzed_butterfly.JPG","Resuzed_whiteeye.JPG"];
    ranImg = "images/" + imgArray[Math.floor(Math.random()* imgArray.length)];
    document.getElementById("image").style.backgroundImage = "url('"+ranImg;"')";   
    imgLocator = document.querySelectorAll("img")
    for ( let i=0; i<imgArray.length; i++){
        console.log("Image "+i)
        imgLocator[i].setAttribute("tabindex","0");
    }
}
