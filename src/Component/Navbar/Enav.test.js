import { render, screen } from "@testing-library/react"
import ENav from './ENav'


test('Enav test', () => {
    
    render(<ENav />);

    const present = screen.getByText('expense tracker', { exact: false });
    expect(present).toBeInTheDocument();
})
