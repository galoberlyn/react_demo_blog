import { BlogData } from "../BlogPage/slice/types";
import { useState } from "react";

export const useFavorites = () => {

  const local: any = localStorage.getItem('favorites');
  const [favorites, setFavorites] = useState<BlogData[]>(JSON.parse(local) || []);

  const handleFavorite = (post: BlogData) => {
    if (favorites.length) {
      const temp: BlogData[] = JSON.parse(JSON.stringify(favorites));
      let isRemoved = false;
      temp.forEach((t, i) => {
        if (t.ps_id === post.ps_id) {
          isRemoved = true;
          temp.splice(i, 1);
        }
      })
      if (!isRemoved) {
        temp.push(post);
      } 
      setFavorites(temp);
      localStorage.setItem('favorites', JSON.stringify(temp));
    } else {
      setFavorites([post]);
      localStorage.setItem('favorites', JSON.stringify([post]));
    }
  }

  const isPostInFavorite = (psId: string) => {
    const filtered = favorites.filter(favorite => favorite.ps_id === psId);
    if (filtered.length) {

      return true;
    }
    
    return false;
  }

  return {
    favorites,
    handleFavorite,
    isPostInFavorite,
  }
}