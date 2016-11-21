var prices = {};
var csv = "";
var rows = document.getElementsByTagName("tbody")[0].children
for (var i = 0; i < rows.length; i++) {
	var row = rows[i];
	var country = row.children[0].innerText.replace("\n", "");
	var price = country in prices ? prices[country] : 0;
	row.children[2].querySelector("input").value = price;
}