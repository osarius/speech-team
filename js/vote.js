window.addEventListener("load",function(){
    var jsonLikesAndDislikes = window.localStorage.getItem("likesAndDislikes");
    var likesAndDislikes = JSON.parse(jsonLikesAndDislikes);
    if (likesAndDislikes) {
      // Access likes and dislikes properties as needed
      document.getElementById("likes").innerHTML = likesAndDislikes["likes"]
      document.getElementById("dislikes").innerHTML = likesAndDislikes["dislikes"]
    } else {
      // No likes and dislikes information found
      console.log("xixi")
      var likesAndDislikes = {
        "likes": 0,
        "dislikes": 0
      };
    
      document.getElementById("likes").innerHTML = likesAndDislikes["likes"]
      document.getElementById("dislikes").innerHTML = likesAndDislikes["dislikes"]
      window.localStorage.setItem("likesAndDislikes", JSON.stringify(likesAndDislikes));
    
    }
    });
    
    function ClickLikes(){
    var jsonLikesAndDislikes = window.localStorage.getItem("likesAndDislikes");
    var likesAndDislikes = JSON.parse(jsonLikesAndDislikes);
    likesAndDislikes["likes"] += 1;
    document.getElementById("likes").innerHTML = likesAndDislikes["likes"]
    window.localStorage.setItem("likesAndDislikes", JSON.stringify(likesAndDislikes));
    }
    
    function ClickDislikes(){
    var jsonLikesAndDislikes = window.localStorage.getItem("likesAndDislikes");
    var likesAndDislikes = JSON.parse(jsonLikesAndDislikes);
    likesAndDislikes["dislikes"] += 1;
    document.getElementById("dislikes").innerHTML = likesAndDislikes["dislikes"]
    window.localStorage.setItem("likesAndDislikes", JSON.stringify(likesAndDislikes));
    }