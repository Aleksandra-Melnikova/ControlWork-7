import './App.css';
import MenuItem from "./components/MenuItem/MenuItem.tsx";
import food from './assets/food.png';
import drink from './assets/drink.png';


type MenuItemType = {
    title: string;
    price: number;
    image: string;
}

const App = () => {
    const MenuElements: MenuItemType[] = [
        {title: 'Hamburger', price: 80, image: food},
        {title: 'Coffee', price: 70, image: drink},
        {title: 'Cheeseburger', price: 90, image: food},
        {title: 'Tea', price: 50, image: drink},
        {title: 'Fries', price: 45, image: food},
        {title: 'Cola', price: 40, image: drink},

    ];
    return (
        <>
            <div className='right-block'>
                <h2 className='add-items-title'>Add items</h2>
                <div className='menu-items'>
                    {MenuElements.map((element) =>
                        <MenuItem
                            key={element.title}
                            title={element.title}
                            image={element.image}
                            price={element.price}/>)}
                </div>
            </div>
        </>
    );
}

export default App
