# nosql-demo
This is a small repo for some very simple exercise / demos for usage of a NoSQL DB - [pouchdb](https://pouchdb.com/)

## Project setup

### Prerequisite
1. `node` (tested version: `v8.17.0`) 
2. `yarn` (tested version: `1.22.4`)

(Note: yes, `pouchdb` does NOT need to be installed separately because it is a pure JavaScript implemented NoSQL DB and would be installed when you run `yarn` to install the `npm` dependencies. Hurrah! 🎉)  

### Setup steps
Check out this repo and run the following at the project root:
1. `yarn`

### Test project setup
If the project is setup correctly, you should be able to run the following:
1. `jest` - this would run all the tests under the project (but by default you should see all tests being red because this is the exercise - fix all of them! :-) ) 
2. `ts-node src/typescript/playground.ts` - this would run the `playground.ts` which is a, well, playground sandbox that you can mess around - feel free to experiment the [`pouchdb` APIs](https://pouchdb.com/api.html) there!

## Exercise

As mentioned in the deck, we would like to retrieve some data from and write some data to the `pouchdb` database.

The "spec" / "requirements" can be found at the `/src/typescript/systemDesignExercise.test.ts` - unfortunately the tests are all red right now. Can you please fix them? 

We can run the tests by running: `jest`

### Need help?
Feel free to chat / slack me.

Or you may want to take a look at [the `pouchdb` documentations](https://pouchdb.com/) (trust me, they are pretty well-written):
1. [API](https://pouchdb.com/api.html)
2. [Learn](https://pouchdb.com/learn.html)
3. [Guides](https://pouchdb.com/guides/)
4. [Blogs](https://pouchdb.com/blog/)
    1. [A very good blog by `pouchdb` creator about `promise`](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

## Folder Structure
You can find all the source files you need under `src` folder.

In particular, you might want to look at `/src/typescript/systemDesignExercise.ts`, `/src/typescript/systemDesignExercise.test.ts`,`/src/typescript/playground.ts` and `/src/typescript/fileBasedDatabaseExamples.ts`.

Feel free to ignore the other files such as `package.json`, `yarn.lock`, `jest.config.js` for now (mainly for project configuration)
