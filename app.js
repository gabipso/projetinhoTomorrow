let trilho = document.getElementById("trilho");

let body = document.querySelector("body");



trilho.addEventListener("click", ()=> {
    trilho.classList.toggle("dark")
    body.classList.toggle("dark")
    
})



function review() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let texto= document.getElementById("texto").value;
    console.log("feito")
}

