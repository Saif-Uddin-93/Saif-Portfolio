
//Browser API
window.addEventListener('load', function() {
    let link = document.getElementsByClassName("nav-link");
    /* .addEventListener("click", function(){
        console.log("TESTTTT");
    }) */
    
    for (let index = 0; index < link.length; index++) {
        const element = link[index];
        element.addEventListener("click", function(){
            for (let i = 0; i < link.length; i++) {
                link[i].classList.remove('active');
            }
            element.classList.add('active');
        })
    }
});
