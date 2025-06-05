// ADD TO CART NUMBER FUNCTION
const plus = document.querySelector("#plus"),
        num = document.querySelector("#num");

    let a = 0;

    plus.addEventListener("click", ()=>{
        a++;
        num.innerText = a;
        console.log(a);
    });
 
    
// SWAPPING IMAGE FUNCTION

var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick= function () {
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick= function () {
            MainImg.src = smallimg[1].src;
        }



// 

