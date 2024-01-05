import { combineReducers } from 'redux'

import products from './products'
import user from './user'
import cart from './cart'

export default combineReducers({ products, user,cart })