# Dev Desk Queue

To run the app, in the terminal cd into folder dev-desk and enter put yarn start. You can create your own user name and password by clicking on "Register" on the home page. You can also click on "Student" or "Helper" and user aaron as the username and pass as the password.

## **Proposal**
- Purpose
    - This app will make it easier for students to request help for various problems that they face during their training.
    - It also will make it easier for the various helpers to answer the student's questions in a timely manner.
- How it works
    - It will first give the students the chance to review other problems that have already been asked and answered by other students, to see if anyone else is having the similar problem.
    - If the student can't find a similar situation to the problem they are having, then they can submit a new help ticket.
    - The new ticket will require the student to provide as much information about their problem as possible:
        - Category section where the student can state whether the problem they are having is a syntax error in CSS or in React.
        - Description section where the student can give a detailed account of what caused the problem
        - Title section that briefly describes the situation in a few words
        - Things tried section where the student can give the helper a run down of what they tried to do on their own to fix the problem before asking for help
    - There will also be a separate helper section where helpers can log in to the app and see any and all open tickets.
        - The helper section will display all open tickets
        - Allow the helpers to assign a ticket to themselves so that they can answer the ticket
        - Once the ticket is answered they will place the ticket into the resolved database and inform the student that their ticket has been answered
        - If for whatever reason, the helper can't answer the question, they will re-open the ticket so that another helper may try to resolve the ticket
    - Our app will have a backend database where all of the tickets will be held
- Issues with App
    - We never created a way for the helper to post their solutions. This would have to be created on the back-end before it can be added to the app. This was team project assignment. We basically ran out of time and werent able to include this aspect.