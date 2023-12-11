import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './index';

describe('Dashboard component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('renders DashboardHeader and DashboardTable components', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId('dashboard-header')).toBeInTheDocument();
    expect(getByTestId('dashboard-table')).toBeInTheDocument();
  });

  it('renders Navbar and Sidebar components', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId('navbar')).toBeInTheDocument();
    expect(getByTestId('sidebar')).toBeInTheDocument();
  });
});