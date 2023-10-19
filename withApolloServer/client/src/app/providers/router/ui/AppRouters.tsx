import {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfigs} from '../model/routeConfig';
import {AppRoutesProps} from '@/shared/types/router';

const AppRouters = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfigs).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouters);