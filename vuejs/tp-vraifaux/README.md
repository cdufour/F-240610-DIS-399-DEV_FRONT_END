# TP Vrai-faux

Réaliser une application Vue du type jeu "vrai/faux".

L'interface utilisateur devra
- En priorité: permettre de jouer (démarrer une partie)
- Secondairement: permettre de paramètrer le jeu
    - Nombre de questions
    - Catégories. Exemple: uniquement "Histoire" ou bien "Toutes"
    - Niveau de difficulté.
Ce paramètrage déterminera le nombre et le type de questions qui alimenteront le jeu.

## Le jeu (gameplay)

Les questions seront affichées l'une après l'autre.  
L'ordre sera de préférence aléatoire. 
L'interface permettra de donner la réponse (vrai ou faux).  
Le clic/pression sur la réponse permettra de passer à la question suivante.  

Le jeu se termine lorsque l'utilisateur a répondu à la dernière question.
Afficher alors un écran de fin indiquant:
- le score obtenu
- une possiblité de rejouer

Les questions seront chargées par requête ajax sur db.json (servi par json-server)
