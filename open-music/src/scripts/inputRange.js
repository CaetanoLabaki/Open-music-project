export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#price-range");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--text-color-secundary-dark) ${runnableTrackProgress}%, var(--input-color-rage-white) ${runnableTrackProgress}%)`;
    });
  }