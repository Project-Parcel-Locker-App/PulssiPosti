import { render, screen } from '@testing-library/react';
import DashboardTable from './table';

describe('DashboardTable Component', () => {
  it('renders table header correctly', () => {
    render(<DashboardTable />);

    expect(screen.getByText('sender')).toBeInTheDocument();
    expect(screen.getByText('recipient')).toBeInTheDocument();
    expect(screen.getByText('delivery date')).toBeInTheDocument();
    expect(screen.getByText('status')).toBeInTheDocument();
    expect(screen.getByText('picked up date')).toBeInTheDocument();
    expect(screen.getByText('parcel info')).toBeInTheDocument();
  });

  it('renders parcels correctly', async () => {
    const mockParcels = [
      {
        sender_id: 'Sender1',
        recipient_id: 'Recipient1',
      },
      {
        sender_id: 'Sender2',
        recipient_id: 'Recipient2',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockParcels),
    });

    render(<DashboardTable />);

    await screen.findByText('Sender1');

    expect(screen.getByText('Sender1')).toBeInTheDocument();
    expect(screen.getByText('Recipient1')).toBeInTheDocument();
  });
});
