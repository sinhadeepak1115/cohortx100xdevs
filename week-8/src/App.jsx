import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <>
      <div className='grid grid-3'>
        <RevenueCard title={"Amount Pending"} amount={"894.3425.345"} orderCount={13}>
        </RevenueCard></div>
    </>

  )
} export default App
