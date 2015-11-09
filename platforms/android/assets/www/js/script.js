<!--
//Contador de palavras no Campo
limite=20;	
function soma() { 
	var mais_um=eval(document.form1.texto.value.length-1); 
	mais_um++;
	if (document.form1.texto.value.length>limite) {
		document.form1.texto.value='';		
		document.form1.texto.value=valor_limite;				
		alert("Chegou no limite de "+limite+" caracteres");
	}else{
		  document.form1.exibe.value='';	
		  document.form1.exibe.value=eval(mais_um);	
		  valor_limite=document.form1.texto.value;		
		  document.form1.exibe2.value='';	
          document.form1.exibe2.value=(limite-mais_um);			  
	}	
	document.form1.texto.focus();
} 
function mostra_tamanho(){
	document.form1.exibe2.value=limite;
}


//Função para imprimir
var da = (document.all) ? 1 : 0;
var pr = (window.print) ? 1 : 0;
var mac = (navigator.userAgent.indexOf("Mac") != -1); 

function printPage()
{
  if (pr) // NS4, IE5
    window.print()
  else if (da && !mac) // IE4 (Windows)
    vbPrintPage()
  else // other browsers
    alert("Desculpe seu browser n?o suporta esta fun??o. Por favor utilize a barra de trabalho para imprimir a p?gina.");
  return false;
}

if (da && !pr && !mac) with (document) {
  writeln('<OBJECT ID="WB" WIDTH="0" HEIGHT="0" CLASSID="clsid:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');
  writeln('<' + 'SCRIPT LANGUAGE="VBScript">');
  writeln('Sub window_onunload');
  writeln('  On Error Resume Next');
  writeln('  Set WB = nothing');
  writeln('End Sub');
  writeln('Sub vbPrintPage');
  writeln('  OLECMDID_PRINT = 6');
  writeln('  OLECMDEXECOPT_DONTPROMPTUSER = 2');
  writeln('  OLECMDEXECOPT_PROMPTUSER = 1');
  writeln('  On Error Resume Next');
  writeln('  WB.ExecWB OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER');
  writeln('End Sub');
  writeln('<' + '/SCRIPT>');
}
//Fim da função

//Função geral para formatar dados
function FormataDado(campo,tammax,pos,teclapres){
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "-", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length ;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){ tam = tam - 1 ; }
			
	if ( tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		document.form1[campo].value = vr ;}
		if ( tam > pos && tam <= tammax ){
			document.form1[campo].value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );}
	}
	//alert("campo: " + document.form[campo+1].name);
	if ( !teclapres.shiftKey && tecla == 9 && document.form1[campo+1].name == "senhaConta" && document.applets['tclJava'] ){
		//alert("aki 1");
			document.applets['tclJava'].setFocus();
	}
}

function FormataValor(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
	}
		
}

//Máscara de data
function FormataData(campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
			document.form1[campo].value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam <= 10 )
			document.form1[campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 ); 
	}
}

function FormataPercentual(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 3 ){ 
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 3) && (tam <= 6) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 3 ) + ',' + vr.substr( tam - 3, tam ) ; }
	}		
	
}

function FormataCpf(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}		
}

function FormataCartaoCredito(campo, teclapres) {
    var tammax = 16;
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;

	if ( tecla == 8 || (tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) )
	{
		vr = vr.replace( "/", "" );
		vr = vr.replace( "/", "" );
		vr = vr.replace( ",", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( ".", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		vr = vr.replace( "-", "" );
		tam = vr.length;

		if (tam < tammax && tecla != 8)
		   {tam = vr.length + 1 ; }

		if (tecla == 8 ) {tam = tam - 1 ; }

		if ( tam < 5 )
		   { document.form1[campo].value = vr ; }
	 	if ( ( tam >  4 ) && ( tam < 9 ) )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, tam-4 ) ; }
	 	if ( ( tam >  8 ) && ( tam < 13 ) )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, 4 ) + '.' + vr.substr( 8, tam-4 ) ; }
	 	if ( tam > 12 )
		   { document.form1[campo].value = vr.substr( 0, 4 ) + '.' + vr.substr( 4, 4 ) + '.' + vr.substr( 8, 4 ) + '.' + vr.substr( 12, tam-4 ); }
	}	
}

function FormataCgc(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 2) && (tam <= 6) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 7) && (tam <= 9) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 6 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 10) && (tam <= 12) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 9 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 13) && (tam <= 14) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 12 ) + '.' + vr.substr( tam - 12, 3 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}		
}

//Máscara de telefone sem DDD
function FormataTelefone(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form1[campo].value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		document.form1[campo].value = vr ; }
	 	if ( (tam > 4) ){
	 		document.form1[campo].value = vr.substr( 0, tam - 4 ) + '-' + vr.substr( tam - 4, tam ) ; }
	}		
}
//FIM


//Máscara de telefone com DDD
function TelefoneFormat(Campo, e) {
	var key = '';
	var len = 0;
	var strCheck = '0123456789';
	var aux = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;

	if (whichCode == 13 || whichCode == 8 || whichCode == 0)
	{
		return true;  // Enter backspace ou FN qualquer um que não seja alfa numerico
	}
	key = String.fromCharCode(whichCode);
	if (strCheck.indexOf(key) == -1){
		return false;  //NÃO E VALIDO
	}

	aux =  Telefone_Remove_Format(Campo.value);

	len = aux.length;
	if(len>=10)
	{
		return false;	//impede de digitar um telefone maior que 10
	}
	aux += key;

	Campo.value = Telefone_Mont_Format(aux);
	return false;
}

function  Telefone_Mont_Format(Telefone)
{
	var aux = len = '';

	len = Telefone.length;
	if(len<=9)
	{
		tmp = 5;
	}
	else
	{
		tmp = 6;
	}

	aux = '';
	for(i = 0; i < len; i++)
	{
		if(i==0)
		{
			aux = '(';
		}
		aux += Telefone.charAt(i);
		if(i+1==2)
		{
			aux += ') ';
		}

		if(i+1==tmp)
		{
			aux += '-';
		}
	}
	return aux ;
}

function  Telefone_Remove_Format(Telefone)
{
	var strCheck = '0123456789';
	var len = i = aux = '';
	len = Telefone.length;
	for(i = 0; i < len; i++)
	{
		if (strCheck.indexOf(Telefone.charAt(i))!=-1)
		{
			aux += Telefone.charAt(i);
		}
	}
	return aux;
}
//aqui termina as funções que formatam o telefone com DDD

//Função para fazer sumir a camada que contem a mensagem de carregamento da página
function some()
{
		 document.getElementById('Carregando').style.visibility = "hidden";
}
//Fim da função

//Função para validar e-mail
email_checking = function(campo) {
  var erMail  = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
  if (!erMail.test(campo.value)) {
    return false;
  } else {
    return true;
  }
}
//fim da função

//Script para mascarar CEP
function formatacep(e,src,mask) {
if(window.event) { _TXT = e.keyCode; }
else if(e.which) { _TXT = e.which; }
if(_TXT > 47 && _TXT < 58) {
 var i = src.value.length; var saida = mask.substring(0,1); var texto = mask.substring(i)
 if (texto.substring(0,1) != saida) { src.value += texto.substring(0,1); }
    return true; } else { if (_TXT != 8) { return false; }
 else { return true; }
}
}
//fim

//Formata nota
function FormataNotas(campo,tammax,teclapres) {
var tecla = teclapres.keyCode;
vr = document.form1[campo].value;
vr = vr.replace( "/", "" );
vr = vr.replace( "/", "" );
vr = vr.replace( ",", "" );
vr = vr.replace( ".", "" );
vr = vr.replace( ".", "" );
vr = vr.replace( ".", "" );
vr = vr.replace( ".", "" );
tam = vr.length;

if ( (tam > 2) && (tam <= 4) ){
document.form1[campo].value = vr.substr( 0, tam - 2 ) + '.' + vr.substr( tam - 2, tam ); }
}
//Fim

//Máscara de validação para horas
function mascara_hora(hora){
              var myhora = '';
              myhora = myhora + hora;
              if (myhora.length == 2){
                  myhora = myhora + ':';
                  document.forms[0].hora.value = myhora;
              }
              if (myhora.length == 5){
                  verifica_hora();
              }
          }
          
          function verifica_hora(){
              hrs = (document.forms[0].hora.value.substring(0,2));
              min = (document.forms[0].hora.value.substring(3,5));
                           
              situacao = "";
              // verifica data e hora
              if ((hrs < 00 ) || (hrs > 23) || ( min < 00) ||( min > 59)){
                  situacao = "falsa";
              }
              
              if (document.forms[0].hora.value == "") {
                  situacao = "falsa";
              }

              if (situacao == "falsa") {
                  alert("Hora inválida!");
                  document.forms[0].hora.focus();
              }
          } 
//Fim

//Só aceita valores numéricos
function Numerico(e)
{
	if (document.all) // Internet Explorer
		var tecla = event.keyCode;
	else if(document.layers) // Nestcape
		var tecla = e.which;
		if (tecla > 47 && tecla < 58) // numeros de 0 a 9
			return true;
		else
			{
				if (tecla != 8) // backspace
					event.keyCode = 0;
					//return false;
				else
					return true;
			}
}
//Fim

function ConsistePlaca(form_placa,Tecla)
{
	//Verifica a quantidade de valores, se for menor igual a 3 ele veriufica se é letra
	//se nao for retorna nulo
	if (form_placa.value.length <= 2)
  { 
    if (Tecla > 96 && Tecla < 123)
    {
     event.returnValue = true;
    }
		else
		{
		 event.returnValue = false;	 
		}
  }
	else if(form_placa.value.length == 3)
	{
	form_placa.value += "-";
	event.returnValue = false;
	}
	//Se a quantidade de valores for maior que 3 ele verifica se é numero 
	//se nao for retorna nulo
	else if (Tecla > 47 && Tecla < 58)
	{
	 event.returnValue = true;
	}
	else 
	{
	event.returnValue = false;
  }
}

function NewWindow(mypage, myname, w, h, scroll) {
var winl = (screen.width - w) / 2;
var wint = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}


documentall = document.all;  
/* 
* função para formatação de valores monetários retirada de 
*[url]http://jonasgalvez.com/br/blog/2003-08/egocentrismo[/url] 
*/  
function formatamoney(c) {  
    var t = this; if(c == undefined) c = 2;        
    var p, d = (t=t.split("."))[1].substr(0, c);  
    for(p = (t=t[0]).length; (p-=3) >= 1;) {  
           t = t.substr(0,p) + "." + t.substr(p);  
    }  
    return t+","+d+Array(c+1-d.length).join(0);  
}  
  
String.prototype.formatCurrency=formatamoney  
  
function demaskvalue(valor, currency){  
/* 
* Se currency é false, retorna o valor sem apenas com os números. Se é true, os dois últimos caracteres são considerados as  
* casas decimais 
*/  
var val2 = '';  
var strCheck = '0123456789';  
var len = valor.length;  
   if (len== 0){  
      return 0.00;  
   }  
  
   if (currency ==true){     
      /* Elimina os zeros à esquerda  
      * a variável  <i> passa a ser a localização do primeiro caractere após os zeros e  
      * val2 contém os caracteres (descontando os zeros à esquerda) 
      */  
        
      for(var i = 0; i < len; i++)  
         if ((valor.charAt(i) != '0') && (valor.charAt(i) != ',')) break;  
        
      for(; i < len; i++){  
         if (strCheck.indexOf(valor.charAt(i))!=-1) val2+= valor.charAt(i);  
      }  
  
      if(val2.length==0) return "0.00";  
      if (val2.length==1)return "0.0" + val2;  
      if (val2.length==2)return "0." + val2;  
        
      var parte1 = val2.substring(0,val2.length-2);  
      var parte2 = val2.substring(val2.length-2);  
      var returnvalue = parte1 + "." + parte2;  
      return returnvalue;  
        
   }  
   else{  
         /* currency é false: retornamos os valores COM os zeros à esquerda,  
         * sem considerar os últimos 2 algarismos como casas decimais  
         */  
         val3 ="";  
         for(var k=0; k < len; k++){  
            if (strCheck.indexOf(valor.charAt(k))!=-1) val3+= valor.charAt(k);  
         }           
   return val3;  
   }  
}  
  
function reais(obj,event){  
  
var whichCode = (window.Event) ? event.which : event.keyCode;  
/* 
Executa a formatação após o backspace nos navegadores !document.all 
*/  
if (whichCode == 8 && !documentall) {     
/* 
Previne a ação padrão nos navegadores 
*/  
   if (event.preventDefault){ //standart browsers  
         event.preventDefault();  
      }else{ // internet explorer  
         event.returnValue = false;  
   }  
   var valor = obj.value;  
   var x = valor.substring(0,valor.length-1);  
   obj.value= demaskvalue(x,true).formatCurrency();  
   return false;  
}  
/* 
Executa o Formata Reais e faz o format currency novamente após o backspace 
*/  
FormataReais(obj,'.',',',event);  
} // end reais  
  
  
function backspace(obj,event){  
/* 
Essa função basicamente altera o  backspace nos input com máscara reais para os navegadores IE e opera. 
O IE não detecta o keycode 8 no evento keypress, por isso, tratamos no keydown. 
Como o opera suporta o infame document.all, tratamos dele na mesma parte do código. 
*/  
  
var whichCode = (window.Event) ? event.which : event.keyCode;  
if (whichCode == 8 && documentall) {     
   var valor = obj.value;  
   var x = valor.substring(0,valor.length-1);  
   var y = demaskvalue(x,true).formatCurrency();  
  
   obj.value =""; //necessário para o opera  
   obj.value += y;  
     
   if (event.preventDefault){ //standart browsers  
         event.preventDefault();  
      }else{ // internet explorer  
         event.returnValue = false;  
   }  
   return false;  
  
   }// end if        
}// end backspace  
  
function FormataReais(fld, milSep, decSep, e) {  
var sep = 0;  
var key = '';  
var i = j = 0;  
var len = len2 = 0;  
var strCheck = '0123456789';  
var aux = aux2 = '';  
var whichCode = (window.Event) ? e.which : e.keyCode;  
  
//if (whichCode == 8 ) return true; //backspace - estamos tratando disso em outra função no keydown  
if (whichCode == 0 ) return true;  
if (whichCode == 9 ) return true; //tecla tab  
if (whichCode == 13) return true; //tecla enter  
if (whichCode == 16) return true; //shift internet explorer  
if (whichCode == 17) return true; //control no internet explorer  
if (whichCode == 27 ) return true; //tecla esc  
if (whichCode == 34 ) return true; //tecla end  
if (whichCode == 35 ) return true;//tecla end  
if (whichCode == 36 ) return true; //tecla home  
  
/* 
O trecho abaixo previne a ação padrão nos navegadores. Não estamos inserindo o caractere normalmente, mas via script 
*/  
  
if (e.preventDefault){ //standart browsers  
      e.preventDefault()  
   }else{ // internet explorer  
      e.returnValue = false  
}  
  
var key = String.fromCharCode(whichCode);  // Valor para o código da Chave  
if (strCheck.indexOf(key) == -1) return false;  // Chave inválida  
  
/* 
Concatenamos ao value o keycode de key, se esse for um número 
*/  
fld.value += key;  
  
var len = fld.value.length;  
var bodeaux = demaskvalue(fld.value,true).formatCurrency();  
fld.value=bodeaux;  
  
/* 
Essa parte da função tão somente move o cursor para o final no opera. Atualmente não existe como movê-lo no konqueror. 
*/  
  if (fld.createTextRange) {  
    var range = fld.createTextRange();  
    range.collapse(false);  
    range.select();  
  }  
  else if (fld.setSelectionRange) {  
    fld.focus();  
    var length = fld.value.length;  
    fld.setSelectionRange(length, length);  
  }  
  return false;  
  
}  

function valida_horas(edit){
      if(event.keyCode<48 || event.keyCode>57){
        event.returnValue=false;
      }
      if(edit.value.length==2){
        edit.value+=":";}
}

function verifica_hr(tempo){
  horario = tempo.value.split(":");
  var horas = horario[0];
  var minutos = horario[1];
  var segundos = horario[2];
  if(horas > 24){ //para relógio de 12 horas altere o valor aqui
  alert("Horas inválidas"); event.returnValue=false;relogio.focus()}
  if(minutos > 59){
  alert("MINUTOS inválidos"); event.returnValue=false;relogio.focus()}
  if(segundos > 59){
  alert("Segundos inválidos"); event.returnValue=false;relogio.focus()}
}

