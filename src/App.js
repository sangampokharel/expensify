import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from './components/pages/AddExpensePage';
import EditExpensePage from './components/pages/EditExpensePage';
import ExpenseDashboard from './components/pages/ExpenseDashboardPage';
import HelpPage from './components/pages/HelpPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Navbar from './components/Navbar';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/dashboard' component={ExpenseDashboard} />
          <Route path='/create' component={AddExpensePage} />
          <Route path='/edit/:id' component={EditExpensePage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
