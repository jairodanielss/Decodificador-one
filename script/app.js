
function nao_mostrar_saida() {
    document.getElementById("texto_saida").style.display = 'none';
    document.getElementById("botao_copiar").style.display = 'none';
}

function mostrar_saida() {
    document.getElementById("texto_saida").style.display = 'block';
    document.getElementById("botao_copiar").style.display = 'block';
}

function mostrar_msg_obs() {
    document.getElementById("msg_img").style.display = 'block';
    document.getElementById("msg_obs").style.display = 'block';
    document.getElementById("msg_info").style.display = 'block';
}

function nao_mostrar_msg_obs() {
    document.getElementById("msg_img").style.display = 'none';
    document.getElementById("msg_obs").style.display = 'none';
    document.getElementById("msg_info").style.display = 'none';
}


function criptografar() {
    let cript = document.querySelector('#texto_usuario').value
        .replaceAll("e", "enter")
        .replaceAll("i", "ims")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    if (cript.trim() === "") {
        nao_mostrar_saida();
    } else {
        document.querySelector('#texto_saida').innerHTML = cript;
        mostrar_saida();
        nao_mostrar_msg_obs();
    }
}

function descriptografar() {
    let descript = document.querySelector('#texto_usuario').value
        .replaceAll("enter", "e")
        .replaceAll("ims", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    if (descript.trim() === "") { 
        nao_mostrar_saida();
    } else {
        document.querySelector('#texto_saida').innerHTML = descript;
        mostrar_saida();
        nao_mostrar_msg_obs();
    }
}

function bt_copiar() {
    let btcopiar = document.getElementById('texto_saida');
    btcopiar.select();
    navigator.clipboard.writeText(btcopiar.value);
    limpar_com_copiar();
    nao_mostrar_saida();
    mostrar_msg_obs();
}

function limpar_com_copiar() {
    let limpar = document.getElementById('texto_usuario');
    limpar.value = "";
}

nao_mostrar_saida()

