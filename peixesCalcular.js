function peixes()
{
    p = parseFloat(document.getElementById("peixes").value);
    
    if (p>50)
    {
        e = p - 50;
        m = e * 4;

        alert("O peso em peixes foi" + p +"\n A excessão de peso foi de: "+ e + "\n A multa em reais foi de: " + m);
    }
    else
    {
        alert("Você está de boa meu irmão");
    }
}