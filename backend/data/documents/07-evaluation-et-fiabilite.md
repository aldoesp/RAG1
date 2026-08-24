# Évaluation et fiabilité d'un RAG

Un RAG fonctionnel n'est pas automatiquement un RAG fiable.

Il faut évaluer séparément la recherche et la génération.

## Évaluation du retrieval

On vérifie si les passages nécessaires apparaissent dans les résultats récupérés.

Quelques questions utiles :

- Le bon document est-il retrouvé ?
- Le passage exact est-il présent dans le Top K ?
- Les documents hors sujet sont-ils écartés ?
- Les métadonnées permettent-elles de retrouver la source ?

## Évaluation de la génération

On vérifie si la réponse :

- respecte le contexte ;
- ne crée pas d'informations absentes ;
- cite correctement les sources ;
- reconnaît un contexte insuffisant ;
- répond réellement à la question.

## Cas hors corpus

Une question sans réponse dans les documents doit être traitée explicitement.

Le comportement attendu peut être :

« Je ne trouve pas cette information dans les documents disponibles. »

Un système qui invente une réponse malgré l'absence de contexte souffre d'un problème de grounding.
