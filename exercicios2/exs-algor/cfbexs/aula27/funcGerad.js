function* perguntas() {
    const cantor = yield 'Qual seu artista favorito?';
    const musica = yield 'Qual sua música favorita de tal?'
    return `Seu cantor preferido é ${cantor}, e a música favorita é ${musica}`
}

const pergunta = perguntas();
console.log(pergunta.next().value)
console.log(pergunta.next('Kanye').value);
console.log(pergunta.next('Come to Life').value)
