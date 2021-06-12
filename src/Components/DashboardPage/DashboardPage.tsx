import React, { useEffect, useState } from 'react';
import { verifyApi } from '../../api';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import CreateBlog from '../CreateBlog/CreateBlog';
import BlogUpdate from '../BlogUpdate/BlogUpdate';
import ClipLoader from 'react-spinners/ClipLoader';
import './DashboardPage.scss';

const DashboardPage = () => {
  const [isloggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleAuth();
  }, []);

  const handleAuth = async () => {
    setLoading(true);
    const data = await verifyApi();

    if (data.success) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setLoading(false);
  };

  if (loading)
    return (
      <div className="loader">
        <ClipLoader loading={loading} color="#ff005b" size={100} />{' '}
      </div>
    );

  if (!isloggedIn) return <Redirect to="/"></Redirect>;

  return (
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/dashboard/create" component={CreateBlog}></Route>
        <Route exact path="/dashboard/update/:id" component={BlogUpdate}></Route>
      </Switch>
    </div>
  );
};

export default DashboardPage;
