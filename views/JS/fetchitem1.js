const xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (this.status === 200) {
    try {
      const resObj = JSON.parse(this.responseText);
      console.log(resObj);
      // FIRST
      document.getElementById("a1").innerHTML = resObj.Store_Menu.CA1.name;
      document.getElementById("a2").innerHTML = resObj.Store_Menu.CA1.description;
      var he1 = resObj.Store_Menu.CA1.url;
      var heli1 = "<img src=" + he1 +  ">";
      document.getElementById("a3").innerHTML = heli1 ;
      // SECOND
      document.getElementById("b1").innerHTML = resObj.Store_Menu.CA2.name;
      document.getElementById("b2").innerHTML = resObj.Store_Menu.CA2.description;
      var he2 = resObj.Store_Menu.CA2.url;
      var heli2 = "<img src=" + he2 +  ">";
      document.getElementById("b3").innerHTML = heli2 ;
      // THIRD
      document.getElementById("c1").innerHTML = resObj.Store_Menu.CA3.name;
      document.getElementById("c2").innerHTML = resObj.Store_Menu.CA3.description;
      var he3 = resObj.Store_Menu.CA3.url;
      var heli3 = "<img src=" + he3 +  ">";
      document.getElementById("c3").innerHTML = heli3 ;
      //FORTH
      document.getElementById("d1").innerHTML = resObj.Store_Menu.CA4.name;
      document.getElementById("d2").innerHTML = resObj.Store_Menu.CA4.description;
      var he4 = resObj.Store_Menu.CA4.url;
      var heli4= "<img src=" + he4 +  ">";
      document.getElementById("d3").innerHTML = heli4 ;

    } catch (e) {
      console.warn("Error");
    }
    console.log(this.responseText);
  } else {
    console.warn("Did not recieve 200 Ok from response");
  }

};
xhr.open('get', 'https://gist.githubusercontent.com/RahulPatelme/6f94f532488ad86799bee5f33de7ee1b/raw/c08361ab277f0c6381529686e9ea1c8651118151/gistfile1.json');
xhr.send();
