# Sports Bracket

### Project Structure

The project's source code can be found in the 'app' folder, which is organized as follows:

* brackets.json - The given test bracket for the project;
* index.html - The starting page of the application;
* strings.de.json, strings.en.json, strings.pt.json - The test files for different languages;
* scripts/app.js - Configuration of the application;
* scripts/main-controller.js - The main controller which reads the brackets file and manages the change in language;
* scripts/sports-bracket-directive.js - The directive that draws the bracket;
* styles/main.less - Contains the styles for the bracket;
* views/main.html - Container for the bracket and the language buttons;
* views/sports-bracket.html - Template for the bracket directive.

### Building and Running the Project

To build the project, run 'grunt build', this will minify the js files and compile the less files into css. 
Next run 'grunt serve' to open the project in your browser, this will also set up a watch, reloading the page when any file has been changed.