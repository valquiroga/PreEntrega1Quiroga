import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"
const NavBar = () => {
    return (
        <nav>
        <h1>Agoriuk</h1>
        <div>
        <Button 
        label= {'Tops'}  />
        <Button 
        label= {'Bottoms'}  />
        <Button 
        label= {'Accesories'}  />
        <CartWidget />
        
</div>


        </nav>
    )
}

export default NavBar