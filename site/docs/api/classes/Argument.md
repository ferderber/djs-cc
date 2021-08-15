---
id: "Argument"
title: "Class: Argument"
sidebar_label: "Argument"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Argument**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ArgumentOptions` |

#### Defined in

[src/argument.ts:14](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L14)

## Properties

### default

• **default**: `unknown`

#### Defined in

[src/argument.ts:13](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L13)

___

### name

• **name**: `string`

#### Defined in

[src/argument.ts:10](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L10)

___

### required

• **required**: `boolean`

#### Defined in

[src/argument.ts:12](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L12)

___

### type

• **type**: [`ArgumentType`](../enums/ArgumentType.md)

#### Defined in

[src/argument.ts:11](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L11)

## Methods

### getIdFromMention

▸ `Private` **getIdFromMention**(`mention`): ``null`` \| `string`

Gets the user Id from a mention string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mention` | `string` | A mention string (<@userId> or <@!userId>) |

#### Returns

``null`` \| `string`

#### Defined in

[src/argument.ts:32](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L32)

___

### isNumber

▸ `Private` **isNumber**(`str`): `boolean`

Checks if a the argument is a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[src/argument.ts:24](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L24)

___

### parseArg

▸ **parseArg**(`str`, `message`): `Promise`<`unknown`\>

Retrieves argument value from current argument string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Current argument value to parse |
| `message` | [`Message`](Message.md) | Message that invoked the command |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/argument.ts:46](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/argument.ts#L46)
