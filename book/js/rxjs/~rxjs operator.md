## share

```js

Returns a new Observable 

that multicasts (shares) the original Observable. As long as there is at least one Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream hot. This is an alias for multicast(() => new Subject()), refCount().

```

## fromEvent

```js
import React from 'react'
import {Observable as Ob }   from 'rxjs'
import { share } from 'rxjs/operators';


```