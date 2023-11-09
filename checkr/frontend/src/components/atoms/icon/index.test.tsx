import { screen, render} from '@testing-library/react'
import Icon from '.'
import Account from '../../../../public/assests/images/Account.svg'
import React from "react"

test("Should render AccountIcon", () => {
  render(<Icon />);
  const imageElement = screen.getByTestId("image-element");
  expect(imageElement).toBeInTheDocument();
});
