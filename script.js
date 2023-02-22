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
  
