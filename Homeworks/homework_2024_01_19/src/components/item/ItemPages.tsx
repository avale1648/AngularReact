import React, { useState } from "react";
import Item from "./Item.tsx";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ItemType from "./ItemType.ts";
import './styles.css';
interface I_ItemPageProps {
    items: ItemType[]
}
const ItemPages: React.FC<I_ItemPageProps> = ({ items: arrayProducts }) => {
    const [page, setPage] = useState<number>(0);
    const changePage = (page: number) => {
        setPage(page);
    };
    const itemsOnPage: number = 3;
    const pagesCount: number = Math.ceil(arrayProducts.length / itemsOnPage);
    const buttons: JSX.Element[] = [];
    for (let i = 0; i < pagesCount; i++) {
        buttons.push(
            <Button key={i} onClick={() => changePage(i)}>
                {i + 1}
            </Button>
        );
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {arrayProducts.slice(page * itemsOnPage, (page + 1) * itemsOnPage).map(p => (
                    <Item key={p.id} id={p.id} name={p.name} description={p.description} price={p.price} />
                ))}
            </div>
            <div className="button-group">
                <ButtonGroup>
                    {buttons}
                </ButtonGroup>
            </div>
        </div>
    );
};
export default ItemPages;