//site wide cursor
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide')

document.addEventListener('mouseenter', () => {
	site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
	site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor); 



function TrackCursor(evt) {
	site_wide_cursor.style.transform = 'translate(${evt.clientX}px, ${evt.clientY}px)' ;
} 

$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function() {
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
});