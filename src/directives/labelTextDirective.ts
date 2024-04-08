import { capitalizeAndSpaceText } from "../utils/capitalizeAndSpaceText";

const directive = {
  beforeMount: (element: HTMLElement) => {
    element.innerText = capitalizeAndSpaceText(element.innerText)
  }
}

export default directive