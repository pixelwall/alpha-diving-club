import Head from 'next/head'
import { useEffect, useState, useContext, createContext, ReactNode } from 'react'
import scriptLoader from 'react-async-script-loader'

const URL = 'https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.js'
const API_KEY = ''

export const SnipcartHead = () => (
  <Head>
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.css" />
  </Head>
)

export const SnipcartWrapper = () => (
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key={API_KEY}
    style={{ zIndex: 9999 }}
    hidden
  />
)

const Snipcart = scriptLoader([URL])(() => (
  <div style={{ position: 'fixed', zIndex: 9999 }}>
    <SnipcartHead />
    <SnipcartWrapper />
  </div>
))

export const snipcartContext = createContext<{
  cartQty: number
}>({
  cartQty: 0,
})
export const useSnipcartContext = () => useContext(snipcartContext)

export const SnipcartContext = ({ children }: { children?: ReactNode }) => {
  const [cartQty, setCartQty] = useState(0)
  useEffect(() => {
    let unsubscribe: () => void
    document.addEventListener('snipcart.ready', () => {
      // @ts-ignore
      window.Snipcart.store.subscribe(() => {
        // @ts-ignore
        const total = window.Snipcart.store.getState().cart.items.count
        setCartQty(total)
      })
    })
    return unsubscribe
  }, [])
  return (
    <snipcartContext.Provider value={{ cartQty }}>
      <>
        <Snipcart />
        {children}
      </>
    </snipcartContext.Provider>
  )
}

export default Snipcart
