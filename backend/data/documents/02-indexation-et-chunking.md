# Indexation et chunking

L'indexation prépare les documents avant qu'un utilisateur ne pose une question.

Un document volumineux ne doit généralement pas être représenté par un seul embedding. Il est découpé en petits passages appelés chunks.

## Taille des chunks

Un chunk trop grand peut contenir plusieurs sujets différents. Son embedding devient alors moins précis.

Un chunk trop petit peut perdre le contexte nécessaire à la compréhension d'une idée.

Une configuration de départ courante pour un document textuel est :

- chunkSize : 500 caractères ;
- chunkOverlap : 100 caractères.

Ces valeurs ne sont pas universelles. Elles doivent être adaptées au contenu et évaluées.

## Overlap

L'overlap répète une partie de la fin d'un chunk au début du chunk suivant. Il réduit le risque qu'une information importante soit coupée entre deux passages.

## Métadonnées produites

Chaque chunk peut conserver :

- le nom du fichier ;
- son index ;
- le numéro de page ;
- le type du document ;
- la date d'indexation ;
- un hash du contenu.

Le chunk contient le texte. L'embedding est sa représentation numérique. L'index n'est pas le contenu du chunk : il indique seulement sa position.
