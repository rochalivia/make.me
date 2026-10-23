const formulario = document.querySelector('form#formulario01')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const estiloEscolhido = document.querySelector('select#estilo').value
    const idade = Number(document.querySelector('input#number').value)
    const imagem = document.querySelector('img#imagem')


    const imgMoodboard01 = document.querySelector('img#imgMoodboard01')
    const imgMoodboard02 = document.querySelector('img#imgMoodboard02')
    const imgMoodboard03 = document.querySelector('img#imgMoodboard03')
    const imgMoodboard04 = document.querySelector('img#imgMoodboard04')

    if (idade <= 12) {
        crianca(imagem, estiloEscolhido)
    } else if (idade < 18) {
        adolescente(imagem, estiloEscolhido)
    } else if (idade < 50) {
        adulto(imagem, estiloEscolhido)
    } else {
        idoso(imagem, estiloEscolhido)
    }

    moodboardDeEstilos(estiloEscolhido, imgMoodboard01, imgMoodboard02, imgMoodboard03, imgMoodboard04)


    function crianca(imagem, estiloEscolhido) {

        switch (estiloEscolhido) {
            case "glam":
                imagem.src = 'images/glamCrianca.jpeg'
                break

            case "clean":
                imagem.src = 'images/cleanCrianca.jpeg'
                break

            case "goth":
                imagem.src = 'images/gothCrianca.jpeg'
                break

            case "classica":
                imagem.src = 'images/classicaCrianca.jpeg'
                break

            case "colorida":
                imagem.src = 'images/coloridaCrianca.jpeg'
                break

            default: 'Imagem não Encontrada'
        }

    }


    function adolescente(imagem, estiloEscolhido) {

        switch (estiloEscolhido) {
            case "glam":
                imagem.src = 'images/glamAdolescente.jpeg'
                break

            case "clean":
                imagem.src = 'images/cleanAdolescente.jpeg'
                break
            case "goth":
                imagem.src = 'images/gothAdolescente.jpeg'
                break

            case "classica":
                imagem.src = 'images/classicaAdolescente.jpeg'
                break
            case "colorida":
                imagem.src = 'images/coloridaAdolescente.jpeg'
                break
            default: 'Imagem não Encontrada'
        }

    }

    function adulto(imagem, estiloEscolhido) {

        switch (estiloEscolhido) {

            case "clean":
                imagem.src = 'images/cleanAdulta.jpeg'
                break

            case "glam":
                imagem.src = 'images/glamAdulta.jpeg'
                break

            case "goth":
                imagem.src = 'images/gothAdulta.jpeg'
                break

            case "classica":
                imagem.src = 'images/classicaAdulta.jpeg'
                break

            case "colorida":
                imagem.src = 'images/coloridaAdulta.jpeg'
                break

            default: 'Imagem não Encontrada'



        }

    }

    function idoso(imagem, estiloEscolhido) {

        switch (estiloEscolhido) {
            case "glam":
                imagem.src = 'images/glamIdosa.jpeg'
                break

            case "clean":
                imagem.src = 'images/cleanIdosa.jpeg'
                break
            case "goth":
                imagem.src = 'images/gothIdosa.jpeg'
                break

            case "classica":
                imagem.src = 'images/classicaIdosa.jpeg'
                break
            case "colorida":
                imagem.src = 'images/coloridaIdosa.jpeg'
                break

            default: 'Imagem não Encontrada'
        }

    }

    function moodboardDeEstilos(estiloEscolhido, imgMoodboard01, imgMoodboard02, imgMoodboard03, imgMoodBoard04) {

        switch (estiloEscolhido) {

            case "classica":
                imgMoodboard01.src = 'images/classicaCrianca.jpeg'
                imgMoodboard02.src = 'images/classicaAdolescente.jpeg'
                imgMoodboard03.src = 'images/classicaAdulta.jpeg'
                imgMoodboard04.src = 'images/classicaIdosa.jpeg'
                break

            case "glam":
                imgMoodboard01.src = 'images/glamCrianca.jpeg'
                imgMoodboard02.src = 'images/glamAdolescente.jpeg'
                imgMoodboard03.src = 'images/glamAdulta.jpeg'
                imgMoodboard04.src = 'images/glamIdosa.jpeg'
                break

            case "clean":
                imgMoodboard01.src = 'images/cleanCrianca.jpeg'
                imgMoodboard02.src = 'images/cleanAdolescente.jpeg'
                imgMoodboard03.src = 'images/cleanAdulta.jpeg'
                imgMoodboard04.src = 'images/cleanIdosa.jpeg'

                break

            case "colorida":
                imgMoodboard01.src = 'images/coloridaCrianca.jpeg'
                imgMoodboard02.src = 'images/coloridaAdolescente.jpeg'
                imgMoodboard03.src = 'images/coloridaAdulta.jpeg'
                imgMoodboard04.src = 'images/coloridaIdosa.jpeg'

                break

            case "goth":
                imgMoodboard01.src = 'images/gothCrianca.jpeg'
                imgMoodboard02.src = 'images/gothAdolescente.jpeg'
                imgMoodboard03.src = 'images/gothAdulta.jpeg'
                imgMoodboard04.src = 'images/gothIdosa.jpeg'
                break


            default: 'Imagem não Encontrada'
        }

    }

})


