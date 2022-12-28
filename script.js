function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("#res")
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[ERROR] Verifique os dados e tente novamente")
    } else {
        var fSex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fSex[0].checked) {
            genero = "Homem"
            img.setAttribute("src", "./img/mas-perfil.png")
            
        } else if (fSex[1].checked) {
            genero = "Mulher"
            img.setAttribute("src", "./img/fem-perfil.png")
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}