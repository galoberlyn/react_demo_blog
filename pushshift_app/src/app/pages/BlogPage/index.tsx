/**
 *
 * BlogPage
 *
 */
import { Loading } from 'app/components/Loading/Loading';
import * as React from 'react';
import { BlogPageContainer } from '../../components/Blog/BlogPageContainer';
import { useBlogs } from './useBlogs';

interface Props {}

export function BlogPage(props: Props) {

  const { blogs, fetchBlogs, loading } = useBlogs();

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Loading active={loading} />
      <BlogPageContainer posts={blogs} />
    </>
  );
}
