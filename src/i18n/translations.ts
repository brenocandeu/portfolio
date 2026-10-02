export type Locale = 'pt-BR' | 'en' | 'es';

export const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      certifications: 'Certificações',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      title: 'BRENO',
      subtitle: 'Desenvolvedor Frontend',
      description: 'Unindo o pensamento analítico à estética minimalista. Traduzindo a complexidade de sistemas em interfaces limpas, invisíveis e inesquecíveis.',
    },
    loading: {
      name: '~/breno',
    },
    about: {
      label: '// sobre',
      title: 'Sobre Mim',
      bio: 'Sou um desenvolvedor frontend apaixonado por código limpo e design minimalista. Construo interfaces modernas que entregam a melhor experiência para o usuário.',
      bio2: 'Meu foco principal é criar aplicações web com alta performance e acessibilidade, unindo o melhor da tecnologia e do design para resolver problemas complexos de forma elegante.',
      yearsExp: '2+',
      yearsExpLabel: 'anos de exp',
      projects: '10+',
      projectsLabel: 'projetos',
      focus: '100%',
      focusLabel: 'foco em frontend',
    },
    experience: {
      label: '// experiência',
      title: 'Experiência',
      items: [
        { period: '2024 - 2026', role: 'Suporte Técnico', company: 'NET RUBI FIBRA', description: 'Diagnóstico avançado de redes e atendimento técnico especializado, traduzindo problemas complexos em soluções acessíveis para os usuários finais.' },
        { period: '2022 - 2024', role: 'Suporte Técnico', company: 'RELOPONTO VOTUPONTO', description: 'Suporte e treinamento corporativo em softwares de gestão, mediando conflitos técnicos e otimizando a experiência do usuário com o sistema.' }
      ]
    },
    stack: {
      label: '// stack',
      title: 'Tecnologias',
    },
    projects: {
      label: '// projetos',
      title: 'Projetos em Destaque',
      viewAll: 'Ver Todos os Projetos',
      imgPlaceholder: '[ ESPAÇO PARA IMAGEM ]',
      items: [
        { title: 'WEAVE', tags: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'AWS'], description: 'Sistema web completo desenvolvido como Trabalho de Conclusão de Curso.', longDescription: 'O WEAVE é uma plataforma desenvolvida do zero como meu TCC. A arquitetura foi pensada para resolver problemas complexos com uma interface limpa e intuitiva, unindo o melhor da engenharia de software com design de ponta.' },
        { title: 'OPENBUS', tags: ['React Native', 'Node.js'], description: 'App de extensão universitária focado em mobilidade inteligente.', longDescription: 'O OPENBUS é um aplicativo mobile que traz mobilidade inteligente para os estudantes do IFSP. Ele permite o rastreamento de rotas e horários de ônibus em tempo real, facilitando o transporte público universitário na palma da mão.' },
        { title: 'BARÃO SUPLEMENTOS', tags: ['HTML', 'CSS', 'JavaScript'], description: 'E-commerce de alta performance, com foco em conversão.', longDescription: 'Landing page e catálogo desenvolvidos com foco total em usabilidade. Uma plataforma de vendas moderna, construída apenas com HTML, CSS e JavaScript vanilla, garantindo alta performance e otimização para motores de busca (SEO).' }
      ],
      viewProject: 'Ver Projeto',
      moreComingSoon: 'Mais projetos em breve...',
      viewMore: 'Ver mais',
    },
    certifications: {
      title: 'Formação Acadêmica.',
    },
    quote: {
      text: 'O design não é apenas como se parece e como se sente. O design é como funciona.',
      author: 'Steve Jobs',
    },
    contactSection: {
      titlePart1: 'Vamos construir algo',
      titlePart2: 'juntos.',
      description: 'Estou aberto a novas oportunidades. Se você tem um projeto em mente, uma vaga na sua equipe, ou apenas quer dar um oi, minha caixa de entrada está sempre aberta.',
      btnEmail: 'Me mande um E-mail',
      btnWhatsapp: 'Fale no WhatsApp'
    },
    footer: {
      slogan: 'Transformando linhas de código em experiências digitais memoráveis.',
      cta: 'Vamos trabalhar',
      ctaHighlight: 'juntos',
      ctaDescription: 'Estou sempre aberto a discutir projetos de design de produtos, parcerias e oportunidades de carreira.',
      copyright: '© 2024 Breno. Todos os direitos reservados.',
      builtWith: 'Feito com ☕ e código',
    }
  },
  'en': {
    nav: { home: 'Home', about: 'About', experience: 'Experience', certifications: 'Certifications', projects: 'Projects', contact: 'Contact' },
    hero: { title: 'BRENO', subtitle: 'Frontend Developer', description: 'Uniting analytical thinking with minimalist aesthetics. Translating system complexity into clean, invisible, and unforgettable interfaces.' },
    loading: { name: '~/breno' },
    about: { label: '// about', title: 'About Me', bio: 'I am a frontend developer passionate about clean code and minimal design. I build modern interfaces that deliver the best user experience.', bio2: 'My main focus is creating web applications with high performance and accessibility, combining the best of technology and design to solve complex problems elegantly.', yearsExp: '2+', yearsExpLabel: 'years exp', projects: '10+', projectsLabel: 'projects', focus: '100%', focusLabel: 'frontend focus' },
    experience: {
      label: '// experience', title: 'Experience',
      items: [
        { period: '2024 - 2026', role: 'Technical Support', company: 'NET RUBI FIBRA', description: 'Advanced network diagnostics and specialized technical support, translating complex problems into accessible solutions for end users.' },
        { period: '2022 - 2024', role: 'Technical Support', company: 'RELOPONTO VOTUPONTO', description: 'Corporate support and training for management software, mediating technical conflicts and optimizing user experience.' }
      ]
    },
    stack: { label: '// stack', title: 'Tech Stack' },
    projects: { 
      label: '// projects', 
      title: 'Featured Projects', 
      viewAll: 'View All Projects',
      imgPlaceholder: '[ IMG PLACEHOLDER ]',
      items: [
        { title: 'WEAVE', tags: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'AWS'], description: 'Full-stack web system built as a final graduation project.', longDescription: 'WEAVE is a platform built from scratch as my final university project. The architecture was designed to solve complex problems with a clean and intuitive interface, combining software engineering with cutting-edge design.' },
        { title: 'OPENBUS', tags: ['React Native', 'Node.js'], description: 'University extension app focused on smart mobility.', longDescription: 'OPENBUS is a mobile app that brings smart mobility to students. It enables real-time tracking of bus routes and schedules, making university public transit accessible right from their pockets.' },
        { title: 'BARÃO SUPLEMENTOS', tags: ['HTML', 'CSS', 'JavaScript'], description: 'High-performance e-commerce focused on conversion rates.', longDescription: 'Landing page and product catalog built with a strong focus on usability. A modern sales platform, built with vanilla HTML, CSS, and JavaScript, ensuring high performance and Search Engine Optimization (SEO).' }
      ], 
      viewProject: 'View Project', 
      moreComingSoon: 'More projects coming soon...', 
      viewMore: 'View more' 
    },
    certifications: {
      title: 'Education.',
    },
    quote: { text: 'Design is not just what it looks like and feels like. Design is how it works.', author: 'Steve Jobs' },
    contactSection: {
      titlePart1: 'Let\'s build something',
      titlePart2: 'together.',
      description: 'I am currently open to new opportunities. Whether you have a project to discuss, a team looking for a developer, or just want to say hi, my inbox is always open.',
      btnEmail: 'Send me an Email',
      btnWhatsapp: 'WhatsApp'
    },
    footer: { 
      slogan: 'Transforming lines of code into memorable digital experiences.',
      cta: 'Let\'s work', 
      ctaHighlight: 'together', ctaDescription: 'I am always open to discussing product design projects, partnerships, and career opportunities.', copyright: '© 2024 Breno. All rights reserved.', builtWith: 'Built with ☕ and code' }
  },
  'es': {
    nav: { home: 'Inicio', about: 'Sobre', experience: 'Experiencia', certifications: 'Certificaciones', projects: 'Proyectos', contact: 'Contacto' },
    hero: { title: 'BRENO', subtitle: 'Desarrollador Frontend', description: 'Uniendo el pensamiento analítico con la estética minimalista. Traduciendo la complejidad del sistema en interfaces limpias, invisibles e inolvidables.' },
    loading: { name: '~/breno' },
    about: { label: '// sobre', title: 'Sobre Mí', bio: 'Soy un desarrollador frontend apasionado por el código limpio y el diseño minimalista. Construyo interfaces modernas que ofrecen la mejor experiencia de usuario.', bio2: 'Mi enfoque principal es crear aplicaciones web con alto rendimiento y accesibilidad, combinando lo mejor de la tecnología y el diseño para resolver problemas complejos de manera elegante.', yearsExp: '2+', yearsExpLabel: 'años exp', projects: '10+', projectsLabel: 'proyectos', focus: '100%', focusLabel: 'foco frontend' },
    experience: {
      label: '// experiencia', title: 'Experiencia',
      items: [
        { period: '2024 - 2026', role: 'Soporte Técnico', company: 'NET RUBI FIBRA', description: 'Diagnóstico avanzado de redes y soporte técnico especializado, traduciendo problemas complejos en soluciones accesibles para los usuarios finales.' },
        { period: '2022 - 2024', role: 'Soporte Técnico', company: 'RELOPONTO VOTUPONTO', description: 'Soporte y capacitación corporativa en software de gestión, mediando conflictos técnicos y optimizando la experiencia del usuario.' }
      ]
    },
    stack: { label: '// stack', title: 'Tecnologías' },
    projects: { 
      label: '// proyectos', 
      title: 'Proyectos Destacados', 
      viewAll: 'Ver Todos los Proyectos',
      imgPlaceholder: '[ IMAGEN ]',
      items: [
        { title: 'WEAVE', tags: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'AWS'], description: 'Sistema web completo desarrollado como proyecto final de carrera.', longDescription: 'WEAVE es una plataforma construida desde cero como mi proyecto de grado. La arquitectura fue diseñada para resolver problemas complejos con una interfaz limpia e intuitiva, combinando ingeniería de software con diseño moderno.' },
        { title: 'OPENBUS', tags: ['React Native', 'Node.js'], description: 'App de extensión universitaria enfocada en movilidad inteligente.', longDescription: 'OPENBUS es una aplicación móvil que brinda movilidad inteligente a los estudiantes. Permite el seguimiento en tiempo real de rutas y horarios de autobuses, facilitando el transporte público universitario en la palma de la mano.' },
        { title: 'BARÃO SUPLEMENTOS', tags: ['HTML', 'CSS', 'JavaScript'], description: 'E-commerce de alto rendimiento, enfocado en la conversión.', longDescription: 'Página de aterrizaje y catálogo de productos desarrollados con enfoque total en la usabilidad. Una plataforma de ventas moderna, construida con HTML, CSS y JavaScript vanilla, garantizando alto rendimiento y optimización para motores de búsqueda (SEO).' }
      ], 
      viewProject: 'Ver Proyecto', 
      moreComingSoon: 'Más proyectos próximamente...', 
      viewMore: 'Ver más' 
    },
    certifications: {
      title: 'Formación Académica.',
    },
    quote: { text: 'El diseño no es solo cómo se ve y se siente. El diseño es cómo funciona.', author: 'Steve Jobs' },
    contactSection: {
      titlePart1: 'Vamos a construir algo',
      titlePart2: 'juntos.',
      description: 'Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas un proyecto que discutir, un equipo buscando un desarrollador, o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.',
      btnEmail: 'Envíame un Correo',
      btnWhatsapp: 'WhatsApp'
    },
    footer: { 
      slogan: 'Transformando líneas de código en experiencias digitales memorables.',
      cta: 'Trabajemos', 
      ctaHighlight: 'juntos', ctaDescription: 'Siempre estoy abierto a discutir proyectos de diseño de productos, asociaciones y oportunidades profesionales.', copyright: '© 2024 Breno. Todos los derechos reservados.', builtWith: 'Hecho con ☕ y código' }
  },
} as const;
