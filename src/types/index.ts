import { ThemeTypings } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

export interface ICard {
    id?:number;
    title:string;
    image:string;
    price:number;
    rare:boolean;
    amount?:number;

}
export interface IApiResponse {
    id:number;
    title:string;
    thumbnail:{
        path:string
    }
    prices:[{
        price:number
    }]
    onClickEvent?:MouseEventHandler
}
export interface ICardContext {
    card: ICard[] | [{}];
    setCard: React.Dispatch<React.SetStateAction<ICard[] | [{}]>>
}
export interface IIncDecButton {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>
}
export interface ILinkButton {
    linkTo: string
    label: string;
    size:ThemeTypings['components']['Button']['sizes']
}
export interface IForm {
    id:string;
    label:string;
    type:string;
    placeholder:string|undefined;
    isDisableEditStatus?:boolean;
    setStateTarget:React.Dispatch<React.SetStateAction<string>>;
}
