$(function() {

	var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, { min: 10000, max: 2000000, start: 10000, hideRange: true, step: 10000 });

	var elem_second = document.querySelector('.calc-range-second');
	var result = document.querySelector('.calc-input-second');
	var init_second = new Powerange(elem_second, { min: 100000, max: 30000000, start: 10000, hideRange: true, step: 1000000 });

	var S = +$('.calc-input-second');
	var i = 0.00875;
	var K = i * Math.pow(1+i, res) / (Math.pow(1+i, res)-1);
	var A = K * S;
	var age = $('.calc-input-bottom');
	var n = (70 - age) * 12;
	var res

	$('.calc-range').on('change', function() { 
		$('.calc-input').val($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) 
	});


	$('.calc-input-bottom').keyup(function () {
		age = +$(this).val() 
		n = (70 - age) * 12
		res = n
		K = i * Math.pow(1+i, res) / (Math.pow(1+i, res)-1)
		A = K * S;
		A = Math.round(A);
		$('.calc__right-top-num').text(A.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
		// console.log(res);
	}).keyup();

	$('.calc-range-second').on('change', function() { 
		$('.calc-input-second').val($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
		S = +$(this).val()
		K = i * Math.pow(1+i, res) / (Math.pow(1+i, res)-1)
		A = K * S;
		A = Math.round(A);
		$('.calc__right-top-num').text(A.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
		// console.log(res);
		// console.log(n);
	});

	$('.calc-input-second').keyup(function () {
		S = $(this).val();
		S = S.replace(/ /g,'');
		S = +S;
		A = K * S;
		A = Math.round(A);
		$('.calc__right-top-num').text(A.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) 
	}).keyup();

	$('.calc-range-second').on('change', function() { 
		$('.calc-input-second').val($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))

	});




});


(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('calc__form');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();


 
var $page = $('html, body');
$('a[href*="#calc"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});