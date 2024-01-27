<style>
    em { color: firebrick; font-weight: bold; font-style: normal; display: block; }
</style>

## 23-01-2024
- Scaffolded out project
- Added routing
  _I have build the project with error handling and suspence in mind_

## 24-01-2024
- Built out the authenticated layout component
- footer and navbar styled and all links working
- create pink panther icon for title tab
_Challenge - Getting the tab 'title' to render correctly as change paths_

## 25-01-2024
- finished building out homepage
- change icons to font awesome to help with passing as props
_Challenge - Audio took time as did not realise because of webpack I need to add .mp3 for importing_
_Challenge - Lost time with 'brand' icons not working the same as others when passed as props_

## 26-01-2024
- get tab title working

## 27-01-2024
- move data to a local file ready for api calling
- implemented fake api with 'https://www.npmjs.com/package/json-server'
- move the start to a different port and create a script for json server
_Challenge - I was getting an undefined returned from teh react query, realised I needed to handle the pending period i.e. I could add a loading text with this_

## outstanding jobs
- Get the title working, when change route tab title should change
- Global themes for buttons, text, etc....
- connect DB
- add suspence
- add error handling
- fall back - I think can use with react query i.e. loading property
- authentication
- Husky and precommits for linting
- add github actions build