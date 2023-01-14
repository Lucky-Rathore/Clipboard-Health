Our Objective:
Add the ability for Facilities to save their custom ids for each Agent they work with. # they are not allowed to see or update other.  
Use that id when generating reports for them.

Assumption 
1. Each facility has a separate database. It helps other data not be exposed even by mistake.
2. liquibase or similar database version control tool is in use
3. Rest API is in Use

Tickets #1: DB Changes
- Adding new column "externalId" type "varchar(200)" not null and unique in the Agents Database table with name 
- Use liquibase to insure the database version control 


Ticket #2: Read Agent API Change
- Create a new version of Read  Agent API which includes "externalId"

Ticket #3: Update Agent API Change
- Create a new version of Update  Agent API which includes "externalId"

Ticket #4: Create Agent API Change
- Create a new version of Read Agent API which includes "externalId"

Ticket #5: UI changes: "List Agent" page change
- Update the UI page of the agent list which includes "External Id"

Ticket #6: UI changes: "Detail Agent" page change
- Update UI page of the agent details which includes "External Id"

Ticket #7: UI changes: "Update Agent" page change
- Update UI page of agent update which includes "External Id"

Ticket #8: UI changes: "Create Agent" page change
- Update UI page of agent creation which includes "External Id"


Accepting criteria
- a new column/field/attribute in Database Table/Scheme 
- should have version controlled #expalin more
- null value shouldn't be accepted
- duplicate value shouldn't be accepted
- able to read/update/create agent records with externalId
- a facility must not allow seeing other facility's records

Important: feel free to reach me or comment on the ticket in case of any questions or query


