import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App'
test("test1", () => {
  render(<App/>)  
  const element=screen.getByRole("button",{name:/Save/i})
  const itemid=screen.getByTestId("itemid")
  const itemname=screen.getByTestId("itemname")
  const price=screen.getByTestId("itemprice")
  userEvent.type(itemid,"23")
  userEvent.type(itemname,"Black Coffee")
  userEvent.type(price,"300")
  userEvent.click(element)
  const msg=screen.getByTestId("statusmessage")

  expect(msg).toBeInTheDocument()


})