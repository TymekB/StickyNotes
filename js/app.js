var btnCreate = document.querySelector('#btn-create');

function createNote(posX, posY, color)
{
    var note = document.createElement("div");
    var bar = document.createElement("div");
    var body = document.createElement("textarea");

    note.className = "note";
    note.style.border = "1px solid " + color;
    note.style.transform = "translateX(" + posX +"px) translateY("+ posY +"px)";

    bar.className = "bar";
    bar.innerHTML = '<button id="btn-remove" class="icon-trash-empty"></button>';
    bar.style.backgroundColor = color;

    body.innerHTML = "write some text here!";

    note.appendChild(bar);
    note.appendChild(body);

    document.body.appendChild(note);

    var btnRemove = document.querySelector("#btn-remove");
    btnRemove.addEventListener("click", removeNote);
    note.addEventListener("mousedown", onDragStart);
}

function removeNote()
{
    var item = this.parentNode.parentNode;

    document.body.removeChild(item);
}

function getRandomColor()
{
    var colors = ['#ba4343', '#43ba7a', '#43baa4', '#439aba', '#437aba'];
    var random = Math.floor( Math.random() * colors.length );

    return colors[ random ];
}

function getRandomCoords()
{
    var posY =  Math.floor(Math.random() * 700);
    var posX =  Math.floor(Math.random() * 700);

    return {
        top: posY,
        left: posX
    }
}

btnCreate.addEventListener('click', function()
{
    var randomCoords = getRandomCoords();

    createNote(randomCoords.left, randomCoords.top,  getRandomColor());
});