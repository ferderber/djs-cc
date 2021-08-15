---
id: "Command"
title: "Class: Command"
sidebar_label: "Command"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Command**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CommandOptions` |

#### Defined in

[src/command.ts:14](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L14)

## Properties

### aliases

• **aliases**: `string`[] = `[]`

#### Defined in

[src/command.ts:9](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L9)

___

### args

• **args**: [`Argument`](Argument.md)[] = `[]`

#### Defined in

[src/command.ts:11](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L11)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/command.ts:12](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L12)

___

### name

• **name**: `string`

#### Defined in

[src/command.ts:8](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L8)

___

### requiredRole

• `Optional` **requiredRole**: `Role`

#### Defined in

[src/command.ts:13](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L13)

___

### usage

• **usage**: `string`

#### Defined in

[src/command.ts:10](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L10)

## Methods

### hasPermission

▸ **hasPermission**(`_msg`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_msg` | [`Message`](Message.md) | Message that invoked the command |

#### Returns

`boolean`

Whether the user who wrote the message has permission (default: true)

#### Defined in

[src/command.ts:110](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L110)

___

### help

▸ **help**(`msg`): `MessageEmbed`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Message.md) |

#### Returns

`MessageEmbed`

#### Defined in

[src/command.ts:76](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L76)

___

### parseArgs

▸ **parseArgs**(`message`): `Promise`<`Map`<`string`, `unknown`\>\>

Extracts a commands arguments from a message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Message`](Message.md) | Message that invoked the command |

#### Returns

`Promise`<`Map`<`string`, `unknown`\>\>

Map of the found arguments

#### Defined in

[src/command.ts:26](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L26)

___

### run

▸ `Abstract` **run**(`msg`, `args`): `Promise`<`unknown`\>

Main function run when a command is executed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`Message`](Message.md) | Message that invoked the command |
| `args` | `Map`<`string`, `unknown`\> | Arguments extracted from the message |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/command.ts:118](https://github.com/matthewferderber/djs-cc/blob/b08c79c/src/command.ts#L118)
