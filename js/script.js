

function newItem(){

  //adding item to list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
   li.append(inputValue);

  if (inputValue === ''){
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }


 //2. Crossing out an item from the list of items:

     function crossout() {
       li.toggleClass('strike');
     }

     li.on("dblclick", function crossOut() {
      li.addClass("strike");
    });


 //3(i). Adding the delete button "X": 
   
crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
   }
 

 // 4. Reordering the items: 
 $('#list').sortable();

}
