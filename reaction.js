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





const re = require("./react.json");


client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de réaction\n"+heur+":"+min)
client.channels.cache.get('1194778960656081031').send("Lancement du module de réaction")


})




client.on("messageReactionAdd",async (react,user) =>{
    if(user.bot)return
    if(react.message.channel.id ==="1194778958827376818"){
    if(re[react.message.id+"_"+user.id]==="true"){
    react.users.remove(user.id)
    }else{
        re[react.message.id+"_"+user.id]="true"
        writeFile("./react.json",JSON.stringify(re),error=>{
            if(error === null){}else{
console.log("inscription react: " +react.message.id+"_"+user.id + "echoué" )
            }})

    }
    

    }
})

client.on("messageCreate", msg=>{
    if(msg.author.id === client.user.id){
        if(msg.content === "rédemarage de services"){
            client.channels.fetch.apply.call()
        }
    }
})




client.login("MTE5NDk4OTU0MDI2NDM4MjU1NA.G1_7Za.tAmMMD7DYtEscQhGtLJjJnC-gRie10HL-SlseI")