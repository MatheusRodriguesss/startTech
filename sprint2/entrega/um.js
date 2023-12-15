        var rodape = "<p>.:: Alura LEVEL UP ::.</p>";
        var codigo = 0;
        var nome1 = "Ingrid";
        var anoAtual = 2023;
        var idadesAcumuladas = 0;
        var pula = "<br>";

        function pularLinha() {
            document.write("<br><hr>");
        }

        function formatarIdades(anoNascimento) {
            var resultado;
            resultado = anoAtual - anoNascimento;
            return resultado;
        }

        function registrarCliente(nomeCliente, mesNascimento, anoNascimento) {
            codigo = codigo + 1;
            document.write("Código: " + codigo);
            pularLinha();

            document.write("seu nome é "+ nomeCliente + pula + " seu mês de nascimento é: " + mesNascimento + pula + " seu ano de nascimento: " + anoNascimento);
            idadesAcumuladas = idadesAcumuladas +  formatarIdades(anoNascimento);
            pularLinha();
            
            
        }
        registrarCliente("Fulano", "Janeiro", 1980);
        registrarCliente("ciclano", "maio", 1981);
        registrarCliente("beltrano", "novembro", 1984);

        document.write("<p>*** Estatisticas ***</p>");
        document.write("soma das idades " + idadesAcumuladas + "<br>");
        calcularMedia();
        document.write("<hr>");
        document.write(rodape);

        function calcularMedia() {
            let resultado;
            resultado = Math.round (idadesAcumuladas/3);
            document.write("media das idades: " + resultado);
        
        if idade <= 17 ("ADOLESCENTE")
        else if idade >= 18 && idade <=29 ("JOVEM") 
        else if idade >=30 && idade <=59 ("ADULTO")
        if idade >= 60 ("IDOSO")
        }

let idade = 35
if(idade <= 17) {
    document.write("ADOLESCENTE")
}
else if(idade >= 18 && idade <=29) {
    document.write("JOVEM")
}
else if(idade >=30 && idade <=59) {
    document.write("ADULTO")
}
else if(idade >= 60) {
    document.write("IDOSO")
}
else {
    document.write("Idade Inválida")
}