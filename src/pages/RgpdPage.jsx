import React from 'react';

function RgpdPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] py-12 px-4 font-nunito">
      <div className="max-w-[1100px] mx-auto p-8">
        <h1 className="text-[36px] font-bold text-center text-[#4A4A4A] font-baloo mb-8">
          Politique de Protection des Données – Conformité RGPD
        </h1>

        <section className="mb-8">
          <h2 className="text-[28px] font-bold text-[#4A4A4A] font-baloo mb-4">
            1. Politique de protection des données
          </h2>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.1 Identité du Responsable du traitement
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Oubly, société par projet étudiant domiciliée à Saint-Herblain, 44000 Nantes (France), immatriculation : « Musée des objets perdus – MyDigitalSchool Nantes », est Responsable du traitement au sens du Règlement (UE) 2016/679 (RGPD) et de la loi Informatique & Libertés modifiée.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.2 Finalités des traitements
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Les données personnelles collectées via le CMS Oubly ont pour finalités :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-[#4A4A4A]">Gestion des objets perdus (enregistrement, recherche, restitution).</li>
              <li className="text-[#4A4A4A]">Administration des comptes utilisateurs et des accès au CMS.</li>
              <li className="text-[#4A4A4A]">Facturation, suivi de la relation client et support technique.</li>
              <li className="text-[#4A4A4A]">Statistiques d’utilisation anonymisées à des fins d’amélioration continue.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.3 Bases légales
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Exécution d’un contrat (art. 6-1-b RGPD) : fourniture du service CMS.
              <br />
              Intérêt légitime (art. 6-1-f) : sécurisation du service, prévention des fraudes.
              <br />
              Obligations légales (art. 6-1-c) : conservation comptable, lutte contre le vol.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.4 Catégories de données traitées
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Identité (nom, prénom, identité du déclarant).
              <br />
              Coordonnées (adresse e-mail, téléphone, adresse postale le cas échéant).
              <br />
              Données relatives aux objets (descriptif, localisation, date, photo facultative).
              <br />
              Données de connexion (logs, adresse IP, identifiants).
              <br />
              Métadonnées contractuelles et de facturation (IBAN, SIRET…).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.5 Durées de conservation
            </h3>
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-left p-2 bg-[#FBF7F2]">Catégorie</th>
                  <th className="text-left p-2 bg-[#FBF7F2]">Durée</th>
                  <th className="text-left p-2 bg-[#FBF7F2]">Référence légale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[#FFBC33]">Objets perdus</td>
                  <td className="p-2 border-b border-[#FFBC33]">1 an après restitution ou 3 ans après déclaration si non réclamé</td>
                  <td className="p-2 border-b border-[#FFBC33]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#FFBC33]">Données de compte client</td>
                  <td className="p-2 border-b border-[#FFBC33]">3 ans après dernière activité</td>
                  <td className="p-2 border-b border-[#FFBC33]">-</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#FFBC33]">Facturation</td>
                  <td className="p-2 border-b border-[#FFBC33]">10 ans</td>
                  <td className="p-2 border-b border-[#FFBC33]">Code de commerce</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#FFBC33]">Logs techniques</td>
                  <td className="p-2 border-b border-[#FFBC33]">12 mois</td>
                  <td className="p-2 border-b border-[#FFBC33]">Recommandation CNIL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.6 Destinataires & sous-traitants
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Personnels habilités d’Oubly (support, technique, facturation).
              <br />
              Sous-traitants hébergeurs (Infomaniak – France) & prestataires e-mailing (Mailjet – UE). Des clauses contractuelles types (CCT) encadrent toute exportation hors EEE.
              <br />
              Autorités légalement habilitées (sur demande judiciaire).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.7 Transferts hors Union européenne
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Aucun transfert hors UE/EEE n’est prévu. Si un transfert devenait nécessaire, Oubly s’engage à recourir aux mécanismes prévus par le RGPD (CCT, BCR ou décision d’adéquation).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.8 Droits des personnes
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Conformément au RGPD, chaque utilisateur dispose du droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité. Ces droits s’exercent par courriel: contact@oubly.com ou courrier : Oubly – DPO, Saint Herblain, 44000 Nantes. Une réponse sera apportée dans un délai d’un mois.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.9 Sécurité & confidentialité
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Oubly applique des mesures organisationnelles et techniques proportionnées : chiffrement TLS v1.3, hébergement en data-centres ISO 27001 en France, sauvegardes quotidiennes, accès IAM par MFA, journalisation et supervision 24/7.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.10 Violations de données
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              En cas de violation de données à caractère personnel, Oubly notifiera la CNIL dans les 72 heures et, si nécessaire, les personnes concernées, conformément aux articles 33 et 34 du RGPD.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.11 Registre des traitements
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Oubly tient un registre interne des activités de traitement, mis à jour annuellement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.12 Délégué à la protection des données (DPO)
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Contact : contact@oubly.com. Délégué externe : Cabinet LexData, 15 rue de la Chancellerie, 75001 Paris.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.13 Cookies et traceurs
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Le CMS utilise uniquement des cookies fonctionnels (session) et, avec consentement, des cookies analytics Matomo auto-hébergés. Les paramètres peuvent être modifiés via le bandeau de consentement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              1.14 Mise à jour de la politique
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              La présente politique est en vigueur depuis le 12 juin 2025 et pourra être révisée. Toute modification substantielle sera notifiée aux clients.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[28px] font-bold text-[#4A4A4A] font-baloo mb-4">
            2. Conditions Générales de Vente – CMS Oubly
          </h2>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.1 Préambule
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent l’abonnement et l’utilisation du logiciel Oubly CMS (le « Service »), édité par Oubly. Toute signature de Bon de Commande vaut acceptation pleine et entière des CGV.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.2 Définitions
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              « Client » : personne morale ayant souscrit au Service. « Utilisateur » : personne physique autorisée par le Client à accéder au CMS. « Abonnement » : licence d’utilisation du Service pour la Durée définie.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.3 Objet
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Oubly concède au Client un droit non exclusif, non transférable et limité d’accès et d’utilisation du CMS, hébergé en mode SaaS, pour gérer les objets perdus au sein de son organisation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.4 Description du Service
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Le CMS inclut: formulaire déclaratif, module de recherche interne, matching algorithmique, tableau de bord statistique, export CSV/JSON, API REST (2 000 req./jour), et un espace marque blanche.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.5 Souscription – Durée – Renouvellement
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              L’Abonnement est conclu pour 12 mois à compter de la date d’activation. Il est renouvelé tacitement pour des périodes successives d’un an sauf résiliation notifiée 60 jours avant l’échéance.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.6 Prix & modalités de paiement
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Le prix figure au Bon de Commande. Paiement annuel d’avance par virement SEPA, 30 jours fin de mois. Tout retard entraîne pénalités légales (art. L441-10 C. com.). Les tarifs sont révisables à chaque reconduction avec préavis de 90 jours.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.7 Obligations d’Oubly
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Assurer la disponibilité du Service à 99,5 % sur la période mensuelle (hors maintenance planifiée).
              <br />
              Fournir assistance e-mail & chat: jours ouvrés 9h-18h (UTC+1).
              <br />
              Réaliser les sauvegardes et appliquer les correctifs de sécurité.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.8 Obligations du Client
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Désigner un administrateur référent.
              <br />
              Garantir l’exactitude des données saisies.
              <br />
              Ne pas utiliser le Service pour des fins illicites ou violer les droits de tiers.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.9 Propriété intellectuelle
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Le CMS, sa documentation et ses développements restent la propriété exclusive d’Oubly. Aucune cession de droits n’est accordée au Client, sauf usage décrit.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.10 Confidentialité & Protection des données
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Chaque partie s’engage à garder confidentielles les informations identifiées comme telles. Oubly agit en qualité de Sous-traitant RGPD ; l’Accord de Traitement des Données (DPA) en annexe fait partie intégrante des CGV.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.11 Support & Maintenance
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Mises à jour mineures incluses, mises à jour majeures soumises à accord. Oubly informera le Client 5 jours ouvrés avant toute maintenance programmée impactant le Service.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.12 Responsabilité & Garantie
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Responsabilité plafonnée au montant total payé par le Client au cours des 12 mois précédant le fait générateur. Exclusion : dommages indirects (perte de profit, de données).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.13 Force majeure
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Aucune partie ne sera tenue responsable d’un manquement résultant d’un cas de force majeure au sens de l’art. 1218 code civil.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.14 Assurance
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Oubly déclare avoir souscrit une assurance Responsabilité Civile Professionnelle couvrant ses prestations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.15 Résiliation et conséquences
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              En cas de manquement grave non réparé sous 30 jours, l’autre partie pourra résilier de plein droit. Les sommes dues resteront exigibles.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.16 Réversibilité & Portabilité des données
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Sur demande écrite dans les 30 jours suivant la fin du contrat, Oubly fournira au Client un export de ses données au format JSON/CSV. Passé ce délai, les données seront supprimées sous 60 jours.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.17 Preuve – Archivage
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Les enregistrements automatiques d’Oubly (logs) font preuve. Oubly archive les contrats sur support fiable pendant 10 ans.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.18 Droit applicable & Juridiction
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Les CGV sont régies par le droit français. En cas de litige, compétence exclusive des tribunaux de Nantes, sauf disposition impérative contraire.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-[#4A4A4A] font-baloo mb-2">
              2.19 Entrée en vigueur
            </h3>
            <p className="text-[#4A4A4A] mb-4">
              Ces CGV entrent en vigueur le 23 juin 2025.
            </p>
          </div>
        </section>

        <p className="text-[#4A4A4A] text-center">
          Pour toute question sur la présente Politique RGPD ou les CGV, contactez: contact@oubly.com.
        </p>
      </div>
    </div>
  );
}

export default RgpdPage;
