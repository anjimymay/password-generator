# 03 JavaScript: Password Generator

Created an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. Working on this application I mainly worked on the javascript portion of it.

## Review of Script

The application prompts users for inputs such as password length, if they want uppercase, lower, symbols, or numbers upon clicking the generator button.

The write button calls the generator function which stores user input on an array so that it can randomly select from the options the user chose.

I created random functions for each of the selected inputs using chartocode list I found. http://net-comber.com/charset.html

And finally, there's a button event listener which listens for a click action upon it that runs the description above.