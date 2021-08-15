---
id: "Message"
title: "Class: Message"
sidebar_label: "Message"
sidebar_position: 0
custom_edit_url: null
---

Extended version of the discord.js Message class (overwrites Client)

## Hierarchy

- `DiscordMessage`

  ↳ **`Message`**

## Constructors

### constructor

• **new Message**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `APIMessage` |

#### Overrides

DiscordMessage.constructor

#### Defined in

[src/message.ts:10](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/message.ts#L10)

## Properties

### activity

• **activity**: ``null`` \| `MessageActivity`

#### Inherited from

DiscordMessage.activity

#### Defined in

node_modules/discord.js/typings/index.d.ts:1078

___

### applicationId

• **applicationId**: ``null`` \| `string`

#### Inherited from

DiscordMessage.applicationId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1079

___

### attachments

• **attachments**: `Collection`<`string`, `MessageAttachment`\>

#### Inherited from

DiscordMessage.attachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:1080

___

### author

• **author**: `User`

#### Inherited from

DiscordMessage.author

#### Defined in

node_modules/discord.js/typings/index.d.ts:1081

___

### channel

• `Readonly` **channel**: `TextBasedChannels`

#### Inherited from

DiscordMessage.channel

#### Defined in

node_modules/discord.js/typings/index.d.ts:1082

___

### channelId

• **channelId**: `string`

#### Inherited from

DiscordMessage.channelId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1083

___

### cleanContent

• `Readonly` **cleanContent**: `string`

#### Inherited from

DiscordMessage.cleanContent

#### Defined in

node_modules/discord.js/typings/index.d.ts:1084

___

### client

• `Readonly` **client**: [`Client`](Client.md)

#### Overrides

DiscordMessage.client

#### Defined in

[src/message.ts:9](https://github.com/matthewferderber/djs-cc/blob/672a2a0/src/message.ts#L9)

___

### components

• **components**: `MessageActionRow`[]

#### Inherited from

DiscordMessage.components

#### Defined in

node_modules/discord.js/typings/index.d.ts:1085

___

### content

• **content**: `string`

#### Inherited from

DiscordMessage.content

#### Defined in

node_modules/discord.js/typings/index.d.ts:1086

___

### createdAt

• `Readonly` **createdAt**: `Date`

#### Inherited from

DiscordMessage.createdAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:1087

___

### createdTimestamp

• **createdTimestamp**: `number`

#### Inherited from

DiscordMessage.createdTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:1088

___

### crosspostable

• `Readonly` **crosspostable**: `boolean`

#### Inherited from

DiscordMessage.crosspostable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1089

___

### deletable

• `Readonly` **deletable**: `boolean`

#### Inherited from

DiscordMessage.deletable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1090

___

### deleted

• **deleted**: `boolean`

#### Inherited from

DiscordMessage.deleted

#### Defined in

node_modules/discord.js/typings/index.d.ts:1091

___

### editable

• `Readonly` **editable**: `boolean`

#### Inherited from

DiscordMessage.editable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1092

___

### editedAt

• `Readonly` **editedAt**: ``null`` \| `Date`

#### Inherited from

DiscordMessage.editedAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:1093

___

### editedTimestamp

• **editedTimestamp**: ``null`` \| `number`

#### Inherited from

DiscordMessage.editedTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:1094

___

### embeds

• **embeds**: `MessageEmbed`[]

#### Inherited from

DiscordMessage.embeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:1095

___

### flags

• **flags**: `Readonly`<`MessageFlags`\>

#### Inherited from

DiscordMessage.flags

#### Defined in

node_modules/discord.js/typings/index.d.ts:1116

___

### groupActivityApplication

• **groupActivityApplication**: ``null`` \| `ClientApplication`

#### Inherited from

DiscordMessage.groupActivityApplication

#### Defined in

node_modules/discord.js/typings/index.d.ts:1096

___

### guild

• `Readonly` **guild**: ``null`` \| `Guild`

#### Inherited from

DiscordMessage.guild

#### Defined in

node_modules/discord.js/typings/index.d.ts:1098

___

### guildId

• **guildId**: ``null`` \| `string`

#### Inherited from

DiscordMessage.guildId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1097

___

### hasThread

• `Readonly` **hasThread**: `boolean`

#### Inherited from

DiscordMessage.hasThread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1099

___

### id

• **id**: `string`

#### Inherited from

DiscordMessage.id

#### Defined in

node_modules/discord.js/typings/index.d.ts:1100

___

### interaction

• **interaction**: ``null`` \| `MessageInteraction`

#### Inherited from

DiscordMessage.interaction

#### Defined in

node_modules/discord.js/typings/index.d.ts:1101

___

### member

• `Readonly` **member**: ``null`` \| `GuildMember`

#### Inherited from

DiscordMessage.member

#### Defined in

node_modules/discord.js/typings/index.d.ts:1102

___

### mentions

• **mentions**: `MessageMentions`

#### Inherited from

DiscordMessage.mentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1103

___

### nonce

• **nonce**: ``null`` \| `string` \| `number`

#### Inherited from

DiscordMessage.nonce

#### Defined in

node_modules/discord.js/typings/index.d.ts:1104

___

### partial

• `Readonly` **partial**: ``false``

#### Inherited from

DiscordMessage.partial

#### Defined in

node_modules/discord.js/typings/index.d.ts:1105

___

### pinnable

• `Readonly` **pinnable**: `boolean`

#### Inherited from

DiscordMessage.pinnable

#### Defined in

node_modules/discord.js/typings/index.d.ts:1106

___

### pinned

• **pinned**: `boolean`

#### Inherited from

DiscordMessage.pinned

#### Defined in

node_modules/discord.js/typings/index.d.ts:1107

___

### reactions

• **reactions**: `ReactionManager`

#### Inherited from

DiscordMessage.reactions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1108

___

### reference

• **reference**: ``null`` \| `MessageReference`

#### Inherited from

DiscordMessage.reference

#### Defined in

node_modules/discord.js/typings/index.d.ts:1117

___

### stickers

• **stickers**: `Collection`<`string`, `Sticker`\>

#### Inherited from

DiscordMessage.stickers

#### Defined in

node_modules/discord.js/typings/index.d.ts:1109

___

### system

• **system**: `boolean`

#### Inherited from

DiscordMessage.system

#### Defined in

node_modules/discord.js/typings/index.d.ts:1110

___

### thread

• `Readonly` **thread**: ``null`` \| `ThreadChannel`

#### Inherited from

DiscordMessage.thread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1111

___

### tts

• **tts**: `boolean`

#### Inherited from

DiscordMessage.tts

#### Defined in

node_modules/discord.js/typings/index.d.ts:1112

___

### type

• **type**: `MessageType`

#### Inherited from

DiscordMessage.type

#### Defined in

node_modules/discord.js/typings/index.d.ts:1113

___

### url

• `Readonly` **url**: `string`

#### Inherited from

DiscordMessage.url

#### Defined in

node_modules/discord.js/typings/index.d.ts:1114

___

### webhookId

• **webhookId**: ``null`` \| `string`

#### Inherited from

DiscordMessage.webhookId

#### Defined in

node_modules/discord.js/typings/index.d.ts:1115

## Methods

### awaitMessageComponent

▸ **awaitMessageComponent**<`T`\>(`options?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `MessageComponentInteraction`<`T`\>`MessageComponentInteraction` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AwaitMessageComponentOptions`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

DiscordMessage.awaitMessageComponent

#### Defined in

node_modules/discord.js/typings/index.d.ts:1118

___

### awaitReactions

▸ **awaitReactions**(`options?`): `Promise`<`Collection`<`string`, `MessageReaction`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AwaitReactionsOptions` |

#### Returns

`Promise`<`Collection`<`string`, `MessageReaction`\>\>

#### Inherited from

DiscordMessage.awaitReactions

#### Defined in

node_modules/discord.js/typings/index.d.ts:1121

___

### createMessageComponentCollector

▸ **createMessageComponentCollector**<`T`\>(`options?`): `InteractionCollector`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `MessageComponentInteraction`<`T`\>`MessageComponentInteraction` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InteractionCollectorOptions`<`T`\> |

#### Returns

`InteractionCollector`<`T`\>

#### Inherited from

DiscordMessage.createMessageComponentCollector

#### Defined in

node_modules/discord.js/typings/index.d.ts:1123

___

### createReactionCollector

▸ **createReactionCollector**(`options?`): `ReactionCollector`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ReactionCollectorOptions` |

#### Returns

`ReactionCollector`

#### Inherited from

DiscordMessage.createReactionCollector

#### Defined in

node_modules/discord.js/typings/index.d.ts:1122

___

### crosspost

▸ **crosspost**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.crosspost

#### Defined in

node_modules/discord.js/typings/index.d.ts:1131

___

### delete

▸ **delete**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.delete

#### Defined in

node_modules/discord.js/typings/index.d.ts:1126

___

### edit

▸ **edit**(`content`): `Promise`<`Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| `MessageEditOptions` \| `MessagePayload` |

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.edit

#### Defined in

node_modules/discord.js/typings/index.d.ts:1127

___

### equals

▸ **equals**(`message`, `rawData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message` |
| `rawData` | `unknown` |

#### Returns

`boolean`

#### Inherited from

DiscordMessage.equals

#### Defined in

node_modules/discord.js/typings/index.d.ts:1128

___

### fetch

▸ **fetch**(`force?`): `Promise`<`Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.fetch

#### Defined in

node_modules/discord.js/typings/index.d.ts:1132

___

### fetchReference

▸ **fetchReference**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.fetchReference

#### Defined in

node_modules/discord.js/typings/index.d.ts:1129

___

### fetchWebhook

▸ **fetchWebhook**(): `Promise`<`Webhook`\>

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

DiscordMessage.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:1130

___

### pin

▸ **pin**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.pin

#### Defined in

node_modules/discord.js/typings/index.d.ts:1133

___

### react

▸ **react**(`emoji`): `Promise`<`MessageReaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `EmojiIdentifierResolvable` |

#### Returns

`Promise`<`MessageReaction`\>

#### Inherited from

DiscordMessage.react

#### Defined in

node_modules/discord.js/typings/index.d.ts:1134

___

### removeAttachments

▸ **removeAttachments**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.removeAttachments

#### Defined in

node_modules/discord.js/typings/index.d.ts:1135

___

### reply

▸ **reply**(`options`): `Promise`<`Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `MessagePayload` \| `ReplyMessageOptions` |

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.reply

#### Defined in

node_modules/discord.js/typings/index.d.ts:1136

___

### startThread

▸ **startThread**(`options`): `Promise`<`ThreadChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `StartThreadOptions` |

#### Returns

`Promise`<`ThreadChannel`\>

#### Inherited from

DiscordMessage.startThread

#### Defined in

node_modules/discord.js/typings/index.d.ts:1137

___

### suppressEmbeds

▸ **suppressEmbeds**(`suppress?`): `Promise`<`Message`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `suppress?` | `boolean` |

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.suppressEmbeds

#### Defined in

node_modules/discord.js/typings/index.d.ts:1138

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

DiscordMessage.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:1139

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

DiscordMessage.toString

#### Defined in

node_modules/discord.js/typings/index.d.ts:1140

___

### unpin

▸ **unpin**(): `Promise`<`Message`\>

#### Returns

`Promise`<`Message`\>

#### Inherited from

DiscordMessage.unpin

#### Defined in

node_modules/discord.js/typings/index.d.ts:1141

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

DiscordMessage.valueOf

#### Defined in

node_modules/discord.js/typings/index.d.ts:228
