function changeColor(element) {
    // Reset color of all list items to green
    var listItems = document.querySelectorAll("#myList li");
    listItems.forEach(function(li) {
      li.classList.remove("clicked");
    });
    
    // Change color of clicked item to black
    element.classList.add("clicked");
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the parent element (ul)
    document.getElementById('myMenu').addEventListener('click', function(event) {
        // Check if the clicked element is the LI itself
        if (event.target.tagName === 'LI') {
            // Prevent default link behavior
            event.preventDefault();
            // Change color of a different button
            document.getElementById('target_button_toChange1').classList.add("bg-white", "text-emerald-600");
            document.getElementById('target_button_toChange2').classList.remove("bg-white", "text-emerald-600");
            document.getElementById('target_button_toChange3').classList.remove("bg-white", "text-emerald-600");
            document.getElementById('target_button_toChange4').classList.remove("bg-white", "text-emerald-600");
        }
    });
});


  