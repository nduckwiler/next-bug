import { Terminal } from "./Terminal";

export const TerminalContainer = () => {
  return <>
    <div>Hi from TerminalContainer</div>
    <Terminal ref={(ref) => console.log(ref)}></Terminal>
  </>
}

export default TerminalContainer;

