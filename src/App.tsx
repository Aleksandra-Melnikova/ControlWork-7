import './App.css';
import food from './assets/food.png';
import drink from './assets/drink.png';
import {useState} from 'react';
import ItemCheck from './components/itemCheck/itemCheck.tsx';
import TotalPrice from './components/TotalPrice/TotalPrice.tsx';
import {MenuItemType} from './types';
import MenuItems from './components/MenuItems/MenuItems.tsx';


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
        {title: 'Hamburger', price: 0, count: 0},
        {title: 'Coffee', price: 0, count: 0},
        {title: 'Cheeseburger', price: 0, count: 0},
        {title: 'Tea', price: 0, count: 0},
        {title: 'Fries', price: 0, count: 0},
        {title: 'Cola', price: 0, count: 0},
    ]);

    const [totalPrice, setTotalPrice] = useState<number>(0);

    const AddMenuItem = (itemName:string) =>{
        const index = MenuElements.findIndex(task => task.title === itemName);
        const copyItems = items.map(item => {
            if (item.title === itemName) {
                return {
                    ...item,
                    count: item.count + 1,
                    price:item.price + MenuElements[index].price,
                };
            }
            return {...item};
        });
        const priceToState = items.reduce((acc,item) => {
            if(item.title === itemName){
                acc+= MenuElements[index].price;}
            return acc;
        },totalPrice);
        setTotalPrice(priceToState);
        setItems(copyItems);
    };

    const deleteItem = (itemName:string) =>{
        const index = MenuElements.findIndex(task => task.title === itemName);
        const copyItems = items.map(item => {
            if (item.title === itemName) {
                return {
                    ...item,
                    count: item.count - 1,
                    price: item.price - MenuElements[index].price,
                };
            }
            return {...item};
        });
        const priceToState = items.reduce((acc,item) => {
            if(item.title === itemName){
                acc-= MenuElements[index].price;}
            return acc;
        },totalPrice);
        setTotalPrice(priceToState);
        setItems(copyItems);
    };

    const createArrayForDrawCheck= (items:IItem[]) => {
        const arrayOfItems:IItem[] = [];
        {items.map((item) =>{
            if(item.count > 0){
                arrayOfItems.push(item);
            }
        });}
        return arrayOfItems;
    };

    let itemList = null;

    if (createArrayForDrawCheck(items).length !== 0) {
        itemList = createArrayForDrawCheck(items).map(item =>{
            return (<ItemCheck
                key={item.title+item.count}
                title={item.title}
                count={item.count}
                cost={item.price}
                onDeleteItem={() => deleteItem(item.title)}/>);});
    }

    return (
        <div className="App">
            <div className='block'>
                <h2 className='block-title'>Order details:</h2>
                {itemList === null ? <p className='left-block-text'>Order is empty!<br/>Please add some items!</p>:
                itemList}
                {itemList !== null ? <div className='order-bottom'><hr/><TotalPrice totalPrice={totalPrice}/></div>:null}
            </div>
            <div className='block'>
            <h2 className='block-title'>Add items:</h2>
              <MenuItems ElementsArray={MenuElements} AddMenuItem={AddMenuItem}/>
            </div>
        </div>
    );
};

export default App;
