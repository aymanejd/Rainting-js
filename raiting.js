let raitlist = document.querySelector(".railist");
let railistnum = document.querySelector(".railistnum");
let raitnum = document.querySelectorAll(".raitnum");
let subm=document.querySelector(".subm");
let num =0
raitnum.forEach((el) => {
    el.addEventListener("click", function (e) {
        
        raitnum.forEach((rating) => {
            rating.classList.remove("back");
        });
            num=parseInt(e.target.textContent)
        e.target.classList.add("back");
        
    });
})
    
subm.addEventListener("click", function () {
    while (raitlist.firstChild) {
        raitlist.removeChild(raitlist.firstChild);
    }
    if(num>0){
        for (let i = 0; i < num; i++) {
            let star = document.createElement("img");
            let divst = document.createElement("div");
            divst.appendChild(star);
            divst.classList.add("rait");
            star.setAttribute("src", "icon-star.svg");
            raitlist.appendChild(divst);
        }

    }
});

