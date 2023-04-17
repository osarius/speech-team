document.querySelector("#drop").addEventListener("click",function(){
    // document.querySelector(".navbar").style.visibility="initial";
    if(document.querySelector(".navbar").style.display === "none"){
      document.querySelector(".navbar").style.display = "block";
      console.log("yes")
    }
    else{
      document.querySelector(".navbar").style.display="none";
      console.log("yes")
    }
  });