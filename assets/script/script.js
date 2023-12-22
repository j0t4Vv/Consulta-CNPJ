function validarCnpj(cnpj)
{
    $.ajax({
        'url': 'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': 'GET',
        'dataType': "jsonp",
        'success': function(dado)
        {
           if(dado.nome == undefined)
           {
            alert(dado.status + '' + dado.message)
           }
           else{
            document.getElementById('razaosocial').value = dado.nome;
            document.getElementById('fantasia').value = dado.fantasia;
            document.getElementById('abertura').value = dado.abertura;
            document.getElementById('status').value = dado.situacao;
            document.getElementById('endereco').value = dado.logradouro;
            document.getElementById('municipio').value = dado.municipio;
            document.getElementById('estado').value = dado.uf;
            document.getElementById('telefone').value = dado.fantasia;

           }
        }
        
        
    //     {
    //         if (!("erro" in data)) {
    //             $("#empresa_razaoSocial").val(data.nome);
    //             $("#empresa_fantasia").val(data.fantasia);
    //             $("#empresa_endereco").val(data.enderes[0].logradouro);
    //             $("#empresa_bairro").val(data.enderes[0].bairro);
    //             $("#empresa_cep").val(data.enderes[0].cep);
    //             $("#empresa_uf").val(data.enderes[0].uf);
    //             $('#empresa_municipio').empty();
    //             $('<option>').val('').text('Selecionar').appendTo('#empresa_municipio');
    //             $.each(data.imagens, function () {
    //                 var img = this;
    //                 $('<option>').val(img).text(img).appendTo('#empresa_logoImagem');
    //                 });
    //                 } else {
    //                     alert("CNPJ não encontrado ou inválido");
    //                     $("#empresa_razaoSocial").val("");
    //                     $("#empresa_fantasia").val("");
    //                     $("#empresa_endereco").val("");
    //                     $("#empresa_bairro").val("");
    //                     $("#empresa_cep").val("");
    //                     $("#empresa_uf").val("");
    //                     $("#empresa_municipio").val("");
    //                     }
    //                     },


    // })
}