import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardComponent from '../components/Card';

describe('CardComponent', () => {
  test('renders card with correct content', () => {
    render(<CardComponent />);

    // Check if Card Title and example text are present
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(
      screen.getByText(
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      )
    ).toBeInTheDocument();

    // Check if the "Go somewhere" button is present
    expect(screen.getByRole('button', { name: /go somewhere/i })).toBeInTheDocument();
  });

  test('button click triggers action', () => {
    const mockAction = jest.fn();

    render(<CardComponent onClick={mockAction} />);

    // Trigger a click on the "Go somewhere" button
    userEvent.click(screen.getByRole('button', { name: /go somewhere/i }));

    // Check if the mock action was called
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
