var links = document.getElementsByClassName('live');
var setupLink = function(link){
  link.onclick = function(e){
    console.log(e);

    //return false;
  };
};


for (var i = 0; i < links.length; i++) {
  setupLink(links[i]);
}

var page;

window.onhashchange = function () {
    if(page){
      page.classList.toggle('show');
    }
    page = document.getElementById(window.location.hash.substr(1));
    page.classList.toggle('show');
};
