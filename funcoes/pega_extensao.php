<?php 
function Pegartipo($str) 
{ 
        $tipo = strtolower(end(explode(".", $str))); 
        return $tipo; 
} 
?>