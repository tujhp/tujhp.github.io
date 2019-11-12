const tableCreate = () => {
    let body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    tbl.id = 'table';

    let rows = document.getElementById('rows').value;
    // console.log(rows);
    let columns = document.getElementById('columns').value;
    for (let i = 0; i < rows; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < columns; j++) {
            if (i == columns && j == rows) {
                break;
            } else {
                let td = tr.insertCell();
                let textarea = document.createElement('textarea');
                textarea.id = 'text' + i + j;
                // console.log(textarea.id)
                td.appendChild(textarea);
                let element1 = document.createElement('input');
                element1.value = 'Сохранить';
                element1.type = 'submit';
                element1.id = 'save' + i + j;
                let arr = [
                    [0]
                ];
                arr[0][0] = 'text' + i + j;
                element1.addEventListener('click', () => {
                    let textId = arr[0][0];
                    let text1 = document.getElementById(textId).value;
                    document.getElementById(textId).parentNode.innerHTML = text1;

                });
                td.appendChild(element1);
                td.style.border = '1px solid black';
            }
        }
    }
    body.appendChild(tbl);

    document.getElementById('create-table').style.display = 'none';
    openbox('function-list');
    document.getElementById('function').style.display = 'block';
    

}

const changeTableBorder = () => {
    document.getElementById('table').style.border = document.getElementById('width').value + 'px ' + document.getElementById('option-border').value.toLowerCase() + ' black';
}

const changeButtonValue = () => {
    document.getElementById('apply').value = 'Применить ' + document.getElementById('width').value + 'px ' + document.getElementById('option-border').value.toLowerCase();
}

const addCaptionTable = () => {
   let table = document.getElementById('table').createCaption();
  table.innerHTML = '<b>' + document.getElementById('caption').value + '</b>';
}

const deleteString = () => {
    if (document.getElementsByTagName('tr').length < document.getElementById('row-num').value) {
        alert('Нет такой строки');
    } else {
        let table = document.getElementById('table');
        table.deleteRow(document.getElementById('row-num').value - 1);
    }

}

const openbox = id => {
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}


const generateColor = () => {
	var r=Math.floor(Math.random() * (256));
	var g=Math.floor(Math.random() * (256));
	var b=Math.floor(Math.random() * (256));
	var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
	return c;
	
}


const magic = () => {
    let elems = document.getElementsByTagName('td');
    let randnum = Math.floor(Math.random() * Math.floor(elems.length));
    let cell = elems[randnum];
    cell.childNodes[0].style.color = generateColor();
    cell.style.background = generateColor();
    cell.childNodes[0].style.fontSize = (Math.random() * (25 - 15) + 15) + 'pt';
}


const deleteTable = () => {
    document.getElementById('create-table').style.display = 'block';
    document.getElementById('function-list').style.display = 'none';
    document.getElementById('function').style.display = 'none';
    document.body.removeChild(document.getElementById('table'));
    
}