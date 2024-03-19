const {Client , Partials,GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, AttachmentBuilder,PermissionsBitField,Events,StringSelectMenuBuilder,StringSelectMenuOptionBuilder, ChannelType} = require("discord.js")


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







const Passeport = new SlashCommandBuilder().setName("passeport").setDescription("Renvoyer le message de douane")
const tiket = new SlashCommandBuilder().setName("tiket").setDescription("Renvoyer le message de tiket")
const reglement = new SlashCommandBuilder().setName("reglement").setDescription("Renvoyer le message de reglement")
const {writeFile} = require("fs")

     

client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de commmande 2\n"+heur+":"+min)
client.channels.cache.get('1215295309811556454').send("Lancement du module de commmande")

client.guilds.cache.get("940975774217949234").commands.create(Passeport)
client.guilds.cache.get("940975774217949234").commands.create(tiket)
client.guilds.cache.get("940975774217949234").commands.create(reglement)



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
  
if(a[1]){}else{
    //commande
    if(interaction.commandName ==="passeport"){
        if(interaction.channel.id =="1215314138344062996"){
            interaction.reply({content :"Demande envoyé",  ephemeral: true})
            const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux de la boulangerie !").setDescription("Une fois que vous aurez renseigné votre identité sur notre intranet, veuillez demander votre accès.\n\nEn cas de non fonctionement :\nEssayer de de remplacer votre premiere lettre par la meme mais en changent entre majuscule et minuscule\n\nMerci d'attendre quelque minutes, un redémarrage a lieu tous les matins.\n\nEn cas de non-réponse excessive merci de nous envoyer un mail à l'adresse suivante:\nlincolm@Discord.gg")
 const bouton = new ButtonBuilder().setCustomId("passeport_1").setLabel("Vérifié mon identité !").setStyle(ButtonStyle.Success)
 const buton = new ActionRowBuilder().addComponents(bouton)
 interaction.guild.channels.cache.get("1215313881677828217").send({
    content : "",
    components: [buton],
    embeds : [embed]
    
 })
        }else{
            interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
        }
   }



   if(interaction.commandName ==="tiket"){
    if(interaction.channel.id =="1215314138344062996"){
        interaction.reply({content :"Demande envoyé",  ephemeral: true})
  
        const select = new StringSelectMenuBuilder()
        .setCustomId('menu_1')
        .setPlaceholder('Comment pouvons nous vous aider ?')
        .setMaxValues(1)
        .setMinValues(0)
        .addOptions(
            new StringSelectMenuOptionBuilder()
					.setLabel('CV')
					.setDescription("N'hésitez pas à déposer vos CV")
					.setValue('cv')
                    .setEmoji('1194997436754706453'),
                  
                new StringSelectMenuOptionBuilder()
                .setLabel('Professionnel')
                .setDescription("Vous êtes professionnel et souhaitez votre accès ?")
                .setValue('pro')
                .setEmoji('1194998403105558528'),
                new StringSelectMenuOptionBuilder()
					.setLabel('Question')
					.setDescription("Vous avez une question à nous poser ?")
					.setValue('question')
                    .setEmoji('1194998942497247374'),
                    new StringSelectMenuOptionBuilder()
					.setLabel('Plainte')
					.setDescription("Vous avez un problème avec un de nos employé")
					.setValue('plainte')
                    .setEmoji('1194999432169652375'),
            
          
       
          
        );

        const select2 = new ActionRowBuilder()
			.addComponents(select);
        interaction.guild.channels.cache.get("944657892966039643").send({
            content : "",
            components: [select2]
            
         })
    }else{
        interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
    }
}

    if(interaction.commandName==="reglement"){
        if(interaction.channel.id =="1215314138344062996"){
            interaction.reply({content :"Demande envoyé",  ephemeral: true})
            const embed = new EmbedBuilder()
            .setTitle("Réglement HRP de la boulangerie !")
            .setURL('https://docs.google.com/spreadsheets/d/1OD4s3wqedMYuLrN0trKW2dX42DbpZwW_Xq_8ZV2uQys/edit?usp=sharing')
            .addFields(
                { name:"Charte d'utilisation discord :", value: "https://discord.com/guidelines", setURL : "https://discord.com/guidelines" },
                { name:"Conditions d'utilisation discord :", value: "https://discord.com/terms", setURL : "https://discord.com/terms" },
            
            )
            
            
            
            
          
            interaction.guild.channels.cache.get("944649487622737921").send({
              
                embeds : [embed]
                
             })
             const embed2 = new EmbedBuilder().setTitle("Réglement interrieur de la boulangerie !").setDescription("**1: Le respect entre les employés sont de mise**\nNous vous demendons donc de bien vouloir laisser vos different au portail\n\n**2: Mettre la tenue d'entreprise pour le travail et avoir le visage bien visible et OBLIGATOIRE !**\nVous pouvez porter un cuir, un bandana ou autre du moment que cela ne genére pas de guerre au sein de l'entreprise\n\n**3: Les frigos sont remplis régulièrement servez-vous raisonnablement**\nSi vous voyer une couleur ou une odeur sur les nutriments, nous preferons que vous taper dedans que les perdre")
            interaction.guild.channels.cache.get("1215326711323828254").send({
              
                embeds : [embed2]
                
             })
        }else{
            interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
        }
    }

}
})









client.login("MTIxNTI5NDA3Nzg0MzY2OTAzMg.GDzvtp.kr3vN2-QttzWzXlfuDzEEBg70iXmuXJGGoOpjw")