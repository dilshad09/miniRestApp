import './Restaurant.css'
import Menu from './menuApi'
import { useState } from 'react'
import { MenuCard } from './menuCard'
import { Navbar } from './Navbar'

const uniqueList =[ ...new Set (Menu.map((elem)=>{
  return elem.category;
})),"All"]

export const Restaurant = ()=>{
    const [menuData, setMenuData] = useState(Menu)
    const [navList, setNavList] = useState(uniqueList)
    const filterItem = (category)=>{
         if(category === "All") {
           return setMenuData(Menu)
         }
         const updatedItem = Menu.filter((currItem)=>{
           return currItem.category == category;
         })
         setMenuData(updatedItem)
    }
     
    return <>
      <Navbar  filterItem={filterItem} navList={navList}/>
      <MenuCard  menuData={menuData}/>
    </>
}