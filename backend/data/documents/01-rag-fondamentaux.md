# Fondamentaux du RAG

Le RAG signifie Retrieval-Augmented Generation, ou génération augmentée par la recherche.

Un système RAG permet à un modèle de langage de consulter une base de connaissances avant de générer une réponse. Le modèle ne répond donc pas uniquement à partir de ce qu'il a appris pendant son entraînement.

Le pipeline RAG comporte généralement deux phases distinctes :

## Phase d'indexation

1. Chargement des documents.
2. Nettoyage du contenu.
3. Découpage en chunks.
4. Génération d'un embedding pour chaque chunk.
5. Stockage des chunks, des embeddings et des métadonnées dans une base vectorielle.

## Phase d'interrogation

1. Réception de la question.
2. Génération de l'embedding de la question.
3. Recherche des chunks les plus proches.
4. Construction du contexte.
5. Création du prompt final.
6. Génération de la réponse par le LLM.

Le RAG ne réentraîne pas nécessairement le modèle. Il lui fournit un contexte externe au moment de la requête.
