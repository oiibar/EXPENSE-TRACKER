const nameInput = document.getElementById('name_input');
const dateInput = document.getElementById('date_input');
const amountInput = document.getElementById('amount_input');
const addItem = document.getElementById('add');
let list = document.getElementById('list');



addItem.addEventListener('click' , function (e) {
	e.preventDefault();

	let li = document.createElement("li");
	li.setAttribute('id', 'list-item');
	li.classList.add('table-row');

	let divName = document.createElement("div");
	let divDate = document.createElement("div");
	let divAmount = document.createElement("div");

	divName.setAttribute('class', 'col col-1');
	divDate.setAttribute('class', 'col col-2');
	divAmount.setAttribute('class', 'col col-3');

	divName.setAttribute('id', 'tdName');
	divDate.setAttribute('id', 'tdDate');
	divAmount.setAttribute('id', 'tdAmount');

	divName.innerText = nameInput.value;
	divDate.innerText = dateInput.value;
	divAmount.innerText = amountInput.value + ' ' + '$';

	li.appendChild(divName);
	li.appendChild(divDate);
	li.appendChild(divAmount);


	list.appendChild(li);
});