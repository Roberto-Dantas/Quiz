const att = "AÇÃO e ANIMAÇÃO"
alert("Agora com o Quiz de " + att +" funcionando ");

const horaAtualizacao = 12
var oHorario = horaAtualizacao +1
var hoje, hr, min, sec
var hrNova, minNova, secNova

var acabou = 1
function tempo(){ 
    if(acabou === 1) {
        let contagem = document.getElementById('contagemRegressiva')
        let botaoContagem = document.getElementById('botaoAtt')
        botaoAtt.style.display = "none"
        contagemRegressiva.style.display = "block"
        tempo1() 
    }
}
function tempo1() {
    hoje=new Date(); 
    hr= hoje.getHours(); 
    min= hoje.getMinutes();
    sec= hoje.getSeconds();
    contaOTempo()
    document.getElementById("contagemRegressiva").innerHTML= hrNova + ":" + minNova + ":" + secNova; 
    setTimeout('tempo1()',500);
    contaOTempo()
}
function contaOTempo() { 
     horaLancamento = "12:00 - 14/11/2022"
     
     if(hr > oHorario) {
        hrNova = (24 - hr) + oHorario
     }
     if(hr < oHorario) {
        hrNova = (24 - hr) - oHorario
     }
     if(hr === oHorario){
         hrNova = (24 - hr)
     }
     if(hrNova === 0) {
         if(minNova === 0) {
             if(secNova === 0) {
                  document.getElementById("contagemRegressiva").innerHTML= "ATUALIZANDO..."
                 let botaoContagem = document.getElementById('botaoAtt')
                 
                 botaoAtt.style.display = "none"
                 contagemRegressiva.style.display = "block"   
             }
         }
     }
     minNova = (60 - min)
     if(minNova <= 9 ) {
        minNova = "0" + minNova
     }
     if(minNova === undefined) {
        minNova = "60"
     }
     
     secNova = (60 - sec)
     if(secNova <= 9 ) {
        secNova = "0" + secNova
     }
     if(secNova === undefined) {
       secNova = "60"
     }
}
function tiraTempo() {
    if(acabou === 1) {
        let contagem = document.getElementById('contagemRegressiva')
        let botaoContagem = document.getElementById('botaoAtt')
        botaoAtt.style.display = "block"
        contagemRegressiva.style.display = "none"
    }
}


var titulorincipal = document.getElementById('titulo')
var cliqueAqui = document.getElementById('clique')
var txtDoCmc = document.getElementById('textinho1')
var asOpcoes = document.getElementById('opcoes')
var tituloOpcao = document.getElementById('tituloOpcoes')
var oTema1 = document.getElementById('tema1')
var oTema2 = document.getElementById('tema2')
var oTema3 = document.getElementById('tema3')
var oTema4 = document.getElementById('tema4')
var oTema5 = document.getElementById('tema5')
var oTema6 = document.getElementById('tema6')
var oTema7 = document.getElementById('tema7')
var oTema8 = document.getElementById('tema8')
var oTema9 = document.getElementById('tema9')

function botaoMenu() {
    clique.style.transition="0.15s"
    clique.style.fontWeight= "600"
    setTimeout(function(){clique.style.display="none"; textinho1.style.display="none"; titulo.style.display="none"; setTimeout(function() {tituloOpcoes.style.display="block"; setTimeout(function(){tema1.style.display="block"; tema2.style.display="block"; tema3.style.display="block"; tema4.style.display="block"; tema5.style.display="block"; tema6.style.display="block"; tema7.style.display="block"; tema8.style.display="block"; tema9.style.display="block";},500)},500)},1500)

}

var escolheu 
var aPergunta
var alt1, alt2, alt3, alt4, alt5
var respostasCertas
var qualAPessoaEscolheu = document.getElementById('qualEscolheu')
var temas = document.getElementById('escolhida')
var textinhoExplicativo = document.getElementById('explicacaoQuiz')
var botaoVoltarParaTemas = document.getElementById('botao2')
var botaoIniciarQuiz = document.getElementById('botao1')

function acaoQuiz(){
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de AÇÃO'
   aPergunta = ["Qual das alternativas abaixo não é de AÇÃO:", "Qual desses seria quase que obrigatório assistir:", "Qual desses não se encontra no MCU:", "Nas mãos dele, até uma caneta é uma arma:", "Qual desses não se encaixam com os outros:", "Qual desses é permitido chorar (motivo: filme ser muito bom):", "Rocky Balboa não participa de qual dos filmes abaixo:", "Qual desses nunca foram arqui-inimigos nos filmes:", "Qual provavelmente o orçamento saiu mais caro:", "Qual desses não tem segundo filme:"]
   alt1 = ["O Primeiro Vingador", "Velozes e Furiosos 7", "WandaVision", "Carga Explosiva", "Hitman", "Thor Amor e Trovão", "Rambo", "Batman e Coringa", "Alerta Vermelho", "Doutor Estranho"]
   alt2 = ["Abracadabra", "Agente Oculto",   "Eternos", "Avatar", "Ben10", "Cidade Perdida", "Duro de Matar", "Flash e Mercúrio", "Mad Max (1979)", "Exterminador do Futuro"]
   alt3 = ["#Alive", "Uncharted: Fora do Mapa", "Capitã Marvel", "Velozes e Furiosos 5", "James Bond", "Mulher-Maravilha 1984", "Creed-Nascido para Lutar", "Professor Xavier e Magneto", "Napoleon Dynamite", "Lou"]
   alt4 = ["Deadpool", "KarateKid", "Homem-Formiga e a Vespa", "John Wick 3", "John Wick", "Batman vs Superman", "Rocky V", "Superman e Lex Luthor", "Halloween", "Missão Impossível"]
   alt5 = ["Clube da Luta", "Viúva Negra", "Aves de Rapina", "Missão Impossível", "Soldado Infernal", "Coração de Ferro", "Ajuste de Contas", "Thor e Loki", "Atividade Paranormal", "Batman"]
   respostasCertas = ["box[2]","box[4]", "box[5]","box[4]","box[2]","box[5]","box[2]","box[2]","box[1]","box[3]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},300)
    
}
function animacaoQuiz(){
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de ANIMAÇÃO'
   aPergunta = ["Uma casa que voa:", "Robôs?", "Natal chegando:", "Os Brinquedos tem vida:", "As Hienas são uns dos principais vilões:", "O maior cozinheiro que existe:", "Um vilão-heroi??", "Irmãos gêmeos?", "Idade da Pedra:", "Viajem no tempo:"]
   alt1 = ["Moana", "Encanto", "Klaus", "Procurando Dory", "Viva – A Vida É uma Festa", "Procurando Nemo", "Universidade Monstros", "Shrek Terceiro", "Os Incríveis", "Madagascar"]
   alt2 = ["Meu Malvado Favorito", "Vida de Inseto", "Luca", "Frozen 2", "Minions 2: A Origem de Gru", "Ratatouille", "Lilo & Stitch", "Gato de Botas", "Os Croods", "Dumbo"]
   alt3 = ["Up - Altas Aventuras", "A Noiva-Cadáver", "Zootopia", "Toy Story 3", "Aviões", "Soul", "Detona Ralph", "A Era do Gelo 4", "A Dama e o Vagabundo", "A Era do Gelo"]
   alt4 = ["O Estranho Mundo de Jack", "Wall-E", "O Lorax", "Shrek", "Monstros S.A.", "Divertida Mente", "Valente", "Meu Malvado Favorito 3", "O Serviço de Entregas da Kiki", "Irmão Urso"]
   alt5 = ["O Poderoso Chefinho", "Como Treinar o seu Dragão 3", "Tarzan", "Branca de Neve e os Sete Anões", "O Rei Leão", "O Gigante de Ferro", "Tá Chovendo Hambúrguer", "Hotel Transilvânia 3", "Sing", "A Família do Futuro"]
   respostasCertas = ["box[3]","box[4]", "box[1]","box[3]","box[5]","box[2]","box[3]","box[4]","box[2]","box[5]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function aventuraQuiz(){
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de AVENTURA'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function comediaQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de COMÉDIA'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function ficcaoQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de FICÇÃO'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function romanceQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de ROMANCE'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function suspenseQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de SUSPENSE'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
    
}
function terrorQuiz() {
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de TERROR'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
   
}
function thrillerQuiz() {
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de THRILLER'
   aPergunta = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt1 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt2 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt3 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt4 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   alt5 = ["1-)", "2-)", "3-)", "4-)", "5-)", "6-)", "7-)", "8-)", "9-)", "10-)"]
   respostasCertas = [""]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},500)
   
}

var i = 0

function iniciar(){
    escolhida.style.display='none'
    i = i -1
    
    proxima()
}
function voltar(){
    escolhida.style.display='none'
    setTimeout(function(){opcoes.style.display="block"},500)
}

var as = -1
var pergunta = document.getElementById('perguntaTexto')
var a1 = document.getElementById('alternativa1')
var a2 = document.getElementById('alternativa2')
var a3 = document.getElementById('alternativa3')
var a4 = document.getElementById('alternativa4')
var a5 = document.getElementById('alternativa5')
var botaoProximaPergunta = document.getElementById('botaoProxima')
var foraLinhaPontos = document.getElementById('pontuacao')
var linhaPontos = document.getElementById('linhaPontucao')
var altern1 = document.getElementById('box1')
var altern2 = document.getElementById('box2')
var altern3 = document.getElementById('box3')
var altern4 = document.getElementById('box4')
var altern5 = document.getElementById('box5')
var sobrePerguntas 
sobrePerguntas = ["","","","","","","","","",""]
var al

function proxima() {
    as = as +1
    i = i +1
    al = ["","","","",""]
    
    ;
    
    if(i === 10){
         
          telaFinal()
          
    }else{
    
    validacaoAleatorio()
    sobrePerguntas[as] = aleatorio
    
    
    for(var kol = 0; kol <=4; kol++){
        validacaoAleatorioAlternativas()
        al[kol] = ordemAlternativas
    }
    perguntaTexto.innerHTML = aPergunta[aleatorio]
    console.log(respostasCertas[aleatorio])
    
    pontuacao.style.display="none"
    linhaPontucao.style.display="none"
    perguntaTexto.style.display="none"
    box1.style.display="none"
    alternativa1.style.display="none"
    box2.style.display="none";
    alternativa2.style.display="none"
    box3.style.display="none"
    alternativa3.style.display="none"
    box4.style.display="none";
    alternativa4.style.display="none"
    box5.style.display="none";
    alternativa5.style.display="none"
    botaoProxima.style.display="none";
        
    perguntasAleatorias()
    
    box1.checked = 0
    box2.checked = 0
    box3.checked = 0
    box4.checked = 0
    box5.checked = 0
    
    pontuacao.style.display="block"
    linhaPontucao.style.display="block";
    perguntaTexto.style.display="block";
    setTimeout(function(){box1.style.display="block"; alternativa1.style.display="block"; setTimeout(function(){box2.style.display="block"; alternativa2.style.display="block"; setTimeout(function(){box3.style.display="block"; alternativa3.style.display="block"; setTimeout(function(){box4.style.display="block"; alternativa4.style.display="block"; setTimeout(function(){box5.style.display="block"; alternativa5.style.display="block"; setTimeout(function(){botaoProxima.style.display="block";},700)},400)},400)},400)},400)},600)
    
   palavraAssina()
   
    }
}


function validacaoAleatorio() {
   mini = 0
   maxi = 10
   getRandomInt(mini, maxi)
   
   if(aleatorio === sobrePerguntas[0]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[1]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[2]) {
       validacaoAleatorio()    
   }
   if(aleatorio === sobrePerguntas[3]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[4]) {
       validacaoAleatorio()
   }
   
   if(aleatorio === sobrePerguntas[5]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[6]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[7]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[8]) {
       validacaoAleatorio()
   }
   if(aleatorio === sobrePerguntas[9]) {
       validacaoAleatorio()
   }   
}
function getRandomInt(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio = Math.floor(Math.random() * (max - min) + min);
}
function getRandomInte(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio02 = Math.floor(Math.random() * (max - min) + min);
}
function getRandomIntA(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio2 = Math.floor(Math.random() * (max - min) + min);
}

var ordemAlternativas


function validacaoAleatorioAlternativas() {
    getRandomIntA(1,6)
    ordemAlternativas = aleatorio2
     
   if(ordemAlternativas === al[0]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[1]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[2]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[3]) {
       validacaoAleatorioAlternativas()
   }
   if(ordemAlternativas === al[4]) {
       validacaoAleatorioAlternativas()
   }
   
}

var alternativaClicada1 = document.getElementById('simAlternativa1')
var alternativaClicada2 = document.getElementById('simAlternativa2')
var alternativaClicada3 = document.getElementById('simAlternativa3')
var alternativaClicada4 = document.getElementById('simAlternativa4')
var alternativaClicada5 = document.getElementById('simAlternativa5')

function perguntasAleatorias() {
    let agoraSimAlternativas, agoraSimAlternativas2
    let sobe = 0
    let rou = 0
    
    
    
    console.log(sobrePerguntas);
    while(sobe != 5){
        rou++
        agoraSimAlternativas = "alternativa" + rou
        agoraSimAlternativas2 = "alt" + al[rou -1]
        
        
        if(agoraSimAlternativas === "alternativa1") {
            if(agoraSimAlternativas2 === "alt1"){
                alternativa1.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa1.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa1.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa1.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa1.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa2"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa2.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa2.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa2.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa2.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa2.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa3") {
            if(agoraSimAlternativas2 === "alt1"){
                alternativa3.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa3.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa3.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa3.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa3.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa4"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa4.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa4.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa4.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa4.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa4.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        if(agoraSimAlternativas === "alternativa5"){
            if(agoraSimAlternativas2 === "alt1"){
                alternativa5.innerHTML = alt1[aleatorio] 
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt2"){
                alternativa5.innerHTML = alt2[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt3"){
                alternativa5.innerHTML = alt3[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt4"){
                alternativa5.innerHTML = alt4[aleatorio]
                sobe = sobe +1
            }
            if(agoraSimAlternativas2 === "alt5"){
                alternativa5.innerHTML = alt5[aleatorio]
                sobe = sobe +1
            }
        }
        
        
    }
    sobe = 0
    rou = 0
}
function palavraAssina(){
    simAlternativa1.onclick = function(){
        box1.checked = true
        alterna1()
    }
    simAlternativa2.onclick = function(){
        box2.checked = true
        alterna2()
    }
    simAlternativa3.onclick = function(){
        box3.checked = true
        alterna3()
    }
    simAlternativa4.onclick = function(){
        box4.checked = true
        alterna4()
    }
    simAlternativa5.onclick = function(){
        box5.checked = true
        alterna5()
    }
}
function alterna1() {
    if(box1.checked) {
        box2.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = 0
        box1.checked = true
    }
}
function alterna2() {
    if(box2.checked) {
        box1.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = 0
        box2.checked = true
    }
}
function alterna3() {
    if(box3.checked) {
        box1.checked = 0
        box2.checked = 0
        box4.checked = 0
        box5.checked = 0
        box3.checked = true
    }
}
function alterna4() {
    if(box4.checked) {
        box1.checked = 0
        box2.checked = 0
        box3.checked = 0
        box5.checked = 0
        box4.checked = true
    }
}
function alterna5() {
    if(box5.checked) {
        box1.checked = 0
        box2.checked = 0
        box3.checked = 0
        box4.checked = 0
        box5.checked = true
    }
}

var Clicados = 0

function validacao() {
    Clicados = 0
    if(Clicados === 0){
    
        enquanto()
        
    }
}

var caixaClicada 

function enquanto() {
    if(Clicados === 0){
    
        if(box1.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 1
        }
        if(box2.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 2
        }
        if(box3.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 3
        }
        if(box4.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 4
        }
        if(box5.checked) {
            Clicados =  Clicados + 1
            caixaClicada = 5
        }
        
        validacao2()
        
    }
}

var chegou

function validacao2() {
     if(Clicados === 1){
           chegou = 1
           
           colorindo()
           
           box1.checked = 0
           box2.checked = 0
           box3.checked = 0
           box4.checked = 0
           box5.checked = 0
     }
     if(Clicados === 0){
            alert("Por favor escolha alguma das seguintes alternativas:");
     }
}

var bolinhas
var respostasFinal
var pontuacaoFinal = 0
var oMenu = document.getElementById('menu')
var aQuiz = document.getElementById('palavraQuiz')
var finalIncluido

var bo
var tiva1 = document.getElementById('alternativa1')
var tiva2 = document.getElementById('alternativa2')
var tiva3 = document.getElementById('alternativa3')
var tiva4 = document.getElementById('alternativa4')
var tiva5 = document.getElementById('alternativa5')


function colorindo() {
    var o = i +1
    
    bolinhas = "p" + o
    finalIncluido = al[caixaClicada -1]
    respostasFinal = "box[" + finalIncluido + "]"
    
    if(chegou === 1){
        if(respostasCertas[aleatorio] === respostasFinal){
            pontuacaoFinal = pontuacaoFinal +1
            
            //NÃO TAVA FUNCIONANDO AQ
            
            testagem()
         
            menu.style.transition="1s"
            menu.style.backgroundColor="green"
            palavraQuiz.style.transition="1s"
            palavraQuiz.style.color="#fff"
              setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; testagemBolinha()},1500)
            
        }else{
            let correta = respostasCertas[aleatorio].replace("box[","")
            let corretaFinal = correta.replace("]","")
            let gg = "alt" + corretaFinal
            
            testagem()
           
            
            menu.style.transition="1s";
            menu.style.backgroundColor="red";
            palavraQuiz.style.transition="1s";
            palavraQuiz.style.color="#000";
            
            
            
            setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; testagemBolinha()},1500)
        }
    }
    setTimeout(function(){proxima()},2000)
}
function testagemBolinha() {
    if(respostasCertas[aleatorio] === respostasFinal){
        if(bolinhas === "p1") {
            p1.style.backgroundColor="green";
        }
        if(bolinhas === "p2") {
            p2.style.backgroundColor="green";
        }
        if(bolinhas === "p3") {
            p3.style.backgroundColor="green";
        }
        if(bolinhas === "p4") {
            p4.style.backgroundColor="green";
        }
        if(bolinhas === "p5") {
            p5.style.backgroundColor="green";
        }
        if(bolinhas === "p6") {
            p6.style.backgroundColor="green";
        }
        if(bolinhas === "p7") {
            p7.style.backgroundColor="green";
        }
        if(bolinhas === "p8") {
            p8.style.backgroundColor="green";
        }
        if(bolinhas === "p9") {
            p9.style.backgroundColor="green";
        }
        if(bolinhas === "p10") {
            p10.style.backgroundColor="green";
        }
        
     }else{
     
         if(bolinhas === "p1") {
            p1.style.backgroundColor="red";
        }
        if(bolinhas === "p2") {
            p2.style.backgroundColor="red";
        }
        if(bolinhas === "p3") {
            p3.style.backgroundColor="red";
        }
        if(bolinhas === "p4") {
            p4.style.backgroundColor="red";
        }
        if(bolinhas === "p5") {
            p5.style.backgroundColor="red";
        }
        if(bolinhas === "p6") {
        p6.style.backgroundColor="red";
        }
        if(bolinhas === "p7") {
            p7.style.backgroundColor="red";
        }
        if(bolinhas === "p8") {
            p8.style.backgroundColor="red";
        }
        if(bolinhas === "p9") {
            p9.style.backgroundColor="red";
        }
        if(bolinhas === "p10") {
            p10.style.backgroundColor="red";
        }
     }
}
function testagem() {
     let aAlternativaEscolhida = "simAlternativa" + caixaClicada 
     
     if(respostasCertas[aleatorio] === respostasFinal){
        
        if(aAlternativaEscolhida === "simAlternativa1") {
            simAlternativa1.style.transition="0.5s"
            simAlternativa1.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa1.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa2") {
                simAlternativa2.style.transition="0.5s"
            simAlternativa2.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa2.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa3") {
            simAlternativa3.style.transition="0.5s"
            simAlternativa3.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa3.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa4") {
            simAlternativa4.style.transition="0.5s"
            simAlternativa4.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa4.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa5") {
            simAlternativa5.style.transition="0.5s"
        simAlternativa5.style.backgroundColor="#50c05ad7"
        setTimeout(function(){simAlternativa5.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
    }else{
        if(aAlternativaEscolhida === "simAlternativa1") {
            simAlternativa1.style.transition="0.5s"
            simAlternativa1.style.backgroundColor="red"
        setTimeout(function(){simAlternativa1.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa2") {
                simAlternativa2.style.transition="0.5s"
            simAlternativa2.style.backgroundColor="red"
        setTimeout(function(){simAlternativa2.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa3") {
            simAlternativa3.style.transition="0.5s"
            simAlternativa3.style.backgroundColor="red"
        setTimeout(function(){simAlternativa3.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa4") {
            simAlternativa4.style.transition="0.5s"
            simAlternativa4.style.backgroundColor="red"
        setTimeout(function(){simAlternativa4.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
        if(aAlternativaEscolhida === "simAlternativa5") {
            simAlternativa5.style.transition="0.5s"
        simAlternativa5.style.backgroundColor="red"
        setTimeout(function(){simAlternativa5.style.backgroundColor="rgb(255, 255, 255, 0.0)"},1500)
        }
    }
    
}

var chamando0 = document.getElementById('oFinal')
var chamando1 = document.getElementById('falaFinal')
var chamando2 = document.getElementById('notaFinal')
var chamando3 = document.getElementById('textoFinal')
var clique2 = document.getElementById('botaoReiniciarTudo')

function telaFinal() {
    let oTemaEscolhido = escolheu.replace("Você escolheu o tema de ","")
    
    perguntaTexto.style.display="none"
    box1.style.display="none"
    alternativa1.style.display="none"
    box2.style.display="none";
    alternativa2.style.display="none"
    box3.style.display="none"
    alternativa3.style.display="none"
    box4.style.display="none";
    alternativa4.style.display="none"
    box5.style.display="none";
    alternativa5.style.display="none"
    botaoProxima.style.display="none";
    setTimeout(function(){pontuacao.style.display="none"; linhaPontucao.style.display="none";},2000)
    
    oFinal.style.display="block"
    falaFinal.style.display="block"
    notaFinal.style.display="block"
    textoFinal.style.display="block"
    botaoReiniciarTudo.style.display="block"
    
    
    if(pontuacaoFinal === 0){
        falaFinal.innerHTML = "Então... sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Com certeza você não assite filmes de " + oTemaEscolhido + " com muita frequência..."
    }
    if(pontuacaoFinal === 1 || pontuacaoFinal < 5){
        falaFinal.innerHTML = "Éhh sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Pelo o que eu vi, você não assite conhece muitos filmes de " + oTemaEscolhido + ", mas tudo bem, tente outro tema:"
    }
    if(pontuacaoFinal === 5) {
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Você acertou a metade, meus parabéns"
    }
    if(pontuacaoFinal === 6 || pontuacaoFinal === 7){
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Você acertou mais da metade, meus parabéns"
    }
    if(pontuacaoFinal >= 8) {
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Tenho quase certeza que você assiste muitos filmes de " + oTemaEscolhido + " agora tente os outros temas"
    }
}
function cliqueFinal() {
    jo = ["","","","","","","","","",""]
    sobrePerguntas = ["","","","","","","","","",""]
    pontuacaoFinal = 0
    chegou = 0
    as = -1
    i= 0
    
    p1.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p2.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p3.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p4.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p5.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p6.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p7.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p8.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p9.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    p10.style.backgroundColor="rgb(255, 255, 255, 0.0)"; 
    botaoReiniciarTudo.style.transition="0.15s"
    botaoReiniciarTudo.style.fontWeight= "600"
    setTimeout(function(){botaoReiniciarTudo.style.display="none"; falaFinal.style.display="none"; notaFinal.style.display="none"; textoFinal.style.display="none"; oFinal.style.display="none"; setTimeout(function() {opcoes.style.display="block"; },1500)},500)
    
}
