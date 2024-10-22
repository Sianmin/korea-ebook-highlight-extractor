(() => {
  // Select all <li> elements with id starting with "annotation"
  const annotationElements = document.querySelectorAll('li[id^="annotation"]');

  // Extract the text content and format it into a Markdown list
  const markdownList = Array.from(annotationElements)
    .map(element => `- ${element.textContent.trim()}`)
    .join('\n');

  // Copy the Markdown list to the clipboard
  navigator.clipboard.writeText(markdownList).then(() => {
    console.log('Markdown list copied successfully!');
  }).catch(err => {
    console.error('Failed to copy text:', err);
  });
})();

