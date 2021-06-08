import React, { useEffect, useState } from 'react';
import { verifyApi } from '../../api';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import CreateBlog from '../CreateBlog/CreateBlog';
import BlogDetail from '../BlogDetail/BlogDetail';
import BlogUpdate from '../BlogUpdate/BlogUpdate';

const DashboardPage = () => {
  const [isloggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
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

  if (isLoading) return <h1>Loading</h1>;
  if (!isloggedIn) return <Redirect to="/"></Redirect>;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/dashboard/create" component={CreateBlog}></Route>
        <Route exact path="/dashboard/update/:id" component={BlogUpdate}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default DashboardPage;
