function changeTrafficLight() {
    
       if(document.getElementById("yellow").className === "light yellow-light"){
              document.getElementById("red").className = "light red-light";
              document.getElementById("yellow").className = "light light-off"
       }
       else {
              if(document.getElementById("red").className === "light red-light"){
                     document.getElementById("red").className = "light light-off";
                     document.getElementById("green").className = "light green-light";
              }

              else {
              
                     if(document.getElementById("green").className === "light green-light"){
                            document.getElementById("yellow").className = "light yellow-light";
                            document.getElementById("green").className = "light light-off";
                     }
              }
       }
       
}
