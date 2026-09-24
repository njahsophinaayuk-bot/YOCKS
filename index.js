/* =====================================================
   PRODUCT DETAILS
===================================================== */

const products = {

    yozma: {
        name: "Yozma IN10",
         price:"£1500",
        speed: "40Mph",
        range: "23.4Ah",
        motor: "2600W",
        Battery: "23.4Ah",
        load: "120kg",
        images: [
            "images/yozma/IMG-20260727-WA0089.jpg",
            "images/yozma/IMG-20260727-WA0090.jpg",
            "images/yozma/IMG-20260727-WA0091.jpg",
            "images/yozma/IMG-20260727-WA0092.jpg",
            "images/yozma/IMG-20260727-WA0096.jpg",
            "images/yozma/IMG-20260727-WA0097.jpg",
            "images/yozma/IMG-20260727-WA0099.jpg",
            "images/yozma/IMG-20260727-WA0101.jpg",
            "images/yozma/IMG-20260727-WA0102.jpg"
        ]
    },

    vipcoo: {
        name: "Vipcoo H3",
         price:"£1500",
     
        speed: "40Mph",
        range: "48V 23Ah",
        motor: "3500W",
        Battery: "48v/23Ah",
        load: "120kg",
        weight: "65kg",
        images: [
            "images/vipcoo/IMG-20260730-WA0024.jpg",
            "images/vipcoo/IMG-20260730-WA0025.jpg",
            "images/vipcoo/IMG-20260730-WA0026.jpg",
            "images/vipcoo/IMG-20260730-WA0027.jpg",
            "images/vipcoo/IMG-20260730-WA0028.jpg",
            "images/vipcoo/IMG-20260730-WA0029.jpg",
            "images/vipcoo/IMG-20260730-WA0030.jpg"
        ]
    },

    revvi: {
        name: "Revvi 20",
         price:"£1000",
     
        speed: "40Mph",
        range: "9 miles",
        motor: "500W",
        Battery: "36v/7.5Ah",
        load: "50kg",
        chargingTime: "2hrs",
        images: [
            "images/Revvi 20/IMG-20260730-WA0034(1).jpg",
            "images/Revvi 20/IMG-20260730-WA0035(1).jpg",
            "images/Revvi 20/IMG-20260730-WA0036(1).jpg",
            "images/Revvi 20/IMG-20260730-WA0037(1).jpg"
        ]
    },

    voltz: {
        name: "Voltz",
         price:"£750",
  
        speed: "39Mph",
        range: "43 miles",
        motor: "3500W",
        images: [
            "images/volts kids/IMG-20260806-WA0042(1).jpg",
            "images/volts kids/IMG-20260806-WA0043(1).jpg",
            "images/volts kids/IMG-20260806-WA0044(1).jpg",
            "images/volts kids/IMG-20260806-WA0045(1).jpg",
            "images/volts kids/IMG-20260806-WA0046(1).jpg",
            "images/volts kids/IMG-20260806-WA0047(1).jpg",
            "images/volts kids/IMG-20260806-WA0048(1).jpg"
        ]
    },

    surron: {
        name: "Surron Light Bee X",
         price:"£1600",
  
        speed: "74Km/h",
        range: "75 Km",
        motor: "8 Kw",
        weight: "57kg",
        Battery: "60v/40Ah",
        images: [
            "images/surron light/IMG-20260727-WA0067.jpg",
            "images/surron light/IMG-20260727-WA0082.jpg",
            "images/surron light/IMG-20260727-WA0083.jpg",
            "images/surron light/IMG-20260727-WA0084.jpg",
            "images/surron light/IMG-20260727-WA0085.jpg",
            "images/surron light/IMG-20260727-WA0086.jpg"
        ]
    },

    engwe: {
        name: "Engwe EP-2 Pro",
         price:"£600",
        
        speed: "15Mph",
        range: "75 miles",
        motor: "750W",
        Battery: "48v/13Ah",
        load: "150kg",
        chargingTime: "6.5hrs",
        weight: "30kg",
        images: [
            "images/Engwe/IMG-20260730-WA0052.jpg",
            "images/Engwe/IMG-20260730-WA0053.jpg",
            "images/Engwe/IMG-20260730-WA0054.jpg",
            "images/Engwe/IMG-20260730-WA0055.jpg",
            "images/Engwe/IMG-20260730-WA0056.jpg",
            "images/Engwe/IMG-20260730-WA0057.jpg"
        ]
    },

    revx: {
        name: "Revvi 16 XL",
         price:"£700",
        
        speed: "20mph",
        range: "9 miles",
        motor: "500W",
        Battery: "36v/5.Ah",
        load: "50kg",
        chargingTime: "2hrs",
        weight: "20kg",
        images: [
            "images/revvi 16/IMG-20260730-WA0040.jpg",
            "images/revvi 16/IMG-20260730-WA0039.jpg",
            "images/revvi 16/IMG-20260730-WA0041.jpg",
            "images/revvi 16/IMG-20260730-WA0042.jpg",
            "images/revvi 16/IMG-20260730-WA0051.jpg"
        ]
    },

    sur: {
        name: "Sur Ron Ultra Bee",
         price:"£2500",
        
        speed: "59Mph",
        range: "80km",
        motor: "74V",
        Battery: "74v/60Ah",
        chargingTime: "2-4hrs",
        weight: "85kg",
        images: [
            "images/Sur-Ron/IMG-20260730-WA0044.jpg",
            "images/Sur-Ron/IMG-20260730-WA0045(1).jpg",
            "images/Sur-Ron/IMG-20260730-WA0045.jpg",
            "images/Sur-Ron/IMG-20260730-WA0046(1).jpg",
            "images/Sur-Ron/IMG-20260730-WA0047(1).jpg",
            "images/Sur-Ron/IMG-20260730-WA0047.jpg",
            "images/Sur-Ron/IMG-20260730-WA0048.jpg",
            "images/Sur-Ron/IMG-20260730-WA0049.jpg",
            "images/Sur-Ron/IMG-20260730-WA0050.jpg"
        ]
    },

    ravvi: {
        name: "Ravvi 24",
         price:"£1599",
        
        speed: "30Mph",
        range: "20 miles",
        motor: "74V",
        load: "75kg",
        chargingTime: "4-5hrs",
        weight: "30kg",
        images: [
            "images/Ravvi 24/IMG-20260813-WA0027.jpg",
            "images/Ravvi 24/IMG-20260813-WA0021.jpg",
            "images/Ravvi 24/IMG-20260813-WA0022.jpg",
            "images/Ravvi 24/IMG-20260813-WA0023.jpg",
            "images/Ravvi 24/IMG-20260813-WA0024.jpg",
            "images/Ravvi 24/IMG-20260813-WA0026.jpg",
            "images/Ravvi 24/IMG-20260813-WA0028.jpg"
        ]
    },

    g4max: {
        name: "Kukirin G4 Max",
         price:"£1500",
        
        speed: "43mph",
        range: "46 miles",
        motor: "2000W",
        maxload: "120kg",
        chargingTime: "10-12hrs",
        waterproof: "IP×4",
        weight: "37kg",
        images: [
            "images/kukirin G4 max/IMG-20260730-WA0023.jpg",
            "images/kukirin G4 max/IMG-20260730-WA0020.jpg",
            "images/kukirin G4 max/IMG-20260730-WA0021.jpg",
            "images/kukirin G4 max/IMG-20260730-WA0022.jpg"
        ]
    },




 m4pro: {
        name: "Kukirin M4 Pro",
         price:"£450",
        
        speed: "48km/h",
        range: "55 miles",
        motor: "500W",
        miles: "35miles",
        weight: "37kg",
        images: [
            "images/kukirin M4 Pro/IMG-20260913-WA0039.jpg",
            "images/kukirin M4 Pro/IMG-20260913-WA0040.jpg",
            "images/kukirin M4 Pro/IMG-20260913-WA0041.jpg",
            "images/kukirin M4 Pro/IMG-20260913-WA0042.jpg",
            "images/kukirin M4 Pro/IMG-20260913-WA0043.jpg"
        ]
    },





g2max: {
        name: "Kukirin G2 Max",
         price:"£700",
        
        speed: "34mph",
        range: "45 miles",
        motor: "1000W",
        maxload: "120kg",
        chargingTime: "11hrs",
        weight: "31kg",
        images: [
            "images/kukirin G2 Max/IMG-20260913-WA0057.jpg",
            "images/kukirin G2 Max/IMG-20260913-WA0058.jpg",
            "images/kukirin G2 Max/IMG-20260913-WA0059.jpg",
            "images/kukirin G2 Max/IMG-20260913-WA0062.jpg",
            "images/kukirin G2 Max/IMG-20260913-WA0061.jpg"
        ]
    },




    g2: {
        name: "Kukirin G2 ",
         price:" £800",
        
        speed: "38MPH",
        range: "44 miles",
        motor: "2000W",
        battery: "48v/15Ah",
        chargingTime: "8-9hrs",
        waterproof: "IP54",
        weight: "25kg",
        images: [
            "images/kukirin G2/IMG-20260730-WA0009.jpg",
            "images/kukirin G2/IMG-20260730-WA0004.jpg",
            "images/kukirin G2/IMG-20260730-WA0005.jpg",
            "images/kukirin G2/IMG-20260730-WA0007.jpg",
            "images/kukirin G2/IMG-20260730-WA0008.jpg"
        ]
    },

    g2pro: {
        name: "Kukirin G2 Pro",
         price:" £599",
        
        speed: "30mph",
        range: "30 miles",
        motor: "800W",
        Battery: "48v15Ah",
        chargingTime: "8-9hrs",
        waterproof: "IP45",
        weight: "25kg",
        images: [
            "images/kukirin G2 Master/IMG-20260731-WA0015.jpg",
            "images/kukirin G2 Master/IMG-20260731-WA0016.jpg",
            "images/kukirin G2 Master/IMG-20260731-WA0017.jpg",
            "images/kukirin G2 Master/IMG-20260731-WA0018.jpg",
            "images/kukirin G2 Master/IMG-20260731-WA0019.jpg"

        ]
    },



 g3pro: {
        name: "Kukirin G3 Pro",
         price:"£1000",
        
        speed: "40mph",
        range: "80km",
        motor: "600W",
        Battery: "52V",
        load: "120kg",
        chargingTime: "4-11hrs",
        waterproof: "IP54",
        weight: "39.6kg",
        images: [
            "images/kukirin G3 Pro/IMG-20260813-WA0012.jpg",
            "images/kukirin G3 Pro/IMG-20260813-WA0013.jpg",
            "images/kukirin G3 Pro/IMG-20260813-WA0014.jpg",
            "images/kukirin G3 Pro/IMG-20260813-WA0017.jpg",
            "images/kukirin G3 Pro/IMG-20260813-WA0019.jpg",
            "images/kukirin G3 Pro/IMG-20260813-WA0020.jpg"
        ]
    },



shb: {
        name: "Surron Hyber Bee",
         price:"£2000",
        
        speed: "40mph",
        range: "35miles",
        motor: "8000W",
        Battery: "58v/22Ah",
        load: "55kg",
        chargingTime: "2hrs",
        waterproof: "IP67",
        weight: "39kg",
        images: [
            "images/Surron Hyber bee/IMG-20260917-WA0171.jpg",
            "images/Surron Hyber bee/IMG-20260917-WA0172.jpg",
            "images/Surron Hyber bee/IMG-20260917-WA0179.jpg",
            "images/Surron Hyber bee/IMG-20260917-WA0180.jpg",
            
        ]
    },


    g2master: {
        name: "Kukirin G2 Master",
         price:" £500",

         speed: "38MPH",
        range: "44 miles",
        motor: "2000W",
        battery: "48v/15Ah",
        chargingTime: "8-9hrs",
        waterproof: "IP54",
        weight: "25kg",
        images: [
            "images/kukirin G2/IMG-20260730-WA0009.jpg",
            "images/kukirin G2/IMG-20260730-WA0004.jpg",
            "images/kukirin G2/IMG-20260730-WA0005.jpg",
            "images/kukirin G2/IMG-20260730-WA0007.jpg",
            "images/kukirin G2/IMG-20260730-WA0008.jpg"
        ]
    },


 g4: {
        name: "Kukirin G4",
         price:"£899",
        
        speed: "43mph",
        range: "46 miles",
        motor: "2000W",
        Battery: "60v20Ah",
        chargingTime: "10-12hrs",
        waterproof: "IP×5",
        weight: "37kg",
        images: [
            "images/kukirin G4/IMG-20260913-WA0047.jpg",
            "images/kukirin G4/IMG-20260913-WA0050.jpg",
            "images/kukirin G4/IMG-20260913-WA0052.jpg",
            "images/kukirin G4/IMG-20260913-WA0054.jpg",
            "images/kukirin G4/WhatsApp Image 2026-09-13 at 4.45.33 AM.jpeg"
        ]
    },


    s1max: {
        name: "Kukirin S1 Max",
         price:"£300",
        
        speed: "15.5mph",
        range: "10.5Ah",
        motor: "350W",
        Battery: "36v 350w",
        load: "120kg",
        chargingTime: "4-5hrs",
        waterproof: "IP65",
        weight: "12kg",
        images: [
            "images/kukirin S1 max/IMG-20260730-WA0017.jpg",
            "images/kukirin S1 max/IMG-20260730-WA0018.jpg",
            "images/kukirin S1 max/IMG-20260730-WA0016.jpg",
            "images/kukirin S1 max/IMG-20260730-WA0019.jpg"
        ]
    },


 dirt: {
        name: "X1 Spark Electric Dirt Bike",
         price:"£650",
        
        speed: "50mph",
        range: "60miles",
        motor: "4500W",
        Battery: "60v 28.8Ah",
        load: "150kg",
        chargingTime: "4-6hrs",
        weight: "53kg",
        images: [
            "images/X1 Spark Electric Dirt Bike/IMG-20260917-WA0175.jpg",
            "images/X1 Spark Electric Dirt Bike/IMG-20260917-WA0176.jpg",
            "images/X1 Spark Electric Dirt Bike/IMG-20260917-WA0177.jpg",
            "images/X1 Spark Electric Dirt Bike/IMG-20260917-WA0178.jpg"
        ]
    },



    aovo: {
        name: "Aovo Pro Mini80",
         price:"£200",
        
        speed: "N/A",
        range: "4.5miles",
        motor: "N/A",
        Battery: "42v",
        chargingTime: "4-5hrs",
        waterproof: "IP54",
        images: [
            "images/Aovo Pro Mini80/IMG-20260813-WA0050.jpg",
            "images/Aovo Pro Mini80/IMG-20260813-WA0051.jpg",
            "images/Aovo Pro Mini80/IMG-20260813-WA0052.jpg"
        ]
    },

    aovoes: {
        name: "Aovo Pro ES Max",
         price:"£450",
        
        speed: "22mph",
        range: "14.5Ah",
        motor: "500W",
        Battery: "42v 14.5Ah",
        load: "120kg",
        chargingTime: "4-5hrs",
        waterproof: "IP54",
        images: [
            "images/Aovo Pro ES Max 2026/IMG-20260813-WA0057.jpg",
            "images/Aovo Pro ES Max 2026/IMG-20260813-WA0058.jpg",
            "images/Aovo Pro ES Max 2026/IMG-20260814-WA0048.jpg",
            "images/Aovo Pro ES Max 2026/IMG-20260814-WA0049.jpg"
        ]
    }
};

{}
/* =====================================================
   VARIABLES
===================================================== */

let currentDetailsImage = 0;
let currentProductImages = [];
let currentProductName = "";

let cart = [];

let selectedPayment = "";


/* =====================================================
   OPEN VIEW DETAILS
===================================================== */

function openDetails(productName) {

    const product = products[productName];

    if (!product) {
        console.log("Product not found:", productName);
        return;
    }

    currentProductName = productName;
    currentProductImages = product.images;
    currentDetailsImage = 0;

    const popup =
        document.getElementById("details-popup");

    if (!popup) {
        console.log("details-popup was not found");
        return;
    }

    popup.style.display = "block";


    const title =
        document.querySelector(".details-info h1");

    if (title) {
        title.textContent = product.name;
    }
    const price =
    popup.querySelector(".details-price");
if (price) {
    price.textContent = product.price;
}



   

    /* =================================================
       PRODUCT SPECIFICATIONS
    ================================================= */

    const specsBox =
        document.getElementById("details-specs");

    if (specsBox) {

        specsBox.innerHTML = "";

        const excluded = [
            "price",
            "name",
            "description",
            "images"
        ];

        Object.keys(product).forEach(function(key) {

            if (excluded.includes(key)) {
                return;
            }

            const value = product[key];

            if (value === undefined || value === "") {
                return;
            }

            const spec =
                document.createElement("div");

            const specTitle =
                document.createElement("h3");

            const text =
                document.createElement("p");

            const formattedName =
                key.charAt(0).toUpperCase() +
                key.slice(1);

            specTitle.textContent = formattedName;
            text.textContent = value;

            spec.appendChild(specTitle);
            spec.appendChild(text);

            specsBox.appendChild(spec);

        });

    }


    /* =================================================
       CREATE THUMBNAILS
    ================================================= */

    const thumbnails =
        document.querySelector(".details-thumbnails");

    if (thumbnails) {

        thumbnails.innerHTML = "";

        product.images.forEach(function(image) {

            const thumbnail =
                document.createElement("img");

            thumbnail.src = image;

            thumbnail.onclick = function() {

                changeDetailsImage(image);

            };

            thumbnails.appendChild(thumbnail);

        });

    }


    updateDetailsImage();

}

/* =====================================================
   UPDATE MAIN IMAGE
===================================================== */

function updateDetailsImage() {

    if (currentProductImages.length === 0) {
        return;
    }

    const mainImage =
        document.getElementById("details-main-image");

    mainImage.src =
        currentProductImages[currentDetailsImage];


    /* -----------------------------------------
       UPDATE BORDERS BASED ON CART
    ----------------------------------------- */

    const thumbnails =
        document.querySelectorAll(
            ".details-thumbnails img"
        );

    thumbnails.forEach(function(thumbnail, index) {

        const image =
            currentProductImages[index];

        const selected =
            cart.some(function(item) {

                return (
                    item.productKey === currentProductName &&
                    item.image === image
                );

            });


        if (selected) {

            thumbnail.classList.add(
                "selected-thumbnail"
            );

        } else {

            thumbnail.classList.remove(
                "selected-thumbnail"
            );

        }

    });

}



/* =====================================================
   NEXT PICTURE
===================================================== */

function nextDetailsImage() {

    if (currentProductImages.length === 0) {
        return;
    }

    currentDetailsImage++;

    if (
        currentDetailsImage >=
        currentProductImages.length
    ) {

        currentDetailsImage = 0;

    }

    updateDetailsImage();

}


/* =====================================================
   PREVIOUS PICTURE
===================================================== */

function previousDetailsImage() {

    if (currentProductImages.length === 0) {
        return;
    }

    currentDetailsImage--;

    if (currentDetailsImage < 0) {

        currentDetailsImage =
            currentProductImages.length - 1;

    }

    updateDetailsImage();

}


/* =====================================================
   SELECT / VIEW PICTURE
===================================================== */

function changeDetailsImage(image) {

    const index =
        currentProductImages.indexOf(image);

    if (index === -1) {
        return;
    }

    currentDetailsImage = index;

    updateDetailsImage();

}


/* =====================================================
   CLOSE DETAILS
===================================================== */

function closeDetails() {

    const popup =
        document.getElementById("details-popup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const popup =
            document.getElementById("details-popup");

        if (popup) {

            popup.addEventListener(
                "click",
                function(event) {

                    if (event.target === popup) {

                        closeDetails();

                    }

                }
            );

        }

    }
);


/* =====================================================
   ORDER NOW
===================================================== */

function goToOrder() {

    const orderBox =
        document.querySelector(".contain");

    if (!orderBox) {

        console.log(
            "Order box .contain was not found"
        );
        

        return;
    }
   

    orderBox.style.display = "block";

    orderBox.style.zIndex = "9999";

}


/* =====================================================
   CLOSE ORDER BOX
===================================================== */

function closeOrder() {

    const orderBox =
        document.querySelector(".contain");

    if (orderBox) {

        orderBox.style.display = "none";

    }

}

/* =====================================================
   PAYMENT
===================================================== */

function choosePayment(button, payment) {

    /* -----------------------------------------
       SAVE THE PAYMENT THAT WAS SELECTED
    ----------------------------------------- */

    selectedPayment = payment;


    /* -----------------------------------------
       REMOVE SELECTED FROM ALL PAYMENT BUTTONS
    ----------------------------------------- */

    document
        .querySelectorAll(
            ".pay-btn, .pay-pal, .pay-bank, .pay-bt, .pay-cash"
        )
        .forEach(function(btn) {

            btn.classList.remove("selected");

        });


    /* -----------------------------------------
       KEEP THE BORDER ON THE BUTTON SELECTED
    ----------------------------------------- */

    button.classList.add("selected");

}
/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productName) {

    const product = products[productName];

    if (!product) {
        alert("Product not found: " + productName);
        return;
    }


    /* -----------------------------------------
       GET THE CURRENT BIG PICTURE
    ----------------------------------------- */

    let selectedImage =
        product.images[0];


    if (
        currentProductName === productName &&
        currentProductImages.length > 0 &&
        currentProductImages[currentDetailsImage]
    ) {

        selectedImage =
            currentProductImages[currentDetailsImage];

    }


    /* -----------------------------------------
       CHECK IF THIS EXACT PICTURE IS ALREADY
       IN THE CART
    ----------------------------------------- */

    const existingItem =
        cart.find(function(item) {

            return (
                item.productKey === productName &&
                item.image === selectedImage
            );

        });


    /* -----------------------------------------
       ADD OR REMOVE THAT SPECIFIC PICTURE
    ----------------------------------------- */

    if (existingItem) {

        const index =
            cart.indexOf(existingItem);

        cart.splice(index, 1);

    } else {

        cart.push({

            name: product.name,

            productKey: productName,

            image: selectedImage,

            price:product.price,

            quantity: 1

        });

    }


    /* -----------------------------------------
       UPDATE BUTTON NUMBER
    ----------------------------------------- */

    updateCartButtons();


    /* -----------------------------------------
       UPDATE CART
    ----------------------------------------- */

    showCart();


    /* -----------------------------------------
       UPDATE THUMBNAIL BORDERS
       
       IMPORTANT:
       This keeps every previously added picture
       highlighted.
    ----------------------------------------- */

    updateDetailsImage();


    console.log("CART:", cart);

}









/* =====================================================
   UPDATE ADD TO CART BUTTONS
===================================================== */

function updateCartButtons() {

    const buttons =
        document.querySelectorAll(".add-cart,  .add-cart-btn");

    buttons.forEach(function(button) {

        const onclickText =
            button.getAttribute("onclick");

        if (!onclickText) {
            return;
        }

        const match =
            onclickText.match(
                /addToCart\(['"]([^'"]+)['"]\)/
            );

        if (!match) {
            return;
        }

        const productKey = match[1];

        let quantity = 0;

        cart.forEach(function(item) {

            if (item.productKey === productKey) {

                quantity += item.quantity;

            }

        });

        /* -----------------------------------------
           ONLY CHANGE THE BUTTON TEXT
        ----------------------------------------- */

        if (quantity > 0) {

            button.innerHTML =
                "🛒 ADD TO CART (" + quantity + ")";

        } else {

            button.innerHTML =
                "🛒 ADD TO CART";

        }

    });

}


/* =====================================================
   ADD CURRENT PRODUCT FROM VIEW DETAILS
===================================================== */

function addCurrentProductToCart() {

    if (!currentProductName) {

        alert("Please select a product first.");

        return;

    }

    addToCart(currentProductName);

}


/* =====================================================
   SHOW CART
===================================================== */

function showCart() {

    const cartList =
        document.getElementById("cart-list");

    if (!cartList) {
        return;
    }

    cartList.innerHTML = "";

    cart.forEach(function(item, index) {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        /* -----------------------------------------
           CART IMAGE
        ----------------------------------------- */

        const image =
            document.createElement("img");

        image.src = item.image;

        image.alt = item.name;


        /* -----------------------------------------
           CART PRODUCT NAME
        ----------------------------------------- */

        const name =
            document.createElement("span");

        name.textContent =
            item.name +
            " × " +
            item.quantity;


        cartItem.appendChild(image);

        cartItem.appendChild(name);

        cartList.appendChild(cartItem);

    });

}


/* =====================================================
   SEND ORDER THROUGH WHATSAPP
===================================================== */

function sendOrderToWhatsApp() {

    /* -----------------------------------------
       CHECK CART
    ----------------------------------------- */

    if (cart.length === 0) {

        alert(
            "Please add a bike to your cart first."
        );

        return;

    }


    /* =========================================
       CUSTOMER INFORMATION
    ========================================= */

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("Number").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const country =
        document.getElementById("country").value.trim();


    /* =========================================
       CHECK REQUIRED INFORMATION
    ========================================= */

    if (
        !name ||
        !phone ||
        !email ||
        !address ||
        !city ||
        !message ||
        !country
    ) {

        alert(
            "Please fill in all your information before sending the order."
        );

        return;

    }


    /* =========================================
       CHECK PAYMENT
    ========================================= */

    if (!selectedPayment) {

        alert(
            "Please choose a payment method."
        );

        return;

    }


    /* =========================================
       CREATE ORDER MESSAGE
    ========================================= */

    let orderMessage =
        "🛒 NEW YOCKS ORDER\n\n";


    /* =========================================
       CUSTOMER INFORMATION
    ========================================= */

    orderMessage +=
        "👤 CUSTOMER INFORMATION\n";

    orderMessage +=
        "Name: " + name + "\n";

    orderMessage +=
        "Phone: " + phone + "\n";

    orderMessage +=
        "Email: " + email + "\n";

    orderMessage +=
        "Address: " + address + "\n";

    orderMessage +=
        "City: " + city + "\n";

    orderMessage +=
        "Country: " + country + "\n\n";


    /* =========================================
       PRODUCTS IN CART
    ========================================= */

    orderMessage +=
        "🛴 ORDER DETAILS\n\n";


    cart.forEach(function(item, index) {

    orderMessage +=
        (index + 1) +
        ". " +
        item.name +
        " × " +
        item.quantity +
        "\n";

    orderMessage +=
        "Price: " +
        item.price +
        "\n";

    orderMessage +=
        "Selected picture: " +
        item.image +
        "\n\n";

});


    /* =========================================
       PAYMENT METHOD
    ========================================= */

    orderMessage +=
        "💳 PAYMENT METHOD\n";

    orderMessage +=
        selectedPayment +
        "\n\n";


    /* =========================================
       CUSTOMER MESSAGE
    ========================================= */

    orderMessage +=
        "💬 MESSAGE\n";

    orderMessage +=
        message +
        "\n\n";


    /* =========================================
       FINAL MESSAGE
    ========================================= */

    orderMessage +=
        "Please confirm my order. Thank you!";


    /* =========================================
   WHATSAPP
========================================= */

const whatsappNumber = "16465991035";

const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(orderMessage);


/* =========================================
   OPEN WHATSAPP WITH THE COMPLETE MESSAGE
========================================= */

window.location.href = whatsappURL;

}





/* =====================================================
   INITIAL CART BUTTON UPDATE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {
         

        updateCartButtons();
        

    }
);

function sendOrderByEmail() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("Number").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const country = document.getElementById("country").value.trim();
    const city = document.getElementById("city").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !address || !zip || !country || !city) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }

    let orderMessage = "YOCKS ORDER\n\n";

    orderMessage += "Customer: " + name + "\n";
    orderMessage += "Phone: " + phone + "\n";
    orderMessage += "Email: " + email + "\n";
    orderMessage += "Address: " + address + "\n";
    orderMessage += "ZIP: " + zip + "\n";
    orderMessage += "City: " + city + "\n";
    orderMessage += "Country: " + country + "\n\n";

    orderMessage += "ORDER:\n";

    cart.forEach(function(item) {
        orderMessage += "Product: " + item.name + "\n";
        orderMessage += "Price: " + item.price + "\n";
        orderMessage += "Image: " + item.image + "\n\n";
    });

    orderMessage += "Payment: " + selectedPayment + "\n";

    if (message) {
        orderMessage += "Message: " + message + "\n";
    }

    const emailURL =
        "mailto:bankdelivery04@gmail.com" +
        "?subject=" + encodeURIComponent("YOCKS Order") +
        "&body=" + encodeURIComponent(orderMessage);

    window.location.href = emailURL;
}