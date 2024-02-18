import './App.css'
import ItemPages from './components/item/ItemPages';
import ItemType from './components/item/ItemType'
function App() {
  const items: ItemType[] =[
    {
      id: 1,
      name: "К. Маркс, Капитал",
      description: "Капитал, К.Маркс",
      price: 500
    },
    {
      id: 2,
      name: "Ф. Энгельс, Принципы коммунизма",
      description: "Принципы коммунизма, Ф. Энгельс",
      price: 250
    },
    {
      id: 3,
      name: "В.И. Ленин, Государство и революция",
      description: "Государство и революция, В.И. Ленин",
      price: 500
    }
  ];
  return(
    <>
    <ItemPages items={items}/>
    </>
  )
}
export default App
