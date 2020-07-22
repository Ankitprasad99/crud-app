isEdit = false;
editIndex = null;

function validate() {
    var result = true;
    var p = document.getElementsByName("password")[0].value;
    var e = document.getElementsByName("email")[0].value;
    var name = document.getElementById('name').value;
    var atindex = e.indexOf('@');
    var dotindex = e.lastIndexOf('.');

    if (atindex < 1 || dotindex >= e.length - 2 || dotindex - atindex < 3) {
        result = false;
        alert("Please provide correct email")
        return;
    }
    else if (p.length < 6) {
        alert("Password must be at least 6 characters long.")
        return false;
        return;
    }
    var re = /^[a-zA-Z ]{2,30}$/;                 // /^[A-Za-z]+$/;

    if (!re.test(name)) {
        alert('Enater a valid name.')
        return;
    }

    addRow();
}
var list1 = [];

function addRow() {

    let person = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("password").value
    }

    if (!isEdit)
        list1.push(person);
    else
        list1[editIndex] = person;

    allRows = ``;

    list1.forEach(row => {

        index = list1.findIndex(x => x == row)
        allRows += getRowString(row, index);
    })

    document.getElementById('table-row').innerHTML = allRows;

    init();
    isEdit = false;
    editIndex = null;
}

function getRowString(row, index) {

    let rowString = `
    <tr>
    <td> ${row.name}</td>
    <td> ${row.email} </td>
    <td> ${row.pass} </td>
    <td>  <button id="edit-btn-${index}"> edit</button> </td>
    </tr>
    `

    return rowString;
}

function editData() {
}


// edit table data
function init() {
    for (let i = 0; i < list1.length; i++) {
        document.getElementById(`edit-btn-${i}`)
            .addEventListener('click', (e) => {
                console.log('event:', e);
                let rowIndex = e.target.id.split('-btn-')[1]

                editIndex = rowIndex;
                isEdit = true;
                assignDataTOForm(rowIndex);
            })

    }
}

function assignDataTOForm(index) {
    let data = list1[index];
    console.log('selected data:', data);

    document.getElementsByName("password")[0].value = data.pass;
    document.getElementsByName("email")[0].value = data.email;
    document.getElementById('name').value = data.name;
}
