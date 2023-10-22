import { render, screen } from "@testing-library/react"
import Store from "./Store"

describe('store', () => {

    test('store testing', () => {
    
    render(<Store />);

    const present = screen.getByText('welcome', { exact: false });
    expect(present).toBeInTheDocument();
})
    
})

