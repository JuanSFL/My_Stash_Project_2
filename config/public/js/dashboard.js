/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

var userMenuDiv = document.getElementById("userMenu");
var userMenu = document.getElementById("userButton");

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;

function check(e) {
    var target = (e && e.target) || (event && event.srcElement);

    //User Menu
    if (!checkParent(target, userMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, userMenu)) {
            // click on the link
            if (userMenuDiv.classList.contains("invisible")) {
                userMenuDiv.classList.remove("invisible");
            } else { userMenuDiv.classList.add("invisible"); }
        } else {
            // click both outside link and outside menu, hide menu
            userMenuDiv.classList.add("invisible");
        }
    }

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
            } else { navMenuDiv.classList.add("hidden"); }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
        }
    }

}

function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);

const homeBtn = document.querySelector('#homeBtn');
const dashboardSection = document.querySelector('#dashboardSection');
const listingsBtn = document.querySelector('#listingsBtn');
const listingsSection = document.querySelector('#listingsSection');
const transactionBtn = document.querySelector('#transactionBtn');
const transactionSection = document.querySelector('#transactionSection');

const renderDashboard = () => {
    dashboardSection.style.display = 'block';
    listingsSection.style.display = 'none';
    transactionSection.style.display = 'none';
};

const renderListings = () => {
    dashboardSection.style.display = 'none';
    listingsSection.style.display = 'block';
    transactionSection.style.display = 'none';
};

const renderTransactions = () => {
    dashboardSection.style.display = 'none';
    listingsSection.style.display = 'none';
    transactionSection.style.display = 'block';
};

homeBtn.addEventListener('click', renderDashboard);
listingsBtn.addEventListener('click', renderListings);
transactionBtn.addEventListener('click', renderTransactions);

var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function (event) {
        event.preventDefault()
        toggleModal()
    })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
    }
};


function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
};

const addListing = async () => {
    const product_name = document.querySelector('#grid-name').value.trim();
    const description = document.querySelector('#grid-description').value.trim();
    const type = document.querySelector('#grid-type').value.trim();
    const color = document.querySelector('#grid-color').value.trim();
    const condition = document.querySelector('#grid-condition').value.trim();
    const brand = document.querySelector('#grid-brand').value.trim();
    const price = document.querySelector('#grid-price').value.trim();

    if (product_name && description && type && price) {
        console.log(product_name, description, type, price);

        let response = await fetch(`/api/products`, {
            method: 'POST',
            body: JSON.stringify({ product_name, description, type, color, condition, brand, price }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log(response)
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create listing');
        };
    };

    const date = new Date();
    const itemListed = 'true';
    console.log(date, itemListed);

    let response = await fetch(`/api/products/history`, {
        method: 'POST',
        body: JSON.stringify({ date, itemListed }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log(response)
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create listing');
    };
};

document.querySelector('#saveBtn').addEventListener('click', addListing);

