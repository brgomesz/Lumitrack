function showLoading() {
    //criando uma constant div
    //createElement passa uma tag HTML para o formato JS
    //classList mostra a lista de classes CSS desse elemento
    //Aqui estou adicionando as CLASSES CSS (loading e centralizar)ao meu elemento JS
    //para poder trabalhar com elas no JS

    const div = document.createElement("div");
    div.classList.add("loading", "centralizar");

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);

    setTimeout(() => hideLoading(), 2000);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if(loadings.length) {
        loadings[0].remove();
    }

}