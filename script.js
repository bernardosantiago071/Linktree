function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //  html.classList.remove ('light')
  //  } else {
  //   html.classList.add('light')
  // }

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode add img light
    img.setAttribute("src", "./assets/Picsart_25-03-19_12-48-17-403.png")
  } else {
    //se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/Picsart_25-03-26_10-58-50-714.png")
}

}
