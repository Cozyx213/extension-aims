# Portal Beautifier

A lightweight Firefox extension designed for the AIMS Student Portal at Cebu Institute of Technology. It overrides default button styles, colors, and replaces the branded banner with a custom heading.

## Features

-   Removes the original portal banner and displays a custom header: "Cebu Institute of Technology".
-   Applies your own CSS overrides via `content.css` to restyle buttons and other elements.
-   Automatically injects styles/scripts only on `https://cituweb.pinnacle.com.ph/aims/students/*` pages.

## Installation

### Temporary (Development)

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select the `manifest.json` file in this extension folder.

### Permanent (XPI Package)

1. From the extension root directory, run:
    ```bash
    zip -r portal-beautifier.xpi *
    ```
2. Drag and drop the generated `portal-beautifier.xpi` into the Firefox window.
3. Follow the prompts to install.

> NOTE: Self-signed or unsigned XPIs must be temporarily loaded via `about:debugging` unless you have a Mozilla add-on signing certificate.

## File Structure

```
extension/
├── manifest.json     # Extension metadata
├── content.js        # Script for DOM manipulations
├── content.css       # Custom styling overrides
├── icons/
│   └── icon-48.png   # Toolbar icon
└── README.md         # This file
```

## Development

-   Edit `content.js` to change how the banner is replaced.
-   Modify `content.css` to adjust styling rules (button colors, fonts, layout).
-   Bump the `version` in `manifest.json` before packaging.

## Support

If you encounter issues or have suggestions, please open an issue or submit a pull request.
