let searchImg1 = document.getElementById("search-img");
let searchdown1 = document.querySelector(".search-dropdown");



// flag dropdown
let downImg = document.querySelector(".down-img");
let dropdown = document.querySelector(".dropdown");

downImg.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target) && !downImg.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

// sign in dropdown
let downImg1 = document.getElementById("down-img1");
let dropdown1 = document.querySelector(".dropdown1");

downImg1.addEventListener("click", () => {
    dropdown1.style.display =
        dropdown1.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", (event) => {
    if (!dropdown1.contains(event.target) && event.target !== downImg1) {
        dropdown1.style.display = "none";
    }
});

// hamburger drop down
let hamburgers = document.getElementById("hamburgers");
let hamside = document.getElementById("ham-side");

hamburgers.addEventListener("click", () => {
    if (hamside.style.display === "none") {
        hamside.style.display = "block";
    } else {
        hamside.style.display = "none";
    }
});

function myFunction() {
    let cardContainer = document.getElementById("cardContainer");
    let bodySec = document.getElementById("body-sec");
    let MainContainer = document.getElementById("mainContainer");
    if (bodySec.className === "second-section") {
        console.log(bodySec.className, "its workinggg");
        bodySec.className = "second-sectionFinal";
        MainContainer.className = "second-section";
    }

    // Fetch data from the dummy API
}

function dropDownPhones(selectedValue) {
    let table;

    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((objectData) => {
            objectData.products
                .filter((product) => product.category == selectedValue)
                .map((values) => {
                    console.log(objectData);
                    table += `
                <div class="js-portion">
                <div class="img-port">
                <img class="api-img" src="${values.thumbnail}" alt="">
                </div> 

                <div class= "text-port">
                <h3 class="api-h3">${values.title}</h3>
                <p class="api-p1">${values.description}</p>
                <p class="api-p2">Price: $${values.price}</p>
                <p class="api-p3">Quantity: ${values.stock}</p>
                <p class="api-p4">Discount: ${values.discountPercentage}%</p>
                </div>
                </div>`;
                });

            document.getElementById("cardContainer").innerHTML = table;

            function gettRatingStars(rating) {
                const star = '<i class ="fa fa-star"></i>';
                return star.repeat(rating);
            }
        });
}

function server(entered) {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((objectData) => {
            let tableData = "";
            objectData.products.forEach((values) => {
                if (
                    entered === values.id ||
                    entered === values.title ||
                    entered === values.brand ||
                    entered === values.category ||
                    entered === values.thumbnail
                ) {
                    tableData += `
                    <div class="js-portion">
                    <div class="img-port">
                    <img class="api-img" src="${values.thumbnail}" alt="">
                    </div> 

                    <div class= "text-port">
                    <h3 class="api-h3">${values.title}</h3>
                    <p class="api-p1">${values.description}</p>
                    <p class="api-p2">Price: $${values.price}</p>
                    <p class="api-p3">Quantity: ${values.stock}</p>
                    <p class="api-p4">Discount: ${values.discountPercentage}%</p>
                    </div>
                    </div>`;
                }
            });

            document.getElementById("cardContainer").innerHTML = tableData;
        })
        .catch((err) => {
            console.log("ERROR");
        });
}

function getSelected() {
    let selectedSource = document.getElementById("myselect").value;
    console.log(selectedSource);
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('input[type="search"]');
    let enteredValue = searchInput.value;
    server(enteredValue);
});

async function Sidebaritems(checkbox) {
    let tableDate = "";
    let cardContainer = document.getElementById("cardContainer");

    await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            let selectedCheckboxes = Array.from(
                document.querySelectorAll('input[name="category"]:checked')
            ).map((checkbox) => checkbox.value);

            let filteredProducts = data.products.filter((e) =>
                selectedCheckboxes.includes(e.category)
            );

            cardContainer.innerHTML = ""; // Clear the container

            filteredProducts.forEach((e) => {
                tableDate += `
                     <div class="js-portion">
                         <div class="img-port">
                             <img class="api-img" src="${e.thumbnail}" alt="">
                         </div> 
                         <div class="text-port">
                             <h3 class="api-h3">${e.title}</h3>
                             <p class="api-p1">${e.description}</p>
                             <p class="api-p2">Price: $${e.price}</p>
                             <p class="api-p3">Quantity: ${e.stock}</p>
                             <p class="api-p4">Discount: ${e.discountPercentage}%</p>
                         </div>
                     </div>`;
            });

            cardContainer.innerHTML = tableDate;
            console.log(data);
        });
}

async function sideitemops(checkbox) {
    let tableDate = "";
    let cardContainer = document.getElementById("cardContainer");

    await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            let selectedCheckboxes = Array.from(
                document.querySelectorAll('input[name="category"]:checked')
            ).map((checkbox) => checkbox.value);

            let filteredProducts = data.products.filter((e) =>
                selectedCheckboxes.includes(e.brand)
            );

            cardContainer.innerHTML = ""; // Clear the container

            filteredProducts.forEach((e) => {
                tableDate += `
                     <div class="js-portion">
                         <div class="img-port">
                             <img class="api-img" src="${e.thumbnail}" alt="">
                         </div> 
                         <div class="text-port">
                             <h3 class="api-h3">${e.title}</h3>
                             <p class="api-p1">${e.description}</p>
                             <p class="api-p2">Price: $${e.price}</p>
                             <p class="api-p3">Quantity: ${e.stock}</p>
                             <p class="api-p4">Discount: ${e.discountPercentage}%</p>
                         </div>
                     </div>`;
            });

            cardContainer.innerHTML = tableDate;
        });
}




// // let productlistdata;

// // async function productsdata() {

// //     await fetch("https://dummyjson.com/products")
// //         .then((res) => res.json())
// //         .then((data) => {
// //             productlistdata = data.products;


// //         });

// // }
// // productsdata();



// // let sum = () => {

// //     console.log(productlistdata, "under");
// //     let some = document.getElementById("cardContainer");

// //     for (let i = 0; i <= productlistdata.length; i++) {
// //         let product = productlistdata[i];

// //         some.innerHTML += `
// //     <div class="js-portion">
// //         <div class="img-port">
// //             <img class="api-img" src="${product.thumbnail}" alt="">
// //         </div> 
// //         <div class="text-port">
// //             <h3 class="api-h3">${product.title}</h3>
// //             <p class="api-p1">${product.description}</p>
// //             <p class="api-p2">Price: $${product.price}</p>
// //             <p class="api-p3">Quantity: ${product.stock}</p>
// //             <p class="api-p4">Discount: ${product.discountPercentage}%</p>
// //         </div>
// //     </div>

// //     `;
// //     }
// // };




// let undrproducts = (a, b) => {

//     // let under

//     // if (a === 30) {
//     //     under = productlistdata.products.filter((item) => item.price <= a);
//     //     console.log(under);
//     // } else if (a >= b && b <= a) {
//     //     under = productlistdata.products.filter(
//     //         (item) => item.price >= a && item.price <= b
//     //     );
//     //     console.log(under, "under");
//     // }
//     sum()

// };



// let sum = () => {
//     console.log(productlistdata, "under");
//     let some = document.getElementById("cardContainer");

//     for (let i = 0; i < productlistdata.length; i++) { // Change the condition to < instead of <=
//         let product = productlistdata[i];

//         some.innerHTML += `
//             <div class="js-portion">
//                 <div class="img-port">
//                     <img class="api-img" src="${product.thumbnail}" alt="">
//                 </div> 
//                 <div class="text-port">
//                     <h3 class="api-h3">${product.title}</h3>
//                     <p class="api-p1">${product.description}</p>
//                     <p class="api-p2">Price: $${product.price}</p>
//                     <p class="api-p3">Quantity: ${product.stock}</p>
//                     <p class="api-p4">Discount: ${product.discountPercentage}%</p>
//                 </div>
//             </div>
//         `;
//     }
// };


async function undrproducts(minPrice, maxPrice) {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const productsInRange = data.products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    displayProducts(productsInRange);
}

function displayProducts(products) {
    let some = document.getElementById("cardContainer");
    some.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        some.innerHTML += `
            <div class="js-portion">
                <div class="img-port">
                    <img class="api-img" src="${product.thumbnail}" alt="">
                </div> 
                <div class="text-port">
                    <h3 class="api-h3">${product.title}</h3>
                    <p class="api-p1">${product.description}</p>
                    <p class="api-p2">Price: $${product.price}</p>
                    <p class="api-p3">Quantity: ${product.stock}</p>
                    <p class="api-p4">Discount: ${product.discountPercentage}%</p>
                </div>
            </div>
        `;
    }
}


// stars or rating section


// let productlistdata = []; 

// function filterByRating(selectedRating) {
//     const roundedRating = Math.round(selectedRating); // Round the selected rating
//     const filteredProducts = productlistdata.filter(product => Math.round(product.rating) === roundedRating);
//     displayFilteredProducts(filteredProducts);
// }

// function displayFilteredProducts(products) {
//     const filteredProductsContainer = document.getElementById("filteredProductsContainer");
//     filteredProductsContainer.innerHTML = ''; // Clear previous content

//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];

//         filteredProductsContainer.innerHTML += `
//             <div class="js-portion">
//                 <div class="img-port">
//                     <img class="api-img" src="${product.thumbnail}" alt="">
//                 </div> 
//                 <div class="text-port">
//                     <h3 class="api-h3">${product.title}</h3>
//                     <p class="api-p1">${product.description}</p>
//                     <p class="api-p2">Price: $${product.price}</p>
//                     <p class="api-p3">Quantity: ${product.stock}</p>
//                     <p class="api-p4">Discount: ${product.discountPercentage}%</p>
//                 </div>
//             </div>
//         `;
//     }
// }




// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


fetch('https://dummyjson.com/products/4')
.then(res => res.json())
.then(console.log);





const x = prompt('enter')


fetch(`https://dummyjson.com/products/${x}`)
.then(res => res.json())
.then(console.log ,'asdasd');


// fetch('https://dummyjson.com/products')
// .then(res =>res.json())
// .then(console.log);



// fetch('https://dummyjson.com/products/search?q=x.value')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);