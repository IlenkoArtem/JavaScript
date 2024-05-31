document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const addBtn = document.getElementById("add-btn");
    const productNameInput = document.getElementById("product-name");
    const modal = document.getElementById("modal");
  
    // Функція для створення нового елементу списку
    function createProductElement(value) {
      const productElement = document.createElement("article");
      productElement.innerHTML = `
        <p class='title'>${value}</p>
        <div class='btn-container'>
          <button type="button" class='edit-btn'>
            <i class='fas fa-edit'></i>
          </button>
          <button type="button" class='delete-btn'>
            <i class='fas fa-trash'></i>
          </button>
        </div>
      `;
      return productElement;
    }
  
    // Функція для додавання нового продукту
    function addProduct() {
      const productName = productNameInput.value.trim();
      if (productName === "") return; // Перевірка на порожність
  
      const productElement = createProductElement(productName);
      productList.appendChild(productElement);
  
      // Очищення поля вводу
      productNameInput.value = "";
  
      showModalMessage("Product added successfully!");
    }
  
    // Функція для видалення продукту
    function deleteProduct(event) {
      const btn = event.target.closest(".delete-btn");
      if (!btn) return;
  
      const productElement = btn.parentElement.parentElement;
      productList.removeChild(productElement);
  
      showModalMessage("Product deleted successfully!");
    }
  
    // Функція для редагування продукту
    function editProduct(event) {
      const btn = event.target.closest(".edit-btn");
      if (!btn) return;
  
      const productElement = btn.parentElement.parentElement;
      const productName = productElement.querySelector(".title").textContent;
      productNameInput.value = productName;
  
      // При редагуванні змінюємо текст кнопки "Додати" на "Редагувати"
      addBtn.textContent = "Edit";
  
      // При кліку на кнопку "Редагувати" видаляємо поточний елемент списку
      addBtn.removeEventListener("click", addProduct);
      addBtn.addEventListener("click", function() {
        productList.removeChild(productElement);
        addProduct();
        addBtn.textContent = "Add";
        // Очищення поля вводу після редагування
        productNameInput.value = "";
      });
    }
  
    // Функція для показу модального повідомлення
    function showModalMessage(message) {
      modal.textContent = message;
      modal.style.display = "block";
      setTimeout(function() {
        modal.style.display = "none";
      }, 2000);
    }
  
    // Додавання обробників подій на кнопки
    addBtn.addEventListener("click", addProduct);
    productList.addEventListener("click", deleteProduct);
    productList.addEventListener("click", editProduct);
  });
  