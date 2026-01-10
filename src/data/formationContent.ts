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

// Contenu de la formation "IA de Raisonnement - Secteur 1"
export const iaRaisonnementContent: FormationContent = {
  formationId: 'formation_ia_raisonnement',
  introduction: `Ce secteur d'outils existe pour augmenter une capacité humaine très spécifique :

👉 la capacité à penser avec de la complexité,
👉 à structurer un raisonnement,
👉 à dialoguer avec ses propres idées.

Contrairement à une idée répandue, ces IA ne sont pas là pour :
• "donner des réponses"
• "dire quoi faire"
• "remplacer l'expertise"

Elles existent parce que le travail moderne a dépassé la capacité cognitive individuelle.

Le problème humain réel qu'elles adressent

Aujourd'hui, un professionnel doit :
• traiter trop d'informations
• décider trop vite
• comprendre trop de dimensions en même temps
• justifier ses décisions
• expliquer à des non-experts

👉 Le cerveau humain est excellent pour juger
👉 Mais médiocre pour traiter des volumes abstraits et simultanés

Ces IA servent donc à : externaliser une partie du raisonnement mécanique pour libérer le jugement humain.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (RAISON PROFONDE)',
          content: [
            'Ce secteur d\'outils existe pour augmenter une capacité humaine très spécifique :',
            '',
            '👉 la capacité à penser avec de la complexité,',
            '👉 à structurer un raisonnement,',
            '👉 à dialoguer avec ses propres idées.',
            '',
            'Contrairement à une idée répandue, ces IA ne sont pas là pour :',
            '• "donner des réponses"',
            '• "dire quoi faire"',
            '• "remplacer l\'expertise"',
            '',
            'Elles existent parce que le travail moderne a dépassé la capacité cognitive individuelle.'
          ]
        },
        {
          title: '2. CE QUE CES IA SONT RÉELLEMENT (ET CE QU\'ELLES NE SONT PAS)',
          content: [
            'Ce qu\'elles sont :',
            '',
            'Des simulateurs de raisonnement linguistique capables de :',
            '• reformuler une pensée',
            '• structurer un problème',
            '• explorer des hypothèses',
            '• faire émerger des angles morts',
            '• dialoguer sans fatigue ni ego',
            '',
            'Exemples d\'outils :',
            '• ChatGPT',
            '• Claude',
            '• Gemini',
            '',
            '👉 Ce sont des miroirs cognitifs augmentés.',
            '',
            'Ce qu\'elles ne sont PAS :',
            '',
            '❌ des sources de vérité',
            '❌ des autorités',
            '❌ des décideurs',
            '❌ des experts responsables',
            '',
            'Elles n\'ont :',
            '• aucune compréhension du réel',
            '• aucune intuition',
            '• aucune responsabilité',
            '• aucune conscience des conséquences',
            '',
            '👉 Elles parlent bien, mais ne savent rien au sens humain'
          ]
        },
        {
          title: '3. LA FONCTION CENTRALE : RENDRE LA PENSÉE EXPLICITE',
          content: [
            'Un point clé que peu de formations expliquent :',
            '',
            'Ces IA forcent le professionnel à expliciter sa pensée.',
            '',
            'Or, dans la réalité :',
            '• beaucoup de décisions sont prises sur intuition',
            '• beaucoup de raisonnements sont implicites',
            '• beaucoup de choix sont mal formalisés',
            '',
            'L\'IA oblige à :',
            '• poser le problème',
            '• formuler les hypothèses',
            '• expliciter les contraintes',
            '• nommer les incertitudes',
            '',
            '👉 Elle agit comme un révélateur de flou',
            '',
            'Ce n\'est pas confortable.',
            'Mais c\'est extrêmement puissant.'
          ]
        },
        {
          title: '4. POURQUOI CE SECTEUR EST FONDATIONNEL (AVANT TOUS LES AUTRES)',
          content: [
            'Sans ce secteur :',
            '• l\'IA de rédaction produit du vide',
            '• l\'IA d\'analyse produit des chiffres sans sens',
            '• l\'IA d\'automatisation automatise des erreurs',
            '• l\'IA métier devient dangereuse',
            '',
            '👉 Le raisonnement précède l\'exécution',
            '',
            'Un professionnel qui n\'a pas appris à :',
            '• raisonner avec l\'IA',
            '• dialoguer avec ses hypothèses',
            '• challenger ses décisions',
            '',
            '👉 ne devrait pas utiliser les autres secteurs',
            '',
            'C\'est exactement comme : automatiser une usine sans comprendre le process'
          ]
        },
        {
          title: '5. LE RÔLE HUMAIN QUI NE DISPARAÎTRA JAMAIS DANS CE SECTEUR',
          content: [
            'Même avec des IA très avancées, certaines fonctions restent strictement humaines :',
            '',
            '🔹 Le jugement',
            'Décider malgré l\'incertitude.',
            '',
            '🔹 L\'arbitrage',
            'Choisir entre deux mauvaises options.',
            '',
            '🔹 La responsabilité',
            'Assumer les conséquences.',
            '',
            '🔹 L\'éthique',
            'Définir ce qui est acceptable ou non.',
            '',
            '🔹 Le sens',
            'Pourquoi on fait quelque chose.',
            '',
            '👉 L\'IA peut simuler un raisonnement,',
            'elle ne peut pas porter une décision.'
          ]
        },
        {
          title: 'SYNTHÈSE AXE 1',
          content: [
            '👉 Les IA de raisonnement ne servent pas à avoir raison.',
            'Elles servent à mieux comprendre pourquoi on décide.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE L\'IA FAIT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES IA FONT EXTRÊMEMENT BIEN (LEUR VRAIE FORCE)',
          content: [
            '1.1 Structurer un raisonnement flou',
            '',
            'Les IA de raisonnement excellent dans une chose très précise :',
            '👉 transformer du flou en structure verbale exploitable.',
            '',
            'Elles savent :',
            '• découper un problème',
            '• identifier des dimensions',
            '• organiser des idées',
            '• mettre de l\'ordre là où l\'humain a une intuition diffuse',
            '',
            '👉 Elle n\'apporte pas la réponse, elle rend le problème lisible.',
            '',
            '1.2 Explorer des hypothèses sans fatigue ni ego',
            '',
            'L\'humain a des limites :',
            '• fatigue cognitive',
            '• biais de confirmation',
            '• attachement à ses idées',
            '• peur d\'avoir tort',
            '',
            'L\'IA, elle :',
            '• n\'a pas d\'ego',
            '• n\'est pas fatiguée',
            '• accepte d\'explorer des pistes absurdes',
            '• peut challenger sans froisser',
            '',
            '👉 C\'est un sparring-partner intellectuel, pas un décideur.',
            '',
            '1.3 Reformuler et traduire (compétence sous-estimée)',
            '',
            'Dans le monde professionnel :',
            '• les problèmes viennent souvent d\'incompréhensions',
            '• les décisions échouent par mauvaise formulation',
            '• les conflits naissent d\'ambiguïtés',
            '',
            'L\'IA est très forte pour :',
            '• reformuler un raisonnement',
            '• traduire un langage expert en langage non expert',
            '• clarifier une position',
            '',
            '👉 Clarifier ≠ simplifier.',
            '👉 L\'IA aide à rendre intelligible sans trahir.'
          ]
        },
        {
          title: '2. CE QUE CES IA FONT MAL (ET FERONT TOUJOURS MAL)',
          content: [
            '2.1 Elles ne comprennent PAS le réel',
            '',
            'Même si le langage est convaincant :',
            '• l\'IA ne comprend pas le contexte vécu',
            '• elle ne perçoit pas les enjeux humains',
            '• elle ne ressent pas la gravité d\'une décision',
            '',
            '👉 Elle manipule des symboles.',
            '👉 Elle ne comprend pas les conséquences.',
            '',
            '2.2 Elles ne savent pas ce qui est important',
            '',
            'L\'IA traite tout comme :',
            '• également prioritaire',
            '• également rationnel',
            '• également pertinent',
            '',
            'Or, dans le réel :',
            '• tout n\'a pas le même poids',
            '• certains détails sont vitaux',
            '• d\'autres sont insignifiants',
            '',
            '👉 La hiérarchisation est humaine.',
            '',
            '2.3 Elles hallucinent sans le savoir',
            '',
            'Point critique.',
            '',
            'Les IA peuvent :',
            '• inventer des faits',
            '• affirmer avec aplomb',
            '• produire des raisonnements faux mais cohérents',
            '',
            '👉 Le danger n\'est pas l\'erreur.',
            '👉 Le danger est l\'erreur convaincante.'
          ]
        },
        {
          title: '3. DIFFÉRENCE FONDAMENTALE : AIDE VS SUBSTITUTION',
          content: [
            'Usage sain (aide) :',
            '• l\'IA éclaire',
            '• l\'humain décide',
            '• l\'humain assume',
            '',
            'Usage dangereux (substitution) :',
            '• l\'IA tranche',
            '• l\'humain suit',
            '• personne n\'assume vraiment',
            '',
            '👉 Le glissement est souvent invisible.',
            '',
            'Phrase typique dangereuse : "C\'est ce que l\'IA recommande."',
            '',
            'Phrase professionnelle saine : "L\'IA m\'a aidé à explorer, j\'ai décidé autrement / en connaissance."'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 1',
          content: [
            'Si la sortie de l\'IA te rassure trop vite,',
            'c\'est que tu n\'as pas assez réfléchi.',
            '',
            'L\'IA doit :',
            '• créer du doute intelligent',
            '• poser de meilleures questions',
            '• rendre le raisonnement explicite',
            '',
            '👉 Pas fermer la réflexion.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE LECTURE IMPORTANTE',
          content: [
            'Dans tous les cas suivants, l\'IA de raisonnement (ex. ChatGPT) n\'est jamais :',
            '• la source finale,',
            '• l\'autorité,',
            '• le décideur.',
            '',
            'Elle est :',
            '👉 un espace de réflexion augmenté.'
          ]
        },
        {
          title: '1. DIRIGEANT / ENTREPRENEUR',
          content: [
            'Le dirigeant utilise l\'IA pour :',
            '• poser le problème clairement',
            '• expliciter ses hypothèses',
            '• simuler plusieurs scénarios',
            '• identifier les angles morts',
            '',
            'Exemples concrets :',
            '• "Quels sont les risques non évidents de cette décision ?"',
            '• "Si cette stratégie échoue, pourquoi échouera-t-elle ?"',
            '• "Quelles hypothèses implicites suis-je en train de faire ?"',
            '',
            '👉 L\'IA devient un miroir stratégique.'
          ]
        },
        {
          title: '2. CONSULTANT / STRATÉGIE / ORGANISATION',
          content: [
            'L\'IA est utilisée pour :',
            '• structurer une problématique client',
            '• explorer plusieurs lectures possibles',
            '• challenger une analyse',
            '• préparer des entretiens plus pertinents',
            '',
            '👉 Le consultant gagne du temps pour le terrain humain.'
          ]
        },
        {
          title: '3. JURISTE / AVOCAT',
          content: [
            'L\'IA sert à :',
            '• reformuler un raisonnement juridique',
            '• traduire le droit pour un client non-juriste',
            '• tester la cohérence d\'un raisonnement',
            '• identifier des contre-arguments',
            '',
            '👉 Jamais pour conclure juridiquement.'
          ]
        },
        {
          title: '4. MÉDECIN / PROFESSIONNEL DE SANTÉ',
          content: [
            'L\'IA est utilisée pour :',
            '• structurer un diagnostic différentiel',
            '• explorer des hypothèses rares',
            '• préparer une réflexion clinique',
            '',
            '👉 Toujours hors consultation patient directe',
            '👉 Jamais comme verdict'
          ]
        },
        {
          title: 'PATTERN COMMUN À TOUS LES MÉTIERS',
          content: [
            'Bon usage :',
            '• clarifier',
            '• structurer',
            '• challenger',
            '• réfléchir plus profondément',
            '',
            'Mauvais usage :',
            '• décider',
            '• juger',
            '• se déresponsabiliser',
            '• aller trop vite'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — OUTILS, ARCHITECTURE, WORKFLOWS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. LES TYPES D\'OUTILS DANS CE SECTEUR (NE PAS LES CONFONDRE)',
          content: [
            '1.1 Assistants conversationnels généralistes',
            '',
            'Exemples :',
            '• ChatGPT',
            '• Claude',
            '• Gemini',
            '',
            'Rôle :',
            '• raisonnement exploratoire',
            '• clarification',
            '• structuration',
            '• reformulation',
            '• dialogue itératif',
            '',
            '👉 C\'est la "salle de réflexion", pas la salle de décision.',
            '',
            '1.2 Assistants intégrés dans des outils de travail',
            '',
            'Exemples :',
            '• Notion AI',
            '• Microsoft Copilot',
            '',
            'Rôle :',
            '• raisonnement contextualisé',
            '• continuité documentaire',
            '• aide à la structuration interne',
            '',
            '👉 Très utile pour les équipes, mais nécessite des règles claires.'
          ]
        },
        {
          title: '2. ARCHITECTURE PROFESSIONNELLE SAINE (MODÈLE RECOMMANDÉ)',
          content: [
            'Principe clé :',
            '',
            'L\'IA de raisonnement doit être placée AVANT la décision, jamais APRÈS.',
            '',
            'Architecture saine (exemple générique) :',
            '1. Problème réel identifié (humain)',
            '2. Travail de réflexion avec IA (exploration)',
            '3. Synthèse humaine',
            '4. Décision humaine',
            '5. Communication humaine',
            '6. Exécution (éventuellement automatisée)',
            '',
            '👉 L\'IA est en amont, jamais en aval.'
          ]
        },
        {
          title: '3. WORKFLOWS PROFESSIONNELS RECOMMANDÉS',
          content: [
            '3.1 Workflow "Décision complexe" (dirigeant, manager)',
            '1. Formulation écrite du problème',
            '2. Dialogue IA pour : hypothèses, scénarios, risques',
            '3. Pause (temps humain)',
            '4. Décision assumée',
            '5. Rédaction humaine finale',
            '',
            '👉 La pause est essentielle (elle évite la soumission cognitive)',
            '',
            '3.2 Workflow "Analyse / Conseil"',
            '1. Collecte d\'informations (humain)',
            '2. Structuration avec IA',
            '3. Validation terrain',
            '4. Recommandation humaine',
            '5. Suivi',
            '',
            '👉 L\'IA ne voit pas le terrain.'
          ]
        },
        {
          title: '4. BONNES PRATIQUES PROFESSIONNELLES (OBLIGATOIRES)',
          content: [
            '4.1 Toujours expliciter l\'intention',
            '',
            'Mauvais : "Donne-moi la meilleure réponse"',
            '',
            'Bon : "Aide-moi à explorer les options et les risques"',
            '',
            '👉 La qualité dépend de l\'intention, pas du prompt magique.',
            '',
            '4.2 Toujours garder une trace humaine',
            '• décision écrite par l\'humain',
            '• justification personnelle',
            '• responsabilité claire',
            '',
            '👉 "L\'IA a dit" n\'est jamais acceptable',
            '',
            '4.3 Introduire une règle de contradiction',
            '',
            'Bonne pratique :',
            '• demander à l\'IA de contredire sa propre réponse',
            '• demander les pires scénarios',
            '• demander les biais possibles',
            '',
            '👉 Cela restaure la pensée critique.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LA DÉRESPONSABILISATION INVISIBLE',
          content: [
            'Le danger principal de ces IA n\'est ni technique, ni juridique.',
            '',
            '👉 Le danger est psychologique et organisationnel.',
            '',
            'Mécanisme typique :',
            '• l\'IA parle bien',
            '• elle rassure',
            '• elle structure',
            '• elle semble "plus logique que l\'humain"',
            '',
            'Progressivement :',
            '• l\'humain doute de lui-même',
            '• l\'IA devient une béquille',
            '• la décision est "co-signée mentalement"',
            '• la responsabilité devient floue',
            '',
            '👉 La faute n\'est jamais frontale.',
            'Elle est progressive et silencieuse.',
            '',
            'Signal d\'alerte clair :',
            '',
            'Quand un professionnel dit : "Je ne suis pas sûr, mais l\'IA dit que…"',
            '',
            '👉 La ligne rouge est déjà franchie.'
          ]
        },
        {
          title: '2. CE QUI DOIT RESTER STRICTEMENT HUMAIN (TOUJOURS)',
          content: [
            'Aucune évolution technologique ne changera ces points :',
            '',
            '🔹 Le jugement final',
            'Choisir malgré l\'incertitude.',
            '',
            '🔹 L\'arbitrage moral',
            'Décider ce qui est acceptable.',
            '',
            '🔹 La hiérarchisation',
            'Ce qui compte vraiment, maintenant.',
            '',
            '🔹 L\'assomption des conséquences',
            'Dire "c\'est ma décision".',
            '',
            '🔹 Le sens',
            'Pourquoi cette décision existe.',
            '',
            '👉 L\'IA peut éclairer.',
            'Elle ne peut pas porter le poids.'
          ]
        },
        {
          title: '3. RESPONSABILITÉ : LA RÈGLE NON NÉGOCIABLE',
          content: [
            'La responsabilité ne se délègue jamais.',
            'Même quand l\'IA a "raison".',
            '',
            'Dans tous les métiers à impact :',
            '• dirigeant',
            '• juriste',
            '• médecin',
            '• RH',
            '• manager',
            '• consultant',
            '',
            '👉 Celui qui décide doit pouvoir dire :',
            '• pourquoi il a décidé',
            '• ce qu\'il a ignoré',
            '• ce qu\'il assume',
            '',
            'Si l\'IA empêche cela :',
            '👉 elle est mal utilisée.'
          ]
        },
        {
          title: '4. POSTURE PROFESSIONNELLE RECOMMANDÉE (MANIFESTE)',
          content: [
            'Voici la posture à transmettre dans une formation sérieuse :',
            '',
            '• J\'utilise l\'IA pour clarifier, pas pour décider',
            '• Je garde le doute comme outil professionnel',
            '• Je sais quand ignorer une réponse',
            '• J\'assume toujours mes choix',
            '• Je protège ma capacité à penser seul'
          ]
        },
        {
          title: '5. TEST FINAL DE MATURITÉ (TRÈS SIMPLE)',
          content: [
            'Pose cette question à un professionnel :',
            '',
            '"Si l\'IA disparaît demain, peux-tu encore travailler correctement ?"',
            '',
            '• Oui → usage sain',
            '• Non → dépendance installée'
          ]
        }
      ]
    }
  ],
  conclusion: `Le premier secteur d'outils IA n'augmente pas la productivité.
Il augmente la responsabilité.

C'est pour cela qu'il doit toujours être enseigné en premier.

⸻

SYNTHÈSE GLOBALE

👉 Les IA de raisonnement sont des amplificateurs de maturité professionnelle.
Elles élèvent les responsables.
Elles exposent les fuyards.

Les IA de raisonnement créent de la valeur là où il y a complexité, responsabilité et incertitude.
Elles détruisent de la valeur dès qu'on leur délègue le jugement.

👉 Les IA de raisonnement sont excellentes pour structurer, explorer et reformuler.
Elles sont dangereuses dès qu'on leur demande de juger, prioriser ou décider.

L'IA de raisonnement est un espace de dialogue, pas une autorité.

Si elle t'aide à mieux penser → usage professionnel
Si elle pense à ta place → dérive dangereuse`
}

// Contenu de la formation "IA de Production Rédactionnelle - Secteur 2"
export const iaRedactionContent: FormationContent = {
  formationId: 'formation_ia_redaction',
  introduction: `Ce secteur d'outils existe pour répondre à une réalité simple mais brutale du travail moderne :

👉 Le volume de production écrite a explosé
👉 La valeur moyenne de cette production a chuté

Aujourd'hui, un professionnel doit produire :
• emails
• comptes rendus
• documents internes
• propositions
• contenus marketing
• procédures
• supports pédagogiques
• notes juridiques ou administratives

👉 Beaucoup plus que ce que le cerveau humain peut produire proprement, durablement et sans fatigue.

Ces IA n'ont pas été créées pour "écrire à la place de l'humain",
mais pour absorber la charge mécanique de l'écriture.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE BESOIN RÉEL)',
          content: [
            'Ce secteur d\'outils existe pour répondre à une réalité simple mais brutale du travail moderne :',
            '',
            '👉 Le volume de production écrite a explosé',
            '👉 La valeur moyenne de cette production a chuté',
            '',
            'Aujourd\'hui, un professionnel doit produire :',
            '• emails',
            '• comptes rendus',
            '• documents internes',
            '• propositions',
            '• contenus marketing',
            '• procédures',
            '• supports pédagogiques',
            '• notes juridiques ou administratives',
            '',
            '👉 Beaucoup plus que ce que le cerveau humain peut produire proprement, durablement et sans fatigue.'
          ]
        },
        {
          title: '2. LA DISTINCTION CLÉ : INTENTION VS EXÉCUTION',
          content: [
            'C\'est le point central de ce secteur, et le plus mal compris.',
            '',
            'Ce que l\'humain fait (et doit garder) :',
            '• l\'intention',
            '• le message',
            '• la stratégie',
            '• le ton juste',
            '• la responsabilité du contenu',
            '',
            'Ce que l\'IA fait :',
            '• produire une première version',
            '• reformuler',
            '• décliner',
            '• adapter à un format',
            '• accélérer l\'exécution',
            '',
            '👉 L\'IA est une machine d\'exécution linguistique, pas de sens.',
            '',
            'Quand on inverse les rôles :',
            '• l\'IA décide quoi dire',
            '• l\'humain valide vaguement',
            '',
            '👉 La valeur s\'effondre.'
          ]
        },
        {
          title: '3. CE QUE CE SECTEUR CHANGE STRUCTURELLEMENT DANS LE TRAVAIL',
          content: [
            'Avant ces IA :',
            '• écrire prenait du temps',
            '• le temps limitait la production',
            '• le filtre naturel était l\'effort',
            '',
            'Aujourd\'hui :',
            '• écrire est facile',
            '• produire est instantané',
            '• le filtre a disparu',
            '',
            '👉 Le problème n\'est plus "comment écrire",',
            'mais "pourquoi écrire" et "pour qui".',
            '',
            'Ce secteur d\'IA déplace donc la valeur :',
            '• de la production → vers la pertinence',
            '• de l\'effort → vers la clarté',
            '• de la quantité → vers la cohérence'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Si l\'IA écrit ce que tu n\'as pas encore pensé,',
            'le texte sera vide, même s\'il est fluide.',
            '',
            'Si tu sais exactement ce que tu veux dire,',
            'l\'IA devient un amplificateur puissant.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES IA FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES IA FONT TRÈS BIEN (LEUR VRAIE UTILITÉ)',
          content: [
            '1.1 Produire vite un premier jet exploitable',
            '',
            'La force principale de ces IA n\'est pas la qualité finale.',
            'C\'est la capacité à produire un premier état de matière.',
            '',
            'Elles excellent pour :',
            '• sortir une structure',
            '• poser un plan',
            '• écrire un brouillon cohérent',
            '• éviter la page blanche',
            '• démarrer un document bloqué',
            '',
            '👉 Elles remplacent l\'effort initial, pas le travail final.',
            '',
            '1.2 Reformuler sans fatigue',
            '',
            'Un humain se lasse vite de :',
            '• réécrire',
            '• reformuler',
            '• adapter un texte à plusieurs publics',
            '• décliner un même message',
            '',
            'L\'IA, elle :',
            '• ne se fatigue pas',
            '• ne s\'agace pas',
            '• reformule à l\'infini',
            '• adapte à différents niveaux',
            '',
            '👉 C\'est un moteur de déclinaison, pas de création de sens.'
          ]
        },
        {
          title: '2. CE QUE CES IA FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Elles ne savent pas ce qui est important',
            '',
            'L\'IA :',
            '• écrit tout "proprement"',
            '• donne le même poids à chaque idée',
            '• ne hiérarchise pas naturellement',
            '',
            'Or, dans le réel :',
            '• certaines phrases sont critiques',
            '• d\'autres sont secondaires',
            '• certaines doivent être dites',
            '• d\'autres surtout pas',
            '',
            '👉 La hiérarchie du message est humaine.',
            '',
            '2.2 Elles produisent du "bon moyen" par défaut',
            '',
            'Sans intention claire, l\'IA produit :',
            '• du texte fluide',
            '• grammaticalement correct',
            '• stylistiquement neutre',
            '• parfaitement oubliable',
            '',
            '👉 Le risque n\'est pas l\'erreur.',
            'Le risque est l\'insignifiance.',
            '',
            '2.3 Elles ne mesurent pas l\'impact relationnel',
            '',
            'L\'IA ne sait pas :',
            '• si un message va vexer',
            '• créer de la peur',
            '• déclencher un conflit',
            '• dégrader la confiance',
            '',
            '👉 Un texte "bien écrit" peut être humainement désastreux.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 2',
          content: [
            'Si le texte te semble "correct" mais ne te ressemble pas,',
            'il est probablement mauvais.',
            '',
            'Un bon usage doit produire un texte :',
            '• que tu pourrais assumer publiquement',
            '• que tu pourrais défendre',
            '• qui reflète ton intention réelle'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE BASE (AVANT DE COMMENCER)',
          content: [
            'Dans tous les cas suivants, l\'IA rédactionnelle (ex. ChatGPT) doit être utilisée comme :',
            '',
            '👉 un moteur de rédaction assistée',
            '❌ jamais comme un auteur autonome',
            '❌ jamais comme un porte-voix non contrôlé'
          ]
        },
        {
          title: '1. DIRIGEANT / ENTREPRENEUR',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA est utilisée pour :',
            '• structurer un message stratégique',
            '• clarifier une intention',
            '• préparer une communication importante',
            '• tester plusieurs formulations possibles',
            '',
            'Exemples concrets :',
            '• "Aide-moi à structurer ce message de vision pour les équipes"',
            '• "Propose trois formulations possibles, je choisis et j\'ajuste"',
            '',
            '👉 Le dirigeant garde la voix, l\'IA prépare la forme.',
            '',
            'Mauvais usage fréquent :',
            '• publier directement un texte IA',
            '• déléguer la formulation d\'une vision',
            '',
            '👉 Perte de crédibilité immédiate, même si le texte est "propre".'
          ]
        },
        {
          title: '2. MARKETING / COMMUNICATION',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA sert à :',
            '• produire des premières versions',
            '• décliner un message sur plusieurs formats',
            '• tester différents angles',
            '• adapter un contenu à différents canaux',
            '',
            '👉 La stratégie marketing reste humaine.',
            '',
            'Mauvais usage :',
            '• publier en masse sans vision',
            '• produire du contenu générique',
            '• laisser l\'IA définir le positionnement',
            '',
            '👉 Bruit marketing amplifié.'
          ]
        },
        {
          title: '3. RESSOURCES HUMAINES / MANAGEMENT',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA est utilisée pour :',
            '• reformuler des annonces de poste',
            '• préparer un message délicat',
            '• ajuster le ton (ferme mais respectueux)',
            '• clarifier une communication interne',
            '',
            'Exemples :',
            '• "Aide-moi à formuler ce feedback de façon constructive"',
            '• "Reformule cette annonce sans jargon ni biais"',
            '',
            '👉 L\'IA prépare, le manager assume.',
            '',
            'Mauvais usage :',
            '• envoyer des mails RH écrits par IA sans relecture',
            '• automatiser la relation humaine',
            '',
            '👉 Destruction de la confiance.'
          ]
        },
        {
          title: '4. JURIDIQUE / ADMINISTRATIF',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA sert à :',
            '• produire des premiers jets',
            '• reformuler un texte juridique',
            '• vulgariser pour des non-juristes',
            '• structurer des documents administratifs',
            '',
            '👉 Validation humaine obligatoire. Toujours.',
            '',
            'Mauvais usage :',
            '• accepter un texte juridique IA tel quel',
            '• ne pas vérifier les implications',
            '',
            '👉 Risque juridique majeur.'
          ]
        },
        {
          title: 'TEST SIMPLE D\'USAGE SAIN',
          content: [
            'Avant d\'envoyer un texte, se poser cette question :',
            '',
            '"Est-ce que j\'assume chaque phrase de ce document ?"',
            '',
            '• Oui → usage professionnel',
            '• Non → dérive IA'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — OUTILS, ARCHITECTURE, WORKFLOWS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. TYPOLOGIE DES OUTILS (NE PAS TOUT MÉLANGER)',
          content: [
            '1.1 Assistants rédactionnels généralistes',
            '',
            'Exemples :',
            '• ChatGPT',
            '• Claude',
            '',
            'Rôle :',
            '• brouillons',
            '• reformulations',
            '• déclinaisons',
            '• structuration de texte',
            '',
            '👉 Outils de pré-production, jamais de diffusion brute.',
            '',
            '1.2 IA intégrées aux outils de travail',
            '',
            'Exemples :',
            '• Notion AI',
            '• Microsoft Copilot',
            '• Google Workspace',
            '',
            '👉 Très utiles en équipe, très dangereuses sans règles écrites.'
          ]
        },
        {
          title: '2. ARCHITECTURE PROFESSIONNELLE SAINE (MODÈLE DE RÉFÉRENCE)',
          content: [
            'Principe fondamental :',
            '',
            'L\'IA rédactionnelle doit intervenir AVANT la validation humaine, jamais APRÈS.',
            '',
            'Architecture recommandée (simple et robuste) :',
            '1. Intention humaine claire',
            '2. IA → brouillon / reformulation',
            '3. Relecture humaine critique',
            '4. Ajustement du ton, des mots, des silences',
            '5. Validation finale humaine',
            '6. Diffusion',
            '',
            '👉 L\'IA est un outil d\'atelier, pas de signature.'
          ]
        },
        {
          title: '3. WORKFLOWS CONCRETS PAR CONTEXTE',
          content: [
            '3.1 Workflow "Email sensible" (RH, management, direction)',
            '',
            'Bon workflow :',
            '1. Clarifier l\'objectif (humain)',
            '2. IA → proposer plusieurs formulations',
            '3. Choix humain',
            '4. Réécriture manuelle partielle',
            '5. Envoi assumé',
            '',
            'À ne jamais faire :',
            '• envoyer un mail IA sans modification',
            '• utiliser l\'IA pour annoncer une décision difficile',
            '',
            '👉 Le message engage la relation, pas l\'outil.',
            '',
            '3.2 Workflow "Document stratégique" (consultant, dirigeant)',
            '',
            '1. Plan humain',
            '2. IA → aide à rédiger les sections',
            '3. Réorganisation humaine',
            '4. Suppression volontaire (très important)',
            '5. Version finale assumée',
            '',
            '👉 Un bon document est souvent plus court que la version IA.'
          ]
        },
        {
          title: '4. BONNES PRATIQUES PROFESSIONNELLES (NON NÉGOCIABLES)',
          content: [
            '4.1 Toujours séparer "aide à écrire" et "parole officielle"',
            '',
            'Règle simple :',
            '• interne → IA très utile',
            '• externe → vigilance maximale',
            '',
            '👉 Plus le texte engage l\'image, plus l\'humain doit intervenir.',
            '',
            '4.2 Introduire une règle de "réécriture humaine obligatoire"',
            '',
            'Bonne pratique organisationnelle :',
            '• au moins 20–30 % du texte doit être modifié manuellement',
            '• pas pour faire joli',
            '• pour réintroduire la voix humaine'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : L\'INFLATION DU VIDE',
          content: [
            'Le danger principal de ces IA n\'est ni l\'erreur, ni même la standardisation.',
            '',
            '👉 Le danger est l\'inflation massive de contenus sans valeur.',
            '',
            'Ce phénomène est déjà visible :',
            '• trop de mails',
            '• trop de posts',
            '• trop de documents',
            '• trop de messages "bien écrits"',
            '• trop peu de choses réellement utiles',
            '',
            '👉 Quand tout est fluide, plus rien n\'est marquant.',
            '',
            'Les organisations tombent alors dans un piège :',
            '• elles communiquent plus',
            '• mais sont moins écoutées',
            '• produisent plus',
            '• mais sont moins lues',
            '',
            '👉 La visibilité baisse à mesure que la production augmente.'
          ]
        },
        {
          title: '2. LE RISQUE HUMAIN : LA DILUTION DE LA VOIX ET DE L\'AUTORITÉ',
          content: [
            'L\'écriture professionnelle n\'est pas neutre.',
            '',
            'Elle construit :',
            '• l\'autorité',
            '• la crédibilité',
            '• la confiance',
            '• la légitimité',
            '',
            'Quand l\'IA prend trop de place :',
            '• la voix devient générique',
            '• le style se lisse',
            '• la personnalité disparaît',
            '• la parole perd du poids',
            '',
            '👉 Un texte sans voix est un texte sans auteur.',
            'Un texte sans auteur est un texte sans responsabilité.'
          ]
        },
        {
          title: '3. CE QUI DOIT RESTER STRICTEMENT HUMAIN (TOUJOURS)',
          content: [
            'Même avec des IA très avancées, certaines fonctions restent inaliénables :',
            '',
            '🔹 La définition du message',
            'Pourquoi on écrit. Pour qui. À quel moment.',
            '',
            '🔹 Le choix du silence',
            'Savoir ne pas communiquer.',
            '',
            '🔹 Le ton juste',
            'Ni trop, ni pas assez.',
            'L\'IA ne sent pas les tensions.',
            '',
            '🔹 La prise de risque assumée',
            'Dire quelque chose de clivant, si nécessaire.',
            '',
            '🔹 L\'engagement personnel',
            '"Je signe ce que je dis."',
            '',
            '👉 L\'IA ne prend jamais de risque.',
            'Donc elle ne peut pas porter une parole forte.'
          ]
        },
        {
          title: '4. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• J\'utilise l\'IA pour écrire plus clairement, pas pour penser à ma place',
            '• Je relis toujours ce que je diffuse',
            '• Je supprime plus que je n\'ajoute',
            '• Je privilégie l\'impact à la quantité',
            '• J\'assume chaque mot publié'
          ]
        },
        {
          title: '5. TEST FINAL DE MATURITÉ (SIMPLE ET BRUTAL)',
          content: [
            'Pose cette question à une équipe :',
            '',
            '"Si tous vos textes étaient publiés avec votre nom en signature,',
            'seriez-vous à l\'aise ?"',
            '',
            '• Oui → usage sain',
            '• Non → dérive installée'
          ]
        }
      ]
    }
  ],
  conclusion: `Le secteur 2 ne concerne pas l'écriture.
Il concerne la responsabilité de la parole professionnelle.

⸻

SYNTHÈSE GLOBALE

👉 Les IA rédactionnelles n'augmentent pas la valeur de la parole.
Elles rendent visible l'absence de pensée.

Les IA rédactionnelles sont excellentes pour exécuter, décliner et reformuler.
Elles sont dangereuses dès qu'on leur confie le sens, la hiérarchie ou la responsabilité du message.

Les IA rédactionnelles créent de la valeur quand elles servent la clarté, la cohérence et l'intention humaine.
Elles détruisent de la valeur quand elles produisent à la place du professionnel.`
}

// Contenu de la formation "IA d'Analyse et de Synthèse - Secteur 3"
export const iaAnalyseContent: FormationContent = {
  formationId: 'formation_ia_analyse',
  introduction: `Ce secteur d'outils est né d'un constat simple mais implacable :

👉 Les organisations produisent plus de données qu'elles ne peuvent en comprendre.

Aujourd'hui, un professionnel doit composer avec :
• des KPIs multiples et parfois contradictoires,
• des tableaux de bord en silos,
• des rapports longs et peu lus,
• des décisions prises sous pression temporelle,
• une confusion entre "mesurer" et "comprendre".

👉 Le cerveau humain est mauvais pour lire des volumes de données abstraites.
👉 Il est bon pour juger… à condition que la situation soit rendue lisible.

Ces IA existent pour rendre le réel mesurable intelligible, pas pour décider à la place de l'humain.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE PROBLÈME HUMAIN RÉEL)',
          content: [
            'Ce secteur d\'outils est né d\'un constat simple mais implacable :',
            '',
            '👉 Les organisations produisent plus de données qu\'elles ne peuvent en comprendre.',
            '',
            'Aujourd\'hui, un professionnel doit composer avec :',
            '• des KPIs multiples et parfois contradictoires,',
            '• des tableaux de bord en silos,',
            '• des rapports longs et peu lus,',
            '• des décisions prises sous pression temporelle,',
            '• une confusion entre "mesurer" et "comprendre".',
            '',
            '👉 Le cerveau humain est mauvais pour lire des volumes de données abstraites.',
            '👉 Il est bon pour juger… à condition que la situation soit rendue lisible.'
          ]
        },
        {
          title: '2. LA DISTINCTION CLÉ : INFORMATION, INDICATEUR, DÉCISION',
          content: [
            'C\'est l\'erreur la plus fréquente et la plus coûteuse.',
            '',
            '❌ Confusion courante :',
            '• données → décisions automatiques',
            '',
            '✅ Séparation saine :',
            '• données : faits bruts',
            '• indicateurs : interprétations',
            '• décisions : choix humains sous contrainte',
            '',
            '👉 L\'IA opère sur les deux premiers niveaux.',
            'Jamais sur le troisième.',
            '',
            'Quand cette frontière disparaît :',
            '• la décision se déshumanise,',
            '• la responsabilité se dilue,',
            '• les erreurs deviennent "systémiques".'
          ]
        },
        {
          title: '3. CE QUE CES IA SONT RÉELLEMENT',
          content: [
            'Les IA d\'analyse et de synthèse sont :',
            '• des machines à corrélations',
            '• des outils de réduction de complexité',
            '• des amplificateurs de lisibilité',
            '',
            'Elles savent très bien :',
            '• agréger des données hétérogènes,',
            '• détecter des tendances,',
            '• faire émerger des signaux faibles,',
            '• synthétiser de grandes masses d\'information,',
            '• produire des visualisations compréhensibles.',
            '',
            'Exemples d\'écosystèmes souvent utilisés :',
            '• Power BI',
            '• Tableau',
            '• Looker',
            '',
            '👉 Elles transforment le bruit en structure.'
          ]
        },
        {
          title: '4. CE QU\'ELLES NE SONT PAS (ET NE SERONT JAMAIS)',
          content: [
            'Même très avancées, ces IA ne sont pas :',
            '',
            '❌ des arbitres',
            '❌ des stratèges',
            '❌ des juges',
            '❌ des responsables',
            '',
            'Pourquoi ?',
            'Parce qu\'elles :',
            '• ne comprennent pas le contexte politique,',
            '• ne connaissent pas les enjeux humains,',
            '• ne perçoivent pas l\'urgence réelle,',
            '• ne portent aucune conséquence.',
            '',
            '👉 Une corrélation n\'est pas une cause.',
            'Un indicateur n\'est pas une décision.'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Si un indicateur décide à ta place,',
            'c\'est que tu as abandonné ton rôle.',
            '',
            'Si un indicateur nourrit une discussion responsable,',
            'il crée de la valeur.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES IA FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES IA FONT EXTRÊMEMENT BIEN (LEUR VALEUR RÉELLE)',
          content: [
            '1.1 Agréger des volumes de données impossibles à lire humainement',
            '',
            'C\'est leur force numéro un.',
            '',
            'Ces IA savent :',
            '• croiser des sources multiples (CRM, finance, marketing, opérations),',
            '• traiter des volumes massifs,',
            '• actualiser en continu,',
            '• éliminer une partie du bruit.',
            '',
            '👉 Elles voient large là où l\'humain voit partiel.',
            '',
            '1.2 Faire émerger des tendances invisibles à l\'intuition',
            '',
            'L\'intuition humaine est :',
            '• très bonne localement,',
            '• très mauvaise sur des séries longues.',
            '',
            'Les IA excellent pour :',
            '• détecter des tendances lentes,',
            '• repérer des ruptures,',
            '• identifier des signaux faibles,',
            '• comparer des périodes ou segments.',
            '',
            '👉 Elles voient ce qui évolue, pas ce qui choque.',
            '',
            '1.3 Accélérer la compréhension collective',
            '',
            'Dans une organisation, le problème n\'est pas seulement de comprendre :',
            '👉 c\'est de comprendre ensemble.',
            '',
            'Ces IA permettent :',
            '• un langage commun autour des chiffres,',
            '• des discussions moins émotionnelles,',
            '• des arbitrages plus argumentés.',
            '',
            '👉 Elles facilitent la discussion.',
            'Elles ne la remplacent pas.'
          ]
        },
        {
          title: '2. CE QUE CES IA FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Elles confondent corrélation et causalité',
            '',
            'C\'est un point critique.',
            '',
            'Une IA peut dire :',
            '• "Quand X augmente, Y baisse"',
            'Mais elle ne sait pas :',
            '• pourquoi',
            '• dans quel contexte',
            '• jusqu\'à quand',
            '• avec quelles conséquences humaines',
            '',
            '👉 Une corrélation est une alerte, pas une explication.',
            '',
            '2.2 Elles donnent une illusion d\'objectivité',
            '',
            'Les chiffres ont un pouvoir psychologique énorme.',
            '',
            'Quand un tableau est :',
            '• propre',
            '• chiffré',
            '• visuel',
            '• cohérent',
            '',
            'Il paraît :',
            '• neutre',
            '• scientifique',
            '• incontestable',
            '',
            '👉 C\'est faux.',
            '',
            'Chaque indicateur dépend :',
            '• d\'un choix de métrique,',
            '• d\'un périmètre,',
            '• d\'un moment,',
            '• d\'une interprétation humaine initiale.',
            '',
            '👉 L\'objectivité est une construction, pas un état.',
            '',
            '2.3 Elles ne savent pas ce qui est "grave"',
            '',
            'L\'IA traite :',
            '• une variation de 2 %',
            '• une chute critique',
            '• un signal humain faible',
            '',
            '👉 sur le même plan statistique.',
            '',
            'Or, dans le réel :',
            '• certaines anomalies sont vitales,',
            '• d\'autres sont anecdotiques.',
            '',
            '👉 La gravité est un jugement humain.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 3',
          content: [
            'Un bon indicateur doit susciter une question,',
            'pas fermer une discussion.',
            '',
            'Si un tableau de bord :',
            '• empêche le débat,',
            '• impose une conclusion,',
            '• réduit la responsabilité,',
            '',
            '👉 il est mal conçu ou mal utilisé.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE CADRE (INDISPENSABLE)',
          content: [
            'Dans tous les cas ci-dessous, les outils d\'analyse (ex. Power BI, Tableau) :',
            '',
            '👉 ne décident jamais',
            '👉 ne remplacent pas la discussion humaine',
            '👉 ne servent pas d\'alibi',
            '',
            'Ils servent à structurer un arbitrage, pas à l\'éviter.'
          ]
        },
        {
          title: '1. COMITÉ DE DIRECTION / DIRIGEANT',
          content: [
            'Usage IA sain :',
            '',
            'Les IA d\'analyse servent à :',
            '• poser une photographie claire de la situation',
            '• visualiser plusieurs scénarios',
            '• rendre explicites les compromis',
            '• nourrir un débat stratégique',
            '',
            'Exemples concrets :',
            '• "Quels indicateurs contredisent notre intuition actuelle ?"',
            '• "Qu\'est-ce que nous ne regardons jamais ?"',
            '• "Quels risques sont sous-estimés ?"',
            '',
            '👉 Le CODIR débat mieux, mais décide toujours imparfaitement — et l\'assume.',
            '',
            'Mauvais usage fréquent :',
            '• "Le dashboard dit qu\'on doit…"',
            '• éviter un débat politique ou humain',
            '',
            '👉 Dérive grave de gouvernance.'
          ]
        },
        {
          title: '2. FINANCE / CONTRÔLE DE GESTION',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA sert à :',
            '• accélérer les clôtures',
            '• détecter des anomalies',
            '• simuler des scénarios financiers',
            '• anticiper des tensions de trésorerie',
            '',
            'Outils souvent utilisés :',
            '• Power BI',
            '• Looker',
            '',
            '👉 Le financier devient un éclaireur, pas un simple producteur de chiffres.',
            '',
            'Mauvais usage :',
            '• sur-optimisation des ratios',
            '• décisions court-termistes',
            '• oubli du contexte opérationnel',
            '',
            '👉 Les chiffres "optimisés" peuvent détruire la réalité terrain.'
          ]
        },
        {
          title: '3. MARKETING / GROWTH / COMMERCIAL',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA est utilisée pour :',
            '• analyser les parcours clients',
            '• comparer les canaux',
            '• identifier des segments rentables',
            '• mesurer des tendances réelles',
            '',
            'Exemples :',
            '• "Quel canal attire mais ne convertit pas ?"',
            '• "Quelles campagnes performent à court terme mais détruisent la valeur ?"',
            '',
            '👉 L\'IA révèle les angles morts marketing.',
            '',
            'Mauvais usage :',
            '• optimisation aveugle des clics',
            '• décisions basées sur métriques superficielles',
            '',
            '👉 Ce qui se mesure facilement n\'est pas toujours ce qui compte.'
          ]
        },
        {
          title: '4. RESSOURCES HUMAINES / PEOPLE ANALYTICS',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA sert à :',
            '• détecter des signaux faibles (turnover, absentéisme)',
            '• comprendre des tendances globales',
            '• nourrir une réflexion managériale',
            '',
            '👉 Jamais pour décider individuellement.',
            '',
            'Mauvais usage (très dangereux) :',
            '• scoring individuel automatisé',
            '• décisions RH chiffrées sans dialogue',
            '',
            '👉 Risque éthique et social majeur.'
          ]
        },
        {
          title: 'QUESTION CLÉ À POSER EN RÉUNION',
          content: [
            '"Si ce tableau de bord n\'existait pas,',
            'quelle décision prendrions-nous quand même ?"',
            '',
            '👉 Si personne ne sait répondre,',
            '👉 l\'outil est devenu un refuge.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — OUTILS, ARCHITECTURE, WORKFLOWS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. TYPOLOGIE DES OUTILS (BIEN LES DISTINGUER EST STRATÉGIQUE)',
          content: [
            '1.1 Outils de Business Intelligence (BI)',
            '',
            'Exemples :',
            '• Power BI',
            '• Tableau',
            '• Looker',
            '',
            'Rôle :',
            '• agréger des données',
            '• produire des tableaux de bord',
            '• visualiser des tendances',
            '• suivre des indicateurs',
            '',
            'Forces :',
            '• robustesse',
            '• traçabilité',
            '• partage collectif',
            '',
            'Limites :',
            '• dépendance au modèle de données',
            '• rigidité si mal conçu',
            '• illusion de complétude',
            '',
            '👉 La BI montre ce que vous avez décidé de regarder. Pas plus.',
            '',
            '1.2 Outils d\'analyse augmentée par IA (Augmented Analytics)',
            '',
            'Ces outils ajoutent :',
            '• détection automatique d\'anomalies',
            '• suggestions de tendances',
            '• explications textuelles des chiffres',
            '',
            'Risque :',
            '• surconfiance',
            '• lecture passive',
            '• perte de réflexion critique',
            '',
            '👉 Plus l\'outil "explique", plus l\'humain doit questionner.'
          ]
        },
        {
          title: '2. ARCHITECTURE PROFESSIONNELLE SAINE (MODÈLE DE RÉFÉRENCE)',
          content: [
            'Principe fondamental :',
            '',
            'L\'architecture analytique doit soutenir la décision humaine, pas la remplacer.',
            '',
            'Architecture recommandée (simple, robuste) :',
            '1. Définition humaine des questions',
            '   • Pourquoi mesure-t-on ?',
            '   • Quelle décision est concernée ?',
            '2. Collecte & modélisation des données',
            '   • périmètre clair',
            '   • hypothèses explicites',
            '3. Analyse & visualisation (IA incluse)',
            '   • tendances',
            '   • signaux faibles',
            '4. Discussion humaine',
            '   • confrontation des points de vue',
            '   • remise en contexte',
            '5. Décision humaine assumée',
            '   • arbitrage',
            '   • responsabilité claire',
            '',
            '👉 La discussion est une étape obligatoire, pas optionnelle.'
          ]
        },
        {
          title: '3. BONNES PRATIQUES PROFESSIONNELLES (ESSENTIELLES)',
          content: [
            '4.1 Limiter volontairement le nombre d\'indicateurs',
            '',
            'Règle saine :',
            '• 5 à 9 indicateurs maximum par décision',
            '',
            '👉 Au-delà, on ne décide plus, on observe.',
            '',
            '4.2 Associer chaque indicateur à une décision possible',
            '',
            'Bonne question :',
            '"Si cet indicateur bouge, que fait-on concrètement ?"',
            '',
            'Si la réponse est floue :',
            '👉 l\'indicateur est inutile.',
            '',
            '4.3 Documenter les hypothèses',
            '',
            'Chaque tableau devrait préciser :',
            '• ce qui est mesuré',
            '• ce qui ne l\'est pas',
            '• les biais connus',
            '• la date de validité',
            '',
            '👉 Un indicateur sans hypothèse est dangereux.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LA TYRANNIE DES INDICATEURS',
          content: [
            'Le danger principal de ce secteur n\'est pas l\'erreur de calcul.',
            'C\'est la domination silencieuse des chiffres sur le jugement humain.',
            '',
            'Progressivement, on observe :',
            '• des décisions "dictées" par des KPIs',
            '• des débats écourtés par un graphique',
            '• des arbitrages évités grâce à un tableau',
            '• une dépolitisation des décisions humaines',
            '',
            '👉 Les chiffres deviennent une autorité morale implicite.',
            '',
            'Phrase dangereuse typique :',
            '"On n\'a pas le choix, les chiffres sont clairs."',
            '',
            '👉 Faux. Il y a toujours un choix.',
            'Les chiffres n\'enlèvent jamais la responsabilité.'
          ]
        },
        {
          title: '2. LE RISQUE ORGANISATIONNEL : LA PARALYSIE PAR L\'ANALYSE',
          content: [
            'Plus les outils sont puissants, plus un nouveau piège apparaît :',
            '',
            '👉 l\'attente de la certitude parfaite.',
            '',
            'Symptômes fréquents :',
            '• multiplication des indicateurs',
            '• reports de décisions',
            '• demandes d\'analyses supplémentaires',
            '• peur de "se tromper face aux chiffres"',
            '',
            '👉 L\'IA rend l\'incertitude visible,',
            'mais elle ne la supprime pas.',
            '',
            'Une organisation qui attend que l\'IA "confirme" une décision :',
            '• n\'agit plus',
            '• subit le réel',
            '• perd en agilité'
          ]
        },
        {
          title: '3. CE QUI DOIT RESTER STRICTEMENT HUMAIN (TOUJOURS)',
          content: [
            'Même avec des IA très avancées, certaines fonctions ne seront jamais automatisables :',
            '',
            '🔹 L\'arbitrage sous contrainte',
            'Choisir entre deux options imparfaites.',
            '',
            '🔹 La hiérarchisation des priorités',
            'Ce qui compte maintenant, pas ce qui est mesurable.',
            '',
            '🔹 L\'acceptation du risque',
            'Décider sans garantie.',
            '',
            '🔹 La responsabilité morale',
            'Assumer les conséquences humaines.',
            '',
            '🔹 Le sens collectif',
            'Pourquoi cette décision est prise.',
            '',
            '👉 Les chiffres n\'ont pas de conscience.',
            'Les humains, si.'
          ]
        },
        {
          title: '4. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• J\'utilise les chiffres pour éclairer, pas pour me cacher',
            '• Je sais dire "les données n\'ont pas la réponse"',
            '• J\'accepte l\'incertitude comme partie du métier',
            '• J\'assume les conséquences humaines',
            '• Je décide, même quand les chiffres hésitent'
          ]
        },
        {
          title: '5. TEST FINAL DE MATURITÉ (SIMPLE ET BRUTAL)',
          content: [
            'Pose cette question en comité :',
            '',
            '"Si ces indicateurs disparaissaient demain,',
            'serions-nous encore capables de décider ?"',
            '',
            '• Oui → usage mature',
            '• Non → dépendance installée'
          ]
        }
      ]
    }
  ],
  conclusion: `Ce secteur ne concerne pas la data.
Il concerne le courage de décider dans un monde mesurable.

⸻

SYNTHÈSE GLOBALE

👉 Les IA d'analyse et de synthèse n'existent pas pour automatiser les décisions,
mais pour rendre la complexité lisible afin que l'humain décide en conscience.

Les IA d'analyse sont excellentes pour agréger, structurer et révéler des tendances.
Elles sont dangereuses dès qu'on leur attribue une autorité décisionnelle ou morale.

Les IA d'analyse créent de la valeur quand elles structurent la discussion et rendent les arbitrages visibles.
Elles détruisent de la valeur quand elles remplacent le courage décisionnel.

👉 Les IA d'analyse n'enlèvent pas la responsabilité humaine.
Elles la rendent visible, et parfois inconfortable.`
}

// Contenu de la formation "IA de Recherche et de Veille - Secteur 4"
export const iaRechercheContent: FormationContent = {
  formationId: 'formation_ia_recherche',
  introduction: `Ce secteur est né d'un phénomène massif :

👉 L'information est devenue surabondante, fragmentée et contradictoire.

Aujourd'hui, un professionnel fait face à :
• trop de sources,
• trop d'articles,
• trop d'avis,
• trop de contenus recyclés,
• trop peu de temps pour vérifier.

Le problème n'est plus :

"Trouver de l'information"

Mais :

"Identifier ce qui est pertinent, fiable et utile pour décider ou agir."

👉 La rareté s'est déplacée :
ce n'est plus l'information, c'est l'attention et le discernement.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE PROBLÈME HUMAIN RÉEL)',
          content: [
            'Ce secteur est né d\'un phénomène massif :',
            '',
            '👉 L\'information est devenue surabondante, fragmentée et contradictoire.',
            '',
            'Aujourd\'hui, un professionnel fait face à :',
            '• trop de sources,',
            '• trop d\'articles,',
            '• trop d\'avis,',
            '• trop de contenus recyclés,',
            '• trop peu de temps pour vérifier.',
            '',
            '👉 La rareté s\'est déplacée :',
            'ce n\'est plus l\'information, c\'est l\'attention et le discernement.'
          ]
        },
        {
          title: '2. LA DISTINCTION CLÉ : RECHERCHER ≠ COMPRENDRE',
          content: [
            'Erreur classique :',
            '• chercher → lire → croire',
            '',
            'Or :',
            '• lire n\'est pas comprendre,',
            '• comprendre n\'est pas savoir,',
            '• savoir n\'est pas décider.',
            '',
            'Les IA de recherche existent pour :',
            '• réduire le bruit',
            '• cartographier un sujet',
            '• accélérer l\'exploration',
            '• faire émerger les débats, pas les clore',
            '',
            '👉 Elles raccourcissent le chemin vers la compréhension,',
            'mais ne remplacent pas l\'esprit critique.'
          ]
        },
        {
          title: '3. CE QUE CES IA SONT RÉELLEMENT',
          content: [
            'Les IA de recherche et de veille sont :',
            '• des moteurs d\'exploration augmentée',
            '• des synthétiseurs multi-sources',
            '• des cartographes de connaissances',
            '',
            'Elles savent :',
            '• interroger plusieurs sources à la fois,',
            '• comparer des points de vue,',
            '• résumer rapidement,',
            '• identifier des consensus ou des divergences,',
            '• citer leurs sources (selon les outils).',
            '',
            'Exemples d\'outils représentatifs :',
            '• Perplexity',
            '• Elicit',
            '• Consensus',
            '',
            '👉 Elles remplacent la recherche exploratoire classique, pas l\'expertise.'
          ]
        },
        {
          title: '4. CE QU\'ELLES NE SONT PAS (ET NE SERONT JAMAIS)',
          content: [
            'Même très performantes, ces IA ne sont pas :',
            '',
            '❌ des arbitres de vérité',
            '❌ des évaluateurs de fiabilité définitive',
            '❌ des juges scientifiques',
            '❌ des décideurs stratégiques',
            '',
            'Pourquoi ?',
            'Parce qu\'elles :',
            '• dépendent de sources existantes,',
            '• héritent des biais du web,',
            '• reflètent l\'état du débat, pas sa qualité,',
            '• ne savent pas ce qui est "acceptable" dans un contexte donné.',
            '',
            '👉 Une synthèse n\'est pas une validation.'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Si une IA de recherche te donne une réponse qui te rassure trop vite,',
            'tu as probablement mal posé la question.',
            '',
            'Une bonne recherche doit créer de nouvelles questions,',
            'pas fermer la réflexion.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES IA FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES IA FONT TRÈS BIEN (LEUR VALEUR RÉELLE)',
          content: [
            '1.1 Accélérer l\'exploration d\'un sujet inconnu',
            '',
            'C\'est leur force principale.',
            '',
            'Ces IA permettent de :',
            '• balayer rapidement un champ inconnu,',
            '• identifier les grandes thématiques,',
            '• repérer les concepts clés,',
            '• comprendre le vocabulaire d\'un domaine,',
            '• éviter l\'ignorance grossière.',
            '',
            'Avec des outils comme :',
            '• Perplexity',
            '• Elicit',
            '• Consensus',
            '',
            '👉 En quelques minutes, un professionnel atteint un niveau de compréhension qui prenait autrefois des heures.',
            '',
            '1.2 Réduire drastiquement le bruit informationnel',
            '',
            'Contrairement à un moteur de recherche classique, ces IA :',
            '• agrègent plusieurs sources,',
            '• éliminent une partie du contenu redondant,',
            '• synthétisent les points clés,',
            '• mettent en évidence les convergences.',
            '',
            '👉 Elles remplacent le tri manuel fastidieux.',
            '',
            '1.3 Mettre en évidence les débats et les divergences',
            '',
            'Les bonnes IA de recherche savent :',
            '• montrer qu\'un sujet n\'est pas tranché,',
            '• exposer plusieurs positions,',
            '• identifier des controverses,',
            '• révéler des zones d\'incertitude.',
            '',
            '👉 Elles sont plus utiles quand elles montrent le désaccord que le consensus.'
          ]
        },
        {
          title: '2. CE QUE CES IA FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Elles ne jugent pas la qualité intellectuelle d\'une source',
            '',
            'Une IA peut :',
            '• citer un article,',
            '• résumer une étude,',
            '• mentionner un rapport,',
            '',
            'sans savoir :',
            '• si la méthodologie est faible,',
            '• si la source est biaisée,',
            '• si l\'auteur est controversé,',
            '• si l\'étude est obsolète ou contestée.',
            '',
            '👉 La crédibilité scientifique ou intellectuelle n\'est pas calculable automatiquement.',
            '',
            '2.2 Elles reflètent l\'état du web, pas l\'état de la vérité',
            '',
            'Les IA de recherche sont :',
            '• dépendantes de contenus existants,',
            '• sensibles aux tendances dominantes,',
            '• influencées par ce qui est le plus publié.',
            '',
            '👉 Elles reflètent un paysage informationnel, pas une réalité objective.',
            '',
            '2.3 Elles donnent une illusion de maîtrise intellectuelle',
            '',
            'C\'est le danger psychologique principal.',
            '',
            'Après une synthèse IA :',
            '• on se sent informé,',
            '• on se sent prêt à parler,',
            '• on se sent légitime.',
            '',
            'Mais souvent :',
            '• la compréhension est superficielle,',
            '• les nuances manquent,',
            '• les implications profondes sont absentes.',
            '',
            '👉 Comprendre rapidement n\'est pas comprendre profondément.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 4',
          content: [
            'Une bonne IA de recherche doit t\'amener',
            'à lire moins de mauvaises sources',
            'et plus de bonnes sources.',
            '',
            'Si elle te permet :',
            '• de ne plus lire du tout,',
            '👉 elle est mal utilisée.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE CADRE (INDISPENSABLE)',
          content: [
            'Dans tous les cas suivants, les IA de recherche (ex. Perplexity, Elicit) :',
            '',
            '👉 ne remplacent jamais la lecture critique',
            '👉 ne valident jamais une vérité',
            '👉 ne dispensent jamais de responsabilité intellectuelle',
            '',
            'Elles servent à explorer plus vite, pas à penser moins.'
          ]
        },
        {
          title: '1. DIRIGEANT / COMITÉ DE DIRECTION',
          content: [
            'Usage IA sain :',
            '',
            'Le dirigeant utilise l\'IA pour :',
            '• cartographier un sujet stratégique inconnu',
            '• comprendre rapidement un marché, une technologie, une réglementation',
            '• identifier les grandes tendances et controverses',
            '• préparer des arbitrages éclairés',
            '',
            'Exemples concrets :',
            '• "Quelles sont les grandes tendances contradictoires sur ce marché ?"',
            '• "Quels risques sont sous-estimés dans les analyses dominantes ?"',
            '• "Quels scénarios pessimistes sont peu évoqués ?"',
            '',
            '👉 L\'IA ouvre le champ.',
            'Le dirigeant tranche.',
            '',
            'Mauvais usage fréquent :',
            '• utiliser une synthèse IA comme base de décision finale',
            '• ne pas confronter la recherche à la réalité terrain',
            '',
            '👉 Stratégie hors-sol garantie.'
          ]
        },
        {
          title: '2. CONSULTANT / STRATÉGIE / TRANSFORMATION',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA sert à :',
            '• cartographier rapidement un secteur client',
            '• identifier les grands courants de pensée',
            '• repérer les pratiques émergentes',
            '• éviter les angles morts grossiers',
            '',
            'Exemples :',
            '• "Quelles approches opposées existent sur ce sujet ?"',
            '• "Quelles pratiques sont controversées mais prometteuses ?"',
            '',
            '👉 Le consultant gagne du temps pour l\'analyse humaine et le terrain.',
            '',
            'Mauvais usage :',
            '• livrer des synthèses IA comme diagnostic',
            '• confondre veille rapide et expertise',
            '',
            '👉 Le client n\'achète pas une synthèse.',
            'Il achète un jugement.'
          ]
        },
        {
          title: '3. JURISTE / AVOCAT / CONFORMITÉ',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA est utilisée pour :',
            '• repérer rapidement des évolutions réglementaires',
            '• identifier des interprétations divergentes',
            '• comprendre l\'esprit d\'un texte ou d\'une jurisprudence',
            '• préparer une analyse approfondie',
            '',
            '👉 L\'IA éclaire.',
            'Le juriste valide.',
            '',
            'Mauvais usage (très dangereux) :',
            '• se fier à une interprétation IA',
            '• ne pas vérifier les sources primaires',
            '',
            '👉 Risque juridique majeur.'
          ]
        },
        {
          title: 'QUESTION CLÉ À SE POSER APRÈS UNE RECHERCHE IA',
          content: [
            '"Quelles sources vais-je maintenant lire moi-même ?"',
            '',
            'Si la réponse est :',
            '"Aucune"',
            '',
            '👉 La recherche est incomplète.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — OUTILS, ARCHITECTURE, WORKFLOWS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. TYPOLOGIE DES OUTILS (NE PAS CONFONDRE LEURS RÔLES)',
          content: [
            '1.1 Moteurs de recherche augmentés (exploration rapide)',
            '',
            'Exemples :',
            '• Perplexity',
            '• Bing',
            '',
            'Rôle :',
            '• exploration initiale',
            '• réponses synthétiques',
            '• comparaison multi-sources',
            '• orientation rapide',
            '',
            '👉 Idéal pour commencer, dangereux pour conclure.',
            '',
            '1.2 Assistants de recherche académique / experte',
            '',
            'Exemples :',
            '• Elicit',
            '• Consensus',
            '',
            'Rôle :',
            '• recherche structurée',
            '• extraction d\'arguments',
            '• cartographie des débats',
            '• accès à la littérature',
            '',
            '👉 Excellents pour nourrir une analyse, pas pour décider seuls.'
          ]
        },
        {
          title: '2. ARCHITECTURE PROFESSIONNELLE SAINE (MODÈLE DE RÉFÉRENCE)',
          content: [
            'Principe fondamental :',
            '',
            'La veille doit être organisée comme un processus,',
            'pas comme une succession de recherches opportunistes.',
            '',
            'Architecture recommandée (robuste et durable) :',
            '1. Question stratégique humaine',
            '   • Pourquoi je cherche ?',
            '   • Quelle décision ou action est en jeu ?',
            '2. Exploration large via IA',
            '   • cartographie',
            '   • tendances',
            '   • controverses',
            '3. Sélection humaine des sources',
            '   • ce qui mérite d\'être lu',
            '   • ce qui peut être ignoré',
            '4. Lecture critique ciblée',
            '   • sources primaires',
            '   • documents de référence',
            '5. Synthèse humaine',
            '   • ce que j\'ai compris',
            '   • ce que je ne sais pas encore',
            '6. Mise à jour régulière',
            '   • veille continue, pas ponctuelle',
            '',
            '👉 L\'IA intervient surtout aux étapes 2 et 3.',
            'Les étapes 1, 4 et 5 sont humaines.'
          ]
        },
        {
          title: '3. BONNES PRATIQUES PROFESSIONNELLES (INDISPENSABLES)',
          content: [
            '4.1 Toujours formuler une question avant de chercher',
            '',
            'Mauvais : "Dis-moi tout sur…"',
            '',
            'Bon : "Quelles sont les controverses actuelles sur… ?"',
            '',
            '👉 La qualité de la recherche dépend de la qualité de la question.',
            '',
            '4.2 Distinguer exploration et validation',
            '• exploration → IA très utile',
            '• validation → humain obligatoire',
            '',
            '👉 Ne jamais inverser ces étapes.',
            '',
            '4.3 Limiter volontairement le temps de recherche IA',
            '',
            'Règle saine :',
            '• temps IA court',
            '• temps lecture long',
            '',
            '👉 Sinon, la veille devient une fuite en avant.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : L\'ILLUSION DE SAVOIR',
          content: [
            'Le danger principal de ce secteur n\'est pas la désinformation brute.',
            '👉 C\'est l\'illusion de compétence.',
            '',
            'Mécanisme très courant :',
            '• une synthèse claire,',
            '• bien structurée,',
            '• multi-sources,',
            '• livrée rapidement,',
            '',
            '➡️ donne au professionnel le sentiment de maîtrise.',
            '',
            'Mais en réalité :',
            '• il n\'a pas lu les sources,',
            '• il ne connaît pas les controverses en profondeur,',
            '• il ne maîtrise pas les implications,',
            '• il n\'a pas testé la solidité des arguments.',
            '',
            '👉 Il sait "de quoi ça parle", mais pas "ce que ça engage".',
            '',
            'C\'est extrêmement dangereux pour :',
            '• les dirigeants,',
            '• les experts,',
            '• les formateurs,',
            '• les consultants,',
            '• les porte-parole.'
          ]
        },
        {
          title: '2. LE RISQUE ÉTHIQUE : PARLER SANS AVOIR VÉRIFIÉ',
          content: [
            'Un point fondamental, souvent ignoré :',
            '',
            'Prendre la parole sur un sujet sans avoir vérifié les sources primaires',
            'est une faute éthique professionnelle.',
            '',
            'Pourquoi ?',
            'Parce que :',
            '• la parole influence,',
            '• la parole oriente,',
            '• la parole engage la confiance des autres.',
            '',
            'Dire :',
            '"Selon les études…"',
            '',
            'sans avoir :',
            '• lu les études,',
            '• compris leur méthodologie,',
            '• identifié leurs limites,',
            '',
            '👉 c\'est une posture trompeuse, même sans intention de nuire.'
          ]
        },
        {
          title: '3. CE QUI DOIT RESTER STRICTEMENT HUMAIN (TOUJOURS)',
          content: [
            'Même avec des IA de recherche très avancées, certaines fonctions sont intransférables :',
            '',
            '🔹 Le jugement de crédibilité',
            'Savoir à qui faire confiance.',
            '',
            '🔹 L\'évaluation de la qualité intellectuelle',
            'Méthodologie, rigueur, honnêteté.',
            '',
            '🔹 La mise en perspective',
            'Relier un savoir à un contexte réel.',
            '',
            '🔹 La prise de position',
            'Dire : "Voilà ce que j\'en pense, et pourquoi."',
            '',
            '🔹 L\'acceptation du doute',
            'Reconnaître ce qu\'on ne sait pas encore.',
            '',
            '👉 L\'IA n\'a pas d\'humilité.',
            'Le professionnel, si.'
          ]
        },
        {
          title: '4. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• J\'utilise l\'IA pour explorer, pas pour conclure',
            '• Je lis toujours au moins quelques sources primaires',
            '• Je distingue ce qui est établi de ce qui est débattu',
            '• J\'assume mes zones d\'incertitude',
            '• Je préfère dire "je ne sais pas encore" que parler à vide'
          ]
        },
        {
          title: '5. TEST FINAL DE MATURITÉ (TRÈS SIMPLE)',
          content: [
            'Pose cette question à un professionnel :',
            '',
            '"Peux-tu défendre cette position',
            'sans citer l\'IA ni ses synthèses ?"',
            '',
            '• Oui → usage mature',
            '• Non → dépendance intellectuelle'
          ]
        }
      ]
    }
  ],
  conclusion: `Ce secteur ne concerne pas l'accès à l'information.
Il concerne l'éthique de la connaissance et la responsabilité de la parole.

⸻

SYNTHÈSE GLOBALE

👉 Les IA de recherche et de veille n'existent pas pour dire le vrai,
mais pour rendre un sujet intelligible plus rapidement afin que l'humain exerce son discernement.

Les IA de recherche et de veille sont excellentes pour explorer, cartographier et réduire le bruit.
Elles sont dangereuses dès qu'on leur confie l'évaluation de la vérité, de la qualité ou de la pertinence finale.

Les IA de recherche créent de la valeur quand elles accélèrent l'exploration et élargissent la compréhension.
Elles détruisent de la valeur quand elles remplacent l'effort intellectuel et la vérification humaine.

👉 Les IA de recherche n'augmentent pas la connaissance.
Elles rendent visible la différence entre s'informer et comprendre.`
}

// Contenu de la formation "IA d'Automatisation et d'Orchestration - Secteur 5"
export const iaAutomatisationContent: FormationContent = {
  formationId: 'formation_ia_automatisation',
  introduction: `Les organisations modernes sont freinées par :
• des tâches répétitives à faible valeur,
• des ruptures entre outils (silos),
• des erreurs humaines de saisie,
• des délais d'exécution inutiles,
• une charge mentale administrative chronique.

👉 Le problème n'est pas le manque de compétences.
C'est la friction permanente entre intention et exécution.

Ce secteur existe pour :
• supprimer la répétition inutile,
• fiabiliser l'exécution,
• orchestrer des actions entre systèmes,
• libérer du temps cognitif humain.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE PROBLÈME HUMAIN RÉEL)',
          content: [
            'Les organisations modernes sont freinées par :',
            '• des tâches répétitives à faible valeur,',
            '• des ruptures entre outils (silos),',
            '• des erreurs humaines de saisie,',
            '• des délais d\'exécution inutiles,',
            '• une charge mentale administrative chronique.',
            '',
            '👉 Le problème n\'est pas le manque de compétences.',
            'C\'est la friction permanente entre intention et exécution.',
            '',
            'Ce secteur existe pour :',
            '• supprimer la répétition inutile,',
            '• fiabiliser l\'exécution,',
            '• orchestrer des actions entre systèmes,',
            '• libérer du temps cognitif humain.'
          ]
        },
        {
          title: '2. LA DISTINCTION CLÉ : AUTOMATISER ≠ OPTIMISER',
          content: [
            'Erreur classique :',
            '"Si on automatise, ce sera plus efficace."',
            '',
            'Faux.',
            '• Automatiser un mauvais processus → on accélère le chaos.',
            '• Automatiser sans comprendre → on perd le contrôle.',
            '• Automatiser sans responsabilité → on crée des incidents invisibles.',
            '',
            '👉 L\'automatisation est un amplificateur.',
            'Elle amplifie la qualité… ou les erreurs.'
          ]
        },
        {
          title: '3. CE QUE CES IA SONT RÉELLEMENT',
          content: [
            'Les outils de ce secteur sont :',
            '• des chefs d\'orchestre d\'actions numériques,',
            '• des ponts entre logiciels,',
            '• des exécutants fiables de règles définies par l\'humain.',
            '',
            'Ils savent :',
            '• déclencher des actions automatiquement,',
            '• transférer des données entre outils,',
            '• appliquer des règles conditionnelles,',
            '• enchaîner des tâches sans intervention humaine.',
            '',
            'Outils représentatifs :',
            '• Zapier',
            '• Make',
            '• n8n',
            '',
            '👉 Ils n\'ont aucune intelligence métier par défaut.',
            'Ils exécutent ce que vous avez décidé.'
          ]
        },
        {
          title: '4. CE QU\'ILS NE SONT PAS (ET NE SERONT JAMAIS)',
          content: [
            'Même "augmentés par l\'IA", ces outils ne sont pas :',
            '',
            '❌ des décideurs',
            '❌ des stratèges',
            '❌ des arbitres de priorité',
            '❌ des gardiens du sens',
            '',
            'Ils :',
            '• n\'évaluent pas l\'opportunité,',
            '• ne comprennent pas les conséquences humaines,',
            '• n\'assument aucune erreur.',
            '',
            '👉 Ils font exactement ce qu\'on leur a demandé.',
            'Y compris quand c\'est une mauvaise idée.'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'N\'automatise jamais ce que tu ne comprends pas parfaitement.',
            '',
            'Si tu ne peux pas expliquer le processus à voix haute,',
            'tu ne dois pas l\'automatiser.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES OUTILS FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES OUTILS FONT EXTRÊMEMENT BIEN (LEUR VRAIE VALEUR)',
          content: [
            '1.1 Éliminer la répétition mécanique sans valeur',
            '',
            'C\'est leur raison d\'être.',
            '',
            'Ils excellent pour :',
            '• copier des données d\'un outil à un autre,',
            '• déclencher des actions conditionnelles,',
            '• exécuter des tâches standardisées,',
            '• enchaîner des étapes sans fatigue.',
            '',
            'Exemples typiques :',
            '• un formulaire rempli → création d\'un contact → notification,',
            '• une facture reçue → classement → enregistrement,',
            '• une commande validée → mise à jour stock → email client.',
            '',
            '👉 Ils remplacent les gestes mécaniques, pas les décisions.',
            '',
            '1.2 Fiabiliser l\'exécution (moins d\'erreurs humaines)',
            '',
            'L\'automatisation apporte :',
            '• régularité,',
            '• traçabilité,',
            '• suppression des oublis,',
            '• respect strict des règles définies.',
            '',
            '👉 Un processus automatisé bien conçu fait toujours la même chose.',
            'C\'est à la fois sa force… et son danger.',
            '',
            '1.3 Accélérer les délais sans pression humaine',
            '',
            'Contrairement à l\'humain :',
            '• l\'outil ne procrastine pas,',
            '• n\'est pas distrait,',
            '• n\'oublie pas,',
            '• ne "verra ça plus tard".',
            '',
            '👉 La vitesse vient de l\'absence de friction, pas de l\'intelligence.'
          ]
        },
        {
          title: '2. CE QUE CES OUTILS FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Ils automatisent sans comprendre',
            '',
            'Un outil d\'automatisation :',
            '• ne comprend pas le métier,',
            '• ne comprend pas le contexte,',
            '• ne comprend pas l\'exception.',
            '',
            'Il applique :',
            '• des règles,',
            '• des conditions,',
            '• des déclencheurs.',
            '',
            '👉 S\'il reçoit une instruction absurde, il l\'exécutera parfaitement.',
            '',
            '2.2 Ils gèrent très mal l\'exception (le réel)',
            '',
            'Le réel est fait de :',
            '• cas particuliers,',
            '• situations ambiguës,',
            '• exceptions non prévues,',
            '• contextes humains.',
            '',
            'Or :',
            '• l\'automatisation aime le déterminisme,',
            '• le monde réel est probabiliste.',
            '',
            '👉 Plus un processus est humain, moins il est automatisable à 100 %.',
            '',
            '2.3 Ils rendent les erreurs systémiques',
            '',
            'Une erreur humaine :',
            '• est ponctuelle,',
            '• souvent détectée,',
            '• limitée dans le temps.',
            '',
            'Une erreur automatisée :',
            '• se répète,',
            '• se propage,',
            '• touche tous les flux,',
            '• peut durer longtemps sans être vue.',
            '',
            '👉 Une mauvaise règle automatisée fait beaucoup plus de dégâts qu\'un humain maladroit.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 5',
          content: [
            'Si personne ne peut expliquer clairement',
            'ce que fait une automatisation et pourquoi,',
            'elle doit être arrêtée.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE CADRE (NON NÉGOCIABLE)',
          content: [
            'Dans tous les cas suivants, les outils d\'automatisation (ex. Zapier, Make, n8n) :',
            '',
            '👉 exécutent des règles définies par l\'humain',
            '👉 ne prennent jamais de décisions métier',
            '👉 doivent toujours avoir un responsable identifié'
          ]
        },
        {
          title: '1. VENTES / COMMERCIAL / CRM',
          content: [
            'Automatisations pertinentes :',
            '',
            'Cas d\'usage concrets :',
            '• lead entrant → qualification automatique → assignation commerciale',
            '• formulaire rempli → création CRM → notification Slack',
            '• devis signé → mise à jour statut → relance automatique',
            '',
            '👉 L\'automatisation sécurise le suivi, pas la relation commerciale.',
            '',
            'Ce qui doit rester humain :',
            '• qualification finale',
            '• compréhension du besoin réel',
            '• négociation',
            '• décision de relance ou d\'abandon',
            '',
            'Erreur fréquente :',
            '• automatiser la relation client',
            '• emails trop mécaniques',
            '• séquences déconnectées du réel',
            '',
            '👉 La vente est relationnelle.',
            'L\'automatisation doit rester en arrière-plan.'
          ]
        },
        {
          title: '2. MARKETING / GROWTH',
          content: [
            'Automatisations pertinentes :',
            '• publication multi-canal programmée',
            '• synchronisation outils marketing',
            '• scoring simple de leads',
            '• alertes sur performances anormales',
            '',
            '👉 L\'IA orchestre la diffusion.',
            'La stratégie reste humaine.',
            '',
            'Erreur fréquente :',
            '• automatiser sans vision',
            '• produire trop de contenus',
            '• suivre des métriques sans sens',
            '',
            '👉 Automatiser du bruit amplifie le bruit.'
          ]
        },
        {
          title: '3. FINANCE / COMPTABILITÉ',
          content: [
            'Automatisations pertinentes :',
            '• collecte automatique de factures',
            '• rapprochements simples',
            '• classement comptable',
            '• alertes anomalies',
            '',
            '👉 Fiabilité et gain de temps réel.',
            '',
            'Ce qui reste humain :',
            '• validation finale',
            '• arbitrages financiers',
            '• décisions budgétaires',
            '• analyse de risque',
            '',
            'Erreur fréquente :',
            '• automatiser sans contrôle',
            '• ne pas prévoir de vérification humaine',
            '',
            '👉 Une erreur financière automatisée est systémique.'
          ]
        },
        {
          title: 'QUESTION CLÉ À POSER AVANT TOUTE AUTOMATISATION',
          content: [
            '"Que se passe-t-il si cette automatisation se trompe ?"',
            '',
            'Si la réponse est :',
            '"On ne sait pas"',
            '',
            '👉 Il ne faut pas l\'automatiser.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — ARCHITECTURE, WORKFLOWS, GOUVERNANCE & BONNES PRATIQUES',
      sections: [
        {
          title: '1. PRINCIPE FONDAMENTAL (À GRAVER DANS LE MARBRE)',
          content: [
            'Une automatisation est un processus métier figé dans le temps.',
            'Si le métier évolue et que l\'automatisation ne suit pas, elle devient toxique.',
            '',
            '👉 L\'enjeu n\'est donc pas "d\'automatiser",',
            'mais de maintenir une automatisation vivante, compréhensible et gouvernée.'
          ]
        },
        {
          title: '2. ARCHITECTURE PROFESSIONNELLE SAINE (MODÈLE DE RÉFÉRENCE)',
          content: [
            'Une architecture saine respecte 6 couches distinctes :',
            '',
            '1. Intention métier (humaine)',
            '   • Pourquoi ce processus existe ?',
            '   • Quel problème réel résout-il ?',
            '',
            '2. Processus documenté',
            '   • étapes claires',
            '   • cas standards',
            '   • exceptions connues',
            '',
            '3. Règles d\'automatisation',
            '   • conditions explicites',
            '   • seuils définis',
            '   • limites posées',
            '',
            '4. Outil d\'orchestration',
            '   • exécution technique',
            '   • ex. Zapier, Make, n8n',
            '',
            '5. Contrôle & supervision',
            '   • logs',
            '   • alertes',
            '   • monitoring',
            '',
            '6. Responsable humain identifié',
            '   • propriétaire du workflow',
            '   • droit d\'arrêt',
            '   • responsabilité claire',
            '',
            '👉 Si une couche manque, le système est fragile.'
          ]
        },
        {
          title: '3. BONNES PRATIQUES ESSENTIELLES (NON NÉGOCIABLES)',
          content: [
            '4.1 Toujours prévoir un "kill switch" humain',
            '',
            'Chaque automatisation doit avoir :',
            '• un bouton d\'arrêt',
            '• un responsable identifié',
            '• un plan de reprise manuel',
            '',
            '👉 Automatiser sans possibilité d\'arrêt est une faute grave.',
            '',
            '4.2 Documenter pour quelqu\'un qui n\'était pas là',
            '',
            'La documentation doit permettre à :',
            '• un nouveau collaborateur',
            '• un manager',
            '• un prestataire externe',
            '',
            'de comprendre :',
            '• ce que fait l\'automatisation',
            '• pourquoi elle existe',
            '• quand elle doit être modifiée ou supprimée',
            '',
            '👉 Si seul le créateur comprend, c\'est un risque.',
            '',
            '4.3 Réviser régulièrement les automatisations',
            '',
            'Règle saine :',
            '• revue trimestrielle minimum',
            '• suppression des workflows inutiles',
            '• ajustement aux évolutions métier',
            '',
            '👉 Une automatisation obsolète est pire qu\'aucune automatisation.'
          ]
        },
        {
          title: '4. GOUVERNANCE MINIMALE (INDISPENSABLE MÊME EN PME)',
          content: [
            'Rôles clairs :',
            '• créateur',
            '• propriétaire',
            '• utilisateur',
            '• décideur d\'arrêt',
            '',
            'Zones sensibles (quasi interdites) :',
            '• décisions RH individuelles',
            '• décisions financières finales',
            '• sanctions',
            '• arbitrages humains',
            '',
            '👉 Plus l\'impact humain est fort, moins l\'automatisation est acceptable.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : L\'AUTOMATISATION QUI DÉRESPONSABILISE',
          content: [
            'Le danger principal de ce secteur n\'est ni technique, ni financier.',
            '',
            '👉 Le danger est organisationnel et humain.',
            '',
            'Mécanisme typique :',
            '• "ça tourne tout seul"',
            '• "c\'est automatisé"',
            '• "ce n\'est pas moi, c\'est le workflow"',
            '• plus personne ne surveille',
            '• plus personne n\'assume',
            '',
            '👉 La responsabilité se dissout dans le système.',
            '',
            'Quand un incident arrive :',
            '• personne ne sait expliquer',
            '• personne ne sait arrêter vite',
            '• personne ne sait corriger proprement',
            '',
            '👉 L\'automatisation devient un angle mort de gouvernance.'
          ]
        },
        {
          title: '2. LE RISQUE SYSTÉMIQUE : L\'ERREUR QUI SE RÉPÈTE À GRANDE ÉCHELLE',
          content: [
            'Une erreur humaine :',
            '• est localisée',
            '• souvent détectée',
            '• rarement répétée exactement à l\'identique',
            '',
            'Une erreur automatisée :',
            '• se répète parfaitement',
            '• touche tous les flux',
            '• se propage vite',
            '• peut durer longtemps sans alerte',
            '',
            '👉 L\'IA ne fait pas plus d\'erreurs.',
            'Elle fait des erreurs plus massives.',
            '',
            'C\'est particulièrement critique pour :',
            '• finance',
            '• service client',
            '• RH',
            '• conformité',
            '• données personnelles'
          ]
        },
        {
          title: '3. CE QUI NE DOIT JAMAIS ÊTRE AUTOMATISÉ',
          content: [
            'Même avec des IA très avancées, certaines actions doivent rester humaines :',
            '',
            '❌ Décisions RH individuelles',
            '(recrutement, sanction, licenciement)',
            '',
            '❌ Décisions financières finales',
            '(validation de paiement, arbitrage budgétaire)',
            '',
            '❌ Arbitrages à fort impact humain',
            '(refus sensible, exclusion, pénalité)',
            '',
            '❌ Gestion de crise',
            '(le réel est toujours plus complexe que le scénario)',
            '',
            '👉 Plus l\'impact est humain, plus l\'automatisation est dangereuse.'
          ]
        },
        {
          title: '4. RESPONSABILITÉ : LA RÈGLE ABSOLUE (NON NÉGOCIABLE)',
          content: [
            'Tout ce qu\'une automatisation fait,',
            'quelqu\'un doit pouvoir dire : "c\'est sous ma responsabilité".',
            '',
            'Il doit toujours y avoir :',
            '• un propriétaire humain',
            '• un droit d\'arrêt',
            '• une capacité d\'explication',
            '• une traçabilité claire',
            '',
            'Phrase inacceptable :',
            '"C\'est le système qui fait ça."',
            '',
            '👉 Un système n\'est jamais responsable.',
            'Les humains le sont.'
          ]
        },
        {
          title: '5. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• J\'automatise ce que je comprends parfaitement',
            '• Je garde toujours un droit d\'arrêt humain',
            '• Je documente pour quelqu\'un qui n\'était pas là',
            '• Je révise régulièrement mes automatisations',
            '• J\'assume personnellement ce que le système fait'
          ]
        },
        {
          title: '6. TEST FINAL DE MATURITÉ (SIMPLE ET BRUTAL)',
          content: [
            'Pose cette question dans une organisation :',
            '',
            '"Qui est responsable de cette automatisation,',
            'et peut-il l\'arrêter maintenant ?"',
            '',
            '• Réponse claire → usage mature',
            '• Réponse floue → risque critique'
          ]
        }
      ]
    }
  ],
  conclusion: `Ce secteur ne concerne pas la technologie.
Il concerne le pouvoir d'agir… et le courage d'en répondre.

⸻

SYNTHÈSE GLOBALE

👉 L'IA d'automatisation n'existe pas pour remplacer l'humain,
mais pour supprimer la répétition inutile et fiabiliser l'exécution
afin que l'humain se concentre sur ce qui nécessite du jugement.

Les outils d'automatisation sont excellents pour exécuter des règles simples, répétitives et bien comprises.
Ils deviennent dangereux dès qu'on leur confie de la complexité humaine, de l'exception ou du jugement.

Les IA d'automatisation créent de la valeur quand elles exécutent des règles simples, répétitives et maîtrisées.
Elles détruisent de la valeur quand elles remplacent le discernement humain ou masquent les erreurs.

👉 L'automatisation n'enlève pas la responsabilité humaine.
Elle la rend plus exigeante, plus visible et plus indispensable.`
}

// Contenu de la formation "IA Créative, Visuelle, Audio & Multimodale - Secteur 6"
export const iaCreativeContent: FormationContent = {
  formationId: 'formation_ia_creative',
  introduction: `Ce secteur ne répond pas d'abord à un besoin artistique.
Il répond à une rupture structurelle dans la production de contenus.

Aujourd'hui, toutes les organisations ont besoin de :
• visuels (réseaux sociaux, présentations, branding)
• vidéos (marketing, formation, communication interne)
• audio (podcasts, voice-over, formation)
• contenus multi-formats rapides et cohérents

Or :
• produire coûte cher,
• produire prend du temps,
• produire demande des compétences multiples,
• les cycles de validation sont longs.

👉 Le monde demande plus de contenus que les humains ne peuvent en produire de manière artisanale.

Ce secteur existe pour :
• abaisser le coût d'entrée de la création
• accélérer les itérations
• permettre l'exploration créative rapide
• déplacer l'effort humain vers la direction artistique et le sens`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE PROBLÈME RÉEL)',
          content: [
            'Ce secteur ne répond pas d\'abord à un besoin artistique.',
            'Il répond à une rupture structurelle dans la production de contenus.',
            '',
            'Aujourd\'hui, toutes les organisations ont besoin de :',
            '• visuels (réseaux sociaux, présentations, branding)',
            '• vidéos (marketing, formation, communication interne)',
            '• audio (podcasts, voice-over, formation)',
            '• contenus multi-formats rapides et cohérents',
            '',
            'Or :',
            '• produire coûte cher,',
            '• produire prend du temps,',
            '• produire demande des compétences multiples,',
            '• les cycles de validation sont longs.',
            '',
            '👉 Le monde demande plus de contenus que les humains ne peuvent en produire de manière artisanale.'
          ]
        },
        {
          title: '2. LA DISTINCTION FONDAMENTALE : CRÉER ≠ PRODUIRE',
          content: [
            'C\'est l\'erreur la plus courante.',
            '',
            '❌ Vision naïve :',
            '"L\'IA crée à ma place."',
            '',
            '✅ Réalité professionnelle :',
            '• l\'humain crée l\'intention',
            '• l\'IA produit des variations',
            '• l\'humain choisit, ajuste, valide',
            '',
            '👉 L\'IA est une machine à propositions, pas une conscience créative.',
            '',
            'Elle :',
            '• explore vite',
            '• décline sans fatigue',
            '• combine des styles',
            '• matérialise des idées',
            '',
            'Mais elle ne :',
            '• ressent rien',
            '• n\'a aucune intention',
            '• ne sait pas pourquoi quelque chose est juste',
            '• ne comprend pas le contexte culturel fin'
          ]
        },
        {
          title: '3. CE QUE CES IA SONT RÉELLEMENT',
          content: [
            'Les IA créatives sont :',
            '• des moteurs de génération multimodale',
            '• des simulateurs de styles',
            '• des accélérateurs de prototypage créatif',
            '',
            'Elles transforment :',
            '• du texte → en image',
            '• une image → en variation',
            '• du texte → en vidéo',
            '• du texte → en voix',
            '• un concept → en multiples formats',
            '',
            'Exemples d\'outils emblématiques :',
            '• Midjourney (image / direction artistique)',
            '• DALL·E (illustration, concepts)',
            '• Runway (vidéo)',
            '• Adobe Firefly (création pro intégrée)',
            '',
            '👉 Elles matérialisent une idée.',
            'Elles ne la justifient jamais.'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Si tu n\'as pas d\'intention claire,',
            'l\'IA produira du "joli inutile".',
            '',
            'Si tu sais ce que tu veux faire ressentir,',
            'l\'IA devient un accélérateur créatif puissant.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES IA FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE CES IA FONT EXTRÊMEMENT BIEN (LEUR VRAIE PUISSANCE)',
          content: [
            '1.1 Générer rapidement des volumes de propositions créatives',
            '',
            'C\'est leur avantage structurel numéro un.',
            '',
            'Les IA créatives excellent pour :',
            '• produire des dizaines de variations à partir d\'une idée,',
            '• explorer des styles graphiques, narratifs ou sonores,',
            '• matérialiser une intuition encore floue,',
            '• permettre des essais sans coût marginal.',
            '',
            'Avec des outils comme :',
            '• Midjourney',
            '• DALL·E',
            '• Adobe Firefly',
            '',
            '👉 Elles sont idéales pour l\'exploration, pas pour la décision finale.',
            '',
            '1.2 Accélérer le prototypage visuel, vidéo et audio',
            '',
            'Avant :',
            '• une idée nécessitait un brief,',
            '• puis une production,',
            '• puis des retours,',
            '• puis une nouvelle version.',
            '',
            'Aujourd\'hui :',
            '• une idée → plusieurs rendus immédiats.',
            '',
            '👉 La valeur est dans la vitesse d\'itération, pas dans le rendu brut.',
            '',
            '1.3 Démocratiser l\'accès à des compétences techniques complexes',
            '',
            'Ces IA permettent à :',
            '• un marketeur de produire un visuel,',
            '• un formateur de créer une vidéo explicative,',
            '• un entrepreneur de tester une identité visuelle,',
            '• un communicant de produire de l\'audio.',
            '',
            '👉 Elles abaissent la barrière technique, pas la barrière du goût.'
          ]
        },
        {
          title: '2. CE QUE CES IA FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Elles ne savent pas ce qui est "juste", seulement ce qui est "plausible"',
            '',
            'Une IA créative produit :',
            '• quelque chose de crédible,',
            '• esthétiquement acceptable,',
            '• souvent "joli".',
            '',
            'Mais elle ne sait pas :',
            '• si c\'est pertinent,',
            '• si c\'est cohérent avec une marque,',
            '• si ça respecte un contexte culturel,',
            '• si ça provoque la bonne émotion.',
            '',
            '👉 La beauté n\'est pas la justesse.',
            '',
            '2.2 Elles tendent vers une uniformisation esthétique',
            '',
            'Pourquoi autant de contenus IA se ressemblent ?',
            '',
            'Parce que :',
            '• elles sont entraînées sur des masses de contenus dominants,',
            '• elles optimisent vers des styles populaires,',
            '• elles lissent les aspérités.',
            '',
            'Résultat :',
            '• mêmes lumières,',
            '• mêmes compositions,',
            '• mêmes visages,',
            '• mêmes ambiances "cinéma propre".',
            '',
            '👉 Sans direction artistique humaine forte,',
            'l\'IA produit du "beau générique".',
            '',
            '2.3 Elles ignorent le contexte juridique, culturel et symbolique',
            '',
            'Une image peut être :',
            '• culturellement maladroite,',
            '• symboliquement problématique,',
            '• juridiquement risquée,',
            '• socialement mal interprétée.',
            '',
            'L\'IA :',
            '• ne perçoit pas ces lignes invisibles,',
            '• ne comprend pas les non-dits,',
            '• ne mesure pas les conséquences.',
            '',
            '👉 Un visuel peut être techniquement réussi et humainement désastreux.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 6',
          content: [
            'Si tu ne peux pas expliquer pourquoi ce visuel, cette vidéo ou cette voix est la bonne,',
            'alors ce n\'est probablement pas la bonne.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE CADRE (INDISPENSABLE)',
          content: [
            'Dans tous les métiers ci-dessous, les IA créatives (ex. Midjourney, Runway, ElevenLabs) :',
            '',
            '👉 proposent',
            '👉 ne décident jamais',
            '👉 n\'assument aucune conséquence',
            '',
            'La responsabilité esthétique, culturelle et stratégique reste 100 % humaine.'
          ]
        },
        {
          title: '1. MARKETING / COMMUNICATION / BRANDING',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA est utilisée pour :',
            '• explorer des pistes visuelles rapidement',
            '• tester des univers graphiques',
            '• décliner une campagne sur plusieurs formats',
            '• prototyper avant production finale',
            '',
            'Cas concrets :',
            '• moodboards générés pour une campagne',
            '• variations visuelles d\'un même message',
            '• tests d\'accroches visuelles A/B',
            '• déclinaisons multi-réseaux',
            '',
            '👉 L\'IA accélère la phase "idées", pas la décision de marque.',
            '',
            'Ce qui doit rester humain :',
            '• positionnement',
            '• cohérence de marque',
            '• validation finale',
            '• choix de ce qui sera vu publiquement',
            '',
            'Erreur fréquente :',
            '• publier des visuels IA "parce qu\'ils sont beaux"',
            '• perdre l\'identité visuelle',
            '',
            '👉 Une marque sans ligne artistique devient invisible.'
          ]
        },
        {
          title: '2. DESIGNER / DIRECTEUR ARTISTIQUE',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA devient :',
            '• un moteur d\'exploration stylistique',
            '• un assistant de variations',
            '• un outil de recherche visuelle',
            '',
            '👉 Le designer devient plus "chef d\'orchestre" que producteur brut.',
            '',
            'Ce qui reste humain (critique) :',
            '• direction artistique',
            '• goût',
            '• cohérence visuelle globale',
            '• arbitrage final',
            '',
            'Erreur fréquente :',
            '• accepter un rendu IA sans retouche',
            '• confondre prototype et livrable',
            '',
            '👉 Un bon DA supprime plus qu\'il ne génère.'
          ]
        },
        {
          title: '3. FORMATEUR / ENSEIGNANT / COACH',
          content: [
            'Usage IA sain :',
            '',
            'L\'IA permet :',
            '• créer des visuels pédagogiques',
            '• produire des vidéos explicatives',
            '• générer des analogies visuelles',
            '• créer des voix off claires',
            '',
            'Outils souvent utilisés :',
            '• Adobe Firefly',
            '• Runway',
            '',
            '👉 La pédagogie gagne en clarté et en impact visuel.',
            '',
            'Ce qui reste humain :',
            '• la progression pédagogique',
            '• l\'interaction',
            '• l\'adaptation au public',
            '• l\'émotion transmise',
            '',
            'Erreur fréquente :',
            '• supports trop lisses',
            '• perte d\'incarnation',
            '',
            '👉 Un bon formateur n\'est pas un studio de production.'
          ]
        },
        {
          title: 'QUESTION CLÉ À SE POSER AVANT DIFFUSION',
          content: [
            '"Si ce contenu n\'était pas fait par une IA,',
            'le diffuserais-je quand même ?"',
            '',
            '• Oui → usage mature',
            '• Non → dérive créative'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — OUTILS, ARCHITECTURE, WORKFLOWS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. TYPOLOGIE DES OUTILS (NE PAS TOUT MÉLANGER)',
          content: [
            '1.1 Génération d\'images & visuels (exploration / concepts)',
            '',
            'Outils emblématiques :',
            '• Midjourney',
            '• DALL·E',
            '• Adobe Firefly',
            '',
            'Rôle :',
            '• exploration stylistique',
            '• moodboards',
            '• concepts visuels',
            '• variations rapides',
            '',
            'À faire :',
            '• générer beaucoup',
            '• comparer',
            '• supprimer massivement',
            '',
            'À ne jamais faire :',
            '• publier sans direction artistique',
            '• considérer le rendu comme final par défaut',
            '',
            '👉 Ce sont des outils d\'idéation visuelle, pas des studios de production finis.',
            '',
            '1.2 Génération vidéo & animation',
            '',
            'Outils clés :',
            '• Runway',
            '• Pika',
            '',
            '👉 Idéal pour penser une vidéo avant d\'investir.',
            '❌ Dangereux si utilisé comme livrable final sans montage humain.',
            '',
            '1.3 Génération audio & voix',
            '',
            'Outil de référence :',
            '• ElevenLabs',
            '',
            'Rôle :',
            '• voix off pédagogiques',
            '• prototypes audio',
            '• accessibilité',
            '• tests de ton',
            '',
            '❌ À éviter pour :',
            '• messages sensibles',
            '• communication incarnée',
            '• relation client',
            '',
            '👉 La voix crée de la confiance.',
            'Une voix synthétique doit être utilisée avec intention claire.'
          ]
        },
        {
          title: '2. ARCHITECTURE CRÉATIVE PROFESSIONNELLE (MODÈLE SAIN)',
          content: [
            'Principe fondamental :',
            '',
            'L\'IA doit intervenir en amont de la création finale,',
            'jamais à la place de la direction artistique.',
            '',
            'Architecture recommandée :',
            '1. Intention humaine claire',
            '   • message',
            '   • émotion',
            '   • public',
            '   • contexte',
            '',
            '2. Exploration IA massive',
            '   • styles',
            '   • formats',
            '   • variations',
            '',
            '3. Sélection humaine drastique',
            '   • suppression > 80 %',
            '   • choix assumés',
            '',
            '4. Production / retouche humaine',
            '   • cohérence',
            '   • narration',
            '   • qualité finale',
            '',
            '5. Validation humaine finale',
            '   • juridique',
            '   • culturelle',
            '   • stratégique',
            '',
            '👉 Plus on avance, moins l\'IA doit intervenir.'
          ]
        },
        {
          title: '3. BONNES PRATIQUES ESSENTIELLES (NON NÉGOCIABLES)',
          content: [
            '4.1 Toujours séparer "prototype" et "diffusion"',
            '',
            'Règle simple :',
            '• 90 % de ce que produit l\'IA ne doit jamais être publié.',
            '',
            '👉 La valeur est dans le tri.',
            '',
            '4.2 Créer un référentiel de style clair',
            '',
            'Indispensable pour :',
            '• marques',
            '• équipes',
            '• créateurs réguliers',
            '',
            'Inclure :',
            '• palettes',
            '• typographies',
            '• ton',
            '• interdits visuels',
            '',
            '👉 Sans cadre, l\'IA produit une identité floue.',
            '',
            '4.3 Introduire une règle de relecture humaine obligatoire',
            '',
            'Avant diffusion :',
            '• cohérence',
            '• symbolique',
            '• contexte culturel',
            '• risques juridiques',
            '',
            '👉 L\'IA ne voit pas ce que vous risquez.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LA BANALISATION DU BEAU',
          content: [
            'Le premier danger n\'est pas la mauvaise qualité.',
            '👉 C\'est la surproduction de contenus esthétiquement corrects mais culturellement vides.',
            '',
            'Mécanisme courant :',
            '• l\'IA produit vite,',
            '• c\'est "joli",',
            '• on publie,',
            '• on recommence.',
            '',
            'Résultat :',
            '• saturation visuelle,',
            '• perte d\'attention,',
            '• baisse de mémorabilité,',
            '• effacement des identités.',
            '',
            '👉 Quand tout est beau, plus rien n\'est remarquable.',
            '👉 La valeur créative se déplace vers la rareté, pas la production.'
          ]
        },
        {
          title: '2. LE RISQUE CULTUREL : L\'UNIFORMISATION DES IMAGINAIRES',
          content: [
            'Les IA créatives apprennent sur :',
            '• des contenus dominants,',
            '• des esthétiques populaires,',
            '• des références majoritaires.',
            '',
            'Conséquence directe :',
            '• mêmes visages,',
            '• mêmes lumières,',
            '• mêmes ambiances "cinéma propre",',
            '• mêmes codes narratifs.',
            '',
            '👉 Sans direction humaine forte, l\'IA appauvrit l\'imaginaire collectif.',
            '',
            'Ce risque est critique pour :',
            '• les marques,',
            '• les médias,',
            '• la formation,',
            '• la création artistique,',
            '• l\'éducation.'
          ]
        },
        {
          title: '3. CE QUI DOIT RESTER STRICTEMENT HUMAIN (TOUJOURS)',
          content: [
            'Même avec des IA créatives très avancées, certaines fonctions sont intransférables :',
            '',
            '🔹 Le goût',
            'Savoir dire : "non, ce n\'est pas juste".',
            '',
            '🔹 L\'intention narrative',
            'Pourquoi cette image ? Pourquoi maintenant ?',
            '',
            '🔹 Le cadre culturel',
            'Ce qui est acceptable ici, maintenant.',
            '',
            '🔹 La responsabilité symbolique',
            'Ce que ce contenu véhicule implicitement.',
            '',
            '🔹 Le courage créatif',
            'Assumer une esthétique qui ne plaît pas à tout le monde.',
            '',
            '👉 L\'IA optimise.',
            'L\'humain choisit.'
          ]
        },
        {
          title: '4. RESPONSABILITÉ : LA RÈGLE ABSOLUE',
          content: [
            'Tout contenu diffusé engage la responsabilité',
            'de la personne ou de l\'organisation qui le publie.',
            '',
            'Cela inclut :',
            '• le sens,',
            '• l\'impact émotionnel,',
            '• la symbolique,',
            '• la réception culturelle,',
            '• les conséquences sociales.',
            '',
            '👉 L\'IA ne porte aucune responsabilité.',
            'Elle n\'en portera jamais.'
          ]
        },
        {
          title: '5. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• J\'utilise l\'IA pour explorer, pas pour me définir',
            '• Je choisis plus que je ne produis',
            '• Je privilégie la cohérence à la quantité',
            '• J\'assume l\'impact culturel de ce que je diffuse',
            '• Je reste identifiable, même avec des outils puissants'
          ]
        },
        {
          title: '6. TEST FINAL DE MATURITÉ (SIMPLE ET BRUTAL)',
          content: [
            'Pose cette question :',
            '',
            '"Si tout le monde utilisait exactement les mêmes outils que moi,',
            'ce que je produis resterait-il reconnaissable ?"',
            '',
            '• Oui → usage mature',
            '• Non → uniformisation en cours'
          ]
        }
      ]
    }
  ],
  conclusion: `Ce secteur ne concerne pas la création.
Il concerne le sens, l'identité et le courage de choisir dans un monde où tout peut être généré.

⸻

SYNTHÈSE GLOBALE

👉 Les IA créatives ne remplacent pas la créativité humaine.
Elles déplacent la valeur vers l'intention, la direction et le choix.

Les IA créatives sont extraordinaires pour explorer, varier et matérialiser des idées.
Elles deviennent dangereuses dès qu'on leur confie le goût, le sens, la narration ou la responsabilité culturelle.

Les IA créatives créent de la valeur quand elles accélèrent l'exploration et enrichissent la réflexion créative.
Elles détruisent de la valeur quand elles remplacent la direction artistique, la narration et la responsabilité humaine.

👉 Les IA créatives n'enlèvent pas la responsabilité culturelle.
Elles la rendent plus lourde, plus visible et plus exigeante.`
}

// Contenu de la formation "IA Agentique & Systèmes Autonomes - Secteur 7"
export const iaAgentiqueContent: FormationContent = {
  formationId: 'formation_ia_agentique',
  introduction: `Jusqu'ici, l'IA :
• répondait à des demandes,
• exécutait des tâches ponctuelles,
• attendait une instruction humaine.

Avec l'IA agentique, on change de paradigme :

👉 L'IA peut maintenant :
• poursuivre un objectif sur la durée,
• découper un problème en sous-tâches,
• décider de la prochaine action,
• utiliser plusieurs outils,
• s'auto-corriger partiellement,
• fonctionner en continu.

👉 Ce n'est plus un outil.
C'est un système d'action.

Ce secteur existe parce que :
• les processus sont trop complexes pour être pilotés manuellement,
• les volumes d'actions explosent,
• la vitesse d'exécution humaine devient un goulot d'étranglement,
• les organisations veulent passer de l'automatisation statique à l'adaptation dynamique.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL DANS LE TRAVAIL HUMAIN',
      sections: [
        {
          title: '1. POURQUOI CE SECTEUR EXISTE (LE BASCULEMENT STRUCTUREL)',
          content: [
            'Jusqu\'ici, l\'IA :',
            '• répondait à des demandes,',
            '• exécutait des tâches ponctuelles,',
            '• attendait une instruction humaine.',
            '',
            'Avec l\'IA agentique, on change de paradigme :',
            '',
            '👉 L\'IA peut maintenant :',
            '• poursuivre un objectif sur la durée,',
            '• découper un problème en sous-tâches,',
            '• décider de la prochaine action,',
            '• utiliser plusieurs outils,',
            '• s\'auto-corriger partiellement,',
            '• fonctionner en continu.',
            '',
            '👉 Ce n\'est plus un outil.',
            'C\'est un système d\'action.'
          ]
        },
        {
          title: '2. LA DISTINCTION FONDAMENTALE : AUTOMATISATION ≠ AGENT',
          content: [
            'C\'est le point clé à comprendre.',
            '',
            'Automatisation classique :',
            '• règle fixe',
            '• déclencheur clair',
            '• scénario prédéfini',
            '• pas d\'initiative',
            '',
            'Agent IA :',
            '• objectif global',
            '• planification autonome',
            '• choix de séquences',
            '• itérations',
            '• ajustements',
            '',
            '👉 L\'agent ne suit pas un script.',
            'Il poursuit un but.'
          ]
        },
        {
          title: '3. CE QU\'EST RÉELLEMENT UN AGENT IA',
          content: [
            'Un agent IA est un système qui combine :',
            '',
            '1. Un objectif',
            '   • "augmenter la conversion"',
            '   • "maintenir un service opérationnel"',
            '   • "optimiser un processus"',
            '',
            '2. Un moteur de raisonnement',
            '   • planification',
            '   • priorisation',
            '   • choix d\'actions',
            '',
            '3. Une mémoire',
            '   • contexte',
            '   • historique',
            '   • apprentissages',
            '',
            '4. Des outils',
            '   • API',
            '   • logiciels',
            '   • bases de données',
            '   • automatisations',
            '',
            '5. Une boucle d\'action',
            '   • observer',
            '   • décider',
            '   • agir',
            '   • évaluer',
            '   • recommencer',
            '',
            '👉 C\'est une boucle décision–action.',
            '',
            'Écosystèmes et outils souvent cités :',
            '• AutoGPT',
            '• LangChain',
            '• CrewAI',
            '',
            '👉 Ce ne sont pas des produits grand public.',
            'Ce sont des briques systémiques.'
          ]
        },
        {
          title: '4. LA FONCTION CENTRALE : DÉLÉGUER L\'EXÉCUTION CONTINUE (PAS LA RESPONSABILITÉ)',
          content: [
            'Les agents sont faits pour gérer la continuité,',
            'pas pour porter la responsabilité.',
            '',
            'Ils excellent pour :',
            '• surveiller en permanence,',
            '• exécuter des actions répétées,',
            '• gérer des volumes massifs,',
            '• réagir vite.',
            '',
            'Ils sont mauvais pour :',
            '• arbitrer moralement,',
            '• comprendre l\'implicite humain,',
            '• mesurer l\'impact social,',
            '• assumer les conséquences.',
            '',
            '👉 Ils agissent.',
            'Ils n\'assument rien.'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Un agent doit toujours être subordonné',
            'à un objectif humain explicite et réversible.',
            '',
            'Si tu ne peux pas arrêter un agent facilement,',
            'il ne doit pas exister.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE CES AGENTS FONT BIEN / MAL (ET POURQUOI)',
      sections: [
        {
          title: '1. CE QUE LES AGENTS IA FONT EXTRÊMEMENT BIEN (LEUR VRAIE PUISSANCE)',
          content: [
            '1.1 Gérer une exécution continue sans fatigue ni rupture',
            '',
            'C\'est leur avantage structurel numéro un.',
            '',
            'Un agent peut :',
            '• surveiller un système 24/7,',
            '• relancer une action automatiquement,',
            '• reprendre après un échec,',
            '• maintenir un objectif dans le temps.',
            '',
            '👉 Là où l\'humain se fatigue, l\'agent persiste.',
            '',
            '1.2 Découper un objectif en sous-tâches opérables',
            '',
            'Contrairement à une automatisation figée, un agent sait :',
            '• analyser un objectif global,',
            '• proposer un plan d\'action,',
            '• séquencer les étapes,',
            '• ajuster l\'ordre d\'exécution.',
            '',
            'Frameworks utilisés pour cela :',
            '• LangChain',
            '• CrewAI',
            '',
            '👉 Il ne suit pas un scénario.',
            'Il construit une trajectoire.',
            '',
            '1.3 Coordonner plusieurs outils sans supervision constante',
            '',
            'Un agent peut :',
            '• appeler des API,',
            '• utiliser des outils SaaS,',
            '• écrire, lire, modifier des données,',
            '• déclencher des automatisations,',
            '• analyser les retours.',
            '',
            '👉 Il devient un "opérateur logiciel autonome".'
          ]
        },
        {
          title: '2. CE QUE LES AGENTS IA FONT MAL (ET NE FERONT JAMAIS BIEN)',
          content: [
            '2.1 Ils ne comprennent pas le sens profond d\'un objectif',
            '',
            'Un agent peut poursuivre :',
            '• "augmenter la conversion"',
            '• "réduire les coûts"',
            '• "optimiser un processus"',
            '',
            'Sans jamais comprendre :',
            '• l\'impact humain,',
            '• les effets secondaires,',
            '• les limites éthiques,',
            '• le contexte implicite.',
            '',
            '👉 Ils optimisent littéralement.',
            'Pas intelligemment.',
            '',
            '2.2 Ils peuvent s\'enfermer dans des boucles absurdes',
            '',
            'Sans garde-fous :',
            '• un agent peut répéter une action inefficace,',
            '• poursuivre un objectif devenu obsolète,',
            '• interpréter un succès apparent comme une validation,',
            '• amplifier une erreur.',
            '',
            '👉 Un agent persistant peut être obstiné dans l\'erreur.',
            '',
            '2.3 Ils propagent les erreurs plus vite que les humains',
            '',
            'Un agent :',
            '• agit vite,',
            '• agit souvent,',
            '• agit à grande échelle.',
            '',
            '👉 Une mauvaise interprétation devient un problème systémique.',
            '',
            'C\'est l\'effet "amplificateur" :',
            '• plus d\'autonomie = plus d\'impact,',
            '• sans jugement humain = plus de risques.'
          ]
        },
        {
          title: 'RÈGLE D\'OR DU SECTEUR 7',
          content: [
            'Plus un agent est autonome,',
            'plus le cadre humain doit être strict.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — USAGES PROFESSIONNELS CONCRETS (PAR MÉTIERS)',
      sections: [
        {
          title: 'RÈGLE DE CADRE (ABSOLUMENT NON NÉGOCIABLE)',
          content: [
            'Dans tous les cas ci-dessous, un agent IA :',
            '',
            '👉 agit dans un périmètre défini',
            '👉 poursuit un objectif humain explicite',
            '👉 est surveillé en continu',
            '👉 peut être arrêté immédiatement',
            '👉 n\'a aucune autorité morale ou décisionnelle finale'
          ]
        },
        {
          title: '1. OPÉRATIONS / PROCESS COMPLEXES',
          content: [
            'Usage agentique sain :',
            '',
            'Cas concrets :',
            '• agent qui surveille un processus de bout en bout',
            '• agent qui détecte les blocages',
            '• agent qui relance automatiquement certaines étapes',
            '• agent qui escalade vers l\'humain quand un seuil est dépassé',
            '',
            '👉 L\'agent devient un gardien de continuité opérationnelle.',
            '',
            'Ce qui doit rester humain :',
            '• redéfinition du processus',
            '• arbitrage en cas de conflit',
            '• décision de modification structurelle',
            '',
            'Erreur fréquente :',
            '• laisser l\'agent "corriger" le process tout seul',
            '',
            '👉 Optimiser un mauvais processus le rend simplement plus rapide… et plus mauvais.'
          ]
        },
        {
          title: '2. IT / DEVOPS / SYSTÈMES NUMÉRIQUES',
          content: [
            'Usage agentique sain :',
            '',
            'Un agent peut :',
            '• surveiller en continu les métriques',
            '• détecter des anomalies',
            '• proposer un diagnostic',
            '• déclencher des actions correctives simples',
            '• alerter l\'équipe humaine avec contexte',
            '',
            '👉 L\'agent réduit la charge cognitive, pas la responsabilité technique.',
            '',
            'Ce qui reste humain :',
            '• décisions de rollback',
            '• arbitrage sécurité',
            '• choix d\'architecture',
            '',
            'Erreur critique :',
            '• laisser un agent modifier une infra sans validation humaine',
            '',
            '👉 Risque systémique majeur.'
          ]
        },
        {
          title: '3. MARKETING / GROWTH / PERFORMANCE DIGITALE',
          content: [
            'Usage agentique sain :',
            '',
            'Un agent peut :',
            '• surveiller en continu les performances',
            '• tester des variations simples',
            '• ajuster des paramètres mineurs',
            '• remonter des insights actionnables',
            '',
            '👉 L\'agent exécute des micro-optimisations, l\'humain garde la stratégie.',
            '',
            'Ce qui reste humain :',
            '• positionnement de marque',
            '• arbitrage budgétaire',
            '• décisions d\'image',
            '',
            'Erreur fréquente :',
            '• laisser l\'agent optimiser "à la performance brute"',
            '',
            '👉 Il peut dégrader la marque pour gagner 0,3 % de clics.'
          ]
        },
        {
          title: '4. SERVICE CLIENT À GRANDE ÉCHELLE',
          content: [
            'Usage agentique sain :',
            '',
            'Un agent peut :',
            '• qualifier automatiquement les demandes',
            '• répondre aux cas standards',
            '• suivre un ticket sur plusieurs échanges',
            '• escalader intelligemment vers l\'humain',
            '',
            '👉 L\'agent absorbe le volume.',
            'L\'humain gère l\'émotion et l\'exception.',
            '',
            'Ce qui doit rester humain :',
            '• clients en colère',
            '• situations sensibles',
            '• décisions commerciales exceptionnelles',
            '',
            'Erreur grave :',
            '• laisser l\'agent "tenir tête" à un client',
            '',
            '👉 Un agent ne sait pas désamorcer une crise émotionnelle.'
          ]
        },
        {
          title: 'QUESTION CLÉ À POSER AVANT DÉPLOIEMENT',
          content: [
            '"Que se passe-t-il si cet agent se trompe pendant 24 heures sans que personne ne regarde ?"',
            '',
            'Si la réponse est :',
            '"On ne sait pas vraiment…"',
            '',
            '👉 Il ne doit pas être déployé.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — ARCHITECTURE, GOUVERNANCE, GARDE-FOUS & BONNES PRATIQUES',
      sections: [
        {
          title: '1. PRINCIPE FONDAMENTAL (NON NÉGOCIABLE)',
          content: [
            'Un agent autonome n\'est jamais un système libre.',
            'C\'est un système sous délégation conditionnelle.',
            '',
            'Autrement dit :',
            '• l\'agent agit',
            '• l\'humain autorise',
            '• l\'humain surveille',
            '• l\'humain assume',
            '',
            '👉 Toute architecture qui ne rend pas cela explicite est dangereuse.'
          ]
        },
        {
          title: '2. ARCHITECTURE DE RÉFÉRENCE D\'UN SYSTÈME AGENTIQUE SAIN',
          content: [
            'Un système agentique robuste repose sur 7 couches distinctes.',
            'Si l\'une manque, le risque devient systémique.',
            '',
            '2.1 Objectif humain explicite (couche 1)',
            '',
            'Avant tout agent, il doit exister :',
            '• un objectif clair',
            '• formulé en langage humain',
            '• limité dans le temps',
            '• révisable',
            '',
            'Exemple sain :',
            '"Maintenir un taux de réponse client < 24h sur les demandes standards,',
            'sans traiter les réclamations sensibles."',
            '',
            '❌ Objectif dangereux :',
            '"Optimiser la satisfaction client."',
            '',
            '👉 Un objectif flou produit des comportements absurdes.',
            '',
            '2.2 Périmètre d\'action strictement borné (couche 2)',
            '',
            'Un agent doit savoir :',
            '• ce qu\'il peut faire',
            '• ce qu\'il ne peut jamais faire',
            '',
            '👉 Tout ce qui n\'est pas explicitement autorisé est interdit.',
            '',
            '2.3 Kill switch immédiat et accessible (couche 5)',
            '',
            'Chaque agent doit avoir :',
            '• un bouton d\'arrêt clair',
            '• accessible à plusieurs personnes',
            '• documenté',
            '• testé régulièrement',
            '',
            '👉 Un agent qu\'on ne peut pas arrêter immédiatement',
            'est un risque organisationnel majeur.',
            '',
            '2.4 Responsable humain nommé (couche 7)',
            '',
            'Chaque agent doit avoir :',
            '• un propriétaire',
            '• un référent métier',
            '• un droit d\'arrêt',
            '• une responsabilité explicite',
            '',
            '👉 Un agent sans responsable est une faute grave de gouvernance.'
          ]
        },
        {
          title: '3. BONNES PRATIQUES ABSOLUMENT ESSENTIELLES',
          content: [
            '4.1 Commencer petit, toujours',
            '• un agent',
            '• un objectif',
            '• un périmètre',
            '',
            '👉 La complexité doit être gagnée, pas supposée.',
            '',
            '4.2 Prévoir explicitement l\'échec',
            '',
            'Un bon design agentique inclut :',
            '• "que fait l\'agent quand il ne sait pas ?"',
            '• "quand doit-il s\'arrêter ?"',
            '• "quand doit-il escalader ?"',
            '',
            '👉 L\'échec bien géré est un signe de maturité.',
            '',
            '4.3 Interdire l\'auto-extension de périmètre',
            '',
            'Un agent ne doit jamais :',
            '• décider d\'élargir son champ d\'action',
            '• se donner de nouveaux droits',
            '• modifier ses propres règles',
            '',
            '👉 Toute extension doit être humaine.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES, ÉTHIQUE, RESPONSABILITÉ & AVENIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LA DÉLÉGATION INVISIBLE DU POUVOIR',
          content: [
            'Le danger principal des systèmes agentiques n\'est pas l\'erreur technique.',
            '👉 C\'est la délégation implicite de pouvoir sans responsabilité explicite.',
            '',
            'Mécanisme typique :',
            '• un agent est mis en place "pour aider",',
            '• il agit souvent, vite, bien la plupart du temps,',
            '• on s\'habitue,',
            '• on regarde moins,',
            '• on intervient trop tard.',
            '',
            '👉 Le pouvoir d\'agir se déplace silencieusement du décideur vers le système.',
            '',
            'Quand un problème survient :',
            '• personne ne sait exactement quand la décision a été prise,',
            '• personne ne se sent pleinement responsable,',
            '• la confiance est brisée.'
          ]
        },
        {
          title: '2. LE RISQUE SYSTÉMIQUE : L\'ERREUR AUTONOME À GRANDE ÉCHELLE',
          content: [
            'Un agent autonome :',
            '• agit en continu,',
            '• agit à grande vitesse,',
            '• agit sur de multiples objets (données, outils, personnes).',
            '',
            '👉 Une mauvaise interprétation n\'est plus locale : elle devient structurelle.',
            '',
            'Exemples concrets de dérives possibles :',
            '• refus répétés de demandes légitimes,',
            '• dégradation progressive de la relation client,',
            '• décisions opérationnelles "optimisées" mais humainement inacceptables,',
            '• verrouillage d\'un système autour d\'un objectif obsolète.',
            '',
            '👉 L\'erreur humaine est ponctuelle.',
            'L\'erreur agentique est persistante.'
          ]
        },
        {
          title: '3. CE QUI NE DOIT JAMAIS ÊTRE DÉLÉGUÉ À UN AGENT',
          content: [
            'Même avec des IA très avancées, certaines fonctions doivent rester strictement humaines :',
            '',
            '❌ Décisions à fort impact humain',
            '(exclusion, sanction, refus critique)',
            '',
            '❌ Arbitrages éthiques',
            '(quand aucune option n\'est "bonne")',
            '',
            '❌ Décisions politiques ou sociales',
            '(gestion de crise, communication sensible)',
            '',
            '❌ Redéfinition des objectifs',
            '(un agent ne doit jamais redéfinir sa mission)',
            '',
            '👉 Plus l\'impact est irréversible, moins l\'autonomie est acceptable.'
          ]
        },
        {
          title: '4. RESPONSABILITÉ : LA LIGNE ROUGE ABSOLUE',
          content: [
            'Tout ce qu\'un agent fait, quelqu\'un doit pouvoir en répondre publiquement.',
            '',
            'Cela implique :',
            '• un responsable nommé,',
            '• une capacité d\'explication claire,',
            '• une traçabilité accessible,',
            '• une possibilité d\'arrêt immédiat.',
            '',
            'Phrase inacceptable (et dangereuse) :',
            '"Ce n\'est pas nous, c\'est l\'agent."',
            '',
            '👉 Un agent n\'est jamais responsable.',
            'Il n\'a ni statut moral, ni responsabilité légale.'
          ]
        },
        {
          title: '5. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner explicitement :',
            '',
            '• Je délègue l\'exécution, jamais la responsabilité',
            '• Je préfère un agent perfectible à un agent incontrôlable',
            '• Je rends visible ce que l\'agent fait',
            '• Je peux arrêter à tout moment',
            '• J\'assume publiquement ce que le système produit'
          ]
        },
        {
          title: '6. TEST FINAL DE MATURITÉ (LE PLUS IMPORTANT)',
          content: [
            'Pose cette question, sans détour :',
            '',
            '"Si cet agent cause un problème demain,',
            'qui va s\'expliquer devant une personne impactée ?"',
            '',
            '• Réponse claire → usage mature',
            '• Réponse floue → danger immédiat'
          ]
        }
      ]
    }
  ],
  conclusion: `Ce secteur ne concerne pas l'autonomie des machines.
Il concerne la capacité des humains à rester responsables
dans un monde où l'action peut être déléguée en continu.

⸻

SYNTHÈSE GLOBALE

👉 Les IA agentiques ne remplacent pas la décision humaine.
Elles déplacent l'humain du "faire" vers le "piloter et assumer".

Les agents IA sont extrêmement puissants pour exécuter, coordonner et persister.
Ils deviennent dangereux dès qu'on leur attribue du jugement, du sens ou une responsabilité implicite.

Les agents IA créent un avantage massif lorsqu'ils gèrent la continuité, le volume et la complexité sous supervision humaine.
Ils deviennent un risque critique dès qu'ils remplacent le jugement, l'arbitrage ou la responsabilité.

👉 Les IA agentiques n'enlèvent pas la responsabilité humaine.
Elles la rendent plus lourde, plus visible et absolument incontournable.`
}

// Contenu de la formation "IA, Emploi & Transformation des Métiers - Secteur 8"
export const iaEmploiContent: FormationContent = {
  formationId: 'formation_ia_emploi',
  introduction: `Deux discours dominent… et les deux sont faux.

❌ "L'IA va remplacer tous les emplois"
❌ "L'IA ne changera rien, c'est juste un outil de plus"

👉 La réalité est plus dérangeante :
l'IA ne remplace pas des métiers, elle démonte des tâches.

Ce sont les métiers structurés autour de tâches répétables, prévisibles et mesurables qui sont bouleversés.
Pas les identités professionnelles dans leur ensemble.

Avec l'IA :
• certaines tâches disparaissent,
• d'autres apparaissent,
• certaines deviennent marginales,
• d'autres deviennent centrales.

👉 Le métier se fragmente.
Ce n'est pas une suppression.
C'est une recomposition.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL : CE QUE L\'IA CHANGE VRAIMENT DANS LE TRAVAIL',
      sections: [
        {
          title: '1. LE MYTHE CENTRAL À DÉTRUIRE D\'ENTRÉE',
          content: [
            'Deux discours dominent… et les deux sont faux.',
            '',
            '❌ "L\'IA va remplacer tous les emplois"',
            '❌ "L\'IA ne changera rien, c\'est juste un outil de plus"',
            '',
            '👉 La réalité est plus dérangeante :',
            'l\'IA ne remplace pas des métiers, elle démonte des tâches.',
            '',
            'Ce sont les métiers structurés autour de tâches répétables, prévisibles et mesurables qui sont bouleversés.',
            'Pas les identités professionnelles dans leur ensemble.'
          ]
        },
        {
          title: '2. LE VRAI CHANGEMENT STRUCTUREL : LA DISSOLUTION DES MÉTIERS "MONOBLOC"',
          content: [
            'Historiquement, un métier = un ensemble stable de tâches.',
            '',
            'Avec l\'IA :',
            '• certaines tâches disparaissent,',
            '• d\'autres apparaissent,',
            '• certaines deviennent marginales,',
            '• d\'autres deviennent centrales.',
            '',
            '👉 Le métier se fragmente.',
            '',
            'Exemple générique (valable partout) :',
            '• 30–40 % des tâches deviennent automatisables',
            '• 30 % sont transformées',
            '• 30 % restent profondément humaines',
            '',
            '👉 Ce n\'est pas une suppression.',
            'C\'est une recomposition.'
          ]
        },
        {
          title: '3. CE QUE L\'IA AUTOMATISE VRAIMENT (ET PARTOUT)',
          content: [
            'Quel que soit le métier, l\'IA tend à absorber :',
            '• la saisie et le transfert d\'information',
            '• la recherche basique',
            '• la production standardisée',
            '• la synthèse de contenus existants',
            '• le suivi répétitif',
            '• le contrôle de règles simples',
            '',
            '👉 Tout ce qui est :',
            '• répétable',
            '• explicitable',
            '• standardisable',
            '• mesurable',
            '',
            'est structurellement menacé ou déplacé.'
          ]
        },
        {
          title: '4. CE QUE L\'IA NE SAIT PAS FAIRE (ET NE SAURA PAS FAIRE À COURT TERME)',
          content: [
            'À l\'inverse, certaines dimensions deviennent plus précieuses, pas moins.',
            '',
            'Compétences fondamentalement humaines :',
            '• jugement dans l\'incertitude',
            '• arbitrage entre intérêts contradictoires',
            '• responsabilité morale',
            '• relation humaine réelle',
            '• contextualisation fine',
            '• créativité intentionnelle',
            '• courage décisionnel',
            '',
            '👉 L\'IA peut simuler.',
            'Elle ne peut pas assumer.'
          ]
        },
        {
          title: '5. LE DÉPLACEMENT MAJEUR DE LA VALEUR',
          content: [
            'Avec l\'IA, la valeur professionnelle se déplace :',
            '',
            'Avant :',
            '• savoir faire',
            '• maîtriser un outil',
            '• produire plus vite',
            '• être indispensable opérationnellement',
            '',
            'Après :',
            '• savoir cadrer',
            '• savoir décider',
            '• savoir arbitrer',
            '• savoir expliquer',
            '• savoir assumer',
            '',
            '👉 La valeur monte vers :',
            '• la supervision',
            '• la stratégie',
            '• le sens',
            '• la responsabilité'
          ]
        },
        {
          title: 'RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Ne te demande pas :',
            '"Mon métier va-t-il disparaître ?"',
            '',
            'Demande-toi :',
            '"Quelles tâches de mon métier vont perdre de la valeur,',
            'et lesquelles vont en gagner ?"',
            '',
            '👉 C\'est la seule question stratégique pertinente.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — MÉTIERS MENACÉS, TRANSFORMÉS, AUGMENTÉS (LECTURE RÉALISTE)',
      sections: [
        {
          title: '1. AVERTISSEMENT ESSENTIEL (AVANT DE CLASSER)',
          content: [
            'Il n\'existe aucun métier 100 % menacé',
            'Il n\'existe aucun métier 100 % protégé',
            '',
            '👉 Ce sont les configurations de tâches qui comptent, pas les intitulés.',
            '',
            'Deux personnes avec le même titre peuvent avoir :',
            '• des trajectoires totalement différentes,',
            '• une valeur très différente,',
            '• un risque radicalement opposé.'
          ]
        },
        {
          title: '2. LES MÉTIERS STRUCTURELLEMENT MENACÉS (OU PLUTÔT : DÉSTRUCTURÉS)',
          content: [
            'Ces métiers ne disparaissent pas brutalement, mais :',
            '• se réduisent en volume,',
            '• se standardisent,',
            '• se dévalorisent,',
            '• se polarisent (quelques experts, beaucoup d\'automatisé).',
            '',
            '2.1 Caractéristiques communes (signaux d\'alerte)',
            '',
            'Un métier devient fragile si :',
            '• 70 %+ des tâches sont répétables',
            '• le travail est basé sur des règles explicites',
            '• la production est standardisée',
            '• la valeur est mesurée à la quantité',
            '• l\'erreur est tolérable individuellement',
            '',
            '👉 L\'IA y est structurellement compétitive.',
            '',
            '2.2 Exemples typiques (sans caricature)',
            '• saisie administrative',
            '• back-office standard',
            '• production de contenu générique',
            '• support client niveau 1',
            '• analyse descriptive simple',
            '• reporting mécanique',
            '• traduction basique',
            '• prospection non qualifiée',
            '',
            '👉 Ces métiers ne disparaissent pas :',
            'ils se compressent et se recomposent.'
          ]
        },
        {
          title: '3. LES MÉTIERS PROFONDÉMENT TRANSFORMÉS (LA MAJORITÉ)',
          content: [
            'C\'est le cœur du bouleversement.',
            '',
            'Ces métiers restent indispensables, mais :',
            '• leurs tâches changent,',
            '• leurs compétences clés se déplacent,',
            '• leur posture professionnelle évolue.',
            '',
            '3.1 Signes d\'un métier "transformé"',
            '• coexistence humain / IA',
            '• décisions encore humaines',
            '• exécution partiellement automatisée',
            '• responsabilité toujours humaine',
            '• besoin accru de supervision',
            '',
            '👉 Le métier survit, mais pas sous sa forme ancienne.',
            '',
            '3.2 Exemples très concrets',
            '• marketing → moins d\'exécution, plus de stratégie & arbitrage',
            '• RH → moins d\'administratif, plus de relation & éthique',
            '• finance → moins de saisie, plus d\'analyse & décision',
            '• juriste → moins de recherche brute, plus d\'interprétation',
            '• enseignant / formateur → moins de transmission descendante, plus de pédagogie active',
            '• chef de projet → moins de coordination manuelle, plus de pilotage',
            '',
            '👉 Ces métiers montent en complexité cognitive.'
          ]
        },
        {
          title: '4. LES MÉTIERS STRUCTURELLEMENT AUGMENTÉS (LES GAGNANTS RELATIFS)',
          content: [
            'Ces métiers voient leur valeur augmenter avec l\'IA, à condition d\'être bien exercés.',
            '',
            '4.1 Caractéristiques communes',
            '• forte responsabilité humaine',
            '• décisions irréversibles',
            '• relation humaine critique',
            '• arbitrage dans l\'incertitude',
            '• contexte mouvant',
            '• impact humain ou stratégique fort',
            '',
            '👉 L\'IA y est un levier, pas un substitut.',
            '',
            '4.2 Exemples clairs',
            '• dirigeants',
            '• managers d\'équipes complexes',
            '• experts métier transverses',
            '• architectes (tech, organisation, produit)',
            '• créatifs avec direction artistique',
            '• consultants stratégiques',
            '• soignants relationnels',
            '• enseignants incarnés',
            '',
            '👉 Leur valeur repose sur ce que l\'IA ne sait pas assumer.'
          ]
        },
        {
          title: '5. LA NOUVELLE FRACTURE DU MARCHÉ DU TRAVAIL',
          content: [
            'Ce n\'est pas :',
            '• diplômés vs non-diplômés',
            '• cols blancs vs cols bleus',
            '• humains vs machines',
            '',
            '👉 La vraie fracture devient :',
            '',
            '🔹 Ceux qui :',
            '• comprennent les systèmes',
            '• cadrent les objectifs',
            '• pilotent l\'IA',
            '• assument les décisions',
            '',
            '🔹 Et ceux qui :',
            '• exécutent sans vision',
            '• subissent les outils',
            '• attendent des instructions',
            '• évitent la responsabilité',
            '',
            '👉 C\'est une fracture de posture, pas de métier.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — COMPÉTENCES EN DÉCLIN, ÉMERGENTES ET CRITIQUES',
      sections: [
        {
          title: '1. PRINCIPE CLÉ À COMPRENDRE (AVANT TOUT)',
          content: [
            'Les compétences ne disparaissent pas parce qu\'elles sont mauvaises.',
            'Elles disparaissent parce qu\'elles deviennent abondantes.',
            '',
            'Avec l\'IA :',
            '• ce qui était rare devient courant,',
            '• ce qui demandait du temps devient instantané,',
            '• ce qui nécessitait un spécialiste devient accessible.',
            '',
            '👉 La valeur se déplace toujours vers ce qui reste rare.'
          ]
        },
        {
          title: '2. LES COMPÉTENCES EN DÉCLIN (PAS INUTILES, MAIS DÉVALORISÉES)',
          content: [
            'Ce sont les compétences qui :',
            '• restent nécessaires,',
            '• mais ne différencient plus,',
            '• et ne justifient plus à elles seules un rôle ou un salaire.',
            '',
            '2.1 Compétences techniques "exécutives"',
            '',
            'Exemples :',
            '• rédaction standardisée',
            '• création de slides basiques',
            '• recherche d\'informations simple',
            '• reporting descriptif',
            '• traduction littérale',
            '• saisie et mise en forme de données',
            '• montage ou design sans intention',
            '',
            '👉 Elles deviennent des prérequis, pas des avantages.',
            '',
            '2.2 Compétences "outil-centrées"',
            '',
            'Exemples :',
            '• "expert Excel"',
            '• "expert PowerPoint"',
            '• "expert outil X"',
            '',
            '👉 Les outils changent trop vite.',
            'La valeur ne peut plus reposer dessus.'
          ]
        },
        {
          title: '3. LES COMPÉTENCES ÉMERGENTES (CELLES QUI MONTENT)',
          content: [
            'Ce sont des compétences transversales, souvent absentes des fiches de poste traditionnelles.',
            '',
            '3.1 Cadrage & formulation de problèmes',
            '',
            'Savoir :',
            '• poser la bonne question,',
            '• définir un objectif exploitable,',
            '• expliciter des contraintes,',
            '• transformer un flou en problème opérable.',
            '',
            '👉 L\'IA est puissante sur les réponses.',
            'La valeur humaine est dans la question.',
            '',
            '3.2 Pilotage d\'outils et de systèmes IA',
            '',
            'Inclut :',
            '• savoir quand utiliser l\'IA',
            '• savoir quand ne pas l\'utiliser',
            '• superviser un résultat',
            '• détecter une dérive',
            '• corriger un cadre',
            '',
            '👉 Le métier évolue vers "opérateur de systèmes intelligents".',
            '',
            '3.3 Lecture critique et discernement',
            '',
            'Savoir :',
            '• évaluer une sortie IA,',
            '• repérer une approximation,',
            '• identifier un biais,',
            '• dire "ce n\'est pas acceptable".',
            '',
            '👉 Dire non devient une compétence rare.'
          ]
        },
        {
          title: '4. LES COMPÉTENCES CRITIQUES (NON AUTOMATISABLES)',
          content: [
            'Ce sont les compétences qui portent la responsabilité humaine.',
            'Elles deviennent plus précieuses à mesure que l\'IA progresse.',
            '',
            '4.1 Jugement dans l\'incertitude',
            '• décider sans données complètes',
            '• arbitrer entre options imparfaites',
            '• accepter le risque',
            '',
            '👉 L\'IA optimise.',
            'L\'humain tranche.',
            '',
            '4.2 Responsabilité et redevabilité',
            '• assumer une décision',
            '• en expliquer les raisons',
            '• en porter les conséquences',
            '',
            '👉 Une compétence que l\'IA ne peut pas simuler.',
            '',
            '4.3 Intelligence relationnelle réelle',
            '• écoute active',
            '• gestion de conflit',
            '• confiance',
            '• empathie contextuelle',
            '',
            '👉 Plus le monde se digitalise, plus la relation humaine devient rare et précieuse.',
            '',
            '4.4 Sens, narration et vision',
            '',
            'Savoir :',
            '• donner du sens à une action,',
            '• raconter pourquoi on fait les choses,',
            '• aligner une équipe autour d\'un cap.',
            '',
            '👉 Les organisations ne manquent pas d\'outils.',
            'Elles manquent de clarté.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — REQUALIFICATION, FORMATION & STRATÉGIES CONCRÈTES',
      sections: [
        {
          title: '1. LA FAUSSE BONNE RÉPONSE : "FORMER À L\'IA"',
          content: [
            'Erreur massive, observée partout.',
            '',
            'Former "à l\'IA" de manière générique donne :',
            '• des utilisateurs superficiels,',
            '• des usages gadgets,',
            '• une inflation de jargon,',
            '• peu de transformation réelle.',
            '',
            '👉 On ne forme pas à l\'IA.',
            'On forme à un métier qui intègre l\'IA.',
            '',
            'La bonne question n\'est pas :',
            '"Comment former à l\'IA ?"',
            '',
            'Mais :',
            '"Quelles nouvelles responsabilités humaines ce métier doit-il assumer ?"'
          ]
        },
        {
          title: '2. LE PRINCIPE CENTRAL DE LA REQUALIFICATION',
          content: [
            'La requalification ne consiste pas à ajouter des compétences.',
            'Elle consiste à déplacer le centre de gravité du rôle.',
            '',
            'Autrement dit :',
            '• moins d\'exécution,',
            '• plus de pilotage,',
            '• moins de production brute,',
            '• plus de décision,',
            '• moins de volume,',
            '• plus de responsabilité.',
            '',
            '👉 Former sans redéfinir le rôle est inefficace.'
          ]
        },
        {
          title: '3. STRATÉGIE INDIVIDUELLE : COMMENT SE REQUALIFIER (VRAIMENT)',
          content: [
            '3.1 Étape 1 — Cartographier ses tâches réelles (pas son titre)',
            '',
            'Exercice fondamental :',
            '• liste toutes tes tâches sur une semaine réelle',
            '• identifie :',
            '  • automatisables',
            '  • augmentables',
            '  • strictement humaines',
            '',
            '👉 C\'est la base de toute stratégie personnelle.',
            '',
            '3.2 Étape 2 — Décider ce que tu dois abandonner',
            '',
            'C\'est le point le plus difficile.',
            '',
            'Il faut volontairement :',
            '• lâcher certaines tâches historiques,',
            '• accepter de ne plus être "l\'exécutant clé",',
            '• céder ce que l\'IA fait mieux ou plus vite.',
            '',
            '👉 Ce qu\'on refuse d\'abandonner devient un point de fragilité.',
            '',
            '3.3 Étape 3 — Monter en responsabilité, pas en outils',
            '',
            'Mauvaise stratégie :',
            '• apprendre 15 outils IA',
            '• devenir "expert prompt"',
            '• courir après les nouveautés',
            '',
            'Bonne stratégie :',
            '• apprendre à cadrer un problème',
            '• apprendre à superviser un résultat',
            '• apprendre à expliquer une décision',
            '• apprendre à assumer des arbitrages',
            '',
            '👉 Les outils changent.',
            'La responsabilité reste.'
          ]
        },
        {
          title: '4. STRATÉGIE COLLECTIVE : COMMENT FORMER DANS LES ORGANISATIONS',
          content: [
            '4.1 Erreur classique des entreprises',
            '• former tout le monde aux mêmes outils',
            '• lancer des formations massives génériques',
            '• espérer une transformation "par diffusion"',
            '',
            '👉 Résultat : usage hétérogène, rejet, confusion.',
            '',
            '4.2 Approche efficace (observée chez les organisations matures)',
            '',
            'Former par rôle, pas par technologie.',
            '',
            'Exemples :',
            '• manager + IA',
            '• RH + IA',
            '• finance + IA',
            '• marketing + IA',
            '',
            'Chaque formation doit répondre à :',
            '• quelles décisions humaines restent ?',
            '• quels usages IA sont autorisés ?',
            '• quelles limites sont posées ?',
            '• quelles responsabilités sont renforcées ?',
            '',
            '👉 La formation devient un acte de gouvernance.'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES SOCIAUX, ÉTHIQUE & AVENIR DU TRAVAIL',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LA FRACTURE INVISIBLE (PLUS QUE LE CHÔMAGE)',
          content: [
            'Contrairement aux peurs médiatiques, le risque principal n\'est pas un chômage massif immédiat.',
            '',
            '👉 Le vrai risque est une fracture silencieuse entre travailleurs "augmentés" et travailleurs "déqualifiés".',
            '',
            'Cette fracture se manifeste par :',
            '• des écarts de responsabilité de plus en plus forts,',
            '• des écarts de rémunération accrus,',
            '• une polarisation des rôles (pilotage vs exécution),',
            '• une perte de sens pour certains métiers.',
            '',
            '👉 Ce n\'est pas l\'absence de travail qui menace.',
            'C\'est la perte de reconnaissance et de trajectoire.'
          ]
        },
        {
          title: '2. LE RISQUE PSYCHOLOGIQUE : LA PERTE DE SENTIMENT D\'UTILITÉ',
          content: [
            'Pour beaucoup de professionnels, le travail est :',
            '• un marqueur d\'identité,',
            '• une source de reconnaissance,',
            '• un espace de progression.',
            '',
            'Si l\'IA :',
            '• absorbe les tâches visibles,',
            '• accélère tout,',
            '• rend la contribution humaine floue,',
            '',
            '👉 un malaise profond peut apparaître.',
            '',
            'Symptômes observés :',
            '• anxiété professionnelle,',
            '• sentiment d\'inutilité,',
            '• repli,',
            '• rejet de la technologie,',
            '• burn-out paradoxal ("je fais plus, mais je sers moins").',
            '',
            '👉 Le mal-être ne vient pas de l\'IA,',
            'mais d\'une transformation mal accompagnée.'
          ]
        },
        {
          title: '3. L\'ENJEU ÉTHIQUE CENTRAL : LA DIGNITÉ DU TRAVAIL',
          content: [
            'Question fondamentale (et trop peu posée) :',
            '',
            'Quel rôle voulons-nous encore confier aux humains ?',
            '',
            'Si l\'humain devient :',
            '• un simple validateur passif,',
            '• un exécutant sous surveillance algorithmique,',
            '• un opérateur sans marge de décision,',
            '',
            '👉 le travail perd sa dignité.',
            '',
            'L\'éthique du travail à l\'ère de l\'IA implique :',
            '• du jugement,',
            '• de la responsabilité,',
            '• de la possibilité de dire non,',
            '• de l\'espace pour l\'erreur humaine.',
            '',
            '👉 Un travail sans responsabilité est un travail sans sens.'
          ]
        },
        {
          title: '4. L\'AVENIR DU TRAVAIL : TROIS SCÉNARIOS POSSIBLES',
          content: [
            'Scénario 1 — Optimisation froide (risqué)',
            '• automatisation maximale,',
            '• pression sur la performance,',
            '• perte de sens,',
            '• tensions sociales.',
            '',
            'Scénario 2 — Humanisme naïf (irréaliste)',
            '• refus de l\'IA,',
            '• perte de compétitivité,',
            '• marginalisation économique.',
            '',
            'Scénario 3 — Humanisme exigeant (souhaitable)',
            '• IA pour l\'exécution,',
            '• humains pour le jugement,',
            '• responsabilité renforcée,',
            '• requalification continue.',
            '',
            '👉 Le futur du travail dépend de choix humains, pas techniques.'
          ]
        },
        {
          title: '5. POSTURE PROFESSIONNELLE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture à enseigner et à incarner :',
            '',
            '• Je ne me définis pas par ce que je produis, mais par ce que j\'assume',
            '• J\'utilise l\'IA pour me libérer, pas pour me vider de mon rôle',
            '• Je protège la part humaine du travail',
            '• Je refuse les usages qui détruisent le sens',
            '• Je participe activement à ma requalification'
          ]
        },
        {
          title: '6. TEST FINAL DE MATURITÉ SOCIALE (SIMPLE ET PUISSANT)',
          content: [
            'Pose cette question dans une organisation :',
            '',
            '"Sans l\'IA, ce travail aurait-il encore un sens humain ?"',
            '',
            '• Oui → transformation saine',
            '• Non → alerte éthique'
          ]
        }
      ]
    }
  ],
  conclusion: `L'IA n'impose pas un futur du travail.
Elle nous oblige à le choisir consciemment.

⸻

SYNTHÈSE GLOBALE

👉 L'IA ne détruit pas le travail.
Elle détruit l'illusion que produire suffit à créer de la valeur.

L'IA ne crée pas une hiérarchie de métiers.
Elle crée une hiérarchie de responsabilités et de postures professionnelles.

L'IA ne rend pas les humains inutiles.
Elle rend inutiles les compétences qui évitent la responsabilité.

La requalification à l'ère de l'IA ne consiste pas à apprendre plus de choses,
mais à accepter plus de responsabilité.

👉 L'IA ne pose pas la question de la fin du travail.
Elle pose la question du travail que nous jugeons digne d'être humain.`
}

// Contenu de la formation "IA, Gouvernance & Pouvoir Décisionnel - Secteur 9"
export const iaGouvernanceContent: FormationContent = {
  formationId: 'formation_ia_gouvernance',
  introduction: `Quand l'IA est utilisée dans une organisation, une question devient centrale :

Qui décide vraiment ?

Pas :
• qui utilise l'outil
• qui a cliqué
• qui a validé techniquement

Mais :
👉 qui porte l'autorité, la responsabilité et la légitimité de la décision.

Avec l'IA, un glissement silencieux se produit.

Avant :
• le décideur tranche
• l'outil assiste
• la responsabilité est claire

Aujourd'hui :
• l'IA recommande
• l'humain valide (parfois machinalement)
• la responsabilité devient floue

👉 Le pouvoir ne disparaît pas.
Il se déplace.

Souvent :
• vers les outils,
• vers les modèles,
• vers ceux qui les paramètrent,
• vers ceux qui contrôlent les données.

La gouvernance n'est pas un luxe bureaucratique.
C'est une condition de survie organisationnelle.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL : QUI DÉCIDE QUAND L\'IA EST PARTOUT ?',
      sections: [
        {
          title: '1. LA QUESTION QUE TOUT LE MONDE ÉVITE (ET QUI POURTANT DÉCIDE DE TOUT)',
          content: [
            'Quand l\'IA est utilisée dans une organisation, une question devient centrale :',
            '',
            'Qui décide vraiment ?',
            '',
            'Pas :',
            '• qui utilise l\'outil',
            '• qui a cliqué',
            '• qui a validé techniquement',
            '',
            'Mais :',
            '👉 qui porte l\'autorité, la responsabilité et la légitimité de la décision.',
            '',
            'C\'est là que naissent :',
            '• les conflits internes,',
            '• les décisions absurdes,',
            '• les crises de confiance,',
            '• les scandales "on ne savait pas".'
          ]
        },
        {
          title: '2. CE QUE L\'IA FAIT AU POUVOIR (SANS QU\'ON S\'EN RENDE COMPTE)',
          content: [
            'Historiquement, le pouvoir décisionnel reposait sur :',
            '• l\'expérience,',
            '• l\'expertise,',
            '• la hiérarchie,',
            '• la responsabilité visible.',
            '',
            'Avec l\'IA, un glissement silencieux se produit.',
            '',
            'Avant :',
            '• le décideur tranche',
            '• l\'outil assiste',
            '• la responsabilité est claire',
            '',
            'Aujourd\'hui :',
            '• l\'IA recommande',
            '• l\'humain valide (parfois machinalement)',
            '• la responsabilité devient floue',
            '',
            '👉 Le pouvoir ne disparaît pas.',
            'Il se déplace.',
            '',
            'Souvent :',
            '• vers les outils,',
            '• vers les modèles,',
            '• vers ceux qui les paramètrent,',
            '• vers ceux qui contrôlent les données.'
          ]
        },
        {
          title: '3. LA CONFUSION MAJEURE : AIDE À LA DÉCISION ≠ DÉCISION',
          content: [
            'Beaucoup d\'organisations disent :',
            '',
            '"L\'IA aide à la décision."',
            '',
            'Mais dans les faits :',
            '• la recommandation devient la décision,',
            '• la validation humaine devient formelle,',
            '• le temps manque pour contester.',
            '',
            '👉 Quand on ne comprend plus pourquoi une décision est prise,',
            'ce n\'est plus une aide.',
            'C\'est un transfert de pouvoir.'
          ]
        },
        {
          title: '4. LE PROBLÈME CENTRAL : LA DILUTION DE LA RESPONSABILITÉ',
          content: [
            'Scénario typique (très répandu) :',
            '• une décision est prise avec l\'aide de l\'IA,',
            '• elle pose problème,',
            '• chacun se renvoie la balle.',
            '',
            '"C\'est le modèle."',
            '"C\'est l\'outil."',
            '"C\'est la donnée."',
            '"C\'est l\'algorithme."',
            '',
            '👉 Résultat : personne n\'assume.',
            '',
            'Or :',
            '• le droit ne reconnaît pas l\'IA comme responsable,',
            '• la société non plus,',
            '• les clients encore moins.',
            '',
            '👉 La responsabilité humaine reste totale, même si le pouvoir a glissé.'
          ]
        },
        {
          title: '5. POURQUOI LA GOUVERNANCE DE L\'IA EST INDISPENSABLE',
          content: [
            'La gouvernance n\'est pas un luxe bureaucratique.',
            'C\'est une condition de survie organisationnelle.',
            '',
            'Elle sert à :',
            '• rendre explicite qui décide quoi,',
            '• poser des limites claires,',
            '• protégir les individus,',
            '• protéger l\'organisation,',
            '• maintenir la confiance.',
            '',
            '👉 Sans gouvernance, l\'IA devient un angle mort du pouvoir.'
          ]
        },
        {
          title: '9. RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Toute décision assistée par IA',
            'doit pouvoir être expliquée, contestée et assumée par un humain identifié.',
            '',
            'Si ce n\'est pas possible :',
            '👉 la décision est illégitime, même si elle est "optimale".'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE L\'IA FAIT BIEN / MAL DANS LA DÉCISION HUMAINE',
      sections: [
        {
          title: '1. CE QUE L\'IA FAIT RÉELLEMENT BIEN DANS LA DÉCISION',
          content: [
            'Commençons par être justes : l\'IA apporte une vraie valeur décisionnelle, mais dans un cadre précis.',
            '',
            '1.1 Traiter des volumes d\'information inaccessibles à l\'humain',
            '',
            'L\'IA excelle pour :',
            '• analyser de grands volumes de données,',
            '• repérer des corrélations invisibles,',
            '• détecter des tendances faibles,',
            '• agréger des signaux hétérogènes.',
            '',
            '👉 Elle étend le champ de vision du décideur.',
            '',
            'Mais attention :',
            '• corrélation ≠ causalité',
            '• signal ≠ compréhension',
            '',
            '1.2 Réduire certains biais humains… mais pas tous',
            '',
            'L\'IA peut limiter :',
            '• la fatigue décisionnelle,',
            '• l\'incohérence dans des décisions répétées,',
            '• l\'arbitraire pur,',
            '• certaines discriminations évidentes.',
            '',
            '👉 Elle est utile pour stabiliser des décisions standards.',
            '',
            'Mais :',
            '• elle hérite des biais des données,',
            '• elle amplifie les biais systémiques,',
            '• elle ne détecte pas les injustices "socialement acceptées".'
          ]
        },
        {
          title: '2. CE QUE L\'IA FAIT MAL (ET NE DEVRAIT JAMAIS FAIRE SEULE)',
          content: [
            'C\'est ici que les dérives commencent.',
            '',
            '2.1 Elle ne comprend pas le sens moral d\'une décision',
            '',
            'Une décision humaine n\'est jamais purement optimale.',
            'Elle intègre :',
            '• de l\'équité,',
            '• du compromis,',
            '• de la compassion,',
            '• parfois de l\'injustice assumée pour éviter un mal plus grand.',
            '',
            '👉 L\'IA optimise des critères.',
            'Elle ne comprend pas les dilemmes.',
            '',
            '2.2 Elle ne perçoit pas l\'impact symbolique d\'une décision',
            '',
            'Certaines décisions sont :',
            '• techniquement justes,',
            '• humainement destructrices.',
            '',
            'Exemples :',
            '• un refus automatique,',
            '• une sanction "logique",',
            '• une décision froide mais légale.',
            '',
            '👉 L\'IA ne mesure pas l\'humiliation, la perte de confiance ou la violence symbolique.',
            '',
            '2.3 Elle fige le passé dans le futur',
            '',
            'L\'IA décide à partir de :',
            '• données historiques,',
            '• comportements passés,',
            '• structures existantes.',
            '',
            '👉 Elle reproduit le monde tel qu\'il était, pas tel qu\'il devrait évoluer.',
            '',
            'Conséquence :',
            '• reproduction des inégalités,',
            '• verrouillage des trajectoires,',
            '• difficulté à intégrer la rupture, l\'exception, le pardon.'
          ]
        },
        {
          title: '3. LE PHÉNOMÈNE LE PLUS CRITIQUE : L\'AUTORITÉ AUTOMATIQUE',
          content: [
            'Dans beaucoup d\'organisations, on observe ceci :',
            '• "L\'IA recommande A"',
            '• "Donc on fait A"',
            '• "Pourquoi ?"',
            '• "Parce que l\'IA l\'a dit"',
            '',
            '👉 L\'outil devient une autorité implicite.',
            '',
            'C\'est un basculement psychologique :',
            '• moins de contestation,',
            '• moins de débat,',
            '• moins de courage managérial.',
            '',
            '👉 Quand l\'IA n\'est plus questionnée, elle gouverne.'
          ]
        },
        {
          title: '7. QUESTIONS OBLIGATOIRES AVANT TOUTE DÉCISION ASSISTÉE PAR IA',
          content: [
            'Toute organisation devrait exiger que le décideur puisse répondre à :',
            '',
            '1. Pourquoi cette recommandation ?',
            '2. Quels critères ont été utilisés ?',
            '3. Qui les a définis ?',
            '4. Qu\'est-ce que l\'IA ne prend pas en compte ?',
            '5. Quelles conséquences humaines possibles ?',
            '6. Suis-je prêt à assumer cette décision sans mentionner l\'IA ?',
            '',
            '👉 Si ces réponses sont impossibles, la décision est viciée.'
          ]
        },
        {
          title: '8. RÈGLE D\'OR DE L\'AXE 2',
          content: [
            'Une décision assistée par IA',
            'ne devient humaine que lorsqu\'elle est contestable.',
            '',
            '👉 Ce qui ne peut pas être contesté n\'est pas légitime.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — CAS CONCRETS DE GOUVERNANCE & DE POUVOIR (PAR TYPES D\'ORGANISATIONS)',
      sections: [
        {
          title: 'RÈGLE DE LECTURE (TRÈS IMPORTANTE)',
          content: [
            'Dans tous les cas ci-dessous, l\'IA ne crée pas les conflits.',
            '👉 Elle révèle et amplifie des tensions déjà existantes :',
            '• flou managérial',
            '• responsabilités mal définies',
            '• décisions déjà contestables',
            '• asymétries de pouvoir',
            '',
            'L\'IA agit comme un révélateur organisationnel.'
          ]
        },
        {
          title: '1. ENTREPRISE PRIVÉE (PME / ETI / GRAND GROUPE)',
          content: [
            '1.1 Cas typique : décision "optimisée" mais contestée',
            '',
            'Situation :',
            '• une IA recommande une décision (priorisation client, allocation budgétaire, licenciement économique indirect, refus commercial)',
            '• le manager valide',
            '• l\'impact humain est fort',
            '• la décision est mal vécue',
            '',
            'Conflit réel :',
            '• le manager se protège derrière l\'outil',
            '• l\'équipe ressent une injustice',
            '• la direction invoque la "rationalité"',
            '',
            '👉 Le pouvoir réel est devenu invisible.',
            '',
            '1.2 Gouvernance immature (fréquente)',
            '• aucune règle écrite sur l\'usage décisionnel de l\'IA',
            '• responsabilité diluée',
            '• décisions présentées comme "techniques"',
            '• contestation rendue difficile',
            '',
            '👉 L\'IA devient un bouclier managérial.',
            '',
            '1.3 Gouvernance mature (rare mais observable)',
            '• distinction claire :',
            '  • recommandation IA ≠ décision',
            '• obligation de justification humaine',
            '• droit à la contestation',
            '• traçabilité des critères',
            '• responsable nommé',
            '',
            '👉 La décision reste politique (au sens noble), pas algorithmique.'
          ]
        },
        {
          title: '2. RESSOURCES HUMAINES (ZONE LA PLUS SENSIBLE)',
          content: [
            '2.1 Cas typique : scoring RH',
            '',
            'Usages courants :',
            '• tri de CV',
            '• scoring de performance',
            '• prédiction de départ',
            '• recommandations de mobilité',
            '',
            'Dérive fréquente :',
            '• le score devient la décision',
            '• le RH "suit le système"',
            '• l\'humain n\'est plus écouté',
            '',
            '👉 Le pouvoir RH se déshumanise sans disparaître.',
            '',
            '2.2 Gouvernance RH saine',
            '• interdiction des décisions RH automatisées finales',
            '• obligation d\'entretien humain',
            '• explicabilité minimale du raisonnement',
            '• possibilité de dérogation assumée',
            '',
            '👉 L\'IA informe, le RH protège la dignité.'
          ]
        },
        {
          title: '3. MANAGEMENT & HIÉRARCHIE INTERMÉDIAIRE',
          content: [
            '3.1 Cas typique : management "piloté par KPI IA"',
            '• indicateurs en temps réel',
            '• alertes automatiques',
            '• recommandations d\'action',
            '',
            'Effet pervers :',
            '• le manager devient exécutant de tableaux de bord',
            '• moins de dialogue',
            '• moins de marge humaine',
            '',
            '👉 Le pouvoir managérial se déplace vers les systèmes.',
            '',
            '3.2 Gouvernance managériale saine',
            '• KPI = support, pas injonction',
            '• droit à la décision contre-indicée',
            '• valorisation du jugement humain',
            '• formation au discernement IA',
            '',
            '👉 Le manager reste un décideur, pas un relais algorithmique.'
          ]
        },
        {
          title: '4. SERVICE PUBLIC & ADMINISTRATION',
          content: [
            '4.1 Cas typique : décision administrative assistée par IA',
            '',
            'Exemples :',
            '• allocation de ressources',
            '• contrôle automatisé',
            '• priorisation de dossiers',
            '',
            'Risque critique :',
            '• refus automatique',
            '• opacité',
            '• impossibilité de recours compréhensible',
            '',
            '👉 La légitimité démocratique est directement en jeu.',
            '',
            '4.2 Gouvernance publique saine',
            '• transparence sur l\'usage de l\'IA',
            '• droit au recours humain',
            '• traçabilité des critères',
            '• responsabilité administrative claire',
            '',
            '👉 L\'IA ne doit jamais affaiblir le lien citoyen–institution.'
          ]
        },
        {
          title: '8. QUESTION CLÉ À POSER PARTOUT',
          content: [
            '"Si cette décision est contestée demain,',
            'qui va s\'expliquer — et au nom de quoi ?"',
            '',
            '• réponse claire → gouvernance saine',
            '• réponse floue → danger latent'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — CADRES, RÈGLES, CHARTES & ARCHITECTURES DE GOUVERNANCE',
      sections: [
        {
          title: '1. PRINCIPE FONDATEUR (À GRAVER DANS LE MARBRE)',
          content: [
            'La gouvernance IA ne sert pas à contrôler la technologie.',
            'Elle sert à organiser la responsabilité humaine.',
            '',
            'Si un cadre de gouvernance :',
            '• parle surtout d\'outils,',
            '• de performance,',
            '• de conformité abstraite,',
            '',
            '👉 il échouera.',
            '',
            'Un bon cadre répond d\'abord à :',
            '• qui décide ?',
            '• qui valide ?',
            '• qui assume ?',
            '• qui peut dire non ?',
            '• qui peut arrêter ?'
          ]
        },
        {
          title: '2. LES 5 PILIERS D\'UNE GOUVERNANCE IA SAINE',
          content: [
            'Toute organisation (même petite) doit structurer sa gouvernance autour de 5 piliers.',
            'S\'il en manque un, la gouvernance est instable.',
            '',
            'PILIER 1 — CARTOGRAPHIE DES DÉCISIONS ASSISTÉES PAR IA',
            '',
            'Avant toute charte, il faut rendre visible l\'existant.',
            '',
            'Cartographier :',
            '• quelles décisions utilisent de l\'IA',
            '• à quel moment',
            '• avec quel impact humain',
            '• avec quelle fréquence',
            '• avec quelle réversibilité',
            '',
            '👉 On ne gouverne pas ce qu\'on ne voit pas.',
            '',
            'PILIER 2 — MATRICE DE RESPONSABILITÉ (RACI DÉCISIONNEL IA)',
            '',
            'Chaque décision assistée par IA doit avoir :',
            '• un responsable décisionnel humain',
            '• un contributeur technique',
            '• un validateur métier',
            '• un droit d\'escalade',
            '',
            '👉 La responsabilité ne doit jamais être collective ou abstraite.',
            '',
            'Phrase interdite :',
            '"C\'est une décision du système."',
            '',
            'PILIER 3 — RÈGLES D\'USAGE ET LIMITES EXPLICITES',
            '',
            'Une gouvernance saine définit :',
            '• ce que l\'IA peut faire',
            '• ce qu\'elle ne peut jamais faire',
            '• ce qui exige une validation humaine',
            '• ce qui est strictement interdit',
            '',
            'Exemples de règles claires :',
            '• aucune décision RH finale automatisée',
            '• aucune sanction sans entretien humain',
            '• aucune communication publique générée sans validation',
            '• aucun refus sans explicabilité minimale',
            '',
            '👉 Les limites protègent autant l\'organisation que les individus.',
            '',
            'PILIER 4 — TRAÇABILITÉ, EXPLICABILITÉ & DROIT À LA CONTESTATION',
            '',
            'Toute décision significative doit permettre :',
            '• de retracer les critères utilisés',
            '• d\'expliquer le raisonnement général',
            '• d\'identifier le décideur humain',
            '• de contester la décision',
            '',
            '👉 Une décision incontestable est illégitime, même si elle est "optimale".',
            '',
            'PILIER 5 — DISPOSITIF D\'ARRÊT, D\'ALERTE & DE RÉVISION',
            '',
            'Un système sain prévoit :',
            '• un droit d\'arrêt clair (kill switch)',
            '• des seuils d\'alerte',
            '• des revues régulières',
            '• la possibilité de revenir en arrière',
            '',
            '👉 Ce qui ne peut pas être arrêté n\'est pas gouvernable.'
          ]
        },
        {
          title: '6. INDICATEURS DE MAUVAISE GOUVERNANCE (À SURVEILLER)',
          content: [
            '🚨 Signaux d\'alerte :',
            '• "On ne sait plus qui a décidé"',
            '• "C\'est le modèle"',
            '• "On n\'ose plus contester"',
            '• "Personne n\'ose arrêter"',
            '• "On verra si ça pose problème"',
            '',
            '👉 Quand ces phrases apparaissent, la gouvernance est déjà défaillante.'
          ]
        },
        {
          title: '7. QUESTION STRUCTURANTE À POSER AVANT TOUT DÉPLOIEMENT',
          content: [
            '"Cette décision peut-elle être expliquée, contestée et assumée',
            'sans jamais mentionner l\'IA ?"',
            '',
            '• oui → cadre sain',
            '• non → risque juridique, social et managérial'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — RISQUES JURIDIQUES, POLITIQUES & AVENIR DU POUVOIR',
      sections: [
        {
          title: '1. LE RISQUE MAJEUR : LE POUVOIR SANS VISAGE',
          content: [
            'Le danger principal de l\'IA dans la décision n\'est pas l\'erreur.',
            '👉 C\'est l\'opacité du pouvoir.',
            '',
            'Quand une décision :',
            '• est influencée par un modèle,',
            '• médiée par un système,',
            '• validée sans débat,',
            '• expliquée par un jargon technique,',
            '',
            '👉 le pouvoir devient invisible.',
            '',
            'Or, dans toute société :',
            '• le pouvoir invisible crée la défiance,',
            '• la défiance crée la contestation,',
            '• la contestation crée la rupture.',
            '',
            '👉 L\'IA mal gouvernée fragilise la légitimité décisionnelle.'
          ]
        },
        {
          title: '2. RISQUE JURIDIQUE : "L\'IA" N\'EST PAS UNE PERSONNE MORALE',
          content: [
            'Point fondamental (et souvent mal compris) :',
            '',
            'Le droit ne reconnaît pas l\'IA comme sujet responsable.',
            '',
            'Conséquence directe :',
            '• toute décision assistée par IA engage un humain ou une organisation,',
            '• la responsabilité ne peut pas être déléguée à un outil,',
            '• l\'argument "c\'est l\'algorithme" n\'a aucune valeur juridique.',
            '',
            '👉 Plus l\'IA est utilisée, plus la responsabilité humaine est lourde.'
          ]
        },
        {
          title: '5. RISQUE D\'INSTRUMENTALISATION DE L\'IA',
          content: [
            'Dans certaines organisations, l\'IA devient :',
            '• un outil pour imposer des décisions impopulaires,',
            '• un alibi pour éviter le dialogue,',
            '• un moyen de neutraliser la contestation.',
            '',
            'Exemples :',
            '• "ce n\'est pas nous, c\'est le système"',
            '• "les chiffres sont objectifs"',
            '• "on ne peut pas faire autrement"',
            '',
            '👉 L\'IA devient un outil de domination symbolique.',
            '',
            'C\'est extrêmement dangereux pour :',
            '• la confiance interne,',
            '• la cohésion sociale,',
            '• la réputation,',
            '• la stabilité institutionnelle.'
          ]
        },
        {
          title: '6. L\'AVENIR DU POUVOIR DÉCISIONNEL (3–5 ANS)',
          content: [
            '6.1 Ce qui va se généraliser',
            '• décisions assistées par IA partout,',
            '• scoring, priorisation, recommandation,',
            '• agents décisionnels indirects.',
            '',
            '👉 L\'IA deviendra banale dans la décision.',
            '',
            '6.2 Ce qui va devenir rare (et précieux)',
            '• dirigeants capables d\'assumer contre l\'outil,',
            '• managers qui savent expliquer et arbitrer,',
            '• organisations qui acceptent la contestation,',
            '• institutions transparentes sur leurs usages IA.',
            '',
            '👉 La valeur se déplacera vers la responsabilité assumée.',
            '',
            '6.3 Nouvelle ligne de fracture',
            '',
            'Il y aura :',
            '• des organisations qui se cachent derrière l\'IA,',
            '• des organisations qui l\'utilisent sans s\'y cacher.',
            '',
            '👉 Les secondes inspireront confiance.',
            'Les premières généreront rejet et crise.'
          ]
        },
        {
          title: '7. LA NOUVELLE EXIGENCE DU LEADERSHIP',
          content: [
            'Le leadership à l\'ère de l\'IA exige :',
            '• du courage décisionnel',
            '• de la clarté sur les limites',
            '• de l\'acceptation du conflit',
            '• de la pédagogie',
            '• de l\'humilité face à l\'outil',
            '',
            '👉 Un leader augmenté par l\'IA doit être plus humain, pas moins.'
          ]
        },
        {
          title: '8. POSTURE FINALE À TRANSMETTRE (MANIFESTE)',
          content: [
            'Voici la posture de gouvernance à enseigner explicitement :',
            '',
            '• Je ne délègue jamais la responsabilité à un système',
            '• J\'utilise l\'IA pour éclairer, pas pour me cacher',
            '• Je rends visibles les critères de décision',
            '• J\'accepte la contestation comme signe de légitimité',
            '• J\'assume les conséquences humaines des choix faits'
          ]
        },
        {
          title: '9. TEST FINAL DE MATURITÉ POLITIQUE & JURIDIQUE',
          content: [
            'Pose cette question, sans détour :',
            '',
            '"Si cette décision est attaquée publiquement ou juridiquement,',
            'puis-je l\'assumer sans jamais invoquer l\'IA ?"',
            '',
            '• Oui → gouvernance solide',
            '• Non → risque majeur'
          ]
        }
      ]
    }
  ],
  conclusion: `La question de l'IA n'est pas "que peut faire la machine ?"
C'est : "sommes-nous prêts à assumer le pouvoir qu'elle nous donne ?"

⸻

SYNTHÈSE GLOBALE

👉 L'IA ne supprime pas le pouvoir décisionnel.
Elle le redistribue silencieusement.
La gouvernance sert à rendre ce pouvoir visible et assumable.

👉 L'IA est excellente pour informer la décision.
Elle est dangereuse dès qu'elle devient une autorité qui dispense l'humain de juger et d'assumer.

👉 L'IA ne supprime pas les conflits de pouvoir.
Elle les rend plus opaques si la gouvernance ne les rend pas explicites.

👉 La gouvernance IA n'est pas un contrôle de la machine.
C'est une mise en ordre du pouvoir humain à l'ère des systèmes intelligents.

👉 L'IA ne transforme pas seulement le travail ou la décision.
Elle transforme la nature du pouvoir — et exige une maturité humaine plus élevée que jamais.`
}

// Contenu de la formation "IA, Humanité & Sens - Secteur 10"
export const iaHumaniteContent: FormationContent = {
  formationId: 'formation_ia_humanite',
  introduction: `La plupart des débats sur l'IA sont mal posés.

On demande :
• "Que va faire l'IA ?"
• "Jusqu'où ira-t-elle ?"
• "Va-t-elle nous remplacer ?"

👉 La vraie question est ailleurs :
que révèle l'IA de ce que nous valorisions jusque-là ?

L'IA ne crée pas la crise de sens.
👉 Elle la rend visible.

Pendant des décennies, nous avons confondu :
• valeur humaine
• performance mesurable
• productivité
• rapidité
• capacité à produire

L'IA arrive et dit brutalement :

"Je peux produire plus vite, plus longtemps, plus proprement."

👉 Et soudain, beaucoup se demandent :
"Si produire n'est plus rare, qu'est-ce qui me rend utile ?"

Ce malaise ne vient pas de l'IA.
👉 Il vient d'une définition appauvrie de la valeur humaine.`,
  parts: [
    {
      title: 'AXE 1 — RÔLE FONDAMENTAL : CE QUE L\'IA RÉVÈLE DE L\'HUMAIN',
      sections: [
        {
          title: '1. L\'IA COMME MIROIR, PAS COMME MENACE',
          content: [
            'La plupart des débats sur l\'IA sont mal posés.',
            '',
            'On demande :',
            '• "Que va faire l\'IA ?"',
            '• "Jusqu\'où ira-t-elle ?"',
            '• "Va-t-elle nous remplacer ?"',
            '',
            '👉 La vraie question est ailleurs :',
            'que révèle l\'IA de ce que nous valorisions jusque-là ?',
            '',
            'L\'IA ne crée pas la crise de sens.',
            '👉 Elle la rend visible.'
          ]
        },
        {
          title: '2. CE QUE L\'IA MET À NU : NOTRE CONFUSION ENTRE VALEUR ET PERFORMANCE',
          content: [
            'Pendant des décennies, nous avons confondu :',
            '• valeur humaine',
            '• performance mesurable',
            '• productivité',
            '• rapidité',
            '• capacité à produire',
            '',
            'L\'IA arrive et dit brutalement :',
            '',
            '"Je peux produire plus vite, plus longtemps, plus proprement."',
            '',
            '👉 Et soudain, beaucoup se demandent :',
            '"Si produire n\'est plus rare, qu\'est-ce qui me rend utile ?"',
            '',
            'Ce malaise ne vient pas de l\'IA.',
            '👉 Il vient d\'une définition appauvrie de la valeur humaine.'
          ]
        },
        {
          title: '3. L\'ILLUSION QUI S\'EFFONDRE : "JE SUIS CE QUE JE FAIS"',
          content: [
            'Pour beaucoup de professionnels :',
            '• le métier = l\'identité',
            '• la compétence = la valeur',
            '• la maîtrise technique = la légitimité',
            '',
            'Quand l\'IA reproduit ou dépasse ces compétences :',
            '• l\'identité vacille',
            '• la fierté se fragilise',
            '• l\'anxiété apparaît',
            '',
            '👉 L\'IA ne vole pas l\'identité.',
            'Elle révèle qu\'elle était trop étroitement définie.'
          ]
        },
        {
          title: '4. CE QUE L\'IA NE PEUT PAS NOUS ENLEVER (MAIS QU\'ON AVAIT OUBLIÉ)',
          content: [
            'L\'IA peut :',
            '• produire',
            '• analyser',
            '• optimiser',
            '• simuler',
            '• enchaîner',
            '',
            'Mais elle ne peut pas :',
            '• donner du sens',
            '• ressentir la responsabilité',
            '• assumer une erreur',
            '• porter une intention morale',
            '• choisir ce qui vaut la peine d\'être fait',
            '',
            '👉 Ces dimensions étaient souvent invisibles, car non mesurées.',
            '',
            'L\'IA les rend soudain centrales.'
          ]
        },
        {
          title: '5. POURQUOI L\'IA PROVOQUE DES RÉACTIONS ÉMOTIONNELLES FORTES',
          content: [
            'Les résistances à l\'IA sont rarement rationnelles.',
            '',
            'On entend :',
            '• "Je n\'ai pas confiance"',
            '• "Ça déshumanise"',
            '• "Ça va trop vite"',
            '• "Je ne m\'y retrouve plus"',
            '',
            '👉 Ces phrases traduisent une inquiétude existentielle, pas technique.',
            '',
            'Peurs sous-jacentes :',
            '• perdre sa place',
            '• devenir interchangeable',
            '• ne plus compter',
            '• ne plus comprendre sa contribution',
            '',
            '👉 L\'IA met en crise le "pourquoi je fais ce que je fais".'
          ]
        },
        {
          title: '9. RÈGLE FONDAMENTALE À TRANSMETTRE EN FORMATION',
          content: [
            'Si l\'IA te fait te sentir inutile,',
            'ce n\'est pas parce que tu l\'es.',
            'C\'est parce que ta valeur a été définie trop étroitement.',
            '',
            '👉 Redéfinir la valeur humaine est un préalable à toute transformation réussie.'
          ]
        }
      ]
    },
    {
      title: 'AXE 2 — CE QUE L\'IA NE POURRA JAMAIS ÊTRE',
      sections: [
        {
          title: '1. COMPRENDRE LA LIMITE DE NATURE (PAS DE PERFORMANCE)',
          content: [
            'Beaucoup de discours disent :',
            '',
            '"L\'IA ne fait pas encore X… mais elle y arrivera."',
            '',
            'C\'est faux pour certaines dimensions fondamentales.',
            '',
            '👉 Il existe des limites ontologiques, pas techniques.',
            'Ce ne sont pas des retards d\'ingénierie.',
            'Ce sont des différences de nature.'
          ]
        },
        {
          title: '2. L\'IA N\'A PAS D\'INTENTION (ET N\'EN AURA PAS)',
          content: [
            'L\'IA :',
            '• génère des réponses',
            '• optimise des objectifs',
            '• maximise des critères',
            '• enchaîne des actions',
            '',
            'Mais elle ne veut rien.',
            '',
            'Elle n\'a :',
            '• aucun désir',
            '• aucune intention propre',
            '• aucun "pourquoi" interne',
            '• aucun sens du but',
            '',
            '👉 Elle agit sans vouloir.',
            '',
            'Tout objectif IA est :',
            '• défini par un humain',
            '• pondéré par un humain',
            '• borné (ou non) par un humain',
            '',
            '👉 L\'intention est toujours humaine, même si l\'action est déléguée.'
          ]
        },
        {
          title: '3. L\'IA N\'A PAS DE RESPONSABILITÉ (ET NE PEUT PAS EN AVOIR)',
          content: [
            'Responsabilité =',
            '• savoir qu\'on peut se tromper',
            '• assumer les conséquences',
            '• répondre devant autrui',
            '• porter une faute',
            '',
            'L\'IA :',
            '• ne peut pas être tenue responsable',
            '• ne peut pas être coupable',
            '• ne peut pas réparer moralement',
            '• ne peut pas demander pardon',
            '',
            '👉 Elle ne peut ni répondre, ni être redevable.',
            '',
            'Même une IA "autonome" :',
            '• n\'assume rien',
            '• n\'est jamais fautive',
            '• n\'est jamais légitime',
            '',
            '👉 La responsabilité est irréductiblement humaine.'
          ]
        },
        {
          title: '4. L\'IA NE RESSENT RIEN (ET NE COMPREND PAS CE QU\'ELLE SIMULE)',
          content: [
            'Une IA peut :',
            '• simuler l\'empathie',
            '• produire un langage émotionnel',
            '• adopter un ton compatissant',
            '',
            'Mais elle ne :',
            '• ressent pas la souffrance',
            '• ne connaît pas la honte',
            '• ne comprend pas la peur',
            '• ne fait pas l\'expérience du doute',
            '',
            '👉 Elle imite des formes.',
            'Elle ne vit aucune expérience.',
            '',
            'C\'est une différence abyssale.'
          ]
        },
        {
          title: '5. L\'IA NE COMPREND PAS LE SENS MORAL D\'UNE DÉCISION',
          content: [
            'Un humain décide souvent :',
            '• contre l\'optimisation',
            '• contre la règle',
            '• contre l\'efficacité',
            '• au nom d\'une valeur',
            '',
            'Exemples :',
            '• pardonner',
            '• faire une exception',
            '• protéger le plus faible',
            '• assumer une perte juste',
            '',
            '👉 L\'IA ne sait pas renoncer volontairement à l\'optimal.',
            '',
            'Elle n\'a :',
            '• ni conscience',
            '• ni culpabilité',
            '• ni courage moral',
            '',
            '👉 La morale n\'est pas calculable.'
          ]
        },
        {
          title: '10. RÈGLE FONDAMENTALE À TRANSMETTRE',
          content: [
            'Tout ce qui implique une intention morale,',
            'une responsabilité humaine,',
            'ou une conséquence irréversible',
            'ne doit jamais être délégué à une IA.',
            '',
            'Ce n\'est pas une règle technique.',
            '👉 C\'est une règle de civilisation.'
          ]
        }
      ]
    },
    {
      title: 'AXE 3 — CRISES IDENTITAIRES, RÉSISTANCES & PEURS LÉGITIMES',
      sections: [
        {
          title: '1. UNE VÉRITÉ FONDAMENTALE (TROP SOUVENT NIÉE)',
          content: [
            'La résistance à l\'IA n\'est pas une résistance au progrès.',
            'C\'est une résistance à la perte de repères.',
            '',
            'Quand quelqu\'un résiste :',
            '• il ne dit pas "je refuse la technologie"',
            '• il dit souvent sans le formuler :',
            '  • "je ne sais plus où est ma place"',
            '  • "je ne sais plus ce qui me rend légitime"',
            '  • "j\'ai peur de devenir inutile"',
            '',
            '👉 Ces peurs sont humaines, rationnelles et légitimes.',
            '',
            'Les balayer par :',
            '• des discours techniques',
            '• des injonctions à "s\'adapter"',
            '• des promesses de performance',
            '',
            '👉 ne fait que renforcer la défiance.'
          ]
        },
        {
          title: '2. LES FORMES DE CRISE IDENTITAIRE (TRÈS CONCRÈTES)',
          content: [
            'La crise n\'est pas spectaculaire.',
            'Elle est souvent silencieuse.',
            '',
            '2.1 "Ce que je savais faire ne vaut plus rien"',
            '',
            'Symptômes :',
            '• perte de fierté',
            '• doute sur sa légitimité',
            '• comparaison permanente avec l\'IA',
            '• sentiment d\'obsolescence',
            '',
            '👉 Quand la compétence était l\'identité,',
            'la copie par l\'IA est vécue comme une dépossession.',
            '',
            '2.2 "Je ne comprends plus ce qu\'on attend de moi"',
            '',
            'Avec l\'IA :',
            '• les tâches changent vite',
            '• les critères deviennent flous',
            '• la valeur n\'est plus visible',
            '',
            'Résultat :',
            '• anxiété',
            '• suradaptation',
            '• surproductivité défensive',
            '• fatigue mentale',
            '',
            '👉 L\'incertitude prolongée est psychologiquement destructrice.',
            '',
            '2.3 "On me demande d\'utiliser un outil que je ne maîtrise pas"',
            '',
            'Beaucoup vivent :',
            '• une honte silencieuse',
            '• la peur d\'être jugés "à la traîne"',
            '• une perte de confiance en soi',
            '',
            '👉 La compétence technique devient un marqueur social anxiogène.'
          ]
        },
        {
          title: '6. LA RESPONSABILITÉ DES FORMATEURS ET LEADERS',
          content: [
            'Former à l\'IA sans reconnaître ces peurs, c\'est :',
            '• former des outils',
            '• pas des humains',
            '',
            'Une formation mature doit :',
            '• nommer les peurs',
            '• les légitimer',
            '• créer un espace de parole',
            '• redonner des repères humains clairs',
            '',
            '👉 On n\'embarque pas les gens en niant ce qu\'ils ressentent.'
          ]
        },
        {
          title: '7. RECONSTRUIRE UNE IDENTITÉ PROFESSIONNELLE SAINE',
          content: [
            'La sortie de crise ne passe pas par :',
            '• devenir "meilleur que l\'IA"',
            '• courir après les outils',
            '• prouver sa performance',
            '',
            'Elle passe par :',
            '• redéfinir sa valeur humaine',
            '• assumer son jugement',
            '• accepter ses limites',
            '• retrouver une fierté non compétitive',
            '',
            '👉 La valeur humaine n\'est pas comparative.',
            'Elle est relationnelle et responsable.'
          ]
        },
        {
          title: '10. RÈGLE FONDAMENTALE DE L\'AXE 3',
          content: [
            'Une résistance non écoutée devient une opposition.',
            'Une peur reconnue devient une énergie de transformation.'
          ]
        }
      ]
    },
    {
      title: 'AXE 4 — LIMITES, INTERDITS & CHOIX CONSCIENTS',
      sections: [
        {
          title: '1. UNE VÉRITÉ INCONFORTABLE (MAIS ESSENTIELLE)',
          content: [
            'Le progrès technologique n\'est pas un critère moral.',
            '',
            'Le fait que quelque chose soit :',
            '• possible,',
            '• efficace,',
            '• rentable,',
            '• optimisable,',
            '',
            '👉 ne signifie jamais qu\'il doit être fait.',
            '',
            'L\'IA nous confronte à une responsabilité nouvelle :',
            '',
            'choisir consciemment ce que nous refusons de déléguer.'
          ]
        },
        {
          title: '4. CE QUI DOIT RESTER STRICTEMENT HUMAIN (LIGNES ROUGES)',
          content: [
            'Voici des zones de non-délégation, non négociables dans une société humaine mature.',
            '',
            '4.1 Décisions irréversibles à impact humain fort',
            '',
            'Exemples :',
            '• licenciement individuel',
            '• exclusion',
            '• refus critique',
            '• sanction grave',
            '• rupture de droits',
            '',
            '👉 Une machine ne doit jamais être l\'ultime arbitre de la trajectoire d\'une personne.',
            '',
            '4.2 Jugement moral et arbitrage éthique',
            '',
            'Quand une décision implique :',
            '• du juste vs injuste,',
            '• du moins mauvais,',
            '• un dilemme sans solution parfaite,',
            '',
            '👉 l\'IA doit se taire.',
            '',
            'Ce sont des choix :',
            '• politiques,',
            '• moraux,',
            '• humains.',
            '',
            '4.3 Relation humaine authentique',
            '',
            'Tout ce qui touche à :',
            '• la détresse,',
            '• la souffrance,',
            '• le soin,',
            '• la confiance,',
            '• l\'accompagnement,',
            '',
            '👉 ne doit jamais être entièrement délégué.',
            '',
            'Une simulation d\'empathie peut aider.',
            '👉 Elle ne doit jamais remplacer une présence humaine.',
            '',
            '4.4 Redéfinition des objectifs humains',
            '',
            'Une IA peut :',
            '• poursuivre un objectif',
            '• optimiser un cadre',
            '',
            'Mais elle ne doit jamais :',
            '• définir ce qui compte',
            '• décider de ce qui a du sens',
            '• redéfinir les priorités humaines',
            '',
            '👉 Les finalités appartiennent aux humains.'
          ]
        },
        {
          title: '5. L\'ERREUR DANGEREUSE : LA DÉLÉGATION PAR CONFORT',
          content: [
            'Beaucoup de délégations ne sont pas idéologiques.',
            'Elles sont confortables.',
            '',
            '• éviter un conflit',
            '• éviter d\'expliquer',
            '• éviter d\'assumer',
            '• éviter de décider',
            '',
            '👉 L\'IA devient un refuge pour fuir la responsabilité.',
            '',
            'C\'est l\'un des plus grands dangers contemporains.'
          ]
        },
        {
          title: '6. LE COURAGE DE DIRE NON (COMPÉTENCE D\'AVENIR)',
          content: [
            'À l\'ère de l\'IA, une compétence devient rare et précieuse :',
            '',
            'Savoir dire non à une solution techniquement séduisante.',
            '',
            'Dire non quand :',
            '• ça va trop vite,',
            '• ça déshumanise,',
            '• ça fragilise la dignité,',
            '• ça supprime le dialogue.',
            '',
            '👉 Ce courage n\'est pas anti-technologique.',
            'Il est profondément humain.'
          ]
        },
        {
          title: '10. TEST DE MATURITÉ ÉTHIQUE (SIMPLE ET RADICAL)',
          content: [
            'Pose cette question :',
            '',
            '"Si cette décision était rendue publique,',
            'serions-nous fiers de l\'avoir confiée à une machine ?"',
            '',
            '• Oui → limite respectée',
            '• Non → ligne rouge franchie'
          ]
        }
      ]
    },
    {
      title: 'AXE 5 — CONSTRUIRE UN FUTUR HUMAINEMENT DÉSIRABLE',
      sections: [
        {
          title: '1. UNE CLARIFICATION ESSENTIELLE (AVANT DE PARLER D\'AVENIR)',
          content: [
            'Le futur du travail et de la société n\'est pas dicté par l\'IA.',
            'Il est façonné par les choix humains faits avec l\'IA.',
            '',
            'L\'IA :',
            '• accélère',
            '• amplifie',
            '• rend visibles nos orientations',
            '',
            '👉 Elle ne décide jamais du cap.',
            'Elle révèle simplement la direction que nous prenons.'
          ]
        },
        {
          title: '2. LES DEUX FUTURS POSSIBLES (ET POURQUOI IL FAUT CHOISIR)',
          content: [
            'Futur A — Optimisation froide (par défaut)',
            '• tout ce qui peut être automatisé l\'est',
            '• la performance devient le critère suprême',
            '• l\'humain est un ajustement du système',
            '• la responsabilité se dilue',
            '• le sens s\'érode',
            '',
            '👉 Ce futur n\'est pas dystopique par intention,',
            'il l\'est par absence de choix.',
            '',
            'Futur B — Humanisme exigeant (par décision)',
            '• l\'IA gère l\'exécution',
            '• l\'humain garde le jugement',
            '• la responsabilité est assumée',
            '• les limites sont explicites',
            '• la dignité est centrale',
            '',
            '👉 Ce futur demande du courage,',
            'pas seulement de la technologie.'
          ]
        },
        {
          title: '3. À QUOI RESSEMBLE UN TRAVAIL HUMAINEMENT DÉSIRABLE AVEC L\'IA',
          content: [
            'Un travail désirable n\'est pas :',
            '• facile',
            '• parfait',
            '• sans effort',
            '',
            'Il est :',
            '• responsable → on assume des décisions',
            '• compréhensible → on sait pourquoi on agit',
            '• relationnel → on n\'est pas seul face aux systèmes',
            '• perfectible → on peut se tromper et apprendre',
            '• digne → on n\'est pas réduit à une variable',
            '',
            '👉 L\'IA doit libérer l\'humain pour ces dimensions, pas les effacer.'
          ]
        },
        {
          title: '5. RÔLE CLÉ DES ORGANISATIONS (ENTREPRISES, INSTITUTIONS)',
          content: [
            'Les organisations deviennent :',
            '• des lieux de transformation technologique',
            '• mais surtout des lieux de structuration du sens',
            '',
            'Leur responsabilité :',
            '• expliciter la valeur humaine attendue',
            '• protéger la responsabilité individuelle',
            '• former au jugement, pas seulement aux outils',
            '• refuser les usages déshumanisants',
            '',
            '👉 Une organisation neutre face à l\'IA n\'existe pas.',
            'Elle est soit protectrice, soit délétère.'
          ]
        },
        {
          title: '6. RÔLE CLÉ DES INDIVIDUS (PROFESSIONNELS, DIRIGEANTS, CITOYENS)',
          content: [
            'À l\'échelle individuelle, le futur désirable repose sur une posture :',
            '• ne pas chercher à rivaliser avec l\'IA',
            '• refuser la disparition de sa responsabilité',
            '• cultiver son discernement',
            '• accepter la lenteur quand elle est nécessaire',
            '• défendre la dignité du travail',
            '',
            '👉 La valeur humaine n\'est pas dans la vitesse,',
            'elle est dans la justesse.'
          ]
        },
        {
          title: '8. MESSAGE CENTRAL DE CLÔTURE (À TRANSMETTRE)',
          content: [
            'Nous n\'avons pas besoin d\'être plus performants que les machines.',
            'Nous avons besoin d\'être plus humains que jamais.',
            '',
            'Cela signifie :',
            '• plus responsables',
            '• plus conscients',
            '• plus courageux',
            '• plus clairs sur nos limites',
            '• plus exigeants sur le sens'
          ]
        },
        {
          title: '9. TEST FINAL DE FUTUR DÉSIRABLE',
          content: [
            'Pose cette question simple, individuellement ou collectivement :',
            '',
            '"Si ce futur devenait la norme pour nos enfants,',
            'serions-nous fiers de l\'avoir construit ainsi ?"',
            '',
            '• Oui → futur désirable',
            '• Non → réorientation nécessaire'
          ]
        }
      ]
    }
  ],
  conclusion: `Tu peux maintenant affirmer, sans posture marketing :

Former à l'IA sans former à l'humain est irresponsable.
Former à l'humain sans intégrer l'IA est irréaliste.
Former aux deux, ensemble, est une exigence de notre époque.

⸻

SYNTHÈSE GLOBALE

👉 L'IA n'est pas une crise de la technologie.
C'est une crise de définition de ce que signifie "être humain" dans le travail et la société.

👉 L'IA peut imiter des formes humaines.
Elle ne peut ni vouloir, ni ressentir, ni assumer.
Ces limites ne sont pas des faiblesses : ce sont nos fondations.

👉 Les peurs face à l'IA ne sont pas des freins au progrès.
Elles sont des signaux indiquant que l'identité humaine doit être redéfinie, protégée et valorisée.

👉 L'IA rend la limite humaine plus nécessaire que jamais.
Ce n'est pas la technologie qui doit décider jusqu'où aller,
c'est notre conception de la dignité humaine.

👉 L'IA ne décide pas du futur.
Elle nous oblige à décider du type d'humanité que nous voulons préserver et faire grandir.`
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
  'formation_immobilier': immobilierIAContent,
  'formation_ia_raisonnement': iaRaisonnementContent,
  'formation_ia_redaction': iaRedactionContent,
  'formation_ia_analyse': iaAnalyseContent,
  'formation_ia_recherche': iaRechercheContent,
  'formation_ia_automatisation': iaAutomatisationContent,
  'formation_ia_creative': iaCreativeContent,
  'formation_ia_agentique': iaAgentiqueContent,
  'formation_ia_emploi': iaEmploiContent,
  'formation_ia_gouvernance': iaGouvernanceContent,
  'formation_ia_humanite': iaHumaniteContent
}
