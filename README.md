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
> Bonjor, my name is Basarat in this video I present an example of why you might not need a deserialization library when using JavaScript.

> As always, thanks for watching, and I would love to hear your thoughts and idea on serialization and deserialization of JSON in the comments below. Au revoir.

## Narration
Let's create a mock JSON api to show the kind of data you might have to deal with in the real world. 

> Start with empty `api.ts`

```ts
export interface User {
  id: string,
  firstName: string,
  middleNames: string[],
  lastName: string,
}

export async function loadUser(id: string): Promise<User | null> {
  return {
    a: {
      id: 'a',
      firstName: 'Matt',
      middleNames: ['Alfred'],
      lastName: 'Goosehumps',
    },
    b: {
      id: 'b',
      firstName: 'Peumal',
      middleNames: [],
      lastName: 'Veryveryverylongone',
    }
  }[id] || null;
}

```

* We have a type annotation for a user Data Transfer Object (DTO) that have a first name, optional middle names, and a last name.
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


> Jump to empty `user.ts`
```ts
class User {
  id!: string
  firstName!: string
  middleNames!: string[]
  lastName!: string
  
  fullName() {
    return this.firstName
      + (this.middleNames.length ? ' ' + this.middleNames.join(' ') : '')
      + ' ' + this.lastName;
  }
}
```
* A common tranditional OO way to do this is to create a class that has the same or similar properties as the data transfer objects.
* In addition to that it also provides a formatting method that we are looking for.

> Select the properties on the class. 
* At this point you would start to think of some way of transferring the information from the DTO into an instance of the class. 

However I would argue that is simpler to just use the DTO as it as e.g. 

```ts
import { User } from './api';

export function fullName(user: User) {
  return user.firstName
    + (user.middleNames.length ? ' ' + user.middleNames.join(' ') : '')
    + ' ' + user.lastName;
}
```

Organizing all the utilities for a particular dto into a single es module allows for intutive expansion and exploration of the oprations associated with a dto.

> Jump to `app.ts`

```ts
import * as user from './user';

// Later
console.log(user.fullName(userA));
console.log(user.fullName(userB));
```
* The seperation of Data and Methods is one of the corner stones of functional programming.
* This is the pattern I follow for simple operations on non active data structures provided by APIs. 