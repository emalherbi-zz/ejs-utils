$(document).ready(function() {

	$("#toggle").click(function(event) {
		Body.top();
	});

	$("#areadme").click(function(event) {
		$('html, body').animate({
			scrollTop : $("#readme").offset().top
		}, 1000);
	});

	$("#aAlert").click(function(event) {		
		Scroll.go('Alert');
	});

	$("#aScroll").click(function(event) {		
		Scroll.go('Scroll');
	});

	$("#aBody").click(function(event) {		
		Scroll.go('Body');
	});

	$("#aCheckBox").click(function(event) {		
		Scroll.go('CheckBox');
	});

	$("#aCNPJ").click(function(event) {		
		Scroll.go('CNPJ');
	});

	$("#aCPF").click(function(event) {
		Scroll.go('CPF');
	});

	$("#aDig").click(function(event) {		
		Scroll.go('Dig');
	});

	$("#aData").click(function(event) {		
		Scroll.go('Data');
	});

	$("#aDiv").click(function(event) {		
		Scroll.go('Div');
	});

	$("#aForm").click(function(event) {		
		Scroll.go('Form');
	});

	$("#aInput").click(function(event) {		
		Scroll.go('Input');
	});

	$("#aMask").click(function(event) {		
		Scroll.go('Mask');
	});

	$("#aMenu").click(function(event) {		
		Scroll.go('Menu');
	});

	$("#aMoney").click(function(event) {		
		Scroll.go('Money');
	});

	$("#aRadio").click(function(event) {		
		Scroll.go('Radio');
	});

	$("#aSelect").click(function(event) {		
		Scroll.go('Select');
	});

	$("#aTimeout").click(function(event) {		
		Scroll.go('Timeout');
	});

	$("#aTable").click(function(event) {		
		Scroll.go('Table');
	});

	$("#aTableGoogle").click(function(event) {	
		Scroll.go('TableGoogle');
	});

	$("#aTrim").click(function(event) {
		Scroll.go('Trim');
	});

	$("#aZeros").click(function(event) {
		Scroll.go('Zeros');
	});

});
