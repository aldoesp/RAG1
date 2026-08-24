# Embeddings et similarité sémantique

Un embedding est un vecteur numérique qui représente le sens approximatif d'un texte.

Deux textes ayant un sens proche ont généralement des vecteurs proches, même s'ils n'utilisent pas exactement les mêmes mots.

Exemple :

- « Comment réinitialiser mon mot de passe ? »
- « J'ai oublié mon code d'accès. »

Ces phrases peuvent avoir une forte proximité sémantique.

## Similarité cosinus

La similarité cosinus compare l'orientation de deux vecteurs.

Un score élevé indique une proximité sémantique selon le modèle d'embedding. Il ne garantit pas que le passage est vrai, récent ou suffisant pour répondre.

Un résultat peut être sémantiquement proche mais factuellement incorrect.

Le même modèle d'embedding doit être utilisé pour les chunks et pour les questions. Des vecteurs produits par deux modèles différents ne doivent pas être comparés directement.

La dimension du vecteur stocké dans pgvector doit correspondre à la dimension produite par l'API d'embedding.
