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

// Contenu de la formation "Entrepreneur / Dirigeant de PME face à l'IA"
export const dirigeantIAContent: FormationContent = {
  formationId: 'formation_dirigeant',
  introduction: `Beaucoup de dirigeants abordent l'IA comme ils ont abordé :
• le digital,
• les réseaux sociaux,
• le cloud,
• le no-code.

Avec cette logique : "Il faut s'y mettre, sinon on va être en retard."

Cette approche est dangereuse.

Pourquoi ?
Parce que l'IA n'est pas une technologie de surface.
👉 C'est une technologie de structure.

Elle touche :
• la prise de décision,
• la vitesse d'exécution,
• la compétitivité,
• la culture interne,
• la relation client,
• le pouvoir dans l'organisation.

👉 Mal pilotée, elle amplifie le chaos.
Bien pilotée, elle crée un avantage quasi impossible à rattraper.`,
  parts: [
    {
      title: 'PARTIE 1 – LA PREMIÈRE ILLUSION À DÉTRUIRE',
      sections: [
        {
          title: '1.1 "L\'IA va nous faire gagner du temps"',
          content: [
            'Oui.',
            'Mais gagner du temps pour quoi ?',
            '',
            'Beaucoup d\'entreprises utilisent l\'IA pour :',
            '• produire plus vite,',
            '• réduire les coûts,',
            '• automatiser l\'existant.',
            '',
            'Résultat fréquent :',
            '• plus de volume,',
            '• plus de bruit,',
            '• plus de décisions médiocres prises plus vite.',
            '',
            '👉 L\'IA accélère tout.',
            'Y compris les mauvaises décisions.'
          ]
        },
        {
          title: '1.2 La vraie question du dirigeant',
          content: [
            'La seule question pertinente n\'est pas : "Quels outils IA utiliser ?"',
            '',
            'Mais : "Quel type d\'entreprise voulons-nous devenir avec l\'IA ?"',
            '',
            'Sans cette réponse :',
            '• l\'IA fragmente les équipes,',
            '• crée des usages sauvages,',
            '• détruit la cohérence,',
            '• installe une dépendance invisible.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE RÔLE DU DIRIGEANT EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental du leadership',
          content: [
            'Avant : "Je décide, les équipes exécutent."',
            '',
            'Après : "Je conçois un système où les décisions sont prises au bon niveau, avec les bons garde-fous."',
            '',
            '👉 Le dirigeant devient architecte, pas micro-manager.'
          ]
        },
        {
          title: '2.2 Les 9 responsabilités nouvelles du dirigeant augmenté',
          content: [
            '1. Définir une vision claire (non automatisable)',
            'L\'IA ne sait pas où aller.',
            'Elle sait aller vite.',
            '',
            '2. Définir ce qui ne sera jamais automatisé',
            'Valeurs.',
            'Éthique.',
            'Relation humaine.',
            'Décisions critiques.',
            '',
            '3. Arbitrer entre vitesse et sens',
            'La vitesse sans direction détruit.',
            '',
            '4. Structurer la gouvernance IA',
            'Qui a le droit de faire quoi ?',
            'Avec quels outils ?',
            'Avec quelles limites ?',
            '',
            '5. Repenser l\'organisation du travail',
            'L\'IA modifie :',
            '• les rôles,',
            '• les compétences,',
            '• la hiérarchie implicite.',
            '',
            '6. Protéger les équipes',
            'Contre :',
            '• la surcharge,',
            '• la perte de sens,',
            '• la peur de l\'obsolescence.',
            '',
            '7. Assumer la responsabilité finale',
            '',
            '👉 Une erreur IA est une erreur de direction, pas de machine.',
            '',
            '8. Investir dans la lucidité',
            'Former à comprendre, pas juste à utiliser.',
            '',
            '9. Construire un avantage défendable',
            'L\'IA seule n\'est jamais un avantage.',
            'La culture + l\'IA, oui.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME LEVIER STRATÉGIQUE (PAS COMME GADGET)',
      sections: [
        {
          title: '3.1 Où l\'IA crée un vrai avantage compétitif',
          content: [
            'L\'IA est stratégique quand elle :',
            '• améliore la qualité des décisions,',
            '• réduit les frictions internes,',
            '• renforce la compréhension client,',
            '• accélère l\'apprentissage collectif,',
            '• augmente la cohérence.',
            '',
            '👉 Si elle ne fait que produire plus, elle est mal utilisée.'
          ]
        },
        {
          title: '3.2 Cartographie des usages IA par fonction (vision dirigeant)',
          content: [
            '• Marketing : compréhension client, pas spam',
            '• Sales : préparation et clarté, pas pression',
            '• Ops : fiabilité, pas surveillance',
            '• RH : accompagnement, pas scoring humain',
            '• Finance : aide à la décision, pas automatisme',
            '• Produit : exploration, pas gadget',
            '',
            '👉 Le rôle du dirigeant est d\'aligner, pas d\'outiller.'
          ]
        },
        {
          title: '3.3 Outils transverses utiles (à piloter, pas subir)',
          content: [
            '• ChatGPT → Exploration stratégique, clarification, simulation',
            '• Notion + IA → Mémoire stratégique, documentation vivante',
            '• Power BI → Vision globale, pas micro-KPIs'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – TRANSFORMATION DE L\'ORGANISATION (LE POINT LE PLUS SENSIBLE)',
      sections: [
        {
          title: '4.1 L\'IA change le pouvoir réel',
          content: [
            'Dans beaucoup d\'entreprises :',
            '• ceux qui maîtrisent l\'IA vont plus vite,',
            '• prennent plus de décisions,',
            '• contournent les process.',
            '',
            '👉 Sans cadre, cela crée des tensions invisibles.'
          ]
        },
        {
          title: '4.2 Repenser les rôles',
          content: [
            'L\'IA :',
            '• réduit certains rôles exécutifs,',
            '• augmente les rôles de coordination,',
            '• valorise la pensée critique.',
            '',
            '👉 Le dirigeant doit anticiper, pas subir.'
          ]
        },
        {
          title: '4.3 Former sans infantiliser',
          content: [
            'Former à l\'IA, ce n\'est pas :',
            '• faire un atelier outils,',
            '• montrer des prompts.',
            '',
            'C\'est :',
            '• apprendre à raisonner,',
            '• apprendre à douter,',
            '• apprendre à décider avec une machine.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CAS D\'USAGES DIRIGEANT (TRÈS CONCRETS)',
      sections: [
        {
          title: '5.1 Prise de décision stratégique',
          content: [
            'IA :',
            '• explore des scénarios,',
            '• identifie des risques.',
            '',
            'Dirigeant :',
            '• tranche,',
            '• assume,',
            '• incarne.'
          ]
        },
        {
          title: '5.2 Réduction des coûts',
          content: [
            'IA mal utilisée :',
            '• coupe aveuglément,',
            '• détruit la qualité.',
            '',
            'IA bien utilisée :',
            '• identifie les frictions,',
            '• améliore la fiabilité,',
            '• libère du temps humain.'
          ]
        },
        {
          title: '5.3 Croissance et innovation',
          content: [
            'IA :',
            '• aide à explorer,',
            '• à tester rapidement.',
            '',
            'Dirigeant :',
            '• choisit où investir,',
            '• protège l\'identité de l\'entreprise.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ÉTHIQUE, RESPONSABILITÉ ET RISQUES MAJEURS',
      sections: [
        {
          title: '6.1 Les risques réels',
          content: [
            '• décisions biaisées,',
            '• dépendance technologique,',
            '• perte de savoir interne,',
            '• dilution de la responsabilité.',
            '',
            '👉 Le risque n\'est pas technique.',
            'Il est managérial.'
          ]
        },
        {
          title: '6.2 Gouvernance IA minimale vitale',
          content: [
            'Tout dirigeant doit définir :',
            '• ce qui est autorisé,',
            '• ce qui est interdit,',
            '• ce qui est sensible,',
            '• qui valide quoi.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – MODÈLES ÉCONOMIQUES ET IA',
      sections: [
        {
          title: '7.1 Ce qui ne crée PAS d\'avantage durable',
          content: [
            '• utiliser les mêmes outils que tout le monde,',
            '• automatiser sans vision,',
            '• réduire les coûts sans stratégie.'
          ]
        },
        {
          title: '7.2 Ce qui crée un avantage défendable',
          content: [
            '• compréhension client profonde,',
            '• excellence opérationnelle,',
            '• culture forte,',
            '• capacité d\'adaptation rapide.',
            '',
            '👉 L\'IA amplifie la culture existante.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – LE DIRIGEANT À 10 ANS',
      sections: [
        {
          title: 'Vision du dirigeant de demain',
          content: [
            'Le dirigeant de demain :',
            '• n\'est pas un expert IA,',
            '• est un chef d\'orchestre humain + machine,',
            '• comprend les limites,',
            '• protège le sens,',
            '• assume la responsabilité finale.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU DIRIGEANT AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• J\'ai une vision claire',
            '• Je sais ce qui ne sera jamais automatisé',
            '• J\'ai posé un cadre IA',
            '• Je protège mes équipes',
            '• J\'utilise l\'IA pour décider, pas pour fuir',
            '• J\'assume la responsabilité finale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA exécute.
Le dirigeant donne une direction, pose des limites et assume les conséquences.

Dans un monde où tout s'accélère :
👉 la lucidité devient la compétence la plus rare.`
}

// Contenu de la formation "Consultant (Stratégie / Organisation / IT) face à l'IA"
export const consultantIAContent: FormationContent = {
  formationId: 'formation_consultant',
  introduction: `Le métier de consultant repose historiquement sur trois piliers :
1. Accès à une expertise rare
2. Capacité de structuration
3. Crédibilité auprès des décideurs

L'IA est venue attaquer frontalement les deux premiers.

Aujourd'hui, un dirigeant peut :
• obtenir une analyse stratégique en quelques minutes,
• générer des frameworks,
• produire des diagnostics,
• créer des plans d'action,
• rédiger des slides propres.

👉 Le consulting de surface est mort.

Ce n'est pas une opinion.
C'est un fait observable depuis 2023–2025.

Mais paradoxalement…

👉 Jamais les organisations n'ont eu autant besoin de vrais consultants.

Pourquoi ?
Parce que l'IA augmente la complexité, la vitesse et les risques.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI DISPARAÎT DANS LE CONSULTING',
      sections: [
        {
          title: '1.1 La fin du consultant "framework + livrables"',
          content: [
            'Soyons honnêtes (et un peu cruels).',
            '',
            'Le consultant dont la valeur repose principalement sur :',
            '• réciter des modèles (SWOT, PESTEL, 5 forces, etc.),',
            '• produire des slides "propres",',
            '• reformuler ce que le client sait déjà,',
            '• livrer des recommandations génériques,',
            '',
            '👉 est déjà remplaçable par une IA bien utilisée.',
            '',
            'Des outils comme :',
            '• ChatGPT',
            '• Claude',
            '• Gamma',
            '',
            'peuvent produire :',
            '• diagnostics structurés,',
            '• analyses comparatives,',
            '• roadmaps,',
            '• présentations exécutives.',
            '',
            '👉 Le livrable n\'est plus la valeur.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà très bien faire en consulting',
          content: [
            'Fortement automatisable :',
            '• analyses documentaires,',
            '• benchmark de marché,',
            '• structuration de problèmes,',
            '• génération de scénarios,',
            '• rédaction de recommandations.',
            '',
            '👉 Si ton offre = "je structure et je recommande",',
            '👉 tu es en danger.'
          ]
        },
        {
          title: '1.3 Le vrai problème : la confusion entre clarté intellectuelle et transformation réelle',
          content: [
            'Un client ne paye pas (ou ne devrait pas payer) pour :',
            '• un PDF,',
            '• un slide deck,',
            '• une belle synthèse.',
            '',
            'Il paye pour :',
            '• un changement réel,',
            '• une prise de décision difficile,',
            '• une transformation qui résiste au réel.',
            '',
            '👉 Et c\'est là que l\'IA s\'arrête.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER DE CONSULTANT EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'apporte une expertise et des recommandations."',
            '',
            'Après : "J\'aide une organisation à changer réellement, malgré ses résistances humaines, politiques et culturelles."',
            '',
            '👉 Le consultant devient un catalyseur, pas un expert distant.'
          ]
        },
        {
          title: '2.2 Les 8 responsabilités réelles du consultant augmenté',
          content: [
            '1. Diagnostiquer au-delà du discours officiel',
            'Ce que l\'organisation dit ≠ ce qui se passe.',
            '',
            '2. Lire les dynamiques humaines et politiques',
            'Pouvoir, peurs, jeux d\'acteurs.',
            '',
            '3. Traduire la stratégie en décisions concrètes',
            'Pas en concepts abstraits.',
            '',
            '4. Challenger sans arrogance',
            'Dire la vérité sans détruire la relation.',
            '',
            '5. Accompagner l\'exécution',
            'Sinon la stratégie meurt.',
            '',
            '6. Poser des limites à l\'IA',
            'Savoir quand ne PAS l\'utiliser.',
            '',
            '7. Créer de l\'alignement',
            'Entre dirigeants, équipes, systèmes.',
            '',
            '8. Assumer la responsabilité du changement',
            '',
            '👉 Le consultant ne peut plus se cacher derrière un livrable.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU CONSULTANT (USAGE MAÎTRISÉ)',
      sections: [
        {
          title: '3.1 L\'IA pour la phase de diagnostic (accélération massive)',
          content: [
            'Objectif :',
            '👉 Comprendre plus vite sans devenir superficiel',
            '',
            'Outils clés :',
            '• ChatGPT → Structuration des problématiques, hypothèses',
            '• Perplexity → Recherche sectorielle, benchmarks',
            '• Notion + IA → Centralisation et synthèse des informations',
            '',
            '👉 L\'IA fait gagner du temps sur :',
            '• la lecture,',
            '• la structuration,',
            '• la comparaison.',
            '',
            '👉 Le consultant investit ce temps dans :',
            '• l\'observation terrain,',
            '• les entretiens,',
            '• la compréhension humaine.'
          ]
        },
        {
          title: '3.2 L\'IA pour la modélisation stratégique',
          content: [
            'IA utile pour :',
            '• tester des scénarios,',
            '• explorer des options,',
            '• visualiser des impacts.',
            '',
            'Mais :',
            '👉 elle ne connaît pas les lignes rouges politiques.'
          ]
        },
        {
          title: '3.3 L\'IA pour les livrables (sans s\'y cacher)',
          content: [
            'Oui, l\'IA peut :',
            '• aider à rédiger,',
            '• structurer des slides,',
            '• clarifier des messages.',
            '',
            'Mais :',
            '👉 le livrable est un support de discussion, pas une fin.',
            '',
            'Un consultant qui "livre et part" n\'est plus crédible.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CONSULTING EN STRATÉGIE FACE À L\'IA',
      sections: [
        {
          title: '4.1 La stratégie n\'est plus rare, l\'exécution l\'est',
          content: [
            'L\'IA peut produire :',
            '• 10 stratégies différentes en 10 minutes.',
            '',
            'Le problème n\'est pas : "Quelle stratégie est la meilleure ?"',
            '',
            'Mais : "Quelle stratégie cette organisation est réellement capable d\'exécuter ?"',
            '',
            '👉 C\'est une question humaine, pas analytique.'
          ]
        },
        {
          title: '4.2 Le consultant comme révélateur de contraintes réelles',
          content: [
            'Ressources.',
            'Compétences.',
            'Culture.',
            'Peurs.',
            'Pouvoirs.',
            '',
            '👉 Le consultant augmenté aide à renoncer intelligemment.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – CONSULTING EN ORGANISATION & TRANSFORMATION',
      sections: [
        {
          title: '5.1 L\'IA change la structure du travail',
          content: [
            'Elle :',
            '• supprime des tâches,',
            '• crée des déséquilibres,',
            '• redistribue le pouvoir.',
            '',
            '👉 Sans accompagnement, cela crée :',
            '• résistances,',
            '• sabotage passif,',
            '• perte de sens.'
          ]
        },
        {
          title: '5.2 Le consultant comme médiateur du changement',
          content: [
            'Il doit :',
            '• écouter,',
            '• traduire,',
            '• rassurer,',
            '• confronter,',
            '• structurer.',
            '',
            '👉 L\'IA ne sait pas gérer la peur humaine.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – CONSULTING IT & IA : LE PLUS GRAND PIÈGE',
      sections: [
        {
          title: '6.1 L\'illusion "tout est technique"',
          content: [
            'Beaucoup de projets IA échouent non pas parce que :',
            '• le modèle est mauvais,',
            '• la donnée est insuffisante,',
            '',
            'Mais parce que :',
            '• les usages sont flous,',
            '• les équipes ne suivent pas,',
            '• la gouvernance est absente.',
            '',
            '👉 Le consultant IT devient un consultant humain + système.'
          ]
        },
        {
          title: '6.2 Gouvernance IA : mission clé du consultant',
          content: [
            'Le consultant doit aider à définir :',
            '• qui décide,',
            '• qui valide,',
            '• qui est responsable,',
            '• où sont les limites.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – CAS D\'USAGES CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '7.1 Mission de transformation IA',
          content: [
            'IA :',
            '• aide à explorer,',
            '• à prototyper.',
            '',
            'Consultant :',
            '• cadre,',
            '• priorise,',
            '• protège l\'organisation du chaos.'
          ]
        },
        {
          title: '7.2 Mission de redressement stratégique',
          content: [
            'IA :',
            '• analyse vite.',
            '',
            'Consultant :',
            '• confronte les non-dits,',
            '• aide à assumer des décisions douloureuses.'
          ]
        },
        {
          title: '7.3 Consultant indépendant',
          content: [
            'IA :',
            '• réduit le temps de production,',
            '• augmente la qualité formelle.',
            '',
            'Consultant :',
            '• vend du discernement,',
            '• de l\'expérience,',
            '• du courage intellectuel.',
            '',
            '👉 Le conseil devient un métier de responsabilité.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – MODÈLES ÉCONOMIQUES DU CONSULTANT POST-IA',
      sections: [
        {
          title: '8.1 Ce qui se dévalue',
          content: [
            '• facturation au livrable,',
            '• expertise générique,',
            '• recommandations sans suivi.'
          ]
        },
        {
          title: '8.2 Ce qui prend de la valeur',
          content: [
            '• accompagnement dans le temps,',
            '• transformation réelle,',
            '• posture de partenaire,',
            '• responsabilité partagée.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – COMPÉTENCES À DÉVELOPPER À 5–10 ANS',
      sections: [
        {
          title: 'Les compétences essentielles',
          content: [
            '• lecture des systèmes humains,',
            '• pensée stratégique avancée,',
            '• compréhension IA,',
            '• facilitation du changement,',
            '• courage éthique,',
            '• communication exécutive.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 10 – CHECKLIST DU CONSULTANT AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je ne me cache pas derrière des slides',
            '• Je comprends les dynamiques humaines',
            '• J\'utilise l\'IA pour accélérer, pas simplifier',
            '• J\'accompagne l\'exécution',
            '• J\'assume une responsabilité réelle',
            '• Je crée un changement durable'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA structure.
Le consultant révèle, aligne et accompagne le changement réel.

Dans un monde où les réponses sont instantanées :
👉 le discernement devient la vraie expertise.`
}

// Contenu de la formation "Avocat / Juriste face à l'IA"
export const avocatIAContent: FormationContent = {
  formationId: 'formation_avocat',
  introduction: `Depuis l'arrivée de l'IA générative, on entend deux discours opposés :
• "L'IA va remplacer les avocats"
• "Le droit est trop complexe, trop humain, trop réglementé"

Les deux sont faux.

👉 Le droit ne disparaît pas.
👉 Mais une grande partie de la pratique juridique actuelle devient obsolète.

Pourquoi ?
Parce que le droit repose sur trois piliers :
1. L'accès à l'information juridique
2. La capacité d'analyse et de structuration
3. La responsabilité humaine et stratégique

👉 L'IA attaque violemment les deux premiers.
👉 Elle ne peut pas assumer le troisième.

Et c'est là que le métier se reconstruit.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'EFFONDRE DANS LA PRATIQUE JURIDIQUE',
      sections: [
        {
          title: '1.1 La fin du juriste "recherche + restitution"',
          content: [
            'Soyons lucides.',
            '',
            'Le juriste ou l\'avocat dont la valeur repose principalement sur :',
            '• rechercher de la jurisprudence,',
            '• synthétiser des textes,',
            '• rédiger des actes standards,',
            '• produire des notes juridiques descriptives,',
            '',
            '👉 voit cette valeur fortement diminuer.',
            '',
            'Des outils comme :',
            '• ChatGPT',
            '• Harvey',
            '• Lexis+ AI',
            '• Westlaw Precision',
            '',
            'peuvent déjà :',
            '• rechercher des textes,',
            '• proposer des synthèses,',
            '• générer des projets d\'actes,',
            '• comparer des clauses.',
            '',
            '👉 La recherche juridique brute n\'est plus un avantage compétitif.'
          ]
        },
        {
          title: '1.2 Les tâches juridiques déjà massivement assistées',
          content: [
            'Fortement assistées / automatisables :',
            '• recherche jurisprudentielle,',
            '• revue contractuelle standard,',
            '• rédaction d\'actes simples,',
            '• due diligence basique,',
            '• notes de synthèse descriptives.',
            '',
            '👉 Ce qui était facturé en heures devient :',
            '• plus rapide,',
            '• moins cher,',
            '• parfois internalisé par les clients.'
          ]
        },
        {
          title: '1.3 Le vrai danger : la banalisation du juridique',
          content: [
            'Avec l\'IA :',
            '• le droit semble "simple",',
            '• les réponses semblent immédiates,',
            '• le risque est minimisé à tort.',
            '',
            '👉 C\'est une illusion dangereuse.',
            '',
            'Car le droit n\'est pas :',
            '• une réponse,',
            '• un texte,',
            '• une règle isolée.',
            '',
            '👉 C\'est une prise de responsabilité dans un contexte réel, mouvant, conflictuel.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER JURIDIQUE EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'analyse le droit et je produis des actes."',
            '',
            'Après : "Je sécurise des décisions humaines dans des contextes juridiques complexes et risqués."',
            '',
            'Ce changement est radical.',
            '',
            'Le juriste n\'est plus :',
            '• un technicien du droit.',
            '',
            'Il devient :',
            '• un stratège juridique,',
            '• un protecteur du risque,',
            '• un conseiller de décision.'
          ]
        },
        {
          title: '2.2 Les 9 responsabilités réelles de l\'avocat / juriste augmenté',
          content: [
            '1. Comprendre le contexte réel (pas seulement juridique)',
            'Business, humain, politique.',
            '',
            '2. Identifier les risques pertinents',
            'Pas tous les risques théoriques.',
            '👉 Les risques réels.',
            '',
            '3. Hiérarchiser et arbitrer',
            'Tout n\'est pas également critique.',
            '',
            '4. Traduire le droit en décisions compréhensibles',
            'Pour des non-juristes.',
            '',
            '5. Challenger l\'illusion de sécurité',
            'Un contrat n\'élimine pas le conflit.',
            '',
            '6. Accompagner la stratégie',
            'Le droit comme levier, pas comme frein.',
            '',
            '7. Assumer la responsabilité du conseil',
            '',
            '👉 L\'IA ne signe pas l\'avis juridique.',
            '',
            '8. Protéger contre les usages naïfs de l\'IA',
            'Dans l\'entreprise comme chez les clients.',
            '',
            '9. Maintenir une éthique professionnelle forte',
            'Encore plus cruciale à l\'ère de l\'automatisation.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT JURIDIQUE (USAGE MAÎTRISÉ)',
      sections: [
        {
          title: '3.1 L\'IA pour la recherche et la veille juridique',
          content: [
            'Objectif :',
            '👉 Aller plus vite sans perdre en rigueur',
            '',
            'Outils clés :',
            '• Lexis+ AI → Recherche augmentée, jurisprudence',
            '• Westlaw Precision → Analyse de précédents',
            '• ChatGPT → Clarification, reformulation, hypothèses',
            '',
            '👉 L\'IA accélère la surface.',
            '👉 Le juriste approfondit le fond.'
          ]
        },
        {
          title: '3.2 L\'IA pour la rédaction juridique (avec contrôle strict)',
          content: [
            'IA utile pour :',
            '• premiers jets,',
            '• reformulations,',
            '• comparaison de clauses,',
            '• détection d\'incohérences.',
            '',
            'Mais :',
            '👉 aucun acte ne doit être validé sans lecture humaine experte.',
            '',
            'Pourquoi ?',
            '• hallucinations juridiques,',
            '• erreurs de contexte,',
            '• confusions de juridiction,',
            '• obsolescence de sources.'
          ]
        },
        {
          title: '3.3 L\'IA pour l\'analyse contractuelle',
          content: [
            'Outils comme :',
            '• Luminance',
            '• Kira',
            '',
            'permettent :',
            '• repérage rapide de clauses,',
            '• comparaison à des standards,',
            '• détection de risques.',
            '',
            'Mais :',
            '👉 le jugement sur l\'acceptabilité du risque est humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES JURIDIQUES CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Conseil en droit des affaires',
          content: [
            'IA :',
            '• aide à analyser des structures,',
            '• compare des montages.',
            '',
            'Avocat :',
            '• évalue les risques réels,',
            '• intègre la stratégie du client,',
            '• anticipe les contentieux.'
          ]
        },
        {
          title: '4.2 Contentieux',
          content: [
            'IA :',
            '• analyse des décisions passées,',
            '• suggère des arguments.',
            '',
            'Avocat :',
            '• lit le contexte,',
            '• adapte la stratégie,',
            '• gère l\'imprévisible (humain, juge, partie adverse).',
            '',
            '👉 Un procès ne se gagne pas avec des statistiques.'
          ]
        },
        {
          title: '4.3 Juriste d\'entreprise',
          content: [
            'IA :',
            '• accélère la production,',
            '• réduit le backlog.',
            '',
            'Juriste :',
            '• devient plus stratégique,',
            '• plus proche des décisions,',
            '• plus impliqué dans la gouvernance.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – RISQUES MAJEURS LIÉS À L\'IA EN DROIT',
      sections: [
        {
          title: '5.1 Hallucinations juridiques',
          content: [
            'L\'IA peut :',
            '• inventer des arrêts,',
            '• mélanger des régimes,',
            '• citer des textes obsolètes.',
            '',
            '👉 C\'est un risque professionnel majeur.'
          ]
        },
        {
          title: '5.2 Responsabilité et déontologie',
          content: [
            'Qui est responsable ?',
            '• pas l\'outil,',
            '• pas le modèle,',
            '• le professionnel.',
            '',
            '👉 Le devoir de conseil ne se délègue pas.'
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
            '• facturation horaire sur tâches standards,',
            '• recherche brute,',
            '• actes non différenciés.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• conseil stratégique,',
            '• gestion du risque,',
            '• accompagnement long terme,',
            '• spécialisation pointue,',
            '• crédibilité personnelle.',
            '',
            '👉 Le juriste devient un partenaire stratégique.'
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
            '• compréhension business,',
            '• lecture stratégique du risque,',
            '• pédagogie juridique,',
            '• maîtrise des outils IA,',
            '• éthique renforcée,',
            '• courage du conseil.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DE L\'AVOCAT / JURISTE AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends le contexte réel',
            '• Je hiérarchise les risques',
            '• J\'utilise l\'IA sans lui déléguer la responsabilité',
            '• Je sécurise les décisions humaines',
            '• Je maintiens une éthique forte',
            '• Je me positionne comme stratège'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA analyse le droit.
L'avocat / juriste assume la responsabilité des décisions dans le réel.

Dans un monde où les réponses sont faciles :
👉 la responsabilité devient la vraie valeur.`
}

// Contenu de la formation "Comptable / Expert-Comptable face à l'IA"
export const comptableIAContent: FormationContent = {
  formationId: 'formation_comptable',
  introduction: `Pendant longtemps, la valeur du comptable reposait sur :
• la maîtrise des règles,
• la rigueur,
• la capacité à produire des états fiables,
• la conformité.

Puis sont arrivés :
• la dématérialisation,
• l'automatisation,
• les logiciels comptables intelligents,
• et désormais… l'IA générative.

Résultat :
• beaucoup de tâches historiques disparaissent,
• les clients ne veulent plus "des chiffres",
• ils veulent comprendre, anticiper, décider.

👉 La comptabilité ne meurt pas.
Elle quitte le terrain de la production pour celui de la responsabilité.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'AUTOMATISE (ET NE REVIENDRA PAS)',
      sections: [
        {
          title: '1.1 La fin de la saisie comptable comme valeur',
          content: [
            'Soyons clairs.',
            '',
            'La saisie manuelle :',
            '• factures,',
            '• écritures récurrentes,',
            '• rapprochements simples,',
            '',
            '👉 n\'a plus de valeur économique forte.',
            '',
            'Des outils comme :',
            '• Pennylane',
            '• Sage',
            '• QuickBooks',
            '• Xero',
            '',
            'intègrent déjà :',
            '• OCR intelligent,',
            '• catégorisation automatique,',
            '• rapprochements bancaires,',
            '• contrôles de cohérence.',
            '',
            '👉 La production brute est une commodité.'
          ]
        },
        {
          title: '1.2 Les tâches comptables déjà massivement assistées',
          content: [
            'Fortement automatisables :',
            '• saisie et classement,',
            '• rapprochements bancaires,',
            '• écritures standards,',
            '• déclarations simples,',
            '• reporting basique.',
            '',
            '👉 Le danger n\'est pas la perte de travail.',
            '👉 Le danger est de rester bloqué sur ces tâches.'
          ]
        },
        {
          title: '1.3 Le vrai risque : devenir invisible',
          content: [
            'Quand le client pense : "Le logiciel fait la compta."',
            '',
            'Alors :',
            '• la valeur perçue chute,',
            '• le prix devient le seul critère,',
            '• la relation se fragilise.',
            '',
            '👉 Le comptable doit redevenir visible par la valeur, pas par l\'effort.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER COMPTABLE EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je produis des comptes conformes."',
            '',
            'Après : "Je garantis la fiabilité financière et j\'aide à la prise de décision économique."',
            '',
            'La conformité devient :',
            '• un prérequis,',
            '• pas une différenciation.'
          ]
        },
        {
          title: '2.2 Les 9 responsabilités réelles du comptable / expert-comptable augmenté',
          content: [
            '1. Garantir la fiabilité',
            'L\'IA accélère, mais peut se tromper.',
            '',
            '2. Détecter les anomalies pertinentes',
            'Pas toutes.',
            '👉 Les dangereuses.',
            '',
            '3. Traduire les chiffres en décisions',
            'Un bilan sans lecture est inutile.',
            '',
            '4. Anticiper',
            'Trésorerie, risques, seuils.',
            '',
            '5. Accompagner la stratégie du dirigeant',
            'Pas seulement clôturer l\'exercice.',
            '',
            '6. Protéger contre les erreurs d\'automatisation',
            'Une erreur IA peut coûter très cher.',
            '',
            '7. Maintenir une relation de confiance',
            'La comptabilité est un métier de confiance.',
            '',
            '8. Former les clients',
            'À comprendre leurs chiffres.',
            '',
            '9. Assumer la responsabilité finale',
            '',
            '👉 Le logiciel ne signe pas les comptes.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU COMPTABLE (USAGES MAÎTRISÉS)',
      sections: [
        {
          title: '3.1 L\'IA pour la production (contrôlée)',
          content: [
            'Oui, l\'IA doit être utilisée pour :',
            '• pré-catégoriser,',
            '• suggérer des écritures,',
            '• détecter des incohérences,',
            '• accélérer la clôture.',
            '',
            'Mais :',
            '👉 tout doit être validé humainement.'
          ]
        },
        {
          title: '3.2 L\'IA pour l\'analyse financière',
          content: [
            'Outils et usages :',
            '• ChatGPT → Lecture de bilans, explications pédagogiques',
            '• Power BI → Tableaux de bord financiers',
            '• Pennylane → Analyse temps réel de la trésorerie',
            '',
            '👉 L\'IA aide à expliquer.',
            '👉 Le comptable aide à décider.'
          ]
        },
        {
          title: '3.3 L\'IA pour la détection des risques',
          content: [
            'IA utile pour :',
            '• repérer des anomalies,',
            '• détecter des tendances dangereuses,',
            '• alerter en amont.',
            '',
            'Mais :',
            '👉 le jugement sur le risque est humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS ET APPROFONDIS',
      sections: [
        {
          title: '4.1 PME classique',
          content: [
            'Avant IA :',
            '• clôture lente,',
            '• peu de visibilité,',
            '• relation annuelle.',
            '',
            'Après IA :',
            '• données quasi temps réel,',
            '• alertes,',
            '• accompagnement continu.',
            '',
            '👉 Le comptable devient copilote du dirigeant.'
          ]
        },
        {
          title: '4.2 Cabinet comptable',
          content: [
            'IA permet :',
            '• réduire la charge répétitive,',
            '• absorber plus de dossiers,',
            '• améliorer la qualité.',
            '',
            'Mais :',
            '👉 la valeur se déplace vers :',
            '• conseil,',
            '• spécialisation,',
            '• relation.'
          ]
        },
        {
          title: '4.3 Expert-comptable conseil',
          content: [
            'Nouveaux rôles :',
            '• aide à la structuration financière,',
            '• anticipation des difficultés,',
            '• accompagnement stratégique.',
            '',
            '👉 La mission devient continue.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – COMPTABILITÉ, FISCALITÉ ET IA',
      sections: [
        {
          title: '5.1 Fiscalité : zone à haut risque',
          content: [
            'L\'IA peut :',
            '• expliquer des règles,',
            '• simuler des options.',
            '',
            'Mais :',
            '• une mauvaise interprétation fiscale coûte très cher.',
            '',
            '👉 La validation humaine est non négociable.'
          ]
        },
        {
          title: '5.2 Responsabilité professionnelle',
          content: [
            'L\'expert-comptable :',
            '• reste juridiquement responsable,',
            '• même si l\'outil s\'est trompé.',
            '',
            '👉 L\'IA n\'est jamais responsable devant l\'administration.'
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
            '• facturation à la saisie,',
            '• production brute,',
            '• conformité seule.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• accompagnement,',
            '• analyse,',
            '• conseil,',
            '• relation de confiance,',
            '• spécialisation sectorielle.'
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
            '• analyse financière avancée,',
            '• pédagogie,',
            '• compréhension IA,',
            '• conseil stratégique,',
            '• éthique professionnelle,',
            '• relation client.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU COMPTABLE / EXPERT-COMPTABLE AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• J\'utilise l\'IA pour produire plus vite',
            '• Je vérifie systématiquement',
            '• Je traduis les chiffres en décisions',
            '• J\'anticipe les risques',
            '• Je maintiens la confiance',
            '• J\'assume la responsabilité finale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA produit des chiffres.
Le comptable garantit leur fiabilité et leur utilité réelle.

Dans un monde automatisé :
👉 la confiance devient la vraie valeur économique.`
}

// Contenu de la formation "Ressources Humaines / Recruteur face à l'IA"
export const rhIAContent: FormationContent = {
  formationId: 'formation_rh',
  introduction: `L'IA est en train de pénétrer les Ressources Humaines plus vite que partout ailleurs.

Pourquoi ?
• beaucoup de données,
• des process standardisés,
• une pression forte sur le recrutement,
• une volonté d'objectiver l'humain.

👉 C'est précisément ce qui rend le sujet explosif.

Car les RH ne gèrent pas :
• des leads,
• des tickets,
• des chiffres.

👉 Elles gèrent des trajectoires humaines, des carrières, des identités professionnelles.

Et l'IA, mal utilisée, peut :
• renforcer les biais,
• déshumaniser les décisions,
• créer une défiance durable,
• exposer juridiquement l'entreprise.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'AUTOMATISE (ET POURQUOI C\'EST DANGEREUX)',
      sections: [
        {
          title: '1.1 La fin du recruteur "tri de CV"',
          content: [
            'Soyons directs.',
            '',
            'Le recruteur dont la valeur repose principalement sur :',
            '• trier des CV,',
            '• faire des préqualifications standard,',
            '• planifier des entretiens,',
            '• gérer des pipelines,',
            '',
            '👉 voit cette valeur s\'effondrer.',
            '',
            'Des outils comme :',
            '• LinkedIn Recruiter',
            '• HireVue',
            '• Pymetrics',
            '• Eightfold AI',
            '',
            'peuvent déjà :',
            '• scorer des profils,',
            '• détecter des correspondances,',
            '• automatiser des étapes entières.',
            '',
            '👉 Le tri n\'est plus une compétence humaine.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà faire en RH',
          content: [
            'Fortement automatisable :',
            '• sourcing initial,',
            '• matching compétences/postes,',
            '• pré-entretiens standard,',
            '• planification,',
            '• reporting RH,',
            '• analyses de turnover.',
            '',
            '👉 Mais attention :',
            '',
            'Ce que l\'IA optimise, elle le fige.',
            '',
            'Et figer de mauvais critères est extrêmement dangereux.'
          ]
        },
        {
          title: '1.3 Le vrai risque : l\'illusion d\'objectivité',
          content: [
            'Les outils RH IA sont souvent vendus comme : "objectifs", "neutres", "basés sur la data".',
            '',
            'C\'est faux.',
            '',
            '👉 Ils reproduisent et amplifient les biais existants :',
            '• biais historiques de recrutement,',
            '• biais culturels,',
            '• biais de genre,',
            '• biais de parcours.',
            '',
            '👉 L\'IA en RH sans esprit critique est une bombe à retardement.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LA FONCTION RH EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je gère des process RH."',
            '',
            'Après : "Je crée les conditions pour que des humains contribuent durablement et sainement à une organisation."',
            '',
            'Les RH ne sont plus :',
            '• un service support.',
            '',
            'Elles deviennent :',
            '• une fonction stratégique de stabilité humaine.'
          ]
        },
        {
          title: '2.2 Les 9 responsabilités réelles des RH augmentées',
          content: [
            '1. Définir ce qui est acceptable',
            'Tout ce qui est techniquement possible ne doit pas être fait.',
            '',
            '2. Protéger l\'équité',
            'Pas l\'égalité naïve.',
            '👉 L\'équité réelle.',
            '',
            '3. Comprendre les biais (humains et algorithmiques)',
            'Et les corriger activement.',
            '',
            '4. Traduire les besoins humains',
            'Pas seulement les besoins business.',
            '',
            '5. Garantir la transparence',
            'Les collaborateurs doivent comprendre les décisions.',
            '',
            '6. Accompagner les managers',
            'L\'IA ne remplace pas le management.',
            '',
            '7. Préserver la confiance',
            'Une confiance perdue en RH est quasi irrécupérable.',
            '',
            '8. Assumer la responsabilité des décisions',
            '',
            '👉 L\'outil n\'est jamais responsable.',
            '',
            '9. Anticiper les transformations de métiers',
            'L\'IA modifie les rôles, les carrières, les identités.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DES RH (USAGES RESPONSABLES)',
      sections: [
        {
          title: '3.1 L\'IA pour le sourcing et la présélection (avec garde-fous)',
          content: [
            'Objectif :',
            '👉 Gagner du temps sans perdre l\'humain',
            '',
            'Outils utiles :',
            '• LinkedIn Recruiter → Sourcing intelligent',
            '• ChatGPT → Reformulation d\'annonces, analyse de profils (avec recul)',
            '',
            '👉 Jamais de décision automatique sans validation humaine.'
          ]
        },
        {
          title: '3.2 L\'IA pour les entretiens (zone rouge)',
          content: [
            'Certains outils analysent :',
            '• la voix,',
            '• le langage corporel,',
            '• les micro-expressions.',
            '',
            '👉 C\'est extrêmement risqué :',
            '• scientifiquement discutable,',
            '• juridiquement sensible,',
            '• humainement violent.',
            '',
            '👉 À éviter dans la majorité des cas.'
          ]
        },
        {
          title: '3.3 L\'IA pour la gestion des talents',
          content: [
            'IA utile pour :',
            '• identifier des compétences internes,',
            '• proposer des parcours,',
            '• anticiper des besoins.',
            '',
            'Outils :',
            '• Eightfold AI',
            '• Gloat',
            '',
            'Mais :',
            '👉 la mobilité forcée ou opaque détruit la confiance.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES RH CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Recrutement responsable',
          content: [
            'IA :',
            '• aide à élargir le sourcing,',
            '• réduit certaines tâches.',
            '',
            'RH :',
            '• garde la décision,',
            '• explique les choix,',
            '• protège l\'équité.'
          ]
        },
        {
          title: '4.2 Gestion des performances',
          content: [
            'IA :',
            '• détecte des tendances,',
            '• alerte sur des risques.',
            '',
            'RH :',
            '• contextualise,',
            '• évite la surveillance permanente,',
            '• protège la dignité.'
          ]
        },
        {
          title: '4.3 Reskilling et transformation des métiers',
          content: [
            'IA :',
            '• cartographie les compétences,',
            '• identifie les écarts.',
            '',
            'RH :',
            '• accompagne les trajectoires,',
            '• rassure,',
            '• forme,',
            '• donne du sens.',
            '',
            '👉 La transformation sans accompagnement crée de la peur.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – DROIT DU TRAVAIL, IA ET RESPONSABILITÉ',
      sections: [
        {
          title: '5.1 Zones juridiques à haut risque',
          content: [
            '• décisions automatisées,',
            '• absence de transparence,',
            '• discrimination indirecte,',
            '• surveillance excessive.',
            '',
            '👉 Les RH sont juridiquement en première ligne.'
          ]
        },
        {
          title: '5.2 Le devoir d\'explicabilité',
          content: [
            'Tout collaborateur doit pouvoir comprendre :',
            '• pourquoi il a été évalué ainsi,',
            '• pourquoi il n\'a pas été retenu,',
            '• comment une décision a été prise.',
            '',
            '👉 "C\'est l\'algorithme" n\'est pas une réponse acceptable.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – MODÈLES RH POST-IA',
      sections: [
        {
          title: '6.1 Ce qui se dévalue',
          content: [
            '• RH purement administratives,',
            '• process déshumanisés,',
            '• décisions opaques.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• accompagnement humain,',
            '• lecture fine des situations,',
            '• médiation,',
            '• éthique,',
            '• confiance.',
            '',
            '👉 Les RH deviennent gardiens de l\'humain.'
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
            '• psychologie du travail,',
            '• compréhension IA,',
            '• droit social,',
            '• éthique algorithmique,',
            '• communication sensible,',
            '• courage managérial.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DES RH AUGMENTÉES',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends les biais IA',
            '• Je pose des limites claires',
            '• Je protège la transparence',
            '• Je garde l\'humain au centre',
            '• Je forme les managers',
            '• J\'assume la responsabilité finale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA trie.
Les RH assument, expliquent et protègent.

Dans un monde automatisé :
👉 la confiance devient l'actif le plus fragile et le plus précieux.`
}

// Contenu de la formation "Médecin / Professionnel de Santé face à l'IA"
export const medecinIAContent: FormationContent = {
  formationId: 'formation_medecin',
  introduction: `Depuis toujours, la médecine repose sur un équilibre fragile entre :
• savoir scientifique,
• expérience clinique,
• jugement humain,
• relation patient.

L'IA est venue bousculer cet équilibre en s'attaquant à deux piliers historiques :
• l'accès au savoir médical,
• l'aide au raisonnement diagnostique.

Aujourd'hui, une IA peut :
• analyser des imageries,
• proposer des diagnostics différentiels,
• suggérer des protocoles,
• synthétiser des milliers d'articles,
• détecter des patterns invisibles à l'œil humain.

👉 Mais l'IA ne soigne pas.
👉 Elle influence des décisions de soin.

Et influencer une décision médicale, c'est engager une responsabilité éthique et humaine immense.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI CHANGE RADICALEMENT DANS LA MÉDECINE',
      sections: [
        {
          title: '1.1 La fin du monopole du savoir médical',
          content: [
            'Pendant des siècles, le médecin détenait :',
            '• le savoir,',
            '• l\'interprétation,',
            '• la décision.',
            '',
            'Aujourd\'hui :',
            '• le patient a accès à l\'information,',
            '• l\'IA a accès à toute la littérature,',
            '• les recommandations sont instantanées.',
            '',
            'Des outils comme :',
            '• UpToDate',
            '• PubMed',
            '• ChatGPT',
            '',
            'ont profondément modifié la dynamique.',
            '',
            '👉 Le savoir n\'est plus rare.',
            'Le discernement l\'est.'
          ]
        },
        {
          title: '1.2 Les actes médicaux déjà fortement assistés par l\'IA',
          content: [
            'Fortement assistés (et parfois meilleurs que l\'humain seul) :',
            '• lecture d\'imagerie (radiologie, dermatologie),',
            '• détection d\'anomalies biologiques,',
            '• triage de patients,',
            '• aide au diagnostic différentiel,',
            '• prédiction de risques.',
            '',
            '👉 Cela ne signifie pas remplacement.',
            '👉 Cela signifie déplacement de la responsabilité.'
          ]
        },
        {
          title: '1.3 Le vrai danger : la médecine "assistée sans conscience"',
          content: [
            'Quand :',
            '• le praticien fait confiance sans vérifier,',
            '• le patient croit que "l\'IA sait",',
            '• l\'hôpital cherche la productivité avant le soin,',
            '',
            '👉 le risque systémique augmente fortement.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE RÔLE DU PROFESSIONNEL DE SANTÉ EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je pose un diagnostic et je prescris."',
            '',
            'Après : "Je prends des décisions médicales complexes en m\'appuyant sur des outils puissants, tout en assumant la responsabilité humaine, clinique et éthique."',
            '',
            '👉 Le médecin devient chef d\'orchestre du soin, pas simple exécutant d\'un protocole.'
          ]
        },
        {
          title: '2.2 Les 10 responsabilités nouvelles du médecin augmenté',
          content: [
            '1. Évaluer la fiabilité des outils IA',
            'Toutes les IA médicales ne se valent pas.',
            '',
            '2. Comprendre les limites des modèles',
            'Biais de données, populations sous-représentées.',
            '',
            '3. Maintenir le raisonnement clinique',
            'Ne jamais déléguer la pensée médicale.',
            '',
            '4. Assumer la décision finale',
            '',
            '👉 L\'IA ne signe pas l\'ordonnance.',
            '',
            '5. Expliquer au patient',
            'Pourquoi cette décision, avec ou sans IA.',
            '',
            '6. Gérer l\'incertitude',
            'L\'IA n\'élimine pas l\'aléa médical.',
            '',
            '7. Protéger la relation thérapeutique',
            'Sans confiance, il n\'y a pas de soin.',
            '',
            '8. Résister à la sur-automatisation',
            'Plus rapide ≠ meilleur.',
            '',
            '9. Participer à la gouvernance IA',
            'Les médecins doivent être impliqués dans les choix.',
            '',
            '10. Défendre l\'éthique du soin',
            'Même sous pression économique.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT CLINIQUE (USAGES MAÎTRISÉS)',
      sections: [
        {
          title: '3.1 L\'IA pour l\'aide au diagnostic',
          content: [
            'Usages pertinents :',
            '• diagnostic différentiel,',
            '• rappel de pathologies rares,',
            '• hiérarchisation des hypothèses.',
            '',
            'Outils et contextes :',
            '• IBM Watson Health',
            '• Isabel',
            '• ChatGPT (usage exploratoire uniquement)',
            '',
            '👉 Jamais comme oracle.',
            'Toujours comme aide.'
          ]
        },
        {
          title: '3.2 L\'IA en imagerie médicale',
          content: [
            'Radiologie, dermatologie, ophtalmologie.',
            '',
            'IA :',
            '• détecte,',
            '• alerte,',
            '• priorise.',
            '',
            'Médecin :',
            '• interprète,',
            '• contextualise,',
            '• décide.',
            '',
            '👉 L\'erreur humaine + IA mal comprise est plus dangereuse que l\'erreur humaine seule.'
          ]
        },
        {
          title: '3.3 L\'IA pour la charge administrative (bénéfice réel)',
          content: [
            'IA utile pour :',
            '• comptes rendus,',
            '• synthèses de dossiers,',
            '• codage,',
            '• préparation de consultations.',
            '',
            '👉 Libérer du temps médical est l\'un des meilleurs usages de l\'IA.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES MÉDICAUX CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Médecine générale',
          content: [
            'IA :',
            '• aide au tri,',
            '• rappelle des diagnostics rares,',
            '• prépare la consultation.',
            '',
            'Médecin :',
            '• écoute,',
            '• observe,',
            '• contextualise,',
            '• décide.',
            '',
            '👉 La médecine générale devient encore plus humaine, pas moins.'
          ]
        },
        {
          title: '4.2 Médecine hospitalière',
          content: [
            'IA :',
            '• aide à prioriser,',
            '• alerte sur des risques,',
            '• optimise les flux.',
            '',
            'Médecin :',
            '• arbitre sous contrainte,',
            '• gère l\'imprévisible,',
            '• protège le patient.'
          ]
        },
        {
          title: '4.3 Spécialités à forte technicité',
          content: [
            'IA :',
            '• augmente la précision,',
            '• réduit certaines erreurs.',
            '',
            'Mais :',
            '👉 le risque de surconfiance est maximal.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – RELATION PATIENT, IA ET CONFIANCE',
      sections: [
        {
          title: '5.1 Le patient augmenté par l\'IA',
          content: [
            'Les patients arrivent avec :',
            '• des diagnostics IA,',
            '• des hypothèses,',
            '• parfois des certitudes erronées.',
            '',
            'Le rôle du médecin :',
            '• écouter sans mépris,',
            '• expliquer sans condescendance,',
            '• rétablir un cadre rationnel.'
          ]
        },
        {
          title: '5.2 Transparence et pédagogie',
          content: [
            'Dire : "Une IA m\'a aidé à explorer des pistes."',
            '',
            'Est souvent mieux perçu que : "Faites-moi confiance."',
            '',
            '👉 La confiance moderne passe par l\'explication.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – ÉTHIQUE, DROIT ET RESPONSABILITÉ',
      sections: [
        {
          title: '6.1 Responsabilité médicale',
          content: [
            'En cas d\'erreur :',
            '• le médecin est responsable,',
            '• pas l\'outil,',
            '• pas l\'éditeur du modèle.',
            '',
            '👉 La responsabilité ne se délègue jamais.'
          ]
        },
        {
          title: '6.2 Données de santé et IA',
          content: [
            '• données sensibles,',
            '• risques de fuite,',
            '• réutilisation abusive.',
            '',
            '👉 Le professionnel de santé devient gardien des données patient.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – LE SYSTÈME DE SANTÉ FACE À L\'IA',
      sections: [
        {
          title: '7.1 Le risque systémique',
          content: [
            'IA mal intégrée =',
            '• standardisation abusive,',
            '• perte d\'autonomie clinique,',
            '• pression économique accrue.'
          ]
        },
        {
          title: '7.2 Le rôle politique des soignants',
          content: [
            'Les soignants doivent :',
            '• participer aux décisions,',
            '• refuser certaines automatisations,',
            '• défendre le sens du soin.'
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
            '• esprit critique renforcé,',
            '• compréhension des IA médicales,',
            '• pédagogie patient,',
            '• éthique clinique,',
            '• gouvernance des outils,',
            '• résilience professionnelle.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DU MÉDECIN AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends les limites des IA',
            '• Je garde le raisonnement clinique',
            '• J\'explique mes décisions',
            '• Je protège la relation patient',
            '• Je refuse l\'automatisation aveugle',
            '• J\'assume la responsabilité finale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA calcule.
Le médecin soigne, explique et assume.

Dans un monde de technologies puissantes :
👉 l'humanité du soin devient la compétence la plus précieuse.`
}

// Contenu de la formation "Coach / Thérapeute face à l'IA"
export const coachIAContent: FormationContent = {
  formationId: 'formation_coach',
  introduction: `Depuis l'arrivée des IA conversationnelles, beaucoup de coachs et de thérapeutes ont ressenti un malaise diffus.

Pourquoi ?
• l'IA écoute sans juger,
• répond instantanément,
• reformule correctement,
• pose des questions "pertinentes",
• est disponible 24/7.

Certains patients / clients disent : "Ça m'aide déjà beaucoup."

👉 C'est vrai. Et c'est dangereux si on s'arrête là.

Car ce que l'IA simule très bien :
• l'écoute,
• la reformulation,
• la structure verbale,

👉 ce qu'elle ne fait pas :
• contenir émotionnellement,
• sentir les ruptures,
• porter la responsabilité du cadre,
• gérer le transfert et le contre-transfert,
• protéger psychiquement une personne vulnérable.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI SE DÉVALUE (ET CE QUI N\'A JAMAIS ÉTÉ LE CŒUR DU MÉTIER)',
      sections: [
        {
          title: '1.1 La fin du coach "outil / méthode"',
          content: [
            'Soyons honnêtes.',
            '',
            'Le coach dont la valeur repose principalement sur :',
            '• des modèles standards,',
            '• des grilles de questionnement,',
            '• des exercices génériques,',
            '• des protocoles figés,',
            '',
            '👉 voit cette valeur fortement attaquée.',
            '',
            'Des IA comme ChatGPT peuvent :',
            '• poser des questions ouvertes,',
            '• proposer des exercices,',
            '• reformuler des blocages,',
            '• simuler un dialogue réflexif.',
            '',
            '👉 La méthode seule n\'est plus un différenciateur.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà faire (et pourquoi ça trompe)',
          content: [
            'L\'IA est très forte pour :',
            '• structurer une réflexion,',
            '• aider à verbaliser,',
            '• normaliser des émotions,',
            '• proposer des pistes.',
            '',
            'Mais elle :',
            '• ne sent pas la dissociation,',
            '• ne perçoit pas la détresse réelle,',
            '• ne détecte pas les signaux faibles de rupture,',
            '• n\'est pas responsable si la personne va mal.',
            '',
            '👉 L\'illusion de sécurité est le vrai danger.'
          ]
        },
        {
          title: '1.3 Le risque majeur : la pseudo-thérapie automatisée',
          content: [
            'Quand une personne :',
            '• remplace un accompagnement humain par une IA,',
            '• confie des éléments sensibles sans cadre,',
            '• n\'a aucun tiers responsable,',
            '',
            '👉 le risque psychique augmente silencieusement.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE RÔLE DU COACH / THÉRAPEUTE EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "J\'aide les gens à avancer."',
            '',
            'Après : "Je crée un cadre sécurisé, responsable et humain dans lequel une transformation peut avoir lieu."',
            '',
            '👉 Le cœur du métier n\'est pas :',
            '• la parole,',
            '• le conseil,',
            '• l\'exercice.',
            '',
            '👉 C\'est le cadre et la présence humaine.'
          ]
        },
        {
          title: '2.2 Les 10 responsabilités non automatisables du coach / thérapeute',
          content: [
            '1. Poser et tenir un cadre',
            'Temps, limites, posture, responsabilité.',
            '',
            '2. Contenir émotionnellement',
            'Supporter ce qui est déposé sans fuir.',
            '',
            '3. Lire le non-verbal',
            'Silences, micro-ruptures, incohérences.',
            '',
            '4. Gérer la relation',
            'Alliance, résistances, projections.',
            '',
            '5. Adapter en temps réel',
            'Sortir du protocole si nécessaire.',
            '',
            '6. Savoir arrêter',
            'Quand continuer serait dangereux.',
            '',
            '7. Assumer une responsabilité humaine',
            '',
            '👉 L\'IA ne porte aucune responsabilité.',
            '',
            '8. Orienter si nécessaire',
            'Vers un autre professionnel.',
            '',
            '9. Maintenir une éthique stricte',
            'Même quand le client "en redemande".',
            '',
            '10. Protéger la personne contre elle-même parfois',
            'Ce que l\'IA ne fera jamais.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DU COACH / THÉRAPEUTE (USAGES SAINS)',
      sections: [
        {
          title: '3.1 L\'IA pour la préparation et la réflexion du praticien',
          content: [
            'Usages pertinents :',
            '• structurer des hypothèses,',
            '• préparer des séances,',
            '• réfléchir à des axes,',
            '• analyser ses propres notes (anonymisées).',
            '',
            'Outils :',
            '• ChatGPT',
            '• Notion',
            '',
            '👉 L\'IA aide le praticien, pas le client directement.'
          ]
        },
        {
          title: '3.2 L\'IA pour la formation et la supervision (zone utile)',
          content: [
            'IA utile pour :',
            '• expliquer des concepts,',
            '• comparer des approches,',
            '• simuler des cas (fictifs),',
            '• réfléchir à l\'éthique.',
            '',
            '👉 Elle ne remplace pas :',
            '• la supervision humaine,',
            '• l\'analyse clinique réelle.'
          ]
        },
        {
          title: '3.3 L\'IA et les clients : ligne rouge claire',
          content: [
            '⚠️ À ne pas faire :',
            '• laisser l\'IA accompagner un client en souffrance,',
            '• déléguer des échanges thérapeutiques,',
            '• proposer l\'IA comme substitut relationnel.',
            '',
            '👉 Le cadre doit être explicitement humain.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Coach professionnel (dirigeants, managers)',
          content: [
            'IA :',
            '• aide à structurer des enjeux,',
            '• clarifie des situations complexes.',
            '',
            'Coach :',
            '• travaille la posture,',
            '• confronte les angles morts,',
            '• gère l\'ego, la peur, la responsabilité.',
            '',
            '👉 Le vrai travail se fait dans l\'inconfort relationnel.'
          ]
        },
        {
          title: '4.2 Thérapie individuelle',
          content: [
            'IA :',
            '• peut aider à verbaliser entre séances (avec cadre).',
            '',
            'Thérapeute :',
            '• contient,',
            '• interprète,',
            '• sécurise,',
            '• ajuste.',
            '',
            '👉 La présence réelle est irremplaçable.'
          ]
        },
        {
          title: '4.3 Accompagnement long terme',
          content: [
            'IA :',
            '• soutient la réflexion,',
            '• aide à structurer.',
            '',
            'Thérapeute :',
            '• observe l\'évolution,',
            '• repère les cycles,',
            '• gère les moments critiques.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – ÉTHIQUE, DÉRIVES ET RESPONSABILITÉ',
      sections: [
        {
          title: '5.1 Le danger du "toujours disponible"',
          content: [
            'L\'IA est :',
            '• toujours là,',
            '• toujours répondante.',
            '',
            'Mais :',
            '• la frustration,',
            '• l\'attente,',
            '• le manque',
            'font partie du processus thérapeutique.',
            '',
            '👉 La disponibilité permanente peut bloquer la maturation psychique.'
          ]
        },
        {
          title: '5.2 Responsabilité morale et légale',
          content: [
            'En cas de décompensation :',
            '• l\'IA n\'est pas responsable,',
            '• le praticien humain l\'est (s\'il a délégué).',
            '',
            '👉 La délégation est une faute potentielle.'
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
            '• coaching générique,',
            '• scripts,',
            '• promesses rapides,',
            '• méthodes miracles.'
          ]
        },
        {
          title: '6.2 Ce qui prend de la valeur',
          content: [
            '• profondeur,',
            '• cadre clair,',
            '• responsabilité assumée,',
            '• relation humaine stable,',
            '• éthique forte.',
            '',
            '👉 Le coach devient un repère, pas un outil.'
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
            '• présence thérapeutique,',
            '• compréhension des limites IA,',
            '• éthique renforcée,',
            '• capacité de discernement,',
            '• supervision continue,',
            '• courage de dire non.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 8 – CHECKLIST DU COACH / THÉRAPEUTE AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je ne délègue jamais la relation',
            '• Je pose un cadre clair',
            '• J\'utilise l\'IA pour réfléchir, pas accompagner',
            '• Je protège mes clients',
            '• Je sais orienter',
            '• J\'assume la responsabilité humaine'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA parle.
Le coach / thérapeute contient, sécurise et transforme.

Dans un monde de paroles faciles :
👉 la présence humaine devient sacrée.`
}

// Contenu de la formation "Agent Immobilier face à l'IA"
export const immobilierIAContent: FormationContent = {
  formationId: 'formation_immobilier',
  introduction: `L'une des plus grandes erreurs sur l'immobilier est de croire que c'est :
• un marché rationnel,
• une question de prix,
• une affaire de données.

En réalité, l'immobilier est :
• une décision émotionnelle sous contrainte financière,
• souvent liée à :
• un divorce,
• une naissance,
• un décès,
• une peur de l'avenir,
• un projet de vie.

👉 L'IA peut traiter des données.
Elle ne peut pas porter ce poids humain.`,
  parts: [
    {
      title: 'PARTIE 1 – CE QUI S\'AUTOMATISE (ET CE QUI ÉTAIT DÉJÀ FAIBLE)',
      sections: [
        {
          title: '1.1 La fin de l\'agent immobilier "annonces + visites"',
          content: [
            'Soyons lucides.',
            '',
            'L\'agent dont la valeur repose principalement sur :',
            '• publier des annonces,',
            '• ouvrir des portes,',
            '• faire visiter mécaniquement,',
            '• relayer des infos disponibles partout,',
            '',
            '👉 voit sa valeur chuter fortement.',
            '',
            'Pourquoi ?',
            '',
            'Parce que des plateformes comme :',
            '• SeLoger',
            '• Leboncoin',
            '• Bien\'ici',
            '',
            'ont déjà :',
            '• démocratisé l\'accès à l\'offre,',
            '• rendu l\'information publique,',
            '• standardisé les annonces.',
            '',
            '👉 L\'information immobilière n\'est plus rare.'
          ]
        },
        {
          title: '1.2 Ce que l\'IA sait déjà très bien faire en immobilier',
          content: [
            'Fortement automatisable :',
            '• estimation de prix (AVM),',
            '• rédaction d\'annonces,',
            '• retouche photo,',
            '• visites virtuelles,',
            '• tri de leads,',
            '• réponses aux questions simples.',
            '',
            'Avec :',
            '• MeilleursAgents',
            '• PriceHubble',
            '• ChatGPT',
            '• Matterport',
            '',
            '👉 Tout ce qui est descriptif et répétitif devient automatisable.'
          ]
        },
        {
          title: '1.3 Le vrai risque : devenir un simple intermédiaire technique',
          content: [
            'Quand :',
            '• le client pense qu\'il peut tout faire seul,',
            '• l\'agent n\'apporte pas de valeur stratégique,',
            '• la relation est faible,',
            '',
            '👉 la commission devient incompréhensible.',
            '',
            'Et donc contestée.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 2 – REDÉFINIR LE MÉTIER D\'AGENT IMMOBILIER EN 2025',
      sections: [
        {
          title: '2.1 Le basculement fondamental',
          content: [
            'Avant : "Je vends un bien immobilier."',
            '',
            'Après : "J\'aide des humains à prendre une décision patrimoniale majeure dans un contexte émotionnel, juridique et financier complexe."',
            '',
            '👉 Ce n\'est plus un métier de diffusion.',
            '👉 C\'est un métier de décision accompagnée.'
          ]
        },
        {
          title: '2.2 Les 10 responsabilités réelles de l\'agent immobilier augmenté',
          content: [
            '1. Lire le contexte humain',
            'Acheter / vendre n\'est jamais neutre.',
            '',
            '2. Traduire le marché réel',
            'Pas les moyennes.',
            '👉 La réalité locale.',
            '',
            '3. Sécuriser juridiquement',
            'Les erreurs coûtent très cher.',
            '',
            '4. Gérer les attentes irréalistes',
            'Prix, délais, projections.',
            '',
            '5. Filtrer et qualifier',
            'Protéger le temps et l\'énergie.',
            '',
            '6. Négocier humainement',
            'La négociation n\'est pas mathématique.',
            '',
            '7. Absorber la charge émotionnelle',
            'Stress, peur, frustration.',
            '',
            '8. Accompagner jusqu\'au bout',
            'Signature ≠ fin du travail.',
            '',
            '9. Assumer la responsabilité morale',
            'Une mauvaise vente détruit une relation.',
            '',
            '10. Être digne de la confiance donnée',
            '',
            '👉 La clé absolue.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 3 – L\'IA COMME ASSISTANT DE L\'AGENT IMMOBILIER (USAGES INTELLIGENTS)',
      sections: [
        {
          title: '3.1 L\'IA pour l\'estimation (avec recul)',
          content: [
            'Outils :',
            '• PriceHubble',
            '• MeilleursAgents',
            '',
            '👉 L\'IA donne :',
            '• une base,',
            '• une fourchette.',
            '',
            '👉 L\'agent :',
            '• contextualise,',
            '• corrige,',
            '• explique.',
            '',
            '⚠️ Présenter une estimation IA comme vérité absolue est une faute professionnelle.'
          ]
        },
        {
          title: '3.2 L\'IA pour la mise en valeur des biens',
          content: [
            'IA utile pour :',
            '• rédaction d\'annonces adaptées,',
            '• home staging virtuel,',
            '• retouches photo,',
            '• segmentation d\'audience.',
            '',
            'Outils :',
            '• ChatGPT',
            '• Canva',
            '• Matterport',
            '',
            '👉 Le bien est mieux présenté.',
            '👉 Mais la décision se fait en réel.'
          ]
        },
        {
          title: '3.3 L\'IA pour la relation client (avec limites strictes)',
          content: [
            'IA utile pour :',
            '• réponses initiales,',
            '• organisation,',
            '• rappels,',
            '• suivi.',
            '',
            'Mais :',
            '👉 les échanges sensibles doivent rester humains :',
            '• négociation,',
            '• refus,',
            '• ajustement de prix,',
            '• gestion de déception.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 4 – CAS D\'USAGES CONCRETS (TRÈS APPROFONDIS)',
      sections: [
        {
          title: '4.1 Vente d\'un bien chargé émotionnellement',
          content: [
            'IA :',
            '• aide à structurer le dossier.',
            '',
            'Agent :',
            '• écoute,',
            '• rassure,',
            '• protège le vendeur de décisions impulsives.',
            '',
            '👉 L\'IA ne gère pas le deuil, la peur ou la honte.'
          ]
        },
        {
          title: '4.2 Achat avec stress financier',
          content: [
            'IA :',
            '• aide à analyser le marché.',
            '',
            'Agent :',
            '• sécurise,',
            '• explique les risques,',
            '• aide à renoncer si nécessaire.',
            '',
            '👉 Un bon agent sait parfois dire : "N\'achetez pas."'
          ]
        },
        {
          title: '4.3 Investissement locatif',
          content: [
            'IA :',
            '• simule la rentabilité.',
            '',
            'Agent :',
            '• explique les risques,',
            '• contextualise fiscalement,',
            '• anticipe les imprévus.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 5 – NÉGOCIATION & IA : LE MYTHE',
      sections: [
        {
          title: '5.1 Pourquoi l\'IA négocie mal',
          content: [
            'La négociation immobilière implique :',
            '• ego,',
            '• peur de perdre,',
            '• besoin de reconnaissance,',
            '• temporalité émotionnelle.',
            '',
            '👉 Aucune IA ne sait gérer cela.'
          ]
        },
        {
          title: '5.2 Le rôle humain central',
          content: [
            'L\'agent :',
            '• absorbe la tension,',
            '• reformule,',
            '• temporise,',
            '• protège la relation.',
            '',
            '👉 C\'est une compétence rare.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 6 – RISQUES MAJEURS LIÉS À L\'IA EN IMMOBILIER',
      sections: [
        {
          title: 'Les risques principaux',
          content: [
            '• surestimation automatisée,',
            '• décisions précipitées,',
            '• standardisation abusive,',
            '• perte de confiance,',
            '• dilution de responsabilité.',
            '',
            '👉 L\'IA mal utilisée détruit la réputation locale.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 7 – MODÈLES ÉCONOMIQUES POST-IA',
      sections: [
        {
          title: '7.1 Ce qui se dévalue',
          content: [
            '• simple diffusion,',
            '• volume,',
            '• opacité.'
          ]
        },
        {
          title: '7.2 Ce qui prend de la valeur',
          content: [
            '• accompagnement complet,',
            '• expertise locale réelle,',
            '• négociation humaine,',
            '• sécurisation,',
            '• confiance long terme.',
            '',
            '👉 L\'agent devient conseiller de vie immobilière.'
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
            '• intelligence émotionnelle,',
            '• compréhension patrimoniale,',
            '• lecture du marché local,',
            '• usage critique de l\'IA,',
            '• négociation avancée,',
            '• éthique professionnelle.'
          ]
        }
      ]
    },
    {
      title: 'PARTIE 9 – CHECKLIST DE L\'AGENT IMMOBILIER AUGMENTÉ',
      sections: [
        {
          title: 'Vérifications essentielles',
          content: [
            '• Je comprends le contexte humain',
            '• J\'utilise l\'IA comme outil, pas comme vérité',
            '• Je sécurise juridiquement',
            '• Je négocie humainement',
            '• Je protège mes clients',
            '• J\'assume ma responsabilité morale'
          ]
        }
      ]
    }
  ],
  conclusion: `L'intelligence artificielle a profondément modifié l'immobilier.
Elle a rendu l'information accessible.
Elle a accéléré les estimations.
Elle a automatisé la diffusion, la mise en valeur, le tri des contacts.

👉 Mais elle n'a pas rendu les décisions immobilières plus simples.
👉 Elle les a rendues plus anxiogènes.

Car plus il y a de données :
• plus les clients doutent,
• plus ils comparent,
• plus ils ont peur de se tromper.

Et c'est précisément là que le rôle de l'agent immobilier devient irremplaçable.

⸻

L'IA sait décrire un bien
L'agent immobilier lit une situation humaine

L'IA sait calculer un prix
L'agent immobilier explique ce qu'il signifie vraiment

L'IA sait simuler un scénario
L'agent immobilier aide à assumer une décision

L'IA sait répondre vite
L'agent immobilier sait quand ralentir

⸻

Dans un monde où :
• les annonces sont partout,
• les chiffres sont instantanés,
• les outils sont accessibles à tous,

👉 la valeur ne vient plus de l'information
👉 elle vient de la responsabilité

Responsabilité :
• de ne pas surévaluer pour flatter,
• de ne pas pousser à vendre trop vite,
• de ne pas laisser un acheteur s'engager au-delà de ses limites,
• de protéger juridiquement, émotionnellement et financièrement.

⸻

Le futur de l'agent immobilier n'est pas technologique
Il est éthique, humain et relationnel

L'agent immobilier de demain n'est pas :
• un diffuseur d'annonces,
• un ouvreur de portes,
• un simple intermédiaire.

Il est :
• un traducteur du marché réel,
• un régulateur d'émotions,
• un négociateur humain,
• un conseiller patrimonial de proximité,
• un repère dans un moment de vie instable.

⸻

Ceux qui disparaîtront :
• Ceux qui se contentent de publier
• Ceux qui délèguent leur jugement à l'IA
• Ceux qui confondent vitesse et valeur
• Ceux qui n'assument pas leur responsabilité morale

Ceux qui prospéreront :
• Ceux qui utilisent l'IA sans s'y soumettre
• Ceux qui expliquent au lieu de séduire
• Ceux qui savent dire non
• Ceux qui protègent leurs clients, même contre eux-mêmes

⸻

En résumé

L'IA change l'immobilier.
Mais elle ne remplace pas l'agent immobilier.

👉 Elle le force à devenir meilleur.

Dans un monde automatisé,
👉 la confiance devient la vraie rareté.

Et l'agent immobilier qui comprend cela
ne sera pas remplacé.

Il deviendra indispensable.`
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
  'formation_marketing': marketingIAContent,
  'formation_dirigeant': dirigeantIAContent,
  'formation_consultant': consultantIAContent,
  'formation_avocat': avocatIAContent,
  'formation_comptable': comptableIAContent,
  'formation_rh': rhIAContent,
  'formation_medecin': medecinIAContent,
  'formation_coach': coachIAContent,
  'formation_immobilier': immobilierIAContent
}
