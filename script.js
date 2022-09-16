let submitButton =  document.getElementById("submit");
let tablerow = "";
submitButton.addEventListener("click", ()=>{
    addData();
    clearForm();
});


const addData = () => {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector("input[type='radio']:checked").value;
    let food = document.querySelector("input[name='food']:checked").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let tablebody = document.getElementById("table-body");
    
    tablerow += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>
    `
    tablebody.innerHTML = tablerow;
}

const clearForm = () => {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.querySelector("input[type='radio']:checked").value = "false";
    document.getElementsByName("food").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";

}