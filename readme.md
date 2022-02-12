# Hello there , 👋

I just developed this module just because I like the [**Pastep**](https://pastep.com) site !

## Installing
```
npm i pastep-info
```
## Example of usage
```js
const pastep = require("pastep-info")


pastep.id('username').then(data => console.log(data)) // For get user id
pastep.persianUsername('username').then(data => console.log(data)) // For get user persian username
pastep.avatar('username').then(data => console.log(data)) // For get user avatar url
pastep.bio('username').then(data => console.log(data)) // For get user bio

```
*or you can use just like this with async/await*
```js
const pastep = require("pastep-info")

async function test(){
    console.log(await pastep.id('username'))
}
test()
```

## Support
 - **[GITHUB](https://github.com/poki-dev0)**

****
> ***Developed With ♥ by Poki***
