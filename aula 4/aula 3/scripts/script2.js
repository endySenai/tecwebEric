function idadeCalcular()

{

n = parseFloat(document.getElementById("Idade").value);

if ( n <=12)
{
    alert("Você é criança");
}
if ( n >= 13 && n <=18)
{
    alert("Você é Adolescente");
}
if ( n >=19 && n <=65)
{
    alert("Você é adulto");
}
if (n>= 65)
{
    alert("Você é idoso");
}

}