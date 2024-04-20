function calcularMedia(){

const  aluno = (document.getElementById("NomeAluno").value);
const  nota1 = parseFloat(document.getElementById("NotaAluno").value);
const  nota2 = parseFloat(document.getElementById("NotaAluno2").value);

media = (nota1 + nota2) /2;
console.log(media);

if (media >= 7)
{
    alert("O aluno " + aluno +"obteve media " + media + "\n Resultado: "+ "aprovado")
}
else
{
    alert("O aluno " + aluno +"obteve media " + media + "\n Resultado: "+ "reprovado")
}


}