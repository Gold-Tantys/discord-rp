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











client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de ticket\n"+heur+":"+min)
client.channels.cache.get('1215295309811556454').send("Lancement du module de ticket")

})

client.on("interactionCreate",async interaction =>{
if(interaction.user.bot)return
   //(await interaction.guild.commands.fetch(interaction.commandId)).delete()
    var a = ""+interaction.customId
    a = a.split("_")
  
if(a[1]){



   if(interaction.customId == "delete_1"){

interaction.channel.delete()

   }
   if(interaction.customId == "menu_1"){

    const bouton = new ButtonBuilder().setCustomId("delete_1").setLabel("Supprimer ma demande").setStyle(ButtonStyle.Danger)
    const buton = new ActionRowBuilder().addComponents(bouton)

   if(interaction.values[0] ==="cv"){
    

    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux de la boulangerie !").setDescription("Il n'est aucunement util d'appeler un responsable, cela ne ferais que freiner ta candidature\n\nToute notre équipe te souhaite de la rejoindre !")

    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "cv-"+interaction.user.id,
      parent:'1215318960686374932',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
        {
			id: "944646139964170242",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({embeds : [embed],   components: [buton]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
    })

 


   }
   if(interaction.values[0] ==="pro"){
    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux de la boulangerie !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous communiquer le nom de votre entreprise")


    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "Demande-Proffesionnel",
      parent:'1215319178349776927',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
        {
			id: "944646139964170242",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch =>{
ch.send({embeds : [embed]})
interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
   
    })

   

   }
   if(interaction.values[0] ==="question"){
    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux de la boulangeire !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous posé votre question")



    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "Question",
      parent:'1215319628016914443',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
        {
			id: "944646322227662889",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
        {
			id: "944646139964170242",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({  components: [buton],embeds : [embed]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
    })

 


   }
   if(interaction.values[0] ==="plainte"){
    

    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux de la boulangerie !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous communiquer le probleme don vous avez fait fasse.")

    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "plainte-"+interaction.user.id,
      parent:'1215319835022589994',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
        {
			id: "944646139964170242",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({  components: [buton],embeds : [embed]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
})

 


   }

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










client.login("MTIxNTI5NDA3Nzg0MzY2OTAzMg.GDzvtp.kr3vN2-QttzWzXlfuDzEEBg70iXmuXJGGoOpjw")