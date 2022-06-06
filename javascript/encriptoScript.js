const inputText = document.querySelector("#textarea");
const inputmensagem = document.querySelector("#showTexto");

let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncripto() {
  const textoEncriptado = encriptar(inputText.value);
  inputmensagem.value = textoEncriptado;
  inputText.value = "";
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}
function btnDescripto() {
  const textoDesencriptado = desencriptar(inputText.value);
  inputmensagem.value = textoDesencriptado;
  inputText.value = "";
}

function desencriptar(stringDesencriptada) {
  for (let i = 0; i < matrizCodigo1.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo1[i][1],
        matrizCodigo1[i][0]
      );
    }
  }
  return stringDesencriptada;
}
function copiarTexto() {
  const textoCopiado = document.getElementById("showTexto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
