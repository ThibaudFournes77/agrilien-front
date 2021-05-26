/* eslint-disable no-useless-computed-key */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Thibaud from 'src/assets/images/thibaud_fournes.JPG';

const styles = (theme) => ({
  people__infos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  people__image: {
    maxWidth: '350px',
    height: '200px',
    marginBottom: theme.gutter.big,
  },
  people__introduction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '500px',
    height: '100px',
    marginBottom: theme.gutter.big,
  },
  project: {
    '& p': {
      marginBottom: theme.gutter.normal,
    },
  },
});

function AboutUs({ classes }) {
  return (
    <main className="main">
      <div className={classes.people}>
        <div className={classes.people__infos}>
          <img src={Thibaud} alt="" className={classes.people__image} />
          <div className={classes.people__introduction}>
            <p>Voici Thibaud Fournès, Product Owner et lead developer frontend</p>
            <p>
              Ingénieur agronome de formation, je suis devenu développeur front-end par goût
              pour le code. Je mets à profit mes nouvelles compétences pour donner vie au site
              Agrilien.
            </p>
          </div>
        </div>
        <div className={classes.people__infos}>
          <img src={Thibaud} alt="" className={classes.people__image} />
          <div className={classes.people__introduction}>
            <p>Voici Beate Jaeger, lead developer backend</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore corrupti distinctio velit ratione quas sequi vitae.
              Labore, beatae quaerat voluptatum quidem asperiores sequi fugit voluptate laborum!
              Nesciunt nulla voluptatem porro.
            </p>
          </div>
        </div>
        <div className={classes.people__infos}>
          <img src={Thibaud} alt="" className={classes.people__image} />
          <div className={classes.people__introduction}>
            <p>Voici Yannick Le Cossec, Scrum Master et développeur frontend</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore corrupti distinctio velit ratione quas sequi vitae.
              Labore, beatae quaerat voluptatum quidem asperiores sequi fugit voluptate laborum!
              Nesciunt nulla voluptatem porro.
            </p>
          </div>
        </div>
        <div className={classes.people__infos}>
          <img src={Thibaud} alt="" className={classes.people__image} />
          <div className={classes.people__introduction}>
            <p>Voici Jérôme Aspar, git master et développeur frontend</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore corrupti distinctio velit ratione quas sequi vitae.
              Labore, beatae quaerat voluptatum quidem asperiores sequi fugit voluptate laborum!
              Nesciunt nulla voluptatem porro.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.project}>
        <p>
          La fracture entre le monde agricole et le reste des citoyens est une problématique de plus
          en plus traitée dans les médias au cours des dernières années.
          Différentes solutions, telles que les circuits courts et de proximité ou des vidéos sur
          YouTube postées par des agriculteurs, tentent de mieux faire connaître ce
          domaine aux citoyens tout en les rapprochant. Cette fracture est devenue d’autant plus
          visible qu’elle a été exacerbée par les récents débats sur les pesticides ou les
          conditions d’hygiène dans certains élevages.
          S’il est important que les citoyens se saisissent de ces sujets de société, leur
          méconnaissance des enjeux auxquels les agriculteurs font face peut être un frein pour se
          forger un avis le plus objectif possible sur ces sujets.
        </p>
        <p>
          Le projet Agrilien vise à renforcer le lien entre les agriculteurs et les autres citoyens,
          désireux d’en apprendre davantage sur les pratiques agricoles dans notre pays.
          Et pour ce faire, qu’y a-t-il de mieux que d’observer ces pratiques de ses propres yeux,
          expliquées par ceux qui les mettent en œuvre ? Ainsi, le projet Agrilien vise à créer
          une plateforme de réservation en ligne de nuitées chez les agriculteurs.
          Plus que de simples gîtes,
          il propose l’accès à des exploitations agricoles afin de permettre à
          chacun de découvrir la vie des agriculteurs, leurs métiers et leurs contraintes.
          Il s’adresse à toute personne désireuse de passer des vacances à la campagne
          de façon ludique, en découvrant le monde de l’agriculture.
        </p>
        <p>
          Le site doit permettre aux visiteurs de rechercher un hébergement chez un agriculteur
          selon plusieurs critères lui permettant de découvrir plusieurs facettes du monde agricole
          (différentes productions, différents modes de production). En se connectant, il doit
          pouvoir réserver des séjours chez des agriculteurs.
        </p>
        <p>
          De leur côté, les agriculteurs sont invités à l’inscription à saisir la ferme dans
          laquelle ils souhaitent accueillir du public ainsi que toutes les informations la
          concernant et qui aideront les vacanciers à choisir leur prochaine destination.
          Ils peuvent en plus consulter les réservations qui sont réalisées dans leur ferme.
        </p>
        <p>
          Grâce à Agrilien, les vacanciers peuvent découvrir le monde agricole en bénéficiant
          de moments privilégiés avec leur hôte agriculteur, qui ne manquera pas de leur
          faire découvrir leur métier. En réservant des nuits dans plusieurs fermes,
          les vacanciers pourront petit à petit se faire une meilleure idée du travail
          de ceux qui les nourrissent ainsi qu’une meilleure compréhension des enjeux
          d’un secteur trop méconnu mais essentiel.
        </p>
      </div>
    </main>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutUs);
