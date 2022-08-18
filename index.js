let ejex1  = [0,0,0];
let ejex2 = [0,0,0];
let ejex3  = [0,0,0];
const tateti = [ejex1, ejex2, ejex3]
const xganador = [`X`,`X`,`X`]
const oganador = [`O`,`O`,`O`]
let x=true;
let y=0;



process.stdin.on('data', data => {
    let arraystr = data.toString().split(',')
  

    if(arraystr[1]*1 == 0){
        y=1;
    }
    if((arraystr[0]*1)>=3 ||(arraystr[1]*1)>=3 || (tateti[arraystr[0]*1][arraystr[1]*1]) == `X` ||(tateti[arraystr[0]*1][arraystr[1]*1]) == `O`   ){
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

  
    if(xganador.toString() == ejex1.toString() ||xganador.toString() == ejex2.toString() || xganador.toString() == ejex3.toString()  ){
        console.log(`El jugador X gana el juego`)
        process.exit();
    }
    if(oganador.toString() == ejex1.toString() ||oganador.toString() == ejex2.toString() || oganador.toString() == ejex3.toString() ){
        console.log(`El jugador X gana el juego`)
        process.exit();
    }

 



    
            }
   )





