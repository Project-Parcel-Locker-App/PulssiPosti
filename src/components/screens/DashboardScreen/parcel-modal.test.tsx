// src/ParcelModal.test.tsx
import { render, screen } from '@testing-library/react';
import ParcelModal from './parcel-modal';

describe('ParcelModal Component', () => {
  it('renders modal title correctly', () => {
    const mockParcel = {
      special_instructions: 'Test Special Instructions',
      parcel_weight: 'Test Parcel Weight',
      parcel_size: 'Test Parcel Size',
    };

    render(<ParcelModal open={true} onCloseModal={() => {}} parcel={mockParcel} />);

    // Check if the modal title is rendered with the correct text
    const titleElement = screen.getByText(/Parcel Details/i);
    expect(titleElement).toBeInTheDocument();
  });
});
