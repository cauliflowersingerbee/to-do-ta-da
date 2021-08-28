

function newItem(){

    //javascript
    //1. Adding a new item to the list of items:   

    //JS
    /*let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
       */

      //JQuery
       let li = $('<li></li>');
       let inputValue = $('#input').val();
       li.append(inputValue);

      //JS
      /* if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       } */

      //JQuery
       if (inputValue === ''){
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }

<<<<<<< Updated upstream

    
     //2. Crossing out an item from the list of items:
      /* JS 
      function crossOut() {
             li.classList.toggle("strike");
         }
    
         li.addEventListener("dblclick",crossOut);

          */

         function crossOut() {
           li.toggleClass("strike");
         }

         li.on("dblclick", function crossOut() {
           li.addClass("strike");
         });
=======
      //crossing out item from list of items

         function crossout() {
           li.toggleClass('strike');
         }

         li.on("dblclick", function crossOut() {
          li.addClass("strike");
        });
>>>>>>> Stashed changes


       
    
     //3(i). Adding the delete button "X": 
       let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);

        //JQUERY
        let crossOutButton = $('<crossOutButton></crossOutButton>');
         crossOutButton.append(document.createTextNode('X'));
         li.append(crossOutButton);


     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     //JAVASCRIPT  
     /*function deleteListItem(){
             li.classList.add("delete")
         } */

    //JQUERY
     crossOutButton.on("click", deleteListItem);
      function deleteListItem(){
    		li.addClass("delete")
     	}
     
    
     // 4. Reordering the items: 
     $('#list').sortable();
    
    }
<<<<<<< Updated upstream
    
    


     /*
    JQUERY NOTES :

    DOM Selection:

    1. You can perform the rough equivalent of a
    document.querySelectAll function like so:

    let element = $('.my-class');
    
    2. adding a class:

    let inputs = $('input');
    inputs.addClass('my-class');

    in js that would be--- 
    
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
    input.classList.add('.my-class');
    });

    3. Selecting an element by its ID:  

    Let’s say you have an ordered item list in the HTML 
    with an ID <ol id="list"></ol>. 
    To select it in 
    jQuery you can do so with $('#list'), where the 
    # is for the ID. If it’s a class (<ol class="list"></ol>) 
    then you can do $('.list') with a dot.

    4. Assigning selected list to a variable 
    (say “list”): 
    
    let list = $('#list'). 
    
    5. Appending something to this list, such as an 
    li element, you can write: 

    $('#list').append(<li>list something</li>);. 
    
    If you want to use the variable “list” you created 
    earlier, you can write: 

    list.append("<li>list something</li>");

    6. You can store each <li> element in a variable 
    as well using 
    
    let li = $('<li></li>');. 
    
    Now you can append the li variable to the “list” 
    variable like list.append(li);. 

    DOM Traversal
    1. let input = $('input');
    
    input.parent(); // Get the parent element
    input.children(); // Get all children
    input.closest('.container'); // Go up the hierarchy of parents until the selector matches
    input.siblings(); // Get all siblings

    2. To get the input values from the index page, we 
    can use val(). Eg. if we have an input in the index page 
    
    <input type="text" name="ListItem" id="input"/> 
    
    then we can get the value of the input with jQuery like this: 
    
    $('#input').val();. 
    
    3. If you want to store the value into a variable you can 
    use 
    
    let inputValue = $('#input').val();.

    4. You can append this value into another element 
    such as the li from the previous mini-tutorial using 
    
    li.append(inputValue);

    With this you should get HTML elements that 
    look like this structure below.

      <ol id="list">
        <li>the value of the (inputValue) from the input element</li>
      </ol>


    DOM Manipulation

    1. jQuery is built around the idea of chaining.

    $('.notification').addClass('bright-red').delay(300).removeClass('bright-red')


    2. When chaining, you can also split your commands out across multiple lines, making it easier to read. The code above could also be written like this:

    $('.notification')
      .addClass('bright-red')
      .delay(300)
      .removeClass('bright-red')

    3. you can create new DOM elements like this:

    let newElement = $('<div class="new-class">Content is here!</div>');
    $('body').append(newElement);

    This is equivalent to the following non-jQuery code:

    let newElement = document.createElement('div');
    newElement.classList.add('new-class');
    newElement.innerText = 'Content is here!';
    document.querySelector('body').appendChild(newElement);

    4. Crossing out list items

    Back to the unordered item list from the previous mini-tutorial.

    <ol id="list">
      <li>the value of the (inputValue) from the input element</li>
    </ol>
    
    First, you cross out the li item. 
    To do so, create a CSS class strike that will apply 
    line-through on the text: 
    
    .strike{text-decoration: line-through;}.

    Then, you can add this class into the li element 
    using jQuery: 
    
    li.addClass("strike");. 
    
    By doing this the list item li should be crossed out 
    but still visible

    5.  In jQuery, you can’t use forEach on a collection, 
    but you can iterate over a jQuery collection with 
    jQuery’s very own each() function:

      $('input').each(function (i) {
        let inputValue = $(this).val();
        let inputName = $(this).attr('name');
        if(inputValue().length < 1){
          console.log('Please fill out the ' + inputName + ' field')
        }
      });


    6.  attr() can be used to get the value of a certain attribute, 
    similar to how getAttribute is used in vanilla JavaScript. 
    For example, if you had an img element:

      <img class='my-image' src='https://picsum.photos/200/300'>
      
      You could obtain what’s assigned to the src attribute 
      in the following way:

      var imageSource =  $('.my-image').attr('src');
      console.log(imageSource); // this will log: 
      
      https://picsum.photos/200/300

      The same thing could be done using vanilla JavaScript like so:

      var imageSource =  document.querySelector('.my-image').getAttribute('src');
      console.log(imageSource); // this will log: https://picsum.photos/200/300


    7.  There is, however, another use for the attr method, 
    which is to set/change the value of an attribute. This can be done 
    by passing a second argument, which will be the new value you want 
    the specified attribute to take. 
    For example, if you have the following image element:

    <img class='my-image'>

    You could set its src attributes in jQuery like so:

    $('.my-image').attr('src', 'https://picsum.photos/400/400');

    If you were to do this using vanilla JavaScript, you could use 
    the setAttribute method:

    document.querySelector('.my-image').setAttribute('src', 'https://picsum.photos/400/400');
    
    8. If given a jQuery collection, you can get the actual 
    DOM elements with get():

    inputs.get(0); // Get the first DOM element from the collection

    9. Showing or hiding elements:
    
    let inputs = $('input');

    inputs.show(); // Make the element(s) visible
    inputs.hide(); // Hide the element(s)

    inputs.fadeOut(); // Fade the element(s) out and then hide them
    inputs.fadeIn(); // Fade the element(s) in and show them
    inputs.fadeToggle(); // Fade the element(s) in or out depending 
            on whether they're currently visible or not

    inputs.slideDown(); // Slide the element(s) out of view and then hide them
    inputs.slideUp(); // Slide the element(s) into view and show them
    inputs.slideToggle(); // Slide the element(s) in or out
    
    10. Remember that you can pass the duration of the animation 
    when using fadeIn, fadeOut, slideDown, slideUp, and other 
    similar methods. The duration is passed as an integer, which 
    represents the duration in milliseconds. 
    For example, fadeIn(1000) would have a fade-in effect 
    that lasts one second.

    You can also create, remove, append, and empty elements:

    input.remove(); // Delete the element
    $('body').append(input); // Like .appendChild
    $('body').empty(); // Remove all children of the element

    An example of how you can hide an item or an element is with 
    the css trick display: none;. To implement this we need first 
    to create a new css class. Call it delete and give the 
    attribute display: none;.

    .delete {
      display: none;
    }

    Now, to hide an element you can call or add the class delete 
    to it, like: li.addClass("delete");.

    11. Adding/Removing Event Listeners:

      $('input').on('click', function (event) {
        // Do something
      });
      $('input').off('click'); // Remove all 'click' listeners

    12. Crossing out items with event handling:
        li.on("click", function() {
        li.addClass("strike");
      });

    13. Just like querySelector(), $() lets you use regular 
    CSS selectors to select a collection of elements. If you 
    want to narrow down your selection, you can use more 
    specific CSS selectors—even pseudo selectors.

    For example, you can select all <p> elements 
    inside the <article> element like this:

    $('article p'). 
    
    Or, you can select all elements 
    that don’t have a specific class (such as highlighted) 
    like this: 
    
    $('p:not(.highlighted)').

    14. AJAX

    Let's take a look at how you can make asynchronous HTTP requests in jQuery (which isn’t much different from working with the fetch API). Carefully compare both ways in the following code snippet, and try to spot the differences:

    // Using jQuery
    $.ajax('https://yesno.wtf/api', { dataType: 'json' }).then(function (responseJSON) {
      console.log(responseJSON); // This is the parsed JSON response
    });

    // Using Fetch API
    fetch('https://yesno.wtf/api').then(function(data){
      return data.json();
    }).then(function(responseJSON){
      console.log(responseJSON);
    });

    Also, you can make a catch chain to handle errors, for example:

    $.ajax('[URL]', {
      method: 'POST',
      dataType: 'json',
      timeout: 5000
    }).then(function (responseJSON) {
      console.log(responseJSON);
    }).catch(function(err){
      console.log('Caught an error:' + err.statusText);
    });

    
    */
=======
    
>>>>>>> Stashed changes
