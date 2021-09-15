import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
describe("Run App.test", () => {
  test("Renders app and checks for presence of Title", () => {
    render(<App />);
    const linkElement = screen.getByText("Title");
    expect(linkElement).toBeInTheDocument();
  });
  test("Check for label", () => {
    render(<App />);
    const labelElement = screen.getByText("Name");
    expect(labelElement).toBeInTheDocument();
  });

  test("should check for button disabled ", () => {
    render(<App />);
    const buttonStatus = screen.getByRole("button");
    expect(buttonStatus).toBeDisabled();
  });

  test("should check for button activate on user-input", () => {
    render(<App />);
    const name= screen.getByLabelText(/name/i, {exact: false});
    console.log(name)
    const pass= screen.getByLabelText(/password/i, {exact: false});
    console.log(pass)
    userEvent.type(name, "hi");
    userEvent.type(pass, "hi");
    // userEvent.type(screen.getByT("passwordw"), "hi");
    const buttonStatus = screen.getByRole("button");
    expect(buttonStatus).not.toBeDisabled();
  });

  // test('should check filter', () => {
  //   render(<App/>);
  //   // userEvent.("filterDropDown", 50);
  //   const filteredUserList = screen.findAllByRole("UserForm")
  //   expect(filteredUserList).toHaveReturnedTimes(1);
  // })
  

});
