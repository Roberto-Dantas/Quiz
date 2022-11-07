
var titulorincipal = document.getElementById('titulo')
var cliqueAqui = document.getElementById('clique')
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
    setTimeout(function(){clique.style.display="none"; titulo.style.display="none"; setTimeout(function() {tituloOpcoes.style.display="block"; setTimeout(function(){tema1.style.display="block"; tema2.style.display="block"; tema3.style.display="block"; tema4.style.display="block"; tema5.style.display="block"; tema6.style.display="block"; tema7.style.display="block"; tema8.style.display="block"; tema9.style.display="block";},500)},500)},1500)
    
}

var oMenu = document.getElementById('menu')
var aQuiz = document.getElementById('palavraQuiz')
var foraLinhaPontos = document.getElementById('pontuacao')
var linhaPontos = document.getElementById('linhaPontucao')
var ponto1 = document.getElementById('p1')
var ponto2 = document.getElementById('p2')
var ponto3 = document.getElementById('p3')
var ponto4 = document.getElementById('p4')
var ponto5 = document.getElementById('p5')
var ponto6 = document.getElementById('p6')
var ponto7 = document.getElementById('p7')
var ponto8 = document.getElementById('p8')
var ponto9 = document.getElementById('p9')
var ponto10 = document.getElementById('p10')

var todaParteDoQuiz = document.getElementById('parteQuiz')
var pergunta = document.getElementById('perguntaTexto')
var a1 = document.getElementById('alternativa1')
var a2 = document.getElementById('alternativa2')
var a3 = document.getElementById('alternativa3')
var a4 = document.getElementById('alternativa4')
var a5 = document.getElementById('alternativa5')
var aCaixa1 = document.getElementById('simAlternativa1')
var aCaixa2 = document.getElementById('simAlternativa2')
var aCaixa3 = document.getElementById('simAlternativa3')
var aCaixa4 = document.getElementById('simAlternativa4')
var aCaixa5 = document.getElementById('simAlternativa5')
var botaoProximaPergunta = document.getElementById('botaoProxima')

var i= 0
var escolheu 
var aPergunta
var alt1, alt2, alt3, alt4, alt5
var respostasCertas
var chegou
var Clicados = 0
var caixaClicada 
var respostasFinal 
var pontoValido
var aleatorio
var pontuacaoFinal = 0
var todasPerguntas=["","","","","","","","","",""]

function iniciar(){
    escolhida.style.display='none'
    i = i -1
    
    proxima()
    
}
function colorindo() {
    respostasFinal = "box[" + caixaClicada + "]"
    
    
    var bo = [p1,p2, p3, p4, p5, p6, p7, p8, p9, p10]
    var po = [simAlternativa1, simAlternativa2, simAlternativa3, simAlternativa4, simAlternativa5]
    
    
    if(chegou === 1){
        
        if(respostasCertas[aleatorio] === respostasFinal){
            pontuacaoFinal = pontuacaoFinal +1
            todasPerguntas[i] = respostasFinal + "-ACERTOU"
            
            console.log(pontuacaoFinal);
            console.log(todasPerguntas[i]);
            menu.style.transition="1s"
            po[caixaClicada - 1].style.transition="0.5s"
            menu.style.backgroundColor="green"
            po[caixaClicada - 1].style.backgroundColor="#50c05ad7"
            palavraQuiz.style.transition="1s"
            palavraQuiz.style.color="#fff"
            setTimeout(function(){po[caixaClicada - 1].style.transition="0.5s"; po[caixaClicada - 1].style.backgroundColor="rgb(255, 255, 255, 0.0)";},1000)
            setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; bo[i].style.backgroundColor="green";},1500)
            
            
        }else{
            var correta = respostasCertas[aleatorio].replace("box[","")
            var corretaFinal = correta.replace("]","")
            
            
            todasPerguntas[i] = respostasFinal + "-ERROU"
            
            console.log(pontuacaoFinal);
            console.log(todasPerguntas[i]);
            
            menu.style.transition="1s";
            po[caixaClicada - 1].style.transition="0.5s";
            po[corretaFinal -1].style.transition="0.5s";
            menu.style.backgroundColor="red";
            po[caixaClicada - 1].style.backgroundColor="red";
            po[corretaFinal -1].style.backgroundColor="#50c05ad7";
            palavraQuiz.style.transition="1s";
            palavraQuiz.style.color="#000";
           
            setTimeout(function(){menu.style.transition="1s"; menu.style.backgroundColor="#fff"; po[caixaClicada -1].style.transition="0.5s"; po[corretaFinal -1].style.transition="0.5s"; po[caixaClicada -1].style.backgroundColor="rgb(255, 255, 255, 0.0)"; po[corretaFinal -1].style.backgroundColor="rgb(255, 255, 255, 0.0)"; palavraQuiz.style.transition="1s"; palavraQuiz.style.color="#E8000D"; bo[i].style.backgroundColor="red"},1500)
            
        }
      
    }
   setTimeout(function(){proxima()},2000) 
    
    
}
function getRandomInt(min, max){ 
    min = Math.ceil(min); 
    max = Math.floor(max);
    aleatorio = Math.floor(Math.random() * (max - min) + min);
    
}

var as = 0
jo = ["","","","","","","","","",""]

function validacaoAleatorio() {
    getRandomInt(0, 10)
   
   if(aleatorio === jo[0]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[1]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[2]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[3]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[4]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[5]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[6]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[7]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[8]) {
       validacaoAleatorio()
   }
   if(aleatorio === jo[9]) {
       validacaoAleatorio()
   }
   
   
}
function proxima() {
   as = as +1
   i = i +1
   
    if(i === 10){
         
          telaFinal()
          
    }else{
    
    validacaoAleatorio()
    jo[as] = aleatorio
    
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
    
    perguntaTexto.innerHTML= aPergunta[aleatorio]
    alternativa1.innerHTML = alt1[aleatorio]
    alternativa2.innerHTML = alt2[aleatorio]
    alternativa3.innerHTML = alt3[aleatorio]
    alternativa4.innerHTML = alt4[aleatorio]
    alternativa5.innerHTML = alt5[aleatorio]    
    
    pontuacao.style.display="block"
    linhaPontucao.style.display="block";
    perguntaTexto.style.display="block";
    setTimeout(function(){box1.style.display="block"; alternativa1.style.display="block"; setTimeout(function(){box2.style.display="block"; alternativa2.style.display="block"; setTimeout(function(){box3.style.display="block"; alternativa3.style.display="block"; setTimeout(function(){box4.style.display="block"; alternativa4.style.display="block"; setTimeout(function(){box5.style.display="block"; alternativa5.style.display="block"; setTimeout(function(){botaoProxima.style.display="block";},700)},400)},400)},400)},400)},600)
   0
    }
}
function voltar(){
    escolhida.style.display='none'
    setTimeout(function(){opcoes.style.display="block"},500)
}



var temas = document.getElementById('escolhida')
var botaoVoltarParaTemas = document.getElementById('botao2')
var qualAPessoaEscolheu = document.getElementById('qualEscolheu')
var textinhoExplicativo = document.getElementById('explicacaoQuiz')
var botaoIniciarQuiz = document.getElementById('botao1')

function acaoQuiz(){
   opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de AÇÃO'
   aPergunta = ["Qual das alternativas abaixo não é de AÇÃO:", "Qual desses seria quase que obrigatório assistir:", "Qual desses não se encontra no MCU:", "Nas mãos desse personagem principal, até uma caneta é uma arma:", "Qual desses não se encaixam com os outros:", "Qual desses é permitido chorar (motivo: filme ser muito bom):", "Rocky Balboa não participa de qual dos filmes abaixo:", "Qual desses nunca foram arqui-inimigos nos filmes:", "Qual provavelmente o orçamento saiu mais caro:", "10-)"]
   alt1 = ["O Primeiro Vingador", "Velozes e Furiosos 8", "WandaVision", "Carga Explosiva", "Hitman", "Thor Amor e Trovão", "Rambo", "Batman e Coringa", "Alerta Vermelho", "10-)"]
   alt2 = ["Abracadabra", "Agente Oculto",   "Eternos", "Avatar", "Ben10", "Cidade Perdida", "Duro de Matar", "Flash e Mercúrio", "Mad Max (1979)", "10-)"]
   alt3 = ["#Alive", "Uncharted: Fora do Mapa", "Capitã Marvel", "Velozes e Furiosos 5", "James Bond", "Mulher-Maravilha 1984", "Creed-Nascido para Lutar", "Professor Xavier e Magneto", "Napoleon Dynamite", "10-)"]
   alt4 = ["Deadpool", "KarateKid", "Homem-Formiga e a Vespa", "John Wick 3", "John Wick", "Venom: Tempo de Carnificina", "Rocky V", "Superman e Lex Luthor", "Halloween", "10-)"]
   alt5 = ["Clube da Luta", "Viúva Negra", "Aves de Rapina", "Missão Impossível", "Soldado Infernal", "Coração de Ferro", "Ajuste de Contas", "Thor e Loki", "Atividade Paranormal", "10-)"]
   respostasCertas = ["box[2]","box[4]", "box[5]","box[4]","box[2]","box[5]","box[2]","box[2]","box[1]","box[3]"]
   
    qualEscolheu.innerHTML= escolheu
    setTimeout(function(){escolhida.style.display="block"; botao2.style.display="block"; qualEscolheu.style.display="block"; explicacaoQuiz.style.display="block"; botao1.style.display="block"},300)
    
    
}
function animacaoQuiz(){
    opcoes.style.display="none"
   
   escolheu = 'Você escolheu o tema de ANIMAÇÃO'
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
function validacao() {
    Clicados = 0
    if(Clicados === 0) {
        enquanto()
    }
}

function enquanto() {
    
    if(Clicados === 0){
    
    var altern1 = document.getElementById('box1')
    var altern2 = document.getElementById('box2')
    var altern3 = document.getElementById('box3')
    var altern4 = document.getElementById('box4')
    var altern5 = document.getElementById('box5')
   
   if(altern1.checked) {
        Clicados =  Clicados + 1
        caixaClicada = 1
    }
    if(altern2.checked) {
        Clicados =  Clicados + 1
        caixaClicada = 2
    }
    if(altern3.checked) {
        Clicados =  Clicados + 1
        caixaClicada = 3
    }
    if(altern4.checked) {
        Clicados =  Clicados + 1
        caixaClicada = 4
    }
    if(altern5.checked) {
        Clicados =  Clicados + 1
        caixaClicada = 5
    }
    validacao2()
    }
}
function validacao2() {
    if(Clicados > 0){
        if(Clicados >= 2){
           alert("Por favor apenas 1 alternativa :/");
           box1.checked = 0
           box2.checked = 0
           box3.checked = 0
           box4.checked = 0
           box5.checked = 0
           enquanto()
        
        }
        if(Clicados === 1){
           chegou = 1
           colorindo()
           box1.checked = 0
           box2.checked = 0
           box3.checked = 0
           box4.checked = 0
           box5.checked = 0
         }
     }
     else{
        alert("Por favor escolha alguma das seguintes alternativas:");
     }
}
var chamando00 = document.getElementById('oFinal')
var chamando0 = document.getElementById('falaFinal')
    var chamando1 = document.getElementById('notaFinal')
    var chamando2 = document.getElementById('textoFinal')
    var clique2 = document.getElementById('botaoReiniciarTudo')
    
function telaFinal() {

    var oTemaEscolhido = escolheu.replace("Você escolheu o tema de ","")
    console.log(escolheu);
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
    
    if(pontuacaoFinal === 1 || pontuacaoFinal <= 5){
        falaFinal.innerHTML = "Éhh sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Pelo o que eu vi, você não assite conhece muitos filmes de " + oTemaEscolhido + ", mas tudo bem, tente outro tema:"
    }
    
    if(pontuacaoFinal > 5 || pontuacaoFinal <= 7){
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Você acertou mais da metade, meus parabéns"
    }
    
    if(pontuacaoFinal > 7) {
        falaFinal.innerHTML = "Parabéns sua nota foi:"; notaFinal.innerHTML = pontuacaoFinal + "0" + "/100pts"; textoFinal.innerHTML = "Tenho quase certeza que você assiste muitos filmes de " + oTemaEscolhido + " agora tente os outros temas"
    }
    
}
function alterna1() {
    if(box1.checked) {
        box1.checked = 0
    }else{
        box1.checked = true
    }
}
function alterna2() {
    if(box2.checked) {
        box2.checked = 0
    }else{
        box2.checked = true
    }
}
function alterna3() {
    if(box3.checked) {
        box3.checked = 0
    }else{
        box3.checked = true
    }
}
function alterna4() {
    if(box4.checked) {
        box4.checked = 0
    }else{
        box4.checked = true
    }
}
function alterna5() {
    if(box5.checked) {
        box5.checked = 0
    }else{
        box5.checked = true
    }
}

function cliqueFinal() {
    pontuacaoFinal = 0
    chegou = 0
    as = 0
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

