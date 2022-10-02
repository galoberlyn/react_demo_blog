export const JwstDataTransformer = (pushShiftResponse: any[]) => {

  const insertData = [];
  
  pushShiftResponse.forEach(resp => {
    const { full_link , title, score, upvote_ratio, id, thumbnail } = resp;
    insertData.push({
      ps_id: id,
      link: full_link,
      text: title,
      score,
      upvote_ratio,
      image: thumbnail
    })
  });

  return insertData;
}