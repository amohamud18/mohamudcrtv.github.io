// Site wide cursor
// const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

//document.addEventListener('mouseenter', () => {
	//site_wide_cursor.style.display = 'block';
//});

//document.addEventListener('mouseleave', () => {
	//site_wide_cursor.style.display = 'none';
//});

//document.addEventListener('mousemove', TrackCursor);

//document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
//document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

//function TrackCursor(evt) {
	//const w = site_wide_cursor.clientWidth;
	//const h = site_wide_cursor.clientHeight;

	//site_wide_cursor.style.transform = 
		//`translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
//}

$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function() {
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}