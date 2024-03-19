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



const {writeFile} = require("fs")
const sond = require("./sondage.json");


const Passeport = new SlashCommandBuilder().setName("passeport").setDescription("Renvoyer le message de douane")
const tiket = new SlashCommandBuilder().setName("tiket").setDescription("Renvoyer le message de tiket")
const reglement = new SlashCommandBuilder().setName("reglement").setDescription("Renvoyer le message de reglement")


        const sondage = new SlashCommandBuilder().setName("sondage").setDescription("lancer un sodage")
        .addNumberOption(options=>options.setName("cb").setDescription("combien de propostion vouler vous (2 a 9)").setRequired(true))
      .addStringOption(options=>options.setName("sondage").setDescription("quel est le sondage (sans les explication)").setRequired(true))
      const choix = new SlashCommandBuilder().setName("choix").setDescription("lancer un sodage")
        .addNumberOption(options=>options.setName("numero").setDescription("quel reponse est a modifier ?").setRequired(true))
        .addStringOption(options=>options.setName("reponse").setDescription("quel est le réponse souhaiter ?").setRequired(true))

client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de commnde\n"+heur+":"+min)
client.channels.cache.get('1194778960656081031').send("Lancement du module de commnde")

client.guilds.cache.get("1194778958349221938").commands.create(Passeport)
client.guilds.cache.get("1194778958349221938").commands.create(tiket)
client.guilds.cache.get("1194778958349221938").commands.create(reglement)

client.guilds.cache.get("1194778958349221938").commands.create(sondage)
client.guilds.cache.get("1194778958349221938").commands.create(choix)


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
        if(interaction.channel.id =="1194778960656081027"){
            interaction.reply({content :"Demande envoyé",  ephemeral: true})
            const embed = new EmbedBuilder().setTitle("Bienvenue dans les bureaux du Chicken !").setDescription("Une fois que vous aurez renseigné votre identité sur notre intranet, veuillez demander votre accès.\n\nEn cas de non fonctionement :\nEssayer de de remplacer votre premiere lettre par la meme mais en changent entre majuscule et minuscule\n\nMerci d'attendre quelque minutes, un redémarrage a lieu tous les matins.\n\nEn cas de non-réponse excessive merci de nous envoyer un mail à l'adresse suivante:\nlincolm@Discord.gg")
 const bouton = new ButtonBuilder().setCustomId("passeport_1").setLabel("Vérifié mon identité !").setStyle(ButtonStyle.Success)
 const buton = new ActionRowBuilder().addComponents(bouton)
 interaction.guild.channels.cache.get("1194778958827376814").send({
    content : "",
    components: [buton],
    embeds : [embed]
    
 })
        }else{
            interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
        }
   }
   if(interaction.commandName==="sondage"){
   if(interaction.guild.members.cache.get(interaction.user.id).permissions.has("Administrator")){

   
    if(interaction.options.getNumber("cb")<2){
        interaction.reply({content : "Merci d'indiquer  entre 2 et 9 proposition",  ephemeral: true})
    }else{
        if(interaction.options.getNumber("cb")>9){
            interaction.reply({content : "Merci d'indiquer  entre 2 et 9 proposition",  ephemeral: true})
        }else{
            var sondate =interaction.options.getString("sondage")

          if(interaction.options.getNumber("cb") === 2){

           var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                name:"choix 1:",value:"null"
            },{
                name:"choix 2:",value:"null"
            }
            )
            sond["choix"]= interaction.options.getNumber("cb")
            sond["explication"]= sondate
            sond["choix1"]="null"
            sond["choix2"]="null"
            sond["choix3"]="nan"
            sond["choix4"]="nan"
            sond["choix5"]="nan"
            sond["choix6"]="nan"
            sond["choix7"]="nan"
            sond["choix8"]="nan"
            sond["choix9"]="nan"
   
   writeFile("./sondage.json",JSON.stringify(sond),error=>{
       if(error === null){
           
           interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /choix 1",  ephemeral: true})
       }else{
           interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
           console.log(error)
       }
   
   })
        }
        if(interaction.options.getNumber("cb") === 3){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="nan"
             sond["choix5"]="nan"
             sond["choix6"]="nan"
             sond["choix7"]="nan"
             sond["choix8"]="nan"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }
         if(interaction.options.getNumber("cb") === 4){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="nan"
             sond["choix6"]="nan"
             sond["choix7"]="nan"
             sond["choix8"]="nan"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }

         if(interaction.options.getNumber("cb") === 5){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             },{
                name:"choix 5:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="null"
             sond["choix6"]="nan"
             sond["choix7"]="nan"
             sond["choix8"]="nan"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }
         if(interaction.options.getNumber("cb") === 6){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             },{
                name:"choix 5:",value:"null"
             },{
                name:"choix 6:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="null"
             sond["choix6"]="null"
             sond["choix7"]="nan"
             sond["choix8"]="nan"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }
         if(interaction.options.getNumber("cb") === 7){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             },{
                name:"choix 5:",value:"null"
             },{
                name:"choix 6:",value:"null"
             },{
                name:"choix 7:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="null"
             sond["choix6"]="null"
             sond["choix7"]="null"
             sond["choix8"]="nan"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }
         if(interaction.options.getNumber("cb") === 8){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             },{
                name:"choix 5:",value:"null"
             },{
                name:"choix 6:",value:"null"
             },{
                name:"choix 7:",value:"null"
             },{
                name:"choix 8:",value:"null"
             }
             )
             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="null"
             sond["choix6"]="null"
             sond["choix7"]="null"
             sond["choix8"]="null"
             sond["choix9"]="nan"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })
         }
         if(interaction.options.getNumber("cb") === 9){

            var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
                 name:"choix 1:",value:"null"
             },{
                 name:"choix 2:",value:"null"
             },{
                name:"choix 3:",value:"null"
             },{
                name:"choix 4:",value:"null"
             },{
                name:"choix 5:",value:"null"
             },{
                name:"choix 6:",value:"null"
             },{
                name:"choix 7:",value:"null"
             },{
                name:"choix 8:",value:"null"
             },{
                name:"choix 9:",value:"null"
             }
             )

             sond["choix"]= interaction.options.getNumber("cb")
             sond["explication"]= sondate
             sond["choix1"]="null"
             sond["choix2"]="null"
             sond["choix3"]="null"
             sond["choix4"]="null"
             sond["choix5"]="null"
             sond["choix6"]="null"
             sond["choix7"]="null"
             sond["choix8"]="null"
             sond["choix9"]="null"
    
    writeFile("./sondage.json",JSON.stringify(sond),error=>{
        if(error === null){
            
            interaction.reply({embeds: [embed],content : "merci de continuer avec la commande /sondage 1",  ephemeral: true})
        }else{
            interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
            console.log(error)
        }
    
    })


         }







        
        }
    }




   }else{
    interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
   }
   }
   if(interaction.commandName==="choix"){
    if(interaction.guild.members.cache.get(interaction.user.id).permissions.has("Administrator")){

   
        if(interaction.options.getNumber("numero")<1){
            interaction.reply({content : "Merci d'indiquer  entre 1 et 9 proposition",  ephemeral: true})
        }else{
            if(interaction.options.getNumber("numero")>9){
                interaction.reply({content : "Merci d'indiquer  entre 1 et 9 proposition",  ephemeral: true})
            }else{
                const nb = Math.floor(interaction.options.getNumber("numero"))
                const nb2 = sond["choix"]
                if(nb>nb2){
                    interaction.reply({content : "Le sondage lancer ne possede que "+nb2+" choix possible",  ephemeral: true})
                }else{
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

                    if(nb === 1)choix1 = interaction.options.getString("reponse")
                    if(nb === 2)choix2 = interaction.options.getString("reponse")
                    if(nb === 3)choix3 = interaction.options.getString("reponse")
                    if(nb === 4)choix4 = interaction.options.getString("reponse")
                    if(nb === 5)choix5 = interaction.options.getString("reponse")
                    if(nb === 6)choix6 = interaction.options.getString("reponse")
                    if(nb === 7)choix7 = interaction.options.getString("reponse")
                    if(nb === 8)choix8 = interaction.options.getString("reponse")
                    if(nb === 9)choix9 = interaction.options.getString("reponse")

                    sond["choix1"]=choix1
                    sond["choix2"]=choix2
                    sond["choix3"]=choix3
                    sond["choix4"]=choix4
                    sond["choix5"]=choix5
                    sond["choix6"]=choix6
                    sond["choix7"]=choix7
                    sond["choix8"]=choix8
                    sond["choix9"]=choix9
           
           writeFile("./sondage.json",JSON.stringify(sond),error=>{
               if(error === null){
                   
                const bouton = new ButtonBuilder().setCustomId("sonddage_1").setLabel("Validé ce sondage").setStyle(ButtonStyle.Success)
                const buton = new ActionRowBuilder().addComponents(bouton)
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
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
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
}
if(nb2 ==2){
    var embed = new EmbedBuilder().setTitle("Sondage !").setDescription(sondate).addFields({
        name:"choix 1:",value:choix1
    },{
        name:"choix 2:",value:choix2
    }
    )
    interaction.reply({embeds: [embed],components: [buton],content : "merci de continuer avec la commande /choix ou de validé se sondage",  ephemeral: true})
}






                   
               }else{
                   interaction.reply({ content:"Un probleme est arrivé merci de recommencé, si cela persiste merci de contacter sébastian Dougal", ephemeral: true})
                   console.log(error)
               }
           
           })
                    
                }
            }
        }
    }
   }


   if(interaction.commandName ==="tiket"){
    if(interaction.channel.id =="1194778960656081027"){
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
        interaction.guild.channels.cache.get("1194778958827376816").send({
            content : "",
            components: [select2]
            
         })
    }else{
        interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
    }
}

    if(interaction.commandName==="reglement"){
        if(interaction.channel.id =="1194778960656081027"){
            interaction.reply({content :"Demande envoyé",  ephemeral: true})
            const embed = new EmbedBuilder().setTitle("Réglement interrieur du Chicken !").setDescription("**1: Le respect entre les employés sont de mise**\nNous vous demendons donc de bien vouloir laisser vos different au portail\n\n**2: Mettre la tenue d'entreprise pour le travail et avoir le visage bien visible et OBLIGATOIRE !**\nVous pouvez porter un cuir, un bandana ou autre du moment que cela ne genére pas de guerre au sein de l'entreprise\n\n**3: Les arme sont  toléré pendant le travail pour les cas suivant :**\nVous etes en danger ou un collegue de façon imédiate\nune personne inquitante ce trouve au chicken (tire en l'air) \nen cas de tire attendre l'arriver des sherrif.\n\n**4: Les frigos sont remplis régulièrement servez-vous raisonnablement**\nSi vous voyer une couleur ou une odeur sur les nutriments, nous preferons que vous taper dedans que les perdre\n\n**5: Concernant les Mules les réparations de carrosserie sont à vos frais le reste et au frais de l’entreprise**\ndes verification moteur sont faite regulierement, mais si vous rencontrer un probleme merci de nous contacter directement.\n\n**6: Les clé**\nVous avez chacun une paire de clé, seul vous et les responsable peuvent sortir votre véhicule\nLes fouriere sont a votre charge\n**LE PREMIER QUI UTILISE UN CAMION SANS CLE se veras lisensié et poursuivie au tribunal pour violantion de bien personnel et ou proffesionnel**\n\n**Si vous bloqué votre camion:**\nContacter un responsable\nContacter un mécano\nSeul les mécano on accés au camion PDG (il est bien logique qui vous donnerons les cle pour les sortir)")
            interaction.guild.channels.cache.get("1194778959318098054").send({
              
                embeds : [embed]
                
             })
        }else{
            interaction.reply({content : "Je ne peut execute cette commande ici",  ephemeral: true})
        }
    }

}
})









client.login("MTE5NDk4OTU0MDI2NDM4MjU1NA.G1_7Za.tAmMMD7DYtEscQhGtLJjJnC-gRie10HL-SlseI")