<?php 
function upper($str)
{
	$LATIN_UC_CHARS = '�����������������������������';
	$LATIN_LC_CHARS = '�����������������������������';
	$str = strtr ($str, $LATIN_LC_CHARS, $LATIN_UC_CHARS);
	$str = strtoupper($str);
	return $str;
}
?>