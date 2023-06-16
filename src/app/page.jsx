import Image from 'next/image'
import Navbar from './components/navbar'
import Foot from './components/Foot'
import Vertical from './components/Vertical'
import Body from './components/Body'
import Body1 from './components/Body1'

export default function Home() {
  return (
   <>
   <Navbar/>
   <Body/>
   <Foot/>
   <Body1/>
   <Vertical/>
   </>
  )
}
