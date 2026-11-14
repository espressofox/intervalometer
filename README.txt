INTERVALOMETER CALCULATOR — iPhone web app

Publish for free using GitHub Pages:
1. Sign in to github.com and create a PUBLIC repository named intervalometer.
2. Select "uploading an existing file" and upload the FIVE files inside this folder (not the folder itself): index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png.
3. Commit the files to the main branch.
4. Under Settings > Pages, choose Deploy from a branch, main, /(root), then Save.
5. Wait for deployment. Open https://YOUR-USERNAME.github.io/intervalometer/ in Safari on iPhone.
6. In Safari, tap Share > Add to Home Screen > Add (on newer iOS versions, you may need to find Add to Home Screen in the Share menu).
7. Open the app once with internet access to cache it for offline use. Test in Airplane Mode.

No spreadsheet or Google account connection is needed. Calculations run on your phone; last-entered values are stored locally in the browser. A public repository means anyone with the URL can access the app, but it contains no personal data.

Calculation notes:
Video Duration: (shooting seconds / interval seconds) / FPS.
Shooting Interval: shooting seconds / (desired video seconds × FPS).
The two whole-second alternatives are floor and ceil of the ideal interval, with a minimum of 1 second. Estimated video lengths for each are shown.
As in the workbook, frame counts are theoretical and can be fractional; actual shooting may differ by one frame or more.
