var csv = "";
var rows = document.getElementsByTagName("tbody")[0].children
for (var i = 0; i < rows.length; i++) {
	var row = rows[i];
	var offset = row.children[0].innerText == "" ? 1 : 0;
	var country = row.children[offset+0].innerText.replace("\n", "");
	var currency = row.children[offset+2].querySelector("span").innerText;
	var price = row.children[offset+2].querySelector("input").value.replace(",", "");
	var tax = row.children[offset+3].innerText.replace("\n", "");
	csv += [country,currency,price,tax].join(",") + "\n";
}
console.log(csv);