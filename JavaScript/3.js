$(document).ready(function(){
    $("#botao").click(function(){
        $("#texto").css("color","blue");
        $("#texto").css("text-decoration","underline");
        $("#texto").css("padding","10px");
        $("#texto").css("background-color","#ccc");
    });
});

/*Agora vamos entender um pouco de script. Primeiro verificamos se o documento estava pronto em: $(document).Ready(). Se o resultado for positivo ele chama uma função que verifica se o elemento de id #botão foi clicado: $("#botao").click(). Se esse botão for clicado, o script faz várias alterações em elementos presentes na div de id "texto", como por exemplo, altera a cor para azul: $("#texto").css("color","")*/
