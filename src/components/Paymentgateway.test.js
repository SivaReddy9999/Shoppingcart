import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Paymentgateway from './Paymentgateway'

describe('should display Payment gateway',() => {
    test('should display Payment gateway', () => {
        const myproducts = [
            {
                productid:3,
                productName:"Washing machine",
                price:12000,
                count:0
            }
        ]
        render(<Paymentgateway myproducts={myproducts}/>);
        expect(screen.getByText(/Payment Gateway/)).toBeInTheDocument();
    })
})