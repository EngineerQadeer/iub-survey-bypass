# LimeSurvey Auto Filler

A lightweight JavaScript automation script that automatically completes LimeSurvey-based course evaluation forms by selecting responses, filling text fields, and submitting the survey.

## Features

* Automatically detects all survey questions.
* Selects random answers for radio-button questions.
* Supports predefined positive feedback responses.
* Fills mandatory text areas automatically.
* Submits the survey automatically.
* Runs directly from the browser console.
* No installation required.

## How It Works

The script:

1. Scans the page for all radio-button question groups.
2. Selects an answer for each question.
3. Fills any required textarea fields.
4. Locates the survey submit button.
5. Automatically submits the completed form.

## Usage

1. Open the LimeSurvey page.
2. Press `F12` to open Developer Tools.
3. Navigate to the **Console** tab.
4. Paste the script.
5. Press `Enter`.

The survey will be completed and submitted automatically.

## Example

```javascript
// Select random answers
// Fill suggestion field
// Submit survey
```

## Supported Platforms

* LimeSurvey
* Similar survey systems using standard HTML radio buttons and textareas

## Disclaimer

This project is intended for educational purposes, browser automation learning, and testing web forms. Users are responsible for complying with the policies and rules of any platform where this script is used.

## License

MIT License
