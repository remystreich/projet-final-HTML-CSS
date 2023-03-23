let isLightMode = localStorage.getItem("mode") == "true" ? true : false
let nameStyleLite = "stylel"
let nameStyleDark = "style"
console.log(isLightMode);
checkStyle()


function changestyle (){
    isLightMode = !isLightMode
    localStorage.setItem('mode',isLightMode)
    checkStyle()
}

function checkStyle(params) {
    if (isLightMode) {
        document.querySelector("#dark").href = "../assets/css/stylel.css"
          document.querySelector("#dark").href = "../assets/css/stylel.css"
    }else{
        document.querySelector("#dark").href = "../assets/css/style.css"
      
    }
}



