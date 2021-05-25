    var navbar = document.getElementById("myNavbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      console.log(window.pageYOffset);
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } 
      else{
        navbar.classList.remove("sticky");
      }
    }
    function who(){
        var y=window.pageYOffset;
        window.scrollBy(0, 100 - y);
    }
    function what(){
        var y=window.pageYOffset;
        window.scrollBy(0, 450 - y);
    }
    function triki(){
        var y=window.pageYOffset;
        window.scrollBy(0, 700 - y);
    }
    function html(){
        var y=window.pageYOffset;
        window.scrollBy(0, 900 - y);
    }    
    function laukums(n){
        let p=document.createElement("P");
        p.innerHTML="Te būs laukums ar " + n + " lauciņiem";
        document.getElementById("dinamisks").appendChild(p);
    }