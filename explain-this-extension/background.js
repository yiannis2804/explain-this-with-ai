chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "explainSelection",
    title: "💡 Explain this with AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "explainSelection") {
    const selectedText = info.selectionText;

    fetch("https://explain-this-backend.onrender.com/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: selectedText })
    })
    .then(response => response.json())
    .then(data => {
      if (data.explanation) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (msg) => alert("🧠 Explanation:\n\n" + msg),
          args: [data.explanation]
        });
      } else {
        throw new Error(data.error || "Unknown error from API");
      }
    })
    .catch(err => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (errMsg) => alert("⚠️ Failed to explain: " + errMsg),
        args: [err.message]
      });
    });
  }
});
