function check() {
    let input = document.getElementById('fname');
    if(input.value !== "") {
        ecertificate();
    }else {
        alert("Por favor preencha todos os campos");
    }
}

function ecertificate() {
    var x = document.getElementById("main");
    x.style.display = "block"
    let name = document.getElementById('fname').value
    let details = document.getElementById('fdetails').value
    let oname = document.getElementById('forganisername').value
    document.getElementsByTagName('h3')[0].innerHTML = name;
    document.getElementsByTagName('h4')[0].innerHTML = details;
    document.getElementsByTagName('h5')[0].innerHTML = oname;
}

function dcheck() {
    let input = document.getElementById('fname');
    if (input.value !== "") {
        download();
    }else {
        alert("Por favor preencha todos os campos");
    }    
}
function download() {
    let body = document.getElementById('body').innerHTML;
    let main = document.getElementById('main').innerHTML;
    document.getElementById('body').innerHTML = main;
    window.print();
    document.getElementById('body').innerHTML = body;
}