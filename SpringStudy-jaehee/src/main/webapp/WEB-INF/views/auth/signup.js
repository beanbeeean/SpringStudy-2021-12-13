const username = document.querySelector('#username');
const idCheck = document.querySelector('#id-check');
const signupValues = document.querySelectorAll('.signup-ip');

idCheck.onclick = () => {
	alert("아이디 : " + username.value);
	for (let i = 0; i < signupValues.length; i++) {
		alert(signupValues[i].value);
	}
}

signupValues[0].onblur = () => {
	const testText = document.querySeletor('.test-text');
	tesText.style.color = 'red';
	testText.innerHTML = '<a href="#">테스트</a>'
}