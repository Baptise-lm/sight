import React from 'react';

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] py-12 px-4 font-nunito">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-[36px] font-bold text-center text-[#4A4A4A] font-baloo mb-8">
          Guide d’utilisation
        </h1>

        <section className="mb-8">
          <h2 className="text-[28px] font-bold text-[#4A4A4A] font-baloo mb-4">
            Fonctionnalités adressées aux utilisateurs
          </h2>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Créer un compte
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              L’utilisateur peut créer un compte en remplissant son nom, prénom, adresse email, sa ville et un mot de passe. De façon facultative, il peut ajouter son adresse et son numéro de téléphone. La création du compte peut se faire via un formulaire d’informations à remplir lors de la première connexion, lorsque l’on cherche à voir ses informations personnelles en cliquant sur Compte dans le menu d’en-tête. Ou encore lorsque l'on procède au processus pour récupérer un objet.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Créer un compte" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Connexion
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Vous pouvez vous connecter en cliquant sur Compte dans le menu d’en-tête, cette page vous demandera seulement votre adresse email et votre mot de passe. Cette page est accessible une fois que vous avez déjà créé un compte et vous permet d’accéder à la page Compte comportant vos informations.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Connexion" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Contact & assistance
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Le formulaire ci-dessous vous permet de rentrer en contact avec notre service d’assistance en cas de questions par rapport à notre service. Nous vous invitons à remplir votre nom et prénom, ainsi que votre adresse email obligatoirement afin de nous permettre de vous identifier et de vous recontacter. Le numéro de téléphone est facultatif car nous possédons déjà votre adresse email obligatoirement. Ce formulaire est utilisable sans avoir à être connecté ou à posséder un compte. Un message est obligatoire afin de nous permettre de répondre clairement à votre problématique.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Contact & assistance" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Rechercher un objet perdu
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Vous pouvez rechercher des objets via une barre de recherche vous permettant de filtrer par catégorie d’objet perdu ou en cherchant directement une catégorie ou une typologie d’objet. En cliquant sur une catégorie, vous serez amené à un nouveau menu avec des sous-catégories pour affiner votre recherche. Vous pouvez aussi chercher des établissements précis via cette page.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Rechercher un objet perdu" className="rounded-lg mb-4" />
              <img src="https://via.placeholder.com/600x400" alt="Rechercher un objet perdu" className="rounded-lg mb-4" />
            </div>
            <p className="text-[#4A4A4A] mb-4">
              Un autre moyen de rechercher des objets est de consulter la page spécialement dédiée à cela nommée “Objets trouvés”. Ici, vous pouvez manier les filtres pour affiner votre recherche ou taper directement la typologie d’objets que vous avez perdu. Les rectangles nommés “Catégorie - infos - lieu” désignent un objet trouvé qui correspond à votre recherche. La catégorie de l’objet est notée en première, ensuite des informations telles que sa couleur par exemple. Et enfin le lieu dans lequel il a été trouvé. En cliquant sur l’objet, vous pourrez avoir plus d’informations comme le lieu où l’objet est stocké pour aller le récupérer personnellement. Le même fonctionnement s’applique en cliquant sur la fiche d’un établissement. Vous pourrez avoir des informations sur le lieu, mais surtout les objets qu’il stocke.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Objets trouvés" className="rounded-lg mb-4" />
              <img src="https://via.placeholder.com/600x400" alt="Objets trouvés" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Récupérer son objet
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Vous pouvez voir la fiche de détails d’un objet trouvé. Nous voyons sa catégorie, des infos légèrement descriptives telles que sa couleur, et le lieu où il a été trouvé. En dessous nous pouvons voir une carte avec un extrait de la fiche de l'établissement dans lequel est actuellement stocké. En fonction de la taille de l’objet et du lieu, les établissements ne peuvent pas stocker indéfiniment les objets trouvés et peuvent parfois donner la charge du stockage à d’autres lieux, telles que des mairies par exemple. Vous pouvez consulter plus d’informations sur l’établissement de stockage en cliquant sur le bouton “Voir”. Si cet objet vous appartient, vous pouvez vous rendre au lieu de stockage et le récupérer. Ou vous pouvez rester sur notre site et demander à vous le faire livrer à votre domicile ou en point relais.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Récupérer son objet" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Demander une livraison de l’objet
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Si vous voulez récupérer votre objet et que vous ne pouvez pas venir le chercher vous-même, vous pouvez demander à le faire envoyer à votre domicile ou en point relais. Ci-dessous, vous voyez les formulaires à remplir dans chacun de ces cas. La livraison en point relais invite, en plus du formulaire, à choisir un point relais à proximité de son domicile.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Demander une livraison" className="rounded-lg mb-4" />
              <img src="https://via.placeholder.com/600x400" alt="Demander une livraison" className="rounded-lg mb-4" />
            </div>
            <p className="text-[#4A4A4A] mb-4">
              Une fois votre mode de livraison choisi, vous serez amené à régler des frais de livraison. Vous devrez entrer vos coordonnées bancaires avant de recevoir une validation et un récapitulatif de votre commande.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Frais de livraison" className="rounded-lg mb-4" />
              <img src="https://via.placeholder.com/600x400" alt="Frais de livraison" className="rounded-lg mb-4" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Retrouver un établissement précis grâce à une carte interactive
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Notre carte interactive vous permet de retrouver un établissement lorsque vous savez dans quel endroit ou zone géographique vous avez perdu votre objet. Les filtres vous permettent de mieux cibler votre recherche. La barre de recherche vous laisse plus de liberté. Avec la carte interactive, vous pouvez mieux vous repérer dans une zone géographique car elle vous offre une orientation plus visuelle si vous ne vous souvenez pas précisément de l’endroit précis où vous avez perdu votre objet.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Carte interactive" className="rounded-lg mb-4" />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[28px] font-bold text-[#4A4A4A] font-baloo mb-4">
            Fonctionnalités adressées aux administrateurs
          </h2>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Créer un compte (identique pour les administrateurs et utilisateurs)
            </h3>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Connexion (identique pour les administrateurs et utilisateurs)
            </h3>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Contact & assistance (identique pour les administrateurs et utilisateurs)
            </h3>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              Déclarer un objet trouvé
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Les établissements (appelés “Administrateurs” dans ce cas) sont les seuls ayant la possibilité d’enregistrer un objet lorsque quelqu’un leur ramène un objet trouvé. Ce monopole s’explique par l’abus possible que pourraient faire les utilisateurs en renseignant des objets trouvés fictifs.
              Via ce formulaire, les établissements peuvent renseigner les caractéristiques de l’objet comme le lieu de découverte, une date fixe ou la possibilité de mettre un intervalle de dates si cette donnée est incertaine. Ils peuvent sélectionner une catégorie correspondante à l’objet, un lieu de stockage pour que le propriétaire ait la possibilité de venir récupérer son objet lui-même. L’établissement peut ajouter des informations additionnelles pour aider les utilisateurs à identifier leur objet perdu. Et enfin, ils peuvent renseigner l’identité de la personne ayant ramené l’objet afin de le mettre en valeur auprès des utilisateurs, de le remercier en le nommant en faisant apparaître son identité dans la liste des objets récemment rapportés.
            </p>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/600x400" alt="Déclarer un objet trouvé" className="rounded-lg mb-4" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuidePage;
