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
    bar.style.backgroundColor = color;

    body.innerHTML = "write some text here!";

    note.appendChild(bar);
    note.appendChild(body);

    document.body.appendChild(note);
}

btnCreate.addEventListener('click', function()
{
    createNote(50, 50, '#ba4343');
});