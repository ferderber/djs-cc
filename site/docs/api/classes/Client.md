---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `DiscordClient`

  ↳ **`Client`**

## Constructors

### constructor

• **new Client**(`intents`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intents` | `BitFieldResolvable`<`IntentsString`, `number`\>[] |

#### Overrides

DiscordClient.constructor

#### Defined in

[src/client.ts:20](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L20)

## Properties

### application

• **application**: ``null`` \| `ClientApplication`

#### Inherited from

DiscordClient.application

#### Defined in

node_modules/discord.js/typings/index.d.ts:370

___

### channels

• **channels**: `ChannelManager`

#### Inherited from

DiscordClient.channels

#### Defined in

node_modules/discord.js/typings/index.d.ts:371

___

### commands

• **commands**: `Map`<`string`, [`Command`](Command.md)\>

#### Defined in

[src/client.ts:17](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L17)

___

### emojis

• `Readonly` **emojis**: `BaseGuildEmojiManager`

#### Inherited from

DiscordClient.emojis

#### Defined in

node_modules/discord.js/typings/index.d.ts:372

___

### guilds

• **guilds**: `GuildManager`

#### Inherited from

DiscordClient.guilds

#### Defined in

node_modules/discord.js/typings/index.d.ts:373

___

### options

• **options**: `ClientOptions`

#### Inherited from

DiscordClient.options

#### Defined in

node_modules/discord.js/typings/index.d.ts:374

___

### prefix

• **prefix**: `string` = `"!"`

#### Defined in

[src/client.ts:18](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L18)

___

### readyAt

• **readyAt**: ``null`` \| `Date`

#### Inherited from

DiscordClient.readyAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:375

___

### readyTimestamp

• `Readonly` **readyTimestamp**: ``null`` \| `number`

#### Inherited from

DiscordClient.readyTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:376

___

### settings

• `Optional` **settings**: `default`

#### Defined in

[src/client.ts:19](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L19)

___

### shard

• **shard**: ``null`` \| `ShardClientUtil`

#### Inherited from

DiscordClient.shard

#### Defined in

node_modules/discord.js/typings/index.d.ts:377

___

### token

• **token**: ``null`` \| `string`

#### Inherited from

DiscordClient.token

#### Defined in

node_modules/discord.js/typings/index.d.ts:378

___

### uptime

• **uptime**: ``null`` \| `number`

#### Inherited from

DiscordClient.uptime

#### Defined in

node_modules/discord.js/typings/index.d.ts:379

___

### user

• **user**: ``null`` \| `ClientUser`

#### Inherited from

DiscordClient.user

#### Defined in

node_modules/discord.js/typings/index.d.ts:380

___

### users

• **users**: `UserManager`

#### Inherited from

DiscordClient.users

#### Defined in

node_modules/discord.js/typings/index.d.ts:381

___

### voice

• **voice**: `ClientVoiceManager`

#### Inherited from

DiscordClient.voice

#### Defined in

node_modules/discord.js/typings/index.d.ts:382

___

### ws

• **ws**: `WebSocketManager`

#### Inherited from

DiscordClient.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:383

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Client.md#capturerejectionsymbol)

#### Inherited from

DiscordClient.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:94

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

DiscordClient.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:99

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

DiscordClient.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:100

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Client.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

DiscordClient.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:93

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Client`](Client.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.addListener

#### Defined in

node_modules/@types/node/events.d.ts:120

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

DiscordClient.destroy

#### Defined in

node_modules/discord.js/typings/index.d.ts:384

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `ClientEvents`[`K`] |

#### Returns

`boolean`

#### Inherited from

DiscordClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:411

▸ **emit**<`S`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `...args` | `unknown`[] |

#### Returns

`boolean`

#### Inherited from

DiscordClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:412

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

DiscordClient.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:435

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`): `Promise`<`GuildPreview`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`GuildPreview`\>

#### Inherited from

DiscordClient.fetchGuildPreview

#### Defined in

node_modules/discord.js/typings/index.d.ts:385

___

### fetchGuildTemplate

▸ **fetchGuildTemplate**(`template`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

DiscordClient.fetchGuildTemplate

#### Defined in

node_modules/discord.js/typings/index.d.ts:387

___

### fetchGuildWidget

▸ **fetchGuildWidget**(`guild`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

DiscordClient.fetchGuildWidget

#### Defined in

node_modules/discord.js/typings/index.d.ts:392

___

### fetchInvite

▸ **fetchInvite**(`invite`): `Promise`<`Invite`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite` | `string` |

#### Returns

`Promise`<`Invite`\>

#### Inherited from

DiscordClient.fetchInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:386

___

### fetchPremiumStickerPacks

▸ **fetchPremiumStickerPacks**(): `Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Returns

`Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Inherited from

DiscordClient.fetchPremiumStickerPacks

#### Defined in

node_modules/discord.js/typings/index.d.ts:390

___

### fetchSticker

▸ **fetchSticker**(`id`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

DiscordClient.fetchSticker

#### Defined in

node_modules/discord.js/typings/index.d.ts:389

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): `Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Returns

`Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Inherited from

DiscordClient.fetchVoiceRegions

#### Defined in

node_modules/discord.js/typings/index.d.ts:388

___

### fetchWebhook

▸ **fetchWebhook**(`id`, `token?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `token?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

DiscordClient.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:391

___

### generateInvite

▸ **generateInvite**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InviteGenerationOptions` |

#### Returns

`string`

#### Inherited from

DiscordClient.generateInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:393

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Client.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

DiscordClient.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:292

___

### isReady

▸ **isReady**(): this is Client<true\>

#### Returns

this is Client<true\>

#### Inherited from

DiscordClient.isReady

#### Defined in

node_modules/discord.js/typings/index.d.ts:395

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

DiscordClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:382

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

DiscordClient.listeners

#### Defined in

node_modules/@types/node/events.d.ts:305

___

### login

▸ **login**(`token?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

DiscordClient.login

#### Defined in

node_modules/discord.js/typings/index.d.ts:394

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:414

▸ **off**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:415

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:399

▸ **on**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:400

___

### onInteraction

▸ **onInteraction**(`interaction`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `Interaction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client.ts:32](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L32)

___

### onMessage

▸ **onMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client.ts:40](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L40)

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:405

▸ **once**<`S`\>(`event`, `listener`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaited`<`void`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:406

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:400

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:416

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

DiscordClient.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:335

___

### registerCommand

▸ **registerCommand**(`cmd`): `void`

Registers a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | [`Command`](Command.md) | Instance of a command |

#### Returns

`void`

#### Defined in

[src/client.ts:87](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L87)

___

### registerCommandDirectory

▸ **registerCommandDirectory**(`path`): `Promise`<`void`\>

Registers all commands within the given directory

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path to the directory containing commands |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client.ts:110](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L110)

___

### registerCommands

▸ **registerCommands**(`cmds`): `void`

Registers an array of command classes as commands.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmds` | [`Command`](Command.md)[] | Array of command classes |

#### Returns

`void`

#### Defined in

[src/client.ts:100](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L100)

___

### registerProvider

▸ **registerProvider**(`config`): `Promise`<`void`\>

Sets the clients configuration provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client.ts:131](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L131)

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`event?`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:420

▸ **removeAllListeners**<`S`\>(`event?`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Exclude`<`S`, keyof `ClientEvents`\> |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:421

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Client`](Client.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:260

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](Client.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](Client.md)

#### Inherited from

DiscordClient.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:286

___

### sweepMessages

▸ **sweepMessages**(`lifetime?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lifetime?` | `number` |

#### Returns

`number`

#### Inherited from

DiscordClient.sweepMessages

#### Defined in

node_modules/discord.js/typings/index.d.ts:396

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

DiscordClient.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:397

___

### unregisterCommand

▸ **unregisterCommand**(`cmd`): `void`

Removes a command from the bots command Map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | [`Command`](Command.md) | Instance of a command |

#### Returns

`void`

#### Defined in

[src/client.ts:124](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/client.ts#L124)

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

DiscordClient.getEventListener

#### Defined in

node_modules/@types/node/events.d.ts:83

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

DiscordClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

DiscordClient.on

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

DiscordClient.once

#### Defined in

node_modules/@types/node/events.d.ts:75

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

DiscordClient.once

#### Defined in

node_modules/@types/node/events.d.ts:76
