
const menu = document.querySelector(".phone-menu");

function changeMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}



const info = document.getElementById("info");
const infoBtn = document.getElementById("info-btn");
const policy = document.getElementById("policy");
const policyBtn = document.getElementById("policy-btn");


function showText(item) {
    if (item) {
        if (info.style.display == "none") {
            info.style.display = "block"
            infoBtn.innerHTML = "-";
        } else {
            info.style.display = "none"
            infoBtn.innerHTML = "+";
        }
    } else {
        if (policy.style.display == "none") {
            policy.style.display = "block"
            policyBtn.innerHTML = "-";
        } else {
            policy.style.display = "none"
            policyBtn.innerHTML = "+";
        }
    }
}



const button = document.getElementById('buttonmodal')
const closebutton = document.getElementById('closebutton')
const modal = document.getElementById('modal')

const imgsrc = document.getElementById("img-src");
const productname = document.getElementById("product-name");
const price = document.getElementById("product-price");

function showDetails(x) {
    modal.classList.add('scale-100')
    switch (x) {
        case 0:
            imgsrc.src = "assets/Black_Men_Shoes-a3kQBxh1.png";
            productname.innerHTML = "Black Men Shoes";
            price.innerHTML = "$120"
            break;
        case 1:
            imgsrc.src = "assets/dance-shoes-hlKcu2SX.png";
            productname.innerHTML = "Dance Shoes";
            price.innerHTML = "$130"
            break;
        case 2:
            imgsrc.src = "assets/nike-ZuojQIw0.png";
            productname.innerHTML = "Nike Shoes";
            price.innerHTML = "$220"
            break;
        case 3:
            imgsrc.src = "assets/running-shoes-R9ImIyhn.png";
            productname.innerHTML = "Running Shoes";
            price.innerHTML = "$100"
            break;
        case 4:
            imgsrc.src = "assets/sneakers-yolgBcoN.png";
            productname.innerHTML = "Sneakers Shoes";
            price.innerHTML = "$140"
            break;
        case 5:
            imgsrc.src = "assets/sports-O2J3eaI4.png";
            productname.innerHTML = "Sports Shoes";
            price.innerHTML = "$200"
            break;
        default:
            break;
    }
}

function closebtn() {
    modal.classList.remove('scale-100')
}
