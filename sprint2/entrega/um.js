<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>
            << COMEX>>
        </h1>
        <hr>
    </header>

    <main>
        <p><strong> .:: Lista de clientes ::. </strong></p>
        <hr>



    </main>

    <script>
        var numeroClientes = 0;
        var idadesAcumuladas = 0;
        var anoAtual = parseInt(prompt("Digite o ano atual"));


        function pulaLinha() {
            document.write("<br>");
            document.write("<hr>");
        }


        function registrarClientes(nome, mesNascimento, anoNascimento) {
            numeroClientes += 1;
            document.write(`Código ${numeroClientes} <br>`);
            document.write(
                `Nome: ${nome} <br> Mês de nascimento: ${mesNascimento} <br> Ano de nascimento: ${anoNascimento} <br>`
            );
            idadesAcumuladas += formatarIdade(anoNascimento);


            pulaLinha();

        }

        function formatarIdade(anoNascimento) {
            let idade;

            idade = anoAtual - anoNascimento;
            if (idade <= 17) {
                document.write("Classificação etária: Adolescente" + "<br>");
            }
            if (idade >= 18 && idade <= 29) {
                document.write("Classificação etária: Jovem" + "<br>");
            }
            if (idade >= 30 && idade <= 59) {
                document.write("Classificação etária: Adulto" + "<br>");
            }

            if (idade >= 60) {
                document.write("Classificação etária: Idoso" + "<br>");
            }

            document.write(`Sua idade é: ${idade}`);
            return idade;
        }

        function somaDasIdades() {
            document.write(`O resultado das idades acumuladas são: ${idadesAcumuladas} <br>`);
        }

        function mediaDasIdades() {
            let resultado;

            resultado = Math.round(idadesAcumuladas / 3);
            document.write(`A  média das idades é: ${resultado}`);
        }
        
        registrarClientes("Luiz", "Novembro", 2003);
        registrarClientes("Fulano", "Julho", 1950);
        registrarClientes("Sicrano", "Janeiro", 1950);

        document.write("<h2> Estatísticas </h2>");
        somaDasIdades();
        mediaDasIdades();
        pulaLinha();
        document.write("<footer> <p><strong> .:: Alura LEVEL UP ::. </strong></p></footer>")
    </script>
</body>

</html>