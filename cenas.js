const cenas = [
  {
    id: "inicio",
    texto: [
      "{{nome}}, a tempestade caía com força enquanto você dirigia pela estrada deserta.",
      "No banco de trás, Sara, sua meia-irmã, olhava pela janela, inquieta.",
      "Ao seu lado, Juliana, sua madrasta, observava o GPS com expressão tensa.",
      "Vocês até cogitam parar, mas com uma chuva dessas, estacionar em um local desconhecido não parece uma boa ideia."
    ],
    imagem: "img/estrada.jpg",
    opcoes: [
  {
    texto: "Brincar com Sara para aliviar o clima",
    acao: () => {
      mostrarTextoExtra([
        "Sara: Você é realmente um palhaço, {{nome}}! Se preocupa com a rua, senão vamos acabar batendo!"
      ], "hotel");
      alterarAfinidade("Sara", +1);
    }
  },
  {
    texto: "Falar para Sara ficar quieta na parte de trás do carro",
    acao: () => {
      mostrarTextoExtra([
        "Sara: Me deixe em paz, {{nome}}! Se preocupa com a rua, senão vamos acabar batendo!"
      ], "hotel");
      alterarAfinidade("Sara", -1);
    }
  }
]

  },
  {
    id: "hotel",
    texto: [
      "À frente, surge um velho hotel com a recepção iluminada. A chuva se intensifica.",
      "Sara: Ali! Um hotel! Vamos parar e esperar a chuva passar!",
      "Juliana: Estranho... esse hotel não aparece no GPS."
    ],
    imagem: "img/hotel.jpg",
    opcoes: [
      {
        texto: "Parar o carro e entrar com as duas",
        proxima: "recepcao"
      },
      {
        texto: "Seguir em frente e ignorar o hotel",
        
        acao: () => {
          mostrarTextoExtra([
            "Vocês seguem caminho, porém a gasolina acaba. Não há como seguir em frente.",
            "Juliana está visivelmente aborrecida com você.",
            "Sara: Ótimo {{nome}}... agora vamos ter que caminhar até o hotel, em plena tempestade."
          ], "recepcao");
          alterarAfinidade("Juliana", -1);
          alterarAfinidade("Sara", -1);
        }
      }
    ]
  },
  {
    id: "recepcao",
    texto: [
      "Ao entrarem na recepção, uma mulher de cabelos grisalhos e sorriso sutil os recebe.",
      "???: Boa noite! Eu me chamo Alfreda, sou a dona do hotel é um prazer ter vocês aqui!",
    ],
    imagem: "img/recepcao.jpg",
    opcoes: [
      {
        texto: "Agradecer educadamente",
        proxima: "recepcao1",
        acao: () => alterarAfinidade("Alfreda", +1)
      },
      {
        texto: "Ignorar o comentário",
        proxima: "recepcao1",
        acao: () => alterarAfinidade("Alfreda", -1)
      }
    ]
  },
{
  id: "recepcao1",
  imagem: "img/alfredaSmile.jpg",
  texto: [
    "A recepção parece segura... por enquanto.",
    "Algo no olhar de Alfreda ainda te incomoda.",
    "Sara: É normal chover desse tanto por aqui nessa época do ano?",
    "Alfreda: Aqui sempre costuma chover, mas receio que hoje está bem mais densa a chuva.",
    "Alfreda: Nem me recordo a ultima vez que choveu desse tanto (risos)",
    "Alfreda: Mas é um ótimo lugar para se morar, calmo, o canto dos passaros ao amanhecer e o nascer do sol é maravilhoso!",
    "Juliana: Desculpa interromper a senhora, mas estamos ensopados por conta da chuva. A senhora, por acaso, não teria um quarto disponível para nos secarmos e trocarmos de roupa?",
    "Alfreda: Oh! Mil perdões! Onde eu estava com a cabeça... É uma pequena pousada, não tenho muitos quartos, mas há um disponível. Ele tem 1 cama de casal e 1 de solteiro. A cozinha aqui é compartilhada e a sala também. O café da manhã é às 07:00.",
    "Juliana: Oh, tudo bem, Sra. Alfreda. Não pretendemos passar tanto tempo assim, só vamos esperar a chuva passar, não é meninos?",
    "Sara: Ah!? Sério, mamãe? Pra mim, hoje já deu. Quero tomar um banho e dormir!",
    "(O carro está sem gasolina. Você olha para o celular e vê que o posto mais próximo está a cerca de 2km de distância — basicamente, 40 minutos andando.)",
    "Juliana: {{nome}}, o que me diz?"
  ],
  opcoes: [
    {
      texto: "Acho melhor descansarmos por aqui essa noite, Juliana.",
      acao: () => {
        mostrarTextoExtra([
          "Juliana: Bom, você é o motorista, tudo bem, {{nome}}.",
          "Sara: Nossa, ainda bem, eu tô exausta!",
          "Alfreda: Sejam bem-vindos. Fiquem à vontade. Aqui estão as chaves do quarto."
        ], "quarto01");
        alterarAfinidade("Juliana", -1);
        alterarAfinidade("Sara", +1);
      }
    },
    {
      texto: "Assim que a chuva parar eu busco a gasolina e vamos embora.",
      acao: () => {
        mostrarTextoExtra([
          "Sara: O quê!? Eu não acredito nisso!",
          "Juliana: Sara, por favor, né...",
          "Alfreda: Sejam bem-vindos. Fiquem à vontade. Aqui estão as chaves do quarto."
        ], "quarto01");
        alterarAfinidade("Juliana", +1);
        alterarAfinidade("Sara", -1);
      }
    }
  ]
},
{
  id: "quarto01",
  texto: [
    "Vocês entram no quarto. Apesar do ambiente antigo, ele é acolhedor e limpo.",
    "Juliana e Sara entram juntas no banheiro para se trocar, enquanto você aguarda do lado de fora, tirando a camisa molhada.",
    "Você percebe um pequeno vão na porta do banheiro... não dá pra ver muito, mas o suficiente para captar silhuetas se movendo.",
    "O vapor do banho começa a escapar por debaixo da porta, e sua curiosidade cresce.",
    "Você ouve risadinhas abafadas. Sara tem esse jeito leve, despreocupado, um pouco provocador — loira de cabelo preso em um rabo de cavalo longo, corpo esguio e um olhar que sempre te desarma.",
    "Ela sempre soube que você a observava... e nunca pareceu se importar.",
    "Uma sombra se aproxima da fresta, e por um instante, você vê um dos olhos dela. Ela te encara e... sorri de canto.",
    "Seu coração dispara."
  ],
  imagem: "img/quarto01.jpg",
  opcoes: [
    {
      texto: "Espiar pelo vão da porta",
      imagem: "img/saraClothes.jpg",
      acao: () => {
        mostrarTextoExtra([
          "Você se aproxima da porta, quase sem pensar. A silhueta de Sara se move lentamente.",
          "Ela percebe você olhando. Não se cobre. Ao contrário, mantém o olhar e dá um sorrisinho de lado.",
          "Sua pele está levemente avermelhada do calor do banho, e seus olhos brilham por trás de alguns fios soltos do rabo de cavalo.",
          "Ela chega proximo a porta e cochicha com você",
          "Sara: Tsc... pouco curioso, né, {{nome}}?",
          "Sara fecha a porta do banheiro, você se afasta e senta na cama",
          "Malícia aumentada em +1."
        ], "quarto02");
        alterarMalicia("malicia", +1);
        alterarAfinidade("Sara", +1);
      }
    },
    {
      texto: "Evitar olhar e checar o celular",
      acao: () => {
        mostrarTextoExtra([
          "Você respira fundo, desvia o olhar e pega o celular.",
          "O sinal está fraco, sem Wi-Fi no hotel, mas você consegue carregar a previsão do tempo.",
          "Deve continuar chovendo até amanhã.",
          "Pensando no bem-estar de todos, pousar aqui por esta noite parece mesmo ser a melhor opção."
        ], "quarto02");
      }
    }
  ]
},
{
  id: "quarto02",
  texto: [
    "Juliana e Sara retornam do banheiro.",
    "Juliana: Essa viagem me deixou exausta já, mas quero ir pra casa o quanto antes.",
    "Sara se joga de bruços na cama, como sinal de exaustão.",
    "Sara: Mamãe, por favor né, não tem como a gente pegar a estrada ainda hoje. Estamos sem gasolina, e o {{nome}} também está cansado de tanto dirigir.",
    "Sara: A gente pode, sei lá... somente comer algo e descansar hoje?",
    "Juliana: Eu até adoraria, mas precisamos chegar em Uberlândia o quanto antes, Sara. Eu tenho que trabalhar.",
    "Sara: Pois é! A única coisa que a senhora sabe falar é de trabalho... ah, que saco!",
    "Sara sai rapidamente do quarto, batendo a porta antes que Juliana termine de falar.",
    "Juliana está visivelmente triste."
  ],
  imagem: "img/quarto02.jpg",
  opcoes: [
    {
      texto: "Tentar consolar Juliana",
      proxima: "quarto02_consolo"
    }
  ]
},
{
  id: "quarto02_consolo",
  imagem: "img/Juliana_triste.jpg",
  texto: [
    "Você se aproxima de Juliana e fala algo gentil.",
    "Juliana: Você é um amor de pessoa, {{nome}}. Eu não sei o que faria sem você aqui.",
    "Ela sorri de canto e te abraça."
  ],
  imagem: "img/Juliana_abraço.jpg",
  opcoes: [
    {
      texto: "Acariciar Juliana discretamente",
      proxima: "quarto02_malicia"
    },
    {
      texto: "Apenas manter o abraço",
      proxima: "quarto02_abraco"
    }
  ]
},
{
  id: "quarto02_malicia",
  imagem: "img/Juliana_malicia.jpg",
  texto: [
    "Você desliza a mão com cuidado.",
    "Juliana: {{nome}}... o que você está...",
    "Ela fica sem jeito, mas não recua imediatamente.",
    "Na verdade... ela gosta. Faz tempo que não sente um toque assim.",
    "-MALÍCIA AUMENTADA EM +1.-",
    "De repente, um grito ecoa pelo hotel.",
    "KYAAAAAHHHHHHH!",
    "Juliana: SARA!? OH MEU DEUS!? CADÊ ELA, {{nome}}!?"
  ],
  opcoes: [
    {
      texto: "Correr para o corredor",
      proxima: "corredor00",
      }
  ]
},
{
  id: "corredor00",
  texto: [
    "Você sente seu corpo reagindo ao grito de Sara. Não há tempo a perder."
  ],
  tempo: 2000,
  proxima: "corredor01",
  acao: () => {
    alterarMalicia("malicia", +1);
    alterarAfinidade("Juliana", +1);
  }
},
{
  id: "quarto02_abraco",
  imagem: "img/Juliana_abraço.jpg",
  texto: [
    "Você mantém o abraço, respeitando o momento.",
    "Ela te aperta um pouco mais forte... como se estivesse tentando absorver algo de você.",
    "Mas então... um grito corta o silêncio do hotel.",
    "KYAAAAAHHHHHHH!",
    "Juliana: SARA!? OH MEU DEUS!? CADÊ ELA, {{nome}}!?"
  ],
  opcoes: [
    {
      texto: "Correr para o corredor",
      proxima: "corredor01"
    }
  ]
},
{
  id: "corredor01",
  imagem: "img/corredor01.jpg",
  texto: [
    "Você e Juliana saem do quarto, estão no corredor.",
    "Você sente um arrepio… uma sensação estranha.",
    "Juliana: Você vai por aquele lado, eu vou para a entrada. Por favor, encontre a Sara, {{nome}}.",
    "-Vocês se separam, cada um vai para um lado.-",
    "No final do corredor, você vê alguma coisa no reflexo da janela...",
    "Algo está olhando para você fixamente."
  ],
  opcoes: [
    {
      texto: "Olhar melhor para o reflexo",
      proxima: "susto01"
    }
  ]
},
{
  id: "susto01",
  imagem: "img/susto01.jpg", // imagem assustadora, tela cheia
  som: "audio/susto.mp3",     // som abrupto
  texto: [],
  tempo: 2000,                // 2 segundos
  proxima: "pos_susto"
},
{
  id: "pos_susto",
  imagem: "img/chao_quarto.jpg", // pode ser uma imagem tremida ou de ângulo baixo
  som: "audio/queda.mp3", // som de queda corporal
  texto: [
    "Você tropeça para trás e cai no chão com força.",
    "Sua cabeça dói. Tudo parece girar por alguns segundos.",
    "Algo está errado com esse lugar... há algo muito estranho neste hotel.",
    "Você recobra a consciência aos poucos e olha novamente para a janela...",
    "Não há nada lá agora.",
    "Apenas a chuva caindo, fria, insistente.",
    "Você se lembra de Juliana e Sara.",
    "Elas estão sozinhas... você precisa encontrá-las."
  ],
  tempo: 2000,
  proxima: "hall_encontro"
},
{
  id: "hall_encontro",
  imagem: "img/hall_misterioso.jpg",
  texto: [
    "Você segue o mesmo caminho que Sara tomou, ainda trêmulo.",
    "Ao chegar no hall da entrada do hotel, vê todos ali reunidos.",
    "O clima é estranho... ninguém fala nada.",
    "Todos estão parados, como se estivessem tentando entender o que acabaram de ver.",
    "No centro do hall, há um corpo estendido no chão.",
    "Alguém morreu dentro do hotel."
  ],
  opcoes: [
    {
      texto: "Observar a reação das pessoas ao redor",
      proxima: "dialogo_hall01"
    }
  ]
},
{
  id: "dialogo_hall01",
  imagem: "img/hall_misterioso.jpg",
  texto: [
    "O silêncio toma conta do hall.",
    "Todos os olhos se voltam para você... por um instante que parece eterno.",
    "Mas ninguém diz nada.",
    "Um a um, eles desviam o olhar — como se você carregasse uma culpa invisível.",
    "Agora, o clima mudou. Ninguém mais parece confiar em ninguém.",
    "Há tensão no ar... densa como a tempestade lá fora.",
    "Uma mulher mantém os braços cruzados, mas seus dedos tremem.",
    "Um homem aperta o maxilar, o olhar fixo no corpo no chão.",
    "Alguém se afasta lentamente, olhando pelas janelas... como se esperasse ver algo lá fora.",
    "Uma figura mais velha apenas encara o vazio, sem piscar, como se isso tudo já tivesse acontecido antes.",
    "Você percebe... algo se quebrou ali.",
    "E não foi só a vida do homem no chão."
  ],
  opcoes: [
    {
      texto: "Se aproximar do corpo",
      proxima: "investigar_corpo"
    }
  ]
},
{
  id: "investigar_corpo",
  imagem: "img/corpo_hall.jpg",
  texto: [
    "Você começa a se aproximar lentamente do corpo estendido no chão.",
    "O silêncio ainda domina o ambiente.",
    "Quando você se agacha, prestes a tocar nele, ouve uma voz atrás de você:",
    "— Espera! O que você vai fazer?! — diz a enfermeira, em tom de alerta.",
    "Outro murmúrio reforça:",
    "— Pois é, espere aí, garoto. Você não precisa mexer nisso.",
    "É o policial aposentado, sério, experiente.",
    "— Alguém tem luvas esterilizadas? Não podemos contaminar a cena.",
    "A recepcionista, parada perto da porta, parece inquieta. Seu rosto está rígido... mas seus olhos denunciam que ela sabe mais do que deixa transparecer.",
    "— Eu tenho — diz a enfermeira, já abrindo sua bolsa. — Me dá licença.",
    "Ela veste as luvas, respira fundo. O policial se agacha ao lado dela para ajudar.",
    "Juntos, viram lentamente o corpo.",
    "O susto é geral.",
    "O coração foi arrancado.",
    "— CARLOS... — grita o advogado, sem conseguir conter a reação.",
    "— ¿Dios mío...? — murmura a mulher argentina, levando a mão à boca.",
    "Sara corre para uma das lixeiras próximas e vomita, em desespero.",
    "O policial se levanta rapidamente e corre até o telefone da recepção.",
    "Nada. Mudo.",
    "Ele pega o próprio celular. Sem sinal.",
    "Outros tentam fazer o mesmo. Nenhum aparelho funciona.",
    "Ele olha ao redor... e vê as câmeras de segurança presas nos cantos do teto.",
    "— Tem câmeras. Isso pode ter registrado alguma coisa.",
    "Ele se vira para todos, assumindo o controle da situação.",
    "— Escutem. Ninguém vai sair daqui até a polícia chegar.",
    "— Vamos todos para a sala de estar. Sentem-se lá. Deixem esse corpo isolado.",
    "— Eu vou com a... com a dona do hotel até a central das câmeras. Mas preciso de uma testemunha comigo.",
    "Ele aponta.",
    "— Você vem comigo — diz ele, chamando o advogado."
  ],
  opcoes: [
    {
      texto: "Seguir para a sala com os outros",
      proxima: "sala_espera"
    }
  ]
},
{
  id: "sala_espera",
  imagem: "img/sala_espera.jpg",
  texto: [
    "Você está na sala de estar com o restante do grupo.",
    "Sara está encolhida em um canto, ainda passando mal. Seu rosto está pálido, os olhos vidrados.",
    "Juliana se senta ao seu lado no sofá, e se agarra ao seu braço. Ela está visivelmente abalada.",
    "A mulher que é enfermeira permanece de pé, encarando a direção do hall, pensativa. Seus olhos parecem calcular alguma coisa.",
    "A mulher gringa está em pé, com o celular na mão. Tenta gravar discretamente, mas é interrompida.",
    "— O que você acha que está fazendo!? — grita o homem. — Um homem morreu, e você tá tentando fazer um vídeo sobre isso, sua maluca?",
    "— ¡Déjame en paz, animal! Mis fans necesitan saber qué está pasando conmigo. — responde a argentina, irritada.",
    "— É sério que você tá me chamando de animal!? — o homem retruca, incrédulo.",
    "A discussão continua, abafada, enquanto sua atenção volta para Juliana.",
    "Ela se vira pra você, os olhos marejados.",
    "— Por que isso tá acontecendo com a gente!?",
    "— O que foi que fez aquilo com aquela pessoa, {{nome}}...? Nós precisamos sair logo daqui!"
  ],
  opcoes: [
  {
    texto: "Eu entendo Juliana, mas nesse momento não há o que fazer. Dá pra você ficar quieta?",
    acao: () => {
      mostrarTextoExtra([
        "Juliana está triste por ter falado desta forma com ela."
      ], "retornoSala01");
      alterarAfinidade("Juliana", -1);
    }
  },
  {
    texto: "Ei, acalma-se. Eu estou aqui com você. Vamos dar um jeito nisso tudo.",
    acao: () => {
      mostrarTextoExtra([
        "Juliana sorri com seu comentário, é bom saber que ela pode contar com você."
      ], "retornoSala01");
      alterarAfinidade("Juliana", +1);
    }
  }
]

},
{
  id: "retornoSala01",
  imagem: "img/retorno_sala.jpg",
  texto: [
    "A porta da sala se abre de repente.",
    "O policial retorna, acompanhado de Alfreda e do advogado.",
    "Ele olha para todos, respira fundo e tenta manter a compostura.",
    "— Bom... pessoal — diz ele, passando a mão na testa. — Eu tenho que dizer... é um péssimo dia.",
    "— Muita coisa aconteceu... e não temos respostas fáceis.",
    "A enfermeira cruza os braços, firme:",
    "— Quem fez isso!? Nós temos o direito de saber!",
    "O policial hesita. Troca um olhar com Alfreda. O advogado desvia o olhar.",
    "— É... então... — ele gagueja. — As câmeras... não receberam manutenção fazia bastante tempo.",
    "— Não temos gravação alguma do ocorrido.",
    "O silêncio é substituído por murmúrios, vozes sobrepostas, indignação geral.",
    "— Como assim não tem nada?! — alguém exclama.",
    "— Isso é inadmissível! — grita outra voz.",
    "— Não é possível que num hotel como esse ninguém revise câmeras! — alguém acusa, encarando Alfreda.",
    "O policial ergue a voz de forma brusca:",
    "— ACALMEM-SE!",
    "As vozes se calam num estalo.",
    "— Ficar questionando a senhora Alfreda... não vai resolver nada.",
    "— Ela não tem culpa... ou pelo menos, não temos nenhuma prova disso.",
    "— ¡O quizás sí... no hay forma de saberlo! — dispara a gringa, com raiva no olhar.",
    "O grupo se cala. O clima fica ainda mais pesado."
  ],
  opcoes: [
    {
      texto: "Ficar em silêncio e observar as reações",
      proxima: "proxima_decisao01"
    }
  ]
},
{
  id: "proxima_decisao01",
  imagem: "img/sala_reuniao.jpg",
  texto: [
    "Juliana quebra o silêncio com um tom amargo:",
    "— Então... o que o senhor propõe que façamos, senhor policial?",
    "Ele respira fundo antes de responder:",
    "— Bem... nesse caso, a melhor coisa é manter a calma.",
    "— Vamos tentar revisar a cena. Precisamos saber onde cada um estava.",
    "— E melhor ainda... quero que cada um se apresente. Nome, por que estão aqui, e onde estavam quando tudo aconteceu.",
    "Ele olha para o grupo em silêncio por alguns segundos.",
    "— Quem gostaria de começar?",
    "O silêncio é desconfortável. Ninguém responde imediatamente.",
    "Você observa os rostos ao redor. Todos evitam contato visual.",
    "Você decide esperar."
  ],
  opcoes: [
    {
      texto: "Esperar alguém se apresentar",
      proxima: "testemunho_bruno"
    }
  ]
},
{
  id: "testemunho_bruno",
  imagem: "img/testemunho_bruno.jpg",
  texto: [
    "O silêncio permanece por alguns segundos... até que uma voz se ergue:",
    "— Pois bem... se ninguém quer começar, eu começo.",
    "Bruno, o advogado, dá dois passos à frente e ajeita a gola da camisa.",
    "— Meu nome é Bruno da Costa, 42 anos, advogado criminalista.",
    "Ele olha para o grupo como se estivesse num tribunal.",
    "— Vim ao hotel para descansar. Nada mais. Meu último caso durou meses e eu precisava de um lugar longe da cidade.",
    "— Cheguei ontem à noite. Me deram o quarto no segundo andar, ao lado da varanda. Um pouco úmido demais, mas... funcional.",
    "— Estava na sala de jogos quando ouvi o grito.",
    "Ele cruza os braços.",
    "— Não vi ninguém entrando ou saindo do hall. E não ouvi passos.",
    "— Aliás... o isolamento acústico desse lugar é um desastre. Dava pra ouvir os sussurros do casal do quarto de cima, mas não um assassinato no andar de baixo?",
    "Alguns no grupo trocam olhares desconfortáveis.",
    "Bruno continua, impassível.",
    "— Quando saí, cruzei com a recepcionista. Ela parecia nervosa. Disse que ia checar a cozinha.",
    "Ele encara Alfreda rapidamente, depois volta o olhar ao grupo.",
    "— Não estou acusando ninguém. Só estou relatando os fatos.",
    "— E mais: a porta do hall estava entreaberta quando cheguei. Ou seja, alguém saiu... ou entrou.",
    "Ele dá um passo para trás.",
    "— Agora, se me derem licença... prefiro não ser o único a expor a própria rotina aqui.",
    "A enfermeira dá um passo à frente, tirando as luvas lentamente enquanto encara o grupo."
  ],
    opcoes: [
    {
      texto: "Aguardar outra pessoa se apresentar",
      proxima: "testemunho_amanda"
    }
  ]
},
{
  id: "testemunho_amanda",
  imagem: "img/testemunho_amanda.jpg",
  texto: [
    "A próxima a se apresentar é a mulher que fez o atendimento ao falecido, ela respira fundo, ajeita os cabelos atrás da orelha e dá um passo à frente.",
    "— Amanda Rodrigues. 31 anos. Enfermeira pediátrica.",
    "Sua voz é firme, mas não agressiva.",
    "— Vim ao hotel para tentar desligar um pouco... tenho trabalhado direto em UTI neonatal. Precisei de um lugar silencioso, afastado, sem barulho de respiradores ou choro.",
    "Ela olha brevemente para o chão antes de continuar.",
    "— Estava no quarto do térreo quando ouvi o grito. Tinha acabado de sair do banho.",
    "— Peguei as luvas da minha bolsa por impulso. Reflexo clínico. Não queria que ninguém mexesse no corpo sem proteção.",
    "Ela cruza os braços, como se estivesse se blindando.",
    "— Não vi ninguém suspeito. E não ouvi passos. Só o grito.",
    "Fica em silêncio por um instante, olhando para o grupo.",
    "— Não estou acostumada a ver esse tipo de coisa fora do hospital... e mesmo lá, corações não somem desse jeito.",
    "Ela dá dois passos para trás, voltando à parede.",
    "— É só isso."
  ],
  opcoes: [
    {
      texto: "Aguardar outra pessoa se apresentar",
      proxima: "testemunho_eduardo"
    }
  ]
  proxima: "testemunho_eduardo"
},
{
  id: "testemunho_eduardo",
  imagem: "img/testemunho_eduardo.jpg",
  texto: [
    "Um homem magro e estiloso dá um passo à frente de forma exagerada, como se estivesse entrando num palco.",
    "— Eduardo Santiago. 36 anos. Ator.",
    "Faz uma breve reverência com sarcasmo. Ninguém ri.",
    "— Estou aqui por convite. Um conhecido recomendou o hotel como 'refúgio artístico'. Tranquilo, elegante, inspirador...",
    "Ele suspira.",
    "— Inspiração foi a última coisa que encontrei.",
    "— Estava na varanda quando ouvi o grito. Pensava em gravar um monólogo ali. Estava sozinho.",
    "Ele olha para o grupo, depois fixa os olhos em Amanda.",
    "— Mas me explica uma coisa... como assim você pegou a luva por reflexo?",
    "O ambiente silencia novamente.",
    "Amanda nem pisca.",
    "— Sou enfermeira, não atriz. Quando vejo sangue, eu ajo. Simples assim.",
    "Eduardo dá uma risadinha sem graça, e desvia o olhar.",
    "— Tá certo então... esquece que eu perguntei.",
    "Ele dá um passo para trás, com um ar amargurado, mas sem mais coragem de retrucar.",
    "Volta pro seu canto, quieto."

  ],
    opcoes: [
    {
      texto: "Aguardar outra pessoa se apresentar",
      proxima: "testemunho_renata"
    }
  ]
},
{
  id: "testemunho_renata",
  imagem: "img/testemunho_renata.jpg",
  texto: [
    "A gringa ajeita o cabelo, dá dois passos à frente, e sorri brevemente para... ninguém.",
    "— Hola, soy Renata Villar, 29 años. Argentina, influenciadora digital de lifestyle e viagens.",
    "Ela pausa como se esperasse aplausos.",
    "— Vim para este hotel por indicação de um seguidor. O lugar parecia... exótico.",
    "— Estava no meu quarto, editando vídeos para o Instagram. Luz natural estava linda.",
    "Ela dá um passo para o lado, dramatizando:",
    "— Escutei o grito e pensei: ‘Ai, Dios mío, alguém deve ter visto uma aranha gigante ou coisa assim’...",
    "— Quando desci e vi o corpo, bueno... aí entendi que era algo... serio.",
    "Eduardo ergue uma sobrancelha e pergunta, com um meio sorriso irônico:",
    "— Ué, então você sabe falar português direito?",
    "— Ay... sé, un poquito. Tipo... portunhol. Espaguês. Uma mezcla básica, sabe?",
    "Ela dá de ombros com naturalidade.",
    "— Mas meus seguidores entendem. É isso que importa.",
    "Renata dá meia-volta e volta ao lugar como se estivesse descendo de uma passarela.",
    "O silêncio que se segue não é de respeito. É puro julgamento coletivo."
  ],
    opcoes: [
    {
      texto: "Aguardar que outra pessoa se apresente",
      proxima: "testemunho_marcos"
    }
  ]
{
  id: "testemunho_marcos",
  imagem: "img/testemunho_marcos.jpg",
  texto: [
    "O que se auto intitula policial caminha até o centro da sala em passos lentos, mas firmes.",
    "Cruza os braços. Olhar duro, voz seca.",
    "— Marcos Santana. 58 anos. Policial aposentado.",
    "— Trabalhei por mais de 30 anos em Belo Horizonte. Homicídios, latrocínios, desaparecidos... já vi coisa pior do que a maioria de vocês conseguiria dormir sabendo.",
    "— Vim pra esse hotel porque a minha filha me deu de presente. Disse que eu precisava 'desacelerar'.",
    "Ele solta uma risada amarga.",
    "— Acho que ela devia jogar na loteria.",
    "— Estava na cozinha. Tinha ido atrás de café. Ouvi o grito vindo da direção do hall.",
    "— Quando cheguei, o corpo já estava lá. Fiquei chocado, sim. Mas mais chocado ainda com a falta de estrutura desse lugar.",
    "Ele lança um olhar direto para Alfreda, que continua em silêncio, imóvel.",
    "— Sem câmeras, sem telefone funcionando, sem seguranças, sem protocolo.",
    "— Já vi muito bandido mentir olhando no fundo do meu olho. Então... vou prestar atenção em cada palavra de vocês.",
    "Ele não espera reação. Dá meia-volta e volta pro canto dele.",
    "— É isso."
  ],
    opcoes: [
    {
      texto: "Aguardar outra pessoa se apresentar",
      proxima: "testemunho_alfreda"
    }
  ]
},
{
  id: "testemunho_alfreda",
  imagem: "img/testemunho_alfreda.jpg",
  texto: [
    "Alfreda permanece imóvel por alguns segundos. Então, lentamente, caminha até o centro.",
    "Ela não se apresenta de imediato. Seus olhos percorrem o grupo inteiro antes de falar.",
    "— Alfreda. Tenho 48 anos. Sou a proprietária deste hotel...",
    "Sua voz é baixa, firme, mas carregada de algo antigo — como quem viveu mais do que aparenta.",
    "— Nasci nesta cidade. Vi esse lugar mudar de mãos muitas vezes. Mas sempre soube que... algo aqui não mudava.",
    "Ela faz uma pausa longa.",
    "— Hoje, isso voltou a se manifestar.",
    "— Eu estava na sala de arquivos. Estava buscando relatórios antigos sobre manutenção elétrica... e tentando entender por que as câmeras haviam parado.",
    "— O grito me pegou de surpresa. E... sinceramente... não pensei que fosse o que foi.",
    "Ela respira fundo.",
    "— Eu sei que vocês querem respostas. Mas... talvez o que eu diga agora não seja levado a sério.",
    "— Talvez achem que eu estou louca, ou velha demais. Talvez até riam.",
    "Ela olha diretamente para você por acaso.",
    "— Mas o que quer que tenha feito aquilo... não foi humano."
  ],
  opcoes: [
    {
      texto: "Observar as reações das pessoas",
      proxima: "reacoes_alfreda"
    }
  ]
},
{
  id: "reacoes_alfreda",
  imagem: "img/sala_reuniao.jpg",
  texto: [
    "Você por um minuto não acredita no que Alfreda disse, mas com base com o que viu no vidro talvez deva dá um voto de confiança a ela.",
    "O silêncio na sala se transforma.",
    "Amanda franze a testa e cruza os braços. Analítica, mas desconfortável.",
    "Bruno solta uma risada seca, sem humor algum.",
    "— É sério isso?",
    "Eduardo apenas balança a cabeça, como se fosse algum tipo de performance ruim.",
    "Renata dá dois passos para trás, nervosa, olhando ao redor como se esperasse algo pular das sombras.",
    "Marcos não diz nada. Mas seus olhos agora estão em Alfreda. E não desviam.",
    "Você sente um frio na espinha.",
    "E então, duas figuras se levantam ao mesmo tempo.",
    "— Juliana. 38 anos. Analista de dados. Esta é minha filha, Sara.",
    "Sara nem tenta falar. Está pálida, abraçada ao próprio corpo, os olhos fixos no chão.",
    "Juliana continua:",
    "— Estamos aqui pra visitar uma amiga da família que mora nas redondezas... ou melhor, estávamos.",
    "- Não tínhamos intenção alguma de parar aqui, mas infelizmente as condições climáticas e a gasolina do carro não ajudaram.",
    "— No momento do grito, estávamos voltando do banheiro. Foi logo antes de encontrarmos vocês.",
    "Ela respira fundo, segurando o ombro da filha.",
    "— Sinceramente... eu só quero sair daqui com ela. É só isso que importa pra mim agora."
  ],
    opcoes: [
    {
      texto: "Você é o próximo a se apresentar.",
      proxima: "testemunho_protagonista"
    }
  ]
},
{
  id: "testemunho_protagonista",
  imagem: "img/testemunho_protagonista.jpg",
  texto: [
    "Todos olham em sua direção. Agora, é sua vez.",
    "Você se levanta lentamente.",
    "— Me chamo {{nome}} {{sobrenome}}.",
    "— Juliana é minha madrasta. Sara é minha meia-irmã.",
    "— Sou estudante de Psicologia. Vim pra tentar entender os outros. Mas agora, nem sei se entendo a mim mesmo.",
    "Fala com calma, tentando manter a compostura.",
    "— Como a Juliana disse... estávamos voltando da casa de uma conhecida.",
    "— Mas acabou a gasolina do carro e fomos obrigados a parar aqui.",
    "Você olha para o chão por um segundo, então levanta os olhos.",
    "— No momento do grito... eu estava no corredor.",
    "— Estava olhando para a janela.",
    "— Tinha algo errado naquele reflexo.",
    "Um arrepio percorre sua nuca só de lembrar.",
    "— E então... veio o som. Aquele grito.",
    "Você respira fundo.",
    "— Só isso."
    "Seu comentário chamou a atenção de Alfreda."
  ],
  proxima: "desparecimento_corpo"
},




  {
  id: "desaparecimento_corpo",
  imagem: "img/hall_vazio.jpg",
  som: "audio/susto_breve.mp3",
  texto: [
    "Você volta ao hall principal.",
    "O corpo... desapareceu.",
    "No lugar onde estava... apenas um rastro de sangue escurecido no carpete.",
    "As pessoas estão paralisadas.",
    "Amanda recua um passo, levando a mão à boca.",
    "Renata deixa o celular cair no chão.",
    "Eduardo encara em silêncio absoluto.",
    "Bruno murmura um palavrão.",
    "Juliana se aproxima de você e segura seu braço com força.",
    "Alfreda: MEU DEUS... A história é real. Está ACONTECENDO DE NOVO!",
    "Ela se afasta correndo em direção à lateral do hotel, em pânico.",
    "Policial: EI! ESPERA! ALFREDA, VOLTA AQUI!"
  ],
  opcoes: [
    {
      texto: "Correr atrás de Alfreda",
      proxima: "dialogo_alfreda"
    }
  ]
},
{
  id: "desaparecimento_corpo",
  imagem: "img/hall_vazio.jpg",
  som: "audio/susto_breve.mp3",
  texto: [
    "Você volta ao hall principal.",
    "O corpo... desapareceu.",
    "No lugar onde estava... apenas um rastro de sangue escurecido no carpete.",
    "As pessoas estão paralisadas.",
    "Amanda recua um passo, levando a mão à boca.",
    "Renata deixa o celular cair no chão.",
    "Eduardo encara em silêncio absoluto.",
    "Bruno murmura um palavrão.",
    "Juliana se aproxima de você e segura seu braço com força.",
    "Alfreda: MEU DEUS... A história é real. Está ACONTECENDO DE NOVO!",
    "Ela se afasta correndo em direção à lateral do hotel, em pânico.",
    "Policial: EI! ESPERA! ALFREDA, VOLTA AQUI!"
  ],
  opcoes: [
    {
      texto: "Correr atrás de Alfreda",
      acao: () => {
        mostrarTextoExtra([
          "Você corre atrás de Alfreda, passando pela sala lateral do hotel.",
          "O som da chuva do lado de fora fica mais intenso.",
          "Você a encontra agachada perto da escada que dá acesso à área da piscina."
        ], "dialogo_alfreda");
      }
    }
  ]
},
{
  id: "dialogo_alfreda",
  imagem: "img/alfreda_sentada.jpg",
  texto: [
    "Você se aproxima de Alfreda e senta ao lado dela.",
    "Ela está encolhida, os joelhos juntos ao peito, o olhar perdido na escuridão do pátio externo.",
    "Alfreda: Talvez você ache que eu sou louca.",
    "Alfreda: Mas essas coisas que estão acontecendo aqui... isso tudo é real. É maligno.",
    "Alfreda: Eu já ouvi sussurros dessa história antes, ainda jovem, mas achei que era exagero. Até hoje.",
    "Ela limpa uma lágrima antes que caia.",
    "Alfreda: Eu não queria morrer aqui.",
    "Alfreda: ...mas talvez todos estejamos destinados a isso.",
    "Ela se vira para você. O olhar é intenso. Um contraste entre vulnerabilidade e algo mais profundo... desejo, medo, resignação.",
    "Alfreda: Me diga uma coisa...",
    "Alfreda: Se hoje fosse o seu último dia de vida...",
    "Alfreda: ...o que você gostaria de fazer comigo agora?",
    "Ela se aproxima. Dois estranhos unidos pelo medo, suor, perfume e a chuva misturando tudo em um momento suspenso no tempo."
  ],
  opcoes: [
    {
      texto: "Seguir o impulso e se entregar ao desejo",
      proxima: "alfreda_banheiro"
    },
    {
      texto: "Apenas sentar com ela em silêncio",
      proxima: "alfreda_silencio"
    }
  ]
},
{
  id: "alfreda_banheiro",
  imagem: "img/banheiro_escuro.jpg",
  texto: [
    "Sem dizer uma palavra, Alfreda se levanta lentamente, pega sua mão e o conduz por um corredor estreito.",
    "A chuva tamborila nos vidros, e o silêncio entre vocês é cortado apenas pelo som dos passos na madeira velha.",
    "Ela abre uma porta — o banheiro do térreo, vazio, úmido, iluminado por uma lâmpada tremeluzente.",
    "Sem pressa, fecha a porta atrás de si.",
    "Alfreda: Não diga nada... só me sinta.",
    "As mãos dela tocam seu rosto com delicadeza, como se buscassem um último consolo.",
    "O beijo é profundo, desesperado. Dois corpos se encontrando não por paixão, mas pelo medo da morte iminente.",
    "A camisa social dela desliza pelos ombros, revelando a pele quente sob o toque frio do ambiente.",
    "Ela o pressiona contra a parede gelada, e por um instante, o mundo parece parar — não há gritos, não há monstros, apenas respiração ofegante.",
    "O som da chuva se mistura aos suspiros, e o espelho parcialmente embaçado reflete uma imagem crua: um ato de vida em meio à ameaça constante de morte.",
    "Quando termina, ela encosta a testa na sua, olhos fechados, tentando segurar o momento por mais alguns segundos.",
    "Alfreda: Obrigada... por me fazer sentir viva, nem que seja por um instante.",
    "<span style='color:deeppink'>Malícia aumentada em +1 (rosa).</span>",
    "Uma batida seca ecoa do lado de fora.",
    "Alguém morreu."
  ],
  acao: () => {
    alterarMalicia("malicia", +1);
  },
  proxima: "reuniao_pos_morte"
},
{
  id: "alfreda_silencio",
  imagem: "img/escada_externa.jpg",
  texto: [
    "Você se senta ao lado de Alfreda, sem dizer nada por um instante.",
    "A chuva cai firme lá fora, e o som das gotas no telhado cria um ritmo constante e hipnótico.",
    "Ela respira fundo, parecendo tentar se recompor.",
    "{{nome}}: Se hoje fosse nosso último dia... eu gostaria de te ver feliz.",
    "{{nome}}: Você parece ser uma pessoa maravilhosa, Alfreda.",
    "Ela vira o rosto lentamente, te observando em silêncio, como se tentasse decifrar quem você é de verdade.",
    "Os dois permanecem ali por mais alguns minutos, lado a lado, como se o mundo ao redor tivesse sumido.",
    "Por um momento, pareciam até um casal.",
    "Alfreda: Acho melhor voltarmos... alguém deve estar sentindo nossa falta, {{nome}}.",
    "<span style='color:lightgreen'>Afinidade com Alfreda aumentada em +1.</span>"
  ],
  acao: () => {
    alterarAfinidade("Alfreda", +1);
  },
  proxima: "reuniao_pos_morte"
,
}
  ]
