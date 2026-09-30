# Blank-screen fix / exact run steps

1. Extract this ZIP completely. Do not open `index.html` by double-clicking it.
2. Open the extracted `sarva-kalyana-seva` folder in VS Code.
3. Open VS Code Terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the **Local** URL printed by Vite, normally `http://localhost:5173/`.
6. If Vite says a different port is being used, open the exact URL it prints.
7. If the browser still shows a blank page, press F12 → Console and copy the red error message. The app now includes an error boundary so most React runtime errors will also be visible on the page.
8. For the production check run:

```bash
npm run build
npm run preview
```

Do not open the `index.html` file directly. React Router and Vite are intended to run through the Vite development/preview server.
