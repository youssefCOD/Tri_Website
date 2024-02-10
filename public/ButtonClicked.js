function changeColor(element) {
    // Reset color of all list items to green
    var listItems = document.querySelectorAll("#myList li");
    listItems.forEach(function(li) {
      li.classList.remove("clicked");
    });
    
    // Change color of clicked item to black
    element.classList.add("clicked");
  }