/* the main function */
function createRipple(e) {
	var circle = document.createElement('div'),
	d = Math.max(this.clientWidth, this.clientHeight),
	rect = this.getBoundingClientRect();
	this.appendChild(circle);
	circle.style.width = circle.style.height = d + 'px';
	circle.style.left = e.clientX - rect.left - d / 2 + 'px';
	circle.style.top = e.clientY - rect.top - d / 2 + 'px';
	circle.classList.add('ripple-effect');
    /* delete creted extra nodes after they fulfill their purpose. */
	setTimeout(function () {circle.parentNode.removeChild(circle); }, '601');
}
/* Calling  the main function */
/* Now, add ripple class to the elements you want ripple effects on. */
var els = document.getElementsByClassName('ripple');
Array.prototype.forEach.call(els, function (el) {
    el.addEventListener('click', createRipple);
});
