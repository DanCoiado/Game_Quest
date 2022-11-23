import './CSS/Jogo.css';

function Jogo() {
/*
    // --------------   TROCAR A IMAGEM DE FUNDO DO TABULEIRO  ------------------------------------------
	function trocaFundo() {
        //alert('testetrocaFundo');
            const bg = [
                "url('https://wallpapercave.com/wp/wp7603779.jpg')",
                "url('https://wallpapercave.com/wp/wp4546018.jpg')",
                "url('https://wallpapercave.com/wp/wp2446708.jpg')",
                "url('https://wallpapercave.com/wp/wp6976839.jpg')",
                "url('https://wallpapercave.com/wp/wp2454485.jpg')",  
                "url('https://wallpapercave.com/wp/wp7603798.jpg')",
                "url('https://wallpapercave.com/wp/wp7603832.jpg')",
                "url('https://wallpapercave.com/wp/wp7603867.jpg')",
                "url('https://wallpapercave.com/wp/wp7603897.jpg')",
                "url('https://wallpapercave.com/wp/wp7603941.jpg')"  
                ]
        
        const segundoAtual = new Date().toLocaleTimeString().substr(-1, 1);
        //alert(segundoAtual);
        document.getElementById("tabuleiro").style.backgroundImage = bg[segundoAtual];
    }
    // --------------------------------------------------------------------------------------------------------	//	
    
    
    //----------------- REINICIAR O JOGO (RELOAD THE PAGE) -----------------------------------------------
    
        function reiniciar() {
            if (confirm('Tem certeza que quer mesmo reiniciar o jogo?')) {
                console.log('OK');
                window.location.reload(true);
            } else {
                console.log('Cancel');
            }
    }
    //---------------------------------------------------------------------------------------------------//		
        
        
    // POSIÇÃO ATUAL
        function fposAtual(vz) {
            //alert('É a vez do jogador '+vz+' - esse é o valor do parametro vz passado para função fposAtual() pela função vez()');
            //condição
            
            if (vz == 1) {
                var aa = parseInt(document.getElementById('posAtualp1').innerHTML); 
            //alert('Valor de aa - posição atual puxada do span html pela função fposAtual() = ' + aa)
            } else {
                var aa = parseInt(document.getElementById('posAtualp2').innerHTML);
            }
            return aa;
    }
    
    // ----------  AVANÇAR NAS CASAS DO TABULEIRO  ---------------------------------------------------------------
        function avancar(posA, c, vz) {
            //alert('avancarTeste');
            //alert(document.getElementById('posAtual').innerHTML);
            //alert("PosA é = "+posA);
            //alert("c é = "+c);
            
            //alert('É a vez do jogador '+vz);
            
            // Cálculo Posição final: recebe posição inicial + dado 
            var posF = posA + c;
            
            // Colocar img de cade jogador na respectiva casa
            var a = document.createElement("img");
            a.width = 42;
            a.height = 42;
            //condição
            if (vz == 1) {
              a.src = "img/p1.png"; 
              a.setAttribute('id', 'imgP1'+posF); 
            } else {
              a.src = "img/p2.png"; 
              a.setAttribute('id', 'imgP2'+posF); 
            }
                            
            //document.getElementById("div"+posA).remove();
            //document.getElementById("imgP1").remove();
            document.getElementById("div"+posF).appendChild(a);
            
            //condição
            if (vz == 1) {		
                document.getElementById('posAtualp1').innerHTML = posF; 
            } else {		
                document.getElementById('posAtualp2').innerHTML = posF;
            }
        
            //alert(document.getElementById('imgP1'+posA).src);
        
            //var imgTirar = document.getElementById('imgP1'+posA).parentNode.removeChild(imgTirar);
            
            //ggg = document.getElementById('imgP1'+posA).id;
            //alert(ggg);
            document.getElementById('btnRolar').style.display = 'inline-block';
            document.getElementById('btnAvancar').style.display = 'none';
            document.getElementById('valorDado').innerHTML = "";
    
            
            if (posA == 0) {
                //alert('Posição inicial nesta jogada para esse jogador é '+ posA + 'agora.');
            } else {
                if (vz == 1) {
                    //alert('Posição inicial nesta jogada para esse jogador é '+ posA + 'agora.');
                    document.getElementById('imgP1'+posA).style.display ='none'; //condição
                } else {
                    document.getElementById('imgP2'+posA).style.display ='none'; //condição
                }
            }
            
            //alert('antes da condição : É a vez do jogador '+vz);
            
            // Trocar a vez do jogador , trocando a cor de fundo para ficar mais claro de quem é a vez
            if (vz == 1) {
                document.getElementById('vez').innerHTML = "2";
                //alert('É a vez do jogador '+vz);
                document.getElementById('divp2').style.backgroundColor = "pink";
                document.getElementById('divp1').style.backgroundColor = "rgba(0,0,0,0)";
            } else {
                document.getElementById('vez').innerHTML = "1";
                //alert('É a vez do jogador '+vz);
                document.getElementById('divp1').style.backgroundColor = "lightblue";
                document.getElementById('divp2').style.backgroundColor = "rgba(0,0,0,0)" ;
            }
            
            //document.getElementById('imgP1'+posA).style.visibility ='hidden';
            
            if (posF >= 15) {
                alert("Acabou! Jogador " + vz + "venceu!");
                document.getElementById('btnRolar').style.display = 'none';
                document.getElementById('btnAvancar').style.display = 'none';
                document.getElementById('imgDado').style.display = 'none';
            }
                
            // Jogar do dado de novo 	
            //document.getElementById("imgDado").src = "img/roll0.png";
                document.getElementById("imgDado").style.visibility = 'hidden';
                document.getElementById("imgRoll").style.visibility = 'visible';
        }
    
    // --------------------------------------------------------------------------------------------------------	//	
            
                
    // ----------  ROLAR O DADO  ---------------------------------------------------------------------------------
    
        function rolarDado() {
            //alert('rolarDadoTeste');
            var d =  1 + Math.floor(Math.random() * 6);
            //alert(d);
            document.getElementById('valorDado').innerHTML = d;
            //return d;
            document.getElementById('btnAvancar').style.display = 'inline-block';
            document.getElementById('btnRolar').style.display = 'none';
            
            // Imagem do dado
                document.getElementById("imgRoll").style.visibility = 'hidden';
                document.getElementById("imgDado").src = "img/dice"+d+".png";
                document.getElementById("imgDado").style.visibility = 'visible';
        }
        
        // Pegar o valor do dado que consta no elemento SPAN 
        function pegarDado() {
            return parseInt(document.getElementById('valorDado').innerHTML);
        }
    
        // Pegar o valor da vez (1 ou 2 ) que consta no elemento SPAN
        function vez() {
            return parseInt(document.getElementById('vez').innerHTML);
        }
    // --------------------------------------------------------------------------------------------------------	//	
    
    


    return ( 
    
    <div id='main'>

        <div class="container" id="tabuleiro">			
                            <div id="div5"  class="artEnt" >5</div>  		
                            <div id="div15" class="espLaz">Fim</div>  		
                            <div id="div4" class="mundo">4</div>  			
                            <div id="div6"  class="cieTec">6</div>  		
                            <div id="div14"  class="socied">14</div>  		
                            <div id="div3" class="artEnt cieTec">3</div>  	
                            <div id="div7" class="socied">7</div>  			
                            <div id="div13" class="varied">13</div>  		
                            <div id="div2" class="socied">2</div>  			
                            <div id="div8"  class="espLaz">8</div>      	
                            <div id="div12"  class="espLaz cieTec">12</div> 
                            <div id="div1" class="mundo">1</div>    		
                            <div id="div9" class="artEnt">9</div>  			
                            <div id="div11" class="artEnt">11</div>  		
                            <div id="div0" class="espLaz">Início</div>  	
                            <div id="div10"  class="socied">10</div>  		
                        
                        
                        </div>
                        
                        

                        <div> Categorias:
                            <div class="mundo categ"  style=""> Mundo </div>
                            <div class="artEnt categ" style=""> Arte e Entretenimento</div>
                            <div class="socied categ" style=""> Sociedade </div>
                            <div class="cieTec categ" style=""> Ciência e Tecnologia</div>
                            <div class="espLaz categ" style=""> Esporte e Lazer</div>
                            <div class="varied categ" style=""> Variedades</div>
                            
                        
                            
                        </div>	
                        
                        <div> Opções:
                            <button class="btn" onclick="trocaFundo();"> Trocar Imagem </button>
                            <input class="btn" id="btnReinicia" type="button" value="Reiniciar Jogo" onClick="reiniciar()"></input>
                        
                        </div>  
                        
                        
                        
                        <div id="divp1">
                        <span>Jogador 1</span>
                        <img id="player1" src="https://lojagrow.vteximg.com.br/arquivos/ids/168598-1000-1000/Peao-Grow-Azul.png?v=637487474586500000" width="64px" height="64px"></img>
                        <span id="posAtualp1"> 0 </span> 
                        </div>
                        

                        <div id="divp2">
                        <span>Jogador 2</span>
                        <img id="player2" src="https://lojagrow.vteximg.com.br/arquivos/ids/168597-1000-1000/Peao-Grow-Vermelho.png?v=637487474175630000" width="64px" height="64px"> </img>
                        <span id="posAtualp2"> 0 </span> 
                        </div>
                        
                            
                        
                        
                        <label for='vez'> Vez do Jogador </label>
                        <span id='vez'> 1 </span>
                        
                        <button class="btn" id='btnAvancar' onclick="avancar(fposAtual(vez()), pegarDado(), vez());"> Avançar </button>
                        
                       
                        <button class="btn" id='btnRolar' onclick="rolarDado();"> Rolar o dado! </button>

                        <span id="valorDado">  </span>
                        <img id="imgDado" src="img/roll0.png" width="64" height="64"> </img>
                        <img id="imgRoll" src="img/roll0.png" width="64" height="64"> </img>
    </div>
    
    )
    */
}
    
export default Jogo