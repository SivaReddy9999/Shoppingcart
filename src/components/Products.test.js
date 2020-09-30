import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Products from './Products'

describe('should display Payment gateway',() => {
    test('should display Payment gateway', () => {
        const myproducts = [
            {
                productid:3,
                productName:"TV",
                price:12000,
                count:0
            }
        ]
        render(<Products myproducts={myproducts}/>);
        expect(screen.getByText(/TV/)).toBeInTheDocument();
    })
})