/* Fill your code*/
class Blog{
    constructor(title,detail){
       this.titles = title;
       this.details = detail;
       this.imageURL = "./assets/javascript.png";
    }
    addImage(){
        var image_card = document.createElement('img');
        image_card.setAttribute("id", "blog-image");
        console.log(image_card);
        console.log("image");
        document.getElementById("card-text").appendChild(image_card);
        document.getElementById("blog-image").src = this.imageURL;     
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.titles;
    }
    addDescription(){
        var detail_card = document.createElement('p');
        detail_card.setAttribute("id","blog-description");
        console.log(detail_card);
        document.getElementById('card-text').appendChild(detail_card);
        detail_card.innerHTML += this.details;
    }
}

function addNewPost(){
    console.log("add post pressed");
    document.getElementById("popupContact").style.display = "block";
}
function closeButton(){
    console.log("close button pressed");
    document.getElementById("popupContact").style.display = "none";
}
function postButton(){
    console.log("post button pressed");
    let t = document.getElementById("title").value;
    let d = document.getElementById("detail").value;
    let data = new Blog(t, d);
    data.addImage();
    data.addTitle();
    data.addDescription();
    document.getElementById("popupContact").style.display = "none";
}
