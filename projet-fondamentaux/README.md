# Projet - les fondamentaux

## bet-project
### Consignes
En vous basant sur la capture __bet.png__ et/ou sur cette [vidéo](https://www.youtube.com/watch?v=SP1JShpuMsY) créer une interface web affichant les paris listés dans le fichier __bet.json__.
Le clic sur une cote affichera dans le DOM une zone permettant de saisir
une mise. Les gains correspondants à cette mise seront également affichés.
Le parieur pourra supprimer cette zone en cliquant sur une croix de suppression.
Le parieur pourra cliquer sur une autre cote: la zone de mise se met alors à jour.

Les données seront récupérés au chargement de la page par une requête ajax (fetch().then()) sur le fichier local __bet.json__
Utiliser __bootstrap__ pour le design de la page et du __JavaScript pur__ pour la réactivité de l'interface.

