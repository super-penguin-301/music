window.onscroll = function() {myFunction();};
function myFunction(){
// let headEl= document.getElementById("header");
// headEl.style.backgroundColor="#f6f5f5";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    document.getElementById('header').style.backgroundColor = '#2d132c';
    document.getElementById('header').style.transitionDuration = '300ms';
    // document.getElementById('logo').style.width = '290px';
    // document.getElementById('logo').style.transitionDuration = '300ms';

  } else {

    document.getElementById('header').style.backgroundColor = 'inherit';
    document.getElementById('header').style.transitionDuration = '300ms';
    // document.getElementById('logo').style.width = '350px';
    // document.getElementById('logo').style.transitionDuration = '300ms';
  }
}
