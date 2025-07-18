document.getElementById("triggerCrash").onclick = () => {
  localStorage.setItem("forceCrash", "true");
};
