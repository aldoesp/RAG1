# Retrieval et construction du contexte

Le retriever reçoit l'embedding de la question et recherche les chunks les plus pertinents dans la base vectorielle.

## Top K

Le paramètre Top K indique combien de chunks doivent être récupérés.

Avec topK = 5, le retriever demande au maximum cinq passages.

Récupérer trop peu de passages peut supprimer une information essentielle. Récupérer trop de passages peut ajouter du bruit et augmenter la taille du prompt.

## Seuil de similarité

Un seuil minimal peut empêcher l'utilisation de passages trop éloignés de la question.

Si aucun chunk ne dépasse le seuil, le système peut :

- demander une précision ;
- répondre qu'il ne dispose pas d'informations suffisantes ;
- utiliser un autre outil ;
- refuser de deviner.

## Assemblage des passages

La construction du contexte consiste à organiser les chunks récupérés dans un bloc lisible par le LLM.

Chaque passage peut être accompagné de sa source :

[Source : guide-rag.pdf, page 4]
Contenu du passage...

Le contexte n'est pas le prompt complet. Le prompt final contient généralement les instructions, le contexte et la question.
