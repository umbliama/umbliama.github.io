//Listen for form   

document.getElementById('my-form').addEventListener('submit',saveBookmark);

function saveBookmark(e) {    
    
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    //Call functions validateForm and siteExists
    if(!validateForm(siteName,siteUrl))  {
        return false;
       }
    if(!siteExists(siteName,siteUrl)) {
        return false;
    }
    
    //Init an bookmark object to store the value
    var  bookMark = {
      name:siteName,
      url:siteUrl
    };
    
    
    //Local storage test
    
    if(localStorage.getItem('bookmarks') === null) {
        //Init an array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookMark);
        //Set to localstorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array
        bookmarks.push(bookMark);
        //Re-set back to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    
    
    console.log(bookMark)
    //Prevent form from submitting
    e.preventDefault();
    
}
//Delete bookmark
function deleteBookmark(url){
    //Get the bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i = 0; i<bookmarks.length;i++){
        if(bookmarks[i].url == url){
            //Remove from array
            bookmarks.splice(i,1);  
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
}

//Save bookmark 
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    
    var bookmarkResults = document.getElementById('bookmarksresults');
    
    bookmarkResults.innerHTML = '';
    
    for(var i = 0; i < bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        
        bookmarkResults.innerHTML += '<div class="well">'
            +'<h3>'+name+
            '<a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a>'+ '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +'</h3>'+'</div>';
    }
}


//Validate form function
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}


//Check if Site exists
function siteExists(siteName,siteUrl) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i = 0; i < bookmarks.length;i++){
        if(siteName == bookmarks[i].name || siteUrl == bookmarks[i].url) {
            alert("Site currently exists");
            return false;
        }
    }
    
    return true;
}