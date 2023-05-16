// let askedName = window.prompt("What's is your Name");
// console.log(askedName);

// adding two Number

// if(window.confirm("Are you sure calculate?")){

//     let num1 = window.prompt("Number 1")
//     let num2 = window.prompt("Number 2")

//     alert(Number(num1)+parseFloat(num2))
// }


function run(){
    
    let num1 = window.prompt("Number 1")
    let num2 = window.prompt("Number 2")

    alert(Number(num1)+parseFloat(num2))
}

    // let h1aaa = document.getElementById('aaa')
    // console.log(h1aaa.innerHTML);

    // h1aaa.innerHTML = "one two three";

    let link = document.getElementsByTagName('a')
    console.log(link[0].innerText);

    link[0].innerText = "youtube";
    link[0].href = "https://facebook.com";

    let para = document.getElementsByTagName('p')[0]
    console.log(para.style);
    para.style.backgroundColor = "black";
    para.style.color = "white";
    para.style.padding = "25px";
    para.style.fontSize = "20px";







//Event



