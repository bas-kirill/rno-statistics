// Fill the list information about region's names

var data = '[{"id":"1","reg":"Республика Адыгея"},{"id":"2","reg":"Республика Башкортостан"},{"id":"3","reg":"Республика Бурятия"},{"id":"4","reg":"Республика Алтай"},{"id":"5","reg":"Республика Дагестан"},{"id":"6","reg":"Республика Ингушетия"},{"id":"7","reg":"Кабардино-Балкарская Республика"},{"id":"8","reg":"Республика Калмыкия"},{"id":"9","reg":"Карачаево-Черкесская Республика"},{"id":"10","reg":"Республика Карелия"},{"id":"11","reg":"Республика Коми"},{"id":"12","reg":"Республика Марий Эл"},{"id":"13","reg":"Республика Мордовия"},{"id":"14","reg":"Республика Саха (Якутия)"},{"id":"15","reg":"Республика Северная Осетия - Алания"},{"id":"16","reg":"Республика Татарстан"},{"id":"17","reg":"Республика Тыва"},{"id":"18","reg":"Удмуртская Республика"},{"id":"19","reg":"Республика Хакасия"},{"id":"20","reg":"Чеченская Республика"},{"id":"21","reg":"Чувашская Республика - Чувашия"},{"id":"22","reg":"Алтайский край"},{"id":"23","reg":"Краснодарский край"},{"id":"24","reg":"Красноярский край"},{"id":"25","reg":"Приморский край"},{"id":"26","reg":"Ставропольский край"},{"id":"27","reg":"Хабаровский край"},{"id":"28","reg":"Амурская область"},{"id":"29","reg":"Архангельская область"},{"id":"30","reg":"Астраханская область"},{"id":"31","reg":"Белгородская область"},{"id":"32","reg":"Брянская область"},{"id":"33","reg":"Владимирская область"},{"id":"34","reg":"Волгоградская область"},{"id":"35","reg":"Вологодская область"},{"id":"36","reg":"Воронежская область"},{"id":"37","reg":"Ивановская область"},{"id":"38","reg":"Иркутская область"},{"id":"39","reg":"Калининградская область"},{"id":"40","reg":"Калужская область"},{"id":"41","reg":"Камчатский край"},{"id":"42","reg":"Кемеровская область"},{"id":"43","reg":"Кировская область"},{"id":"44","reg":"Костромская область"},{"id":"45","reg":"Курганская область"},{"id":"46","reg":"Курская область"},{"id":"47","reg":"Ленинградская область"},{"id":"48","reg":"Липецкая область"},{"id":"49","reg":"Магаданская область"},{"id":"50","reg":"Московская область"},{"id":"51","reg":"Мурманская область"},{"id":"52","reg":"Нижегородская область"},{"id":"53","reg":"Новгородская область"},{"id":"54","reg":"Новосибирская область"},{"id":"55","reg":"Омская область"},{"id":"56","reg":"Оренбургская область"},{"id":"57","reg":"Орловская область"},{"id":"58","reg":"Пензенская область"},{"id":"59","reg":"Пермский край"},{"id":"60","reg":"Псковская область"},{"id":"61","reg":"Ростовская область"},{"id":"62","reg":"Рязанская область"},{"id":"63","reg":"Самарская область"},{"id":"64","reg":"Саратовская область"},{"id":"65","reg":"Сахалинская область"},{"id":"66","reg":"Свердловская область"},{"id":"67","reg":"Смоленская область"},{"id":"68","reg":"Тамбовская область"},{"id":"69","reg":"Тверская область"},{"id":"70","reg":"Томская область"},{"id":"71","reg":"Тульская область"},{"id":"72","reg":"Тюменская область"},{"id":"73","reg":"Ульяновская область"},{"id":"74","reg":"Челябинская область"},{"id":"75","reg":"Забайкальский край"},{"id":"76","reg":"Ярославская область"},{"id":"77","reg":"г. Москва"},{"id":"78","reg":"Санкт-Петербург"},{"id":"79","reg":"Еврейская автономная область"},{"id":"83","reg":"Ненецкий автономный округ"},{"id":"86","reg":"Ханты-Мансийский автономный округ - Югра"},{"id":"87","reg":"Чукотский автономный округ"},{"id":"89","reg":"Ямало-Ненецкий автономный округ"},{"id":"91","reg":"Республика Крым"},{"id":"92","reg":"Севастополь"},{"id":"99","reg":"Иные территории, включая город и космодром Байконур"}]'
var data_json = JSON.parse(data)

var len_data_json = data_json.length

var list_of_regions = document.getElementById("list_regions_ID")

function addOption (oListbox, text, value, isDefaultSelected, isSelected) {
	if (oListbox == null) return
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);

  //if (isDefaultSelected) oOption.defaultSelected = true;
  //else if (isSelected) oOption.selected = true;

  oListbox.appendChild(oOption);
}

for (var i = 0; i < len_data_json; ++i) {
	addOption(list_of_regions, data_json[i]["reg"], String(i + 1), true)
}

// 

window.onload = initButton;

var button = document.getElementById("button_get")

function initButton() {
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
	var regionId = list_of_regions.options[list_of_regions.selectedIndex].value
	console.log(regionId)
}

/*window.addEventListener('load', function () {
    fetch('data.json')
        .then(function (response) { return response.json(); })
        .then(function (json) {
        console.log(Object['values'](json[0]));
        Array.prototype
            .forEach
            .call(document.getElementsByTagName('input'), function (e, i) { return e.value = Object['values'](json[0])[i + 1]; });
    });
});*/