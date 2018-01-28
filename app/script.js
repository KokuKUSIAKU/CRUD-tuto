window.onload = function(){

  var form = document.getElementById("mySubmitButton");
  form.addEventListener("click", notePostRequestHandler)
  
  function notePostRequestHandler(e){
    e.preventDefault();
    var note =getFormData(); 
    postNoteToDatabase("http://localhost:8000/notes", note);
  }

  function getFormData(){
    var formFieldInputs = document.getElementsByTagName("fieldset").item(0);
    var title = formFieldInputs.querySelector("#title").value; 
    var body = formFieldInputs.querySelector("#body").value; 
    var message = formFieldInputs.querySelector("#message").value; 
    return  {title, body, message}; 
  }

  function postNoteToDatabase(url, data){
    // this send now only query string form data
    var queryString ="";
    var httpRequest = new XMLHttpRequest();
    var {title, body, message} = data; 
    var noteRest = {body, message};
    
    httpRequest.onreadystatechange = function() {
      console.log("request reached server successufflly");
      // request process events state go here
    }

    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
    queryString = "title="+encodeURIComponent(title); 

    for(let key in noteRest){
      queryString+=`&${key}=`+encodeURIComponent(noteRest[key]);
    }
    
    httpRequest.send(queryString);
  }

}