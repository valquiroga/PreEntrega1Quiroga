import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"
import { Link, NavLink, Navigate } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="NavBar">
   
        <h1 onClick={() => navigate('/')}>Agoriuk</h1>
        <div>
            <NavLink to='/category/top' className={({isActive})=>isActive ? '': ''}>Tops</NavLink>
            <NavLink to={`/category/bottom`} className={({isActive})=>isActive ? '':''}>Bottoms</NavLink>
            <NavLink to={`/category/accesory`} className={({isActive})=>isActive ? '':''}>Accesories</NavLink>
        {/* <Button 
        label= {'Tops'}  />
        <Button 
        label= {'Bottoms'}  />
        <Button 
        label= {'Accesories'}  /> */}

        <div>
        <CartWidget />
        </div>
</div>


        </nav>
    )
}

export default NavBar