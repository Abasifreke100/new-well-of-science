import { clsx } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatTextForReadability(
  text,
  maxLineLength = 80,
  maxParagraphSpacing = 2
) {
  // Split the text into an array of words
  const words = text.split(' ');

  // Initialize variables
  let formattedText = '';
  let currentLine = '';
  let paragraphSpacing = 0;

  // Iterate through the words
  for (const word of words) {
    // Check if adding the current word to the line exceeds the maximum line length
    if ((currentLine + word).length > maxLineLength) {
      // Add the current line to the formatted text and start a new line
      formattedText +=
        currentLine.trim() +
        '<br/><br/>'.repeat(Math.min(paragraphSpacing, maxParagraphSpacing));
      currentLine = '';
      paragraphSpacing = 0;
    }

    // Add the current word to the line
    currentLine += `${word} `;

    // Update paragraph spacing based on punctuation
    if (/[.!?]$/.test(word)) {
      paragraphSpacing = Math.min(paragraphSpacing + 1, maxParagraphSpacing);
    } else {
      paragraphSpacing = 0;
    }
  }

  // Add the last line to the formatted text
  formattedText += currentLine.trim();

  return formattedText;
}