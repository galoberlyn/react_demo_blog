import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Link, Typography } from '@mui/material';
import { Favorite, Check, Delete } from '@mui/icons-material';
import { pageCardStyles } from './pageCard.styles';
import { LongTextWrapper } from '../LongTextWrapper/LongTextWrapper';

type PageCardTypes = {
  title: string;
  description: string;
  image: string;
  altImage: string;
  ps_id: string;
  isPostInFavorite: (psId: string) => boolean;
  handleFavorite?: () => void;
  isFavorites?: boolean;
  link?: string;
}

export const PageCard: React.FC<PageCardTypes> = ({
  title,
  description,
  image,
  altImage,
  link,
  ps_id,
  handleFavorite,
  isPostInFavorite,
  isFavorites
}) => {

  const imageUrl = image.includes('http') ? image : 'https://picsum.photos/200/300';

  return (
    <Card sx={pageCardStyles.root}>
      <CardHeader title={<LongTextWrapper text={title} />}/>
      <Link
        href={link}
        target="_blank"
        rel="noopener"
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl} 
          alt={altImage}
        />
      </Link>
      <CardContent>
        <Typography color="text-secondary">
          {description}
        </Typography>
      </CardContent>
      {!isFavorites && (
        <CardActions disableSpacing>
          <IconButton onClick={handleFavorite}>
          { isPostInFavorite(ps_id) ? (
            <>
              <Check />
              <small>Added</small>
            </>
          ) : (
            <>
              <Favorite /> 
              <small>Add to favorites</small>
            </>
          )}
          </IconButton>
        </CardActions>
      )}
      {isFavorites && (
        <CardActions disableSpacing>
          <IconButton onClick={handleFavorite}>
            <>
              <Delete />
              <small>Remove</small>
            </>
          </IconButton>
        </CardActions>
      )}
    </Card>
  )

}

