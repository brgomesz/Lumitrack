
encontrarLotes();

function encontrarLotes() {
    firebase.firestore()
        .collection('lotes')
        .orderBy('data', 'desc')
        .get()
        .then(snapshot => {
            const lotes = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            addLotesNaTela(lotes);
        })

    function novoLote() {
        window.location.href = "biblioteca.html";
    }
}

function addLotesNaTela(lotes) {
    //nome da função orderedList vem do termo "ol" 'ordenate list' presente lá no html
    const listaOrdenada = document.getElementById('lotes');

    lotes.forEach(lote => {
        const li = document.createElement('li');
        li.classList.add(lote.type);
        li.addEventListener('click', () => {
            window.location.href = "biblioteca.html?uid=" + lotes.uid;
        })

        const data = document.createElement('p');
        data.innerHTML = `Data: ${formatDate(lote.data)}`;
        li.appendChild(data);

        const cidade = document.createElement('p');
        //lote.cidade = lote(variavel que eu criei no forEach).cidade(variavel que eu criei no firebase)
        cidade.innerHTML = `Cidade:${lote.cidade}`;
        li.appendChild(cidade);

        const quantidade = document.createElement('p');
        quantidade.innerHTML = `Qtde: ${lote.quantidade}`;
        li.appendChild(quantidade);

        const type = document.createElement('p');
        type.innerHTML = `Estado do lote:  ${lote.tipoLote}`;
        li.appendChild(type);

        listaOrdenada.appendChild(li);
    });
}

function formatDate(data) {
    return new Date(data).toLocaleDateString('pt-br');
}


