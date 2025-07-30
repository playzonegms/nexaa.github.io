function toggleCommand(box) {
  const body = box.querySelector(".command-body");
  const arrow = box.querySelector(".arrow");
  const isVisible = body.classList.contains("visible");
  if (isVisible) {
    body.classList.remove("visible");
    arrow.classList.remove("up");
    arrow.textContent = "⌄";
  } else {
    body.classList.add("visible");
    arrow.classList.add("up");
    arrow.textContent = "⌃";
  }
}
