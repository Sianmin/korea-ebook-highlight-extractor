document.getElementById('copyButton').addEventListener('click', async () => {
  try {
    // Inject content script into the current page
    await chrome.scripting.executeScript({
      target: { tabId: (await getCurrentTab()).id },
      files: ['content.js']
    });
    console.log('Annotations copied to clipboard!');
  } catch (error) {
    console.error('Failed to copy annotations:', error);
  }
});

// Helper function to get the current active tab
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

