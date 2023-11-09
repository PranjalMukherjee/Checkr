import React from 'react';
import { render } from '@testing-library/react';
import { AuthenticationGuard } from '.';

jest.mock('@auth0/auth0-react', () => ({
  withAuthenticationRequired: jest.fn((component) => component),
}));

const MyComponent = () => <div>My Component</div>;

describe('AuthenticationGuard', () => {
  it('should render the component without any issues', () => {
    const { getByText } = render(
      <AuthenticationGuard component={MyComponent} />
    );

    expect(getByText('My Component')).toBeInTheDocument();
  });
});