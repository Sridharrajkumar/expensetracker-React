import { render, screen } from "@testing-library/react"
import ENav from "./ENav"

describe('Navbar', () => {

    test('navbar testing', () => {

        render(<ENav />);
    
        const present = screen.getByText('Expense Tracker', { exact: true });
        expect(present).toBeInTheDocument();
    })

    test('navbar Home', () => {
        render(<ENav />);
        const home = screen.getByText('home', { exact: false });
        expect(home).toBeInTheDocument();

        
    })
    
})


