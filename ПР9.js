document.addEventListener("DOMContentLoaded", function() {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const resetBtn = document.getElementById("reset");
    const countSpan = document.getElementById("count");
  
    let count = 0;
  
    function updateCount() {
      countSpan.textContent = count;
  
      if (count < 0) {
        countSpan.style.color = "red";
      } else if (count > 0) {
        countSpan.style.color = "green";
      } else {
        countSpan.style.color = "#222";
      }
    }
  
    decreaseBtn.addEventListener("click", function() {
      count--;
      updateCount();
    });
  
    increaseBtn.addEventListener("click", function() {
      count++;
      updateCount();
    });
  
    resetBtn.addEventListener("click", function() {
      count = 0;
      updateCount();
    });
  
    // Початкове оновлення лічильника
    updateCount();
  });
  