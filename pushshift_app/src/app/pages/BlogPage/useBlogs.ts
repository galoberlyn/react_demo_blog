import { useDispatch, useSelector } from "react-redux";
import { selectBlog } from "./slice/selectors";
import { useBlogSlice } from "./slice";

export const useBlogs = () => {

  const { blogs, loading } = useSelector(selectBlog);
  const dispatch = useDispatch();
  const { actions} = useBlogSlice();

  const fetchBlogs = () => {
    dispatch(actions.fetchBlogs());
  }

  return {
    blogs,
    fetchBlogs,
    loading,
  }
}