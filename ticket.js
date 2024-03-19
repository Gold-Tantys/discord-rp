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






const sond = require("./sondage.json");




client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de ticket\n"+heur+":"+min)
client.channels.cache.get('1194778960656081031').send("Lancement du module de ticket")

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
    

    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux du Chicken !").setDescription("Il n'est aucunement util d'appeler un responsable, cela ne ferais que freiner ta candidature\n\nToute notre équipe te souhaite te la rejoindre !")

    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "cv-"+interaction.user.id,
      parent:'1194778961947938837',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({embeds : [embed],   components: [buton]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
    })

 


   }
   if(interaction.values[0] ==="pro"){
    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux du Chicken !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous communiquer le nom de votre entreprise")


    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "Demande-Proffesionnel",
      parent:'1194778960656081033',
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
			id: "1194778958349221940",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch =>{
ch.send({embeds : [embed]})
interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
   
    })

   

   }
   if(interaction.values[0] ==="question"){
    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux du Chicken !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous posé votre question")



    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "Question",
      parent:'1194778961947938838',
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
			id: "1194778958349221942",
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({  components: [buton],embeds : [embed]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
    })

 


   }
   if(interaction.values[0] ==="plainte"){
    

    const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux du Chicken !").setDescription("Notre équipe vous souhaite la bienvenue, Nous essayerons d'être le plus efficace possible pour vous mais merci de bien comprendre que nous ne sommes pas des robots\nCependent, je vous invite deja a nous communiquer le probleme don vous avez fait fasse.")

    var chan = interaction.guild.channels.create({
        type: ChannelType.GuildText,
      name : "plainte-"+interaction.user.id,
      parent:'1194778961947938840',
      permissionOverwrites: [
		{
			id: interaction.guild.roles.everyone.id,
			deny: [PermissionsBitField.Flags.ViewChannel],
		},
		{
			id: interaction.user.id,
			allow: [PermissionsBitField.Flags.ViewChannel],
		},
	],
      
    }).then(ch=>{
        ch.send({  components: [buton],embeds : [embed]})
        interaction.reply({content :"Veuilliez retrouver votre demande ici: <#"+ch.id+">",  ephemeral: true})
})

 


   }

   }
   if(interaction.customId == "sonddage_1"){

    var choix1 = sond["choix1"]
    var choix2 = sond["choix2"]
    var choix3 = sond["choix3"]
    var choix4 = sond["choix4"]
    var choix5 = sond["choix5"]
    var choix6 = sond["choix6"]
    var choix7 = sond["choix7"]
    var choix8 = sond["choix8"]
    var choix9 = sond["choix9"]
    var sondate = sond["explication"]
    const nb2 = sond["choix"]


    if(nb2 ==9){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        },{
           name:"choix 5:",value:choix5
        },{
           name:"choix 6:",value:choix6
        },{
           name:"choix 7:",value:choix7
        },{
           name:"choix 8:",value:choix8
        },{
           name:"choix 9:",value:choix9
        }
        )
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
            msg.react('6️⃣');
            msg.react('7️⃣');
            msg.react('8️⃣');
            msg.react('9️⃣');
        })
    }
    if(nb2 ==8){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        },{
           name:"choix 5:",value:choix5
        },{
           name:"choix 6:",value:choix6
        },{
           name:"choix 7:",value:choix7
        },{
           name:"choix 8:",value:choix8
        }
        )
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
            msg.react('6️⃣');
            msg.react('7️⃣');
            msg.react('8️⃣');
        })
    }
    if(nb2 ==7){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        },{
           name:"choix 5:",value:choix5
        },{
           name:"choix 6:",value:choix6
        },{
           name:"choix 7:",value:choix7
        }
        )

        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
            msg.react('6️⃣');
            msg.react('7️⃣');
        })
    }
    if(nb2 ==6){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        },{
           name:"choix 5:",value:choix5
        },{
           name:"choix 6:",value:choix6
        }
        )
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
            msg.react('6️⃣');
        })
    }
    if(nb2 ==5){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        },{
           name:"choix 5:",value:choix5
        })
       
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
            msg.react('5️⃣');
        })
    }
    if(nb2 ==4){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        },{
           name:"choix 4:",value:choix4
        }
        )
        
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
            msg.react('4️⃣');
        })
    }
    if(nb2 ==3){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        },{
           name:"choix 3:",value:choix3
        }
        )
        interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
            msg.react('3️⃣');
        })
    }
    if(nb2 ==2){
        var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
            name:"choix 1:",value:choix1
        },{
            name:"choix 2:",value:choix2
        }
        )
         interaction.reply({content:"demande envoyé", ephemeral : true})
        interaction.guild.channels.cache.get('1194778958827376818').send('<@1194778958349221941>').then(msg=>{msg.delete()})
        interaction.guild.channels.cache.get('1194778958827376818').send({embeds: [embed]}).then(msg=>{
            msg.react('1️⃣');
            msg.react('2️⃣');
          
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









client.login("MTE5NDk4OTU0MDI2NDM4MjU1NA.G1_7Za.tAmMMD7DYtEscQhGtLJjJnC-gRie10HL-SlseI")