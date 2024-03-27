const mainContainer = appendchild("div", "class" , "mainContainer",document.body);
const DataEntryform = appendchild("form","class","DataEntryform", mainContainer,null,null,"submit");

// ------------DataEntryform-Elements-----------------------------
let MRP = appendchild("input","type","number",DataEntryform,null,null,null,"MRP");
let productPrice = appendchild("input", "type","number", DataEntryform, null, null, null, "Product Price");
let productName = appendchild("input", "type", "text", DataEntryform, null, null, null, "Product Name");
let productQuantity = appendchild("input", "type", "number", DataEntryform, null, null, null, "Product Quantity");
let mass = appendchild("select",null,null,DataEntryform,null,null,null,"mass Value");
let submitDataEntry = appendchild("input", "type", "submit", DataEntryform, null, null,null,"submit");
const maincontainerOfProduct = appendchild("div", "class", "MainContainerOfProduct",mainContainer);


const options = ["kgs", "litres", "gms", "units"];
for(const index of options){
  let Productoptions = document.createElement("option");
  Productoptions.setAttribute("value", index);
  Productoptions.text = index;
  mass.appendChild(Productoptions);
}
// -----appendchild function

function appendchild(tag, attType, attName, parent, text, targetTag, event, placeholder, extraEvent) {
    const element = document.createElement(tag);
  
    if (!!attType && !!attName) {
      element.setAttribute(attType, attName);
    }
    if (!!placeholder) {
      element.setAttribute("placeholder", placeholder);
    }
    if (!!parent) {
      parent.append(element);
    }
    if (!!text) {
      element.innerText = text;
    }
    if (!!event || !!extraEvent) {
      (element || targetTag).addEventListener((event || extraEvent), listener);
  
      function listener(e) {
        e.preventDefault();
        e.stopPropagation();
  
        if (e.type === "submit") {
          if (e.target.classList[0] === "DataEntryform") {
            const productContainer = appendchild("div", "class", "productContainer", maincontainerOfProduct, null, null, "mouseover");
            const productPrices = appendchild("div", "class", "productPrices", productContainer);
            const UUID   = appendchild("p", "class", "UUID", productPrices, generateUUID())
            const Mrp   = appendchild("p", "class", "productMrp", productPrices, `MRP: ${MRP.value}`);
            const Price = appendchild("h1", "class", "productPrice", productPrices, `₹ ${productPrice.value} only`);
            const nameAndQuantity = appendchild("p", "class", "nameAndQuantity", productPrices, `${productName.value}, ${productQuantity.value} ${mass.value}`);
            MRP.value = ""
            productPrice.value = ""
            productName.value = ""
            productQuantity.value = ""
          }
        }
  
        if (e.type === "mouseover") {
  
          const productContainerVar1 = e.currentTarget
          const buttonContainer = productContainerVar1.querySelector(".buttonContainer");
  
          if (!buttonContainer) {
            const buttonContainer = appendchild("div", "class", "buttonContainer", productContainerVar1);
            const editButton = appendchild("button", "class", "editButton", buttonContainer, "Edit", null, "click");
            const deleteBtn = appendchild("button", "class", "deleteButton", buttonContainer, "Delete", null, "click");
          }
        }
        if (e.type === "click") {
          if (e.target.classList[0] === "editButton") {
            const productContainerVar2 = e.currentTarget.parentElement.parentElement
            const innerItems = productContainerVar2.querySelectorAll(".productPrices > *");
            const popEditContainer = appendchild("div", "class", "container", mainContainer)
            const formPopContainer = appendchild("form", "class", "formPopContainer", popEditContainer, null, null, "submit")
            const cancelPopEdit = appendchild("button", "class", "cancelContainer", formPopContainer, "X",null,"click")
            const mrpPopEdit = appendchild("input", "type", "number", formPopContainer, null, null, null, "MRP")
            mrpPopEdit.setAttribute("class", "mrpPopEdit")
            const pricePopEdit = appendchild("input", "type", "number", formPopContainer, null, null, null, "Product Price")
            pricePopEdit.setAttribute("class", "pricePopEdit")
            const namePopEdit = appendchild("input", "type", "text", formPopContainer, null, null, null, "Product Name")
            namePopEdit.setAttribute("class", "namePopEdit")
            const quantityPopEdit = appendchild("input", "type", "number", formPopContainer, null, null, null, "Product Quantity")
            quantityPopEdit.setAttribute("class", "quantityPopEdit")
            const massPopEdit = appendchild("select", null,null,formPopContainer);
            massPopEdit.setAttribute("class", "massPopEdit");
          //   optionsEdit
            const optionsPopEdit = ["kgs", "litres", "gms", "units"];
            for (const index of optionsPopEdit) {
              let Productoptions = document.createElement("option");
              Productoptions.setAttribute("value", index);
              Productoptions.text = index;
              massPopEdit.appendChild(Productoptions);
            }
            const submitPopEdit = appendchild("input", "type", "submit", formPopContainer)
            submitPopEdit.setAttribute("class", "submitBtn")
            
      
        //-----formpopcontainer
            formPopContainer.addEventListener("submit", (e) => {
              e.preventDefault()
              innerItems.forEach(item => {
                if (item.classList.contains("productMrp")) {
                  item.innerText = `MRP: ${mrpPopEdit.value}`;
                }
                if (item.classList.contains("")) {
                  item.innerText = `₹ ${pricePopEdit.value} only`;
                }
                if (item.classList.contains("nameAndQuantity")) {
                  item.innerText = `${namePopEdit.value}, ${quantityPopEdit.value}${massPopEdit.value}`;
                }
              });
              mainContainer.style.opacity = "1"
              popEditContainer.remove()
            })
          }
          if(e.target.classList[0] === "cancelContainer"){
            const popUpContainer = document.querySelector(".container")
            popUpContainer.remove()
          }
          console.log(e.target.classList[0]);
          if (e.target.classList[0] === "deleteButton") {
            const productContainerVar = e.currentTarget.parentElement.parentElement;
            productContainerVar.remove();
          }
        }
      }
    }
    return element;
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
  

































































































































































































































































































