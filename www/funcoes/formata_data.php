<?php
//Funчуo para salvar a data no banco no formato correto
function vaiparaobanco($dt)
{
	$transforma = explode("/",$dt);
	$retorna = $transforma[2]."-".$transforma[1]."-".$transforma[0];
	return $retorna;
}
	
//Funчуo para transforma a data do banco no formato brasileiro
function voltadobanco($dt)
{
	 if($dt == "")
	 {
		 	
	 }
	 else
	 {
	 	$transforma = explode("-",$dt); 
	 	$retorna = $transforma[2]."/".$transforma[1]."/".$transforma[0]; 
	 	return $retorna;
	 } 
}
	
//Funчуo que mostra a hora da data do SQL SERVER
function horabr($data_sqlserver)
{
	if ($data_sqlserver == "")
	return "";
	$dtTimeStamp = strtotime($data_sqlserver);
	$dataConvertida = date('H:m:s', $dtTimeStamp);
	return $dataConvertida;
}

//Funчуo que mostra a data no formato Brasil da data do SQL SERVER
function databr($data_sqlserver)
{
	if ($data_sqlserver == "")
	return "";

	$dtTimeStamp = strtotime($data_sqlserver);
	$dataConvertida = date('d/m/Y', $dtTimeStamp);
	return $dataConvertida;
}

//Funчуo que mostra a data e hora no formato do MYSQL
function dthr_mysql($data)
{
	 if($data == "")
	 {
		 	return "";
	 }
	 else
	 {
			$dt_timestamp = strtotime(str_replace("/","-",$data));
			$novo_formato = date('Y-m-d H:i:s',$dt_timestamp); 
			return $novo_formato;
	}
}
//Funчуo que mostra a data e hora no formato Brasil
function dthr_br($data)
{
	$dt_timestamp = strtotime(str_replace("/","-",$data));
	$novo_formato = date('d/m/Y H:i:s',$dt_timestamp); 
	return $novo_formato;
}
//Funчуo converter data brasileira em MYSQL
function converter_data($strData)
{
	// Recebemos a data no formato: dd/mm/aaaa
	// Convertemos a data para o formato: aaaa-mm-dd
	if($strData == "")
	{
		$strDataFinal = "null";
	}
	elseif ( preg_match("#/#",$strData) == 1 )
	{
		$strDataFinal = "'";
		$strDataFinal .= implode('-', array_reverse(explode('/',$strData)));
		$strDataFinal .= "'";
	}
	return $strDataFinal;
}

function br_mysql($dt)
{
	$transforma = explode("/",$dt);
	$retorna = "20" . $transforma[2]."-".$transforma[1]."-".$transforma[0];
	return $retorna;
}
?>