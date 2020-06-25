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
    
    if (!re.test(name))
    {
        alert('Enater a valid name.')
        return;
    }
    
    addRow();

    }
    var list1=[];
    
    function addRow(){
        
        let person = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value ,
        pass : document.getElementById("password").value
    }

    list1.push(person);

     allRows = ``;

    list1.forEach(row =>{
        allRows += `
        <tr>
        <td> ${row.name}</td>
        <td> ${row.email} </td>
        <td> ${row.pass} </td>
        <td>  <button onclick=""> edit</button> </td>
        </tr>
        `
    })

    document.getElementById('table-row').innerHTML = allRows;
    
 }
 function editData(row)
    {
        console.log(row);
    
    }
    










