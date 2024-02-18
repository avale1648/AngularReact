import {Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading, Stack} from "@chakra-ui/react";
import React from "react";
import "./styles.css";
interface I_ItemProps{
    id: number;
    name: string;
    description: string;
    price: number;
}
const Item: React.FC<I_ItemProps> = ({id, name, description, price}) => {
    return (
        <>
        <div className = "item-card">
            <Card key={id} className="card">
                <CardHeader className="card-header">
                    <Heading>{name}</Heading>
                </CardHeader>
            </Card>
            <CardBody>
                <Stack>
                    <span>{description}</span>
                    <span>{price} руб.</span>
                </Stack>
            </CardBody>
            <CardFooter className="card-footer">
                <ButtonGroup>
                    <Button>Купить</Button>
                </ButtonGroup>
            </CardFooter>
        </div>
        </>
    );
};
export default Item;