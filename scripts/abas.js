// CONSTANTES DO HEADER //
var ultimaaba;

const perfil = document.querySelector('.perfil');
const abaperfil = document.querySelector('.abaperfil');

const vida = document.querySelector('.hp');
const abavida = document.querySelector('.abavida');


const pe = document.querySelector('.pe');
const abape = document.querySelector('.abape');


const alma = document.querySelector('.alma');
const abaalma = document.querySelector('.abaalma');

const maestria = document.querySelector('.maestria');
const abamaestria = document.querySelector('.abamaestria');

const movimento = document.querySelector('.movimento');
const abamovimento = document.querySelector('.abamovimento');

const iniciativa = document.querySelector('#iniciativa');
const abainiciativa = document.querySelector('.abainiciativa')

const carmadura = document.querySelector('.carmadura');
const abaca = document.querySelector('.abaca');

const resistencias = document.querySelector('.resistencias');
const abaresistencias = document.querySelector('.abaresistencias');


const inspiracao = document.querySelector('.inspiracao');
let isBackgroundYellow = false;

function ganharinspiracao() {
    if (isBackgroundYellow) {
        inspiracao.style.backgroundColor = 'yellow';
    } else {
        inspiracao.style.backgroundColor = 'transparent'
    }
    isBackgroundYellow = !isBackgroundYellow;
}



// CONSTANTES DA AbaMaiorATRIBUTOS //
const descricaofor = document.querySelector('.descricaofor');
const abafor = document.querySelector('.abafor');

const descricaodes = document.querySelector('.descricaodes');
const abades = document.querySelector('.abades');

const descricaocon = document.querySelector('.descricaocon');
const abacon = document.querySelector('.abacon');

const descricaoint = document.querySelector('.descricaoint');
const abaint = document.querySelector('.abaint');

const descricaosab = document.querySelector('.descricaosab');
const abasab = document.querySelector('.abasab');

const descricaocar = document.querySelector('.descricaocar');
const abacar = document.querySelector('.abacar');


const descricaofortitude = document.querySelector('.descricaofortitude');
const abafortitude = document.querySelector('.abafortitude');

const descricaoreflexo = document.querySelector('.descricaoreflexo');
const abareflexo = document.querySelector('.abareflexo');

const descricaoastucia = document.querySelector('.descricaoastucia');
const abaastucia = document.querySelector('.abaastucia');

const descricaovontade = document.querySelector('.descricaovontade');
const abavontade = document.querySelector('.abavontade');


const descricaopassivaatencao = document.querySelector('.descricaopassivaatencao');
const abapassivaatencao = document.querySelector('.abapassivaatencao');

const descricaopassivainvestigacao = document.querySelector('.descricaopassivainvestigacao');
const abapassivainvestigacao = document.querySelector('.abapassivainvestigacao');

const descricaopassivaintuicao = document.querySelector('.descricaopassivaintuicao');
const abapassivaintuicao = document.querySelector('.abapassivaintuicao');

const descricaosentidosextras = document.querySelector('.descricaosentidosextras');
const abasentidosextras = document.querySelector('.abasentidosextras');





// CONSTANTES DO MENU-AbaMaiores //
const abamaioratributos = document.querySelector('.abamaioratributos');
const abamaioracoes = document.querySelector('.abamaioracoes');
const abamaiorpericias = document.querySelector('.abamaiorpericias');
const abamaiorclasse = document.querySelector('.abamaiorclasse')
const abamaioramaldicoadas = document.querySelector('.abamaioramaldicoadas');
const abamaiorhabtec = document.querySelector('.abamaiorhabtec');
const abamaiorinventario = document.querySelector('.abamaiorinventario');
const abamaiorshikigamis = document.querySelector('.abamaiorshikigamis');
const abamaiordescricao = document.querySelector('.abamaiordescricao');
const abamaiornotas = document.querySelector('.abamaiornotas');

const botaoabaatributos = document.querySelector('.aba1');
const botaoabaacoes = document.querySelector('.aba2');
const botaoabapericias = document.querySelector('.aba3');
const botaoabaclasse = document.querySelector('.aba4');
const botaoabaamaldicoadas = document.querySelector('.aba5');
const botaoabahabtec = document.querySelector('.aba6');
const botaoabainventario = document.querySelector('.aba7');
const botaoabamaestrias = document.querySelector('.aba8');
const botaoabadescricao = document.querySelector('.aba9');
const botaoabanotas = document.querySelector('.aba10');







// CONSTANTES DOS BOTÕES //
const botaovoltar = document.querySelector('.voltar');
const botaovoltar1 = document.querySelector('.fa-forward')
const botaovoltar2 = document.querySelector('.fa-backward')
const botaomenu = document.querySelector('.menu');

const abamenu = document.querySelector('.abamenu');
let isabamenuopen = true;




// FUNÇÕES DOS BOTÕES //
function fecharAba() {
    if (ultimaaba) {
        ultimaaba.style.display = 'none';
    }
    botaomenu.style.display = 'flex'
    botaovoltar1.style.display = 'none';
    botaovoltar2.style.display = 'block';
}

function abrirAba(aba) {
    ultimaaba = aba;
    ultimaaba.style.display = 'block';
    botaomenu.style.display = 'none';
    botaovoltar1.style.display = 'block';
    botaovoltar2.style.display = 'none';
}



// EVENTO DO BOTÃO VOLTAR //
botaovoltar.addEventListener('click', fecharAba);


// EVENTO DAS DESCRIÇÕES DO HEADER //
perfil.addEventListener('click', function() {
    abrirAba(abaperfil);
});
vida.addEventListener('click', function() {
    abrirAba(abavida);
});
pe.addEventListener('click', function() {
    abrirAba(abape);
});
alma.addEventListener('click', function() {
    abrirAba(abaalma);
});
maestria.addEventListener('click', function() {
    abrirAba(abamaestria);
});
movimento.addEventListener('click', function() {
    abrirAba(abamovimento);
});
iniciativa.addEventListener('click', function() {
    abrirAba(abainiciativa);
});
carmadura.addEventListener('click', function() {
    abrirAba(abaca);
});
resistencias.addEventListener('click', function() {
    abrirAba(abaresistencias);
});

inspiracao.addEventListener('click', ganharinspiracao)



// EVENTOS DAS DESCRIÇÕES DA AbaMaiorATRIBUTOS //
descricaofor.addEventListener('click', function() {
    abrirAba(abafor);
});
descricaodes.addEventListener('click', function() {
    abrirAba(abades);
});
descricaocon.addEventListener('click', function() {
    abrirAba(abacon);
});
descricaoint.addEventListener('click', function() {
    abrirAba(abaint);
});
descricaosab.addEventListener('click', function() {
    abrirAba(abasab);
});
descricaocar.addEventListener('click', function() {
    abrirAba(abacar);
});


descricaofortitude.addEventListener('click', function() {
    abrirAba(abafortitude);
});
descricaoreflexo.addEventListener('click', function() {
    abrirAba(abareflexo);
});
descricaoastucia.addEventListener('click', function() {
    abrirAba(abaastucia);
});
descricaovontade.addEventListener('click', function() {
    abrirAba(abavontade);
});


descricaopassivaatencao.addEventListener('click', function() {
    abrirAba(abapassivaatencao);
});
descricaopassivainvestigacao.addEventListener('click', function() {
    abrirAba(abapassivainvestigacao);
});
descricaopassivaintuicao.addEventListener('click', function() {
    abrirAba(abapassivaintuicao);
});
descricaosentidosextras.addEventListener('click', function() {
    abrirAba(abasentidosextras);
});




// FUNÇÃO DO Botão MENU //
botaomenu.addEventListener('click', function() {
    if (isabamenuopen) {
        abamenu.style.display = 'none';   
    } else {
        abamenu.style.display = 'block';
    }
    isabamenuopen = !isabamenuopen;
})



// Função e Eventos das AbasMaiores //
function fecharAbasmaiores(abamaior) {
    abamenu.style.display = 'none';
    isabamenuopen = !isabamenuopen;
    abamaioratributos.style.display = 'none';
    abamaioracoes.style.display = 'none';
    abamaiorpericias.style.display = 'none';
    abamaiorclasse.style.display = 'none';
    abamaioramaldicoadas.style.display = 'none';
    abamaiorhabtec.style.display = 'none';
    abamaiorinventario.style.display = 'none';
    abamaiorshikigamis.style.display = 'none';
    abamaiordescricao.style.display = 'none';
    abamaiornotas.style.display = 'none';
    abamaior.style.display = 'block';
}

fecharAbasmaiores(abamaioratributos);

botaoabaatributos.addEventListener('click', function() {
    fecharAbasmaiores(abamaioratributos);
})
botaoabaacoes.addEventListener('click', function() {
    fecharAbasmaiores(abamaioracoes);
})
botaoabapericias.addEventListener('click', function() {
    fecharAbasmaiores(abamaiorpericias);
})
botaoabaclasse.addEventListener('click', function() {
    fecharAbasmaiores(abamaiorclasse);
})
botaoabaamaldicoadas.addEventListener('click', function() {
    fecharAbasmaiores(abamaioramaldicoadas);
})
botaoabahabtec.addEventListener('click', function() {
    fecharAbasmaiores(abamaiorhabtec);
})
botaoabainventario.addEventListener('click', function() {
    fecharAbasmaiores(abamaiorinventario);
})
botaoabamaestrias.addEventListener('click', function() {
    fecharAbasmaiores(abamaiorshikigamis);
})
botaoabadescricao.addEventListener('click', function() {
    fecharAbasmaiores(abamaiordescricao);
})
botaoabanotas.addEventListener('click', function() {
    fecharAbasmaiores(abamaiornotas);
})