chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Execute the content script on the active tab
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
    console.log('Annotations copied to clipboard!');
  } catch (error) {
    console.error('Failed to copy annotations:', error);
  }
});

