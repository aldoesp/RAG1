# Corpus de test pour le projet Real RAG

Place tous les fichiers de ce dossier dans :

```text
data/documents/
```

## Questions qui devraient retrouver les documents RAG

1. Quelles sont les deux phases principales d'un système RAG ?
   - Document attendu : `01-rag-fondamentaux.md`

2. Pourquoi utilise-t-on un overlap pendant le chunking ?
   - Document attendu : `02-indexation-et-chunking.md`

3. Un score de similarité élevé garantit-il que l'information est vraie ?
   - Document attendu : `03-embeddings-et-similarite.md`

4. Que doit faire le système si aucun chunk ne dépasse le seuil ?
   - Document attendu : `04-retrieval-et-contexte.md`

5. Quelle est la différence entre le contexte et le prompt final ?
   - Documents attendus : `04-retrieval-et-contexte.md` et `05-prompt-et-generation.md`

6. Est-ce que LangChain choisit automatiquement toute l'architecture ?
   - Document attendu : `06-langchain-et-orchestration.md`

7. Comment tester qu'un RAG n'invente pas une réponse ?
   - Document attendu : `07-evaluation-et-fiabilite.md`

## Questions hors corpus

8. Quelle est la capitale du Japon ?
   - Résultat attendu : aucun passage suffisamment pertinent, selon le seuil.

9. Comment configurer un pare-feu ?
   - Le document `08-securite-reseau.txt` peut être retrouvé, mais il ne contient pas une configuration détaillée.

10. Comment préparer des crêpes ?
    - Document attendu : `09-recette-crepes.txt`

## Test important

Pose la question :

« Est-ce qu'un score vectoriel élevé prouve la véracité d'un document ? »

Le retriever doit privilégier `03-embeddings-et-similarite.md`, et non un document contenant seulement les mots « score » ou « document ».
