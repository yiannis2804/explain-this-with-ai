
# Explain This with AI

**Explain This with AI** is a Chrome Extension that allows users to highlight any text on a webpage, right-click, and receive a simplified explanation powered by OpenAI's GPT model. The backend is a Flask server hosted on Render, and the frontend is a lightweight Chrome extension.

---

##  Features

-  Chrome Extension for contextual interaction
-  Right-click context menu to trigger explanation
-  Backend powered by OpenAI GPT (via API)
-  Flask server deployed to Render
-  API key secured via environment variable

---

##  Project Structure

```
explain-this-with-ai/
├── explain-this-backend/         # Flask API Server
│   ├── app.py
│   └── requirements.txt
├── explain-this-extension/       # Chrome Extension Files
│   ├── background.js
│   ├── icon.png
│   └── manifest.json
├── README.md                     # This file
└── Explain_This_with_AI_Project_Report.pdf
```

---

##  Tech Stack

- **Frontend**: JavaScript (Chrome Extension APIs)
- **Backend**: Python (Flask)
- **API**: OpenAI GPT-3.5 Turbo
- **Deployment**: Render
- **Version Control**: Git + GitHub

---

##  How It Works

1. **User Action**: Highlight any text in Chrome and right-click → "Explain This".
2. **Chrome Extension**: Sends the selected text as a POST request to the Flask backend.
3. **Flask Backend**: Receives the request and sends a prompt to OpenAI's API.
4. **Response**: The simplified explanation is returned and displayed to the user.

---

##  Installation

###  Chrome Extension
1. Go to `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `explain-this-extension/` folder

###  Flask Backend
1. Create a `.env` or use your hosting environment to set your OpenAI API key:
   ```bash
   export OPENAI_API_KEY="sk-..."
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server locally:
   ```bash
   python app.py
   ```

---

##  Example Output

Selected Text:
> *"Quantum entanglement is a physical phenomenon that occurs when pairs or groups of particles are generated..."*

Explanation Returned:
> *"Quantum entanglement means that two particles stay connected, even when far apart. Changing one affects the other instantly."*

---

##  Report

A full project report with screenshots, explanations, and setup steps is available in:
**`Explain_This_with_AI_Project_Report.pdf`**

---

##  Outcome

This project showcases a full-stack integration of browser-based UI with an AI-powered backend. It demonstrates how to:
- Build and register a Chrome extension
- Create and deploy a REST API with Flask
- Secure and use API keys with OpenAI
- Host backend services on Render
- Handle cross-origin requests with Flask-CORS

---

##  Author

Yiannis | [github.com/yiannis2804](https://github.com/yiannis2804)
