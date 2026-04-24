/* Données des réalisations — partagées entre les pages fiches (éditer ici). */
(function (global) {
  "use strict";

  global.PROJECTS = {
    ateau: {
      summary:
        "Refonte complète du site et des contenus pour Ateau : charte graphique, logo, site et signatures e-mail.",
      title: "Ateau",
      meta: "Refonte site & identité",
      image: "../img/ateau-home.png",
      url: "https://ateau.fr/",
      gallery: [
        {
          src: "https://picsum.photos/seed/ateau-g1/720/540",
          alt: "Charte et univers graphique",
        },
        {
          src: "https://picsum.photos/seed/ateau-g2/720/540",
          alt: "Pages clés du nouveau site",
        },
        {
          src: "https://picsum.photos/seed/ateau-g3/720/540",
          alt: "Déclinaisons et cohérence visuelle",
        },
        {
          src: "https://picsum.photos/seed/ateau-g4/720/540",
          alt: "Signatures mail et supports",
        },
      ],
      body: [
        "Ateau est une SCOP qui conçoit et met en œuvre des solutions pour l’eau et les réseaux : assainissement, eaux pluviales, eau potable et milieu naturel. L’équipe travaille avec les bureaux d’études, gestionnaires de réseaux et professionnels du secteur, en France et à l’international, autour d’une mission claire — protéger l’eau et l’environnement pour les générations futures.",
        "Le site web n’avait pas été refondu depuis des décennies — il traînait avec lui une logique d’avant-Internet, à l’époque où le Minitel était encore l’ancêtre des écrans. L’enjeu : une refonte totale et un vrai travail sur les contenus, pour que l’offre et l’expertise d’Ateau soient claires, crédibles et alignées sur les usages d’aujourd’hui.",
        "La refonte couvre l’identité visuelle et le site : une base graphique cohérente, des contenus restructurés, et des signaux de confiance adaptés aux publics techniques et institutionnels.",
      ],
      livrables: [
        "Charte graphique (couleurs, typographies, règles d’usage)",
        "Logo et déclinaisons",
        "Site internet",
        "Signatures e-mail",
      ],
    },
    mexiiico: {
      summary:
        "Refonte du site WordPress de Mexiiico et stratégie de communication pour le wording des pages.",
      title: "Mexiiico",
      meta: "Refonte WordPress & wording",
      image: "../img/mexiiico.homepage.png",
      url: "https://mexiiico.com/",
      gallery: [
        {
          src: "https://picsum.photos/seed/mx-ui/720/540",
          alt: "Aperçu de la refonte : structure et parcours",
        },
        {
          src: "https://picsum.photos/seed/mx-page/720/540",
          alt: "Pages clés et hiérarchie de l’information",
        },
        {
          src: "https://picsum.photos/seed/mx-mob/720/540",
          alt: "Comportement sur mobile",
        },
      ],
      body: [
        "Mexiiico est une agence de communication basée à Grenoble, orientée innovation et accompagnement des startups.",
        "Le site existant nécessitait une refonte : la stratégie de communication et le wording des pages ont été repensés pour donner un discours public clair, aligné avec le positionnement de l’agence.",
      ],
      livrables: [
        "Refonte de site web sur WordPress",
        "Stratégie de communication pour le wording du site",
      ],
    },
    "spontanez-vous": {
      summary:
        "Site WordPress pour Spontanez-vous : une présence en ligne concrète et un travail sur le wording, avec signatures e-mail.",
      title: "Spontanez-vous",
      meta: "WordPress & présence web",
      image: "../img/spontanezvous.png",
      url: "https://spontanez-vous.fr/",
      gallery: [
        {
          src: "https://picsum.photos/seed/sp-hero/720/540",
          alt: "Accueil et message principal",
        },
        {
          src: "https://picsum.photos/seed/sp-pages/720/540",
          alt: "Parcours et contenus pédagogiques",
        },
        {
          src: "https://picsum.photos/seed/sp-mob/720/540",
          alt: "Navigation mobile",
        },
      ],
      body: [
        "Spontanez-vous propose des formations à la prise de parole en public, avec un accompagnement tourné vers l’assurance et l’authenticité sur scène ou en visio.",
        "L’objectif était d’exister clairement sur le web : structurer l’offre, les parcours et les preuves, avec un wording adapté à la cible.",
      ],
      livrables: [
        "Site sur WordPress",
        "Signatures e-mail",
      ],
    },
    aldes: {
      summary:
        "Aldes : modernisation de la page d’accueil pour le centenaire, puis accompagnement sur l’évolution du site (pages et modules).",
      title: "Aldes",
      meta: "Homepage & site vitrine",
      image: "../img/aldes-homepage.png",
      url: "https://www.aldes.fr/",
      gallery: [
        {
          src: "https://picsum.photos/seed/ald-hero/720/540",
          alt: "Page d’accueil : hiérarchie et ton visuel",
        },
        {
          src: "https://picsum.photos/seed/ald-mod/720/540",
          alt: "Modules et noeuds de contenu",
        },
        {
          src: "https://picsum.photos/seed/ald-page/720/540",
          alt: "Déclinaison sur d’autres pages",
        },
      ],
      body: [
        "Aldes conçoit des solutions pour la qualité d’air intérieur, le confort thermique et la protection incendie dans le bâtiment : ventilation, pompes à chaleur, réseaux, formation et services associés, au service des professionnels et des particuliers.",
        "Le premier jalon a été de moderniser la home page à l’occasion des 100 ans de l’entreprise, pour afficher clairement l’expertise et l’ancrage. Ensuite, l’intervention s’est poursuivie de façon ponctuelle : nouvelles pages et blocs, modules à intégrer, dans la continuité de la base existante.",
      ],
      livrables: [
        "Homepage",
        "Autres pages (nouveaux contenus, modules sur mesure au fil des besoins)",
      ],
    },
  };
})(typeof window !== "undefined" ? window : this);
