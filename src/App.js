import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from './components/pages/AddExpensePage';
import EditExpensePage from './components/pages/EditExpensePage';
import ExpenseDashboard from './components/pages/ExpenseDashboardPage';
import HelpPage from './components/pages/HelpPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Navbar from './components/Navbar';
import store from './components/store/store';
import { Provider } from 'react-redux';
import { addExpense } from './components/store/actions/Expense';
import { setTextFilter } from './components/store/actions/filters';

export class App extends Component {
  componentDidMount() {
    // store.dispatch(
    //   addExpense({
    //     title: 'December Rent',
    //     description: 'a rent is more imp',
    //     price: '$100'
    //   })
    // );

    store.dispatch(setTextFilter('january'));
    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
