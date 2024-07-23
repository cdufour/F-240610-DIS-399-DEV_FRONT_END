# Exo UserRegister

Réaliser un composant Vue affichant un formulaire de création de compte utilisateur
avec les champs suivants:
- nom de l'utilisateur
- mot de passe

Mettre en place une validation avec les contraintes suivantes:

- nom de l'utilisateur:
    - ne pas pas être vide
    - doit être de longueur supérieure à 2
    - ne doit pas contenir d'espace

- mot de passe:
    - doit être de longueur supérieure à 10
    - doit contenir au moins un chiffre
    - doit contenir au moins une majuscule
    - doit contenir au moins un caractère spécial

Afficher dans l'interface les erreurs de validation.

En cas de formulaire sans erreur, envoyer l'utilisateur
à un json-server basé sur le fichier user.json.