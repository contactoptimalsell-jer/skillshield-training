/**
 * Contenu détaillé des formations
 * Structure pour stocker le contenu complet des formations
 */

export interface FormationContent {
  formationId: string
  introduction?: string
  parts: FormationPart[]
  conclusion?: string
}

export interface FormationPart {
  title: string
  sections: FormationSection[]
}

export interface FormationSection {
  title: string
  content: string[]
  subsections?: FormationSubsection[]
}

export interface FormationSubsection {
  title: string
  content: string[]
  items?: string[]
}

// Contenu de la formation "Formateur / Enseignant face à l'IA"
export const formateurIAContent: FormationContent = {
  formationId: 'formation_0',
  introduction: `Depuis toujours, le métier de formateur repose sur un pacte implicite :

« Je sais quelque chose que tu ne sais pas, et je vais te le transmettre. »

Ce pacte est rompu.

Pas affaibli. Pas remis en question. Rompu.

En janvier 2025, n'importe quel apprenant peut :
• obtenir une explication claire en quelques secondes,
• demander une reformulation adaptée à son niveau,
• générer des exemples personnalisés à son métier,
• créer des exercices corrigés,
• réviser seul, à son rythme, sans pression sociale.

Cela ne signifie pas que le formateur disparaît.
Cela signifie que le cœur du métier change de place.

👉 Cette formation n'explique pas "comment utiliser l'IA".
👉 Elle explique comment rester formateur dans un monde où l'IA existe.`,
  parts: [
    {
      title: 'PARTIE 1 – COMPRENDRE LA DISRUPTION : CE QUI DISPARAÎT, CE QUI SE TRANSFORME',
      sections: [
        {
          title: '1.1 Le mythe à déconstruire : « l\'IA va remplacer les formateurs »',
          content: [
            'C\'est faux. Mais c\'est une mauvaise nouvelle quand même.',
            'Pourquoi ? Parce que ce qui disparaît, ce n\'est pas le titre "formateur", c\'est une manière d\'exercer le métier.',
            'Disparaissent progressivement :',
            '• le formateur récitant,',
            '• le formateur "support PowerPoint",',
            '• le formateur qui délivre un savoir sans transformation,',
            '• le formateur dont la valeur repose uniquement sur l\'information.',
            '👉 Ces profils ne disparaissent pas brutalement.',
            '👉 Ils deviennent invisibles, moins bien payés, moins sollicités.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà faire mieux qu\'un formateur moyen',
          content: [
            'Soyons précis, sans ego.',
            'L\'IA excelle sur :',
            '• l\'explication conceptuelle,',
            '• la reformulation infinie,',
            '• l\'adaptation du vocabulaire,',
            '• la synthèse,',
            '• la création d\'exercices standards,',
            '• la répétition sans fatigue,',
            '• la disponibilité permanente.',
            'Si ton métier repose principalement là-dessus, tu es déjà concurrencé, même si tu ne le ressens pas encore.'
          ]
        },
        {
          title: '1.3 Ce que l\'IA ne sait pas faire (et pourquoi c\'est central)',
          content: [
            'L\'IA ne sait pas :',
            '• créer un engagement émotionnel réel,',
            '• lire un non-dit dans une salle,',
            '• sentir une résistance intérieure,',
            '• gérer un découragement,',
            '• créer une dynamique collective,',
            '• confronter avec justesse,',
            '• accompagner un changement identitaire.',
            '👉 L\'apprentissage n\'est pas qu\'intellectuel.',
            '👉 C\'est un processus psychologique, émotionnel et social.',
            'Et c\'est là que le métier se reconstruit.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER DE FORMATEUR EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental : du savoir à l\'apprentissage',
          content: [
            'Avant : « Je transmets un contenu. »',
            'Après : « Je conçois une expérience d\'apprentissage qui transforme. »',
            'Ce n\'est pas un changement cosmétique.',
            'C\'est un changement de posture, de valeur et de responsabilité.'
          ]
        },
        {
          title: '2.2 Les 6 rôles du formateur augmenté par l\'IA',
          content: [
            '1. Architecte pédagogique - Tu structures des parcours, pas des slides.',
            '2. Designer d\'expérience d\'apprentissage - Tu crées des situations qui provoquent la compréhension.',
            '3. Facilitateur humain - Tu fais émerger l\'intelligence du groupe.',
            '4. Coach de compétences - Tu accompagnes le passage à l\'action réelle.',
            '5. Gardien du sens - Tu hiérarchises, contextualises, donnes une vision.',
            '6. Médiateur homme–IA - Tu aides à utiliser l\'IA sans perdre l\'autonomie intellectuelle.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU FORMATEUR (OUTILS & MÉTHODES)',
      sections: [
        {
          title: '3.1 L\'IA pour la conception pédagogique (avant la formation)',
          content: [
            'Objectif :',
            '👉 Réduire drastiquement le temps de conception',
            '👉 Augmenter la qualité structurelle',
            '',
            'Outils clés :',
            '• ChatGPT / GPT-4.x → Structuration de programmes, objectifs pédagogiques, scénarios',
            '• Claude → Analyse de textes longs, reformulation pédagogique',
            '• Notion + IA intégrée → Organisation de contenus, bases pédagogiques vivantes',
            '',
            'Cas d\'usage concret :',
            'Tu dois créer une formation de 3 jours.',
            'Avant : page blanche, stress, heures de structuration.',
            'Avec IA : tu dialogues sur les objectifs, tu testes plusieurs architectures, tu ajustes avec ton expertise.',
            '👉 Tu restes décideur, l\'IA est un copilote.'
          ]
        },
        {
          title: '3.2 L\'IA pour créer des supports pédagogiques intelligents',
          content: [
            'Supports possibles :',
            '• supports écrits,',
            '• scripts vidéo,',
            '• fiches mémo,',
            '• études de cas,',
            '• mises en situation,',
            '• quiz évolutifs.',
            '',
            'Outils utiles :',
            '• Canva + IA → Supports visuels clairs et rapides',
            '• Gamma → Slides structurées à partir d\'idées',
            '• Synthesia → Vidéos pédagogiques simples (attention à l\'usage)',
            '',
            '👉 Règle d\'or : le fond vient de toi, la forme est assistée.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – REPENSER LE TEMPS DE FORMATION',
      sections: [
        {
          title: '4.1 Nouveau découpage pédagogique',
          content: [
            'Avant la formation :',
            '• notions de base,',
            '• définitions,',
            '• contexte,',
            '→ IA comme tuteur préparatoire',
            '',
            'Pendant la formation :',
            '• échanges,',
            '• cas réels,',
            '• confrontation,',
            '• pratique,',
            '→ 100 % humain',
            '',
            'Après la formation :',
            '• révision,',
            '• entraînement,',
            '• auto-évaluation,',
            '→ IA comme compagnon'
          ]
        },
        {
          title: '4.2 Cas concret détaillé – Formation professionnelle',
          content: [
            'Avant IA :',
            '• 80 % de théorie',
            '• 20 % de pratique',
            '• peu de suivi',
            '',
            'Après IA :',
            '• théorie préparée en amont,',
            '• présentiel = pratique intensive,',
            '• suivi post-formation assisté par IA',
            '',
            '👉 Résultat :',
            '• meilleure mémorisation,',
            '• plus d\'engagement,',
            '• plus d\'impact réel.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – FORMER LES APPRENANTS À L\'USAGE DE L\'IA',
      sections: [
        {
          title: '5.1 L\'IA comme compétence transversale',
          content: [
            'Ne pas former à l\'IA, aujourd\'hui, c\'est :',
            '• laisser les apprenants se débrouiller seuls,',
            '• créer des usages superficiels,',
            '• encourager la dépendance.',
            '',
            'Le rôle du formateur :',
            '👉 apprendre à apprendre avec l\'IA.'
          ]
        },
        {
          title: '5.2 Cas d\'usage apprenant',
          content: [
            'Un apprenant peut :',
            '• simuler une situation professionnelle,',
            '• répéter un entretien,',
            '• tester des décisions,',
            '• s\'auto-évaluer.',
            '',
            'Mais seulement s\'il a un cadre méthodologique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ÉTHIQUE, POSTURE ET RESPONSABILITÉ',
      sections: [
        {
          title: '6.1 Ce qu\'un formateur doit absolument poser',
          content: [
            '• Ce qui est autorisé / interdit',
            '• Quand utiliser l\'IA',
            '• Quand ne pas l\'utiliser',
            '• Comment vérifier une réponse',
            '• Comment garder son esprit critique',
            '',
            '👉 Former sans cadre = former à la dépendance.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ERREURS GRAVES À ÉVITER',
      sections: [
        {
          title: 'Les pièges à éviter',
          content: [
            '• déléguer toute la réflexion,',
            '• croire que l\'outil fait la pédagogie,',
            '• supprimer l\'humain,',
            '• rester flou sur les objectifs,',
            '• confondre efficacité et profondeur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – LE FORMATEUR À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui va disparaître',
          content: [
            '• formations descendantes,',
            '• contenus figés,',
            '• formateurs "mono-savoir".'
          ]
        },
        {
          title: 'Ce qui va exploser',
          content: [
            '• accompagnement humain,',
            '• parcours personnalisés,',
            '• coaching de compétences,',
            '• facilitation collective,',
            '• hybridation homme–IA.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST OPÉRATIONNELLE',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• J\'ai redéfini mon rôle',
            '• J\'utilise l\'IA pour concevoir, pas pour me remplacer',
            '• Je centre mes formations sur la pratique',
            '• Je forme à l\'esprit critique',
            '• Je garde une forte présence humaine',
            '• Je continue à apprendre'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA ne signe pas la mort du formateur.
Elle signe la fin du formateur passif.

Le formateur de demain :
• parle moins,
• fait plus pratiquer,
• accompagne mieux,
• structure davantage,
• assume une responsabilité humaine forte.`
}

// Contenu de la formation "Journaliste / Rédacteur face à l'IA"
export const journalisteIAContent: FormationContent = {
  formationId: 'formation_journaliste',
  introduction: `S'il y a un métier pour lequel l'arrivée de l'IA n'a pas été progressive mais violente, c'est bien celui-ci.

En quelques mois, le journaliste et le rédacteur ont vu apparaître :
• des outils capables d'écrire un article en quelques secondes,
• des résumés instantanés d'événements complexes,
• des synthèses de dépêches,
• des reformulations stylistiques infinies,
• des traductions quasi immédiates.

👉 Beaucoup ont cru que c'était "un outil de plus".
👉 En réalité, c'est une remise en cause directe du cœur du métier.

Cette formation part d'un postulat simple :

L'IA peut produire du texte.
Mais elle ne peut pas produire de la confiance.

Et le journalisme, fondamentalement, c'est un métier de confiance.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'EFFONDRE (ET IL FAUT LE DIRE CLAIREMENT)',
      sections: [
        {
          title: '1.1 Le mythe du journaliste "protégé par la plume"',
          content: [
            'Pendant longtemps, on a cru que :',
            '• le style,',
            '• la qualité d\'écriture,',
            '• la capacité de synthèse',
            'étaient des remparts naturels.',
            '',
            'Ce n\'est plus vrai.',
            '',
            'En janvier 2025, une IA peut :',
            '• écrire correctement,',
            '• adopter un ton,',
            '• respecter une ligne éditoriale,',
            '• produire rapidement,',
            '• optimiser pour le web.',
            '',
            '👉 La compétence "écrire correctement" n\'est plus différenciante.'
          ]
        },
        {
          title: '1.2 Les tâches journalistiques déjà automatisables',
          content: [
            'Soyons très concrets.',
            '',
            'Fortement automatisables :',
            '• comptes rendus factuels,',
            '• articles de synthèse,',
            '• dépêches,',
            '• reformulations,',
            '• résumés d\'événements,',
            '• articles SEO informatifs,',
            '• revues de presse.',
            '',
            '👉 Tout ce qui repose sur :',
            '• des sources déjà existantes,',
            '• peu de terrain,',
            '• peu d\'analyse originale.'
          ]
        },
        {
          title: '1.3 La conséquence invisible mais réelle',
          content: [
            'Ce qui se passe réellement :',
            '• baisse des budgets rédactionnels,',
            '• augmentation des volumes demandés,',
            '• pression sur les délais,',
            '• précarisation de certains profils.',
            '',
            '👉 Le métier ne disparaît pas.',
            'Il se polarise.',
            '',
            'D\'un côté :',
            '• des producteurs de contenu automatisé.',
            '',
            'De l\'autre :',
            '• des journalistes à forte valeur ajoutée.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE JOURNALISME À L\'ÈRE DE L\'IA',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je produis un article."',
            '',
            'Après : "Je construis une information fiable, contextualisée et crédible."',
            '',
            'Le texte devient un support, pas une fin.'
          ]
        },
        {
          title: '2.2 Les 5 nouvelles valeurs cardinales du journaliste',
          content: [
            '1. La fiabilité',
            '👉 Vérifier, recouper, hiérarchiser.',
            '',
            '2. Le contexte',
            '👉 Expliquer pourquoi c\'est important.',
            '',
            '3. L\'analyse',
            '👉 Aller au-delà du fait brut.',
            '',
            '4. Le terrain',
            '👉 Ce que l\'IA ne voit pas.',
            '',
            '5. La crédibilité humaine',
            '👉 Une signature, une responsabilité.'
          ]
        },
        {
          title: '2.3 Nouveau rôle du journaliste',
          content: [
            'Le journaliste devient :',
            '• enquêteur,',
            '• analyste,',
            '• curateur d\'informations,',
            '• pédagogue,',
            '• garant du réel.',
            '',
            '👉 L\'IA écrit.',
            '👉 Le journaliste assume.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU JOURNALISTE (OUTILS & USAGES)',
      sections: [
        {
          title: '3.1 Recherche, veille et documentation',
          content: [
            'Objectif :',
            '👉 Aller plus vite sans perdre en rigueur',
            '',
            'Outils clés :',
            '• ChatGPT → Exploration de sujets, angles possibles, contextualisation',
            '• Perplexity → Recherche sourcée, citations, points de départ',
            '• Feedly + IA → Veille intelligente et hiérarchisée',
            '',
            'Cas concret :',
            'Tu couvres un sujet complexe (géopolitique, économie, climat).',
            '',
            'Avant : heures de lecture dispersée.',
            '',
            'Avec IA :',
            '• cartographie rapide du sujet,',
            '• identification des enjeux,',
            '• repérage des controverses.',
            '',
            '👉 Tu gagnes du temps sur la surface pour creuser le fond.'
          ]
        },
        {
          title: '3.2 Préparation d\'angles et de lignes éditoriales',
          content: [
            'L\'IA peut aider à :',
            '• tester plusieurs angles,',
            '• identifier ce qui a déjà été traité,',
            '• éviter les redites,',
            '• adapter un sujet à différents publics.',
            '',
            '⚠️ Mais :',
            '👉 L\'angle final est une décision humaine.'
          ]
        },
        {
          title: '3.3 Aide à la rédaction (sans abandonner la plume)',
          content: [
            'Usages pertinents :',
            '• structuration d\'un article,',
            '• reformulation de passages lourds,',
            '• clarification,',
            '• titraille (avec recul),',
            '• adaptation multi-formats.',
            '',
            'Outils utiles :',
            '• Claude → Analyse fine de textes longs',
            '• Grammarly → Clarté, fluidité, cohérence',
            '',
            '👉 L\'IA est un éditeur junior, pas un auteur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS PAR TYPE DE JOURNALISME',
      sections: [
        {
          title: '4.1 Journalisme d\'actualité',
          content: [
            'IA utilisée pour :',
            '• synthèse rapide des faits,',
            '• chronologie,',
            '• contextualisation.',
            '',
            'Humain indispensable pour :',
            '• hiérarchisation,',
            '• vérification,',
            '• mise en perspective.'
          ]
        },
        {
          title: '4.2 Journalisme d\'enquête',
          content: [
            '👉 Domaine le moins automatisable.',
            '',
            'IA utile pour :',
            '• analyser des documents volumineux,',
            '• repérer des incohérences,',
            '• croiser des données.',
            '',
            'Mais :',
            '• sources humaines,',
            '• intuition,',
            '• courage éditorial',
            'restent exclusivement humains.'
          ]
        },
        {
          title: '4.3 Journalisme spécialisé (éco, science, tech)',
          content: [
            'IA :',
            '• aide à vulgariser,',
            '• reformuler,',
            '• tester la clarté.',
            '',
            'Journaliste :',
            '• comprend réellement,',
            '• détecte le bullshit,',
            '• alerte sur les dérives.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – L\'IA ET LA CRÉDIBILITÉ : DANGER MAJEUR',
      sections: [
        {
          title: '5.1 Le risque des hallucinations',
          content: [
            'Une IA peut :',
            '• inventer des chiffres,',
            '• citer de fausses sources,',
            '• mélanger des faits.',
            '',
            '👉 Jamais de confiance aveugle.'
          ]
        },
        {
          title: '5.2 Nouvelle responsabilité éthique',
          content: [
            'Le journaliste doit :',
            '• vérifier chaque fait clé,',
            '• assumer la signature,',
            '• expliciter ses sources,',
            '• refuser l\'automatisation totale.',
            '',
            '👉 Le public ne pardonnera pas les erreurs.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – MODÈLES ÉCONOMIQUES ET POSITIONNEMENT',
      sections: [
        {
          title: '6.1 Ce qui ne marchera plus',
          content: [
            '• volume sans valeur,',
            '• articles génériques,',
            '• SEO pur sans analyse,',
            '• contenus interchangeables.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• expertise,',
            '• niche,',
            '• analyse,',
            '• newsletter éditorialisée,',
            '• formats longs,',
            '• communauté.',
            '',
            '👉 Le journaliste devient aussi éditeur de sa propre crédibilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – COMPÉTENCES À DÉVELOPPER D\'ICI 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• esprit critique avancé,',
            '• compréhension des IA,',
            '• analyse de données,',
            '• pédagogie,',
            '• positionnement éditorial,',
            '• éthique renforcée.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU JOURNALISTE AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je sais ce que l\'IA peut / ne peut pas faire',
            '• Je garde la responsabilité éditoriale',
            '• Je vérifie systématiquement',
            '• J\'apporte du contexte et du sens',
            '• Je développe une signature humaine',
            '• Je construis la confiance'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA produit du texte.
Le journaliste produit de la confiance.

Ceux qui survivront et prospéreront seront ceux qui :
• acceptent de lâcher la production brute,
• assument un rôle plus exigeant,
• deviennent des repères dans le chaos informationnel.`
}

// Contenu de la formation "Copywriter / Content Manager face à l'IA"
export const copywriterIAContent: FormationContent = {
  formationId: 'formation_copywriter',
  introduction: `Le copywriting est probablement le métier où l'illusion a été la plus forte.

Quand les IA génératives sont arrivées, beaucoup ont pensé :
• « c'est fini »
• « n'importe qui peut écrire maintenant »
• « les clients n'auront plus besoin de copywriters »

Puis est arrivée une seconde réalité, plus subtile :
• jamais il n'y a eu autant de contenu,
• jamais il n'y a eu aussi peu d'attention,
• jamais il n'a été aussi difficile de convaincre.

👉 L'IA n'a pas tué le copywriting.
Elle a détruit le copywriting moyen.

Cette formation part d'un constat brutal mais libérateur :

Le copywriting n'est pas un métier d'écriture.
C'est un métier d'impact.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'EFFONDRE DÉFINITIVEMENT',
      sections: [
        {
          title: '1.1 La fin du copywriter "texte uniquement"',
          content: [
            'Avant, un copywriter pouvait vendre :',
            '• sa capacité à écrire vite,',
            '• à produire beaucoup,',
            '• à respecter un brief.',
            '',
            'En 2025, ça n\'a presque plus aucune valeur.',
            '',
            'Pourquoi ?',
            'Parce qu\'une IA peut :',
            '• produire 50 variations d\'un texte,',
            '• adapter le ton,',
            '• respecter une structure marketing,',
            '• écrire dans un français correct,',
            '• optimiser pour le SEO.',
            '',
            '👉 La compétence "écrire un bon texte" est devenue une commodité.'
          ]
        },
        {
          title: '1.2 Les tâches copywriting déjà massivement automatisées',
          content: [
            'Soyons précis.',
            '',
            'Très fortement automatisables :',
            '• descriptions produits standards,',
            '• articles SEO informatifs,',
            '• posts réseaux sociaux génériques,',
            '• emails transactionnels simples,',
            '• landing pages basiques,',
            '• slogans sans stratégie.',
            '',
            '👉 Si ton offre repose majoritairement là-dessus, la pression sur les prix est inévitable.'
          ]
        },
        {
          title: '1.3 Le vrai danger : la dilution de la valeur',
          content: [
            'Le problème n\'est pas que l\'IA écrive mal.',
            'Le problème est qu\'elle écrit assez bien pour saturer l\'espace.',
            '',
            'Résultat :',
            '• surproduction de contenu,',
            '• uniformisation des messages,',
            '• fatigue cognitive des audiences,',
            '• chute de l\'engagement.',
            '',
            '👉 L\'attention devient la vraie monnaie.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE COPYWRITING EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'écris pour vendre."',
            '',
            'Après : "Je conçois des systèmes de persuasion."',
            '',
            'Le texte n\'est plus qu\'un vecteur parmi d\'autres.'
          ]
        },
        {
          title: '2.2 Les 7 nouvelles compétences clés du copywriter augmenté',
          content: [
            '1. Compréhension profonde des audiences',
            'Pas des "personas marketing", mais :',
            '• peurs réelles,',
            '• objections profondes,',
            '• désirs implicites,',
            '• langage naturel.',
            '',
            '2. Stratégie de message',
            '• quoi dire,',
            '• quoi ne pas dire,',
            '• dans quel ordre,',
            '• à quel moment.',
            '',
            '3. Architecture de conversion',
            '• parcours,',
            '• séquences,',
            '• frictions,',
            '• déclencheurs.',
            '',
            '4. Pensée systémique',
            '• email + landing + ads + social,',
            '• cohérence globale,',
            '• répétition intelligente.',
            '',
            '5. Analyse de performance',
            '• taux de conversion,',
            '• taux de clic,',
            '• rétention,',
            '• signaux faibles.',
            '',
            '6. Direction créative',
            '• ton,',
            '• univers,',
            '• différenciation.',
            '',
            '7. Pilotage de l\'IA',
            '',
            '👉 Le copywriter devient chef d\'orchestre, pas exécutant.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT STRATÉGIQUE DU COPYWRITER',
      sections: [
        {
          title: '3.1 Recherche client et compréhension des objections',
          content: [
            'Objectif :',
            '👉 Comprendre profondément avant d\'écrire',
            '',
            'Outils clés :',
            '• ChatGPT → Exploration d\'objections, reformulation de pain points',
            '• Perplexity → Recherche de discours clients, forums, avis, tendances',
            '• SparkToro → Compréhension des audiences, influenceurs, sources d\'attention',
            '',
            'Cas concret :',
            'Avant : intuition, quelques interviews.',
            '',
            'Avec IA :',
            '• cartographie rapide des objections,',
            '• hypothèses testables,',
            '• langage client plus précis.',
            '',
            '👉 Tu pars mieux armé, mais tu valides toujours sur le terrain.'
          ]
        },
        {
          title: '3.2 Structuration des messages et angles',
          content: [
            'L\'IA est excellente pour :',
            '• proposer des structures (AIDA, PAS, etc.),',
            '• tester plusieurs angles,',
            '• générer des variantes.',
            '',
            'Mais :',
            '👉 Elle ne sait pas choisir l\'angle qui fait vendre.',
            '',
            'Ce choix repose sur :',
            '• ton expérience,',
            '• ta compréhension du marché,',
            '• ton intuition validée par les données.'
          ]
        },
        {
          title: '3.3 Production de textes (là où beaucoup se trompent)',
          content: [
            'Bon usage de l\'IA :',
            '• premier jet,',
            '• reformulation,',
            '• variations,',
            '• tests A/B.',
            '',
            'Mauvais usage :',
            '• texte final sans retouche,',
            '• absence de voix propre,',
            '• message générique.',
            '',
            'Outils utiles :',
            '• Claude → Amélioration stylistique fine',
            '• Grammarly → Clarté, lisibilité, cohérence',
            '',
            '👉 Le copywriter devient éditeur, stratège et décideur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS ET DÉTAILLÉS',
      sections: [
        {
          title: '4.1 Landing page à forte conversion',
          content: [
            'Avant IA :',
            '• 1 version,',
            '• intuition,',
            '• peu de tests.',
            '',
            'Avec IA :',
            '• 10 structures testées,',
            '• 30 titres,',
            '• variantes d\'accroches,',
            '• tests rapides.',
            '',
            '👉 Le gain n\'est pas la vitesse.',
            '👉 Le gain est la capacité à explorer plus d\'options intelligemment.'
          ]
        },
        {
          title: '4.2 Séquences email',
          content: [
            'L\'IA peut :',
            '• proposer des structures,',
            '• varier les angles,',
            '• adapter le ton.',
            '',
            'Mais :',
            '• la stratégie de séquence,',
            '• la montée en tension,',
            '• le timing',
            'restent humains.'
          ]
        },
        {
          title: '4.3 Content marketing long format',
          content: [
            'IA :',
            '• aide à structurer,',
            '• clarifier,',
            '• reformuler.',
            '',
            'Copywriter :',
            '• apporte vision,',
            '• profondeur,',
            '• différenciation,',
            '• crédibilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – SEO, IA ET CONTENU : LA GRANDE ILLUSION',
      sections: [
        {
          title: '5.1 Ce que l\'IA a changé dans le SEO',
          content: [
            '• explosion de contenus,',
            '• baisse de la qualité moyenne,',
            '• Google privilégie :',
            '• expertise,',
            '• expérience,',
            '• crédibilité.',
            '',
            '👉 Le SEO purement mécanique est mort.'
          ]
        },
        {
          title: '5.2 Nouveau rôle du content manager',
          content: [
            'Il devient :',
            '• stratège éditorial,',
            '• gardien de la cohérence,',
            '• analyste de performance,',
            '• responsable de la valeur long terme.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – MODÈLES ÉCONOMIQUES POUR COPYWRITERS',
      sections: [
        {
          title: '6.1 Ce qui se dévalue',
          content: [
            '• facturation au mot,',
            '• volume sans impact,',
            '• contenu interchangeable.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• stratégie,',
            '• performance,',
            '• accompagnement long terme,',
            '• positionnement niche,',
            '• rémunération à la valeur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• stratégie de persuasion,',
            '• analyse comportementale,',
            '• data marketing,',
            '• pilotage IA,',
            '• créativité stratégique,',
            '• compréhension business.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU COPYWRITER AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends mon audience profondément',
            '• Je conçois des systèmes, pas des textes isolés',
            '• J\'utilise l\'IA comme accélérateur, pas comme auteur',
            '• Je mesure l\'impact réel',
            '• Je développe une signature',
            '• Je vends de la valeur, pas des mots'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA écrit.
Le copywriter fait vendre, adhérer, agir.

Ceux qui survivront seront ceux qui :
• abandonnent l'ego de l'écriture,
• embrassent la stratégie,
• deviennent indispensables dans un monde saturé de messages.`
}

// Contenu de la formation "Community Manager face à l'IA"
export const communityManagerIAContent: FormationContent = {
  formationId: 'formation_cm',
  introduction: `Pendant des années, le métier de Community Manager a été sous-estimé.

Beaucoup d'entreprises pensaient que c'était :
• poster régulièrement,
• répondre aux commentaires,
• faire un peu d'humour,
• suivre des tendances.

Puis l'IA est arrivée…
et a montré une chose très cruelle :

👉 Tout ce qui est mécanique, répétitif et superficiel peut être automatisé.

Résultat :
• posts générés en masse,
• calendriers éditoriaux automatisés,
• réponses standardisées,
• contenus "propres" mais sans âme.

Et pourtant…

👉 Jamais les marques n'ont eu autant besoin de communautés humaines réelles.

C'est là toute la contradiction — et toute l'opportunité.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'AUTOMATISE (ET CE QUI PERD DE LA VALEUR)',
      sections: [
        {
          title: '1.1 Les tâches de Community Manager déjà automatisables',
          content: [
            'Soyons très clairs.',
            '',
            'Fortement automatisables aujourd\'hui :',
            '• rédaction de posts génériques,',
            '• reformulation de captions,',
            '• hashtags,',
            '• planification de contenus,',
            '• réponses simples aux commentaires,',
            '• reporting basique.',
            '',
            'Avec des outils comme :',
            '• ChatGPT',
            '• Hootsuite',
            '• Buffer',
            '• Metricool',
            '',
            '👉 Donc oui : le CM "poste-répond-planifie" est en danger.'
          ]
        },
        {
          title: '1.2 La conséquence directe sur le marché',
          content: [
            'Ce qui se passe déjà (mais peu osent le dire) :',
            '• baisse des budgets CM juniors,',
            '• demandes de volume plus élevées,',
            '• confusion entre "outil" et "métier",',
            '• perte de reconnaissance stratégique.',
            '',
            '👉 Le métier se scinde en deux niveaux.',
            '',
            '1️⃣ Exécutants automatisables',
            '2️⃣ Stratèges communautaires augmentés'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE COMMUNITY MANAGEMENT EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'anime des réseaux sociaux."',
            '',
            'Après : "Je construis et j\'entretiens des relations à long terme entre une marque et des humains."',
            '',
            'Les réseaux sociaux ne sont plus la finalité.',
            'Ce sont des points de contact.'
          ]
        },
        {
          title: '2.2 Le vrai rôle du Community Manager (post-IA)',
          content: [
            'Le CM devient :',
            '• architecte de communauté',
            '• traducteur de la marque en langage humain',
            '• capteur de signaux faibles',
            '• gestionnaire de confiance',
            '• interface entre public et entreprise',
            '',
            '👉 Ce n\'est plus un rôle de publication.',
            '👉 C\'est un rôle relationnel et stratégique.'
          ]
        },
        {
          title: '2.3 Les 7 piliers du Community Manager augmenté',
          content: [
            '1. Compréhension profonde de la communauté',
            '2. Vision long terme (pas juste engagement court terme)',
            '3. Maîtrise des dynamiques sociales',
            '4. Capacité à créer de l\'appartenance',
            '5. Lecture émotionnelle des interactions',
            '6. Pilotage intelligent des outils IA',
            '7. Positionnement éthique clair'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU COMMUNITY MANAGER (BIEN UTILISÉE)',
      sections: [
        {
          title: '3.1 L\'IA pour comprendre la communauté (pas pour parler à sa place)',
          content: [
            'Objectif :',
            '👉 Comprendre avant de produire',
            '',
            'Outils et usages :',
            '• ChatGPT → Analyse de commentaires, synthèse d\'opinions, extraction de tendances',
            '• Brandwatch → Social listening avancé, perception de marque',
            '• Mention → Détection de signaux faibles, crises émergentes',
            '',
            'Cas concret :',
            'Tu gères une communauté de 50 000 personnes.',
            '',
            'Avant : intuition, lecture partielle des commentaires.',
            '',
            'Avec IA :',
            '• regroupement des sujets récurrents,',
            '• identification des frustrations,',
            '• compréhension du langage réel utilisé.',
            '',
            '👉 L\'IA écoute mieux que l\'humain.',
            'Mais elle ne comprend pas mieux.'
          ]
        },
        {
          title: '3.2 Création de contenus : l\'IA comme assistant, pas comme voix',
          content: [
            'Bons usages :',
            '• brainstorming d\'idées,',
            '• variations de formats,',
            '• aide à la clarté,',
            '• adaptation multi-plateformes.',
            '',
            'Mauvais usages :',
            '• posts 100 % générés,',
            '• humour artificiel,',
            '• réponses émotionnelles automatisées.',
            '',
            '👉 Une communauté sent immédiatement quand ce n\'est pas humain.'
          ]
        },
        {
          title: '3.3 Outils utiles pour la production et l\'organisation',
          content: [
            '• Canva → Visuels rapides et cohérents',
            '• Notion → Base de connaissances communautaires',
            '• Later → Planification intelligente'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS (TRÈS DÉTAILLÉS)',
      sections: [
        {
          title: '4.1 Gestion quotidienne de communauté',
          content: [
            'Avant IA :',
            '• beaucoup de temps sur l\'opérationnel,',
            '• peu de recul stratégique.',
            '',
            'Après IA :',
            '• l\'IA trie, synthétise, alerte,',
            '• le CM se concentre sur :',
            '• réponses sensibles,',
            '• animation qualitative,',
            '• relations clés.',
            '',
            '👉 Moins de bruit, plus de sens.'
          ]
        },
        {
          title: '4.2 Gestion de crise',
          content: [
            'L\'IA peut :',
            '• détecter une montée de tension,',
            '• identifier les mots-clés problématiques,',
            '• alerter en amont.',
            '',
            'Mais :',
            '• la réponse,',
            '• le ton,',
            '• l\'humilité,',
            '• l\'empathie',
            'sont strictement humains.'
          ]
        },
        {
          title: '4.3 Création de vraie communauté (au-delà des likes)',
          content: [
            'Le CM augmenté travaille sur :',
            '• groupes privés,',
            '• événements,',
            '• interactions entre membres,',
            '• reconnaissance des contributeurs,',
            '• sentiment d\'appartenance.',
            '',
            '👉 Les algorithmes changent.',
            '👉 La communauté reste.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – COMMUNITY MANAGEMENT & BUSINESS',
      sections: [
        {
          title: '5.1 L\'erreur classique',
          content: [
            'Croire que le CM sert uniquement à :',
            '• faire de la visibilité,',
            '• générer de l\'engagement.',
            '',
            'En réalité, il sert à :',
            '• fidéliser,',
            '• réduire la défiance,',
            '• améliorer l\'expérience client,',
            '• capter des insights business.'
          ]
        },
        {
          title: '5.2 Le CM comme capteur stratégique',
          content: [
            'Un bon CM :',
            '• remonte les objections clients,',
            '• alerte sur des problèmes produits,',
            '• détecte des opportunités,',
            '• humanise la marque.',
            '',
            '👉 C\'est un rôle transversal.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ÉTHIQUE, CONFIANCE ET LIMITES DE L\'IA',
      sections: [
        {
          title: '6.1 Ce qu\'il ne faut JAMAIS automatiser',
          content: [
            '• excuses publiques,',
            '• réponses émotionnelles,',
            '• conflits,',
            '• modération sensible,',
            '• discussions complexes.',
            '',
            '👉 L\'IA n\'a pas de responsabilité morale.'
          ]
        },
        {
          title: '6.2 Transparence',
          content: [
            'De plus en plus de communautés rejettent :',
            '• les réponses robotiques,',
            '• les faux humains,',
            '• l\'automatisation cachée.',
            '',
            '👉 La confiance devient un actif stratégique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ÉVOLUTION DU MÉTIER À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui disparaît',
          content: [
            '• CM purement exécutant,',
            '• publication sans stratégie,',
            '• métriques superficielles.'
          ]
        },
        {
          title: 'Ce qui explose',
          content: [
            '• gestion de communautés privées,',
            '• rôle de médiateur,',
            '• stratégie relationnelle,',
            '• pilotage humain + IA.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU COMMUNITY MANAGER AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends profondément ma communauté',
            '• J\'utilise l\'IA pour écouter, pas pour remplacer',
            '• Je crée de la relation, pas du volume',
            '• Je protège la confiance',
            '• J\'ai une vision long terme',
            '• Je suis un rôle stratégique'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA publie.
Le Community Manager crée du lien.

Dans un monde saturé de contenus automatisés,
la relation humaine devient un luxe stratégique.`
}

// Contenu de la formation "Chargé de Communication face à l'IA"
export const communicationIAContent: FormationContent = {
  formationId: 'formation_communication',
  introduction: `Le métier de chargé de communication a longtemps été coincé dans une zone floue.

Ni totalement stratégique.
Ni totalement opérationnelle.

Avec des missions souvent mal définies :
• "faire de la com",
• "gérer l'image",
• "communiquer sur nos actions",
• "être visible".

Puis l'IA est arrivée, et elle a mis une lumière crue sur un problème ancien :

👉 Une grande partie de la communication telle qu'elle était pratiquée n'avait déjà plus beaucoup de valeur.

L'IA n'a pas créé la crise du métier.
👉 Elle l'a révélée.`,
  parts: [
    {
      title: 'PARTIE 1 – LA FIN DE LA COMMUNICATION COMME PRODUCTION DE CONTENU',
      sections: [
        {
          title: '1.1 Le mythe du "plus on communique, mieux c\'est"',
          content: [
            'Pendant des années, la logique dominante était :',
            '• plus de posts,',
            '• plus de communiqués,',
            '• plus de newsletters,',
            '• plus de campagnes.',
            '',
            'Résultat en 2025 :',
            '• saturation informationnelle,',
            '• méfiance des publics,',
            '• perte de crédibilité,',
            '• messages ignorés.',
            '',
            '👉 L\'IA accentue ce phénomène, car elle permet de produire plus, plus vite, partout.',
            '',
            'Mais : Ce n\'est pas parce qu\'un message existe qu\'il est entendu.'
          ]
        },
        {
          title: '1.2 Les tâches de communication déjà automatisables',
          content: [
            'Soyons factuels.',
            '',
            'Fortement automatisables aujourd\'hui :',
            '• rédaction de communiqués standards,',
            '• posts institutionnels génériques,',
            '• newsletters informatives,',
            '• déclinaisons multi-canaux,',
            '• reporting basique.',
            '',
            'Avec des outils comme :',
            '• ChatGPT',
            '• Canva',
            '• Hootsuite',
            '• Mailchimp',
            '',
            '👉 Donc oui : le chargé de communication "producteur de messages" est en voie de banalisation.'
          ]
        },
        {
          title: '1.3 La conséquence structurelle',
          content: [
            'Ce qui se passe déjà :',
            '• pression accrue sur les postes intermédiaires,',
            '• confusion entre com, marketing et social media,',
            '• perte de légitimité stratégique,',
            '• dépendance aux outils.',
            '',
            '👉 Le métier doit se repositionner ou se diluer.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LA COMMUNICATION EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je produis des messages pour l\'organisation."',
            '',
            'Après : "Je garantis la cohérence, la crédibilité et la compréhension de l\'organisation dans son environnement."',
            '',
            'La communication n\'est plus :',
            '• une production,',
            '• un flux,',
            '• un calendrier.',
            '',
            '👉 C\'est une fonction de régulation du sens.'
          ]
        },
        {
          title: '2.2 Les 6 missions réelles du chargé de communication augmenté',
          content: [
            '1. Clarifier l\'identité',
            '• qui nous sommes,',
            '• ce que nous faisons,',
            '• pourquoi nous existons.',
            '',
            '2. Hiérarchiser les messages',
            '• ce qui mérite d\'être dit,',
            '• ce qui ne doit pas l\'être,',
            '• ce qui peut attendre.',
            '',
            '3. Créer de la cohérence',
            '• entre canaux,',
            '• entre discours et actes,',
            '• entre interne et externe.',
            '',
            '4. Protéger la crédibilité',
            '• éviter la surcommunication,',
            '• prévenir les incohérences,',
            '• anticiper les crises.',
            '',
            '5. Traduire la complexité',
            '• rendre compréhensible sans appauvrir,',
            '• adapter sans déformer.',
            '',
            '6. Piloter l\'IA de communication',
            '',
            '👉 Sans perdre le contrôle narratif.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT STRATÉGIQUE DU CHARGÉ DE COMMUNICATION',
      sections: [
        {
          title: '3.1 L\'IA pour analyser l\'écosystème informationnel',
          content: [
            'Objectif :',
            '👉 Comprendre avant de parler',
            '',
            'Outils clés :',
            '• Perplexity → Cartographie des discours existants',
            '• Brandwatch → Perception de marque, signaux faibles',
            '• Meltwater → Analyse médiatique, réputation',
            '',
            'Cas concret :',
            'Avant : veille partielle, perception biaisée.',
            '',
            'Avec IA :',
            '• compréhension globale,',
            '• détection des incohérences,',
            '• anticipation des tensions.',
            '',
            '👉 On passe de la réaction à la stratégie.'
          ]
        },
        {
          title: '3.2 L\'IA pour structurer une stratégie de communication',
          content: [
            'L\'IA peut aider à :',
            '• clarifier les messages clés,',
            '• tester des narratifs,',
            '• identifier les risques,',
            '• simuler des scénarios.',
            '',
            'Mais :',
            '👉 La décision stratégique reste humaine.',
            '',
            'L\'IA propose.',
            'Le communicant tranche.'
          ]
        },
        {
          title: '3.3 L\'IA pour produire (sans perdre l\'âme)',
          content: [
            'Bons usages :',
            '• premières versions,',
            '• déclinaisons,',
            '• clarté rédactionnelle,',
            '• gain de temps.',
            '',
            'Mauvais usages :',
            '• automatisation totale,',
            '• discours creux,',
            '• langue institutionnelle vide.',
            '',
            '👉 Un message sans intention humaine est immédiatement perçu comme creux.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '4.1 Communication institutionnelle',
          content: [
            'Avant IA :',
            '• discours longs,',
            '• peu lus,',
            '• peu compris.',
            '',
            'Après IA :',
            '• messages plus clairs,',
            '• hiérarchisés,',
            '• contextualisés.',
            '',
            'Mais :',
            '👉 le communicant reste responsable de la sincérité.'
          ]
        },
        {
          title: '4.2 Communication interne',
          content: [
            'IA utile pour :',
            '• synthétiser,',
            '• clarifier,',
            '• reformuler.',
            '',
            'Mais :',
            '• l\'écoute,',
            '• le dialogue,',
            '• la gestion du non-dit',
            'sont strictement humains.'
          ]
        },
        {
          title: '4.3 Communication de crise',
          content: [
            'L\'IA peut :',
            '• analyser les signaux faibles,',
            '• simuler des scénarios,',
            '• préparer des éléments de langage.',
            '',
            'Mais :',
            '• le ton,',
            '• l\'humilité,',
            '• la responsabilité',
            'ne peuvent pas être automatisés.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – COMMUNICATION, ÉTHIQUE ET RESPONSABILITÉ',
      sections: [
        {
          title: '5.1 Le risque majeur : la communication artificielle',
          content: [
            'Dans un monde d\'IA :',
            '• le public devient ultra-sensible au faux,',
            '• la défiance augmente,',
            '• la transparence devient stratégique.',
            '',
            '👉 Mieux vaut moins communiquer que mal communiquer.'
          ]
        },
        {
          title: '5.2 Le rôle éthique du communicant',
          content: [
            'Le chargé de communication devient :',
            '• un garde-fou,',
            '• un filtre,',
            '• un garant du réel.',
            '',
            'Il doit parfois dire : "Non, on ne communique pas là-dessus."'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – POSITIONNEMENT PROFESSIONNEL DU CHARGÉ DE COMMUNICATION',
      sections: [
        {
          title: '6.1 Ce qui se dévalue',
          content: [
            '• production brute,',
            '• volume,',
            '• exécution sans vision.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• stratégie,',
            '• cohérence,',
            '• gestion de la réputation,',
            '• accompagnement des dirigeants,',
            '• maîtrise du risque informationnel.',
            '',
            '👉 Le chargé de communication devient un conseiller stratégique, pas un exécutant.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• pensée systémique,',
            '• culture informationnelle,',
            '• compréhension des IA,',
            '• éthique,',
            '• communication sensible,',
            '• capacité à dire non.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU CHARGÉ DE COMMUNICATION AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends l\'écosystème informationnel',
            '• Je hiérarchise avant de produire',
            '• Je protège la crédibilité',
            '• J\'utilise l\'IA sans perdre la main',
            '• Je garde une vision long terme',
            '• Je suis un rôle stratégique'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA parle.
Le chargé de communication oriente, filtre et structure.

Dans un monde saturé de messages :
👉 la cohérence devient un avantage concurrentiel majeur.`
}

// Contenu de la formation "Traducteur / Rédacteur Multilingue face à l'IA"
export const traducteurIAContent: FormationContent = {
  formationId: 'formation_traducteur',
  introduction: `S'il y a un métier pour lequel l'arrivée de l'IA a été ressentie comme une menace existentielle immédiate, c'est bien celui de traducteur.

En très peu de temps, les professionnels ont vu :
• des traductions instantanées,
• des coûts tirés vers le bas,
• des clients dire : "On va d'abord passer par l'IA, puis on verra."

Beaucoup ont conclu : "La traduction est morte."

Cette conclusion est fausse, mais elle part d'un constat réel :

👉 La traduction linguistique brute n'a presque plus de valeur économique.

La vraie question devient donc :

"Quelle est la nouvelle valeur du traducteur humain ?"`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI A DISPARU (ET NE REVIENDRA PAS)',
      sections: [
        {
          title: '1.1 La fin de la traduction comme simple transfert linguistique',
          content: [
            'Pendant longtemps, le métier reposait sur :',
            '• la maîtrise de deux langues,',
            '• la capacité à produire un texte correct,',
            '• le respect du sens général.',
            '',
            'En 2025, des outils comme :',
            '• DeepL',
            '• Google Translate',
            '• ChatGPT',
            '',
            'font cela :',
            '• instantanément,',
            '• à grande échelle,',
            '• à coût quasi nul.',
            '',
            '👉 Ce niveau de service n\'est plus vendable seul.'
          ]
        },
        {
          title: '1.2 Les tâches massivement automatisables',
          content: [
            'Très fortement automatisables :',
            '• traduction de documents standards,',
            '• emails,',
            '• notices génériques,',
            '• contenus SEO basiques,',
            '• documentation interne non critique.',
            '',
            '👉 Les clients qui cherchaient uniquement :',
            '• "pas trop cher"',
            '• "compréhensible"',
            'sont déjà partis vers l\'IA.'
          ]
        },
        {
          title: '1.3 La conséquence psychologique et économique',
          content: [
            'Ce que vivent beaucoup de traducteurs :',
            '• perte de sens,',
            '• perte de revenus,',
            '• sentiment de déclassement,',
            '• confusion identitaire.',
            '',
            '👉 Le problème n\'est pas technique.',
            'Il est stratégique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER DE TRADUCTEUR EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je traduis des textes."',
            '',
            'Après : "Je garantis le sens, l\'intention et l\'adéquation culturelle d\'un message dans un autre contexte linguistique."',
            '',
            'Ce changement est majeur.',
            '',
            'La langue n\'est plus le cœur du métier.',
            '👉 Le contexte l\'est.'
          ]
        },
        {
          title: '2.2 Les 5 nouvelles valeurs du traducteur augmenté',
          content: [
            '1. Fidélité au sens, pas aux mots',
            '',
            '2. Compréhension culturelle profonde',
            '',
            '3. Responsabilité éditoriale',
            '',
            '4. Capacité de reformulation stratégique',
            '',
            '5. Maîtrise des outils IA sans perte de contrôle',
            '',
            '👉 Le traducteur devient un médiateur interculturel.'
          ]
        },
        {
          title: '2.3 Nouveau positionnement professionnel',
          content: [
            'Le traducteur n\'est plus :',
            '• un exécutant linguistique.',
            '',
            'Il devient :',
            '• expert en localisation,',
            '• relecteur critique de l\'IA,',
            '• garant de crédibilité,',
            '• conseiller international.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU TRADUCTEUR (ET NON COMME REMPLAÇANT)',
      sections: [
        {
          title: '3.1 L\'IA pour la traduction brute (premier jet)',
          content: [
            'Soyons pragmatiques :',
            '👉 ne pas utiliser l\'IA aujourd\'hui serait une erreur professionnelle.',
            '',
            'Outils clés :',
            '• DeepL → Traduction très qualitative, surtout sur langues européennes',
            '• ChatGPT → Traduction + reformulation + adaptation de ton',
            '',
            '👉 Ces outils produisent une matière première, pas un produit fini.'
          ]
        },
        {
          title: '3.2 Le rôle central de la post-édition humaine',
          content: [
            'La vraie valeur du traducteur est ici.',
            '',
            'Ce que l\'humain corrige :',
            '• faux sens subtils,',
            '• contresens culturels,',
            '• maladresses stylistiques,',
            '• incohérences terminologiques,',
            '• ton inadapté.',
            '',
            '👉 L\'IA comprend la langue.',
            'Le traducteur comprend le monde.'
          ]
        },
        {
          title: '3.3 L\'IA pour la cohérence terminologique',
          content: [
            'Outils utiles :',
            '• Trados → Mémoire de traduction',
            '• MemoQ → Gestion de projets multilingues',
            '• Notion → Glossaires vivants et contextualisés',
            '',
            '👉 Le traducteur devient aussi gestionnaire de cohérence linguistique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '4.1 Localisation marketing (là où l\'IA échoue le plus)',
          content: [
            'Exemple : slogan, landing page, campagne.',
            '',
            'IA :',
            '• traduit correctement,',
            '• mais rate :',
            '• l\'humour,',
            '• les références culturelles,',
            '• les émotions.',
            '',
            'Traducteur :',
            '• adapte,',
            '• réécrit,',
            '• parfois change totalement le message.',
            '',
            '👉 On ne traduit pas, on recrée.'
          ]
        },
        {
          title: '4.2 Traduction juridique et réglementaire',
          content: [
            'IA :',
            '• utile pour pré-traduction.',
            '',
            'Humain :',
            '• responsable du sens exact,',
            '• conscient des implications légales,',
            '• garant de la précision.',
            '',
            '👉 Ici, l\'IA ne peut jamais être seule.'
          ]
        },
        {
          title: '4.3 Contenus techniques et scientifiques',
          content: [
            'IA :',
            '• rapide,',
            '• cohérente sur les structures.',
            '',
            'Traducteur :',
            '• vérifie la compréhension réelle,',
            '• corrige les approximations,',
            '• valide la terminologie métier.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – LE RÉDACTEUR MULTILINGUE : ÉTAPE SUPÉRIEURE',
      sections: [
        {
          title: '5.1 Différence clé',
          content: [
            'Traduire = adapter un message existant',
            'Rédiger multilingue = penser directement dans plusieurs cultures',
            '',
            '👉 Le rédacteur multilingue devient extrêmement précieux.'
          ]
        },
        {
          title: '5.2 L\'IA comme aide à la rédaction multilingue',
          content: [
            'Outils :',
            '• ChatGPT',
            '• Claude',
            '',
            'Usages :',
            '• tester la clarté,',
            '• comparer des formulations,',
            '• identifier des ambiguïtés culturelles.',
            '',
            'Mais :',
            '👉 l\'intention éditoriale reste humaine.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – MODÈLES ÉCONOMIQUES POST-IA',
      sections: [
        {
          title: '6.1 Ce qui se dévalue',
          content: [
            '• facturation au mot brut,',
            '• traduction non spécialisée,',
            '• volume sans responsabilité.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• post-édition experte,',
            '• spécialisation sectorielle,',
            '• conseil en localisation,',
            '• responsabilité éditoriale,',
            '• accompagnement long terme.',
            '',
            '👉 Le traducteur devient partenaire, pas prestataire interchangeable.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• culture générale approfondie,',
            '• spécialisation métier,',
            '• esprit critique face à l\'IA,',
            '• gestion de projets multilingues,',
            '• conseil stratégique,',
            '• pédagogie interculturelle.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU TRADUCTEUR AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• J\'utilise l\'IA comme premier jet',
            '• Je garde la responsabilité du sens',
            '• Je maîtrise un domaine spécifique',
            '• Je comprends les enjeux culturels',
            '• Je vends de la valeur, pas du volume',
            '• Je me positionne comme expert'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA traduit.
Le traducteur assume le message.

Dans un monde globalisé et automatisé :
👉 le sens devient plus précieux que jamais.`
}

// Contenu de la formation "Développeur / Programmeur face à l'IA"
export const developpeurIAContent: FormationContent = {
  formationId: 'formation_developpeur',
  introduction: `Pendant des décennies, le développeur était vu comme :
• un expert rare,
• un producteur de logique,
• quelqu'un qui "parlait aux machines".

Puis l'IA est arrivée…
et a fait quelque chose de terrifiant pour l'ego technique :

👉 Elle s'est mise à écrire du code.
👉 Du code fonctionnel.
👉 Parfois très correct.
👉 Parfois meilleur que celui de juniors.

Résultat :
• panique chez certains,
• déni chez d'autres,
• discours simplistes : "Les développeurs vont disparaître".

La réalité est beaucoup plus subtile — et beaucoup plus exigeante.

L'IA ne remplace pas les développeurs.
Elle remplace les développeurs qui ne comprennent pas ce qu'ils font.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI DISPARAÎT (ET CE QUI EST DÉJÀ MORT)',
      sections: [
        {
          title: '1.1 La fin du développeur "exécutant pur"',
          content: [
            'Soyons clairs et honnêtes.',
            '',
            'Le développeur dont la valeur repose principalement sur :',
            '• écrire des fonctions simples,',
            '• copier-coller depuis Stack Overflow,',
            '• implémenter des specs sans réflexion,',
            '• corriger des bugs évidents,',
            '',
            '👉 est déjà partiellement automatisable.',
            '',
            'Des outils comme :',
            '• GitHub Copilot',
            '• ChatGPT',
            '• Cursor',
            '',
            'peuvent produire :',
            '• des fonctions,',
            '• des tests,',
            '• des scripts,',
            '• des refactorings basiques.',
            '',
            '👉 Le code "moyen" est devenu une commodité.'
          ]
        },
        {
          title: '1.2 Les tâches de développement déjà massivement assistées',
          content: [
            'Très fortement assistées / automatisables :',
            '• génération de boilerplate,',
            '• CRUD standards,',
            '• tests unitaires simples,',
            '• scripts utilitaires,',
            '• documentation technique,',
            '• refactoring mécanique.',
            '',
            '👉 Ce n\'est pas une opinion.',
            '👉 C\'est déjà la pratique quotidienne dans beaucoup d\'équipes.'
          ]
        },
        {
          title: '1.3 Le vrai danger : croire que coder = programmer',
          content: [
            'L\'IA code.',
            'Mais elle ne programme pas au sens fort.',
            '',
            'Programmer, c\'est :',
            '• comprendre un besoin flou,',
            '• traduire une intention métier,',
            '• faire des choix,',
            '• anticiper les effets de bord,',
            '• gérer la dette technique,',
            '• arbitrer entre performance, lisibilité, sécurité.',
            '',
            '👉 C\'est là que le métier se déplace.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER DE DÉVELOPPEUR EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'écris du code."',
            '',
            'Après : "Je conçois, maintiens et fais évoluer des systèmes logiciels fiables."',
            '',
            'Le code devient :',
            '• un moyen,',
            '• pas une fin.'
          ]
        },
        {
          title: '2.2 Les 6 rôles du développeur augmenté par l\'IA',
          content: [
            '1. Architecte logique',
            'Tu conçois des systèmes cohérents, pas des fichiers isolés.',
            '',
            '2. Analyste de besoins',
            'Tu comprends le métier avant la technique.',
            '',
            '3. Décideur technique',
            'Tu choisis quoi automatiser et quoi contrôler.',
            '',
            '4. Gardien de la qualité',
            'Lisibilité, maintenabilité, sécurité.',
            '',
            '5. Chef d\'orchestre IA',
            'Tu pilotes l\'IA, tu ne la subis pas.',
            '',
            '6. Responsable des conséquences',
            '',
            '👉 L\'IA ne prend pas la responsabilité d\'un bug en prod.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA DANS LE QUOTIDIEN DU DÉVELOPPEUR (OUTILS & MÉTHODES)',
      sections: [
        {
          title: '3.1 L\'IA comme copilote de code (usage intelligent)',
          content: [
            'Outils centraux :',
            '• GitHub Copilot → Complétion intelligente, patterns, boilerplate',
            '• ChatGPT → Explications, debug, génération contrôlée',
            '• Cursor → Dialogue direct avec la base de code',
            '',
            '👉 Le développeur ne tape plus chaque ligne.',
            '👉 Il dirige.'
          ]
        },
        {
          title: '3.2 Cas d\'usage : écrire moins, comprendre plus',
          content: [
            'Avant IA :',
            '• écrire chaque fonction,',
            '• debugger à la main,',
            '• chercher longtemps.',
            '',
            'Avec IA :',
            '• génération rapide,',
            '• explication ligne par ligne,',
            '• focus sur la logique globale.',
            '',
            '👉 Le temps gagné doit être investi dans la réflexion, sinon il est perdu.'
          ]
        },
        {
          title: '3.3 Debugging et compréhension de code legacy',
          content: [
            'Un des plus grands apports de l\'IA.',
            '',
            'IA utile pour :',
            '• expliquer un code ancien,',
            '• identifier des bugs probables,',
            '• proposer des corrections,',
            '• repérer des smells.',
            '',
            'Mais :',
            '👉 le jugement final est humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – ARCHITECTURE, SYSTÈMES ET IA',
      sections: [
        {
          title: '4.1 L\'IA ne comprend pas le système dans sa globalité',
          content: [
            'Elle comprend :',
            '• des fichiers,',
            '• des patterns,',
            '• des fragments.',
            '',
            'Elle comprend mal :',
            '• la vision long terme,',
            '• les contraintes métier implicites,',
            '• la dette technique stratégique.',
            '',
            '👉 L\'architecture reste profondément humaine.'
          ]
        },
        {
          title: '4.2 Le développeur devient architecte de décisions',
          content: [
            'Questions clés :',
            '• microservices ou monolithe ?',
            '• dette acceptée ou non ?',
            '• performance vs lisibilité ?',
            '• sécurité vs rapidité ?',
            '',
            '👉 L\'IA peut proposer.',
            '👉 Le développeur tranche.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '5.1 Développement d\'une application web',
          content: [
            'IA utilisée pour :',
            '• générer les endpoints,',
            '• écrire les tests,',
            '• documenter l\'API.',
            '',
            'Humain responsable de :',
            '• la structure globale,',
            '• la sécurité,',
            '• la cohérence métier.'
          ]
        },
        {
          title: '5.2 Reprise d\'un projet existant',
          content: [
            'IA :',
            '• explique le code,',
            '• cartographie les modules.',
            '',
            'Humain :',
            '• décide quoi refactorer,',
            '• quand,',
            '• pourquoi.'
          ]
        },
        {
          title: '5.3 Freelance / consultant',
          content: [
            'IA :',
            '• accélère la production,',
            '• réduit le temps technique.',
            '',
            'Freelance :',
            '• vend de la valeur,',
            '• du conseil,',
            '• de la fiabilité.',
            '',
            '👉 Facturer au code devient absurde.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – SÉCURITÉ, ÉTHIQUE ET LIMITES',
      sections: [
        {
          title: '6.1 Les risques réels',
          content: [
            '• code vulnérable,',
            '• dépendance aveugle,',
            '• hallucinations,',
            '• licences douteuses.',
            '',
            '👉 Tout code IA doit être revérifié.'
          ]
        },
        {
          title: '6.2 Responsabilité légale et professionnelle',
          content: [
            'L\'IA n\'est pas responsable.',
            'Toi, si.',
            '',
            '👉 Le développeur devient responsable du résultat, pas du volume.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ÉVOLUTION DU MÉTIER À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui disparaît',
          content: [
            '• codeurs exécutants,',
            '• juniors non formés à la réflexion,',
            '• développement sans compréhension métier.'
          ]
        },
        {
          title: 'Ce qui explose',
          content: [
            '• architecture,',
            '• intégration IA,',
            '• audit de code,',
            '• tech lead,',
            '• développeur "augmenté".'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – COMPÉTENCES À DÉVELOPPER ABSOLUMENT',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• algorithmique et logique,',
            '• architecture logicielle,',
            '• compréhension métier,',
            '• sécurité,',
            '• esprit critique face à l\'IA,',
            '• communication technique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU DÉVELOPPEUR AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends avant de coder',
            '• J\'utilise l\'IA comme copilote',
            '• Je garde la responsabilité finale',
            '• Je pense système',
            '• Je privilégie la lisibilité',
            '• Je me forme en continu'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA écrit du code.
Le développeur construit des systèmes fiables dans le temps.

Dans un monde où coder devient facile :
👉 penser devient la compétence rare.`
}

// Contenu de la formation "Chef de Projet Digital / Product Manager face à l'IA"
export const chefProjetIAContent: FormationContent = {
  formationId: 'formation_chef_projet',
  introduction: `Le chef de projet digital a toujours vécu dans un paradoxe :
• il est responsable du résultat,
• mais ne produit ni le code, ni le design, ni le contenu,
• il est au centre de tout,
• mais rarement reconnu comme expert.

Puis l'IA est arrivée, et a fait deux choses en même temps :
1. Elle a automatisé une grande partie du suivi opérationnel
2. Elle a rendu visibles les chefs de projet inutiles

👉 C'est brutal, mais sain.

Car le chef de projet n'a jamais été un métier de tâches.
👉 C'est un métier de décisions, d'arbitrage et de clarté.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI DISPARAÎT (ET CE QUI ÉTAIT DÉJÀ UNE FAUSSE VALEUR)',
      sections: [
        {
          title: '1.1 La fin du chef de projet "tableur + réunions"',
          content: [
            'Soyons honnêtes.',
            '',
            'Le chef de projet dont le quotidien consiste principalement à :',
            '• faire des plannings,',
            '• relancer les équipes,',
            '• organiser des réunions,',
            '• remplir des outils de suivi,',
            '• transmettre de l\'information,',
            '',
            '👉 est déjà remplaçable à 60–70 % par des outils automatisés.',
            '',
            'Des outils comme :',
            '• Notion',
            '• Asana',
            '• ClickUp',
            '• Jira',
            '',
            'gèrent déjà :',
            '• les dépendances,',
            '• les priorités,',
            '• les notifications,',
            '• les statuts.',
            '',
            '👉 Le suivi n\'est plus une valeur.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà très bien faire',
          content: [
            'Avec l\'IA intégrée à ces outils, on peut :',
            '• générer des plannings,',
            '• prioriser automatiquement,',
            '• détecter des retards probables,',
            '• synthétiser l\'avancement,',
            '• produire des comptes rendus.',
            '',
            '👉 Si ton rôle est uniquement informatif, il va disparaître.'
          ]
        },
        {
          title: '1.3 Le vrai problème : la confusion entre coordination et leadership',
          content: [
            'Coordonner, c\'est :',
            '• faire circuler l\'information.',
            '',
            'Piloter, c\'est :',
            '• décider,',
            '• arbitrer,',
            '• donner une direction claire,',
            '• assumer des choix imparfaits.',
            '',
            '👉 L\'IA coordonne très bien.',
            'Elle ne pilote pas.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE RÔLE DU CHEF DE PROJET EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je m\'assure que le projet avance."',
            '',
            'Après : "Je m\'assure que le projet avance dans la bonne direction."',
            '',
            'Ce "dans la bonne direction" change tout.'
          ]
        },
        {
          title: '2.2 Les 7 responsabilités réelles du chef de projet augmenté',
          content: [
            '1. Clarifier l\'objectif réel',
            'Pas ce qui est écrit dans le brief,',
            'mais ce qui crée de la valeur.',
            '',
            '2. Traduire le flou en décisions',
            'Les projets échouent rarement par manque d\'outils.',
            'Ils échouent par manque de clarté.',
            '',
            '3. Prioriser sous contrainte',
            'Temps, budget, humain, technique, politique.',
            '',
            '4. Arbitrer consciemment',
            'Dire non est une compétence clé.',
            '',
            '5. Synchroniser des intelligences différentes',
            'Tech, design, business, IA.',
            '',
            '6. Gérer l\'incertitude',
            '',
            '👉 L\'IA n\'élimine pas l\'incertitude.',
            'Elle l\'accélère.',
            '',
            '7. Assumer la responsabilité finale',
            '',
            'L\'IA n\'est jamais responsable d\'un échec projet.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU CHEF DE PROJET (OUTILS & USAGES)',
      sections: [
        {
          title: '3.1 L\'IA pour la phase amont : cadrage et vision',
          content: [
            'Objectif :',
            '👉 Réduire le flou avant qu\'il ne devienne coûteux',
            '',
            'Outils clés :',
            '• ChatGPT → Clarification d\'objectifs, reformulation de besoins flous',
            '• Miro + IA → Cartographie des idées, scénarios, parcours utilisateurs',
            '',
            'Cas concret :',
            'Un client dit : "On veut une app moderne avec de l\'IA."',
            '',
            'Avec IA :',
            '• tu explores ce que "moderne" veut dire,',
            '• tu identifies les risques,',
            '• tu fais émerger des choix.',
            '',
            '👉 Le chef de projet transforme des mots vagues en décisions concrètes.'
          ]
        },
        {
          title: '3.2 L\'IA pour la planification intelligente',
          content: [
            'L\'IA peut :',
            '• proposer des découpages,',
            '• estimer des charges,',
            '• détecter des dépendances,',
            '• simuler des retards.',
            '',
            'Mais :',
            '👉 elle ne connaît pas la réalité humaine de ton équipe.',
            '',
            'Fatigue, compétence réelle, conflits, motivation :',
            '• ça reste ton terrain.'
          ]
        },
        {
          title: '3.3 L\'IA pour le pilotage quotidien',
          content: [
            'Bons usages :',
            '• synthèse d\'avancement,',
            '• alertes,',
            '• reporting automatique,',
            '• priorisation assistée.',
            '',
            'Mauvais usages :',
            '• décisions automatiques,',
            '• absence de dialogue,',
            '• pilotage déshumanisé.',
            '',
            '👉 Le chef de projet n\'est pas un tableau de bord.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CHEF DE PROJET PRODUIT : CAS SPÉCIFIQUE',
      sections: [
        {
          title: '4.1 Le Product Manager face à l\'IA',
          content: [
            'Le PM est encore plus exposé.',
            '',
            'L\'IA peut :',
            '• analyser des feedbacks utilisateurs,',
            '• regrouper des demandes,',
            '• identifier des patterns.',
            '',
            'Outils :',
            '• Productboard',
            '• Hotjar',
            '',
            'Mais :',
            '👉 la vision produit reste humaine.'
          ]
        },
        {
          title: '4.2 Priorisation produit : l\'erreur classique',
          content: [
            'Croire que l\'IA peut dire : "Quelle feature développer en premier."',
            '',
            'Elle peut aider.',
            'Elle ne décide pas.',
            '',
            'Décider, c\'est :',
            '• accepter de se tromper,',
            '• renoncer à autre chose,',
            '• assumer politiquement.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CAS D\'USAGES CONCRETS (TRÈS DÉTAILLÉS)',
      sections: [
        {
          title: '5.1 Projet digital classique',
          content: [
            'Avant IA :',
            '• beaucoup de réunions,',
            '• reporting manuel,',
            '• stress permanent.',
            '',
            'Après IA :',
            '• moins de réunions inutiles,',
            '• synthèses automatiques,',
            '• plus de temps pour :',
            '• arbitrer,',
            '• écouter,',
            '• décider.',
            '',
            '👉 La valeur se déplace vers la décision.'
          ]
        },
        {
          title: '5.2 Projet intégrant de l\'IA',
          content: [
            'Spécificités :',
            '• incertitude forte,',
            '• résultats non déterministes,',
            '• évolution permanente.',
            '',
            'Rôle du chef de projet :',
            '• poser des limites,',
            '• définir ce qui est acceptable,',
            '• anticiper les dérives.',
            '',
            '👉 Un projet IA sans pilotage humain est dangereux.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ERREURS MAJEURES À ÉVITER',
      sections: [
        {
          title: 'Les erreurs à éviter absolument',
          content: [
            '• croire que l\'IA "gère le projet",',
            '• déléguer les décisions difficiles,',
            '• confondre vitesse et direction,',
            '• perdre le contact humain,',
            '• masquer les problèmes avec des dashboards.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ÉVOLUTION DU MÉTIER À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui disparaît',
          content: [
            '• chefs de projet exécutants,',
            '• gestionnaires de tâches,',
            '• profils sans vision.'
          ]
        },
        {
          title: 'Ce qui explose',
          content: [
            '• pilotage stratégique,',
            '• product leadership,',
            '• gestion de projets complexes,',
            '• coordination homme–IA.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – COMPÉTENCES À DÉVELOPPER ABSOLUMENT',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• pensée systémique,',
            '• prise de décision sous incertitude,',
            '• compréhension IA,',
            '• communication claire,',
            '• leadership transversal,',
            '• courage managérial.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU CHEF DE PROJET AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je clarifie les objectifs réels',
            '• Je décide, je n\'exécute pas seulement',
            '• J\'utilise l\'IA pour m\'aider, pas pour me cacher',
            '• Je protège l\'humain du projet',
            '• J\'assume les arbitrages',
            '• Je garde une vision long terme'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA organise.
Le chef de projet donne la direction et assume les choix.

Dans un monde automatisé :
👉 la capacité à décider devient la compétence la plus rare.`
}

// Contenu de la formation "UX / UI Designer face à l'IA"
export const uxUiIAContent: FormationContent = {
  formationId: 'formation_ux_ui',
  introduction: `Pendant des années, le métier d'UX/UI Designer a été tiré vers le bas par des raccourcis :
• "faire des écrans"
• "rendre ça joli"
• "améliorer l'ergonomie"
• "suivre les tendances"

Puis l'IA est arrivée…
et a fait exploser ces illusions.

Aujourd'hui, une IA peut :
• générer des interfaces complètes,
• proposer des layouts cohérents,
• décliner des composants,
• respecter des design systems,
• produire vite, très vite.

👉 Tout ce qui est purement visuel est désormais accélérable.

Et pourtant…

👉 Jamais l'expérience utilisateur n'a été aussi critique.

Pourquoi ?
Parce que l'IA complexifie radicalement les systèmes, et que quelqu'un doit :
• rendre tout ça compréhensible,
• utilisable,
• acceptable humainement.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI SE DÉVALUE (ET POURQUOI C\'ÉTAIT DÉJÀ FRAGILE)',
      sections: [
        {
          title: '1.1 La fin du designer "screens only"',
          content: [
            'Soyons directs.',
            '',
            'Le designer dont la valeur repose principalement sur :',
            '• produire des écrans,',
            '• suivre des patterns existants,',
            '• décliner un design system,',
            '• appliquer des tendances visuelles,',
            '',
            '👉 voit sa valeur se compresser fortement.',
            '',
            'Des outils comme :',
            '• Figma + IA',
            '• Uizard',
            '• Galileo AI',
            '',
            'peuvent déjà :',
            '• générer des UI complètes,',
            '• transformer du texte en interface,',
            '• produire des variantes à l\'infini.',
            '',
            '👉 L\'exécution visuelle n\'est plus un avantage compétitif.'
          ]
        },
        {
          title: '1.2 Les tâches UX/UI déjà fortement assistées',
          content: [
            'Très fortement assistées :',
            '• wireframes standards,',
            '• UI kits,',
            '• design systems,',
            '• variations de composants,',
            '• prototypage rapide,',
            '• tests d\'accessibilité basiques.',
            '',
            '👉 Le danger n\'est pas l\'outil.',
            '👉 Le danger est le designer qui confond production et conception.'
          ]
        },
        {
          title: '1.3 Le vrai risque : l\'UX cosmétique',
          content: [
            'Avec l\'IA, on peut produire :',
            '• des interfaces propres,',
            '• fluides,',
            '• "UX-ish".',
            '',
            'Mais :',
            '👉 une interface fluide peut cacher une expérience catastrophique.',
            '',
            'Parce que l\'UX n\'est pas :',
            '• une forme,',
            '• un écran,',
            '• un flow figé.',
            '',
            '👉 C\'est une prise de décision humaine dans un système complexe.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER DE DESIGNER EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je conçois des interfaces."',
            '',
            'Après : "Je conçois des interactions entre des humains et des systèmes complexes."',
            '',
            'L\'écran devient :',
            '• un point de contact,',
            '• pas le cœur du métier.'
          ]
        },
        {
          title: '2.2 Les 7 responsabilités réelles de l\'UX/UI Designer augmenté',
          content: [
            '1. Comprendre l\'humain réel',
            'Pas le persona PowerPoint.',
            'L\'humain imparfait, pressé, confus, anxieux.',
            '',
            '2. Traduire la complexité technique',
            'L\'IA rend les systèmes opaques.',
            'Le designer les rend lisibles.',
            '',
            '3. Orchestrer les décisions utilisateur',
            'Que doit-il faire ?',
            'Quand ?',
            'Pourquoi ?',
            '',
            '4. Réduire la charge cognitive',
            'Plus l\'IA est puissante, plus l\'UX doit être simple.',
            '',
            '5. Concevoir la confiance',
            'L\'utilisateur doit comprendre :',
            '• ce que fait le système,',
            '• ce qu\'il ne fait pas,',
            '• quand il peut se tromper.',
            '',
            '6. Travailler avec l\'incertitude',
            'Les systèmes IA ne sont pas déterministes.',
            '',
            '7. Assumer une responsabilité éthique',
            '',
            '👉 Une mauvaise UX IA peut créer :',
            '• dépendance,',
            '• erreurs graves,',
            '• perte de contrôle.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU DESIGNER (USAGES INTELLIGENTS)',
      sections: [
        {
          title: '3.1 Recherche utilisateur augmentée par l\'IA',
          content: [
            'Objectif :',
            '👉 Comprendre plus vite, mais pas superficiellement',
            '',
            'Outils clés :',
            '• ChatGPT → Synthèse d\'entretiens, regroupement de feedbacks',
            '• Dovetail → Analyse qualitative assistée par IA',
            '• Hotjar → Heatmaps, comportements réels',
            '',
            '👉 L\'IA aide à voir les patterns.',
            '👉 Le designer comprend les causes.'
          ]
        },
        {
          title: '3.2 L\'IA pour idéation et exploration',
          content: [
            'IA très utile pour :',
            '• explorer des flows alternatifs,',
            '• tester des hypothèses,',
            '• simuler des parcours.',
            '',
            'Mais :',
            '👉 elle ne sait pas ce qui est acceptable émotionnellement.'
          ]
        },
        {
          title: '3.3 Prototypage et UI : là où l\'IA excelle',
          content: [
            '• génération rapide d\'écrans,',
            '• variations,',
            '• adaptation responsive,',
            '• cohérence visuelle.',
            '',
            '👉 Cela libère du temps pour :',
            '• penser l\'expérience globale,',
            '• tester sur le terrain,',
            '• dialoguer avec les équipes.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – UX DES SYSTÈMES IA : LE NOUVEAU TERRAIN CRITIQUE',
      sections: [
        {
          title: '4.1 Pourquoi l\'UX IA est différente',
          content: [
            'Un système IA :',
            '• se trompe parfois,',
            '• n\'est pas prévisible à 100 %,',
            '• apprend,',
            '• évolue.',
            '',
            '👉 L\'UX classique ne suffit pas.'
          ]
        },
        {
          title: '4.2 Concevoir l\'incertitude',
          content: [
            'Le designer doit prévoir :',
            '• des explications claires,',
            '• des feedbacks compréhensibles,',
            '• des moyens de corriger,',
            '• des garde-fous.',
            '',
            'Exemples :',
            '• "Pourquoi ce résultat ?"',
            '• "Que faire si c\'est faux ?"',
            '• "Puis-je reprendre la main ?"',
            '',
            '👉 C\'est une UX de dialogue, pas de clic.'
          ]
        },
        {
          title: '4.3 Transparence et explicabilité',
          content: [
            'Le designer devient médiateur entre :',
            '• un modèle opaque,',
            '• un humain exigeant.',
            '',
            '👉 L\'explicabilité n\'est pas technique.',
            '👉 Elle est pédagogique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '5.1 Application IA grand public',
          content: [
            'IA :',
            '• moteur de recommandations,',
            '• génération de contenu.',
            '',
            'UX Designer :',
            '• définit les limites,',
            '• explique les résultats,',
            '• protège l\'utilisateur de l\'illusion de maîtrise.'
          ]
        },
        {
          title: '5.2 Produit SaaS avec IA intégrée',
          content: [
            'Designer responsable de :',
            '• l\'intégration fluide de l\'IA,',
            '• éviter l\'effet "gadget",',
            '• garder un contrôle utilisateur.'
          ]
        },
        {
          title: '5.3 Refonte d\'un produit existant',
          content: [
            'IA permet :',
            '• analyser des feedbacks massifs,',
            '• détecter des frictions invisibles.',
            '',
            'Designer décide :',
            '• quoi changer,',
            '• quoi préserver,',
            '• quoi simplifier.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – DESIGN SYSTEMS & IA',
      sections: [
        {
          title: '6.1 Design system génératif',
          content: [
            'L\'IA peut :',
            '• décliner,',
            '• maintenir,',
            '• adapter.',
            '',
            'Mais :',
            '👉 la logique du système est humaine.'
          ]
        },
        {
          title: '6.2 Gouvernance du design',
          content: [
            'Le designer devient :',
            '• gardien de cohérence,',
            '• facilitateur inter-équipes,',
            '• référent expérience.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ERREURS MAJEURES À ÉVITER',
      sections: [
        {
          title: 'Les erreurs à éviter absolument',
          content: [
            '• confondre vitesse et qualité,',
            '• automatiser sans comprendre,',
            '• sur-optimiser l\'UI,',
            '• ignorer les émotions,',
            '• oublier l\'éthique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – ÉVOLUTION DU MÉTIER À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui disparaît',
          content: [
            '• designers purement exécutants,',
            '• UI décorative,',
            '• UX sans recherche réelle.'
          ]
        },
        {
          title: 'Ce qui explose',
          content: [
            '• UX IA,',
            '• design stratégique,',
            '• expérience conversationnelle,',
            '• designers impliqués très tôt.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – COMPÉTENCES À DÉVELOPPER ABSOLUMENT',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• psychologie cognitive,',
            '• design d\'interaction complexe,',
            '• compréhension IA,',
            '• éthique du design,',
            '• facilitation,',
            '• communication stratégique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 10 – CHECKLIST DE L\'UX/UI DESIGNER AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends l\'humain avant l\'interface',
            '• Je conçois pour l\'incertitude',
            '• J\'utilise l\'IA pour accélérer, pas décider',
            '• Je protège l\'utilisateur',
            '• Je pense système',
            '• J\'assume un rôle éthique'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA génère des interfaces.
L'UX/UI Designer crée de la clarté, de la confiance et du contrôle humain.

Dans un monde de systèmes opaques :
👉 le design devient un métier de responsabilité.`
}

// Contenu de la formation "Data Analyst / Business Analyst face à l'IA"
export const dataAnalystIAContent: FormationContent = {
  formationId: 'formation_data_analyst',
  introduction: `Pendant longtemps, les Data Analysts et Business Analysts se sont sentis relativement protégés.

Pourquoi ?
• les données sont complexes,
• les outils sont techniques,
• l'analyse demande de la rigueur,
• les décisions ont un impact réel.

Puis l'IA est arrivée…
et elle a commencé à :
• écrire des requêtes SQL,
• générer des dashboards,
• produire des analyses descriptives,
• commenter automatiquement des graphiques,
• proposer des "insights".

👉 Le choc a été silencieux, mais profond.

Car ce que l'IA attaque ici, ce n'est pas la donnée.
👉 C'est la médiation entre la donnée et la décision.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI SE DÉVALUE (ET POURQUOI C\'ÉTAIT INÉVITABLE)',
      sections: [
        {
          title: '1.1 La fin du Data Analyst "reporting"',
          content: [
            'Soyons très clairs.',
            '',
            'Le Data Analyst dont la valeur repose principalement sur :',
            '• produire des tableaux de bord,',
            '• répondre à des demandes ad hoc,',
            '• extraire des chiffres,',
            '• commenter des variations évidentes,',
            '',
            '👉 voit sa valeur s\'éroder rapidement.',
            '',
            'Des outils comme :',
            '• Power BI',
            '• Tableau',
            '• Looker',
            '',
            'intègrent désormais :',
            '• des assistants IA,',
            '• des analyses automatisées,',
            '• des explications en langage naturel.',
            '',
            '👉 Le "quoi" devient automatisable.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà très bien faire avec les données',
          content: [
            'Très fortement assisté / automatisable :',
            '• requêtes SQL simples,',
            '• agrégations standards,',
            '• visualisations classiques,',
            '• détection de tendances évidentes,',
            '• commentaires descriptifs,',
            '• forecasting basique.',
            '',
            'Avec :',
            '• ChatGPT',
            '• Copilot for Power BI',
            '• DataGPT',
            '',
            '👉 Le danger n\'est pas la perte de travail.',
            'C\'est la perte de légitimité.'
          ]
        },
        {
          title: '1.3 Le piège du "data-driven" mal compris',
          content: [
            'Beaucoup d\'organisations disent : "On est data-driven."',
            '',
            'En réalité :',
            '• elles regardent des chiffres,',
            '• sans toujours comprendre les biais,',
            '• sans remettre en question les hypothèses,',
            '• sans assumer les décisions.',
            '',
            '👉 L\'IA amplifie ce problème.',
            '',
            'Plus de données.',
            'Plus d\'analyses.',
            'Mais pas forcément plus de décisions justes.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER D\'ANALYSTE EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'analyse les données."',
            '',
            'Après : "J\'aide l\'organisation à prendre de meilleures décisions à partir de données imparfaites."',
            '',
            'Ce mot est clé : imparfaites.',
            '',
            'La donnée n\'est jamais neutre.',
            'L\'IA non plus.'
          ]
        },
        {
          title: '2.2 Les 7 responsabilités réelles du Data / Business Analyst augmenté',
          content: [
            '1. Comprendre le contexte métier',
            'Sans compréhension métier, la donnée est dangereuse.',
            '',
            '2. Formuler les bonnes questions',
            'Une mauvaise question produit une bonne analyse… inutile.',
            '',
            '3. Identifier les biais',
            'Données manquantes, biais de collecte, biais algorithmiques.',
            '',
            '4. Traduire en décisions',
            'Un insight sans action est du bruit.',
            '',
            '5. Challenger les évidences',
            'Ce que "tout le monde voit" est souvent faux.',
            '',
            '6. Expliquer simplement la complexité',
            'Aux décideurs, pas aux data scientists.',
            '',
            '7. Assumer la responsabilité analytique',
            '',
            '👉 L\'IA ne signe pas les décisions.',
            'Toi, si.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DE L\'ANALYSTE (USAGES MAÎTRISÉS)',
      sections: [
        {
          title: '3.1 L\'IA pour l\'exploration des données',
          content: [
            'Objectif :',
            '👉 Aller plus vite sur la surface pour creuser le fond',
            '',
            'Outils clés :',
            '• ChatGPT → Génération de requêtes, exploration hypothétique',
            '• Hex → Analyse interactive assistée par IA',
            '• Mode → SQL + Python + narration',
            '',
            '👉 L\'IA aide à explorer.',
            '👉 L\'analyste décide quoi croire.'
          ]
        },
        {
          title: '3.2 L\'IA pour la visualisation et la narration',
          content: [
            'IA utile pour :',
            '• proposer des graphiques adaptés,',
            '• reformuler des insights,',
            '• générer des commentaires.',
            '',
            'Mais :',
            '👉 elle ne connaît pas l\'impact politique d\'un chiffre.'
          ]
        },
        {
          title: '3.3 L\'IA pour la prévision (avec beaucoup de prudence)',
          content: [
            'L\'IA peut :',
            '• extrapoler,',
            '• détecter des patterns,',
            '• proposer des scénarios.',
            '',
            'Mais :',
            '• les ruptures,',
            '• les événements rares,',
            '• les changements humains',
            'sont très mal anticipés.',
            '',
            '👉 L\'analyste doit poser les limites de validité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – BUSINESS ANALYST : LE LIEN CRITIQUE ENTRE DATA ET STRATÉGIE',
      sections: [
        {
          title: '4.1 Le BA face à l\'IA',
          content: [
            'Le Business Analyst est encore plus exposé.',
            '',
            'L\'IA peut :',
            '• analyser des processus,',
            '• détecter des inefficiences,',
            '• proposer des optimisations.',
            '',
            'Mais :',
            '👉 elle ne comprend pas les jeux de pouvoir, les résistances humaines, les contraintes implicites.'
          ]
        },
        {
          title: '4.2 Le BA comme traducteur stratégique',
          content: [
            'Il doit :',
            '• transformer des données en décisions,',
            '• expliquer les compromis,',
            '• aider à arbitrer.',
            '',
            '👉 C\'est un rôle profondément humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '5.1 Analyse de performance commerciale',
          content: [
            'IA :',
            '• détecte les tendances,',
            '• segmente automatiquement.',
            '',
            'Analyste :',
            '• explique les causes,',
            '• identifie les leviers réels,',
            '• évite les conclusions hâtives.'
          ]
        },
        {
          title: '5.2 Pilotage produit',
          content: [
            'IA :',
            '• analyse les comportements,',
            '• repère les frictions.',
            '',
            'Analyste :',
            '• relie aux objectifs business,',
            '• évite l\'optimisation locale absurde.'
          ]
        },
        {
          title: '5.3 Aide à la décision stratégique',
          content: [
            'IA :',
            '• propose des scénarios.',
            '',
            'Analyste :',
            '• explique les risques,',
            '• éclaire les conséquences,',
            '• aide à assumer les choix.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ÉTHIQUE, BIAIS ET RESPONSABILITÉ',
      sections: [
        {
          title: '6.1 Le danger de l\'illusion d\'objectivité',
          content: [
            'Plus un chiffre est bien présenté,',
            'plus il est cru.',
            '',
            '👉 L\'analyste est le dernier rempart contre la naïveté algorithmique.'
          ]
        },
        {
          title: '6.2 Responsabilité humaine',
          content: [
            'L\'IA : calcule.',
            '',
            'L\'analyste : assume.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – ÉVOLUTION DU MÉTIER À 5–10 ANS',
      sections: [
        {
          title: 'Ce qui disparaît',
          content: [
            '• analystes purement reporting,',
            '• profils sans compréhension métier,',
            '• tableaux sans décision.'
          ]
        },
        {
          title: 'Ce qui explose',
          content: [
            '• data storytelling stratégique,',
            '• analystes proches des décideurs,',
            '• gouvernance de la donnée,',
            '• rôle éthique et critique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – COMPÉTENCES À DÉVELOPPER ABSOLUMENT',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• pensée critique,',
            '• compréhension business,',
            '• statistiques appliquées,',
            '• data storytelling,',
            '• compréhension des IA,',
            '• courage analytique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU DATA / BUSINESS ANALYST AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je commence par la question, pas par la donnée',
            '• Je comprends le contexte métier',
            '• Je détecte les biais',
            '• Je transforme l\'analyse en décision',
            '• J\'utilise l\'IA comme assistant, pas comme oracle',
            '• J\'assume la responsabilité finale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA analyse.
Le Data / Business Analyst donne du sens, pose des limites et éclaire les choix.

Dans un monde saturé de chiffres :
👉 la lucidité devient une compétence stratégique rare.`
}

// Contenu de la formation "Commercial / Sales face à l'IA"
export const commercialIAContent: FormationContent = {
  formationId: 'formation_commercial',
  introduction: `Le métier de commercial a toujours été clivant.

Pour certains :
• un métier de pression,
• de scripts,
• de volume,
• de relances.

Pour d'autres :
• un métier de relation,
• d'écoute,
• de compréhension,
• de confiance.

L'IA a tranché ce débat de façon brutale.

👉 Tout ce qui est mécanique dans la vente est désormais automatisable.
👉 Tout ce qui est relationnel, stratégique et humain devient plus précieux que jamais.

Et c'est là que beaucoup de commerciaux se trompent :

Ils pensent que l'IA va les aider à vendre plus.
Alors qu'en réalité, elle oblige à vendre mieux.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'EFFONDRE (ET QUI ÉTAIT DÉJÀ FRAGILE)',
      sections: [
        {
          title: '1.1 La fin du commercial "script + volume"',
          content: [
            'Soyons honnêtes.',
            '',
            'Le commercial dont la valeur repose principalement sur :',
            '• réciter un script,',
            '• envoyer des emails génériques,',
            '• relancer mécaniquement,',
            '• suivre des KPIs de volume,',
            '• pousser une solution standard,',
            '',
            '👉 est déjà largement remplaçable par des systèmes automatisés.',
            '',
            'Des outils comme :',
            '• HubSpot',
            '• Salesforce',
            '• Apollo',
            '• Lemlist',
            '',
            'peuvent déjà :',
            '• prospecter,',
            '• scorer,',
            '• relancer,',
            '• personnaliser à grande échelle.',
            '',
            '👉 La prospection de masse n\'est plus une compétence.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà très bien faire en vente',
          content: [
            'Très fortement automatisable :',
            '• qualification de leads,',
            '• scoring prédictif,',
            '• emails de premier contact,',
            '• relances standards,',
            '• analyse de pipelines,',
            '• prévisions commerciales.',
            '',
            'Avec :',
            '• ChatGPT',
            '• Gong',
            '• Clari',
            '',
            '👉 Le "process de vente" devient une infrastructure, pas une compétence humaine.'
          ]
        },
        {
          title: '1.3 Le vrai danger : devenir interchangeable',
          content: [
            'Quand :',
            '• le message est générique,',
            '• l\'offre est comparable,',
            '• le discours est standard,',
            '',
            '👉 le prix devient le seul levier.',
            '',
            'Et l\'IA accentue ce phénomène.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LA VENTE EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je vends un produit / service."',
            '',
            'Après : "J\'aide un décideur à prendre une décision complexe dans un contexte incertain."',
            '',
            'Ce changement est radical.',
            '',
            'Le commercial n\'est plus :',
            '• un pousseur d\'offres.',
            '',
            'Il devient :',
            '• un facilitateur de décision.'
          ]
        },
        {
          title: '2.2 Les 8 responsabilités réelles du commercial augmenté',
          content: [
            '1. Comprendre le contexte client',
            'Pas le besoin déclaré.',
            'Le vrai problème.',
            '',
            '2. Détecter les enjeux cachés',
            'Politiques, humains, organisationnels.',
            '',
            '3. Challenger sans agresser',
            'Dire ce que le client n\'a pas envie d\'entendre.',
            '',
            '4. Créer de la clarté',
            'Dans un monde d\'options infinies.',
            '',
            '5. Construire la confiance',
            'Avant de parler solution.',
            '',
            '6. Co-construire la réponse',
            'La vente devient collaborative.',
            '',
            '7. Gérer l\'incertitude',
            'Aucune solution n\'est parfaite.',
            '',
            '8. Assumer l\'impact de la vente',
            '',
            '👉 Une mauvaise vente détruit la relation.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU COMMERCIAL (PAS COMME VENDEUR)',
      sections: [
        {
          title: '3.1 L\'IA pour la préparation commerciale (clé absolue)',
          content: [
            'Objectif :',
            '👉 Arriver préparé, pertinent, crédible',
            '',
            'Outils clés :',
            '• ChatGPT → Analyse du contexte client, hypothèses d\'enjeux',
            '• LinkedIn Sales Navigator → Compréhension des décideurs',
            '• Clay → Enrichissement intelligent des leads',
            '',
            'Cas concret :',
            'Avant : appel à froid, discours standard.',
            '',
            'Après :',
            '• compréhension du secteur,',
            '• hypothèses précises,',
            '• questions pertinentes.',
            '',
            '👉 Le commercial parle moins, mais mieux.'
          ]
        },
        {
          title: '3.2 L\'IA pour la prospection (sans déshumanisation)',
          content: [
            'Bon usage :',
            '• segmentation intelligente,',
            '• personnalisation de fond,',
            '• timing optimisé.',
            '',
            'Mauvais usage :',
            '• spam automatisé,',
            '• faux humains,',
            '• volume sans intention.',
            '',
            '👉 La prospection IA mal utilisée détruit la réputation.'
          ]
        },
        {
          title: '3.3 L\'IA pour les rendez-vous commerciaux',
          content: [
            'Outils comme :',
            '• Gong',
            '• Fireflies',
            '',
            'permettent :',
            '• analyse des conversations,',
            '• détection de signaux faibles,',
            '• amélioration continue.',
            '',
            'Mais :',
            '👉 l\'écoute réelle reste humaine.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS (TRÈS DÉTAILLÉS)',
      sections: [
        {
          title: '4.1 Vente B2B complexe',
          content: [
            'IA :',
            '• prépare le contexte,',
            '• analyse les objections,',
            '• suggère des angles.',
            '',
            'Commercial :',
            '• comprend les enjeux politiques,',
            '• adapte le discours,',
            '• sécurise la décision.'
          ]
        },
        {
          title: '4.2 Vente en cycle long',
          content: [
            'IA :',
            '• aide au suivi,',
            '• détecte les risques de décrochage.',
            '',
            'Commercial :',
            '• entretient la relation,',
            '• rassure,',
            '• clarifie.'
          ]
        },
        {
          title: '4.3 Freelance / consultant commercial',
          content: [
            'IA :',
            '• réduit le temps de prospection,',
            '• améliore la préparation.',
            '',
            'Freelance :',
            '• vend de la confiance,',
            '• du conseil,',
            '• de l\'impact.',
            '',
            '👉 La vente devient un acte de responsabilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – ÉTHIQUE, MANIPULATION ET LIMITES',
      sections: [
        {
          title: '5.1 Le danger de la vente augmentée sans conscience',
          content: [
            'L\'IA peut :',
            '• manipuler,',
            '• influencer,',
            '• optimiser la persuasion.',
            '',
            '👉 Le commercial reste responsable de l\'intention.'
          ]
        },
        {
          title: '5.2 Transparence et relation long terme',
          content: [
            'Dans un monde d\'IA :',
            '• le client devient méfiant,',
            '• la confiance devient rare,',
            '• la réputation est fragile.',
            '',
            '👉 Mieux vaut vendre moins, mais juste.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – MODÈLES ÉCONOMIQUES & POSITIONNEMENT',
      sections: [
        {
          title: '6.1 Ce qui se dévalue',
          content: [
            '• vente transactionnelle,',
            '• scripts,',
            '• pression court terme.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• vente complexe,',
            '• accompagnement décisionnel,',
            '• long terme,',
            '• conseil stratégique.',
            '',
            '👉 Le commercial devient partenaire, pas vendeur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• écoute active avancée,',
            '• compréhension business,',
            '• pensée stratégique,',
            '• usage critique de l\'IA,',
            '• intelligence émotionnelle,',
            '• courage commercial.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU COMMERCIAL AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends avant de proposer',
            '• Je prépare chaque interaction',
            '• J\'utilise l\'IA pour mieux écouter',
            '• Je ne vends pas à tout prix',
            '• Je construis la confiance',
            '• J\'assume l\'impact de mes ventes'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA prospecte.
Le commercial crée de la clarté, de la confiance et de la sécurité décisionnelle.

Dans un monde de ventes automatisées :
👉 l'honnêteté devient un avantage concurrentiel.`
}

// Contenu de la formation "Responsable Marketing face à l'IA"
export const marketingIAContent: FormationContent = {
  formationId: 'formation_marketing',
  introduction: `Le marketing est probablement le métier qui a le plus abusé de l'automatisation avant même l'arrivée de l'IA.

Depuis 15 ans :
• multiplication des canaux,
• explosion des outils,
• obsession de la performance court terme,
• inflation de contenus,
• dashboards partout, vision nulle part.

Puis l'IA est arrivée…
et elle a fait quelque chose de brutal :

👉 Elle a rendu visibles les marketeurs qui ne comprennent plus ce qu'ils font.

Car l'IA sait :
• produire des campagnes,
• écrire des messages,
• optimiser des funnels,
• tester des variantes,
• analyser des données.

👉 Ce que l'IA ne sait pas faire, c'est décider pourquoi on fait tout ça.

Et c'est là que le métier se reconstruit.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'EFFONDRE (ET NE REVIENDRA PAS)',
      sections: [
        {
          title: '1.1 La fin du marketing "outil-centré"',
          content: [
            'Le responsable marketing dont la valeur repose principalement sur :',
            '• maîtriser des plateformes,',
            '• lancer des campagnes,',
            '• optimiser des KPIs isolés,',
            '• produire du contenu en continu,',
            '',
            '👉 voit sa valeur s\'éroder rapidement.',
            '',
            'Pourquoi ?',
            '',
            'Parce que des outils comme :',
            '• HubSpot',
            '• Marketo',
            '• Google Ads',
            '• Meta Ads',
            '',
            'intègrent désormais :',
            '• des recommandations IA,',
            '• des optimisations automatiques,',
            '• des créations génératives,',
            '• des tests continus.',
            '',
            '👉 Savoir "utiliser les outils" n\'est plus une compétence différenciante.'
          ]
        },
        {
          title: '1.2 Les tâches marketing déjà massivement automatisées',
          content: [
            'Très fortement automatisables :',
            '• création de campagnes standards,',
            '• déclinaisons de messages,',
            '• A/B testing mécanique,',
            '• segmentation basique,',
            '• reporting de performance,',
            '• nurturing générique.',
            '',
            'Avec :',
            '• ChatGPT',
            '• Jasper',
            '• Mutiny',
            '',
            '👉 Le "faire" devient automatisable.'
          ]
        },
        {
          title: '1.3 Le vrai problème : la perte de sens marketing',
          content: [
            'Beaucoup d\'équipes marketing :',
            '• produisent sans vision,',
            '• optimisent sans comprendre,',
            '• mesurent sans décider,',
            '• testent sans apprendre.',
            '',
            '👉 L\'IA amplifie ce chaos si le cadre n\'est pas humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MARKETING EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je génère des leads / du trafic / des conversions."',
            '',
            'Après : "Je construis une croissance cohérente, durable et alignée avec la valeur réelle de l\'entreprise."',
            '',
            'Ce changement est philosophique autant que stratégique.'
          ]
        },
        {
          title: '2.2 Les 9 responsabilités réelles du responsable marketing augmenté',
          content: [
            '1. Comprendre la valeur réelle de l\'offre',
            'Pas ce que l\'entreprise dit.',
            '👉 Ce que le client perçoit.',
            '',
            '2. Comprendre les clients réels',
            'Pas des personas marketing.',
            '👉 Des humains concrets, contradictoires, irrationnels.',
            '',
            '3. Définir une stratégie de croissance',
            'Pas une suite de campagnes.',
            '👉 Une direction claire.',
            '',
            '4. Choisir les canaux (et renoncer aux autres)',
            'Le marketing moderne est un art du renoncement.',
            '',
            '5. Créer de la cohérence omnicanale',
            'Chaque point de contact renforce le même message.',
            '',
            '6. Piloter l\'IA marketing',
            'Sans la laisser piloter la stratégie.',
            '',
            '7. Arbitrer entre court terme et long terme',
            'L\'IA est excellente à court terme.',
            'La marque se construit sur le long terme.',
            '',
            '8. Protéger la crédibilité',
            'Une marque sans crédibilité est condamnée.',
            '',
            '9. Assumer la responsabilité de la croissance',
            '',
            '👉 L\'IA n\'est jamais responsable d\'un mauvais positionnement.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT STRATÉGIQUE DU MARKETING',
      sections: [
        {
          title: '3.1 L\'IA pour la compréhension marché & clients',
          content: [
            'Objectif :',
            '👉 Voir plus clair avant d\'agir',
            '',
            'Outils clés :',
            '• ChatGPT → Exploration d\'hypothèses clients, objections, attentes',
            '• Perplexity → Recherche marché, tendances, concurrents',
            '• SparkToro → Où l\'attention se porte réellement',
            '',
            '👉 L\'IA accélère la compréhension.',
            '👉 Le marketeur valide sur le terrain.'
          ]
        },
        {
          title: '3.2 L\'IA pour la stratégie de contenu (sans tomber dans l\'usine)',
          content: [
            'IA utile pour :',
            '• structurer des piliers éditoriaux,',
            '• décliner intelligemment,',
            '• tester des angles.',
            '',
            'Mais :',
            '👉 la vision éditoriale est humaine.',
            '',
            'Le responsable marketing doit décider :',
            '• ce qu\'on dit,',
            '• ce qu\'on ne dit pas,',
            '• pourquoi on le dit.'
          ]
        },
        {
          title: '3.3 L\'IA pour la performance (avec discernement)',
          content: [
            'L\'IA excelle à :',
            '• optimiser les enchères,',
            '• tester des variantes,',
            '• améliorer des taux.',
            '',
            'Mais :',
            '👉 elle ne comprend pas l\'impact réputationnel.',
            '',
            'Une campagne performante peut :',
            '• dégrader la marque,',
            '• attirer les mauvais clients,',
            '• créer de la défiance.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Stratégie d\'acquisition multi-canale',
          content: [
            'IA :',
            '• teste,',
            '• optimise,',
            '• segmente.',
            '',
            'Responsable marketing :',
            '• choisit les canaux stratégiques,',
            '• fixe des limites,',
            '• protège la cohérence.'
          ]
        },
        {
          title: '4.2 Content marketing long terme',
          content: [
            'IA :',
            '• aide à produire,',
            '• à structurer,',
            '• à optimiser.',
            '',
            'Humain :',
            '• apporte la vision,',
            '• la profondeur,',
            '• la crédibilité.',
            '',
            '👉 Le contenu IA sans expertise est invisible à moyen terme.'
          ]
        },
        {
          title: '4.3 Lancement de produit',
          content: [
            'IA :',
            '• aide à analyser le marché,',
            '• simule des messages.',
            '',
            'Responsable marketing :',
            '• définit le positionnement,',
            '• assume la promesse,',
            '• aligne l\'entreprise.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – BRAND, CONFIANCE ET IA',
      sections: [
        {
          title: '5.1 Le danger du marketing artificiel',
          content: [
            'Dans un monde saturé d\'IA :',
            '• le public devient ultra-sensible au faux,',
            '• la méfiance augmente,',
            '• la marque devient fragile.',
            '',
            '👉 La sincérité devient un avantage concurrentiel.'
          ]
        },
        {
          title: '5.2 Le rôle du marketing dans la confiance',
          content: [
            'Le responsable marketing devient :',
            '• garant du discours,',
            '• gardien de la promesse,',
            '• protecteur de la crédibilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ORGANISATION MARKETING & IA',
      sections: [
        {
          title: '6.1 Les équipes marketing de demain',
          content: [
            '• moins d\'exécutants,',
            '• plus de stratèges,',
            '• plus de profils hybrides,',
            '• plus de responsabilités.'
          ]
        },
        {
          title: '6.2 Gouvernance de l\'IA marketing',
          content: [
            'Questions clés :',
            '• qui décide ?',
            '• où sont les limites ?',
            '• quels usages sont interdits ?',
            '• comment mesurer l\'impact réel ?',
            '',
            '👉 L\'IA sans gouvernance est un danger.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – CE QUI SE DÉVALUE / CE QUI PREND DE LA VALEUR',
      sections: [
        {
          title: 'Se dévalue',
          content: [
            '• volume,',
            '• automatisation aveugle,',
            '• campagnes sans vision.'
          ]
        },
        {
          title: 'Prend de la valeur',
          content: [
            '• stratégie,',
            '• cohérence,',
            '• compréhension humaine,',
            '• long terme,',
            '• responsabilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• pensée stratégique,',
            '• compréhension IA,',
            '• culture business,',
            '• psychologie client,',
            '• courage décisionnel,',
            '• éthique marketing.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU RESPONSABLE MARKETING AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• J\'ai une vision claire',
            '• Je comprends vraiment mes clients',
            '• Je choisis mes canaux consciemment',
            '• J\'utilise l\'IA sans perdre le contrôle',
            '• Je protège la marque',
            '• J\'assume la croissance sur le long terme'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA exécute.
Le responsable marketing oriente, structure et protège la valeur.

Dans un monde automatisé :
👉 la stratégie redevient une compétence rare.`
}

// Map pour accéder rapidement au contenu d'une formation
export const formationContentMap: Record<string, FormationContent> = {
  'formation_0': formateurIAContent,
  'formation_journaliste': journalisteIAContent,
  'formation_copywriter': copywriterIAContent,
  'formation_cm': communityManagerIAContent,
  'formation_communication': communicationIAContent,
  'formation_traducteur': traducteurIAContent,
  'formation_developpeur': developpeurIAContent,
  'formation_chef_projet': chefProjetIAContent,
  'formation_ux_ui': uxUiIAContent,
  'formation_data_analyst': dataAnalystIAContent,
  'formation_commercial': commercialIAContent,
  'formation_marketing': marketingIAContent
}
