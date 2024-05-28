const footerButton = document.querySelector("#footer-button");
console.log(footerButton);

footerButton.addEventListener("click", goToFooter);

function  goToFooter(){
    window.location.href = "https://www.abc.net.au/news"
}
