const acc = document.querySelectorAll(".forheight");





for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
     this.classList.toggle("active");
        const accord = this.nextElementSibling;        
      if (accord.style.display === "block" ) {        
        accord.style.display = "none";
        
        this.querySelector(".invitemember").classList.remove("strongtext")
        this.querySelector("img").classList.remove("rotated");
      } else {
        accord.style.display = "block";
        
        this.querySelector("img").classList.add("rotated");
        this.querySelector(".invitemember").classList.add("strongtext");
         }     
    })
  }

  

 