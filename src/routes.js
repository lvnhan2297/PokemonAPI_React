import { lazy } from 'react';

const PokemonsContainer = lazy(() => import('./containers/PokemonsContainer'));
const PokemonColorContainer = lazy(() => import('./containers/PokemonColorContainer'));
const DetailPokemonContainer = lazy(() => import('./containers/DetailPokemonContainer'));
const NotFoundContainer = lazy(() => import('./containers/NotFoundContainer'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: PokemonsContainer
  },
  {
    path: '/:queryPoke/:id',
    exact: true,
    component: PokemonColorContainer
  },
  {
    path: '/pokemon/:id/:name',
    exact: true,
    component: DetailPokemonContainer
  },
  {
    path: '*',
    component: NotFoundContainer
  }
]