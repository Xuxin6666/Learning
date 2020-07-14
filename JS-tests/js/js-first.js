const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#user');
const emailInput = document.querySelector('#email');
const warnInput = document.querySelector('#warning');
const userlist = document.querySelector('#userlist');

myForm.addEventListener("submit",onsubmit)



function onsubmit(e){
	e.preventDefault();
	if(nameInput.value === '' || emailInput.value === ''){
		warnInput.innerHTML = "输入信息不全";
		warnInput.classList.add('error')
		
	}else{
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
		userlist.appendChild(li);
	}
}

