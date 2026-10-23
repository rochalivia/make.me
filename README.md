# 💜 Moodboard de Estilos: Formulário, Condicionais e DOM
Neste projeto, um formulário recebe um estilo e uma idade, e a página responde trocando as imagens na tela, montando um moodboard personalizado.
- Você pode ver tudo funcionando através deste link:
- https://rochalivia.github.io/make.me/

## O que tem aqui:

- 📝 Formulário e eventos: o evento submit escutado com addEventListener, e o event.preventDefault() para a página não recarregar ao enviar.
- 🔎 Seletores e leitura de dados: querySelector com seletores no formato tag#id, e o .value para ler o que a pessoa escolheu ou digitou. Como o .value sempre devolve texto, a idade passa pelo Number.
- 🧭 Condicionais: a cadeia if / else if / else que decide a faixa etária (criança, adolescente, adulta e idosa), com as faixas encaixadas na ordem certa.
- 🔀 switch / case: cada função escolhe a imagem conforme o estilo (glam, clean, goth, clássica ou colorida), com break em cada caso.
- 🧩 Funções com parâmetros: crianca, adolescente, adulto, idoso e moodboardDeEstilos recebem os elementos e o estilo como parâmetros, em vez de depender de variáveis soltas.
- 🖼️ Manipulação do DOM: a propriedade src das imagens é trocada pelo JavaScript, e é isso que faz a página reagir.

## Como funciona:
- A pessoa escolhe um estilo e informa a idade no formulário.
- Ao enviar, o JavaScript lê os dois valores e converte a idade para número.
- Um if / else if descobre a faixa etária e chama a função correspondente.
- Um switch escolhe a imagem certa para aquele estilo e faixa.
- Em seguida, o moodboard mostra as quatro faixas etárias do mesmo estilo lado a lado.


## Como navegar:
- As imagens ficam na pasta images, com o nome no padrão estilo + faixa etária (por exemplo, glamAdulta.jpeg).
- Abra o projeto pelo Live Server
- Escolha um estilo e digite uma idade
- Veja o moodboard mudar e seja feliz!

## O que eu aprendi:
O .value devolve texto, então números precisam de Number.
event.preventDefault() evita o recarregamento padrão do formulário.
A ordem dos if / else if importa, e as faixas não podem se sobrepor.
switch sem break continua para o próximo caso.
Nome de arquivo e nome de variável precisam bater letra por letra, incluindo maiúsculas.
