/**
 *
 * FavoritePage
 *
 */
import { BlogPageContainer } from 'app/components/Blog/BlogPageContainer';
import * as React from 'react';
import { useFavorites } from './useFavorites';

export function FavoritePage() {

  const { favorites } = useFavorites();

  console.log(favorites, 'awiw');

  return (
    <BlogPageContainer posts={favorites} isFavorites={true} />
  );
}
