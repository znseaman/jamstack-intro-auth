import React, {useEffect} from 'react';
import {Router, navigate} from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteSecret from '../components/route-secret';
import RouteBase from '../components/route-base';
import RouteLogin from '../components/route-login';

const Dashboard = ({location}) => {
  useEffect(()=> {
    if (location.pathname.match(/^\/dashboard\/?$/)){
      navigate('/dashboard/login', {replace: true});
    }
  }, []);

  return (
    <Layout>
      <Profile></Profile>
      <Router>
        <RouteBase path="/dashboard/base"></RouteBase>
        <RouteSecret path="/dashboard/secret"></RouteSecret>
        <RouteLogin path="/dashboard/login"></RouteLogin>
      </Router>
      <p>TODO: create a dashboard</p>
    </Layout>
  );
};

export default Dashboard;
