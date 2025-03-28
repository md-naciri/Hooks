# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_
```
J'ai modifié le composant `ProductSearch` pour intégrer la recherche en temps réel avec un mécanisme de debounce. Cela permet de limiter le nombre de requêtes en attendant un court délai après la dernière saisie de l'utilisateur avant d'exécuter la recherche. Cette approche améliore les performances et réduit la charge sur l'API.  
```
![image](https://github.com/user-attachments/assets/08594d1b-e62d-46ab-970b-f3853d746d53)
![image](https://github.com/user-attachments/assets/8c1a217a-a30d-4bf3-aa6b-1732a9919319)



### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
```
J'ai créé `LanguageContext` pour gérer les préférences de langue de l'utilisateur et permettre un changement dynamique de la langue. Un sélecteur de langue a été ajouté pour modifier la langue en temps réel.
```
![image](https://github.com/user-attachments/assets/773649a6-1a25-46e8-878d-ca4934e25cec)
![image](https://github.com/user-attachments/assets/c617d225-65fe-4899-a3fd-964e0227a097)



### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
J'ai créé le hook `useDebounce` pour gérer le délai d'exécution des fonctions et éviter les appels trop fréquents.
J'ai également implémenté `useLocalStorage` pour simplifier l'utilisation du stockage local en facilitant la lecture et l'écriture des données avec React.
Ces hooks permettent de réutiliser facilement ces fonctionnalités dans l'application.
```

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
J'ai ajouté un bouton '-' de rechargement pour permettre à l'utilisateur d'actualiser les données manuellement.  
J'ai également implémenté la pagination afin de charger les données par pages, améliorant ainsi les performances et l'expérience utilisateur.  
```
![image](https://github.com/user-attachments/assets/b96b3248-0e93-47c4-9023-868a35502911)
![image](https://github.com/user-attachments/assets/3d26942a-5d9f-4eb4-a03a-e1525004437f)



## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
