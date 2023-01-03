# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## My Breakdown Here

1. ### Add a custom_id field to the Agents table:

   - **Description** : This ticket involves adding a new field to the Agents table in the database to store a custom id for each Agent.
   - **Acceptance criteria**: The Agents table has a new `custom_id` field that can store a string of up to 255 characters.
   - **Time/effort estimate**: Low. This should be a simple database migration that should take only a few minutes to implement. This ticket should take approximately 1 hour to complete.
   - **Implementation details**: Run a database migration to add the `custom_id` field to the Agents table.

     <br/>

2. ### Allow Facilities to set a custom id for each Agent they work with:

   - **Description**: This ticket involves updating the user interface to allow Facilities to set a custom id for each Agent they work with.
   - **Acceptance criteria**: Facilities can edit the `Custom Id` field for each Agent they work with through the user interface. The `Custom Id` field is displayed on the page where Facilities can view and edit their Agents.
   - **Time/effort estimate**: Low. This will require updating the user interface to display and allow editing of the `Custom Id` field, as well as implementing the necessary backend logic to save the changes to the database. This ticket should take approximately 2-3 hours to complete.
   - **Implementation details**: Update the user interface to display the `Custom Id` field for each Agent and allow Facilities to edit it. Implement the necessary backend logic to save the changes to the database.

   <br/>

3. Use the custom id in the report generation process:

   - **Description**: This ticket involves updating the generateReport function to use the custom id for each Agent instead of the internal database id.
   - **Acceptance criteria**: The generateReport function uses the `custom_id` field for each Agent in the report instead of the internal database id. The report displays the correct `custom_id` for each Agent.
   - **Time/effort estimate**: Low. This will require updating the generateReport function to use the `custom_id` field instead of the internal database id, as well as making any necessary updates to the report template to display the `custom_id` field. This ticket should take approximately 1-2 hours to complete.
   - **Implementation details**: Update the generateReport function to use the `custom_id` field instead of the internal database id. Make any necessary updates to the report template to display the `custom_id` field.

    <br/>

4. Test the updated report generation process:

   - **Description**: This ticket involves verifying that the updated generateReport function produces the correct report with the correct custom id for each Agent.
   - **Acceptance criteria**: The updated generateReport function produces the correct report with the correct `custom_id` for each Agent.
   - **Time/effort estimate**: Low. This will require setting up test data and manually verifying that the report is generated correctly. This ticket should take approximately 1 hour to complete.
   - **Implementation details**: Set up test data with a variety of different `custom_id` values. Call the generateReport function with this test data and verify that the generated report contains the correct `custom_id` for each Agent.

    <br/>

5. Deploy the updated report generation process:

   - **Description**: This ticket involves deploying the updated generateReport function to production.
   - **Acceptance criteria**: The updated generateReport function is deployed to production and is being used to generate reports for Facilities.
   - **Time/effort estimate**: Low. This will require deploying the code changes to production and ensuring that the updated function is being used by the application. This ticket should take approximately 1 hour to complete.
   - **Implementation details**: Deploy the code changes to production. Verify that the updated generateReport function is being used by the application.
