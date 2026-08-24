# LangChain et orchestration

LangChain est une bibliothèque qui facilite l'assemblage des composants d'une application utilisant des modèles de langage.

Elle peut fournir ou intégrer :

- des document loaders ;
- des text splitters ;
- des modèles d'embedding ;
- des vector stores ;
- des retrievers ;
- des prompt templates ;
- des chaînes d'exécution ;
- des outils et des agents.

LangChain ne conçoit pas automatiquement l'architecture métier à la place du développeur.

Le développeur choisit les composants, les paramètres et le chemin d'exécution.

Un orchestrateur RAG peut coordonner les étapes suivantes :

1. analyser la requête ;
2. décider si une recherche documentaire est nécessaire ;
3. appeler le retriever ;
4. construire le contexte ;
5. appeler le LLM ;
6. formater la réponse et les sources.

LangChain facilite cette orchestration, mais une logique équivalente peut aussi être développée directement en TypeScript.
