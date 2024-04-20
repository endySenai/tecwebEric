function calcularMedia2()
{
    const  aluno = (document.getElementById("NomeAluno").value);
    const  nota1 = parseFloat(document.getElementById("NotaAluno").value);
    const  nota2 = parseFloat(document.getElementById("NotaAluno2").value);
   
    
    let media = (nota1 + nota2) /2;
    console.log("media foi: " + media);
    
    if (media >= 7)
    {
        document.getElementById("resultado").innerHTML = ("O aluno " + aluno +" obteve media " + media + "\n Resultado: " + "\n aprovado");
    }
    if(media <7)
    {
        document.getElementById("resultado").innerHTML = ("Você não atingiu a nota media, mas ainda há chances \n digite a nota de recuperação");
        
    }
   
    
}

function calcularMedia3()
{
    const  aluno = (document.getElementById("NomeAluno").value);
    const  nota1 = parseFloat(document.getElementById("NotaAluno").value);
    const  nota2 = parseFloat(document.getElementById("NotaAluno2").value);
    let recup = parseFloat(document.getElementById("recup").value);

    let media = (nota1 + nota2) /2;
    let media2 = (media+recup) /2;
        if (media2 >=5)
        {
            document.getElementById("resultado").innerHTML = ("O aluno " + aluno +" obteve media " + media2 + "\n Resultado: "+ "aprovado na recuperação");
        }
        else
        {
            document.getElementById("resultado").innerHTML = ("O aluno " + aluno +" obteve media " + media2+ "\n Resultado: "+ "reprovado");
        }

        console.log("media com recuperação foi: " + media2);
}