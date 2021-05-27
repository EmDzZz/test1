    var navbar = document.getElementById("myNavbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
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
        p.innerHTML="Te būs laukums ar " + n + "x" + n + " lauciņiem";
        document.getElementById("dinamisks").appendChild(p);
        for(let i=0; i<n; i++){
            let newTable = document.createElement("table");
            for(let z=0; z<n; z++){
                let newP = document.createElement("tx");
                newP.innerHTML = (i)*6 + z + 1;
                newP.style = " background-color: greenyellow; margin: 20px; padding: 5px; width: 100px; width: 100px" ;
                newTable.appendChild(newP);
            }
            newTable.style="margin: 20px";
            document.getElementById("dinamisks").appendChild(newTable);
        }
    }