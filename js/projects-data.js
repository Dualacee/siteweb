/* Données des réalisations — partagées entre les pages fiches (éditer ici). */
(function (global) {
  "use strict";

  global.PROJECTS = {
    "maison-verdier": {
      summary:
        "Vitrine Webflow et identité : direction artistique, CMS produits & journal, livrables et finitions détaillés.",
      title: "Maison Verdier",
      meta: "Webflow & identité",
      image: "https://picsum.photos/seed/verdier2/960/600",
      url: "https://example.com/maison-verdier",
      gallery: [
        {
          src: "https://picsum.photos/seed/vd-ui/720/540",
          alt: "Planche UI : typographies, couleurs et boutons",
        },
        {
          src: "https://picsum.photos/seed/vd-cms/720/540",
          alt: "Structure des collections Webflow et champs éditoriaux",
        },
        {
          src: "https://picsum.photos/seed/vd-mobile/720/540",
          alt: "Version mobile : navigation et fiches produit",
        },
        {
          src: "https://picsum.photos/seed/vd-print/720/540",
          alt: "Déclinaison papier et réseaux à partir de la charte",
        },
      ],
      body: [
        "Maison Verdier est une marque fictive dans cet exemple : vitrine premium pour une maison qui met en avant des pièces artisanales, des matières brutes et un ancrage local fort.",
        "Le besoin était double : une identité reconnaissable (couleurs, typographies, ton visuel) et un site simple à tenir au quotidien sans équipe technique.",
        "Nous avons posé une structure de pages claire (accueil, univers, collections, journal, contact), puis intégré le tout dans Webflow avec un CMS adapté aux fiches produit et aux articles.",
        "Le résultat est volontairement calme et éditorial : peu d’effets, beaucoup d’images plein cadre, des textes aérés et des parcours de lecture linéaires.",
      ],
      livrables: [
        "Atelier de cadrage (objectifs, publics, contenus, arborescence)",
        "Direction artistique : palette, styles de texte, règles d’usage du logo",
        "Logo principal + versions monochrome / fond sombre (fichiers vectoriels)",
        "Maquettes Figma desktop et mobile pour les modèles de page livrés",
        "Intégration Webflow responsive (points de rupture mobile, tablette, desktop)",
        "Collections CMS : produits, catégories, journal, blocs réutilisables (CTA, citations, mise en avant)",
        "Formulaire de contact relié au flux mail existant + page de remerciement",
        "Réglages SEO de base (titres, descriptions, partage social, sitemap)",
        "Optimisation des médias (formats, dimensions, lazy loading sur les galeries)",
        "Session de prise en main : édition des contenus, duplication de pages, bonnes pratiques",
        "Document récapitulatif : structure du site, accès, checklist post-lancement",
      ],
      ajustements: [
        "Réduction du nombre de blocs sur l’accueil après retour client : message plus direct au-dessus de la ligne de flottaison",
        "Harmonisation des hauteurs de cartes produit et alignement des prix",
        "Ajustement des tailles de titre sur très petits écrans pour éviter les retours de ligne disgracieux",
        "Réécriture courte des micro-textes du menu et du pied de page",
        "Calage fin des espacements entre sections pour un rythme visuel plus régulier",
        "Ajout d’un encart « fabrication » réutilisable sur plusieurs fiches produit",
        "Contraste des boutons secondaires revu pour l’accessibilité sur fonds clairs",
        "Mise en place d’une redirection propre depuis les anciennes URLs importantes",
      ],
    },
    "atelier-rivage": {
      summary:
        "Refonte institutionnelle : arborescence, galerie filtrable, gabarits Webflow et formation éditoriale.",
      title: "Atelier Rivage",
      meta: "Refonte institutionnelle",
      image: "https://picsum.photos/seed/rivage2/960/600",
      url: "https://example.com/atelier-rivage",
      gallery: [
        {
          src: "https://picsum.photos/seed/rv-sitemap/720/540",
          alt: "Arborescence et fil d’Ariane sur la nouvelle architecture",
        },
        {
          src: "https://picsum.photos/seed/rv-gallery/720/540",
          alt: "Galerie de réalisations avec filtres par typologie",
        },
        {
          src: "https://picsum.photos/seed/rv-contact/720/540",
          alt: "Parcours prise de rendez-vous et carte d’implantation",
        },
      ],
      body: [
        "Atelier Rivage illustre ici une refonte institutionnelle : site existant chargé, hiérarchie peu lisible, et objectif de mieux convertir les visites en demandes de contact ou de rendez-vous.",
        "Le travail a commencé par une réorganisation de l’information : regroupement des contenus, suppression des doublons, définition de pages piliers et de gabarits réutilisables.",
        "La partie « portfolio » a été repensée en galerie filtrable avec fiches projet homogènes, afin de rendre les réalisations comparables et plus faciles à parcourir sur mobile.",
        "Le ton visuel reste institutionnel mais plus chaleureux : blocs plus compacts, typographie plus lisible, et une navigation qui limite les allers-retours inutiles.",
      ],
      livrables: [
        "Inventaire des contenus et proposition d’arborescence validée",
        "Wireframes des principaux templates (accueil, liste, fiche, contact)",
        "UI kit : grilles, titres, listes, encadrés, citations, composants de formulaire",
        "Intégration des gabarits dans Webflow + système de styles global",
        "Galerie avec filtres (catégories) et pages projet détaillées",
        "Bloc « équipe » et module actualités (liste + article)",
        "Intégration des contenus fournis (reprise des textes existants, reformatage)",
        "Mise en place des métadonnées et balises Open Graph par template",
        "Tests sur navigateurs courants et corrections de micro-bugs responsive",
        "Formation courte pour publier un projet ou une actualité",
      ],
      ajustements: [
        "Réduction du nombre d’entrées dans le menu principal (regroupement sous « Expertises »)",
        "Réordonnancement des sections de l’accueil pour placer le CTA principal plus haut",
        "Uniformisation des légendes et crédits photo dans la galerie",
        "Ajustement des filtres : libellés plus courts sur mobile",
        "Ajout d’un bandeau d’information temporaire (événement / fermeture) piloté depuis le CMS",
        "Affinage des transitions au scroll pour rester discret sur machines modestes",
        "Corrections d’alignement sur tablette en mode paysage",
      ],
    },
    "studio-calame": {
      summary:
        "Landing B2B : structure campagne, preuves, FAQ, formulaire et tracking — livrables et ajustements listés.",
      title: "Studio Calame",
      meta: "Landing B2B",
      image: "https://picsum.photos/seed/calame2/960/600",
      url: "https://example.com/studio-calame",
      gallery: [
        {
          src: "https://picsum.photos/seed/cl-hero/720/540",
          alt: "Hero et proposition de valeur au-dessus de la ligne de flottaison",
        },
        {
          src: "https://picsum.photos/seed/cl-proof/720/540",
          alt: "Bloc preuves : logos clients et chiffres clés",
        },
        {
          src: "https://picsum.photos/seed/cl-form/720/540",
          alt: "Formulaire de contact et états de validation",
        },
      ],
      body: [
        "Studio Calame sert d’exemple à une landing unique orientée conversion : campagnes LinkedIn / e-mail, besoin de message clair, preuves rapides, puis prise de contact ou demande de démo.",
        "La page est découpée en sections courtes : problème, approche, offre, preuves, FAQ synthétique, puis CTA final. Chaque section est pensée pour être citée ou liée depuis une campagne.",
        "L’intégration privilégie la performance : peu de scripts, images dimensionnées, textes prêts à être remplacés sans casser la mise en page.",
        "Les ancres internes permettent d’atterrir directement sur la bonne section depuis un mail ou une publicité (ex. #offre, #faq).",
      ],
      livrables: [
        "Brief campagne + définition des objectifs de conversion (formulaire, agenda, ou les deux)",
        "Structure de page et textes d’accompagnement (titres, sous-titres, listes)",
        "Design de la landing sous Figma (desktop + mobile)",
        "Intégration Webflow (ou équivalent) avec styles réutilisables",
        "Formulaire connecté au flux mail / outil CRM selon votre stack",
        "FAQ repliable ou ancrée pour réduire les frictions avant contact",
        "Tracking des clics et des envois (paramètres UTM documentés dans un petit guide)",
        "Jeux d’états pour le formulaire : succès, erreur, champs obligatoires",
        "Relecture typographique et cohérence des CTA (libellés, hiérarchie)",
        "Checklist post-publication : SEO technique minimal, partage social, test mobile",
      ],
      ajustements: [
        "Raccourcissement du hero après test A/B interne : un seul CTA principal mis en avant",
        "Ajout d’une ligne de précision légale sous le formulaire (RGPD / durée de réponse)",
        "Réorganisation des logos « clients » en grille plus dense sur mobile",
        "Ajustement des contrastes sur le bouton fantôme (outline) en mode sombre du navigateur",
        "Compression supplémentaire des illustrations pour le score Lighthouse",
        "Modification des ancres pour correspondre aux liens utilisés dans la première vague d’e-mails",
      ],
    },
  };
})(typeof window !== "undefined" ? window : this);
