const dataBtB = document.querySelector(".data-BTB");
const dataBtBs = dataBtB.firstElementChild;
const dataBtBss = dataBtBs.querySelectorAll("li"); 

dataBtB.addEventListener("click", function (e) {
    const clicked = e.target.closest("li");
    if (!clicked) return;
    //this function is just for styling and adding some effects to the curent element .
    dataBtBss.forEach(function (el) {
      el.classList.remove("text-emerald-600");
    });
    clicked.classList.add("text-emerald-600");


    //the logic for changing the divs    console.log(clicked);

    const dataTypes = clicked.closest(".toggle-typesON").querySelectorAll(`[data-sort]`);


    dataTypes.forEach((el) => el.classList.add("hidden"));


    const dataType = clicked.closest(".toggle-typesON").querySelector(`[data-sort=${clicked.dataset.typeClicked}]`);


    // adding a cheking step for error events. 
    if (dataType) {
        dataType.classList.remove("hidden");

    } else {
        console.error("Element not found!"); // Optional: log an error or handle the case where the element is not found
    }

  });