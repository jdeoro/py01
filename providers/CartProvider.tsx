import React, { Children, createContext } from 'react'

const CartProvider = ({children} : any) => {

  const cartContext = createContext({})
  
  return (
    <cartContext.Provider value={{ item : [] , onAddItem: () => {}} }>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider