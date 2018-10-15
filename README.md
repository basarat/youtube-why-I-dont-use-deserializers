# Youtube checklist
## Before publishing
* Add @basarat overlay
* Delete cursor
* Mix to mono
## After publishing
* Add monetization
* Add end screen

# Why I don't use deserializers

## Description
In this video I present some of the resons why I don't use a deserialization library 🌹

## Share
<description> plus
`#TypeScript #JavaScript #ReactJS #NodeJS #AngularJS #MobX`

## Tags
TypeScript,JavaScript,ReactJS,NodeJS,AngularJS,MobX

## Intro / Outro 
> Bonjor, in this video I present an example of a simple processing of a JSON response and why you might not need a deserialization library.

> As always, thanks for watching, and I would love to hear your thoughts and idea on serialization and deserialization of JSON in the comments below. Au revoir.

## Narration
Let's create a mock JSON api to show the kind of data you might have to deal with in the real world. 

> Start with empty `api.ts`

* We have a type annotation for users that have a first name, optional middle names, and a last name.
* And an example `loadUser` which provides an example async response using some mock data.

> Start with empty `app.ts`

```ts
import { loadUser } from './api';

main();
async function main() {
  const userA = await loadUser('a');
  if (userA != null) {
    console.log(
      userA.firstName
      + (userA.middleNames.length ? ' ' + userA.middleNames.join(' ') : '')
      + ' ' + userA.lastName
    );
  }
  const userB = await loadUser('b');
  if (userB != null) {
    console.log(
      userB.firstName
      + (userB.middleNames.length ? ' ' + userB.middleNames.join(' ') : '')
      + ' ' + userB.lastName
    );
  }
}

```

* Now lets use this api in an example application. In this application our objective is to load a user using a given id and log out their full name which we can get as a concatention of the first, middle and last names. 

* We do this for the first user, as well as for a second example user.

> Select the console.log body.

* This works fine, but you can see this formatting of the User can really be a function that can be associated with the `User` data. 

A common tranditional OO way to do this is to create a class. 
