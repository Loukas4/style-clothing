import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 24px;
    height: 24px;
`

export const CartIconContainer = styled.div`
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemCount = styled.span`
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    bottom: 10px;
    top: 10px;
`
