
# TimedGoogleForm
Do you want to create a time critical assesment on google forms that opens and closes exactly at a certain time ?
Unfortunately the [Google API ClockTriggerBuilder](https://developers.google.com/apps-script/reference/script/clock-trigger-builder#detailed-documentation) has a 15 minutes window.

This little JavaScript code runs a dumb while loop to get the desired accuracy.

## How to use ?
 1. Create a google form.
 2. Select the 3 vertical dots at the top right.
 3. Select <> Script Editor
 4. Paste the content of code.js into the page.
 5. Edit the 2 variables (form_open_time/form_close_time) at the top
 6. Run the function open_closeAt

# Note : Google doesn't allow the execution of scripts for an extended period of time
Please Run the Script 5 minutes before openening and closing the exam
