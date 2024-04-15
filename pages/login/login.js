function validaCampo() {
    alternarEstadoBotoes();
    alternarEstadoErro();
}

function validarEmail() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validacaoEmail(email);
}

function validacaoEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validarSenha() {
    const senha = form.senha().value;
    if (!senha) {
        return false;
    }
    return true;
}


function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.senha().value
    ).then(response => {
        hideLoading();
        window.location.href = "../login/home.html"
    }).catch(error => {
        hideLoading();
        alert(mensagemDeErro(error));
    });
}



const form = {
    senha: () => document.getElementById("senhaInput"),
    email: () => document.getElementById("emailInput"),
    botaoLogin: () => document.getElementById("botaoLogin"),
    botaoRecSenha: () => document.getElementById("recuperarSenha")
}

function alternarEstadoErro() {
    const email = document.getElementById('emailInput').value;
    if (!email) {
        document.getElementById('erro-email-obrigatorio').style.display = "block";
    } else {
        document.getElementById('erro-email-obrigatorio').style.display = "none";
    }

    if (validacaoEmail(email)) {
        document.getElementById('erro-email-invalido').style.display = "none";
    } else {
        document.getElementById('erro-email-invalido').style.display = "block";
    }

}

function alternarEstadoBotoes() {
    const emailValido = validarEmail();
    form.botaoRecSenha().disabled = !emailValido;

    const senhaValida = validarSenha();
    form.botaoLogin().disabled = !emailValido || !senhaValida;


}