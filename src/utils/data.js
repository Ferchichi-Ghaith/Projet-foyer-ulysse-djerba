import { TfiLayoutWidthDefault } from "react-icons/tfi"
import { TbViewportWide } from "react-icons/tb"
import { FcTreeStructure } from "react-icons/fc"
import { AiOutlineHome } from "react-icons/ai"

export const projectExperience = [
  {
    name: "Surface Total",
    projects: "25000 m²" ,
    icon: TbViewportWide,
    bg: "#286F6C",
  },
  {
    name: "Surface Couvert",
    projects: "8000 m²",
    icon: TfiLayoutWidthDefault,
    bg: "#286F6C",
  },
  {
    name: "Départements",
    projects: 4,
    icon: AiOutlineHome,
    bg: "#286F6C",
  },

];

export const WhatDoIHelp = [
"Le foyer universitaire Ulysse Djerba est un organisme public situé a Midoun  à proximité de L'ISET Djerba . Pour bénéficier de l'hébergement , il est indispensable de faire une demende en ligne sur le site web ( www.ouus.rnu.tn ) . En outre , le foyer encourage ses étudiants à s'engager dans des activités culturelles , Scientifiques et Sportives au sien des clubs à fin de participer aux événements et Compétitions."
];

export const workExp = [
  {
    place: "Administartion",
    tenure: "Inscription / affaires estudiantines",
    role: "Le département inclue les bureaux Suivant :",
    detail:" Directeur , Sous directeur (Hébergement) , Finance , Maintenance , Bureau d'ordre , Magsin"
       
},
  {
    place: "Hébergement",
    tenure: "Suite pour les garçons et un autre pour les filles",
    role: "Architecture de chaque suite ",
    detail:
       "Chaque suite se compose de nombre  de blocs . à chaque bloc on a 8 chambres , une cuisine et un bloc sanitaire qui contient 6 vaques , 3 WC  . en tout il y a 17 blocs pour les filles  et  18 pour les garçons "
  },
  {
    place: "Espaces D'activites",
    tenure: "Culturelle / Sportive / Scientifique",
    role: "Les espaces didiés aux activités:",
    detail:
       " Salle de sport polyvalente (Box , Musculation , Fitnesse ,Ping-pong ... )  ,  Salle des arts (musique , peinture , ...) et une Salle de formation et réunion "
  },
  {
    place: "Service Psychologue",
    tenure: "Encadreur",
    role: " Role :",
    detail:
       "Vous aide à comprendre et à gérer leurs émotions et leurs comportements. Elle  fournie des conseils et des interventions thérapeutiques pour aider les gens à surmonter leurs difficultés et à atteindre leurs objectifs. "
  },
];



export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
