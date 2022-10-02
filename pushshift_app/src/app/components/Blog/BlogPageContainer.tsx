import React from 'react';
import { Grid } from '@mui/material';
import { PageCard } from 'app/components/PageCards/PageCard';
import { blogPageStyles } from './blogPage.styles';
import { BlogData } from '../../pages/BlogPage/slice/types';
import { useFavorites } from 'app/pages/FavoritePage/useFavorites';

type BlogPageContainerTypes = {
  posts: BlogData[];
  isFavorites?: boolean;
}

export const BlogPageContainer: React.FC<BlogPageContainerTypes> = ({ posts, isFavorites }) => {

  const { handleFavorite, isPostInFavorite } = useFavorites();

  return (
    <Grid container spacing={2} sx={blogPageStyles.root}>
      {posts.map(post => {
        if (isFavorites && !isPostInFavorite(post.ps_id)) {
          
          return null;
        }
  
        return (
          <Grid item md={3} xs={12} sm={4}>
            <PageCard
              title={post.text}
              image={post.image}
              link={post.link}
              ps_id={post.ps_id}
              isFavorites={isFavorites}
              handleFavorite={() => handleFavorite(post)}
              isPostInFavorite={isPostInFavorite}
              description={`Upvote ratio: ${post.upvote_ratio} | Score: ${post.score}`}
              altImage='an image from reddit'
            />
          </Grid>
        )
      })}
    </Grid>
  )
}