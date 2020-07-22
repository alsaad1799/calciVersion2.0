const button = document.getElementById('open');
button.addEventListener('click', function(){
 const review = document.getElementById("review");
  
  if(review.classList.contains("d-none")){
  review.classList.remove("d-none");
    button.textContent = "CLOSE Calci";
  }
  else{
        review.classList.add("d-none");
     button.textContent = " OPEN Calci";
      }
  });