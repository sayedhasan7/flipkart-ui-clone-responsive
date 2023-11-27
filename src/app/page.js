import Section1 from './components/homecomponents/Section1'
import Section2 from './components/homecomponents/Section2'
import Section3 from './components/homecomponents/Section3'
import Navbar from './components/homecomponents/navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main  bg-gray-200">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />
      </div>



    </>
  )
}
