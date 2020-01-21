function Pessoa(){
    this.idade = 0
    
    //Função com tempo
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}


new Pessoa