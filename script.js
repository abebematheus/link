function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('dark')


   //pegar a tag img
   const img = document.querySelector("#profile img")

   //substituir a img
   if(html.classList.contains('dark')){
   //se tiver dark mode, adicona a imagem dark
   img.setAttribute('src', './assets/avatar.png')
   } else{
      // se tiver sem dark mode, mantem a imagem padrao
      img.setAttribute('src', './assets/avatar-light.png')
   }

   //pegar a tag img
   const imgdesc = document.querySelector("#profile img")

   //substituir rel da img
   if(html.classList.contains('dark')){
   //se tiver dark mode, adicona o rel da imagem dark
   img.setAttribute('alt', "foto de dia")
   } else{
      // se tiver sem dark mode, mantem o rel da imagem padrao
      img.setAttribute('alt', "foto de noite")
   }

  }
