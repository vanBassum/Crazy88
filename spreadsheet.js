const sheetId = '1np8r3dLWVJymDDgx8NJlFB5o4u-zY-hcJsFXwDXQDqQ';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'Score';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`



const data = []
document.addEventListener('DOMContentLoaded', init)
const output = document.querySelector('.output')
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
			LoadData(jsonData);
		
            
	})
	.catch(err =>{
		const jsonData = {"version":"0.6","reqId":"0","status":"ok","sig":"2015199486","table":{"cols":[{"id":"A","label":"","type":"string"},{"id":"B","label":"","type":"number","pattern":"General"}],"rows":[{"c":[{"v":"Rowin"},{"v":26.0,"f":"26"}]},{"c":[{"v":"Crazy 69"},{"v":25.0,"f":"25"}]},{"c":[{"v":"De rijnlandpino\u0027s"},{"v":18.0,"f":"18"}]},{"c":[{"v":"The red cool ducks "},{"v":18.0,"f":"18"}]},{"c":[{"v":"Slay girls"},{"v":17.0,"f":"17"}]},{"c":[{"v":"Jan wandelaar"},{"v":12.0,"f":"12"}]},{"c":[{"v":"Cavianeus"},{"v":12.0,"f":"12"}]},{"c":[{"v":"The winners "},{"v":11.0,"f":"11"}]},{"c":[{"v":"I don\u2019t know"},{"v":10.0,"f":"10"}]},{"c":[{"v":"Red bread 🍞"},{"v":10.0,"f":"10"}]},{"c":[{"v":"La vida loca"},{"v":8.0,"f":"8"}]},{"c":[{"v":"Albatros girls are the best!"},{"v":8.0,"f":"8"}]},{"c":[{"v":"Quackers "},{"v":6.0,"f":"6"}]},{"c":[{"v":"One man army "},{"v":6.0,"f":"6"}]},{"c":[{"v":"Graaf floris V 2.0"},{"v":5.0,"f":"5"}]},{"c":[{"v":"The 5 musketeers "},{"v":4.0,"f":"4"}]},{"c":[{"v":"Villacher Bier"},{"v":4.0,"f":"4"}]},{"c":[{"v":"The ducks"},{"v":3.0,"f":"3"}]}],"parsedNumHeaders":0}};
		LoadData(jsonData);
	})
}


function LoadData(jsonData)
{
	const colz = [];
	const tr = document.createElement('tr');
	//Extract column labels


	colz.push("Name");
	const th = document.createElement('th');
	th.innerText = "Name";
	tr.appendChild(th);
	colz.push("Score");
	const th2 = document.createElement('th');
	th2.innerText = "Score";
	tr.appendChild(th2);


	output.appendChild(tr);
	//extract row data:
	jsonData.table.rows.forEach((rowData) => {
		
		//console.log(rowData);
		const row = {};
		colz.forEach((ele, ind) => {
			row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
		})
		data.push(row);
	})
	processRows(data);
}


 
function processRows(json) {
    json.forEach((row) => {
        const tr = document.createElement('tr');
        const keys = Object.keys(row);
    
        keys.forEach((key) => {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
        })
        output.appendChild(tr);
    })
}