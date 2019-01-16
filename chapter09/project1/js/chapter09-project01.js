
/*
    1)  Add listeners to the focus and
        blur events of all elements that have this hilightable class. In your event
        handlers for these two events, simply toggle the class highlight (which is in
        the provided CSS file). This will change the styling of the current form
        element. Be sure to set up these listeners after the page has loaded.
        
    2)  Add an event handler for the submit event of the form. In
        this handler, if any of the required form elements are empty, add the CSS class
        error to any of the empty elements. As well, cancel the submission of the
        form (hint: use the preventDefault() method).
        
    3)  Add the appropriate handler for these required controls that will remove the
        CSS class error that have changed content.
    
    Test
        Test the form in the browser. Verify the highlighting functionality works by
        tabbing from field to field. Try submitting the form with blank fields to verify
        the error formatting works. Verify the error formatting is removed if you add
        content and then resubmit.
*/

//Add the event listener load so that this function runs after the page has been loaded. 
window.addEventListener("load", ()=>{

    for(let item of document.querySelector('#hilightable')){
        item.addEventListener('focus', (e) => e.target.classList.toggle('highlight'), this);
        item.addEventListener('blur',  (e) => e.target.classList.toggle('highlight'), this);
    };
    

    let form = document.querySelector('#form');
    form.addEventListener("submit", submitForm, false);
});

window.addEventListener("reset", ()=>{

    let required = document.querySelector('#required');
    for(let el of required){
        el.classList.remove("error");
    }
});


function submitForm(event){

    let required = document.querySelector('#required');

    let valid = true;

    for(let el of required ) {
        let value = el.value;
      if (value === "" || value === undefined){
          event.preventDefault();
          valid = false;
          el.classList.add("error");
      } else {
         el.classList.remove("error");
      }
    };
    return valid;
};
