# Tech for Better - Cocoon Kids Big Hug

## Installation

1. run: ``` npm config set legacy-peer-deps true ```

2. Install node modules: ``` run npm i ```

3. Open two consoles:

5. Start json server: ``` npm run j-s ```

6. Start localhost: ``` npm run dev ```


## Introduction 
### What are you building?
Cocoon Kids Big Hug is a therapeutic service for children and young adults and parents.

### Why are you building it?
To help people understand their feelings better. 

## Project scope 
### What are you not building?
We're not building a platform that is used in schools for teachers to better unterstand the moods of the children they're teaching

We are not building a platform with effective sign-up for children under 13.

### How did you decide what features were important?
We listened to our Product Owner and listened to the feedback from the user research that we did on Design week.

## Project plan 
### How are you going to structure your sprints?
#### First Sprint
- Create the pages and functionality for two user groups
- Use Json object and endpoints
#### Second Sprint
- Implement simple auth
- Create mock-up page for parents/carers and schools/professional
- Add db (tbc)

### What order are you going to build in?
Start with the pages that we determined that they are going to be in the MVP and build the necessary components related to them.

### How did user research inform your plan?
It helped us refactor our wireframe and enhance existing ideas.


## Requirement analysis 

### How will you ensure your project is accessible to as many users as possible?
- we're following the guidance on the a11y checklist, so ensure that the project is accessible to as many users as possible
- we're using reach-ui which helps us build components which meet a lot of accessibility criteria

### Are there any legal or regulatory requirements you should consider?

- GDPR and T&C need to be in plain and simple language.
- Specific Auth requirements for minors are out of scope for this project


## Project learnings 

### Did your team work effectively?

### What would you do differently next time?


## Research and findings 

### What did you find out from user testing?
- The need to create different themes (images, colours) for the age-groups
- Keep the design clean and simple
- Describe emotions with both images and adjectives


## Project outcomes 

### Were your assumptions right or wrong?


## Recommendations and conclusions 

### What features would you prioritise to build next?

### Was the project a success?


## Software Development Lifecycle stages 

### Planning 

#### What roles did your team take on?
Scrum - Karwan
UX/UI - Paz
DevOps - Lisa
QA - Abdullah

#### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)
##### QA 
- Monitor codecov and make sure test coverage is kept up
- Understand how to test pure functions, database queries, routes, DOM
- Understand how and when to use mocks
- Set up separate test database and destroy / build scripts
- Insist on clean and legible code
##### DevOps 
- Lead on setting up repo and file structure
- Make sure separation of concerns is considered
- Set up linting and check it works for everyone
- Set up deployment to Heroku and take ongoing responsibility
- set up environment variables for local and remote databases
##### Scrum Facilitator 
- Sprint planning
- Prioritise issues
- Break down larger issues into manageable chunks
- Lead standups and Sprint Planning
- Clear blockers
- Lead conversations with the Product Owner
- Listen to and mediate Product Owner needs
- Balance needs of the Product Owner with the needs of the Product Team
- Provide a daily rundown of work completed
- Lead Sprint Review
##### UX Lead 
- Advocate for the user
- Create a style guide
- Ensure design heuristics are followed
- Lead on project documentation
- Ensure regular attention is given to thorough documentation
- Consider all parts of the project documentation
- Provide support to the team in writing documentation
- Ensure completion of handover documentation for the Product Owner


#### Did these roles help your team work effectively?

#### Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

### Analysis 

#### What might be the intended and unintended consequences of building this product? 
#### Intented
- Help children explore and understand their moods
- Give tips on what to do to improve one's mood

#### Unintented
- Make children overly aware of their mood
- Compare moods through time and be self-judgemental about own feelings 

### Design 

#### How did you plan a user experience?
- Clearly divide the flow of content per age groups
- Provide adequate content and design to different age-groups
- Safeguard access to inadequate content to young children

#### What technical decisions did you make?

- Server-render vs client-render vs both
- Relational or non-relational or no DB
- Self-hosted or platform-as-a-service
- Frontend first vs DB first


#### Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

### Implementation/Build 

#### How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

#### What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

#### How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

### Test 

#### How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6)

### Deploy 
#### Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

#### What problems did you encounter during deployment?

### Maintain 
#### Is it easy for someone make changes to the codebase?
#### Could a new person quickly be onboarded to contribute?
