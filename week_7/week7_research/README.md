# week7_research

## What are local storage and session storage and what is the difference between the two?

localStorage: Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data.

sessionStorage: Similar to localStorage but expires when the browser closed (not the tab).

## Why would you use cookies vs local/session storage?

Cookies stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).

Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.

Despite that, the size must be less than 4KB, and can be secured by setting the HttpOnly flag as true for that cookie which will prevent client side access to it.

Local/session storage bring something different to the table like the storage limit is far bigger than cookies, Session has a limit 5MB, in some cases like Session storage which data is never transfered unlike Cookies.

## Demo of a simple usage of localStorage and sessionStorage


### localStorage Demo:

https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount

### sessionStorage Demo:

https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_session
