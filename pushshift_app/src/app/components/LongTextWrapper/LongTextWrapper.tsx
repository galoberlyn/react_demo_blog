import { Button, Typography } from '@mui/material';
import React from 'react';

type LongTextWrapperType = {
  text: string;
}
export const LongTextWrapper: React.FC<LongTextWrapperType> = ({ text }) => {

  const [showAll, setShowAll] = React.useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  
  const limit = 15;
  const toShow = text.substring(0, limit);

  if (text.length <= limit) {
    return (
      <Typography>{text}</Typography>
    )
  }

  if (showAll) {
    return (
      <Typography>
        {text}
        <Button onClick={showLess}>
          Read Less
        </Button>
      </Typography>
    )
  }

  return (
    <Typography>
      {toShow}...
      <Button onClick={showMore}>Read more</Button>
    </Typography>
  )
}