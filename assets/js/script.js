/* Author */
filterSelection('all');
function filterSelection(c){
    var col,i;
    col = document.getElementsByClassName("column");
    if(c == 'all') c = "";
    for(i=0;i < col.length;i++){
        fiRemoveClass(col[i],"show");
        if(col[i].className.indexOf(c) > -1) fiAddClass(col[i],"show");
    }
}
//showing filtered elements
function fiAddClass(element, name){
    var i,arr1,arr2;
    arr1 =element.className.split(" ");
    arr2=name.split();
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
//hide elements
function fiRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

//Add active class to the current button (highlight it)
//var btnC = document.getElementsByClassName("name-container");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}