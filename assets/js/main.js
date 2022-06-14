window.addEventListener("load", function(){
    const myAccount = document.querySelector(".my-account");
    const account= document.querySelector(".account");
    myAccount.addEventListener("click", function(){
        account.classList.toggle("active");
    })

    
})