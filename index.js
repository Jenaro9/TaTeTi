let ejex1  = ["0","0","0"];
let ejex2 = ["0","0","0"];
let ejex3  = ["0","0","0"];
const tateti = [ejex1, ejex2, ejex3]
const xganador = [`X`,`X`,`X`]
const oganador = [`O`,`O`,`O`]
let diagonal1 = [];
let diagonal2 = []; 
let vertical1;
let vertical2;
let vertical3;

let x=true;
let y=0;



process.stdin.on('data', data => {
    let arraystr = data.toString().split(',')
   

    if(arraystr[1]*1 == 0){
        y=1;
    }
    
    // console.log(data.toString().split(',')[1].replace("\r\n", '') || 'vacio')
// console.log(arraystr)
   

    if(arraystr.length!==2){ 
        console.log(`Ingrese 2 numeros`)
        return
    }
    arraystr[1] = arraystr[1].replace("\r\n", '') || 'vacio'; 
    if(arraystr[1]==="vacio"){
console.log(`Ingrese 2 numeros`)
        return
    }


    if(  arraystr[0]*1 >=3 || arraystr[1]*1 >=3) {
        console.log(`ingrese un numero valido`)
        return
    }
  

    if( tateti[arraystr[0]*1][arraystr[1]*1] == `X` || tateti[arraystr[0]*1][arraystr[1]*1] == `O`) {
        console.log(`ingrese un numero valido`)
        return
    }
   


    if(x == true){
        


        tateti[arraystr[0]*1].splice([arraystr[1]*1],[((arraystr[1]*1)+y)], 'X')
        tateti.forEach(element => console.log(element));
        x = !x;
        y=0;
    }
   
    
    else if(x == false){
     

        tateti[arraystr[0]*1].splice([arraystr[1]*1],[((arraystr[1]*1)+y)], 'O')
        tateti.forEach(element => console.log(element));
        x = true;
        y=0;
    }

 diagonal1  = [ejex1[0],ejex2[1],ejex3[2]];
 diagonal2  = [ejex1[2],ejex2[1],ejex3[0]];

//horizontal
    if(xganador.toString() == ejex1.toString() || xganador.toString() == ejex2.toString() || xganador.toString() == ejex3.toString() ){
        console.log(`El jugador X gana el juego en horizontal`)
        process.exit();
    }

     if(oganador.toString() == ejex1.toString() || oganador.toString() == ejex2.toString() || oganador.toString() == ejex3.toString() ){
        console.log(`El jugador O gana el juego`)
        process.exit();
    }

//vertical
vertical1=[ejex1[0], ejex2[0], ejex3[0]]
vertical2=[ejex1[1], ejex2[1], ejex3[1]]
vertical3=[ejex1[2], ejex2[2], ejex3[2]]

    if(xganador.toString() == vertical1.toString() || xganador.toString() == vertical2.toString() || xganador.toString() == vertical3.toString() ){
        console.log(`El jugador X gana el juego en vertical`)
        process.exit();
    }
      if(oganador.toString() == vertical1.toString() || oganador.toString() == vertical2.toString() || oganador.toString() == vertical3.toString() ){
        console.log(`El jugador O gana el juego`)
        process.exit();
    }
//diagonal
    if( diagonal1.toString()==xganador.toString() || diagonal2.toString()==xganador.toString()){
       console.log(`El jugador X gana el juego`)
        process.exit();
    }
    if( diagonal1.toString()==oganador.toString() || diagonal2.toString()==oganador.toString()){
       console.log(`El jugador O gana el juego`)
        process.exit();
    }
            
})





