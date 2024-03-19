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



const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 100;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 4150);

    // Return the result to use in the actual canvas
    return context.font;
};

const applyText2 = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 1000;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 3750);

    // Return the result to use in the actual canvas
    return context.font;
};

const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');


client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module d'arrivé\n"+heur+":"+min)
client.channels.cache.get('1215295309811556454').send("Lancement du module d'arrivé")

})

client.on("messageCreate", msg=>{
    if(msg.author.id === client.user.id){
        if(msg.content === "rédemarage de services"){
            client.channels.fetch.apply.call()
        }
    }
})


client.on("interactionCreate",async interaction =>{
if(interaction.user.bot)return
   //(await interaction.guild.commands.fetch(interaction.commandId)).delete()
    var a = ""+interaction.customId
    a = a.split("_")
  
if(a[1]){


   if(interaction.customId == "passeport_1"){
    if(interaction.guild.members.cache.get(interaction.user.id).roles.cache.get("944646506785407076")){
        interaction.reply({content :"Votre agréditation vous as déja été attribué",  ephemeral: true})
    }else{

var name = interaction.user.username
if(interaction.user.globalName)name = interaction.user.globalName
if(interaction.guild.members.cache.get(interaction.user.id).nickname)name = interaction.guild.members.cache.get(interaction.user.id).nickname

var name2 =""+name
var name3= name2.split(" ")
if(name3[1]){

interaction.reply({content :"Validation en cour",  ephemeral: true})
   



   
const canvas = Canvas.createCanvas(5530, 2410);
const context = canvas.getContext('2d');
const background = await Canvas.loadImage('./arriver.png');
await	context.drawImage(background, 0, 0, canvas.width, canvas.height);

context.font = applyText(canvas,name2);
context.fillStyle = '#ffffff';
context.fillText(name2,4150,850)


context.font = applyText2(canvas,"La Boulangerie");
context.fillStyle = '#ffffff';
context.fillText("La Boulangerie",1790,1075)

context.font = "300px"
context.fillStyle = '#ffffff';
context.fillText("Bienvenue",1790,1580)


context.font = '20px Arial';  



const background2 = await Canvas.loadImage('./boul.png');

context.beginPath();
context.arc(1110, 1350, 500, 0, Math.PI * 2, true);
context.closePath();
context.drawImage(background2, 610, 850, 1000, 1000);



const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
const avatar = await Canvas.loadImage(await body.arrayBuffer());
context.beginPath();
context.arc(4722, 1455, 375, 0, Math.PI * 2, true);
context.closePath();
context.clip();
context.drawImage(avatar, 4347, 1080, 750, 750);


const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });



	interaction.guild.channels.cache.get("1215318218328248340").send({ files: [attachment] })



   interaction.guild.members.cache.get(interaction.user.id).roles.add("944646506785407076")
}else{
    interaction.reply({content :"Merci de vous renomer",  ephemeral: true})
}

        
    }
   }
  
 
   


}
})








client.login("MTIxNTI5NDA3Nzg0MzY2OTAzMg.GDzvtp.kr3vN2-QttzWzXlfuDzEEBg70iXmuXJGGoOpjw")