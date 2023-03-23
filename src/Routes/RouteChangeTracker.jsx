import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';   
  
const RouteChangeTracker = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    const unlisten = navigate((location) => {
      ReactGA4.send({
        hitType: 'pageview',
        path: location.pathname,
        location: location.pathname,
        title: location.pathname,
      });
    });
    return unlisten;
  }, [navigate]);

  return <div></div>;
};

export default RouteChangeTracker;