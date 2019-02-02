train-time
==========
Unit 7 Homework: Firebase

### Background
_train-time_ is an exercise in data permanence. It is a schedule tracking app for a fictional train service. The names of the lines are taken from real Amtrak trains, but the schedules are completely made up (and are also incredibly realistic). It's all simply for the purpose of showing how a developer can store and retrieve data from Firebase, and how that data will be the same no matter who is viewing it or from what browser or platform.

### Instructions
1. Input train data into the form at the bottom, including:  
⋅⋅1. The name of the line (Train Name)  
⋅⋅2. Its destination  
⋅⋅3. The time the first train departed (First Train Time)  
⋅⋅4. And how often a new train departs for that destination (Frequency).
2. Click the "submit" button. If the app is working properly (which it is), you will receive a modal notifying you that the new train has been succesfully added to the schedule, and the train will be added to the bottom of the list of trains. All times will also be updated every time you add a new train.
3. Everytime the app is loaded, the trains will all still be on the list, with the current arrival time displayed. This is because the information is being stored on a "virtual server," Firebase, and Firebase will update the list in real time every time the page is loaded.

### Acknowledgements
Thanks again to my instructor, Mark Carlson, my class TA's, and my tutor Lindsey Bowen, who all work to make this sorcery understandable.

### Credits
This app has been designed and coded by [Sergio Di Martino](https://github.com/sdimartino510/) as a homework assignment for UC Berkeley Coding Bootcamp, Full Stack Flex program. Any questions, comments, or suggestions about this app can be directed to [Sergio](mailto:sdimartino@gmail.com).