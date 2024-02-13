<style>
    c { color: firebrick; font-weight: bold; font-style: normal; display: block; }
    r { color: green; font-weight: bold; font-style: normal; display: block; }
</style>

## 23-01-2024

- Scaffolded out project
- Added routing
  <c>I have build the project with error handling and suspence in mind</c>

## 24-01-2024

- Built out the authenticated layout component
- footer and navbar styled and all links working
- create pink panther icon for title tab
  <c>Challenge - Getting the tab 'title' to render correctly as change paths</c>

## 25-01-2024

- finished building out homepage
- change icons to font awesome to help with passing as props
  <c>Challenge - Audio took time as did not realise because of webpack I need to add .mp3 for importing</c>
  <c>Challenge - Lost time with 'brand' icons not working the same as others when passed as props</c>

## 26-01-2024

- get tab title working

## 27-01-2024

- move data to a local file ready for api calling
- implemented fake api with 'https://www.npmjs.com/package/json-server'
- move the start to a different port and create a script for json server
  <c>Challenge - I was getting an undefined returned from teh react query, realised I needed to handle the pending period i.e. I could add a loading text with this</c>

## 28-01-2024

- connected FE to BE - much bigger job than these words describe.
- Moved issues and jobs to GITHub issues
  <c>Challenge - Mongodb have changed they authencation process so had to fix</c>

## 29-01-2024

- Finished off all connections
  <r>FE - Merged issue 3 into main - connect BE</r>
- Implemented History Page
  <r>Merged issue 11 into main - history Page</r>
- Structured out the appendix page
- There are jobs left on the appendix ticket before can be merged into main
- BIG refactor of the BE to be more inline with previous use.
  <r>BE - Merged issue 5 into main - Refactored app</r>
- Created all the HTTP actions for the appendix page on the BE
  <r>BE - Merged issue 7 into main - appendix HTTP Actions</r>
  <r>FE - Merged issue 14 into main - string formatted as html</r>

## 30-01-2024

- Structured out the appendix page
- There are jobs left on the appendix ticket before can be merged into main
- BIG refactor of the BE to be more inline with previous use.
  <r>BE - Merged issue 5 into main - Refactored app</r>
- Created all the HTTP actions for the appendix page on the BE
  <r>BE - Merged issue 7 into main - appendix HTTP Actions</r>
  <r>FE - Merged issue 14 into main - string formatted as html</r>

## 31-01-2024

- refactored the GITHub issues and created projects for FE and BE to track work easier.
- fixed the WikiPedia API returning html as string to correctly render in the table.
  <r>FE - Merged issue 14 into main - string formatted as html</r>
- Implemented 'confirm-provider' by mui to the app so it can be used throughout the app.
- Implemented Toast notifications.
  <c>I had to research and learn how to implement the confirm provider</c>

## 01-02-2024

- refactored modal to a global component.
- removed font-awesome and replaced with react icons.
- removed excessive use of the key on elements.
- Got the modal working through the appendix.
  <c>building out the modal was complicated and learnt about controlled and uncontrolled components in the process</c>

## 02-02-2024

- finished off the Appendix page
- got all HTTP processes working

## 03-02-2024

- built out Gallery page
- Added routing to the galley and used this to reference the page
  <r>FE - Merged issue 10 into main - Gallery Page</r>
  <c>Complicated getting all the state to work in hardmany with each other and track the ID correctly</c>
  <c>Bug - on the back and next buttons that I added to ticket</c>

## 04-02-2024

- built the landing page
- installed yup password schema
  <r>FE - Merged issue 32 into main - Landing Page</r>

## 05-02-2024

- released app for feedback
  - removed unneeded exports
  - Centralised the connection to the BE
    - Moved WikiPedia to the BE
    - Move refactor logic to the BE
  - Made the connections type safe
- Implemented Suspense and Error boundary
  - Because React Suspense & Error are declarifitve I had to restructure the app to contain the API calls inside the suspense
    <r>FE - Merged issue 37 into main - Fallback & Suspence</r>

## 09-02-2024

- added Husky for precommits to help with formatting and committing style
  <r>FE - Merged issue 7 into main - Precommits Husky</r>

## 10-02-2024

- refactored HTTP paths to inclide 'pinkpanther' so the BE back be used across all my applications
  <r>FE - Merged issue 39 into main - HTTP Endpoints updated</r>

## 13-02-2024

- Rebuilt app to resolve build issues on Netlify
- Added a '\_redirects' file in the public folder, this resolves routing issues on Netlify
- Renamed app in GITHub from '03-PinkPantherReact' to 'pink-Panther-React'
  <r>FE - Merged into main - Rebuild</r>
