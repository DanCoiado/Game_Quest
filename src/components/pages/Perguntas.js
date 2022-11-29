import './CSS/Perguntas.css';
import ficha_1 from './../../images//ficha1.svg';
import ficha_2 from './../../images//ficha2.svg';
import ficha_3 from './../../images//ficha3.svg';
import ficha_4 from './../../images//ficha4.svg';
import ficha_5 from './../../images//ficha5.svg';
import ficha_uti from './../../images//fichautilizada.svg';

import CadastroForm from '../Formularios/CadastroForm';
import LinkButton from '../layout/LinkButton';

function Perguntas() {


function ficha1(){
    var f1 = document.getElementById('f1');
    var f2 = document.getElementById("f2");
    var f3 = document.getElementById("f3");
    var f4 = document.getElementById("f4");
    var f5 = document.getElementById("f5");
/*
    switch(){
        case 1:        
            break;
        case 2:
            break;
    }
*/
    console.log(f1.value);
    if(!(document.getElementById("ficha1_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
        if(!(document.getElementById("ficha2_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
            if(!(document.getElementById("ficha3_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                if(!(document.getElementById("ficha4_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                    if(!(document.getElementById("ficha5_img").src== 'http://localhost:3000/images//fichautilizada.svg')){ 
                            document.getElementById("ficha1_img").src= './../../images//fichautilizada.svg'
                            console.log(document.getElementById("ficha1_img").src);
                            document.getElementById("f2").disabled = true;
                            document.getElementById("f3").disabled = true;
                            document.getElementById("f4").disabled = true;
                            document.getElementById("f5").disabled = true;

                            document.getElementById("v1").disabled = false;
                            document.getElementById("v2").disabled = false;
                            document.getElementById("v3").disabled = false;
                            document.getElementById("v4").disabled = false;
                            document.getElementById("v5").disabled = false;
    }
    }
    }
    }
    }


}


function ficha2(){
    var f2 = document.getElementById('f2');


    console.log(f2.value)
    console.log(document.getElementById("ficha2_img").src)

    if(!(document.getElementById("ficha1_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
        if(!(document.getElementById("ficha2_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
            if(!(document.getElementById("ficha3_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                if(!(document.getElementById("ficha4_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                    if(!(document.getElementById("ficha5_img").src== 'http://localhost:3000/images//fichautilizada.svg')){ 
                        document.getElementById("ficha2_img").src= './../../images//fichautilizada.svg'
                        console.log(document.getElementById("ficha2_img").src)
                        document.getElementById("f1").disabled = true;
                        document.getElementById("f3").disabled = true;
                        document.getElementById("f4").disabled = true;
                        document.getElementById("f5").disabled = true;

                        document.getElementById("v1").disabled = false;
                        document.getElementById("v2").disabled = false;
                        document.getElementById("v3").disabled = false;
                        document.getElementById("v4").disabled = false;
                        document.getElementById("v5").disabled = false;
    }
    }
    }
    }
    }
}

function ficha3(){
    var f3 = document.getElementById('f3');


    console.log(f3.value);

    if(!(document.getElementById("ficha1_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
        if(!(document.getElementById("ficha2_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
            if(!(document.getElementById("ficha3_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                if(!(document.getElementById("ficha4_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                    if(!(document.getElementById("ficha5_img").src== 'http://localhost:3000/images//fichautilizada.svg')){ 

                        document.getElementById("ficha3_img").src= './../../images//fichautilizada.svg'
                        document.getElementById("f1").disabled = true;
                        document.getElementById("f2").disabled = true;
                        document.getElementById("f4").disabled = true;
                        document.getElementById("f5").disabled = true;

                        document.getElementById("v1").disabled = false;
                        document.getElementById("v2").disabled = false;
                        document.getElementById("v3").disabled = false;
                        document.getElementById("v4").disabled = false;
                        document.getElementById("v5").disabled = false;
    }
    }
    }
    }
    }
}


function ficha4(){
    var f4 = document.getElementById('f4');


    console.log(f4.value);

    if(!(document.getElementById("ficha1_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
        if(!(document.getElementById("ficha2_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
            if(!(document.getElementById("ficha3_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                if(!(document.getElementById("ficha4_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                    if(!(document.getElementById("ficha5_img").src== 'http://localhost:3000/images//fichautilizada.svg')){ 

                        document.getElementById("ficha4_img").src= './../../images//fichautilizada.svg'
                        document.getElementById("f1").disabled = true;
                        document.getElementById("f2").disabled = true;
                        document.getElementById("f4").disabled = true;
                        document.getElementById("f5").disabled = true;

                        document.getElementById("v1").disabled = false;
                        document.getElementById("v2").disabled = false;
                        document.getElementById("v3").disabled = false;
                        document.getElementById("v4").disabled = false;
                        document.getElementById("v5").disabled = false;
    }
    }
    }
    }
    }
}


function ficha5(){
    var f5 = document.getElementById('f5');


    console.log(f5.value);

    if(!(document.getElementById("ficha1_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
        if(!(document.getElementById("ficha2_img").src== 'http://localhost:3000/images//fichautilizada.svg') ){
            if(!(document.getElementById("ficha3_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                if(!(document.getElementById("ficha4_img").src== 'http://localhost:3000/images//fichautilizada.svg')){
                    if(!(document.getElementById("ficha5_img").src== 'http://localhost:3000/images//fichautilizada.svg')){ 

                        document.getElementById("ficha5_img").src= './../../images//fichautilizada.svg'
                        document.getElementById("f1").disabled = true;
                        document.getElementById("f2").disabled = true;
                        document.getElementById("f4").disabled = true;
                        document.getElementById("f5").disabled = true;

                        document.getElementById("v1").disabled = false;
                        document.getElementById("v2").disabled = false;
                        document.getElementById("v3").disabled = false;
                        document.getElementById("v4").disabled = false;
                        document.getElementById("v5").disabled = false;
    }
    }
    }
    }
    }
}

    function test1(){

    var v1 = document.getElementById('v1');
    var v2 = document.getElementById('v2');
    var v3 = document.getElementById('v3');
    var v4 = document.getElementById('v4');
    var v5 = document.getElementById('v5');




    
        console.log(v1.value);


        if(v1.value == 'true') {
            console.log('passou')
            v1.style.color = 'green';
            document.getElementById("v1").disabled = true;
            document.getElementById("v2").disabled = true;
            document.getElementById("v3").disabled = true;
            document.getElementById("v4").disabled = true;
            document.getElementById("v5").disabled = true;
            document.getElementsByClassName("alternativa").disabled = true
            v1.style.cssText =

            'background-color: green;' +
            'border: 1px solid green';
            window.document.getElementById('v1').style.background = 'green';


        }
        else {
            document.getElementById("v1").disabled = true;
            document.getElementById("v2").disabled = true;
            document.getElementById("v3").disabled = true;
            document.getElementById("v4").disabled = true;
            document.getElementById("v5").disabled = true;
            v1.style.cssText =

            'background-color: red;' +
            'border: 1px solid red';
            window.document.getElementById('v1').style.background = 'red';

        }

        if(v2.value == 'true') {
            console.log('passou')
            v2.style.color = 'green';
            v2.style.cssText =

            'background-color: green;' +
            'border: 1px solid green';
            window.document.getElementById('v2').style.background = 'green';


        }

        if(v3.value == 'true') {
            console.log('passou')
            v3.style.color = 'green';
            v3.style.cssText =

            'background-color: green;' +
            'border: 1px solid green';
            window.document.getElementById('v3').style.background = 'green';


        }
        if(v4.value == 'true') {
            console.log('passou')
            v4.style.color = 'green';
            v4.style.cssText =

            'background-color: green;' +
            'border: 1px solid green';
            window.document.getElementById('v4').style.background = 'green';


        }
        if(v5.value == 'true') {
            console.log('passou')
            v5.style.color = 'green';
            v5.style.cssText =

            'background-color: green;' +
            'border: 1px solid green';
            window.document.getElementById('v5').style.background = 'green';


            }

        const myTimeout = setTimeout(fecharPopUp, 2000);

        
    }


    function test2(){
        var v1 = document.getElementById('v1');
        var v2 = document.getElementById('v2');
        var v3 = document.getElementById('v3');
        var v4 = document.getElementById('v4');
        var v5 = document.getElementById('v5');
 
         console.log(v2.value);




         if(v2.value == 'true') {
             console.log('passou')
             v2.style.color = 'green';
             var click = true;
             document.getElementById("v1").disabled = true;
             document.getElementById("v2").disabled = true;
             document.getElementById("v3").disabled = true;
             document.getElementById("v4").disabled = true;
             document.getElementById("v5").disabled = true;
             v2.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v2').style.background = 'green';
 
 
         }
         else {
            var click = false;
            document.getElementById("v1").disabled = true;
            document.getElementById("v2").disabled = true;
            document.getElementById("v3").disabled = true;
            document.getElementById("v4").disabled = true;
            document.getElementById("v5").disabled = true;
             v2.style.cssText =

            'background-color: red;' +
            'border: 1px solid red';
             window.document.getElementById('v2').style.background = 'red';
 
         }
 
         if(v1.value == 'true') {
             console.log('passou')
             v1.style.color = 'green';
             v1.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v1').style.background = 'green';
 
 
         }
 
         if(v3.value == 'true') {
             console.log('passou')
             v3.style.color = 'green';
             v3.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v3').style.background = 'green';
 
 
         }
         if(v4.value == 'true') {
             console.log('passou')
             v4.style.color = 'green';
             v4.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v4').style.background = 'green';
 
 
         }
         if(v5.value == 'true') {
             console.log('passou')
             v5.style.color = 'green';
             v5.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v5').style.background = 'green';
 
 
         }
        
         const myTimeout = setTimeout(fecharPopUp, 2000);
 
 
         
    }

    function test3(){
        var v1 = document.getElementById('v1');
        var v2 = document.getElementById('v2');
        var v3 = document.getElementById('v3');
        var v4 = document.getElementById('v4');
        var v5 = document.getElementById('v5');
         console.log(v3.value);

         if(v3.value == 'true') {
             console.log('passou')
             v3.style.color = 'green';
             var click = true;
             document.getElementById("v1").disabled = true;
             document.getElementById("v2").disabled = true;
             document.getElementById("v3").disabled = true;
             document.getElementById("v4").disabled = true;
             document.getElementById("v5").disabled = true;
             v3.style.cssText =
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v3').style.background = 'green';
 
 
         }
         else {
            var click = false;
            v3.value = 'false';
            console.log(v3.value);
            document.getElementById("v1").disabled = true;
            document.getElementById("v2").disabled = true;
            document.getElementById("v3").disabled = true;
            document.getElementById("v4").disabled = true;
            document.getElementById("v5").disabled = true;
             v3.style.cssText =
 
             'background-color: red;' +
             'border: 1px solid red';
             window.document.getElementById('v3').style.background = 'red';
             
 
         }
 
         if(v2.value == 'true') {
             console.log('passou')
             v2.style.color = 'green';
             v2.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v2').style.background = 'green';
 
 
         }
 
         if(v4.value == 'true') {
             console.log('passou')
             v4.style.color = 'green';
             v4.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v4').style.background = 'green';
 
 
         }
         if(v4.value == 'true') {
             console.log('passou')
             v4.style.color = 'green';
             v4.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v4').style.background = 'green';
 
 
         }
         if(v5.value == 'true') {
             console.log('passou')
             v5.style.color = 'green';
             v5.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v5').style.background = 'green';
 
 
         }
        
         const myTimeout = setTimeout(fecharPopUp, 2000);
        }
 
         
    

    function test4(){
        var v1 = document.getElementById('v1');
        var v2 = document.getElementById('v2');
        var v3 = document.getElementById('v3');
        var v4 = document.getElementById('v4');
        var v5 = document.getElementById('v5');
 
         console.log(v4.value);



         if(v4.value == 'true') {
             console.log('passou')
             v4.style.color = 'green';
             document.getElementById("v1").disabled = true;
             document.getElementById("v2").disabled = true;
             document.getElementById("v3").disabled = true;
             document.getElementById("v4").disabled = true;
             document.getElementById("v5").disabled = true;
             v4.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v4').style.background = 'green';
 
 
         }
         else {
            document.getElementById("v1").disabled = true;
            document.getElementById("v2").disabled = true;
            document.getElementById("v3").disabled = true;
            document.getElementById("v4").disabled = true;
            document.getElementById("v5").disabled = true;
             v4.style.cssText =
 
             'background-color: red;' +
             'border: 1px solid red';
             window.document.getElementById('v4').style.background = 'red';
 
         }
 
         if(v2.value == 'true') {
             console.log('passou')
             v2.style.color = 'green';
             v2.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v2').style.background = 'green';
 
 
         }
 
         if(v3.value == 'true') {
             console.log('passou')
             v3.style.color = 'green';
             v3.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v3').style.background = 'green';
 
 
         }
         if(v1.value == 'true') {
             console.log('passou')
             v1.style.color = 'green';
             v1.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v1').style.background = 'green';
 
 
         }
         if(v5.value == 'true') {
             console.log('passou')
             v5.style.color = 'green';
             v5.style.cssText =
 
             'background-color: green;' +
             'border: 1px solid green';
             window.document.getElementById('v5').style.background = 'green';
 
 
         }
        
         const myTimeout = setTimeout(fecharPopUp, 2000);
    }

    function test5(){
            var v1 = document.getElementById('v1');
            var v2 = document.getElementById('v2');
            var v3 = document.getElementById('v3');
            var v4 = document.getElementById('v4');
            var v5 = document.getElementById('v5');
     
             console.log(v5.value);



             if(v5.value == 'true') {
                 console.log('passou')
                 v5.style.color = 'green';
                 document.getElementById("v1").disabled = true;
                 document.getElementById("v2").disabled = true;
                 document.getElementById("v3").disabled = true;
                 document.getElementById("v4").disabled = true;
                 document.getElementById("v5").disabled = true;
                 v5.style.cssText =
     
                 'background-color: green;' +
                 'border: 1px solid green';
                 window.document.getElementById('v5').style.background = 'green';
     
     
             }
             else {
                document.getElementById("v1").disabled = true;
                document.getElementById("v2").disabled = true;
                document.getElementById("v3").disabled = true;
                document.getElementById("v4").disabled = true;
                document.getElementById("v5").disabled = true;
                 v5.style.cssText =
     
                 'background-color: red;' +
                 'border: 1px solid red';
                 window.document.getElementById('v5').style.background = 'red';
     
             }
     
             if(v2.value == 'true') {
                 console.log('passou')
                 v2.style.color = 'green';
                 v2.style.cssText =
     
                 'background-color: green;' +
                 'border: 1px solid green';
                 window.document.getElementById('v2').style.background = 'green';
     
     
             }
     
             if(v3.value == 'true') {
                 console.log('passou')
                 v3.style.color = 'green';
                 v3.style.cssText =
     
                 'background-color: green;' +
                 'border: 1px solid green';
                 window.document.getElementById('v3').style.background = 'green';
     
     
             }
             if(v4.value == 'true') {
                 console.log('passou')
                 v4.style.color = 'green';
                 v4.style.cssText =
     
                 'background-color: green;' +
                 'border: 1px solid green';
                 window.document.getElementById('v4').style.background = 'green';
     
     
             }
             if(v1.value == 'true') {
                 console.log('passou')
                 v1.style.color = 'green';
                 v1.style.cssText =
     
                 'background-color: green;' +
                 'border: 1px solid green';
                 window.document.getElementById('v1').style.background = 'green';
     
     
             }
            
             const myTimeout = setTimeout(fecharPopUp, 2000);
     
     
             
     }
             
         


    function fecharPopUp(){
        document.getElementById('popup').style.display = 'none'
    }

    function abrirPopUp(){
        var v1 = document.getElementById('v1');
        var v2 = document.getElementById('v2');
        var v3 = document.getElementById('v3');
        var v4 = document.getElementById('v4');
        var v5 = document.getElementById('v5');

        v1.style.color = 'green';
            v1.style.cssText =

            'background: linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);' +
            'border-radius : 15vh;'
            window.document.getElementById('v1').style.background = 'linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);';

        v2.style.color = 'green';
            v2.style.cssText =

            'background: linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);' +
            'border-radius : 15vh;'
            window.document.getElementById('v2').style.background = 'linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);';


        v3.style.color = 'green';
            v3.style.cssText =

            'background: linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);' +
            'border-radius : 15vh;'
            window.document.getElementById('v3').style.background = 'linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);';

        v4.style.color = 'green';
            v4.style.cssText =

            'background: linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);' +
            'border-radius : 15vh;'
            window.document.getElementById('v4').style.background = 'linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);';

        v5.style.color = 'green';
            v5.style.cssText =

            'background: linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);' +
            'border-radius : 15vh;'
            window.document.getElementById('v5').style.background = 'linear-gradient(180deg, #9049EC 0%, #661DC4 50%, #9049EC 100%);';




        document.getElementById('popup').style.display = 'block';
        document.getElementById("v1").disabled = true;
        document.getElementById("v2").disabled = true;
        document.getElementById("v3").disabled = true;
        document.getElementById("v4").disabled = true;
        document.getElementById("v5").disabled = true;

        document.getElementById("v1").disabled = false;
        document.getElementById("v2").disabled = false;
        document.getElementById("v3").disabled = false;
        document.getElementById("v4").disabled = false;
        document.getElementById("v5").disabled = false;

        
    }

    var timeLeft = 30;
    var elem = document.getElementById('some_div');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1 ) {
            clearTimeout(timerId);
        } else {
            document.getElementById("seconds").innerHTML = timeLeft + ' segundos';
            timeLeft--;
        }


/*

    function answer(){
        var resp = document.getElementsById('teste').value;
        console.log(resp)

            
    }


    let el = document.getElementsById('teste');
    // alterando uma propriedade
    el.style.color = 'red';
    // varias propriedades
    el.style.cssText =
    'color: blue;' +
    'background-color: yellow;' +
    'border: 1px solid magenta';
    }
*/

/*
    var countDownDate = new Date("Jan 6, 2024 15:37:").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime() + 30;
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds

      var seconds = Math.floor((distance % (1000 * 30)) / 1000);
      // Output the result in an element with id="demo"
      document.getElementById("seconds").innerHTML =  seconds + "s ";
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("seconds").innerHTML = "EXPIRED";
      }
    });

    
*/


}

const myTimeout = setTimeout(fecharPopUp, 31000);

    return(
    <div>
        <button onClick={abrirPopUp}>Abrir Pop-up</button>
            <div id='Perguntas'>
                
                <div className='perguntas-FundoTotal'>
                    <div className="perguntas-FundoApp" >
                        <div id='popup' className='perguntas-FundoBranco'>
                            <div id='Title'>
                            <h2>Sua vez! Escolha um ficha:</h2>
                            <span id="seconds"></span>
                            </div>
                            <div id='fichas'>
                                <button className='f-ficha' id='f1' value='1' onClick={ficha1}><img className='ficha' id='ficha1_img'  src={ficha_1}/></button>
                                <button className='f-ficha' id='f2' value='2' onClick={ficha2}><img className='ficha' id='ficha2_img' src={ficha_2}/></button>
                                <button className='f-ficha' id='f3' value='3' onClick={ficha3}><img className='ficha' id='ficha3_img' src={ficha_3}/></button>
                                <button className='f-ficha' id='f4' value='4' onClick={ficha4}><img className='ficha' id='ficha4_img' src={ficha_4}/></button>
                                <button className='f-ficha' id='f5' value='5' onClick={ficha5}><img className='ficha' id='ficha5_img' src={ficha_5}/></button>

                            { /* <button className='ficha' id='f1' >1</button>
                                <button className='ficha' id='f2' >2</button>
                                <button className='ficha' id='f3' >3</button>
                                <button className='ficha' id='f4' >4</button>
                                <button className='ficha' id='f5' >5</button> */}
                            </div>  
                    

                            <div id='Caixa-Perguntas'>
                                Perguntas
                            </div>

                            <div id='alternativas'>
                                <button className='alternativa' id='v1' onClick={test1} type="submit" /*disabled={false}*/  value={false}>Alternativa 1</button>
                                <button className='alternativa' id='v2' onClick={test2} type="submit" /*disabled={false}*/  value={false}>Alternativa 2</button>
                                <button className='alternativa' id='v3' onClick={test3} type="submit" /*disabled={false}*/  value={false}>Alternativa 3</button>
                                <button className='alternativa' id='v4' onClick={test4} type="submit" /*disabled={false}*/  value={false}>Alternativa 4</button>
                                <button className='alternativa' id='v5' onClick={test5} type="submit" /*disabled={false}*/ value={true}>Alternativa 5</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Perguntas
