import {InjectionKey} from "vue"
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { Item } from '../interface';

function updateLocalStorage(cart:any) {
  localStorage.setItem('cart', JSON.stringify(cart))
}


export interface State {
  cart: Item[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    cart: []
  },

  getters: {
    productQuantity(state) {
      return (product: any) => {
        const item = state.cart.find(i => i.id === product.id) //カートの中にクリック指定したproductをitemに入れる
        if (item) return item.quantity
        else return null
      }
    },
  },
    mutations: {
      addToCart(state, product) {
        const item = state.cart.find(i => i.id === product.id)
      if (item) {
        item.quantity++
        //指定したitemがカートの中にあったら+1
      } else {
        state.cart.push({ ...product, quantity: 1 })
        //なかったらquantityに1を入れる
      }
      updateLocalStorage(state.cart)
      },
  },
    actions: {
  },
  modules: {
  }
    
})

export function useStore(){
    return baseUseStore(key)
}

