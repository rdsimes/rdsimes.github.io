
var page;

function showPage() {
  if(page){
    page.classList.toggle('show');
  }
  var hash = window.location.hash;
  if (!hash) {
    return;
  }
  page = document.getElementById(hash.substr(1));
  page.classList.toggle('show');
}

window.onhashchange = showPage;

//ensure initial page is loaded (if any)
showPage();
