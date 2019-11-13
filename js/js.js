let list = ['Катя', 'Анастасия', 'Ника', 'Марина', 'Оля', 'Сергей'];
document.getElementById("test").innerHTML = list.sort();




function randomSchedule() {
	list.sort();
	const nameList = document.getElementById("demo").innerHTML = list.sort(function (a, b) {
		return Math.random() - 0.5
	});
	document.getElementById("loader").style.display = "block";
	document.getElementById("demo").style.display = "none";
	document.getElementById("demo2").style.display = "none"
	document.getElementById("img").style.display = "none";
	myVar = setTimeout(showPage, 3000);
	sendMessage()
	function sendMessage(){
	chat_id = "-1001194324830";
	token = "958165245:AAHMGSTWBSdrzd9NSFR6Vti4QY2WATPkI_c";
	message = "Время митингов: "+nameList;
  $.getJSON("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id,  function (data, textStatus, jqXHR) {  // success callback
          const id = data.result.message_id;
		$.getJSON("https://api.telegram.org/bot"+token+"/pinChatMessage?chat_id="+chat_id+"&message_id="+id);  
    });
  }
  
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
	document.getElementById("demo").style.display = "inline";
	document.getElementById("demo2").style.display = "block";
	document.getElementById("img").style.display = "block";
}

function addToList() {
	fieldValue = document.getElementById('addValue').value;
	list.push(fieldValue);
	document.getElementById("test").innerHTML = list.sort();
}


function deleteFromList() {
	let select = document.getElementById("dynamic-select");
	let selectedValue = select.options[select.selectedIndex].text;

	var found = list.find(function (element) {
		return element = selectedValue;
	});
	let index = list.indexOf(selectedValue);

	if ((found = selectedValue)) {
		list.splice(index, 1);
	}
	document.getElementById("test").innerHTML = list.sort();
	select.options[select.selectedIndex] = null;
}


//*new 

function getOption() {
	var select = document.getElementById("dynamic-select");
	if (select.options.length > 0) {
		var option = select.options[select.selectedIndex];
		alert("Text: " + option.text + "\nValue: " + option.value);
	} else {
		window.alert("Select box is empty");
	}
}

function addOption() {
	fieldValue = document.getElementById('addValue').value;
	var select = document.getElementById("dynamic-select");
	select.options[select.options.length] = new Option(fieldValue, '0', false, false);
	list.push(fieldValue);
	document.getElementById("test").innerHTML = list.sort();

}

function removeOption() {
	var select = document.getElementById("dynamic-select");
	deleteFromList();
	select.options[select.options] = null;
}

function removeAllOptions() {
	var select = document.getElementById("dynamic-select");
	select.options.length = 0;
}