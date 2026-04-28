# Qatar Olympic Copilot Demo

This single-page demo replicates the visual style of `olympic.qa` with a Qatar Olympic Committee-inspired hero, a second hero image panel, and a floating agent bubble that maintains session state.

## Files

- `index.html` — demo page
- `styles.css` — Olympic-themed styling and hero layout
- `script.js` — floating assistant bubble with local chat persistence

## Launch locally

### Option 1: Python HTTP server

1. Open a terminal in `c:\Users\AzAdmin\.gemini\antigravity\scratch\QOCDemoSite`
2. Run:

```powershell
python -m http.server 8000
```

3. Open the browser at:

```text
http://127.0.0.1:8000
```

### Option 2: VS Code Live Server

1. Install the Live Server extension.
2. Open this folder in VS Code.
3. Right-click `index.html` and choose `Open with Live Server`.

## Packaging

The site is packaged as a git repository and a ZIP file for easy deployment.

- **Git Repository**: Initialized and committed. Push to GitHub for Pages or Static Web Apps.
- **ZIP File**: `QOCDemoSite.zip` created for ZIP deploy to Azure App Service.

## Deploy to GitHub Pages

1. Create a GitHub repository named `QOCDemoSite`.
2. Push the code:

```powershell
git remote add origin https://github.com/DIsangedighi/QOCDemoSite.git
git branch -M main
git push -u origin main
```

3. In repository settings, open **Pages**.
4. Choose branch `main` and folder `/`.
5. Save and wait a few minutes.
6. Access the site at `https://<your-username>.github.io/QOCDemoSite/`.

## Deploy to Azure

### Option 1: Azure Static Web Apps

1. Create a new Static Web App in the Azure Portal.
2. Connect it to your GitHub repository.
3. Set `app_location` to `/` and `output_location` to `/`.
4. Deploy and open the provided URL.

### Option 2: Azure App Service (ZIP Deploy)

1. Create an Azure App Service (Linux, Python runtime).
2. In **Deployment Center**, choose **ZIP** and upload `QOCDemoSite.zip`.
3. Or use Azure CLI:

```powershell
az webapp up --name <your-app-name> --resource-group <your-resource-group> --runtime "PYTHON:3.11" --location <region>
```

4. Open the site when deployment finishes.

## Notes

- This demo is fully static HTML/CSS/JS.
- The floating agent retains conversation history in browser local storage so the chat remains available after minimizing the bubble.
