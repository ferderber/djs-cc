---
id: "SQLProvider"
title: "Class: SQLProvider"
sidebar_label: "SQLProvider"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Provider`

  ↳ **`SQLProvider`**

## Constructors

### constructor

• **new SQLProvider**(`connection`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |

#### Inherited from

Provider.constructor

#### Defined in

[src/providers/provider.ts:11](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/provider.ts#L11)

## Properties

### db

• **db**: `Connection`

#### Inherited from

Provider.db

#### Defined in

[src/providers/provider.ts:9](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/provider.ts#L9)

## Methods

### delete

▸ **delete**(`property`, `guildId`): `Promise`<`void` \| `default`\>

Removes a setting from a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Key value of the setting to be removed |
| `guildId` | `string` | Id of the guild to remove from |

#### Returns

`Promise`<`void` \| `default`\>

#### Overrides

Provider.delete

#### Defined in

[src/providers/sqlProvider.ts:44](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/sqlProvider.ts#L44)

___

### deleteAll

▸ **deleteAll**(`guildId`): `Promise`<`default`[]\>

Deletes all settings from a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild to remove from |

#### Returns

`Promise`<`default`[]\>

#### Overrides

Provider.deleteAll

#### Defined in

[src/providers/sqlProvider.ts:60](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/sqlProvider.ts#L60)

___

### get

▸ **get**(`property`, `guildId`): `Promise`<``null`` \| `string`\>

Retrieves the settings value of a property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Key value to get |
| `guildId` | `string` | Guild to retrieve the setting from |

#### Returns

`Promise`<``null`` \| `string`\>

#### Overrides

Provider.get

#### Defined in

[src/providers/sqlProvider.ts:11](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/sqlProvider.ts#L11)

___

### getAll

▸ **getAll**(`guildId`): `Promise`<`default`[]\>

Retrieves all settings for a guild

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`Promise`<`default`[]\>

#### Overrides

Provider.getAll

#### Defined in

[src/providers/sqlProvider.ts:28](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/sqlProvider.ts#L28)

___

### set

▸ **set**(`property`, `value`, `guildId`): `Promise`<`default`\>

Creates/Modifies a guild setting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Key value to set |
| `value` | `string` |  |
| `guildId` | `string` | Id of the guild to add a setting to |

#### Returns

`Promise`<`default`\>

#### Overrides

Provider.set

#### Defined in

[src/providers/sqlProvider.ts:76](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/sqlProvider.ts#L76)

___

### setup

▸ `Static` **setup**(`config`): `Promise`<`Connection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Returns

`Promise`<`Connection`\>

#### Inherited from

Provider.setup

#### Defined in

[src/providers/provider.ts:16](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/providers/provider.ts#L16)
