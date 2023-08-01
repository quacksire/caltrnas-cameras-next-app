import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function urlToDisplay(input: string) {
  let output = input
  output = String(String(decodeURI(output)).charAt(0).toUpperCase() + String(decodeURI(output)).slice(1))

  if ((output.indexOf('-') > 0) && !(output.includes('SR-') || output.includes('I-') || output.includes('US-'))) {

    /// replace '-' in the string with a space, and capitalize the letter next to a space
    output = output.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  }

    return output

}
