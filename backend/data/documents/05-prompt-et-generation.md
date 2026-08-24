# Prompt final et génération

Le prompt final d'un RAG combine plusieurs éléments.

## Instructions système

Les instructions système sont définies par le développeur. Elles précisent le comportement attendu du modèle.

Exemple :

« Réponds uniquement avec les informations présentes dans le contexte. Si le contexte est insuffisant, indique-le clairement. »

## Contexte

Le contexte contient les passages récupérés dans la base de connaissances.

## Question

La question est la demande actuelle de l'utilisateur.

La structure logique peut être représentée ainsi :

Instructions système
+ contexte récupéré
+ question utilisateur
= prompt envoyé au LLM

Le LLM ne vérifie pas automatiquement la vérité du contexte. S'il reçoit un passage incorrect, il peut produire une réponse incorrecte mais bien formulée.

Pour rendre la réponse vérifiable, l'application doit retourner les sources utilisées avec le texte généré.
