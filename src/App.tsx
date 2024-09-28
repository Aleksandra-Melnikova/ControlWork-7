import './App.css';
import MenuItem from "./components/MenuItem/MenuItem.tsx";
import food from './assets/food.png';
import drink from './assets/drink.png';
import {useState} from "react";
import ItemCheck from "./components/itemCheck/itemCheck.tsx";


type MenuItemType = {
    title: string;
    price: number;
    image: string;
}

interface IItem {
    title: string;
    count: number;
    price: number;
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

    const [items, setItems] = useState<IItem[]>([
        {title: 'Hamburger', price: 80, count: 0},
        {title: 'Coffee', price: 70, count: 0},
        {title: 'Cheeseburger', price: 90, count: 0},
        {title: 'Tea', price: 50, count: 0},
        {title: 'Fries', price: 45, count: 0},
        {title: 'Cola', price: 40, count: 0},
    ]);

    const AddMenuItem = (ItemName:string) =>{
        const copyItems = items.map(item => {
            if (item.title === ItemName) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return {...item};
        });
        // const priceToState = ingredientsItem.reduce((acc,item) => {
        //     if(item.title === ingredientName){
        //         acc+= item.cost;}
        //     return acc;
        // },price);
        // setPrice(priceToState);
        setItems(copyItems);
    };

    const deleteItem = (ItemName:string) =>{
        const copyItems = items.map(item => {
            if (item.title === ItemName) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return {...item};
        });
        setItems(copyItems);
    }

    const createArrayForDrawCheck= (items:IItem[]) => {
    const arrayOfItems:IItem[] = [];
    {items.map((item) =>{
        if(item.count > 0){
                arrayOfItems.push(item);
        }
    });
    }
    return arrayOfItems;
};

    let itemList = null;

if (createArrayForDrawCheck(items).length !== 0) {
    itemList = createArrayForDrawCheck(items).map(item =>{
        return (<ItemCheck
            key={item.title+item.count}
            title={item.title}
            count={item.count}
            cost={item.price * item.count}
            onDeleteItem={() => deleteItem(item.title)}
        />);
    });
}

    return (
        <div className="App">
            <div className='block'>
                <h2 className='block-title'>Order details:</h2>
                {itemList === null ? <p className='left-block-text'>Order is empty!<br/>Please add some items!</p>:
                itemList}
            </div>
            <div className='block'>
            <h2 className='block-title'>Add items:</h2>
                <div className='menu-items'>
                    {MenuElements.map((element) =>
                        <MenuItem
                            key={element.title}
                            onClickAdd={()=>AddMenuItem(element.title)}
                            title={element.title}
                            image={element.image}
                            price={element.price}/>)}
                </div>
            </div>
        </div>
    );
}

export default App
