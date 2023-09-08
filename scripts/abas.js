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





const botaovoltar = document.querySelector('.voltar');
const botaovoltar1 = document.querySelector('.fa-forward')
const botaovoltar2 = document.querySelector('.fa-backward')
const botaomenu = document.querySelector('.menu');




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

function ganharinspiracao() {
    if (isBackgroundYellow) {
        inspiracao.style.backgroundColor = 'yellow';
    } else {
        inspiracao.style.backgroundColor = 'transparent'
    }
    isBackgroundYellow = !isBackgroundYellow;
}


botaovoltar.addEventListener('click', fecharAba);

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