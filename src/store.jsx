import { combineReducers, createStore } from 'redux';

import accountReducer from './features/acccounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

// Normal reducer method
// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// store.dispatch({
// 	type: 'account/requestLoan',
// 	payload: { amount: 1000, purpose: 'to buy loud' },
// });

// store.dispatch({ type: 'account/payLoan' });

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(1000, 'to buy a car'));
// store.dispatch(payLoan());

// store.dispatch(createCustomer('Daniel David', '123456789'));
// store.dispatch(updateName('Daniel Imeh David'));
