import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useHomepageSlice } from 'app/pages/HomePage/slice/';
import { useDispatch, useSelector } from 'react-redux';
import { homepageActions } from 'app/pages/HomePage/slice/';
import { selectHomepage } from 'app/pages/HomePage/slice/selectors';

export const useLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = useHomepageSlice();
  const { loading } = useSelector(selectHomepage);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHistory = (path: string) => {
    navigate(path);
  }

  const sync = () => {
    dispatch(actions.sync());
  }

  return {
    handleDrawerToggle,
    mobileOpen,
    handleHistory,
    sync,
    loading,
  }

}