window.addEventListener("load", function() {
	document.querySelector("body").classList.add("loaded");
});

//send message with whatsapp

function sendWhatsApp() {
	var phoneNumber = '+201010612391';
	var message = 'Hello, there!';
	var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;
	if (navigator.userAgent.match(/Android/i)) {
	  window.location.href = 'intent://' + whatsappLink + '#Intent;package=com.whatsapp;scheme=https;end';
	} else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
	  window.location.href = 'whatsapp://send?phone=' + phoneNumber + '&text=' + message;
	} else {
	  window.location.href = whatsappLink;
	}
  }
  

  //slideshow
  var myIndex = 0;
  carousel();
  
  function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 15000); // Change image every 2 seconds
  }
