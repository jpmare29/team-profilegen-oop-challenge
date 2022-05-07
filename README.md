# team-profilegen-oop-challenge

When the user runs the index.js file from the command line they will be
prompted, via inquirer, for the associated information of the manager.
After they finish filling out that information they will be asked
if they would like to add a team member, either an engineer or an intern,
if they choose not to, the inquirer prompt will end and return the object
to a series of functions that will take the inquirer object create a new 
object via class contruction and pass that into the following functions 
to create an HTML card for the manager. That html will then be passed into
a function to generate an entire webpage, that webpage in turn will be 
written to a file in the /dist directory in order to be used.
If the user chooses to add team mebers under the manager they will be
prompted with the respective type and be asked for the 
relevant information. When they finish answering the questions for one
team member they will be prompted again until they choose no. These team
members objects will be pushed to an array associated to the teamArray
attribute of the manager. This array will be processed by the same
functions used to create the object/HTML for the manager and generate 
individual HTML cards for each team member which will be pushed into the
same html array as the manager card.
That array will then be processed in the same way in order to generate
a full HTML page with the manager and all of the team members.