function registrar() {
    window.location.href = "../login/home.html"
}

function onChangeEmail() {
    const email = form.email().value;
    form.erroEmailObrigatorio().style.display = email ? "none" : "block";

    form.erroEmailInvalido().style.display = validacaoEmail(email) ? "none" : "block";
}

const form = {
    confirmarSenha: () => document.getElementById('confirmarSenha'),
    email: () => document.getElementById('email'),
    erroEmailObrigatorio:() => document.getElementById('erro-email-obrigatorio'),
    erroEmailInvalido:() => document.getElementById('erro-email-invalido'),
    senha: () => document.getElementById('senha')
}



function validacaoEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}





