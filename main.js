window.onload = function(){

var csv_data  = '/link.csv'
    var object = {};
    var  arr = [];
    window.array = arr;

    fetch(csv_data).then((res)=>res.text())
        .then((data)=>{
            //change breack and space
            var newString = data.replace(/(?:\r\n|\r|\n)/g, ";");
            //create row -> array
            var csv_array = newString.split(';')

            for(var i=0; i<csv_array.length; i++){
                arr.push({login:csv_array[i], tabNum:csv_array[i+1], link:csv_array[i+2] } );
                i=i+2
            }
            console.log(arr);
    })
        .cache((err) => console.log(err));
}



document.getElementById('send').onclick = sendData;
document.getElementById('arg').onclick = showEset;
document.getElementById('ess').onclick = showLogin;

function showEset() {
    document.getElementById('argis').style ="display: none";
    document.getElementById('eset').style ="display: block";
}

function showLogin() {
    document.getElementById('eset').style ="display: none";
    document.getElementById('log').style ="display: block";
}

function sendData() {
    console.log('start')
    let data = window.array;
    let tabNumber = document.getElementById("tabNumber")
    let logIn = document.getElementById("logIn")
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if(tabNumber.value == data[i].tabNum  && logIn.value == tabNumber.value)
        {
            console.log('is run')

            document.location.href = data[i].link;
    
            return true;
        }
    }
    let x = document.getElementById('downLink').innerHTML = "Не корректно введеный логогін";
}