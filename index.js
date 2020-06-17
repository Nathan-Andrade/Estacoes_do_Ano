function carregar(){
  var msg = window.document.getElementById('mensage')
  var image = window.document.getElementById('img')
  var data = new Date()
  var estacao = data.getMonth()
  
  if (estacao >= 2 && estacao < 5){
    //Estação da Primavera
    image.src = 'assets/primavera.png'
    msg.innerText = 'Estamos na Primavera!'
    document.body.style.background = '#FF69B4';
  }else if (estacao >= 5 && estacao < 8){
    //Estaçao
    image.src = 'assets/verao1.png'
    msg.innerText = 'Estamos no Verão!'
    document.body.style.background = '#DF3A01';
  }else if  (estacao >= 8 && estacao < 11){
    image.src = 'assets/outono.png'
    msg.innerText = 'Estamos no Outono!'
    document.body.style.background = '#FF4500';
  }else{
    image.src = 'assets/inverno.png'
    msg.innerText = 'Estamos no Inverno!'
  }
}
  