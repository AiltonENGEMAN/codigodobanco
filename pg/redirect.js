const { tracingChannel } = require('diagnostics_channel')
const pg = require('pg')

// let lista = []
let dicio = {'c123': '20/10','c321':'10/11'}

let treinamentos_novo_lote1 = [
'C102770_nr_37_treinamento_avancado',
'C102770_inicio',
'C102770_fim',
'C102770_anexos',
'C102770_validade',

'C102768_nr_37_treinamento_basico',
'C102768_inicio',
'C102768_fim',
'C102768_anexos',
'C102768_validade',

'C102772_caci_combate_incendio_avancado',
'C102772_inicio',
'C102772_fim',
'C102772_anexos',
'C102772_validade',

'C103329_carta_servicos_tutorados_42_dias_embarque',
'C103329_inicio',
'C103329_fim',
'C103329_anexos',
'C103329_validade',

'C103308_carta_servicos_tutorados_84_dias_embarque',
'C103308_inicio',
'C103308_fim',
'C103308_anexos',
'C103308_validade',

'C102775_cbsp_curso_basico_seguranca_plataforma',
'C102775_inicio',
'C102775_fim',
'C102775_anexos',
'C102775_validade',

'C102774_cerr_curso_embarcacao_rapida_resgate',
'C102774_inicio',
'C102774_fim',
'C102774_anexos',
'C102774_validade',

'C102773_cess_curso_embarcacoes_sobrevivencia_salvamento',
'C102773_inicio',
'C102773_fim',
'C102773_anexos',
'C102773_validade',

'C103048_conhecimento_informatica_microsoft_office_sap',
'C103048_inicio',
'C103048_fim',
'C103048_anexos',
'C103048_validade',

'C102740_curso_formacao_auxiliar_movimentacao_cargas_nr_34_nr_37',
'C102740_inicio',
'C102740_fim',
'C102740_anexos',
'C102740_validade',

'C102647_curso_formacao_operacao_guindaste_offshore_nr_34_nr_37',
'C102647_inicio',
'C102647_fim',
'C102647_anexos',
'C102647_validade',

'C102974_curso_operacao_tarefas_1_escalo_maquina_lava_jato',
'C102974_inicio',
'C102974_fim',
'C102974_anexos',
'C102974_validade',

'C102754_curso_operacao_tarefas_1_escalo_especifico_guindastes_escopo',
'C102754_inicio',
'C102754_fim',
'C102754_anexos',
'C102754_validade',

'C103068_curso_operacao_seguranca_tarefas_1_escalo_maquinas_lava_jato_desentupidora',
'C103068_inicio',
'C103068_fim',
'C103068_anexos',
'C103068_validade',

'C103069curso_reciclagem_auxiliar_movimentacao_cargas_nr_34_nr_37',
'C103069_inicio',
'C103069_fim',
'C103069_anexos',
'C103069_validade',

'C103049_curso_reciclagem_operacao_guindaste_offshore_nr_34_nr_37',
'C103049_inicio',
'C103049_fim',
'C103049_anexos',
'C103049_validade',

'C103050_curso_sms_supervisores_movimentacao_cargas',
'C103050_inicio',
'C103050_fim',
'C103050_anexos',
'C103050_validade',

'C102738_curso_tratamento_mecanico_superficies_pintura_basica',
'C102738_inicio',
'C102738_fim',
'C102738_anexos',
'C102738_validade',

'C102977_formulario_sispat',
'C102977_inicio',
'C102977_fim',
'C102977_anexos',
'C102977_validade',

'C102771_mcia_bombeiro_heliponto_emcia_bombav',
'C102771_inicio',
'C102771_fim',
'C102771_anexos',
'C102771_validade',

'C102644_nr_33_espaco_confindo',
'C102644_inicio',
'C102644_fim',
'C102644_anexos',
'C102644_validade',

'C102645_nr_35_trabalho_em_altura',
'C102645_inicio',
'C102645_fim',
'C102645_anexos',
'C102645_validade',

'C102739_palestra_1_acesso',
'C102739_inicio',
'C102739_fim',
'C102739_anexos',
'C102739_validade',

'C103328_qualificacao_elaborador_plano_rigging',
'C103328_inicio',
'C103328_fim',
'C103328_anexos',
'C103328_validade',

'C102646_regras_ouro_lista_presenca_ou_avaliacao',
'C102646_inicio',
'C102646_fim',
'C102646_anexos',
'C102646_validade',

'C102776_t_huet_certificacao_opito',
'C102776_inicio',
'C102776_fim',
'C102776_anexos',
'C102776_validade',

'C103310_tecnico_operador_guindaste',
'C103310_inicio',
'C103310_fim',
'C103310_anexos',
'C103310_validade',

'C102730_treinamento_requisitante_pt',
'C102730_inicio',
'C102730_fim',
'C102730_pt_anexos',
'C102730_validade',

'C102704_treinamento_de_sms',
'C102704_inicio',
'C102704_fim',
'C102704_pt_anexos',
'C102704_validade',
]

// conexão com o banco postgres
const client = new pg.Client({
    user:'postgres',
    host:'26.129.170.253',
    password:'math123)',
    database:'Cadastro Colaboradores',
    port:5432
})


db = client
// module.exports = client

async function inserir(resposta){
    await db.connect()
    // await db.query(`insert into cadastro(${campos}) values($1,$2)`,treinamentos_novo_lote1)
    a = db.query('select * from cadastro_temporario')

    console.log(a.rows)
    // await db.end()
    // let lista = []
    // lista.forEach(async item => {
    // // await db.query('insert into cadastro (agencia) values ($1);', ['bomba'])
    // await db.query(`insert into cadastro("agencia") values('${item}')`)
    // })

    // for (const item in resposta){
    //     lista.push(resposta[item])
    // }
    
    

    // await db.query(`insert into cadastro (agencia) 
    //     values ($1,$2,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,
    //     $,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,
    //     $,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,
    //     $,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$);`, lista)
    
}

await db.connect()

await db.query('select * from cadastro')



// document.getElementById('initialForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Impede o envio padrão do formulário

//     // Obter o valor do campo de e-mail
//     // const email = document.getElementById('email').value;
//     const funcao = document.getElementById('função').value;
//     const nome_colab = document.getElementById('nome').value;
//     const contrato = document.getElementById('contract').value

//     // Verifica o e-mail e redireciona para o formulário correspondente
//     if (contrato === "Trident") {
//         window.location.href = "trident.html";
//     } else if (,email === "exemplo2@dominio.com") {
//         window.location.href = "formulario2.html";
//     } else {
//         alert("E-mail não reconhecido. Tente novamente.");
//     }
// });