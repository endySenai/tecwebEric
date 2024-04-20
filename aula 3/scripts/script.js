function porcent () 
{
  num = parseFloat(document.getElementById("porcentagem").value);
  if (num>100)
  {
    num = num*0.1
    
    alert("desconto aplicado de:  ") + num;
  }
  else
  {
    alert("Valor pago de:" + num);
  }
}