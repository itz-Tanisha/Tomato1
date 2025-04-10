// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { AppDownload } from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
        <FoodDisplay category={category} />
        <AppDownload category={category} />
    </div>
  )
}

export default Home