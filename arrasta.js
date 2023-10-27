const draggables = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('dropZone');
let currentlyDragged = null;

draggables.forEach(draggable => {
    draggable.draggable = true;

    draggable.addEventListener('dragstart', (e) => {
        currentlyDragged = e.target;
    });

    draggable.addEventListener('dragend', (e) => {
        e.preventDefault();
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    if (currentlyDragged) {
        // Clone o objeto arrastado e adicione o clone à área de destino
        const clone = currentlyDragged.cloneNode(true);

        // Adicione um botão de remoção
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.addEventListener('click', () => {
            dropZone.removeChild(clone);
        });
        
        clone.appendChild(removeButton);

        dropZone.appendChild(clone);

        currentlyDragged = null;
    }
});
