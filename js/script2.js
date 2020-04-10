let count = 0;
document.querySelector(".ls").onclick = () => {
  count++;
  localStorage.setItem("b1", count);
  document.querySelector(".out-1").textContent = localStorage.getItem("b1");
};
