<?php 
function upper($str)
{
	$LATIN_UC_CHARS = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝ';
	$LATIN_LC_CHARS = 'אבגדהוזחטיךכלםמןנסעףפץצרשתûü‎';
	$str = strtr ($str, $LATIN_LC_CHARS, $LATIN_UC_CHARS);
	$str = strtoupper($str);
	return $str;
}
?>