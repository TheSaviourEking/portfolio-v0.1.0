const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', "");
            this.className += " active-btn";
            // console.log(this);
        })
    }

    // Active Sections
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove Selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove("active");
            })
            e.target.classList.add("active")

            // Hide other Sections
            sections.forEach((section) => {
                section.classList.remove("active")
            })

            const element = document.getElementById(id);
            element.classList.add("active");
            // console.log(element)
        }
    })

    /* TOGGLE LIGHT-DARK MODES */
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}

PageTransitions();
