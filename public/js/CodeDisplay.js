document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll("#myList li");
    
    listItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var targetId = item.getAttribute("data-target");
        toggleContent(targetId);
      });
    });
    
    function toggleContent(id) {
      var contentDivs = document.querySelectorAll(".content");
      contentDivs.forEach(function(div) {
        if (div.id === id) {
          div.classList.remove("hidden");
        } else {
          div.classList.add("hidden");
        }
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements whose IDs start with "content"
    var contentElements = document.querySelectorAll('[id^="content"]');
  
    // Loop through each content element and remove the "hidden" class
    contentElements.forEach(function(element) {
      element.classList.remove('hidden');
    });
});



