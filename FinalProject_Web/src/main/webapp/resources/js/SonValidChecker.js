// 잘못했으면 true
// 함수 하나 만들건데 함수에 input 을 넣으면 
// input에 아무것도 안 쓰면 true, 뭐라도 쓰면 false
function isEmpty(inputBox) {
	return (!inputBox.value);
}

// <input>, 글자수를 넣었을때
// 그 글자수보다 적으면 true, 그 글자수 이상이면 false
function lessThan(inputWord, len) {
	// 정해놓은 글자수 보다 쓴 글자수가 적으면 true를 리턴
	return (inputWord.value.length < len);
}

// <input>을 넣엇을때
// 한글/특수문자가 적혀있으면 true, 없으면 false
function containsKor(inputWord) {
	// 변수 ok안에 있는거만 아이디로 쓸 수 있
	var ok = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@._";
	var iv = inputWord.value;

	// 아까랑은 조금 다르게 우리가 쓴 아이디를 하나하나 검사하는 식
	for (var i = 0; i < iv.length; i++) {
		// 변수 ok안에 없는 글자를 iv에 써놨으면 true
		if (ok.indexOf(iv[i]) == -1) {
			return true;
		}
	}
	return false;
}

// 비밀번호 확인
// <input> x2 를 넣었을 때
// 내용이 다르면 true, 같으면 false
function pwNotEquals(input1, input2) {
	return (input1.value != input2.value);
}

// 비밀번호 조합
// <input>, 문자열세트 넣었을 때 -> pw, pwchk 칸 두개인데 하나만넣는 이유?
// 없으면 true, 있으면 false
function notContainsWant(input, wantWord) {
	// 박스에 쓴 거
	var iv = input.value;
	for (var i = 0; i < wantWord.length; i++) {
		// != -1 이면 원하는 문자가 있는거니까
		if (iv.indexOf(wantWord[i]) != -1) {
			return false;
		}
		return true;
	}
}

// 숫자아닌거 들어있으면~
// <input> 넣었을 때 
// 숫자 아닌 거 있으면 true, 숫자만 있으면 false
function notOnlyNum(input){
	return isNaN(input.value);
}

// <input>, 확장자 넣었을 때 
//		그거 아니면 true, 그거면 false
function isNotType(input, type){
	// type type명?
	// .type 하고 싶어
	type = "." + type;
	// input.value aaa.pdf
	// 파일명에 쩜피디에프가 있냐는 말
	return (input.value.indexOf(type) == -1);
}

