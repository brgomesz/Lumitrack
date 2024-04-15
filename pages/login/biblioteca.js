function salvarLote() {

    showLoading();


    const lote = {
        tipoLote: form.tipoLote().checked ? "embalado" : "naoEmbalado", //embalado checked
        data: form.data().value,
        quantidade: form.quantidade().value,
        cidade: form.cidade().value,
        user: {
            uid: firebase.auth().currentUser.uid
        }

    }

  
}

const form = {
    tipoLote: () => document.getElementById('embalado'),
    data: () => document.getElementById('data'),
    cidade: () => document.getElementById('cidade'),
    quantidade: () => document.getElementById('quantidade'),
}

