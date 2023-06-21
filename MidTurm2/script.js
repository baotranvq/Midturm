// script header-footer
var imageFiles = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg","images/image5.jpg"];
var currentImageIndex = 0;

var imageElement = document.getElementById("image");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

function showImage(imageIndex) {
  var imagePath = imageFiles[imageIndex];
  imageElement.src = imagePath;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
  showImage(currentImageIndex);
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
  showImage(currentImageIndex);
}

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

showImage(currentImageIndex);
// end click slide

var i = 0;
function slideShow_auto(){
    imageElement.setAttribute("src",imageFiles[i]);
    i++;
    if (i == imageFiles.length) i = 0;
}
setInterval(slideShow_auto,3000);
// end slide Show Auto


// end script header-footer

function listProductMen() {
    var cha = document.getElementById("shoe");
    var phanTuCon = " ";
    for (var i = 0; i < shoe.length; i++) {
        phanTuCon += taoPhanTuConGiay(shoe[i].name,shoe[i].price,shoe[i].image ,shoe[i].id);
    //     phanTuCon += `<div class="card" >
    //     <img id="preview" class="card-img-top" src="${shoe[i].image}" alt="Card image">
    //     <div class="card-body">
    //       <h4 class="card-title">${shoe[i].name}</h4>
    //       <p class="card-text">Giá: ${shoe[i].price}đ</p>
    //       <div class="icons">
    //             <a id="btn-oder" href="#" class="btn btn-primary">Mua ngay</a>
    //             <a style="background-color: rgb(234, 177, 7);" ref="#" class="btn btn-primary"><i style="color: white;" class="bi bi-window-plus"></i></a>
    //             <a id="btn-clear" style="background-color: red;" href="#" class="btn btn-primary"><i class="bi bi-trash"></i></a>
    //       </div>
    //     </div>
    //   </div>`
    }
    cha.innerHTML = phanTuCon;
}
listProductMen();
///
function taoPhanTuConGiay(name,price,image,id){
    return  `<div class="card" >
    <img id="preview" class="card-img-top" src="${image}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">Giá: ${price}đ</p>
      <div class="icons">
            <a onclick="oders()" id="btn-oder"  class="btn btn-primary">Mua ngay</a>
            <a onclick="selectGiay(${id})" style="background-color: rgb(234, 177, 7);" ref="#" class="btn btn-primary"><i style="color: white;" class="bi bi-window-plus"></i></a>
            <a onclick="clearProductGiay(${id})" id="btn-clear" style="background-color: red;"  class="btn btn-primary"><i class="bi bi-trash"></i></a>
      </div>
    </div>
  </div>`

}
function taoPhanTuConDep(name,price,image,id){
    return  `<div class="card" >
    <img id="preview" class="card-img-top" src="${image}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">Giá: ${price}đ</p>
      <div class="icons">
            <a onclick="oders()" id="btn-oder"  class="btn btn-primary">Mua ngay</a>
            <a onclick="selectDep(${id})" style="background-color: rgb(234, 177, 7);" ref="#" class="btn btn-primary"><i style="color: white;" class="bi bi-window-plus"></i></a>
            <a onclick="clearProductDep(${id})" id="btn-clear" style="background-color: red;"  class="btn btn-primary"><i class="bi bi-trash"></i></a>
      </div>
    </div>
  </div>`

}


function listProductWomen() {
    var cha = document.getElementById("sandal");
    var phanTuCon = " ";
    for (var i = 0; i < sandal.length; i++) {
        phanTuCon += taoPhanTuConDep(sandal[i].name, sandal[i].price, sandal[i].image, sandal[i].id)
    //     phanTuCon += `<div class="card" >
    //     <img id="preview" class="card-img-top" src="${sandal[i].image}" alt="Card image">
    //     <div class="card-body">
    //       <h4 class="card-title">${sandal[i].name}</h4>
    //       <p class="card-text">Giá: ${sandal[i].price}đ</p>
    //         <div class="icons">
    //         <a href="#" class="btn btn-primary" id="btn-oder" >Mua ngay</a>
    //         <a style="background-color: rgb(234, 177, 7);" ref="#" class="btn btn-primary"><i style="color: white;" class="bi bi-window-plus"></i></a>
    //         <a  style="background-color: red;" href="#" class="btn btn-primary"><i class="bi bi-trash"></i></a>
	//         </div>
          
    //     </div>
    //   </div>`
    }
    cha.innerHTML = phanTuCon;
}
listProductWomen();
////
document.getElementById("btn-shoe").onclick = xuLybtnGiay;
function xuLybtnGiay(){
    document.getElementById("sandal").classList.add("hide");
    document.getElementById("btn-shoe").classList.add("giay-sang");
    document.getElementById("btn-sandal").classList.remove("giay-sang");
    document.getElementById("shoe").classList.remove("hide");


}
//
document.getElementById("btn-sandal").onclick = xuLybtnDep;
function xuLybtnDep(){
    document.getElementById("shoe").classList.add("hide");
    document.getElementById("sandal").classList.remove("hide"); // remove an dep
    document.getElementById("btn-sandal").classList.add("giay-sang");
    document.getElementById("btn-shoe").classList.remove("giay-sang");
}

xuLybtnGiay();
//
function oders(){
    alert("thank you your oder");
}
//
var id = 6;
function addProduct(e){
    e.preventDefault();
    var name = document.getElementById("txtName").value;
    var price = document.getElementById("txtPrice").value;
    var type = document.getElementById("cmbType").value;
    var image =document.getElementById("txtImg");
    var imageURL = URL.createObjectURL(image.files[0]);

    // var image2 = document.getElementById("txtImg").value;
    // var image =image2.split('\\')[2];
            if(name != '' && price != '' && type != '' && image != '' ){
                if(type == '1'){
                    var shoearr = {id, name, price, image:imageURL};
                    shoe.push(shoearr);
                    id ++;
                    var theMoiSTR = taoPhanTuConGiay(name, price, imageURL);
                    var theMoi= document.createElement("div");
                    theMoi.innerHTML = theMoiSTR;
                    document.getElementById("shoe").appendChild(theMoi.firstChild);
                    // listProductMen();
                    
                }
                else{
                    var sandalarr = {id, name, price, image:imageURL};
                    sandal.push(sandalarr);
                    id ++;
                    var theMoiSTR = taoPhanTuConDep(name, price, imageURL);
                    var theMoi= document.createElement("div");
                    theMoi.innerHTML = theMoiSTR;
                    document.getElementById("sandal").appendChild(theMoi.firstChild);
                    // listProductWomen();
                }
                var name = document.getElementById("txtName").value='';
                var price = document.getElementById("txtPrice").value='';
                var option = document.getElementById("cmbType").value='';
                var image =document.getElementById("txtImg").value='';
            }else{
                alert("vui lòng nhập lại")
            }
}
document.getElementById("btn-add").onclick = addProduct;

//
function clearProductGiay(id){
    
        for(var i=0; i<shoe.length; i++){
            if(id == shoe[i].id){
                shoe.splice(i,1);
                listProductMen();
                break;
            }
        
        }
}

function clearProductDep(id){
    
    for(var i=0; i<sandal.length; i++){
        if(id == sandal[i].id){
            sandal.splice(i,1);
            listProductWomen();
            break;
        }
    }
}
//

var layId=null;
function updateGiayId(id){
    layId=id;
}
function selectGiay(id){
    for(var i=0; i<shoe.length; i++){
        if(id == shoe[i].id){
            layId =id;
            document.getElementById("txtName").value=shoe[i].name;
            document.getElementById("txtPrice").value=shoe[i].price;
            document.getElementById("cmbType").value ="1";
            break;
        }
    }
}
function selectDep(id){
  for(var i=0; i<sandal.length; i++){
        if(id== sandal[i].id){
            layId=id;
            document.getElementById("txtName").value=sandal[i].name;
            document.getElementById("txtPrice").value=sandal[i].price;
            document.getElementById("cmbType").value="2";
            break;
        }
    }
}
//

function xuLyHinhAnh() {
    let xulyFile = document.getElementById("txtImg").files[0];
    if (xulyFile == undefined) {
        return "";
    }
    let urlanh = URL.createObjectURL(xulyFile);
    return urlanh;
}
function saveUpdate(){
    let xulyFile = document.getElementById("txtImg").files[0];
    // var image =document.getElementById("txtImg");
    // var imageURL = URL.createObjectURL(image.files[0]);
    var type = document.getElementById("cmbType").value;
    if(type == "1"){
        for(var i = 0; i < shoe.length; i++){
            if(layId == shoe[i].id){
                shoe[i].name = document.getElementById("txtName").value;
                shoe[i].price = document.getElementById("txtPrice").value;
                // shoe[i].image =  imageURL;
                if (xulyFile != undefined) {
                    shoe[i].image = xuLyHinhAnh();
                }
                break;
            }
        }
        listProductMen();
        var name = document.getElementById("txtName").value='';
        var price = document.getElementById("txtPrice").value='';
        var option = document.getElementById("cmbType").value='';
        var image =document.getElementById("txtImg").value='';
    }
    else{
        for(var i = 0; i < sandal.length; i++){
            if(layId == sandal[i].id){
                sandal[i].name = document.getElementById("txtName").value;
                sandal[i].price = document.getElementById("txtPrice").value;
                // sandal[i].image = imageURL;
                if (xulyFile != undefined) {
                    sandal[i].image = xuLyHinhAnh();
                }
                break;
            }
        }
        listProductWomen();
        var name = document.getElementById("txtName").value='';
        var price = document.getElementById("txtPrice").value='';
        var option = document.getElementById("cmbType").value='';
        var image =document.getElementById("txtImg").value='';
    }   
}
document.getElementById("btn-update").onclick = saveUpdate;