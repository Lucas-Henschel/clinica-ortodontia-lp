export interface TreatmentOption {
  id: 'aparelho-fixo' | 'alinhadores-transparentes' | 'acompanhamento';
  number: string;
  title: string;
  kicker: string;
  summary: string;
  howItWorks: string;
  dailyCare: string;
  individualNote: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface ComparisonRow {
  criterion: string;
  fixedBraces: string;
  clearAligners: string;
  monitoring: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  registry: string;
  bio: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicConfig {
  brand: {
    name: string;
    shortName: string;
    city: string;
    copyrightNotice: string;
    ethicalFooterNote: string;
  };
  theme: {
    canvas: string;
    lavenderSoft: string;
    deepBlue: string;
    coralAction: string;
    coralAccent: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    locationLine: string;
    headline: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    scheduleConfirmationNote: string;
    image: string;
    imageAlt: string;
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  treatments: {
    sectionTitle: string;
    sectionIntro: string;
    disclaimer: string;
    items: TreatmentOption[];
  };
  comparison: {
    title: string;
    subtitle: string;
    footerNote: string;
    rows: ComparisonRow[];
  };
  journey: {
    title: string;
    subtitle: string;
    steps: JourneyStep[];
    image: string;
    imageAlt: string;
  };
  firstVisit: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      detail: string;
    }[];
    privacyAssurance: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  ethicsBlock: {
    title: string;
    description: string;
    details: string[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  requestForm: {
    title: string;
    subtitle: string;
    privacyNotice: string;
    interestOptions: {
      value: string;
      label: string;
    }[];
    periodOptions: {
      value: string;
      label: string;
    }[];
  };
  contact: {
    whatsappNumber: string;
    phoneDisplay: string;
    emailDisplay: string;
    addressStreet: string;
    addressDistrict: string;
    addressReference: string;
    hours: {
      days: string;
      time: string;
    }[];
  };
}

export const defaultClinicConfig: ClinicConfig = {
  brand: {
    name: 'Alinha Ortodontia',
    shortName: 'Alinha',
    city: 'Curitiba, PR',
    copyrightNotice: '© 2026 Alinha Ortodontia · Curitiba, PR. Todos os direitos reservados.',
    ethicalFooterNote:
      'Conteúdo com finalidade educativa. Nenhuma informação apresentada substitui a avaliação clínica presencial com cirurgião-dentista.',
  },
  theme: {
    canvas: '#FAF9FC',
    lavenderSoft: '#F2EFF9',
    deepBlue: '#15223D',
    coralAction: '#B84735',
    coralAccent: '#DF7B6A',
  },
  navigation: [
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Etapas', href: '#etapas' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],
  hero: {
    locationLine: 'Batel, Curitiba · Ortodontia e acompanhamento clínico',
    headline: 'Um plano de cuidado começa com uma conversa',
    description:
      'Cada sorriso e cada mordida têm particularidades próprias. Na avaliação presencial, ouvimos suas expectativas e analisamos as opções ortodônticas mais adequadas para o seu momento — sem fórmulas padronizadas.',
    primaryCtaLabel: 'Pedir avaliação',
    secondaryCtaLabel: 'Conhecer opções',
    scheduleConfirmationNote:
      'O pedido enviado pelo site é uma solicitação de contato; o dia e o horário da consulta são confirmados diretamente pela nossa recepção.',
    image: '/src/assets/images/hero_clinic_conversation_1795009691400.jpg',
    imageAlt:
      'Pessoa sorrindo de forma natural durante uma conversa acolhedora em consultório contemporâneo com iluminação suave',
    pillars: [
      {
        title: 'Avaliação presencial individual',
        detail: 'Decisão clínica construída em consulta, respeitando saúde bucal e rotina.',
      },
      {
        title: 'Explicação clara das alternativas',
        detail: 'Comparação transparente entre possibilidades antes de iniciar qualquer etapa.',
      },
      {
        title: 'Sem envio prévio de dados médicos',
        detail: 'Não solicitamos fotos, sintomas ou exames pelo formulário online.',
      },
    ],
  },
  treatments: {
    sectionTitle: 'Opções de cuidado ortodôntico',
    sectionIntro:
      'Conheça as abordagens mais utilizadas na ortodontia contemporânea. Nenhuma alternativa atende igualmente a todas as pessoas — a viabilidade de cada recurso é definida após exame clínico presencial.',
    disclaimer:
      'Conteúdo educativo geral: não substitui consulta nem indica tratamento individualizado.',
    items: [
      {
        id: 'aparelho-fixo',
        number: '01',
        title: 'Aparelhos fixos',
        kicker: 'Versões metálicas ou estéticas',
        summary:
          'Sistema tradicional com peças aderidas aos dentes e arcos ajustados periodicamente em consultório, permitindo controle contínuo dos movimentos dentários.',
        howItWorks:
          'Permanece fixo durante todo o período indicado, dispensando a necessidade de colocar ou retirar dispositivos ao longo do dia.',
        dailyCare:
          'Requer atenção cuidadosa na escovação ao redor das peças, uso de passa-fio ou escovas interdentais e cuidado com alimentos muito duros ou pegajosos.',
        individualNote:
          'A escolha entre modelos metálicos ou cerâmicos considera fatores anatômicos, higiene e preferência pessoal avaliados em consulta.',
        image: '/src/assets/images/treatment_fixed_orthodontics_1795009693529.jpg',
        imageAlt:
          'Bráquetes cerâmicos translúcidos e instrumentais clínicos dispostos com organização em bandeja branca sobre pedra lavanda',
        points: [
          'Atuação contínua sem depender da disciplina de remoção diária',
          'Possibilidade de versões discretas (cerâmica/porcelana) ou metálicas',
          'Indicado para diferentes níveis de complexidade, conforme avaliação clínica',
        ],
      },
      {
        id: 'alinhadores-transparentes',
        number: '02',
        title: 'Alinhadores transparentes',
        kicker: 'Placas removíveis sequenciais',
        summary:
          'Conjunto de placas transparentes confeccionadas sob medida a partir de escaneamento ou moldagem, substituídas de acordo com a orientação profissional.',
        howItWorks:
          'Por serem removíveis, permitem retirar o dispositivo durante as refeições e para a escovação habitual, exigindo uso disciplinado pelo período diário recomendado em consulta.',
        dailyCare:
          'Facilita o uso do fio dental e a limpeza dentária convencional; as placas também precisam de higienização diária e armazenamento em estojo apropriado.',
        individualNote:
          'Nem todos os casos têm a mesma resposta apenas com alinhadores; o ortodontista avalia se essa abordagem é compatível com os objetivos clínicos.',
        image: '/src/assets/images/treatment_clear_aligners_1795009692173.jpg',
        imageAlt:
          'Alinhador ortodôntico transparente apoiado em recipiente de pedra lavanda sob luz natural suave',
        points: [
          'Visual discreto e removível para refeições e higienização',
          'Exige comprometimento diário com o tempo de uso orientado',
          'A viabilidade e o planejamento variam conforme o exame presencial',
        ],
      },
      {
        id: 'acompanhamento',
        number: '03',
        title: 'Acompanhamento ortodôntico',
        kicker: 'Prevenção, contenção e revisões',
        summary:
          'Consultas periódicas para observar o desenvolvimento da arcada em crianças e jovens, revisar contenções após tratamentos anteriores ou monitorar alterações graduais da mordida.',
        howItWorks:
          'Nem toda consulta ortodôntica resulta na instalação imediata de um aparelho. Muitas vezes, acompanhar o momento adequado evita intervenções desnecessárias.',
        dailyCare:
          'Envolve manutenção de contenções quando presentes, cuidados regulares de higiene e observação de hábitos como respiração, mastigação ou apertamento.',
        individualNote:
          'O intervalo entre revisões e a eventual necessidade de intervenção futura são definidos caso a caso pelo profissional responsável.',
        image: '/src/assets/images/clinic_lounge_interior_1795009693055.jpg',
        imageAlt:
          'Sala de acolhimento serena com sofá em tom lavanda suave, madeira clara e iluminação natural abundante',
        points: [
          'Observação do crescimento facial e troca dentária em fases iniciais',
          'Avaliação e manutenção de contenções fixas ou removíveis',
          'Orientação preventiva sem pressa para iniciar intervenções',
        ],
      },
    ],
  },
  comparison: {
    title: 'Comparação informativa entre as opções',
    subtitle:
      'Um resumo objetivo das diferenças práticas no dia a dia. A indicação clínica, o tempo estimado e os valores são definidos exclusivamente após a avaliação presencial.',
    footerNote:
      'Nenhuma opção é universalmente superior: o melhor recurso é aquele que atende com segurança às necessidades do seu caso e à sua rotina.',
    rows: [
      {
        criterion: 'Como permanece no dia a dia',
        fixedBraces: 'Fixado aos dentes durante o cuidado; não é retirado pelo paciente.',
        clearAligners: 'Removível; requer uso constante pelo tempo diário orientado.',
        monitoring: 'Sem dispositivo ativo ou com uso de contenção específica.',
      },
      {
        criterion: 'Aparência visual',
        fixedBraces: 'Visível em versões metálicas; mais discreto em versões estéticas.',
        clearAligners: 'Bastante discreto por ser transparente e ajustado ao dente.',
        monitoring: 'Natural; contenções costumam ser internas ou transparentes.',
      },
      {
        criterion: 'Higiene e alimentação',
        fixedBraces: 'Exige escovação cuidadosa ao redor das peças e atenção a alimentos duros.',
        clearAligners: 'Retirado para comer e escovar, mantendo higiene bucal habitual.',
        monitoring: 'Rotina de higiene normal ou limpeza simples da contenção.',
      },
      {
        criterion: 'Dinâmica das consultas',
        fixedBraces: 'Retornos presenciais periódicos para ajustes e trocas de arcos.',
        clearAligners: 'Revisões clínicas agendadas para acompanhar a adaptação das placas.',
        monitoring: 'Visitas espaçadas para observação clínica e preventiva.',
      },
      {
        criterion: 'Indicação, duração e custo',
        fixedBraces: 'Definidos após exame clínico e documentação individual.',
        clearAligners: 'Definidos após avaliação de compatibilidade e planejamento.',
        monitoring: 'Definidos conforme o histórico e objetivo da revisão.',
      },
    ],
  },
  journey: {
    title: 'Etapas do atendimento',
    subtitle:
      'Um fluxo organizado para que você compreenda cada fase com calma antes de tomar qualquer decisão.',
    steps: [
      {
        number: '01',
        title: 'Pedido de contato',
        description:
          'Você preenche seus dados básicos no site e envia uma solicitação pelo WhatsApp informando o período de preferência. Nossa recepção retorna para confirmar a disponibilidade.',
      },
      {
        number: '02',
        title: 'Avaliação profissional',
        description:
          'Na consulta presencial em Curitiba, o(a) ortodontista conversa sobre o que incomoda você, examina dentes e mordida e verifica se são necessários exames complementares.',
      },
      {
        number: '03',
        title: 'Apresentação das opções',
        description:
          'Com base no exame clínico, explicamos as possibilidades viáveis para o seu caso, diferenças de rotina, etapas previstas e condições de atendimento.',
      },
      {
        number: '04',
        title: 'Acompanhamento contínuo',
        description:
          'Caso você decida iniciar o cuidado, os retornos presenciais servem para ajustar, monitorar o progresso com segurança e responder dúvidas ao longo do percurso.',
      },
    ],
    image: '/src/assets/images/clinic_lounge_interior_1795009693055.jpg',
    imageAlt:
      'Ambiente de recepção acolhedor da clínica com sofá lavanda claro, mesa em pedra natural e luz suave pelas janelas',
  },
  firstVisit: {
    title: 'O que levar à primeira consulta',
    subtitle:
      'Não é preciso se preparar com antecedência complexa. Caso já possua alguns dos itens abaixo, eles ajudam na conversa inicial.',
    items: [
      {
        title: 'Documento de identificação com foto',
        detail: 'Para cadastro presencial simples na recepção da clínica.',
      },
      {
        title: 'Exames ou radiografias recentes (se já tiver)',
        detail:
          'Se realizou radiografias odontológicas nos últimos meses, pode levá-las. Caso não tenha, não há necessidade de fazer antes da avaliação.',
      },
      {
        title: 'Suas dúvidas e prioridades anotadas',
        detail:
          'O que você gostaria de entender sobre conforto, estética, rotina de trabalho ou horários das consultas.',
      },
      {
        title: 'Contenção ou encaminhamento anterior (opcional)',
        detail:
          'Se já usou aparelho no passado ou recebeu indicação de outro dentista, trazer a contenção atual ou a carta ajuda no contexto.',
      },
    ],
    privacyAssurance:
      'Importante: para preservar sua privacidade, este site não solicita o envio de fotos, radiografias, sintomas ou histórico médico antes da consulta.',
  },
  team: {
    title: 'Equipe clínica',
    subtitle:
      'Atendimento conduzido por profissionais dedicados à escuta atenta, ao diagnóstico responsável e ao acompanhamento próximo em todas as fases.',
    members: [
      {
        id: 'prof-1',
        name: 'Dra. Camila Fernandes',
        specialty: 'Ortodontia e Ortopedia Facial',
        registry: 'CRO-PR 24.810',
        bio: 'Atua no planejamento ortodôntico de jovens e adultos, com atenção especial ao equilíbrio funcional da mordida e à clareza nas explicações em consulta.',
      },
      {
        id: 'prof-2',
        name: 'Dr. Henrique Monteiro',
        specialty: 'Ortodontia Preventiva e Alinhadores',
        registry: 'CRO-PR 27.345',
        bio: 'Focado no acompanhamento do desenvolvimento dentário, revisões de contenção e adaptação de dispositivos discretos conforme a rotina de cada paciente.',
      },
    ],
  },
  ethicsBlock: {
    title: 'Compromisso com ética e transparência clínica',
    description:
      'Na Alinha Ortodontia, acreditamos que decisões sobre saúde bucal exigem tranquilidade e informação honesta. Por respeito aos pacientes e às diretrizes éticas da odontologia, não publicamos promessas padronizadas nem imagens comparativas de antes e depois.',
    details: [
      'Orientação individualizada em consultório',
      'Sem promessas de prazos clínicos fixos',
      'Transparência sobre opções, rotina e orçamento',
    ],
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle:
      'Esclarecimentos gerais sobre avaliação, recursos ortodônticos e funcionamento do pedido de horário. Cada caso é avaliado individualmente em consulta.',
    items: [
      {
        id: 'faq-1',
        question: 'Como funciona a primeira consulta de avaliação?',
        answer:
          'A primeira consulta é uma conversa presencial tranquila combinada com exame clínico da arcada dentária e da mordida. O objetivo é ouvir o que você procura, esclarecer dúvidas iniciais e verificar se há indicação de exames complementares antes de apresentar as opções possíveis.',
      },
      {
        id: 'faq-2',
        question: 'Qual é a diferença prática entre aparelho fixo e alinhador transparente?',
        answer:
          'O aparelho fixo permanece colado aos dentes e atua de forma contínua, enquanto os alinhadores são placas transparentes removíveis para alimentação e higiene. Ambos têm possibilidades e limitações específicas; o(a) ortodontista avalia em consulta qual recurso oferece melhor previsibilidade para o seu caso.',
      },
      {
        id: 'faq-3',
        question: 'O envio do pedido pelo WhatsApp já garante meu horário marcado?',
        answer:
          'Não. O formulário prepara uma solicitação de contato com seu nome, telefone, período preferido e interesse. A confirmação do dia e horário acontece somente após o retorno da nossa recepção, conforme a disponibilidade da agenda.',
      },
      {
        id: 'faq-4',
        question: 'Com que frequência acontecem as consultas de manutenção?',
        answer:
          'A periodicidade das visitas varia conforme a modalidade escolhida e a fase do acompanhamento. Durante a apresentação do plano, o profissional informa a frequência esperada para os seus retornos.',
      },
      {
        id: 'faq-5',
        question: 'Preciso enviar fotos dos dentes ou exames antes de ir à clínica?',
        answer:
          'Não é necessário enviar fotos, exames ou histórico de saúde pela internet. Se você já possuir radiografias recentes em casa, basta levá-las no dia da consulta presencial.',
      },
    ],
  },
  requestForm: {
    title: 'Solicite sua avaliação inicial',
    subtitle:
      'Preencha apenas os dados básicos abaixo para gerar sua mensagem de solicitação pelo WhatsApp. Nenhuma informação clínica é solicitada ou armazenada neste site.',
    privacyNotice:
      'Privacidade preservada: este formulário não solicita fotos, sintomas ou histórico médico e envia os dados apenas quando você escolhe iniciar a conversa no WhatsApp.',
    interestOptions: [
      { value: 'Avaliação inicial (ainda não decidi a opção)', label: 'Avaliação inicial (ainda não sei qual opção)' },
      { value: 'Aparelho fixo', label: 'Aparelho fixo (metálico ou estético)' },
      { value: 'Alinhadores transparentes', label: 'Alinhadores transparentes' },
      { value: 'Acompanhamento ou revisão de contenção', label: 'Acompanhamento ou revisão de contenção' },
    ],
    periodOptions: [
      { value: 'Manhã', label: 'Manhã' },
      { value: 'Tarde', label: 'Tarde' },
      { value: 'Indiferente', label: 'Indiferente' },
    ],
  },
  contact: {
    whatsappNumber: '5541998428190',
    phoneDisplay: '(41) 3042-8190',
    emailDisplay: 'contato@alinhaortodontia.com.br',
    addressStreet: 'Rua Coronel Dulcídio, 840 · Conj. 302',
    addressDistrict: 'Batel · Curitiba, PR',
    addressReference:
      'Acesso tranquilo próximo à Praça da Espanha, com estacionamento conveniado no edifício.',
    hours: [
      { days: 'Segunda a sexta-feira', time: '08:30 – 18:30' },
      { days: 'Sábado', time: '09:00 – 13:00' },
      { days: 'Domingo e feriados', time: 'Fechado' },
    ],
  },
};
