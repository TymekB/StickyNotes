var draggedElement = null;
var diffX;
var diffY;

function onDragStart(ev)
{
    if(ev.target.className.indexOf('bar') === -1) return;

    draggedElement = this;
    var boundingClientRect = draggedElement.getBoundingClientRect();

    diffX = boundingClientRect.left - ev.clientX;
    diffY = boundingClientRect.top - ev.clientY;
}

function Drag(ev)
{
    if(!draggedElement) return;

    var posX = ev.clientX + diffX;
    var posY = ev.clientY + diffY;

    draggedElement.style.transform = "translateX(" + posX +"px) translateY("+ posY +"px)";
}

function onDragStop()
{
    draggedElement = null;
}

document.addEventListener("mousemove", Drag);
document.addEventListener("mouseup", onDragStop);
