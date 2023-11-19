 const form = document.getElementById("todoForm")
 const list = document.getElementById("list");

    document.addEventListener("submit", (event) => {
       event.preventDefault();
        
       const toDoInput = document.getElementById("ToDo");
       const toDoValue = toDoInput.value.trim();

       if (toDoValue !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = toDoValue;

        // Append the new list item to the list
        list.appendChild(listItem);

        // Clear the input field
        toDoInput.value = "";
    }

        
    })