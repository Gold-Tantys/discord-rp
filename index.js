const {Client , Partials,GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, AttachmentBuilder,PermissionsBitField,Events,StringSelectMenuBuilder,StringSelectMenuOptionBuilder, ChannelType} = require("discord.js")
const internal = require("stream")

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildEmojisAndStickers

    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
})

const client2 = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildEmojisAndStickers

    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
})




client.on("ready",async t=>{
console.log(client.user.username +" opérationnel")
client.channels.cache.get('1194778960656081031').send("Maintenance en cour")
client.channels.cache.get('1194778960656081031').send("rédemarage de services")

})

client2.on("ready",async t=>{
    console.log(client2.user.username +" opérationnel")
    client2.channels.cache.get('1215295309811556454').send("Maintenance en cour")
    client2.channels.cache.get('1215295309811556454').send("rédemarage de services")
    
    })


client.on("messageCreate", msg=>{
    if(msg.author.id === client.user.id){
        if(msg.content === "rédemarage de services"){
            client.channels.fetch.apply.call()
        }
    }
})
client2.on("messageCreate", msg=>{
    if(msg.author.id === client2.user.id){
        if(msg.content === "rédemarage de services"){
            client2.channels.fetch.apply.call()
        }
    }
})





client.login("MTE5NDk4OTU0MDI2NDM4MjU1NA.G1_7Za.tAmMMD7DYtEscQhGtLJjJnC-gRie10HL-SlseI")
client2.login("MTIxNTI5NDA3Nzg0MzY2OTAzMg.GDzvtp.kr3vN2-QttzWzXlfuDzEEBg70iXmuXJGGoOpjw")