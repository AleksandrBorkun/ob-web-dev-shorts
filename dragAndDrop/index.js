const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((contrainer) => {
  contrainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");

    const dropTarget = getDropPosition(contrainer, e.clientY);
    if (dropTarget) {
      contrainer.insertBefore(dragging, dropTarget);
    } else {
      contrainer.appendChild(dragging);
    }
  });
});

function getDropPosition(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  for (const draggable of draggableElements) {
    const pos = draggable.getBoundingClientRect();
    if (y < pos.bottom) {
      return draggable;
    }
  }
  return null;
}
