const mainContainer = document.body;

const element = document.createElement("div");

element.setAttribute("class", "mainContainer");

mainContainer.appendChild(element);

// ------maincontainerProduct-------------------
const MainContainerOfProduct = document.createElement("div");


MainContainerOfProduct.setAttribute("class", "MainContainerOfProduct");

mainContainer.appendChild(MainContainerOfProduct);

// ------Data-entry-form--------------

const DataEntryform = document.createElement("form");
DataEntryform.setAttribute("class", "DataEntryform");
// DataEntryform.setAttribute("placeholder", "submit");
mainContainer.appendChild(DataEntryform);


// -------------------------------------------------------dataentryform1DataEntryforms-display---------------------------------------

// --------Mrp---------
let MRP = document.createElement("input");
MRP.setAttribute("type", "number");
MRP.setAttribute("placeholder", "MRP");
DataEntryform.appendChild(MRP);

// ------productPrice------------
let productPrice = document.createElement("input");
productPrice.setAttribute("type", "number");
productPrice.setAttribute("placeholder", "Product Price");
DataEntryform.appendChild(productPrice);

//------ProductName---------------
let productName = document.createElement("input");
productName.setAttribute("type", "text");
productName.setAttribute("placeholder", "Product Name");
DataEntryform.appendChild(productName);

// ----productQuantity------------------------
let productQuantity = document.createElement("input");
productQuantity.setAttribute("type", "number");
productQuantity.setAttribute("placeholder", "product Quantity");
DataEntryform.appendChild(productQuantity);

// ----submitDataEntry---------------------------
let submitDataEntry = document.createElement("input");
submitDataEntry.setAttribute("type", "submit");
submitDataEntry.setAttribute("placeholder", "submit");
DataEntryform.appendChild(submitDataEntry);

DataEntryform.addEventListener("submit", listener);

function listener(e) {
  e.preventDefault();
  e.stopPropagation();
  //------------submit---------------
  if (e.type === "submit") {
    if(e.target.classList[0] === "DataEntryform"){
    // -----------productContainer--------------------
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class", "productContainer");
    mainContainer.appendChild(productContainer);
    productContainer.addEventListener("mouseover",listener);

    // ------------productPrices-----------------------------
    const productPrices = document.createElement("div");
    productPrices.setAttribute("class", "productPrices");
    productContainer.appendChild(productPrices);

    // ---a.UUID -
    const UUID = document.createElement("p");
    UUID.setAttribute("class", "UUID");
    UUID.innerText = generateUUID();
    productPrices.appendChild(UUID);
   // ---b. MRP
    const Mrp = document.createElement("p");
    Mrp.setAttribute("class", "Mrp");
    Mrp.innerText = `MRP : ${MRP.value}`;
    productPrices.appendChild(Mrp);
   // ---c. Price
    const Price = document.createElement("p");
    Price.setAttribute("class", "Price");
    Price.innerText = `Price : ${productPrice.value}`;
    productPrices.appendChild(Price);
   // ---d. quantity
    const nameAndQuantity = document.createElement("p");
    nameAndQuantity.setAttribute("class", "nameAndQuantity");
    nameAndQuantity.innerText = `Quantity : ${productQuantity.value}`;
    productPrices.appendChild(nameAndQuantity);

    MRP.value = "";
    productPrice.value = "";
    productName.value = "";
    productQuantity.value = "";

  }
}

  // -------------MouseOver-------------------
      if(e.type === "mouseover"){
    const productcontainerv1 = e.currentTarget;
    const btnContainer1 = productcontainerv1.querySelector(".buttonContainer");

    if (!btnContainer1) {
      const btnContainer1 = document.createElement("div");
      btnContainer1.setAttribute("class", "buttonContainer");
      productcontainerv1.appendChild(btnContainer1);
      // ---edit
      const editbutton = document.createElement("button");
      editbutton.setAttribute("class", "editButton");
      editbutton.innerText = "Edit";
      btnContainer1.appendChild(editbutton);
      editbutton.addEventListener("click",listener);

      //---delete
      const deletebutton = document.createElement("button");
      deletebutton.setAttribute("class", "delteButton");
      deletebutton.innerText = "Delete";
      btnContainer1.appendChild(deletebutton);
    }
    }

  // --------------ON CLICK--------------------
if (e.type === "click") {
    if(e.target.classList[0] === "editButton"){
    const productContainerVar2 = e.currentTarget.parentElement.parentElement;

    const innerItems = productContainerVar2.querySelectorAll(".productPrices > *");

    // -----------PopEditContainer--connected to main---------
    const PopEditContainer = document.createElement("div");
    PopEditContainer.setAttribute("class", "container");
    mainContainer.appendChild(PopEditContainer);

    // ------------formPopcontainer--connected to popEdit-----------------------
    const formPopContainer = document.createElement("form");
    formPopContainer.setAttribute("class", "formPopContainer");
    PopEditContainer.appendChild(formPopContainer);


    // ------------1.CancelPopEdit-------------------
    const CancelPopEdit = document.createElement("button");
    CancelPopEdit.setAttribute("class", "cancelContainer");
    CancelPopEdit.innerText = "X";
    formPopContainer.appendChild(CancelPopEdit);
    CancelPopEdit.addEventListener("click",listener);

  
    // -----------2.mrpPopEdit----------------------------
    const mrpPopEdit = document.createElement("input");
    mrpPopEdit.setAttribute("type", "number");
    mrpPopEdit.setAttribute("placeholder", "MRP");
    mrpPopEdit.setAttribute("class", "mrpPopEdit");
    formPopContainer.appendChild(mrpPopEdit);
    // --------- 3.pricePopEdit --------------
    const pricePopEdit = document.createElement("input");
    pricePopEdit.setAttribute("type", "number");
    pricePopEdit.setAttribute("placeholder", "Product Price");
    pricePopEdit.setAttribute("class", "pricePopEdit");
    formPopContainer.appendChild(pricePopEdit);
    //-----------4.namePopEdit-----------------
    const namePopEdit = document.createElement("input");
    namePopEdit.setAttribute("type", "text");
    namePopEdit.setAttribute("placeholder", "Product Name");
    namePopEdit.setAttribute("class", "namePopEdit");
    formPopContainer.appendChild(namePopEdit);
    //----------5.quantityPopEdit--------------
    const quantityPopEdit = document.createElement("input");
    quantityPopEdit.setAttribute("type", "number");
    quantityPopEdit.setAttribute("placeholder", "Product Quantity");
    quantityPopEdit.setAttribute("class", "quantityPopEdit");
    formPopContainer.appendChild(quantityPopEdit);
    // ---------6.submitPopEdit--------------
    const submitPopEdit = document.createElement("input");
    submitPopEdit.setAttribute("type", "submit");
    submitPopEdit.setAttribute("class", "submitBtn");
    formPopContainer.appendChild(submitPopEdit);

    formPopContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      innerItems.forEach((item) => {
        if (item.classList.contains("Mrp")) {
          item.innerText = `MRP: ${mrpPopEdit.value}`;
        }
        if (item.classList.contains("Price")) {
          item.innerText = `₹ ${pricePopEdit.value} only`;
        }
        if (item.classList.contains("nameAndQuantity")) {
          item.innerText = `${namePopEdit.value}, ${quantityPopEdit.value} gm`;
        }
      })
      mainContainer.style.opacity = "1";
        PopEditContainer.remove();
    })
  }
  if(e.target.innerHTML === "X"){
    console.log(e.target.innerHTML);
  const  popUpContainer = document.querySelector(".container")
  popUpContainer.remove()

}
}
}
function generateUUID() {
  const time = new Date();
  const ms = time.getMilliseconds() * Math.random() * 100;
  let uuid = parseInt(ms);
  const min = 97;
  const max = 122;
  for (let i = 0; i < 10; i++) {
    const randomCharCode = Math.random() * (max - min) + min;
    uuid += String.fromCharCode(randomCharCode);
  }
  return uuid;
}
