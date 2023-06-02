import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the container background should be green', () => {
    render(<App />);
    const backgroundContainer = screen.getByTestId("background");
    expect(backgroundContainer.style.backgroundColor).toBe('green');
   });
   
test('renders toggle color button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Toggle Color/i);
    expect(buttonElement).toBeInTheDocument();
   });

   test('the container background color changes on click', () => {
    render(<App />);
    const inputElement = screen.getByTestId("input");
    const backgroundContainer = screen.getByTestId("background");
    const buttonElement = screen.getByTestId("button");
  
    fireEvent.change(inputElement, { target: { value: 'red' } });
    fireEvent.click(buttonElement);
  
    expect(inputElement.value).toBe('red');
    expect(backgroundContainer).toHaveStyle('background-color: red');
  });