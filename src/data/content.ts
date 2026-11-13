export type Lang = 'pt' | 'en';

export const site = {
  url: 'https://smdata.net',
  email: 'contato@smdata.net',
  arcadea: {
    site: import.meta.env.PUBLIC_ARCADEA_URL || 'https://arcadea.app',
    download:
      import.meta.env.PUBLIC_DOWNLOAD_URL ||
      'https://downloads.arcadea.app/win/stable/Arcadea-Setup.exe',
    portable:
      import.meta.env.PUBLIC_PORTABLE_URL ||
      'https://downloads.arcadea.app/win/stable/Arcadea-portable.zip',
    desktopVersion: '1.3.1',
    companionVersion: '0.9.0'
  }
} as const;

export const routes = {
  pt: {
    home: '/pt/',
    products: '/pt/produtos/',
    arcadea: '/pt/produtos/arcadea/',
    efinancas: '/pt/produtos/efinancas/',
    about: '/pt/sobre/',
    contact: '/pt/contato/'
  },
  en: {
    home: '/en/',
    products: '/en/products/',
    arcadea: '/en/products/arcadea/',
    efinancas: '/en/products/efinancas/',
    about: '/en/about/',
    contact: '/en/contact/'
  }
} as const;

export const nav = {
  pt: [
    { label: 'Início', path: routes.pt.home },
    { label: 'Serviços', path: `${routes.pt.home}#servicos` },
    { label: 'Produtos', path: routes.pt.products },
    { label: 'Sobre', path: routes.pt.about },
    { label: 'Contato', path: routes.pt.contact }
  ],
  en: [
    { label: 'Home', path: routes.en.home },
    { label: 'Services', path: `${routes.en.home}#servicos` },
    { label: 'Products', path: routes.en.products },
    { label: 'About', path: routes.en.about },
    { label: 'Contact', path: routes.en.contact }
  ]
} as const;

export const servicesDetail = {
  pt: {
    kicker: 'Serviços',
    title: 'Sistemas que sustentam a operação.',
    intro:
      'Prestação de serviços na área de tecnologia, com escopo de atuação definido junto de cada cliente. Desenvolvemos e mantemos sistemas de logística, orçamentários e fluxos diversos de back-office, apoiados em mais de 20 anos de experiência em desenvolvimento de sistemas, gestão empresarial e processos de negócio.',
    emphasis:
      'Do entendimento da necessidade à implementação e manutenção, trabalhamos diretamente na construção de soluções adequadas à realidade de cada negócio.',
    items: [
      {
        title: 'Logística',
        text: 'Sistemas para acompanhar estoque, pedidos, movimentação e a rotina da operação.'
      },
      {
        title: 'Orçamentário',
        text: 'Sistemas para planejamento, controle e acompanhamento de orçamento.'
      },
      {
        title: 'Back-office',
        text: 'Fluxos internos, cadastros, aprovações e rotinas administrativas.'
      }
    ],
    cta: 'Falar sobre um projeto',
    imageAlt: 'Profissional trabalhando em um computador ao lado de caixas em um depósito',
    imageTag: 'Logística · Orçamento · Back-office',
    credit: 'Foto: Tima Miroshnichenko / Pexels',
    creditUrl: 'https://www.pexels.com/photo/6169635/'
  },
  en: {
    kicker: 'Services',
    title: 'Systems that keep operations running.',
    intro:
      'Technology services with scope of work defined together with each client. We develop and maintain logistics, budget and back-office systems, supported by over 20 years of experience in systems development, business management and business processes.',
    emphasis:
      'From understanding the need to implementation and maintenance, we work directly on building solutions that fit each business reality.',
    items: [
      {
        title: 'Logistics',
        text: 'Systems to track inventory, orders, movement and the daily operation.'
      },
      {
        title: 'Budget',
        text: 'Systems for planning, control and budget tracking.'
      },
      {
        title: 'Back-office',
        text: 'Internal workflows, records, approvals and administrative routines.'
      }
    ],
    cta: 'Talk about a project',
    imageAlt: 'Professional working on a computer next to boxes in a warehouse',
    imageTag: 'Logistics · Budget · Back-office',
    credit: 'Photo: Tima Miroshnichenko / Pexels',
    creditUrl: 'https://www.pexels.com/photo/6169635/'
  }
} as const;

export const ui = {
  pt: {
    lang: 'pt-BR',
    skip: 'Pular para o conteúdo',
    menu: 'Menu',
    close: 'Fechar',
    switchLabel: 'EN',
    switchAria: 'Mudar para inglês',
    contactCta: 'Fale com a gente',
    brandSub: 'Tecnologia · Serviços e produtos',
    footerTagline: 'Serviços de tecnologia e produtos digitais próprios.',
    footerNav: 'Navegação',
    footerProducts: 'Produtos',
    footerContact: 'Contato',
    footerEmail: 'E-mail',
    rights: 'Todos os direitos reservados.',
    productNote: 'Arcadea e eFinanças são produtos da SMData.',
    trademarks:
      'Steam, Epic Games, GOG e Amazon são marcas de seus respectivos proprietários.',
    back: 'Voltar para produtos',
    next: 'Próximo produto',
    email: 'E-mail',
    conceptual: 'Prévia da interface · valores ilustrativos',
    status: 'Status',
    available: 'Disponível',
    comingSoon: 'Em breve',
    inDevelopment: 'Em desenvolvimento',
    alpha: 'Alpha',
    roadmap: 'Roadmap'
  },
  en: {
    lang: 'en',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    switchLabel: 'PT',
    switchAria: 'Switch to Portuguese',
    contactCta: 'Talk to us',
    brandSub: 'Technology · Services and products',
    footerTagline: 'Technology services and digital products of our own.',
    footerNav: 'Navigation',
    footerProducts: 'Products',
    footerContact: 'Contact',
    footerEmail: 'Email',
    rights: 'All rights reserved.',
    productNote: 'Arcadea and eFinanças are products by SMData.',
    trademarks: 'Steam, Epic Games, GOG and Amazon are trademarks of their respective owners.',
    back: 'Back to products',
    next: 'Next product',
    email: 'Email',
    conceptual: 'Interface preview · illustrative values',
    status: 'Status',
    available: 'Available',
    comingSoon: 'Coming soon',
    inDevelopment: 'In development',
    alpha: 'Alpha',
    roadmap: 'Roadmap'
  }
} as const;

export const home = {
  pt: {
    meta: {
      title: 'SMData — empresa familiar de tecnologia',
      description:
        'A SMData presta serviços de tecnologia e desenvolve produtos digitais próprios, como Arcadea e eFinanças.',
      ogAlt: 'SMData — empresa familiar de tecnologia'
    },
    hero: {
      eyebrow: 'Empresa familiar de tecnologia · Serviços e produtos',
      title: 'Software para o que faz parte do seu dia.',
      lead: 'A SMData é uma empresa familiar de tecnologia. Prestamos serviços e criamos produtos próprios — muitos deles nascidos do nosso próprio dia a dia.',
      primary: 'Conhecer os produtos',
      secondary: 'Sobre a SMData',
      note: 'Arcadea · eFinanças'
    },
    visual: {
      arcadeaLabel: 'Arcadea · Desktop',
      efinancasLabel: 'eFinanças · Android',
      caption: 'Dois produtos, a mesma atenção ao detalhe.'
    },
    about: {
      kicker: 'Quem somos',
      title: 'Uma empresa familiar de tecnologia.',
      paragraphs: [
        'A SMData presta serviços na área de tecnologia e desenvolve produtos digitais próprios. Somos uma empresa familiar, com o cuidado de quem assina o que entrega.',
        'A maioria dos nossos produtos nasce do uso: criamos para resolver algo do nosso dia a dia e, quando percebemos que o problema também é de outras pessoas, abrimos ao público.'
      ],
      link: 'Conhecer a SMData',
      sideLabel: 'Em resumo',
      side: [
        { label: 'Modelo', value: 'Serviços + produtos próprios' },
        { label: 'Origem dos produtos', value: 'Uso próprio, depois mercado' },
        { label: 'Produtos ao público', value: 'Arcadea e eFinanças' }
      ]
    },
    principles: {
      kicker: 'Como trabalhamos',
      title: 'Produto antes de pressa.',
      lead: 'Três princípios guiam o que entra — e o que fica de fora.',
      items: [
        {
          title: 'Uso real',
          text: 'Construímos primeiro para nós. Se a ferramenta não melhora o nosso dia, não faz sentido abrir ao público.'
        },
        {
          title: 'Pesquisa',
          text: 'Quando decidimos abrir algo ao público, iniciamos com um grupo pequeno de testers. Cada funcionalidade é revisada para atender às demandas habituais do dia a dia de diferentes pessoas.'
        },
        {
          title: 'Continuidade',
          text: 'Lançar é o começo. Versão, suporte e evolução fazem parte do produto.'
        }
      ]
    },
    products: {
      kicker: 'Produtos',
      title: 'Problemas diferentes. Produtos diferentes',
      lead: 'Atuamos em vários segmentos sempre com o intuito de fornecer melhorias no nosso dia a dia. Nos nossos dois produtos atuais de mercado, um cuida do seu entretenimento, o outro do seu bolso.',
      items: [
        {
          index: '01',
          name: 'Arcadea',
          kind: 'Biblioteca e descoberta de jogos',
          status: 'Desktop 1.3.1 · Companion alpha 0.9.0',
          description:
            'Steam, Epic, GOG, Amazon Games e jogos locais em uma única biblioteca. Ficha completa de cada jogo, ofertas, wishlist sincronizada e um Companion Android. Encontre sempre o menor preço e nunca mais gaste dinheiro com jogos que você já tem.',
          link: 'Ver o Arcadea',
          path: routes.pt.arcadea
        },
        {
          index: '02',
          name: 'eFinanças | Caixinhas',
          kind: 'Finanças pessoais',
          status: 'Em breve · Android',
          description:
            'Baseado na mesma organização financeira usada por grandes empresas, elaboramos o orçamento em caixinhas. Separe seu orçamento por tipo e finalidade de gasto, veja o quanto você consegue economizar no mês com organização.',
          link: 'Ver o eFinanças',
          path: routes.pt.efinancas
        }
      ]
    },
    contact: {
      kicker: 'Contato',
      title: 'Quer falar com a SMData?',
      text: 'Dúvidas sobre os produtos, serviços, imprensa ou parcerias: o e-mail é o nosso canal.',
      cta: 'Escrever para a SMData'
    }
  },
  en: {
    meta: {
      title: 'SMData — a family-owned technology company',
      description:
        'SMData provides technology services and builds digital products of its own, such as Arcadea and eFinanças.',
      ogAlt: 'SMData — a family-owned technology company'
    },
    hero: {
      eyebrow: 'Family-owned technology company · Services and products',
      title: 'Software for the things that shape your day.',
      lead: 'SMData is a family-owned technology company. We provide services and build products of our own — many of them born from our own daily work.',
      primary: 'Explore the products',
      secondary: 'About SMData',
      note: 'Arcadea · eFinanças'
    },
    visual: {
      arcadeaLabel: 'Arcadea · Desktop',
      efinancasLabel: 'eFinanças · Android',
      caption: 'Two products, the same attention to detail.'
    },
    about: {
      kicker: 'Who we are',
      title: 'A family-owned technology company.',
      paragraphs: [
        'SMData provides technology services and builds digital products of its own. We are a family-owned company, with the care of people who sign what they deliver.',
        'Most of our products come from use: we build them to solve something in our own daily work, and when we see that the problem belongs to other people too, we open them to the public.'
      ],
      link: 'Meet SMData',
      sideLabel: 'At a glance',
      side: [
        { label: 'Model', value: 'Services + products of our own' },
        { label: 'Product origin', value: 'Own use, then market' },
        { label: 'Products in the market', value: 'Arcadea and eFinanças' }
      ]
    },
    principles: {
      kicker: 'How we work',
      title: 'Product before hurry.',
      lead: 'Three principles guide what goes in — and what stays out.',
      items: [
        {
          title: 'Real use',
          text: 'We build for ourselves first. If the tool does not improve our own day, it does not make sense to open it to the public.'
        },
        {
          title: 'Research',
          text: 'When we decide to open something to the public, we start with a small group of testers. Every feature is reviewed to meet the everyday needs of different people.'
        },
        {
          title: 'Continuity',
          text: 'Launching is the beginning. Versions, support and evolution are part of the product.'
        }
      ]
    },
    products: {
      kicker: 'Products',
      title: 'Different problems. Different products',
      lead: 'We work across several segments, always aiming to bring improvements to our daily lives. In our two current products in the market, one takes care of your entertainment, the other of your wallet.',
      items: [
        {
          index: '01',
          name: 'Arcadea',
          kind: 'Game library and discovery',
          status: 'Desktop 1.3.1 · Companion alpha 0.9.0',
          description:
            'Steam, Epic, GOG, Amazon Games and local games in one library. Full game pages, deals, a synced wishlist and an Android Companion. Always find the lowest price and never spend money on games you already own again.',
          link: 'View Arcadea',
          path: routes.en.arcadea
        },
        {
          index: '02',
          name: 'eFinanças | Caixinhas',
          kind: 'Personal finance',
          status: 'Coming soon · Android',
          description:
            'Based on the same financial organization used by large companies, we created budgeting by boxes. Separate your budget by type and purpose of spending, and see how much you can save each month with organization.',
          link: 'View eFinanças',
          path: routes.en.efinancas
        }
      ]
    },
    contact: {
      kicker: 'Contact',
      title: 'Want to talk to SMData?',
      text: 'Questions about the products, services, press or partnerships: email is our channel.',
      cta: 'Write to SMData'
    }
  }
} as const;

export const products = {
  pt: {
    meta: {
      title: 'Produtos — SMData',
      description:
        'Arcadea, a biblioteca de jogos unificada, e eFinanças, o orçamento pessoal por caixinhas. Conheça os produtos da SMData.',
      ogAlt: 'Produtos da SMData'
    },
    hero: {
      kicker: 'Produtos',
      title: 'Problemas diferentes. Produtos diferentes',
      lead: 'Atuamos em vários segmentos sempre com o intuito de fornecer melhorias no nosso dia a dia. Nos nossos dois produtos atuais de mercado, um cuida do seu entretenimento, o outro do seu bolso.'
    },
    arcadea: {
      index: '01',
      name: 'Arcadea',
      kind: 'Biblioteca e descoberta de jogos',
      status: 'Desktop 1.3.1 · Companion alpha 0.9.0',
      description:
        'Steam, Epic, GOG, Amazon Games e jogos locais em uma única biblioteca. Página de jogo completa, ofertas, wishlist sincronizada e Companion Android. Encontre sempre o menor preço e nunca mais gaste dinheiro com jogos que você já tem.',
      highlights: [
        'Biblioteca unificada',
        'Página de jogo completa',
        'Ofertas e wishlist',
        'Companion Android'
      ],
      cta: 'Conhecer o Arcadea',
      path: routes.pt.arcadea
    },
    efinancas: {
      index: '02',
      name: 'eFinanças | Caixinhas',
      kind: 'Finanças pessoais',
      status: 'Em breve · Android',
      description:
        'Baseado na mesma organização financeira usada por grandes empresas, elaboramos o orçamento em caixinhas. Separe seu orçamento por tipo e finalidade de gasto, veja o quanto você consegue economizar no mês com organização.',
      highlights: [
        'Dia, semana e mês',
        'Três saldos e projeção',
        'Eventos com orçamento próprio',
        'Notificações do banco'
      ],
      cta: 'Conhecer o eFinanças',
      path: routes.pt.efinancas
    },
    closing: {
      title: 'Informação de produto, sem promessa vazia.',
      text: 'Versões, plataformas e estágio de cada produto são atualizados conforme o desenvolvimento. Não publicamos números, avaliações ou recursos que ainda não existem.'
    }
  },
  en: {
    meta: {
      title: 'Products — SMData',
      description:
        'Arcadea, the unified game library, and eFinanças, personal budgeting by boxes. Meet the products by SMData.',
      ogAlt: 'SMData products'
    },
    hero: {
      kicker: 'Products',
      title: 'Different problems. Different products',
      lead: 'We work across several segments, always aiming to bring improvements to our daily lives. In our two current products in the market, one takes care of your entertainment, the other of your wallet.'
    },
    arcadea: {
      index: '01',
      name: 'Arcadea',
      kind: 'Game library and discovery',
      status: 'Desktop 1.3.1 · Companion alpha 0.9.0',
      description:
        'Steam, Epic, GOG, Amazon Games and local games in one library. Complete game pages, deals, a synced wishlist and an Android Companion. Always find the lowest price and never spend money on games you already own again.',
      highlights: ['Unified library', 'Complete game pages', 'Deals and wishlist', 'Android Companion'],
      cta: 'Explore Arcadea',
      path: routes.en.arcadea
    },
    efinancas: {
      index: '02',
      name: 'eFinanças | Caixinhas',
      kind: 'Personal finance',
      status: 'Coming soon · Android',
      description:
        'Based on the same financial organization used by large companies, we created budgeting by boxes. Separate your budget by type and purpose of spending, and see how much you can save each month with organization.',
      highlights: ['Day, week and month', 'Three balances and projection', 'Event budgets', 'Bank notifications'],
      cta: 'Explore eFinanças',
      path: routes.en.efinancas
    },
    closing: {
      title: 'Product information, without empty promises.',
      text: 'Versions, platforms and the stage of each product are updated as development moves. We do not publish numbers, reviews or features that do not exist yet.'
    }
  }
} as const;

export const arcadeaPage = {
  pt: {
    meta: {
      title: 'Arcadea — toda a sua biblioteca de jogos em um só lugar',
      description:
        'Arcadea reúne Steam, Epic, GOG, Amazon Games e jogos locais em uma única biblioteca, com ficha de jogo, ofertas, wishlist sincronizada e Companion Android.',
      ogAlt: 'Arcadea, a biblioteca de jogos da SMData'
    },
    breadcrumb: ['Início', 'Produtos', 'Arcadea'],
    hero: {
      kicker: 'Produto 01 · Biblioteca de jogos',
      name: 'Arcadea',
      lead: 'Toda a sua biblioteca de jogos em um só lugar — no desktop e no celular.',
      description:
        'O Arcadea reúne Steam, Epic, GOG, Amazon Games e jogos locais em uma única biblioteca. Organiza, ajuda a descobrir, compara preços e mantém a sua wishlist em sincronia. Encontre sempre o menor preço e nunca mais gaste dinheiro com jogos que você já tem.',
      primary: 'Baixar para Windows',
      secondary: 'Visitar arcadea.app',
      portable: 'Baixar versão portátil',
      meta: [
        { label: 'Plataformas', value: 'Windows 10/11 · Companion Android' },
        {
          label: 'Versão',
          value: 'Desktop 1.3.1 · Companion alpha 0.9.0'
        },
        { label: 'Distribuição', value: 'Instalador e portátil' }
      ],
      note: 'Linux e Steam Deck estão em testes.',
      screenshotCaption:
        'Biblioteca do Arcadea com Steam, Epic, GOG, Amazon Games e jogos locais.'
    },
    features: {
      kicker: 'O que o Arcadea faz',
      title: 'Uma biblioteca, e o que você precisa para decidir o próximo jogo.',
      lead: 'Menos abas, menos planilhas e menos sites para montar a ficha do que você vai jogar.',
      items: [
        {
          title: 'Biblioteca unificada',
          text: 'Steam, Epic, GOG, Amazon Games e executáveis locais em uma grade única, com busca, filtros e seleção de lojas.'
        },
        {
          title: 'Página de jogo completa',
          text: 'Sinopse, ficha técnica, IGDB, HowLongToBeat, trailers, galeria e preços sem sair do app.'
        },
        {
          title: 'Ofertas com contexto',
          text: 'Preço regional por loja, menor preço histórico, jogos grátis e uma oferta por jogo.'
        },
        {
          title: 'Wishlist em sincronia',
          text: 'Preço-alvo, alertas e a mesma lista no desktop e no Companion.'
        },
        {
          title: 'Anotações por jogo',
          text: 'Guias, links e observações guardados junto do jogo, sincronizados entre as telas.'
        },
        {
          title: 'Descobrir e lançamentos',
          text: 'Pesquise o catálogo e acompanhe lançamentos dos últimos e dos próximos 7 dias.'
        },
        {
          title: 'Modo offline',
          text: 'Sua biblioteca e seus jogos continuam acessíveis. Os dados voltam a atualizar quando a conexão retorna.'
        },
        {
          title: 'Jogos locais',
          text: 'Cadastre executáveis e argumentos para launchers, emuladores e jogos fora das lojas.'
        }
      ]
    },
    gallery: {
      kicker: 'Por dentro',
      title: 'O produto em uso.',
      items: [
        {
          title: 'Tudo sobre o jogo, em uma página.',
          text: 'Metadados, tempo de campanha, galeria, trailers e histórico de preço no mesmo lugar.',
          caption: 'Cities: Skylines com metadados, HowLongToBeat e histórico de preço.',
          alt: 'Página de detalhes de Cities: Skylines no Arcadea'
        },
        {
          title: 'Ofertas da sua região.',
          text: 'Promoções confirmadas, desconto, menor preço histórico e validade em uma lista limpa.',
          caption: 'Ofertas regionais com desconto e menor preço histórico.',
          alt: 'Página de ofertas do Arcadea com promoções regionais'
        },
        {
          title: 'Uma lista que acompanha você.',
          text: 'Preço-alvo e alertas iguais no desktop e no celular.',
          caption: 'Wishlist com preço-alvo, status e alertas.',
          alt: 'Página de wishlist do Arcadea'
        }
      ]
    },
    availability: {
      kicker: 'Disponibilidade',
      title: 'Onde o Arcadea está hoje.',
      rows: [
        { platform: 'Desktop · Windows 10/11', state: '1.3.1 · disponível' },
        { platform: 'Companion · Android', state: 'alpha 0.9.0 · em disponibilização' },
        { platform: 'Linux', state: 'em testes' },
        { platform: 'Steam Deck', state: 'em testes' }
      ],
      note: 'O instalador ainda não é assinado; o Windows pode exibir um aviso. Atualizações automáticas já estão incluídas.'
    },
    privacy: {
      kicker: 'Privacidade',
      title: 'O essencial fica com você.',
      text: 'O Arcadea foi desenhado para não pedir o que não precisa.',
      items: [
        {
          title: 'Sem senhas de loja',
          text: 'O login acontece nos fluxos oficiais. O Arcadea não recebe nem guarda senhas.'
        },
        {
          title: 'Local-first',
          text: 'Biblioteca instalada, execução e jogos locais ficam no seu computador.'
        },
        {
          title: 'Sincronização sob controle',
          text: 'Você decide o que sincronizar com o Companion e pode apagar seus dados.'
        },
        {
          title: 'Offline de verdade',
          text: 'Sem conexão, os jogos continuam acessíveis; apenas os dados não atualizam.'
        }
      ]
    },
    companion: {
      kicker: 'Companion Android',
      title: 'A biblioteca no bolso.',
      text: 'O Companion leva o essencial para o celular: biblioteca, descoberta, ofertas, ficha do jogo e wishlist editável. Ele evolui junto com o desktop.',
      bullets: [
        'Biblioteca com busca e filtros',
        'Descobrir e lançamentos',
        'Ofertas e ficha completa',
        'Wishlist e anotações em sincronia'
      ],
      note: 'Alpha 0.9.0 — em processo de disponibilização para Android.',
      screens: [
        {
          title: 'Sua biblioteca',
          alt: 'Biblioteca do Arcadea no Companion Android'
        },
        {
          title: 'Ficha e wishlist',
          alt: 'Página de jogo do Arcadea no Companion Android'
        }
      ]
    },
    next: {
      label: 'Próximo produto',
      name: 'eFinanças | Caixinhas',
      text: 'Orçamento por caixinhas, todos os dias.',
      path: routes.pt.efinancas
    }
  },
  en: {
    meta: {
      title: 'Arcadea — your entire game library in one place',
      description:
        'Arcadea brings Steam, Epic, GOG, Amazon Games and local games into one library, with game pages, deals, a synced wishlist and an Android Companion.',
      ogAlt: 'Arcadea, the game library by SMData'
    },
    breadcrumb: ['Home', 'Products', 'Arcadea'],
    hero: {
      kicker: 'Product 01 · Game library',
      name: 'Arcadea',
      lead: 'Your entire game library in one place — on desktop and on your phone.',
      description:
        'Arcadea brings Steam, Epic, GOG, Amazon Games and local games into one library. It organizes, helps you discover, compares prices and keeps your wishlist in sync. Always find the lowest price and never spend money on games you already own again.',
      primary: 'Download for Windows',
      secondary: 'Visit arcadea.app',
      portable: 'Download portable build',
      meta: [
        { label: 'Platforms', value: 'Windows 10/11 · Android Companion' },
        {
          label: 'Version',
          value: 'Desktop 1.3.1 · Companion alpha 0.9.0'
        },
        { label: 'Distribution', value: 'Installer and portable' }
      ],
      note: 'Linux and Steam Deck are in testing.',
      screenshotCaption: 'The Arcadea library with Steam, Epic, GOG, Amazon Games and local games.'
    },
    features: {
      kicker: 'What Arcadea does',
      title: 'One library, and what you need to choose your next game.',
      lead: 'Fewer tabs, fewer spreadsheets and fewer sites to assemble the page of what you are about to play.',
      items: [
        {
          title: 'Unified library',
          text: 'Steam, Epic, GOG, Amazon Games and local executables in one grid, with search, filters and store selection.'
        },
        {
          title: 'Complete game page',
          text: 'Summary, tech sheet, IGDB, HowLongToBeat, trailers, gallery and prices without leaving the app.'
        },
        {
          title: 'Deals with context',
          text: 'Regional price per store, historical low, free games and one offer per game.'
        },
        {
          title: 'Wishlist in sync',
          text: 'Target price, alerts and the same list on desktop and Companion.'
        },
        {
          title: 'Notes for every game',
          text: 'Guides, links and notes kept next to the game, synced across screens.'
        },
        {
          title: 'Discover and releases',
          text: 'Search the catalog and follow releases from the last and next 7 days.'
        },
        {
          title: 'Offline mode',
          text: 'Your library and games remain available. Data starts updating again when you reconnect.'
        },
        {
          title: 'Local games',
          text: 'Add executables and arguments for launchers, emulators and games outside the stores.'
        }
      ]
    },
    gallery: {
      kicker: 'Inside',
      title: 'The product in use.',
      items: [
        {
          title: 'Everything about the game, on one page.',
          text: 'Metadata, completion time, gallery, trailers and price history in the same place.',
          caption: 'Cities: Skylines with metadata, HowLongToBeat and price history.',
          alt: 'Cities: Skylines game details page in Arcadea'
        },
        {
          title: 'Deals for your region.',
          text: 'Confirmed promotions, discount, historical low and expiry in a clean list.',
          caption: 'Regional deals with discount and historical low.',
          alt: 'Arcadea deals page with regional promotions'
        },
        {
          title: 'A list that follows you.',
          text: 'Target price and alerts that are the same on desktop and phone.',
          caption: 'Wishlist with target price, status and alerts.',
          alt: 'Arcadea wishlist page'
        }
      ]
    },
    availability: {
      kicker: 'Availability',
      title: 'Where Arcadea stands today.',
      rows: [
        { platform: 'Desktop · Windows 10/11', state: '1.3.1 · available' },
        { platform: 'Companion · Android', state: 'alpha 0.9.0 · in release' },
        { platform: 'Linux', state: 'in testing' },
        { platform: 'Steam Deck', state: 'in testing' }
      ],
      note: 'The installer is not signed yet, so Windows may show a warning. Automatic updates are already included.'
    },
    privacy: {
      kicker: 'Privacy',
      title: 'The essentials stay with you.',
      text: 'Arcadea is designed not to ask for what it does not need.',
      items: [
        {
          title: 'No store passwords',
          text: 'Login happens through the official flows. Arcadea never receives or stores passwords.'
        },
        {
          title: 'Local-first',
          text: 'Installed library, launching and local games stay on your computer.'
        },
        {
          title: 'Sync under control',
          text: 'You decide what syncs with the Companion and can delete your data.'
        },
        {
          title: 'Truly offline',
          text: 'Without a connection, games remain available; only data stops updating.'
        }
      ]
    },
    companion: {
      kicker: 'Android Companion',
      title: 'Your library in your pocket.',
      text: 'The Companion brings the essentials to your phone: library, discovery, deals, game pages and an editable wishlist. It evolves alongside desktop.',
      bullets: [
        'Library with search and filters',
        'Discover and releases',
        'Deals and complete game pages',
        'Wishlist and notes in sync'
      ],
      note: 'Alpha 0.9.0 — in the process of release for Android.',
      screens: [
        {
          title: 'Your library',
          alt: 'Arcadea library in the Android Companion'
        },
        {
          title: 'Game page and wishlist',
          alt: 'Arcadea game page in the Android Companion'
        }
      ]
    },
    next: {
      label: 'Next product',
      name: 'eFinanças | Caixinhas',
      text: 'A budget for every box, every day.',
      path: routes.en.efinancas
    }
  }
} as const;

export const efinancasPage = {
  pt: {
    meta: {
      title: 'eFinanças | Caixinhas — quanto você ainda pode gastar hoje?',
      description:
        'eFinanças leva para a sua casa a organização financeira de grandes empresas: orçamento em caixinhas por tipo e finalidade de gasto, sem login e com os dados no aparelho.',
      ogAlt: 'eFinanças | Caixinhas, o orçamento pessoal da SMData'
    },
    breadcrumb: ['Início', 'Produtos', 'eFinanças'],
    hero: {
      kicker: 'Produto 02 · Finanças pessoais',
      name: 'eFinanças | Caixinhas',
      lead: 'O app que trata cada caixinha como orçamento — e mostra, todo dia, quanto você ainda pode gastar sem estourar o mês.',
      description:
        'Baseado na mesma organização financeira usada por grandes empresas, elaboramos o orçamento em caixinhas. Separe seu orçamento por tipo e finalidade de gasto, veja o quanto você consegue economizar no mês com organização.',
      status: 'Android · iPhone em testes',
      primary: 'Em breve',
      secondary: 'Falar sobre o produto',
      meta: [
        { label: 'Plataforma', value: 'Android · Windows (mesmo código) · iPhone (testes)' },
        { label: 'Status', value: 'Em breve (Android) · Em testes (iPhone)' },
        { label: 'Dados', value: 'No aparelho' }
      ],
      imageAlt: 'Arte de abertura do eFinanças | Caixinhas'
    },
    problem: {
      kicker: 'O problema',
      quote: 'Saldo no banco não é resposta. Quanto sobra para hoje é.',
      text: 'O app do banco mostra o que já passou. A planilha dá trabalho. O eFinanças parte de outra pergunta: com o que você tem hoje, quanto ainda dá para gastar?'
    },
    how: {
      kicker: 'Como funciona',
      title: 'Três passos para o mês fazer sentido.',
      steps: [
        {
          title: 'Diga quanto entra',
          text: 'Informe a receita do período e as despesas fixas.'
        },
        {
          title: 'Distribua nas caixinhas',
          text: 'Cada caixinha é um orçamento com teto e propósito — não uma poupança.'
        },
        {
          title: 'Acompanhe o dia',
          text: 'Registre os gastos e veja o que ainda cabe no dia, na semana e no mês.'
        }
      ]
    },
    features: {
      kicker: 'O que está no app',
      title: 'Feito para a decisão de hoje.',
      lead: 'Não é um controlador de gastos do passado. É uma resposta para o que ainda pode ser gasto.',
      items: [
        {
          title: 'Orçamento dia, semana e mês',
          text: 'Cada caixinha impacta os quadros que você escolher, com saldo e barra de progresso.'
        },
        {
          title: 'Caixinha é orçamento',
          text: 'Teto e propósito para gastar — não dinheiro parado.'
        },
        {
          title: 'Três saldos',
          text: 'Real, Planejado e Esperado, incluindo a projeção até hoje.'
        },
        {
          title: 'Rateio correto',
          text: 'Diária, semanal e mensal, inclusive quando a semana cruza o mês.'
        },
        {
          title: 'Caixinhas de evento',
          text: 'Orçamento exclusivo para viagens e períodos especiais.'
        },
        {
          title: 'Receitas diversas',
          text: 'Reembolsos, devoluções e dinheiro que volta entram no saldo para gastos.'
        },
        {
          title: 'Despesas completas',
          text: 'Valor, data, caixinha, descrição com autocomplete, parcelas e histórico.'
        },
        {
          title: 'Categorias automáticas',
          text: 'Agrupa gastos por palavras-chave da descrição.'
        },
        {
          title: 'Captura de notificações',
          text: 'No Android, lê as notificações do banco em segundo plano e pede a sua validação.'
        },
        {
          title: 'Tutorial e lembretes',
          text: 'Tutorial guiado e lembretes de despesas fixas.'
        }
      ]
    },
    highlights: {
      kicker: 'Dois detalhes que mudam o mês',
      items: [
        {
          label: 'Eventos',
          title: 'Viagem não é gasto comum. E o app sabe disso.',
          text: 'Os dias do evento saem das outras caixinhas e ficam dentro de um orçamento próprio.'
        },
        {
          label: 'Notificações · Android',
          title: 'Comprou? A notificação chegou.',
          text: 'O eFinanças pergunta: registrar ou descartar? Você também pode bloquear um tipo de notificação.'
        }
      ]
    },
    privacy: {
      kicker: 'Privacidade',
      title: 'Sem conectar conta. Sem criar login.',
      text: 'Seus dados ficam no seu aparelho. O eFinanças não pede acesso à sua conta bancária e não envia seus gastos para um servidor.',
      items: [
        {
          title: 'Tudo no aparelho',
          text: 'Receitas, despesas e caixinhas ficam no aparelho.'
        },
        {
          title: 'Sem nuvem',
          text: 'Não é necessário criar conta para usar o app.'
        },
        {
          title: 'Notificações com permissão',
          text: 'Só no Android, com a sua autorização, e apenas as que têm valor.'
        },
        {
          title: 'Você valida',
          text: 'Cada captura passa pela sua confirmação antes de virar despesa.'
        }
      ]
    },
    availability: {
      kicker: 'Disponibilidade',
      title: 'Onde o eFinanças está hoje.',
      rows: [
        { platform: 'Android', state: 'Em breve' },
        { platform: 'iPhone', state: 'Em testes' },
        { platform: 'Windows', state: 'Mesmo código do Android' },
        { platform: 'Conta', state: 'Não é necessária' },
        { platform: 'Dados', state: 'No aparelho' }
      ],
      note: 'Modelo de distribuição e preço ainda não definidos.',
      disclaimer:
        'As imagens desta página são uma prévia da interface, com valores ilustrativos. O app está em fase de lançamento.'
    },
    next: {
      label: 'Próximo produto',
      name: 'Arcadea',
      text: 'Sua biblioteca de jogos, unificada.',
      path: routes.pt.arcadea
    }
  },
  en: {
    meta: {
      title: 'eFinanças | Caixinhas — how much can you still spend today?',
      description:
        'eFinanças brings home the financial organization of large companies: budgeting by boxes by type and purpose, with no login and data on your device.',
      ogAlt: 'eFinanças | Caixinhas, personal budgeting by SMData'
    },
    breadcrumb: ['Home', 'Products', 'eFinanças'],
    hero: {
      kicker: 'Product 02 · Personal finance',
      name: 'eFinanças | Caixinhas',
      lead: 'The app that treats every box as a budget — and shows, every day, how much you can still spend without breaking the month.',
      description:
        'Based on the same financial organization used by large companies, we created budgeting by boxes. Separate your budget by type and purpose of spending, and see how much you can save each month with organization.',
      status: 'Android · iPhone in testing',
      primary: 'Coming soon',
      secondary: 'Talk about the product',
      meta: [
        { label: 'Platform', value: 'Android · Windows (same codebase) · iPhone (testing)' },
        { label: 'Status', value: 'Coming soon (Android) · In testing (iPhone)' },
        { label: 'Data', value: 'On your device' }
      ],
      imageAlt: 'eFinanças | Caixinhas splash artwork'
    },
    problem: {
      kicker: 'The problem',
      quote: 'Your bank balance is not the answer. What is left for today is.',
      text: 'Your banking app shows what has already happened. Spreadsheets take work. eFinanças starts from another question: with what you have today, how much can you still spend?'
    },
    how: {
      kicker: 'How it works',
      title: 'Three steps to make the month make sense.',
      steps: [
        {
          title: 'Say what comes in',
          text: 'Enter your income for the period and your fixed expenses.'
        },
        {
          title: 'Spread it across boxes',
          text: 'Every box is a budget with a ceiling and a purpose — not a savings account.'
        },
        {
          title: 'Follow the day',
          text: 'Log expenses and see what still fits in the day, the week and the month.'
        }
      ]
    },
    features: {
      kicker: 'What is in the app',
      title: 'Built for today’s decision.',
      lead: 'Not a tracker of past spending. An answer to what can still be spent.',
      items: [
        {
          title: 'Day, week and month budget',
          text: 'Every box affects the boards you choose, with balance and progress bar.'
        },
        {
          title: 'A box is a budget',
          text: 'A ceiling and a purpose for spending — not money sitting still.'
        },
        {
          title: 'Three balances',
          text: 'Actual, Planned and Expected, including the projection up to today.'
        },
        {
          title: 'Correct split',
          text: 'Daily, weekly and monthly, including when the week crosses the month.'
        },
        {
          title: 'Event boxes',
          text: 'A dedicated budget for trips and special periods.'
        },
        {
          title: 'Other income',
          text: 'Refunds, returns and money coming back enter the spending balance.'
        },
        {
          title: 'Complete expenses',
          text: 'Amount, date, box, description with autocomplete, installments and history.'
        },
        {
          title: 'Automatic categories',
          text: 'Groups expenses by keywords in the description.'
        },
        {
          title: 'Notification capture',
          text: 'On Android, reads bank notifications in the background and asks for your confirmation.'
        },
        {
          title: 'Tutorial and reminders',
          text: 'Guided tutorial and reminders for fixed expenses.'
        }
      ]
    },
    highlights: {
      kicker: 'Two details that change the month',
      items: [
        {
          label: 'Events',
          title: 'A trip is not an ordinary expense. The app knows it.',
          text: 'Event days come out of the other boxes and sit inside their own budget.'
        },
        {
          label: 'Notifications · Android',
          title: 'Bought something? The notification arrived.',
          text: 'eFinanças asks: log it or discard it? You can also block a type of notification.'
        }
      ]
    },
    privacy: {
      kicker: 'Privacy',
      title: 'No bank connection. No login.',
      text: 'Your data stays on your device. eFinanças does not ask for access to your bank account and does not send your spending to a server.',
      items: [
        {
          title: 'Everything on your device',
          text: 'Income, expenses and boxes stay on the device.'
        },
        {
          title: 'No cloud',
          text: 'You do not need an account to use the app.'
        },
        {
          title: 'Notifications with permission',
          text: 'Android only, with your authorization, and only those with a value.'
        },
        {
          title: 'You confirm',
          text: 'Every capture goes through your confirmation before it becomes an expense.'
        }
      ]
    },
    availability: {
      kicker: 'Availability',
      title: 'Where eFinanças stands today.',
      rows: [
        { platform: 'Android', state: 'Coming soon' },
        { platform: 'iPhone', state: 'In testing' },
        { platform: 'Windows', state: 'Same codebase as Android' },
        { platform: 'Account', state: 'Not required' },
        { platform: 'Data', state: 'On your device' }
      ],
      note: 'Distribution and pricing model not defined yet.',
      disclaimer:
        'The images on this page are an interface preview with illustrative values. The app is in its launch phase.'
    },
    next: {
      label: 'Next product',
      name: 'Arcadea',
      text: 'Your game library, unified.',
      path: routes.en.arcadea
    }
  }
} as const;

export const aboutPage = {
  pt: {
    meta: {
      title: 'Sobre a SMData — empresa familiar de tecnologia',
      description:
        'A SMData é uma empresa familiar de tecnologia. Presta serviços e desenvolve produtos digitais próprios, como Arcadea e eFinanças.',
      ogAlt: 'Sobre a SMData'
    },
    hero: {
      kicker: 'Sobre a SMData',
      title: 'Uma empresa familiar de tecnologia. Serviços e produtos próprios.',
      lead: 'A SMData presta serviços na área de tecnologia e desenvolve produtos digitais próprios. Muitos deles começaram como ferramentas para o nosso próprio dia a dia.'
    },
    story: {
      kicker: 'Quem somos',
      title: 'Começamos pelo uso. Depois, pelo mercado.',
      paragraphs: [
        'A SMData é uma empresa familiar com foco na prestação de serviços na área de tecnologia. Ao lado dos serviços, mantemos nossos próprios produtos.',
        'Geralmente desenvolvemos ferramentas que usamos no nosso dia a dia. Quando percebemos que o problema também afeta outras pessoas — e que existe mercado —, iniciamos o processo de abrir o produto ao público.',
        'Arcadea e eFinanças nasceram desse princípio: resolver primeiro um problema concreto, com o cuidado de quem vai usar todos os dias. O Arcadea já está disponível para Windows e em testes para Linux e Steam Deck, com seu Companion em processo de disponibilização para Android; o eFinanças está em processo de disponibilização para Android e em testes para iPhone.'
      ]
    },
    values: {
      kicker: 'O que nos guia',
      title: 'Três princípios, na prática.',
      items: [
        {
          title: 'Uso real',
          text: 'Construímos primeiro para nós. Se a ferramenta não melhora o nosso dia, não faz sentido abrir ao público.'
        },
        {
          title: 'Pesquisa',
          text: 'Quando decidimos abrir algo ao público, iniciamos com um grupo pequeno de testers. Cada funcionalidade é revisada para atender às demandas habituais do dia a dia de diferentes pessoas.'
        },
        {
          title: 'Continuidade',
          text: 'Lançar é o começo. Versão, suporte e evolução fazem parte do produto.'
        }
      ]
    },
    services: {
      kicker: 'O que fazemos',
      title: 'Serviços de tecnologia e produtos próprios.',
      items: [
        {
          title: 'Serviços',
          text: 'Prestação de serviços na área de tecnologia, com escopo de atuação definido junto de cada cliente.'
        },
        {
          title: 'Produtos',
          text: 'Produtos digitais próprios, mantidos e evoluídos pela SMData.'
        },
        {
          title: 'Abertura ao público',
          text: 'Quando um produto interno encontra mercado, estruturamos lançamento, distribuição e suporte.'
        }
      ]
    },
    work: {
      kicker: 'Como um produto nasce',
      title: 'Do nosso uso para o mercado.',
      items: [
        {
          title: 'Uso próprio',
          text: 'A ferramenta nasce para resolver um problema do nosso dia a dia.'
        },
        {
          title: 'Mercado',
          text: 'Se o problema também é de outras pessoas, avaliamos o produto e o caminho de abertura.'
        },
        {
          title: 'Abertura',
          text: 'Distribuição, documentação e suporte entram no escopo antes do lançamento.'
        }
      ]
    },
    contact: {
      kicker: 'Contato',
      title: 'Vamos conversar.',
      text: 'Dúvidas sobre os produtos, serviços, imprensa ou parcerias: escreva para a SMData.',
      cta: 'Escrever para a SMData'
    }
  },
  en: {
    meta: {
      title: 'About SMData — a family-owned technology company',
      description:
        'SMData is a family-owned technology company. It provides technology services and builds digital products of its own, such as Arcadea and eFinanças.',
      ogAlt: 'About SMData'
    },
    hero: {
      kicker: 'About SMData',
      title: 'A family-owned technology company. Services and products of our own.',
      lead: 'SMData provides technology services and builds digital products of its own. Many of them started as tools for our own daily work.'
    },
    story: {
      kicker: 'Who we are',
      title: 'We start with use. Then with the market.',
      paragraphs: [
        'SMData is a family-owned company focused on providing technology services. Alongside our services, we maintain products of our own.',
        'We usually build tools we use in our daily work. When we see that the problem affects other people too — and that there is a market — we start the process of opening the product to the public.',
        'Arcadea and eFinanças follow that principle: solve a concrete problem first, with the care of people who will use it every day. Arcadea is already available for Windows and in testing for Linux and Steam Deck, with its Companion in the process of release for Android; eFinanças is in the process of release for Android and in testing for iPhone.'
      ]
    },
    values: {
      kicker: 'What guides us',
      title: 'Three principles, in practice.',
      items: [
        {
          title: 'Real use',
          text: 'We build for ourselves first. If the tool does not improve our own day, it does not make sense to open it to the public.'
        },
        {
          title: 'Research',
          text: 'When we decide to open something to the public, we start with a small group of testers. Every feature is reviewed to meet the everyday needs of different people.'
        },
        {
          title: 'Continuity',
          text: 'Launching is the beginning. Versions, support and evolution are part of the product.'
        }
      ]
    },
    services: {
      kicker: 'What we do',
      title: 'Technology services and products of our own.',
      items: [
        {
          title: 'Services',
          text: 'Technology services with scope of work defined together with each client.'
        },
        {
          title: 'Products',
          text: 'Digital products of our own, maintained and evolved by SMData.'
        },
        {
          title: 'Opening to the public',
          text: 'When an internal product finds a market, we structure launch, distribution and support.'
        }
      ]
    },
    work: {
      kicker: 'How a product is born',
      title: 'From our own use to the market.',
      items: [
        {
          title: 'Own use',
          text: 'The tool is born to solve a problem in our daily work.'
        },
        {
          title: 'Market',
          text: 'If the problem belongs to other people too, we assess the product and the path to opening it.'
        },
        {
          title: 'Opening',
          text: 'Distribution, documentation and support enter the scope before launch.'
        }
      ]
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s talk.',
      text: 'Questions about the products, services, press or partnerships: write to SMData.',
      cta: 'Write to SMData'
    }
  }
} as const;

export const contactPage = {
  pt: {
    meta: {
      title: 'Contato — SMData',
      description:
        'Fale com a SMData sobre o Arcadea, o eFinanças, imprensa ou parcerias. Contato por e-mail.',
      ogAlt: 'Contato da SMData'
    },
    hero: {
      kicker: 'Contato',
      title: 'Fale com a SMData.',
      lead: 'Dúvidas sobre os produtos, serviços, imprensa ou parcerias: o e-mail é o nosso canal.'
    },
    emailBlock: {
      label: 'E-mail',
      cta: 'Escrever para a SMData',
      note: 'Você pode escrever em português ou inglês. Não usamos formulário nesta versão: o e-mail chega direto para a equipe.'
    },
    subjects: {
      kicker: 'Sobre o que escrever',
      items: [
        {
          title: 'Serviços de tecnologia',
          text: 'Projetos, demandas e conversas sobre serviços.',
          subject: 'Serviços de tecnologia'
        },
        {
          title: 'Arcadea',
          text: 'Dúvidas, feedback ou problemas com o app.',
          subject: 'Arcadea'
        },
        {
          title: 'eFinanças',
          text: 'Informações sobre o produto e o desenvolvimento.',
          subject: 'eFinanças'
        },
        {
          title: 'Imprensa e parcerias',
          text: 'Materiais, entrevistas e conversas comerciais.',
          subject: 'Imprensa e parcerias'
        }
      ]
    }
  },
  en: {
    meta: {
      title: 'Contact — SMData',
      description:
        'Talk to SMData about Arcadea, eFinanças, press or partnerships. Contact by email.',
      ogAlt: 'SMData contact'
    },
    hero: {
      kicker: 'Contact',
      title: 'Talk to SMData.',
      lead: 'Questions about the products, services, press or partnerships: email is our channel.'
    },
    emailBlock: {
      label: 'Email',
      cta: 'Write to SMData',
      note: 'You can write in Portuguese or English. We do not use a form in this version: email reaches the team directly.'
    },
    subjects: {
      kicker: 'What to write about',
      items: [
        {
          title: 'Technology services',
          text: 'Projects, demands and conversations about services.',
          subject: 'Technology services'
        },
        {
          title: 'Arcadea',
          text: 'Questions, feedback or issues with the app.',
          subject: 'Arcadea'
        },
        {
          title: 'eFinanças',
          text: 'Information about the product and development.',
          subject: 'eFinanças'
        },
        {
          title: 'Press and partnerships',
          text: 'Materials, interviews and business conversations.',
          subject: 'Press and partnerships'
        }
      ]
    }
  }
} as const;
