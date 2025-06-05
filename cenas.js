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
        alterarAfinidade("Sara", -1);
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
  imagem: "img/Juliana_abraço.jpg",
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
  //som: "audio/susto.mp3",     // som abrupto
  texto: [],
  tempo: 2000,                // 2 segundos
  proxima: "pos_susto"
},
{
  id: "pos_susto",
  imagem: "img/chao_quarto.jpg", // pode ser uma imagem tremida ou de ângulo baixo
  //som: "audio/queda.mp3", // som de queda corporal
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
      alterarAfinidade("Bruno", +1);
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
},
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
    "Você por um minuto não acredita no que Alfreda disse, mas com base com o que viu no vidro da janela, talvez deva dá um voto de confiança a ela.",
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
    "— Sou estudante de Psicologia. Treinado para desvendar os labirintos do trauma, mas o que vivenciamos aqui agora...",
    "Isso realmente me pegou de surpresa. Talvez há uma razão profunda para a minha presença aqui, embora a resposta ainda me escape.",
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
    "— Só isso.",
    "Seu comentário chamou a atenção de Alfreda.",
    "Porém Eduardo olha para você com suspeitas.",
  ],
    opcoes: [
  {
    texto: "Você ignora a reação de Eduardo.",
    acao: () => {
      mostrarTextoExtra([
        "Eduardo: Bom, e agora xerife, o que o senhor recomenda que façamos!?",
        "Renata: ¡Oye! ¡No digas esas cosas, Eduardo!"], "desaparecimento_corpo");
    }
  }
  ]
},
  {
  id: "desaparecimento_corpo",
  imagem: "img/hall_vazio.jpg",
  texto: [
    "Você volta ao hall principal.",
    "O corpo... desapareceu.",
    "No lugar onde estava... apenas um rastro de sangue escurecido no carpete.",
    "As pessoas estão paralisadas.",
    "Amanda recua um passo, levando a mão à boca.",
    "Renata deixa o celular cair no chão.",
    "Eduardo encara em silêncio absoluto.",
    "Bruno: PUTA QUE PARIU...",
    "Juliana se aproxima de você e segura seu braço com força.",
    "Alfreda: MEU DEUS... A história é real. Está ACONTECENDO DE NOVO!",
    "Ela se afasta correndo em direção à lateral do hotel, em pânico.",
    "Marcos: EI! ESPERA! ALFREDA, VOLTA AQUI!"
  ],
  opcoes: [
  {
    texto: "Ficar ao lado de Juliana",
    acao: () => {
      mostrarTextoExtra(["Marcos:Alguém precisa ir atrás dela!", "Juliana olha para você com pesar, mas ela compreende a situação", "Juliana:Tudo bem {{nome}} pode ir, eu te aguardo aqui."], "dialogo_alfreda");
      alterarAfinidade("Juliana", +1);
      alterarAfinidade("Bruno", +1);
    }
  },
  {
    texto: "Largar a mão de Juliana e ir atrás de Alfreda.",
    acao: () => {
      mostrarTextoExtra(["Juliana: Ei! Espera {{nome}}!", "Marcos: Deixe ele ir Juliana! Ninguém pode ficar sozinho nesse momento!"], "dialogo_alfreda");
      alterarAfinidade("Juliana", -1);
    }
  }
]
},
{
  id: "dialogo_alfreda",
  imagem: "img/alfreda_sentada.jpg",
  texto: [
    "Você corre em busca de Alfreda, logo encontra ela sentada no chão próximo a escada que dá acesso aos quartos.",
    "Você se aproxima e senta ao lado dela.",
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
    "Alfreda: ...o que você gostaria de fazer?",
    "Ela se aproxima. Dois estranhos unidos pelo medo, suor, perfume e a chuva misturando tudo em um momento suspenso no tempo.",
    "Você se questiona se isso é realmente real.",
    "Pensa e reflete sobre suas próximas ações."
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
    "A chuva caindo nos vidros, e o silêncio entre vocês é cortado apenas pelo som dos passos na madeira velha.",
    "Ela abre uma porta — o banheiro do térreo, vazio, úmido, iluminado por uma lâmpada tremeluzente.",
    "Sem pressa, fecha a porta atrás de si.",
    "Alfreda: Não diga nada... só me sinta.",
    "As mãos dela tocam seu rosto com delicadeza, como se buscassem um último consolo.",
    "O beijo é profundo, desesperado. Dois corpos se encontrando não por paixão, mas pelo medo da morte iminente.",
    "A camisa social dela desliza pelos ombros, revelando a pele quente sob o toque frio do ambiente.",
    "Ela o pressiona contra a parede gelada, e por um instante, o mundo parece parar — não há mais som de chuva para vocês, apenas respiração ofegante.",
    "O som da chuva se mistura aos suspiros, e o espelho parcialmente embaçado, Alfreda deseja mais de você"
  ],
  opcoes: [
  {
    texto: "Tirar a roupa de Alfreda.",
    acao: () => {
      mostrarTextoExtra(["Você tira a roupa de Alfreda...","Ela fica corada por um breve momento...","Ela se agacha a sua frente submissa a você e abaixa suas calças..."], "alfreda_sex");
      alterarMalicia("malicia", +1);
    }
  },
  {
    texto: "Acariciar os seios de Alfreda.",
    acao: () => {
      mostrarTextoExtra(["Você acaricia os seios de Alfreda...", "Ela tira a própria roupa, te olhando com um desejo intenso...","Ela se agacha a sua frente submissa a você e abaixa suas calças..."], "alfreda_sex");
      alterarMalicia("malicia", +2);
    }
  }
]
},
{
  id: "alfreda_sex", 
  imagem: "img/banheiro_escuro.jpg", 
  texto: [
    "Alfreda esta com as mãos deslizando pela sua virilha.",
    "Ela te olha nos olhos por um breve momento, antes de se inclinar e começar a te excitar com a língua.",
    "Você a observa agachada, e com um olhar faminto, ela segura sua virilha com mais força.",
    "Alfreda começa a te chupar, mantendo o contato visual. Você sente o prazer subir, a respiração se tornando ofegante.",
    "Ela intensifica os movimentos, te levando ao limite."
  ],
  opcoes: [
    {
      texto: "Foder a buceta dela",
      acao: () => {
        alterarMalicia("malicia", +2);
        mostrarTextoExtra(["Você decide possuí-la..."], "alfreda_sex01");
        
      }
    },
    {
      texto: "Foder o ânus dela",
      acao: () => {
        alterarMalicia("malicia", +3);
        mostrarTextoExtra(["Você se prepara para possuí-la por trás..."], "alfreda_sex02"); 
      }
    }
  ]
},
{
  id: "alfreda_sex01",
  imagem: "img/banheiro_escuro.jpg", 
  texto: [
    "Você a levanta com agilidade e a coloca de costas contra a pia gelada, erguendo uma de suas pernas para firmá-la.",
    "Seus corpos se unem em uma fusão intensa, o contato inicial arrancando um gemido abafado dela.",
    "Os gemidos de Alfreda ecoam no ar, e ela começa a gritar de prazer, te incentivando com a voz rouca.",
    "Alfreda: 'Isso! Me fode com mais força!'",
    "Você obedece sem hesitar, segurando-a firmemente pelo pescoço, aumentando a intensidade e a força de cada estocada. O som da pele se chocando preenche o pequeno banheiro, o ritmo frenético te levando ao limite."
  ],
  opcoes: [
    {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      },
     {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      },
      {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      }
  ]
},
{
  id: "alfreda_sex02",
  imagem: "img/banheiro_escuro.jpg", 
  texto: [
    "Com um movimento rápido, você a levanta e a vira, fazendo seu corpo quente se alinhar perfeitamente com o dela.",
    "Alfreda se entrega sem reservas, os olhos fechados em puro desejo enquanto você a posiciona.",
    "A pele dela se arrepia sob seu toque, e um gemido baixo escapa de seus lábios.",
    "Você a penetra lentamente, sentindo a resistência inicial ceder à medida que seu pênis se aprofunda em seu ânus.", "Alfreda arqueia as costas, um gemido alto de prazer rompendo o silêncio, seguido por um grito abafado que ecoa no banheiro.",
    "Alfreda, com a voz rouca e ofegante, te implora: 'Mais! Fode com mais força!'.",
    "O corpo dela está tão molhado, tão entregue, que suas pernas tremem e ela mal consegue se manter em pé. Você a segura com firmeza, sentindo-a se apertar ao seu redor a cada estocada.",
    "Obedecendo ao seu comando, você intensifica o ritmo, cada impulso mais profundo e forte que o anterior, levando-a a um frenesi de prazer.", "O som da pele se chocando e os gemidos dela se misturam ao som da chuva lá fora, criando uma sinfonia erótica."
  ],
  opcoes: [
    {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      },
     {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      },
      {
      texto: "GOZAR",
      proxima: "alfreda_cum" 
      }
  ]
},
{
  id: "alfreda_cum",
  imagem: "img/banheiro_escuro.jpg",
  texto: [
    "O prazer explode em um clímax avassalador, consumindo você e Alfreda simultaneamente.",
    "Ambos gemem, sentindo a descarga intensa do gozo invadir cada célula do corpo.",
    "Com as respirações ofegantes, vocês se olham.",
    "Nos olhos dela, a confirmação: ela gostou tanto quanto você.",
    "Um entendimento mútuo e silencioso passa entre vocês, selando o que acabou de acontecer.",
    "Mas a realidade brutal os atinge.",
    "Enquanto os corpos se uniam em prazer, algo terrível acontecia na casa.",
     "Alguém morreu",
    "Vocês se vestem apressadamente, os movimentos ágeis, a adrenalina substituindo o prazer.",
    "Há um senso de que o tempo se esgota.",
    "A constatação é fria e chocante: alguém acaba de morrer."
  ],
  opcoes: [
    {
      texto: "Voltar para o hall junto com Alfreda",
      acao: () => {
        mostrarTextoExtra(["Vocês se apressam para o hall, o silêncio preenchido pela tensão do que está por vir."], "retorno_hall02");
      }
    }
  ]
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
    "Alfreda se inclina para você e beija seu rosto com um gento carinhoso",
    "Alfreda: Você é um bom homem {{nome}}",
    "Alfreda: Acho melhor voltarmos... alguém deve estar sentindo nossa falta, {{nome}}.",
    "AFINIDADE ALFREDA +1."
  ],
  acao: () => {
    alterarAfinidade("Alfreda", +1);
  },
  proxima: "retorno_hall02"
,
},
{
  id: "retorno_hall",
  imagem: "img/hall_reuniao.jpg",
  texto: [
    "Você e Alfreda retornam para a sala. Todos estão ali, reunidos, tensos.",
    "Juliana se aproxima, visivelmente abalada.",
    "Juliana: Está tudo bem...? O que aconteceu?",
    "Antes que você possa responder, Marcos se levanta do sofá com um olhar de julgamento.",
    "Marcos: 'Tudo bem'? Ah, claro. Você sumido com a senhora do hotel enquanto tem um assassino solto aqui dentro!",
    "Alfreda desvia o olhar, constrangida.",
    "O ambiente fica tenso."
  ],
  opcoes: [
    {
      texto: "Defender Alfreda",
      acao: () => {
        alterarAfinidade("Alfreda", +1);
        mostrarTextoExtra([
          "{{nome}}: Ei, pega leve. A Alfreda não tem culpa de nada. A gente só conversou, nada mais.",
          "Renata: ¡Por favor, paren! Estamos perdendo el foco. Aconteceu uno assassinato e vocês ficam querendo brigar?",
          "Marcos: Segundo a Sra. Alfreda pode não ser um assassinato... e sim o sobrenatural!",
          "Juliana: E-Espera... cadê o ator...?",
          "Renata: Eduardo?!",
          "Um silêncio absoluto toma conta do ambiente."
        ], "eduardo00");
      }
    },
    {
      texto: "Ficar em silêncio",
      acao: () => {
        alterarAfinidade("Alfreda", -1);
        mostrarTextoExtra([
          "Você prefere não se meter, mas o ambiente fica cada vez mais pesado.",
          "Renata: ¡Por favor, paren! Estamos perdendo el foco. Aconteceu uno assassinato e vocês ficam querendo brigar?",
          "Marcos: Segundo a Sra. Alfreda pode não ser um assassinato... e sim o sobrenatural!",
          "Juliana: E-Espera... cadê o ator...?",
          "Renata: Eduardo?!",
          "Um silêncio absoluto toma conta do ambiente."
        ], "eduardo00");
      }
    }
  ]
},
{
  id: "eduardo00",
  imagem: "img/sala_grupo_tenso.jpg",
  texto: [
    "O clima está pesado. O desaparecimento de Eduardo levanta suspeitas.",
    "Bruno, o advogado, cruza os braços com expressão séria:",
    "Bruno: Se formos lógicos, todos estavam na sala... com exceção de vocês dois.",
    "Renata: Yo estaba con el celular, procurando señal... justo aqui, na sala.",
    "Juliana: É verdade. Eu vi a Renata o tempo todo. Ela não saiu.",
    "Amanda: Os únicos que eu não vi por aqui foram vocês dois... e o advogado.",
    "Bruno: Cuidado com o que diz, enfermeira. Falsa acusação é crime. Eu fui ao banheiro, e avisei ao Marcos.",
    "Marcos: Ele avisou. Só que dessa vez... não houve grito algum.",
    "Todos olham agora para você e Alfreda.",
    "O silêncio é quebrado por uma voz suave e hesitante.",
    "Sara, que estava quieta desde o início, ergue os olhos e fala pausadamente:",
    "Sara: E-eu... ele tinha me dito... que ia na c-cozinha...",
    "Você sente um alívio imenso ao ouvir aquilo. Olha para Alfreda e ela também suspira, aliviada.",
    "Marcos: Todos! Vamos para a cozinha."
  ],
  opcoes: [
    {
      texto: "Você acompanha todos indo para a cozinha.",
      proxima: "eduardo01"
    }
  ]
},
{
  id: "eduardo01",
  imagem: "img/cozinha_corpo_eduardo.jpg",
  texto: [
    "Ao adentrar a cozinha, todos param — boquiabertos.",
    "Lá está Eduardo.",
    "Deitado no chão frio, com o peito aberto e o coração arrancado. Assim como o primeiro corpo.",
    "Juliana cobre a boca, em choque: — Meu Deus do céu...",
    "Renata recua um passo, murmurando: — ¡Otra vez... el corazón...!",
    "Amanda se ajoelha próxima, mas não toca no corpo: — Isso foi... cirúrgico. Frio. Preciso.",
    "Bruno, o advogado, franze o cenho: — E ainda assim... ninguém viu nada.",
    "Marcos olha em volta e rosna: — Isso não pode ser coincidência. Mais um corpo... e vocês dois fora de vista.",
    "Alfreda então se adianta, firme mas abalada: — Agora vocês acreditam em mim?",
    "O silêncio é denso.",
    "Marcos engole seco, mas se defende: — Isso ainda não prova nada. Pode muito bem ter sido vocês...",
    "Bruno o interrompe: — Objeção, suposição sem base. Não há *motivo*, *oportunidade real*, nem sequer prova material. Isso é ilação.",
    "Marcos hesita, mas cede com um suspiro: — Tá... tá... mas continuo desconfiado.",
    "Você então se aproxima de Sara. Ela está sentada no canto, tremendo, abraçando os joelhos.",
    "Sara: — {{nome}}... será... será que a gente vai morrer aqui?"
  ],
  opcoes: [
    {
      texto: "Não fala isso, Sara. Eu vou te proteger, aconteça o que acontecer.",
      acao: () => {
        alterarAfinidade("Sara", +1);
        mostrarTextoExtra([
          "Você segura a mão dela. Apesar do medo, ela respira fundo e assente levemente.",
          "Por um momento, ela parece acreditar em você."
        ], "alfreda_historia");
      }
    },
    {
      texto: "Se continuar pensando assim, talvez sim. Para de falar besteira.",
      acao: () => {
        alterarAfinidade("Sara", -1);
        mostrarTextoExtra([
          "Sara se encolhe ainda mais. Seus olhos enchem de lágrimas.",
          "Você sente que se afastou dela com essas palavras duras."
        ], "alfreda_historia");
      }
    }
  ]
},
{
  id: "alfreda_historia",
  imagem: "img/sala_controle_documentos.jpg",
  texto: [
    "Alfreda respira fundo, encara o grupo e diz:",
    "— Antes de continuarmos... vocês precisam ver uma coisa.",
    "Ela caminha até uma parede no fundo da sala e gira uma chave escondida. Um compartimento secreto se abre, revelando uma porta de ferro enferrujada.",
    "Do outro lado, uma pequena sala de vigilância. Monitores quebrados, fios soltos... e uma prateleira com documentos antigos.",
    "— Isso era um sanatório. Antes de virar hotel. Meu avô trabalhou aqui.",
    "Juliana: Um sanatório...? Como assim?",
    "Renata: Loco hospital viejo... ¿qué tipo de lugar es este?",
    "Alfreda: Eu nunca quis acreditar, mas está tudo nos relatórios.",
    "Ela entrega os papéis para Bruno e Amanda. Os dois se aproximam sob a luz fraca da sala.",
    "Bruno: Hmmm... ‘Relatório de internação nº 273... paciente não identificado... comportamento violento... submetido a hidroterapia sem consentimento’.",
    "Amanda: Aqui tem um protocolo... diz que alguns pacientes foram mantidos sedados por semanas inteiras. E esse outro... 'teste de isolamento total'.",
    "Bruno: Isso aqui é crime. Tem fichas rasuradas, registros falsos, datações que não batem...",
    "Amanda: Há um padrão. Sempre os mesmos nomes nos procedimentos mais... questionáveis.",
    "Ela franze a testa.",
    "Amanda: Aqui... Enfermeiro-chefe: {{nome}} {{sobrenome}}. — Esse é o seu nome, não é?",
    "Bruno arregala os olhos.",
    "Bruno: Espera aí... tem mais de um documento com esse nome.",
    "Ele pega outro papel e lê em voz alta, pausadamente:",
    "— 'Enfermeiro-chefe responsável pelos turnos noturnos. Recomendado por conduta exemplar. Registros assinados por {{nome}} {{sobrenome}}.'",
    "Silêncio.",
    "Todos os olhos se voltam lentamente para você.",
    "Amanda: É o seu nome, não é?",
    "Juliana te encara em choque. Sara recua um passo. Marcos leva a mão ao cinto, como se quisesse se armar.",
    "Renata: No puede ser... eso es una coincidencia, ¿verdad?",
    "Alfreda não diz nada. Apenas observa."
  ],
  opcoes: [
    {
      texto: "Sim, é o meu sobrenome. Mas eu não sei o que isso significa.",
      proxima: "tensao_suspensa"
    },
    {
      texto: "Isso é um engano. Deve ser outra pessoa.",
      proxima: "tensao_suspensa"
    },
    {
      texto: "Talvez... Espera, eu não acredito que vocês acham que sou eu!",
      acao: () => {
        alterarMalicia("malicia", +1);
      },
      proxima: "tensao_suspensa"
    }
  ]
},
{
  id: "tensao_suspensa",
  imagem: "img/sala_controle_tensa.jpg",
  texto: [
    "Juliana: Isso é sério?! Por que o seu nome está nesses papéis?!",
    "Sara: M-Mas... isso não faz sentido... você é novo aqui, não é? N-Não é possível...",
    "Alfreda tenta conter o caos:",
    "Alfreda: Esperem... talvez haja uma explicação. O nome pode ser coincidência, pode ser herança familiar—",
    "Marcos: —CALA A BOCA!",
    "O grito dele ecoa pela sala.",
    "Marcos: Você mentiu. Escondeu isso da gente. E agora quer falar em coincidência?",
    "Ele se vira lentamente para você, cada palavra pesada como chumbo.",
    "Marcos: Garoto... você tem relação com esse nome?",
    "O silêncio pesa mais que a tempestade lá fora. Todos aguardam sua resposta."
  ],
  opcoes: [
    {
      texto: "E-eu... eu não sei. Juro que não sei de nada disso...",
      proxima: "sala_desconfianca"
    },
    {
      texto: "T-talvez seja algum parente... eu nunca ouvi falar desse lugar antes...",
      proxima: "sala_desconfianca"
    }
  ]
},
{
  id: "sala_desconfianca",
  imagem: "img/sala_controle_renata_surta.jpg",
  texto: [
    "O silêncio é quebrado por um estalo seco — o celular de Renata cai no chão, a tela trincada.",
    "Renata: EU NÃO VOU FICAR AQUI! EU NÃO VOU MORRER COM VOCÊS!",
    "Ela grita com toda a força que tem nos pulmões, a voz rasgando o ambiente.",
    "Renata: VOCÊS SÃO TODOS MALUCOS! ISSO É UM INFERNO! UMA ARMADILHA MALDITA!",
    "Ela se vira para Alfreda, o rosto tomado pelo desespero.",
    "Renata: E VOCÊ! VOCÊ SEMPRE SABIA! SUA... VADIA MENTIROSA!",
    "Juliana tenta segurá-la, mas Renata empurra todos para o lado com violência.",
    "Renata: EU VOU FUGIR DESTE LUGAR DE MERDA! EU PREFIRO MORRER LÁ FORA DO QUE AQUI DENTRO COM VOCÊS!",
    "Ela dispara pelo corredor escuro, os passos ecoando contra a madeira antiga.",
    "Amanda: RENATA! NÃO!",
    "Bruno: Alguém precisa impedi-la!",
    "Você vê todos em choque. Ninguém se move. Está nas suas mãos.",
    "Ela parece correr em direção ao quarto... mas será mesmo?"
  ],
  opcoes: [
    {
      texto: "Correr atrás de Renata",
      proxima: "renata_corrida"
    }
  ]
},
{
  id: "renata_corrida",
  imagem: "img/sala_momento_tensao.jpg",
  texto: [
    "Você dá um passo à frente, prestes a correr atrás de Renata — mas é interrompido por um som seco, ameaçador.",
    "*CLACK*",
    "Marcos saca uma arma e aponta diretamente para você.",
    "Marcos: NEM UM PASSO, SEU BOSTINHA!",
    "Todos congelam. Um novo choque toma conta da sala.",
    "Juliana: MARCOS, PELO AMOR DE DEUS!",
    "Amanda: Abaixa isso! Por favor, se acalma!",
    "Bruno: Você enlouqueceu?! O que acha que está fazendo?!",
    "Marcos sorri, os olhos alucinados.",
    "Marcos: Não está óbvio? Dando um fim a tudo isso. Esse porco... esse maldito garoto!",
    "Ele gira a arma, agora apontando para Alfreda.",
    "Marcos: E essa porca asquerosa... hahaha... É TUDO CULPA DE VOCÊS DOIS!",
    "Ele dá um passo à frente.",
    "Marcos: Eu já vivi demais... mas não pretendo morrer. Não aqui. Não agora.",
    "Então, começa a gritar para o teto, como se falasse com o próprio Hotel.",
    "Marcos: ME DIZ O QUE VOCÊ QUER, MALDITO HOTEL!",
    "Marcos: É SANGUE, É ISSO?! QUER O CORPO DELES PRA ESSE RITUAL INFERNAL!?",
    "Você sente o suor escorrer pelas costas. O tempo parece parar. Mas precisa decidir."
  ],
  opcoes: [
    {
      texto: "Intervir e tentar desarmar Marcos",
      proxima: "acalmar_marcos"
    },
    {
      texto: "Tentar acalmar Marcos",
      proxima: "acalmar_marcos"
    }
  ]
},
{
  id: "acalmar_marcos",
  imagem: "img/tensao_arma.jpg",
  texto: [
    "Você pensa bem no que fazer, e sabe que se reagir ira morrer ali mesmo",
    "Você levanta as mãos, sem se mover.",
    "{{nome}}: Marcos... olha pra mim. Ninguém aqui quer te machucar.",
    "Marcos treme. Sua respiração é acelerada, olhos vermelhos.",
    "{{nome}}: Vamos sair dessa. Mas precisamos estar juntos. Você não é um assassino.",
    "Ele hesita. A arma ainda erguida, mas o foco se desfaz.",
    "Amanda, em silêncio, se aproxima por trás e aplica um sedativo no pescoço dele.",
    "Marcos solta um grunhido e desaba nos braços dela.",
    "Juliana corre até você e te abraça com força.",
    "Bruno pega a arma do chão e a entrega a Alfreda, que guarda rapidamente.",
    "Alfreda: Obrigada. Não sei o que teria acontecido se você não tivesse tentado falar com ele..."
  ],
  opcoes: [
    {
      texto: "O-obrigado Amanda, você salvou a gente, ou melhor, eu...",
      proxima: "voltar_tensao"
    },
  ]
},
{
  id: "voltar_tensao",
  texto: [
    "Vocês amarram Marcos em uma cadeira. As luzes começam a falhar.",
    "Todos estão visivelmente abalados.",
    "Bruno: Ahhh... de repente, estar sedado não parece tão ruim assim...",
    "Amanda: Se quiser, tenho mais um aqui.",
    "Bruno: Pensando bem... melhor não.",
    "Alfreda: Então... o que vamos fazer com a Renata?",
    "Amanda: Acho que temos problemas maiores no momento.",
    "Ela olha para você com seriedade.",
    () => {
      if (afinidade.Juliana >= 5) {
        return "Juliana: Não. Impossível ele ser a pessoa que os documentos dizem. Provavelmente é um parente o qual ele mesmo desconhece. Mas claramente, ele deveria saber... afinal, que tipo de pessoa não sabe o nome do próprio avô?";
      } else {
        return "Alfreda: as datas no documento são de 1948. A menos que o {{nome}} tenha 90 anos com rosto de 20, ele não é a pessoa que os papéis referenciam.";
      }
    }
  ],
  opcoes: [
    {
      texto: "Você respira aliviado ouvindo isso.",
      proxima: "proxima_cena"
    }
  ]
},
{
  id: "decisao_comida_renata",
  texto: [
    "Sara te abraça apertado, sussurrando com a voz embargada:",
    '"Eu só quero que tudo isso acabe... por favor."',
    "Juliana observa a cena com pesar nos olhos, em silêncio.",
    "Amanda: Precisamos comer. E dormir. Ninguém vai aguentar essa tensão por muito mais tempo.",
    "Bruno: Certo. Vamos organizar uma escala. Alguém precisa vigiar o Marcos, outro ir buscar comida, outro checar a Renata.",
    "Amanda: Só tem um problema...",
    "Ela encara todos com seriedade.",
    "Amanda: As mulheres não querem ir sozinhas até a cozinha por causa do corpo... e nem até o quarto da Renata, que é longe demais."
  ],
  opcoes: [
    {
      texto: "Eu vou ver a Renata sozinho. Alguém precisa fazer isso.",
      acao: () => alterarMalicia("malicia", +2),
      proxima: "caminho_malicioso"
    },
    {
      texto: "Fiquem calmas... Eu fico aqui com vocês. Bruno pode cuidar disso.",
      acao: () => {
        alterarAfinidade("Juliana", +1);
        alterarAfinidade("Sara", +1);
        alterarAfinidade("Amanda", +1);
        alterarAfinidade("Bruno", +1);
      },
      proxima: "caminho_afinidade"
    }
  ]
},
//CAMINHO RENATA - MALICIA
{
  id: "chegada_porta_renata",
  texto: [
    "Você para diante da porta do quarto da Renata.",
    "Todos os discursos, revelações e gritos que ecoaram até aqui... não importam mais.",
    "Seu tataravô? O sanatório? O medo nos olhos das mulheres? Nada disso parece tocar você agora.",
    "O que importa é que ela está ali, atrás daquela porta.",
    "Renata. A mulher que fez seu sangue ferver mesmo em meio ao caos.",
    "Claro. Ela não sabe nada disso, mas você sabe que pode fazer ela compreender que é o amor da vida dela",
    "Você sente o coração acelerar — não de medo, mas de desejo. Cru, direto, carnal.",
    "Você respira fundo... e sorri."
  ],
  opcoes: [
    {
      texto: "Abrir a porta.",
      acao: () => alterarMalicia("malicia", +2),
      proxima: "quarto_renata01"
    }
  ]
},

//ESPERANDO BRUNO >> 
{
  id: "bruno_morto_cozinha",
  texto: [
    "Vocês esperam... e esperam...",
    "Bruno está demorando demais.",
    "Amanda: Isso tá estranho. Ele não levaria tanto tempo pra pegar umas latas na cozinha.",
    "Juliana: Não gosto disso. Vamos todos juntos, por favor.",
    "Ao entrarem na cozinha, a visão paralisa todos.",
    "O corpo de Bruno está estendido sobre a mesa.",
    "Peito aberto. O coração arrancado.",
    "Amanda cai de joelhos no chão, desesperada. Juliana cobre a boca para não gritar. Sara treme.",
    "Amanda: NÃO! NÃO, NÃO, NÃO! ELE ERA NOSSA MELHOR CHANCE!",
    "Juliana: Isso... isso não é humano.",
    "Sara: O que a gente faz agora...?"
  ],
  opcoes: [
    {
      texto: "Vamos voltar para o Marcos.",
      proxima: "impedidos_por_sara"
    },
    {
      texto: "Vamos procurar a Renata.",
      proxima: "impedidos_por_sara"
    }
  ]
},
//Way torto
{
  id: "caminho_malicioso",
  texto: [
    "Você baixa os olhos e suspira alto, encenando um cansaço emocional que não sente.",
    "— Eu... acho que deveria ir ver a Renata. Me sinto meio culpado por tudo isso.",
    "Você diz isso com um tom carregado de falsa preocupação, manipulando o silêncio ao redor.",
    "Bruno: É... talvez seja o melhor.",
    "Amanda: Só tome cuidado, por favor.",
    "Sara segura seu braço por um instante, preocupada, mas acaba soltando.",
    "Juliana apenas assente, acreditando na sua boa vontade.",
    "Você dá as costas para todos... e um sorriso quase imperceptível se forma no canto da sua boca.",
    "No fundo, você sabe que não está indo apenas para ver como Renata está.",
    "Você caminha sozinho pelos corredores escuros, o som dos seus passos ecoando no vazio sombrio do hotel.",
    "Aparentemente não se importa nem mesmo com o cheiro do sangue que esta espalhado pelo hotel",
  ],
  acao: () => alterarMalicia("malicia", +1),
  proxima: "chegada_porta_renata"
},
//way torto
{
  id: "impedidos_por_sara",
  texto: [
    "Você propõe um caminho, mas Sara interrompe com a voz trêmula:",
    "Sara: Aquele cara é maluco... ele apontou uma arma pra você!",
    "Amanda: Concordo. Se voltarmos, podemos ser os próximos.",
    "Juliana: Então... então vamos procurar a Renata.",
    "Amanda se levanta devagar, ainda cambaleando, mas de repente corre em direção à porta que dá acesso à rua.",
    "Amanda: EU NÃO VOU MORRER AQUI!!! EU NÃO VOU!!!",
    "Ela cruza a porta... e cai dura no chão, na chuva.",
    "Sara cobre a boca, apavorada. Juliana grita o nome de Amanda. Alfreda apenas fecha os olhos, como se já esperasse por isso.",
    "Todos estão abalados. Exaustos. Mas o horror ainda não acabou.",
    "Juliana: Só... só resta ir ver a Renata.",
    "Sara: Eu queria tanto desistir...",
    "Alfreda: Mas não podemos. Não ainda.",
    "Sara: Por favor! Alguém faz isso parar...",
    "Juliana segura a mão de sua filha",
    "Juliana: Vai dar tudo certo oo {{nome}} vai cuidar de nós Sara..."
  ],
  opcoes: [
    {
      texto: "Sim! Vamos juntos. Eu não deixo nada acontecer com vocês.",
      acao: () => {
        alterarAfinidade("Juliana", +1);
        alterarAfinidade("Sara", +1);
        alterarAfinidade("Alfreda", +1);
        mostrarTextoExtra([
          "Você encara as três com firmeza.",
          "— Vamos juntos. Eu não deixo nada acontecer com vocês.",
          "Juliana respira fundo. Sara enxuga os olhos. Alfreda apenas balança a cabeça.",
          "Você conseguiu convencê-las a seguir com você até o quarto de Renata."
        ], "buscar_renata");
      }
    }
  ]
},
{
  id: "buscar_renata",
  texto: [
    "Vocês caminham até o quarto da Renata...",
    "No caminho, veem sangue na cozinha, no hall... e o corpo de Amanda ainda lá fora.",
    "O clima é de puro terror.",
    "Ao chegarem diante da porta do quarto, as três mulheres olham para você e assentem com a cabeça, esperando sua decisão."
  ],
  opcoes: [
    {
      texto: "Bater na porta e chamar por Renata",
      acao: () => {
        mostrarTextoExtra([
          "Você bate na porta chamando por Renata, mas ela não responde.",
          "Você então gira a maçaneta da porta lentamente e adentra.",
          "Você não vê Renata nesse momento.",
          "No entanto, a porta se fecha sozinha atrás de você.",
          "As três mulheres ficam do lado de fora, presas do outro lado."
        ], "quarto_renata01");
      }
    },
    {
      texto: "Abrir a porta vagarosamente e entrar",
      acao: () => {
        mostrarTextoExtra([
          "Você gira a maçaneta da porta lentamente e adentra.",
          "Você não vê Renata nesse momento.",
          "No entanto, a porta se fecha sozinha atrás de você.",
          "As três mulheres ficam do lado de fora, presas do outro lado."
        ], "quarto_renata00");
      }
    }
  ]
},
{
  id: "quarto_renata00",
  texto: [
    "Você observa o ambiente do quarto.",
    "Peças íntimas de Renata estão jogadas pelo chão.",
    "O quarto está iluminado apenas por um abajur avermelhado.",
    "A atmosfera é estranhamente quente... e íntima."
  ],
  acao: () => alterarMalicia("malicia", +1),
  opcoes: [
    {
      texto: "Chamar por Renata",
      proxima: "quarto_renata01"
    }
  ]
},
{
  id: "quarto_renata01",
  texto: [
    "Você chama por Renata enquanto tenta abrir a porta que se fechou sozinha.",
    "Do lado de fora, não dá pra escutar nada, nem sequer o barulho da chuva escuta mais.",
    "Eis que, do banheiro, Renata aparece — enrolada apenas em uma toalha."
  ],
  opcoes: [
    {
      texto: "Me desculpa ter entrado assim, eu não sabia que você estava...",
      acao: () => {
        alterarAfinidade("Renata", +1);
        mostrarTextoExtra([
          "Você se desculpa por ter entrado e explica que não sabia que ela estava ali.",
          "Antes mesmo de terminar, ela te interrompe:",
          "Renata: — Tá tudo bem. Relaxa.",
          "Renata: — Bem... Acho que eu precisava de um tempo sozinha.",
          "Renata: — No entanto... agora acredito na dona do hotel. Não percebi no momento, mas esse lugar me dá arrepios."
        ], "quarto_renata02");
      }
    }
  ]
},
{
  id: "quarto_renata02",
  texto: [
    "Renata está parada diante de você, o vapor ainda saindo do banheiro.",
    "Ela parece vulnerável, mas confiante. O silêncio entre vocês é denso.",
    "Você respira fundo..."
  ],
  opcoes: [
    {
      texto: "Nossa... Você é tão linda... Eu não tinha reparado",
      acao: () => {
        alterarMalicia("malicia", +1);
        mostrarTextoExtra([
          "Você se declara, se entregando um pouco ao desespero.",
          "Renata: — O quê...?",
          "Renata: — Eu não fazia ideia de que você pensava isso de mim.",
          "Renata: — Eu achei que você gostava de outra pessoa.",
          "Renata: — Saber disso agora... me faz me sentir viva. Uma mulher de verdade.",
          "Ela sorri suavemente, pela primeira vez desde que tudo começou."
        ], "quarto_renata03");
      }
    }
  ]
},
{
  id: "quarto_renata03",
  texto: [
    "Renata: — Qué bella indicación, ¿no? Quién diría que pasaría todo esto...",
    "Renata: — Voy a tener que acabar con ese fan mío después, hahaha.",
    "Renata: — A propósito... aconteceu mais alguma coisa na casa?!"
  ],
  opcoes: [
    {
      texto: "Contar a verdade sobre a morte de Bruno",
      acao: () => {
        alterarAfinidade("Renata", +1);
        mostrarCena("quarto_renata_fim");
      }
    },
    {
      texto: "Mentir dizendo que está tudo bem",
      acao: () => {
        alterarMalicia("malicia", +1);
        mostrarCena("quarto_renata04");
      }
    }
  ]
},
//caminho torto
{
  id: "quarto_renata_04",
  texto: [
    "Renata cruza os braços, encara você com um sorriso enviesado e pergunta:",
    "Renata: — Então... o que veio fazer no meu quarto?",
    "O tom da voz dela está carregado de intenção. Ela está esperando uma resposta à altura.",
    "Renata: — Eu percebi os seus olhares... não disfarçava nada. Ficava evidente.",
    "Ela se senta na beirada da cama, cruza as pernas e solta em espanhol:",
    "Renata: — ¿Qué quieres, amor?"
  ],
  opcoes: [
    {
      texto: "Eu quero você, Renata.",
      acao: () => {
        alterarMalicia("malicia", +1);
        mostrarCena("quarto_renata_05");
      }
    }
  ]
},

//ramificação 
{
  id: "quarto_renata_fim",
  texto: [
    "Você conta tudo o que aconteceu com Marcos após ela ter saído do grupo.",
    "Renata: — Já esperava aquele gordinho metido a policial surtar uma hora dessas...",
    "Mas, quando você menciona que Bruno também morreu da mesma forma, algo muda no rosto de Renata.",
    "Ela para, fica pálida, os olhos tremem.",
    "Renata começa a suar, seu corpo treme visivelmente.",
    "Sem dizer uma palavra, ela te abraça forte.",
    "Renata (sussurrando): — Eu não quero morrer aqui, {{nome}}...",
    "Você sente o coração apertado, mas tenta manter uma postura firme, mesmo abalado por dentro."
  ],
  opcoes: [
    {
      texto: "Dizer que vai ficar tudo bem",
      acao: () => {
        alterarAfinidade("Renata", +1);
        mostrarCena("renata_morre");
      }
    }
  ]
},
{
  id: "renata_morre",
  texto: [
    "Você segura Renata nos braços e sussurra que tudo vai ficar bem.",
    "Renata respira fundo, e por um breve momento, parece encontrar paz.",
    "Ela se afasta devagar do seu abraço...",
    "E então, sem aviso, algo a puxa violentamente em direção à janela!",
    "Seu corpo é lançado contra o vidro com força. O impacto é brutal.",
    "Ela grita seu nome enquanto o sangue escorre por suas costas.",
    "Você está paralisado. Seus músculos não respondem.",
    "Os vidros começam a trincar, estalando cada vez mais alto...",
    "Eles finalmente se rompem.",
    "Renata cai lá embaixo.",
    "Você pensa em correr até o vidro, mas algo dentro de você te impede. Você não quer aceitar.",
    "Renata: — AHHHHH... {{nome}}...!",
    "Silêncio."
  ],
  proxima: "foraquarto01"
},
//FIM DA RAMIFICAÇÃO 
//way torto 
{
  id: "quarto_renata_05",
  imagem: "img/quarto_renata.jpg", 
  texto: [
    "Você se aproxima de Renata. Ela não desvia o olhar.",
    "No instante em que ela te puxa para a cama, a toalha se abre completamente.",
    "Você deita sobre ela, juntos no colchão macio.",
    "Um desejo carnal ardente os consome.",
    "Um instinto primitivo e incontrolável dominando cada pensamento.",
    "Neste momento, não há espaço para consequência.",
    "Apenas a ânsia de satisfazer essa atração intensa."
  ],
  opcoes: [
    {
      texto: "Beijá-la com fervor.",
      acao: () => {
        alterarMalicia("malicia", +3);
        mostrarCena("quarto_renata_beijo");
      }
    },
    {
      texto: "Fazer sexo oral em Renata.",
      acao: () => {
        alterarMalicia("malicia", +5);
        mostrarCena("quarto_renata_oral");
      }
    }
  ]
},
{
  id: "quarto_renata_beijo",
  imagem: "img/quarto_renata.jpg",
  texto: [
    "Seus lábios deslizam pelo pescoço dela, descendo suavemente pelo colo, enquanto você beija cada centímetro da pele de Renata.",
    "Ela não consegue conter os gemidos baixos", "Ela arranha suas costas em um misto de prazer e urgência.",
    "Renata: — Você não faz ideia do que eu quero... ah, continue... ¡Sí, mi amor!", 
    "Enquanto seus beijos exploram o corpo dela", "Você a sente guiar sua cabeça lentamente para baixo, indicando o que ela mais deseja."
  ],
  opcoes: [
    {
      texto: "Fazer sexo oral em Renata.",
      acao: () => {
        alterarMalicia("malicia", +5);
        mostrarCena("quarto_renata_oral");
      }
    }
  ]
},
{
  id: "quarto_renata_oral",
  imagem: "img/quarto_renata.jpg",
  texto: [
    "Você se entrega ao desejo dela, e seus lábios encontram a intimidade de Renata.", "Um gemido gutural escapa da garganta dela, irrefreável.",
    "Ela arqueia as costas, as mãos agarrando sua cabeça e te empurrando com uma força voraz", "Como se cada toque seu a levasse ao limite, e ela quisesse mais.",
    "Renata: — ¡Sí! Me chupa así! Me deja loca! ¡Que delícia!", 
    "Seus gemidos se tornam palavras, cortando o ar em frases sussurradas e ofegantes: 'Ah... é tão bom! Você é tão bom!'.",
    "Renata: — Es exactamente lo que necesitaba. ¡No pares, por favor! ¡Fóllame con esa boca!", 
    "Cada movimento, cada sucção, acende ainda mais o fogo nela. Ela geme, anseia, deseja mais, sempre mais de você."
  ],
  opcoes: [
    {
      texto: "Enfiar o pênis na buceta de Renata.",
      acao: () => {
        alterarMalicia("malicia", +7);
        mostrarCena("quarto_renata_sex");
      }
    }
  ]
},
{
  id: "quarto_renata_sex",
  imagem: "img/quarto_renata.jpg",
  texto: [
    "Sem mais demora, você se posiciona entre as pernas de Renata, a excitação pulsando forte em seu corpo.",
    "Ela te recebe com um gemido ansioso, a intimidade dela quente e úmida, pronta para te envolver.",
    "Você a penetra com um golpe firme e profundo. Renata grita de prazer, as unhas cravando em suas costas enquanto seus corpos se unem.",
    "O ritmo se acelera. Cada estocada é mais funda, mais intensa. Os sons dos seus corpos se chocando ecoam pelo quarto, misturados aos gemidos incessantes de Renata.",
    "Renata: — ¡Ah, sí! ¡Más profundo! ¡Me encanta!",
    "Ela move a pélvis contra você, buscando cada vez mais contato, mais fricção. O desejo a domina completamente.",
    "Seus lábios se encontram em beijos ávidos entre os gemidos e sussurros de palavras carregadas de luxúria.",
    "Renata: — ¡Fóllame duro, mi amor! ¡No pares!",
    "A cada movimento, a tensão aumenta, o prazer se intensifica, levando ambos cada vez mais perto do limite.",
    "O ar se torna denso, carregado de excitação e do aroma inebriante da pele quente e do desejo."
  ],
  opcoes: [
    {
      texto: "GOZARR",
      acao: () => {
        alterarMalicia("malicia", +10); 
        mostrarCena("quarto_renata_climax"); 
      }
    }
  ]
},
{
  id: "quarto_renata_climax",
  imagem: "img/quarto_renata.jpg",
  texto: [
    "A cada estocada, você sente o prazer escalar.",
    "A pressão aumenta a ponto de parecer que seu corpo vai explodir a qualquer momento.",
    "Renata, com um sorriso sacana, sussurra ofegante: 'Não, ainda não, mi amor. Não agora.'",
    "Em um movimento ágil e surpreendente, ela troca de posição.",
    "Sobe em cima de você.",
    "Ela segura seu pênis com firmeza, apertando-o para retardar o gozo.",
    "Controlando sua respiração enquanto se posiciona.",
    "Então, ela começa a cavalgar, o suor escorrendo por seus corpos colados.",
    "O ritmo é intenso, movida por um desejo voraz.",
    "Seus olhos fixos nos seus, uma expressão de pura luxúria no rosto.",
    "Ela grita, a voz carregada de êxtase", "Renata: Eu vou gozar! Oh, Dios mío, eu vou gozar!",
    "Você se agarra a ela, sentindo o prazer invadir cada fibra do seu ser.",
  ],
  opcoes: [
    {
      texto: "GOZAR",
      acao: () => {
        alterarMalicia("malicia", +15);
        mostrarCena("quarto_renata_pos_climax");
      },
      texto: "GOZAR",
      acao: () => {
        alterarMalicia("malicia", +15);
        mostrarCena("quarto_renata_pos_climax");
      },
      texto: "GOZAR",
      acao: () => {
        alterarMalicia("malicia", +15);
        mostrarCena("quarto_renata_pos_climax");
      },
    }
  ]
},
{
  id: "quarto_renata_pos_climax",
  texto: [
    "Estamos deitados, juntos, como se o mundo lá fora não existisse.",
    "A pele dela ainda guarda o calor do nosso toque. O cheiro. A respiração entrecortada.",
    "E eu olho para ela... não, eu a contemplo.",
    "Como pude pensar que tudo isso era apenas desejo?",
    "Não, não era só isso. Ela quis. Ela me escolheu. No meio de tantos... ela me escolheu.",
    "Talvez ela não consiga admitir agora. Talvez esteja assustada. Mas eu sei o que vi em seus olhos.",
    "Isso... isso é amor. Tem que ser amor. Porque, se não for, então tudo perde o sentido.",
    "Eu a amo. E ela vai entender. Vai aceitar. Vai sentir o mesmo. Tem que sentir."
  ],
  opcoes: [
    {
      texto: "Dizer que a ama",
      acao: () => {
        alterarMalicia("malicia", +1);
        mostrarTextoExtra([
          "Você a encara, firme, com a certeza de quem encontrou o próprio destino.",
          "Renata, eu te amo.",
          "Ela arregala os olhos. O corpo enrijece. O silêncio toma conta do quarto por um segundo eterno.",
          "Ela levanta da cama rapidamente como se algo esta errado",
          "Renata: ¡E-espera! No puedes decir eso... no ahora... a-a-apenas nos conhecemos...",
          "Renata: Y además... yo... yo ni siquiera sé qué siento..."
        ], "renata_morte");
      }
    }
  ]
},
{
  id: "renata_morte",
  texto: [
    "Ela se afasta da cama devagar",
    "E então, sem aviso, algo a puxa violentamente em direção à janela!",
    "Seu corpo é lançado contra o vidro com força. O impacto é brutal.",
    "Ela grita seu nome enquanto o sangue escorre por suas costas.",
    "Você está paralisado. Seus músculos não respondem.",
    "Os vidros começam a trincar, estalando cada vez mais alto...",
    "Eles finalmente se rompem.",
    "Renata cai lá embaixo.",
    "Você pensa em correr até o vidro, mas algo dentro de você te impede. Você não quer aceitar.",
    "Silêncio."
  ],
  proxima: "foraquarto01"
},
{
  id: "foraquarto01",
  texto: [
    "Você sai do quarto sem conseguir acreditar no que aconteceu.",
    "Os sons do ambiente parecem distantes, abafados... como se o mundo estivesse submerso.",
    "Seus passos são pesados, arrastados. O chão range, mas você mal percebe.",
    "Olha em volta... ninguém. Nenhuma voz. Nenhuma presença.",
    "Todos sumiram...",
    "Mas... quando isso aconteceu? Você não lembra.",
    "Tudo parece fora de ordem. Fora de si.",
    "Você apenas caminha. Sem pressa. Sem direção.",
    "Até que se dá conta: está na frente do seu quarto.",
    "Gira a maçaneta. Entra. Deita na cama.",
    "E finalmente, a escuridão te envolve por completo."
  ],
  opcoes: [
    {
      texto: "Fechar os olhos.",
      proxima: "pesadelo_sara01"
    }
  ]
},
{
  id: "pesadelo_sara01",
  texto: [
    "Você desperta em sua cama.",
    "Ou... você acha que desperta.",
    "Seu corpo está frio.",
    "A janela está aberta, a cortina balança com o vento gélido.",
    "No canto do quarto, alguém senta-se imóvel. É *Sara*.",
    "Ela está com os olhos fixos em você, como se soubesse de algo que você tenta esquecer.",
    "Sara: Você me viu... sangrando... chorando... E mesmo assim virou as costas.",
    "Você tenta falar algo, mas sua garganta está seca, como se estivesse dormindo há dias.",
    "Sara:Por que... {{nome}}...? Por que você me deixou?"
  ],
  opcoes: [
    {
      texto: "Sara...? Isso é um sonho? Eu… não sabia o que fazer.",
      proxima: "pesadelo_sara02"
    },
    {
      texto: "Me perdoa... Eu não queria te ver desse jeito!",
      acao: () => alterarMalicia("malicia", +1),
      proxima: "pesadelo_sara_morte"
    }
  ]
},
{
  id: "pesadelo_sara02",
  texto: (() => {
    const base = [
      "Você desperta em sua cama.",
      "Ou... você acha que desperta.",
      "Seu corpo está frio.",
      "A janela está aberta, a cortina balança com o vento gélido.",
      "No canto do quarto, alguém senta-se imóvel. É *Sara*.",
      "Ela está com os olhos fixos em você, como se soubesse de algo que você tenta esquecer.",
      "Sara: É um sonho…? Que conveniente... Você escolhe sonhar quando a realidade te condena?",
      "Ela sorri. Mas não é um sorriso humano.",
      "É torto, partido... como se o rosto estivesse se quebrando junto com a alma.",
      "Ela se levanta. Mas os pés não tocam o chão.",
      "O quarto começa a escurecer, como se estivesse afundando em algo denso, molhado, podre.",
      "Ela se aproxima do seu rosto."
    ];

    if (malicia.malicia >= 20) {
      return base.concat([
        "Sara: Você poderia ter me salvado...",
        "Sua boca se abre mais do que deveria. Os olhos apagam lentamente.",
        "*Sara se desfaz em cinzas diante de você.*",
        "Você está sozinho.",
        "O quarto agora parece normal... ou quase.",
        "O espelho está embaçado. Mas há algo escrito nele: *COVARDE*."
      ]);
    } else {
      return base.concat([
        "Sara: Você ainda pode consertar as coisas... Mas talvez... talvez seja tarde demais.",
        "Ela toca o seu rosto com a ponta dos dedos. Está fria, mas... viva.",
        "Você pisca. Ela desapareceu.",
        "O quarto agora parece normal... ou quase.",
        "O espelho está embaçado. Mas há algo escrito nele: *COVARDE*."
      ]);
    }
  })(),
  opcoes: [
    {
      texto: "Seguir em frente...",
      proxima: "alucinacao_juliana01"
    }
  ]
},
{
  id: "alucinacao_juliana01",
  texto: [
    "Você desperta, mas... seu corpo não responde como antes.",
    "Suas mãos são delicadas, seu cabelo longo. O espelho confirma: você agora é Juliana.",
    "Ela caminha sozinha por um dos corredores do hotel. O silêncio é absoluto, mas seus passos ecoam de maneira anormal... como se fossem os passos de outra pessoa.",
    "Juliana para. Vira-se. Ninguém.",
    "Ela acelera o passo. As paredes parecem mais estreitas, os quadros mais escuros do que lembrava. Um deles está torto, com a imagem deformada por umidade... ou sangue.",
    "Juliana: Não tem ninguém aqui... certo?",
    "A lâmpada acima dela pisca, apaga, acende. Pisca novamente. Uma silhueta aparece atrás dela no reflexo de um vidro.",
    "Juliana gira rapidamente. Nada. Mas há um sussurro em seu ouvido.",
    "Voz: Você viu o que não devia...",
    "Ela treme. A sombra volta — rastejando, grudada no teto, depois nas paredes, depois sumindo nas frestas.",
    "Juliana corre em desespero, as luzes estouram acima dela. Ela escorrega em algo viscoso. Olha para baixo: pegadas ensanguentadas... as dela.",
    "Ela tenta gritar, mas sua voz sai fraca, abafada por uma presença que a sufoca.",
    "Ela alcança uma porta e tenta girar a maçaneta — trancada.",
    "Juliana: Por favor... por favor, alguém me ajuda..."
  ],
  opcoes: [
    {
      texto: "Continuar...",
      acao: () => {
        if (malicia.malicia >= 20) {
          mostrarTextoExtra([
            "A parede à frente começa a sangrar. Algo pulsa por trás dela, como se respirasse.",
            "Juliana tenta recuar, mas a porta atrás dela desapareceu.",
            "Ela está presa.",
            "Do teto escorre um líquido preto, que toca sua pele e queima. Ela grita, cai de joelhos.",
            "A entidade surge por trás, mãos longas e finas envolvendo seu pescoço.",
            "Juliana: Não... por favor... eu não quero...",
            "A última coisa que sente é o ar deixando seu corpo.",
            "Quando a luz retorna... só restam unhas arranhando o chão e um silêncio eterno."
          ], "alfreda_fim0");
        } else {
          mostrarTextoExtra([
            "Juliana cai, mas algo dentro dela grita por sobrevivência.",
            "Ela rasteja até uma porta de emergência e a empurra com força.",
            "A porta cede. Ela entra em um depósito antigo, coberto de pó e mofo.",
            "Lá dentro, tranca a porta com o trinco e se joga ao chão, chorando silenciosamente.",
            "Juliana: Eu não sei o que está acontecendo... mas eu não vou morrer aqui. Não ainda."
          ], "alfreda_fim");
        }
      }
    }
  ]
},
{
  id: "alfreda_fim0",
  acao: () => {
      alert("Parabéns, {{nome}}. 👏\n\nSuas escolhas até aqui — baseadas em luxúria, egoísmo e pura malícia — resultaram na morte de Juliana.\n\nEla confiava em você. Talvez até gostasse de você. Mas você estava ocupado com seus interesses pessoais.\n\nAgora ela é só mais uma vítima do hotel.\n\nSatisfeito?");
      mostrarTextoExtra([
        "Você esta sobrecarregado..."
      ],"alfreda_fim");
  }
},
{
  id: "alfreda_fim",
  imagem: "img/quarto_amanhecer.jpg",
  texto: [
    "Você finalmente acorda. A luz que filtra pela janela pinta o quarto com tons suaves, mas a calmaria é apenas aparente.",
    "Ao seu lado, Alfreda está deitada, o rosto sereno e um sorriso delicado nos lábios.", "A mão dela acaricia suavemente seu rosto, e o toque é ao mesmo tempo acolhedor e enigmático.",
    "O perfume dela, uma mistura inebriante de algo floral e um toque amadeirado de sangue, preenche o ar...", "Trazendo consigo uma sensação de familiaridade perturbadora.",
    "Sua mente tenta processar os últimos acontecimentos. As lembranças dos horrores vividos neste hotel se mistura com o pensamento de nunca conseguir fugir dele",
    "Você passou por muito para chegar até aqui...",
    "Alfreda: Você acordou..."
  ],
  opcoes: [
    {
      texto: "Alfreda...", 
      acao: () => {
        // ---LÓGICA DOS IFS PARA DEFINIR O FINAL DO JOGO ---

        // Final 1 – Final sombrio (malícia muito alta)
        if (malicia.malicia >= 45) {
          mostrarCena("final_sombrio");
        }
        // Final 2 – Final secreto (malícia altíssima + afinidade com Alfreda)
        else if (malicia.malicia >= 25 && afinidade.Alfreda >= 4) {
          mostrarCena("final_guardiao");
        }
        // Final 3 – Final neutro (malícia média + afinidade com 1 ou 2 vivas)
        else if (malicia.malicia >= 5 && malicia.malicia < 10 && ( afinidade.Sara >= 4 || afinidade.Juliana >= 4 || afinidade.Alfreda >= 4  || afinidade.Bruno >= 3  || afinidade.Renata >= 2)) {
          mostrarCena("final_bom");
        }
        else {
          mostrarCena("final_padrao");
        }
      }
    }
  ]
},
  {
  id: "final_sombrio",
  texto: [
    "Você está deitado com ela. Alfreda.",
    "O lençol é quente, o quarto é frio, mas entre vocês... há algo que nem o tempo, nem a morte, conseguem dissolver.",
    "O hotel agora está silencioso. Não em paz. Nunca em paz. Silencioso como a respiração antes do último suspiro.",
    "Ela vira o rosto para você. Os olhos dela carregam tanto — desejo, mágoa, aceitação. Você não desvia.",
    "Alfreda: Pensei que nunca fosse acordar, {{nome}}.",
    "Você apenas a observa. Palavras seriam pequenas demais.",
    "Ela se senta devagar, como se não quisesse acordar o destino.",
    "Alfreda: Então... é isso? O hotel escolheu você, não é?",
    "Você balança a cabeça. É verdade. E você aceitou.",
    "Ela sorri. Um sorriso tão quebrado que parece feito de vidro.",
    "Alfreda: Engraçado... mesmo sabendo que tudo ia acabar assim, eu ainda... ainda queria te ver sorrir.",
    "Ela estende a mão. E você segura. Como se fosse a última coisa no mundo que ainda vale a pena tocar.",
    "Você a puxa para perto. E a beija. Um beijo molhado de lágrimas e maldição. Um beijo que sela, não salva.",
    "Ela chora no meio do beijo. Você sente o gosto. Salgado. Amargo. Real.",
    "Quando os lábios se separam, ela não diz nada. Mas você sabe que não acabou.",
    
    {
      condicao: () => afinidade.Bruno < 3,
      texto: [
        "Há um sussurro que escorre da garganta dela até seu ouvido:",
        "Alfreda: Tem algo que ainda precisa ser feito.",
        "Vocês se vestem em silêncio. Como quem se prepara para um funeral íntimo.",
        "Descem as escadas. O hotel observa. Ele sabe.",
        "Na sala escura, Bruno esta sentado em uma cadeira, Marcos está preso ainda ao lado dele, porém, despertando.",
        "Para você se passou horas, para Bruno e Marcos, minutos",
        "Bruno:Vocês voltaram! Mas cadê a comida?",
        "Bruno percebe que você e Alfreda estão um tanto quanto diferentes",
        "Marcos desperta e berra, como um animal encurralado:",
        "Marcos: NÃO! VOCÊS NÃO! FICA LONGE DE MIM!",
        "Bruno se levanta, confuso, meio desperto",
        "Bruno: O que... o que está acontecendo?",
        "Você olha para Alfreda. Ela responde com olhos calmos e frios:",
        "Alfreda: A casa precisa de oferendas.",
        "Você fecha os olhos. Respira fundo. Um segundo antes do abismo.",
        "E então aceita.",
        "Quando os olhos se abrem de novo, tudo é vermelho.",
        "O grito de Marcos vem primeiro com um tiro certeiro. Depois, o silêncio de Bruno. Ele não luta. Talvez soubesse. Talvez quisesse.",
        "Alfreda segura sua mão suja de sangue. Aperta. Sorri:",
        "Alfreda: Agora sim... podemos selar esse destino.",
        "Vocês sobem de volta. Como dois santos perversos rumo ao altar do fim."
      ]
    },

    "De volta à entrada do hotel. De volta ao lugar onde tudo começou — ou terminou.",
    "Você a aperta nos braços. E sabe: essa é apenas a primeira vez de muitas.",
    "Você observa Alfreda como se ela fosse uma pintura prestes a ser apagada. Linda. Frágil. Pronta.",
    "Ela sorri. Mas há medo. Ela entende. Sempre entendeu.",
    "Sua mão sobe até o pescoço dela. Devagar. Sem pressa. Como quem aprecia cada instante antes do fim.",
    "Ela não recua. Mas os olhos dela tremem. O corpo reage. Luta contra o instinto. Contra o inevitável.",
    "Você começa a apertar. Com firmeza. Com prazer.",
    "Ela leva as mãos até seus braços, tenta afastar, arranhar, implorar — mas sem palavras.",
    "Você não chora. Você não hesita. Você não sente remorso.",
    "Você sente outra coisa.",
    "Você endurece. E não é por raiva. Não é por amor. É por saber que, finalmente, pertence a algo maior.",
    "Ela se debate mais uma vez. E para.",
    "Os olhos dela se fixam nos seus, como se dissessem: obrigada. Ou me desculpe.",
    "Você segura por mais cinco segundos. Apenas para ter certeza. Apenas para sentir até o fim.",
    "Quando solta, o corpo dela desaba nos seus braços. Ainda quente. Ainda perfumado.",
    "Você a deita no chão. Com cuidado. Como se estivesse pondo uma flor em um túmulo.",
    "A tempestade la fora silencia. Não em respeito — mas em satisfação.",
    "Você se levanta. Ajusta a camisa. Ainda cheirando a desejo e morte.",
    "Seus pés te levam até a recepção. Como se soubessem o caminho.",
    "E um simples piscar de olhos, tudo que aconteceu ali talvez não passasse de uma ilusão",
    "Mas você esta na recepção, como afintrião do hotel",
    "A tempestade retorna...",
    "Um casal entra. Jovens. Ignorantes. Suaves demais para esse lugar.",
    "Eles sorriem. Você retribui. Com ternura. Com desejo.",
    "Garota: Eu te falei que não era por esse caminho Luiz!",
    "Luiz: Tudo bem Aline! Não faz mal nós passarmos a noite aqui! Só por hoje tudo bem?",
    "Aline: Ta bom...",
    "Luiz: Com licença! O senhor por acaso teria um quarto disponível somente por essa noite?"
    
  ],
  opcoes:[
    {
      texto: "Sejam Bem-Vindos! É um prazer ter vocês aqui!",
      acao: () => {
      mostrarTextoExtra([
        "VOCÊ SE TORNOU ANFINTRIÃO DO HOTEL"
      ], "FIM_DE_JOGO1");
    }
  }
  ]
},
{
  id: "FIM_DE_JOGO1",
  imagem: "img/anfitriao.jpg"
},
{
  id: "final_guardiao",
  imagem: "img/corredor_sombrio.jpg",
  texto: [
    "Você acorda. Mas não de um sono... de uma transição.",
    "Por um momento, tudo parece estático — até mesmo o tempo.",
    "Alfreda esta ao seu lado...",
    "Mas algo mudou.",
    {
      condicao: () => afinidade.Bruno < 3,
      texto: [
        "Há um sussurro que escorre da garganta dela até seu ouvido:",
        "Alfreda: Tem algo que ainda precisa ser feito.",
        "Descem as escadas. O hotel observa. Ele sabe.",
        "Na sala escura, Bruno está sentado em uma cadeira. Marcos está preso, mas desperta.",
        "Para você, se passaram horas. Para eles, apenas minutos.",
        "Bruno: Vocês voltaram! Mas... cadê a comida?",
        "Mas não é fome que Bruno vê em seus olhos.",
        "Marcos berra, como um animal encurralado:",
        "Marcos: NÃO! VOCÊS NÃO! FICA LONGE DE MIM!",
        "Bruno tenta se levantar, cambaleando.",
        "Bruno: O que... o que está acontecendo?",
        "Você olha para Alfreda.",
        "Ela responde com olhos calmos, frios, como mármore fúnebre:",
        "Alfreda: A casa precisa de oferendas.",
        "Você fecha os olhos. Respira fundo.",
        "Um segundo antes do abismo.",
        "E então aceita.",
        "Quando os olhos se abrem de novo, tudo é vermelho.",
        "O grito de Marcos vem primeiro, rasgado por um tiro certeiro.",
        "Depois, o silêncio de Bruno. Ele não luta. Talvez soubesse. Talvez quisesse.",
        "Alfreda segura sua mão suja de sangue. Aperta. Sorri:",
        "Alfreda: Agora sim... podemos selar esse destino.",
      ]
    },
    "Não há clareza. Apenas uma sensação gélida e invasiva de que algo está horrivelmente errado.",
    "Alfreda está com você. Mas ela já não é Alfreda.",
    "O olhar dela não é mais humano. É um abismo.",
    "Uma paixão retorcida brilha nos olhos dela, e sua espinha treme sem controle.",
    "Alfreda: Você chegou você foi escolhido... Pelo hotel... Por todas as pessoas que aqui sofreram...",
    "A voz dela é um sussurro que corta a carne. Não mais suave, mas podre.",
    "Ela beija seu rosto. Frio. Úmido. Metálico.",
    "Você sente cheiro de terra molhada. De cova.",
    "Ela se afasta. A escuridão do quarto se aprofunda. Os contornos se desfazem.",
    "Alfreda: Ainda temos deveres. Deveres que esperam por você há séculos.",
    "Você tenta resistir. Mas não há escolha. Seus pés são puxados.",
    "O corredor respira. Ele se contorce como uma criatura viva.",
    "Cada passo é mais fundo. Um mergulho no inominável.",
    "O ar pesa. Dói para respirar. Cheira a decomposição. A sangue seco. A medo de séculos.",
    "Vozes não sussurram: elas GRITAM em sua mente.",
    "Almas. Gritando. Implorando. Malditas. Chamando... você.",
    "Figuras surgem das paredes. Sombras disformes. Famintas.",
    "Olhos brilham como brasas no breu. Elas vêm até você.",
    "O suor escorre. Seu corpo falha. A mente racha. A alma... se entrega.",
    "Você não está mais aqui.",
    "Você está preso.",
    "Você é o próximo.",
    "E sabe disso.",
    "Mas talvez..."
  ],
  opcoes: [
    {
      texto: "CORRER! CORRER! CORRER!",
      acao: () => {
        mostrarCena("final_guardiao_destino_inevitavel");
      }
    }
  ]
},
{
  id: "final_guardiao_destino_inevitavel",
  imagem: "img/espelho_amaldicoado.jpg", // nova imagem de espelho estilizada
  texto: [
    "Você tenta reagir, mas ja é tarde demais...",
    "Tudo desaparece em um piscar de olhos.",
    "O corredor. As criaturas. Alfreda.",
    "Você acorda.",
    "Está no saguão. Limpo. Claro. Vivo.",
    "O hotel parece... normal.",
    "Mas Alfreda não está com você.",
    "Você a vê, no espelho antigo do corredor principal.",
    "Ela se admira no reflexo — um sorriso de prazer e desejo brilha em seus lábios. A forma dela ondula levemente, quase dançando.",
    "Ela sussurra, mesmo distante, mesmo sem te olhar: 'Sinto sua falta.'",
    "Você quer gritar, mas não pode. Não tem mais voz.",
    "Você percebe, com horror crescente... que está do outro lado do espelho.",
    "Preso. Confuso. Afundando.",
    "Agora é você quem grita todos os dias. Implora. Suplica por libertação.",
    "Mas ninguém escuta.",
    "O hotel está em paz.",
    "E você... você é o novo guardião."
  ],
  opcoes: [
    {
      texto: "Mostrar texto extra",
      acao: () => {
        mostrarTextoExtra([
          "VOCÊ SE TORNOU O GUARDIÃO DO HOTEL.",
        ],"FIM_DE_JOGO2");
      }
    }
  ]
},
{
  id: "FIM_DE_JOGO2",
  imagem: "img/guardiao.jpg"
},



{
  id: "final_bom",
  imagem: "img/quarto_alfreda_manhã.jpg", // Imagem de um quarto iluminado, talvez com Alfreda na cena
  texto: [
    "Você acorda com um solavanco. O peito arde como se tivesse gritado por horas. Suas mãos tremem. O suor frio escorre pela nuca. O quarto parece real... demais.",
    "Alfreda está à sua frente, ajoelhada, olhos arregalados. Suas mãos seguram seus ombros com força. Ela grita com desespero contido:",
    "Alfreda: ACORDA, {{NOME}}! ACORDA! O HOTEL VAI MATAR A GENTE!",
    "Sua mente gira. As imagens vêm em ondas: Amanda ensanguentada, as vozes no escuro, as paredes pulsando. Um sonho? Ou um aviso? Você se senta bruscamente na cama, com o coração aos pulos.",
    "Você: Amanda...? Renata...? O que foi real? A gente... a gente está vivo? Isso tudo vai acontecer de novo?",
    "Alfreda te ergue pela camisa. Ela está suada, ofegante, assustada de verdade.",
    "Alfreda: Não temos tempo. O Bruno encontrou algo. Lá embaixo... uma passagem escondida nos escombros da sala subterrânea. Estava trancada. Mas agora está aberta.",
    "Vocês saem do quarto. O corredor está repleto de marcas de garras profundas, como se algo tivesse sido arrastado à força. O ar é pesado, quase irrespirável.",
    "Alfreda: Foi por aqui. A Juliana foi levada por essa coisa.",
    "Seu corpo se move antes que a mente processe. Você corre. Chuta a porta no fim do corredor. Ela se quebra com um estalo seco.",
    "Juliana está lá dentro. Suja, ofegante, presa entre entulhos e sombras. Quando vê você, seus olhos se arregalam e ela grita.",
    "Juliana: VOCÊ VOLTOU! EU PENSEI QUE NUNCA MAIS... A SARA! A GENTE PRECISA ACHAR A SARA!",
    "A urgência toma conta. Vocês correm de porta em porta, escutando cada rangido como se fosse um aviso de morte.",
    "Então, um grito rasga o silêncio:",
    "Alfreda: AQUI! ELA ESTÁ AQUI!",
    "Sara está caída no chão de um quarto escuro. Seu corpo quase sem vida. Juliana cai de joelhos ao lado dela, soluçando. Você verifica os sinais vitais. Fracos. Mas presentes.",
    "Sem pensar, você a pega nos braços. Ela parece pesar uma eternidade. Descendo as escadas apressado, vocês se juntam a Bruno na sala subterrânea.",
    "Lá, Marcos está desacordado, preso por amarras improvisadas. A passagem secreta está aberta, revelando um túnel de tijolos úmidos e uma luz pálida ao fundo. Uma promessa de fuga.",
    "Bruno pega Sara de seus braços com cuidado. Um a um, todos entram no túnel. Juliana. Alfreda. Bruno que carregava Sara",
    "Você é o último. Está prestes a atravessar quando ouve algo.",
    "Sussurros. Sussurros que parecem vir das próprias paredes. Elas se contorcem, exibindo rostos humanos — tortos, derretidos, gritando em silêncio.",
    "Almas: DEIXE-O. ELE QUERIA SUA MORTE. ELE ESCOLHEU O LADO ERRADO. DEIXE-O.",
    "Você se vira. Marcos ainda está ali, imóvel, os braços amarrados, a cabeça caída. O teto começa a rachar. Fragmentos caem ao seu redor. O som do colapso se aproxima.",
    "Marcos: Argh... Garoto!?",
    "Marcos: O que ta acontecendo aqui!? TA TUDO DESMORONANDO...!",
    "Marcos: Por favor! Não me deixe morrer aqui garoto!",
    "Juliana (do outro lado): VEM LOGO! O TÚNEL VAI FECHAR!",
    "Seu corpo congela. O tempo estilhaça. Você e Marcos. A última escolha.",
    "E então, tudo depende de você."
  ],
  opcoes: [
    {
      texto: "...",
      proxima: "decisao_final"
    },
  ]
},

// Trecho de decisão final com base na escolha sobre Marcos
{
  id: "decisao_final",
  texto: [
    "O chão treme. O teto ameaça cair. O hotel inteiro parece desabar.",
    "Almas envolvem as paredes, gritando: \"Deixe-o aqui! Ele queria te matar!\"",
    "Você e Marcos estão na sala. O tempo corre contra vocês."
  ],
  opcoes: [
    {
      texto: "Deixar Marcos para morrer",
      proxima: "final_marcos_morre"
    },
    {
      texto: "Salvar Marcos",
      proxima: "final_marcos_salvo"
    }
  ]
},

// Final em que Marcos morre
{
  id: "final_marcos_morre",
  texto: [
    "As criaturas se lançam sobre Marcos. Você corre, atravessando a passagem secreta sozinho.",
    "Do lado de fora, da para ver ao longe o hotel que agora alem de caído esta em chamas. Alfreda, Bruno, Juliana e Sara o esperam.",
    "Ninguém fala. Apenas observam o fogo consumir o hotel.",
    "Alfreda: Me perdoam... por tudo isso.",
    "Juliana: Sara? Minha filha? consegue andar?",
    "Sara: Eu... só quero ir embora daqui.",
    "Bruno: Temos sorte de ter saído vivos. Mas sorte não é justiça.",
    "Você sente o peso. Poderia ter salvado mais alguem... Mas não o fez.",
    "Dias depois, a polícia faz investigações. Nada foi explicado.",
    "Você se isola com Alfreda. Mantém pouco contato com Juliana, Sara e Bruno.",
    "Mas o silêncio do hotel continua em você."
  ],
  opcoes: [
    {
      texto: "FIM_JOGO3",
      proxima: "FIM_JOGO3"
    }
  ]
},

// Final em que todos sobrevivem
{
  id: "final_marcos_salvo",
  texto: [
    "Você solta as amarras que prendem Marcos. As criaturas investem para atacar você",
    "Marcos te salva te empurrando",
    "Vocês correm e atravessam a passagem juntos. Do lado de fora, todos estão esperando.",
    "Sara, Juliana, Alfreda, Bruno, Renata.",
    "Exaustos. A tempestade continua caindo...",
    "E em um simples piscar de olhos, todos vocês caiem no chão...",
    "Ao acordar todos estão no hall da entrada",
    "Todos vivos",
    "Renata (sussurrando, chorando): Eso fue real...?",
    "Bruno: Aquilo não pode ser explicado com lógica. Mas... aconteceu.",
    "Juliana: Alguém vai acreditar nisso?", 
    "Sara (abraçando o protagonista): Eu achei que nunca mais ia te ver.",
    "Carlos (coçando a cabeça): Mas eu morri, véi... ou não morri?", 
    "Eduardo: Isso daria um ótimo roteiro. Ou um pesadelo eterno.",
    "Amanda: Eu só lembro da dor. E da escuridão. Mas agora... estamos aqui.",
    "Marcos: Eu devia... ter feito diferente desde o começo.",
    "Alfreda (relutante): Obrigada... por não desistir de mim."
  ],
  opcoes: [
    {
      texto: "Botar fogo no hotel",
      proxima: "fogo_no_hotel"
    }
  ]
},

// Cena do incêndio final
{
  id: "fogo_no_hotel",
  texto: [
    "Vocês decidem colocar fogo no hotel amaldiçoado.",
    "As chamas sobem alto. De dentro delas, um rosto aparece. Almas gritam de dentro das paredes.",
    "O carro que estava sem gasolina agora está cheio. Vocês entram e vão embora.",
    "Cada um retorna para sua casa, mas o medo permanece.",
    "-MESES DEPOIS APÓS O EVENTO DO HOTEL."
  ],
  proxima: "relatos_psicologo"
},

// Relatos individuais dos personagens
{
  id: "relatos_psicologo",
  img: "img/bruno.jpg",
  texto: [
    "Eu tentei racionalizar.",
    "Fiz anotações, desenhei mapas, cataloguei os acontecimentos como se fosse montar um processo judicial.",
    "Mas não há jurisprudência pro que vivemos.",
    "Nenhum tribunal aceitaria aquilo.",
    "E mesmo que aceitassem... eu não conseguiria contar sem parecer louco.",
    "O que aconteceu ali foi um abismo na realidade.",
    "Só escapamos porque ele teve coragem de enfrentar o que ninguém deveria ver."
  ],
  proxima: "RENATA_PSICOLOGO"
},
{
  id: "RENATA_PSICOLOGO",
  img: "img/renata.jpg",
  texto: [
    "Eso fue... algo que nenhum livro explica.",
    "Quando aquela coisa se aproximou, senti que minha alma saiu do corpo.",
    "Como se eu tivesse morrido por dentro.",
    "Achei que fosse o fim.",
    "Mas {{nome}} apareceu, como se fosse a única pessoa conectada com o real ali.",
    "Ele me segurou quando nem eu conseguia me segurar.",
    "Sobrevivemos por causa dele... e porque ele não desistiu de nós."
  ],
  proxima: "JULIANA_PSICOLOGO"
},
{
  id: "JULIANA_PSICOLOGO",
  img: "img/juliana.jpg",
  texto: [
    "A gente fugiu da morte. Literalmente.",
    "Eu vi rostos que não deviam estar ali.",
    "Ouvi sussurros que diziam coisas horríveis sobre mim.",
    "Achei que nunca mais ia ver a luz do sol.",
    "Mas ele... {{nome}}... enfrentou tudo.",
    "Me puxou quando eu já tinha desistido.",
    "Tem noites que eu acordo suando, com a sensação de que ainda estou presa naquele lugar.",
    "Mas aí lembro que ele me trouxe de volta.",
    "E isso me dá forças pra continuar."
  ],
  proxima: "SARA_PSICOLOGO"
},
{
  id: "SARA_PSICOLOGO",
  img: "img/sara.jpg",
  texto: [
    "Eu tive medo. Muito medo.",
    "Mais do que jamais tive.",
    "Achei que ia enlouquecer.",
    "Mas ele me abraçou.",
    "E naquele momento... tudo parou.",
    "Eu só me sinto segura quando estou com ele.",
    "Com {{nome}}.",
    "Ele é o único que me fez sentir que havia algo real no meio daquele pesadelo."
  ],
  proxima: "MARCOS_PSICOLOGO"
},
{
  id: "MARCOS_PSICOLOGO",
  img: "img/marcos.jpg",
  texto: [
    "Fui policial por anos.",
    "Achei que já tinha visto tudo.",
    "Mas aquilo... aquilo era outra coisa.",
    "Quando acordei amarrado e vi o que nos esperava, achei que seria meu fim.",
    "Mas {{nome}} apareceu.",
    "Me libertou. Lutou por mim.",
    "Isso... me obriga a mudar.",
    "Me obriga a ser alguém melhor.",
    "Porque ele viu algo em mim que nem eu via mais."
  ],
  proxima: "EDUARDO_PSICOLOGO"
},
{
  id: "EDUARDO_PSICOLOGO",
  img: "img/eduardo.jpg",
  texto: [
    "Eu morri.",
    "Não é figura de linguagem.",
    "Eu senti o nada. O vazio.",
    "Um silêncio tão absoluto que me quebrou.",
    "Mas então... uma presença me puxou de volta.",
    "Era {{nome}}.",
    "Quando abri os olhos, ele estava lá.",
    "E naquele instante eu soube: minha vida tinha sido devolvida.",
    "Não sei por quê, nem como... mas sei por quem."
  ],
  proxima: "CARLOS_PSICOLOGO"
},
{
  id: "CARLOS_PSICOLOGO",
  img: "img/carlos.jpg",
  texto: [
    "Se isso foi um sonho...",
    "então que pesadelo é esse que ainda me persegue?",
    "A sensação de estar preso num lugar que respira ódio...",
    "que sussurra coisas horríveis enquanto você dorme…",
    "Eu pensei que fosse enlouquecer.",
    "Mas {{nome}} me puxou dali.",
    "Ele acreditou em mim.",
    "E isso me manteve de pé.",
    "Agora eu só quero esquecer... mas não consigo."
  ],
  proxima: "AMANDA_PSICOLOGO"
},
{
  id: "AMANDA_PSICOLOGO",
  img: "img/amanda.jpg",
  texto: [
    "Tudo que lembro é dor.",
    "A dor de ser esquecida. De ser deixada pra trás.",
    "Mas ele... {{nome}}... me viu.",
    "Me resgatou.",
    "Enquanto eu chorava e implorava pra acabar logo, ele insistia que eu não estava sozinha.",
    "Eu luto pra viver agora.",
    "Não porque é fácil.",
    "Mas porque ele me mostrou que ainda vale a pena.",
    "Mesmo no meio do horror, alguém escolheu me salvar."
  ],
  proxima: "ALFREDA_PSICOLOGO"
},
{
  id: "ALFREDA_PSICOLOGO",
  img: "img/alfreda.jpg",
  texto: [
    "Ele... me protegeu.",
    "Não por obrigação. Não por piedade.",
    "Mas porque acreditava que ainda havia algo bom em mim.",
    "Algo que eu mesma não via mais.",
    "Durante anos carreguei os segredos daquele lugar como uma cruz.",
    "Mas {{nome}} enfrentou a maldição de frente.",
    "E, por um breve instante, eu senti que era possível ser livre.",
    "Não só viva. Livre."
  ],
  proxima: null
},
]

