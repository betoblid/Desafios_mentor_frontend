function gerar() {
    //pegando o placar
    let resultado = document.getElementById("resultado");
    //fazendo numeros aleatorios
    const aleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);
    //chamando a função e salvando o resultado para que mostre no placar
    let tela = aleatorio(50, 91)
    //mostrando no placar
    resultado.innerHTML = `<h2>${tela}</h2><p>${tela}/100</p>`

    //parte do resumo gerando um numero nos resumos

    //pegando elementos do dom
    let reaction = document.getElementById("reaction")
    let memory = document.getElementById("memory")
    let verbal = document.getElementById("verbal")
    let visual = document.getElementById("visual")
    //gerando numeros aleatorios para mostra no dom
    let reaction_numero = aleatorio(50, 100)
    let memory_numero = aleatorio(50, 100)
    let verbal_numero = aleatorio(50, 100)
    let visual_numero = aleatorio(50, 100)

    //manipulando o dom
    reaction.innerHTML = `<h4><img src="asend/raio.avif" alt=""> Reaction</h4>
    <span>${reaction_numero}/100</span>`
    memory.innerHTML = `<h4><img src="asend/relogio.png" alt=""> Memory</h4>
    <span>${memory_numero}/100</span>`
    verbal.innerHTML = `<h4><img src="asend/verbal.png" alt=""> Vesbal</h4>
    <span>${verbal_numero}/100</span>`
    visual.innerHTML = `<h4><img src="asend/olho.png" alt=""> Visual</h4>
    <span>${visual_numero}/100</span>`

    //pegando a aba resultado
    let lado_placar = document.getElementById("res")

    if(tela <= 55){
        lado_placar.innerHTML = `
        <h2>Bom</h2>
        <p>você pontuou mais de 50% das pessoas que fizeram esses testes</p>`
    }else if(tela <= 70){
        lado_placar.innerHTML = `
        <h2>Muito Bom</h2>
        <p>você pontuou mais de 55% das pessoas que fizeram esses testes</p>`
    }else if(tela <= 80){
        lado_placar.innerHTML = `
                    <h2>Otimo</h2>
                    <p>você pontuou mais de 70% das pessoas que fizeram esses testes</p>`
    }else{
        lado_placar.innerHTML = `
                    <h2>excelente</h2>
                    <p>você pontuou mais de 80% das pessoas que fizeram esses testes</p>`
    }
}   