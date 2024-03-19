const {Client , Partials,GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, AttachmentBuilder,PermissionsBitField,Events,StringSelectMenuBuilder,StringSelectMenuOptionBuilder, ChannelType} = require("discord.js")
const internal = require("stream")
const express = require("express")
const {google}= require("googleapis")
const app= express()

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
const prime = new SlashCommandBuilder().setName("prime").setDescription("Vous montre votre prime actuelle")
const clear = new SlashCommandBuilder().setName("clear").setDescription("Netoyer les paye")
const connect = new SlashCommandBuilder().setName("connect").setDescription("Vous connecte au salaire du chicken")
const run = new SlashCommandBuilder().setName("run").setDescription("déclarer un Run")
.addNumberOption(options=>options.setName("gain").setDescription("combien de d'argent avez vous touché").setRequired(true))
.addNumberOption(options=>options.setName("poulet").setDescription("combien de poulet avez vous vendu ?").setRequired(true))
const vente = new SlashCommandBuilder().setName("vente").setDescription("déclarer une vente")
.addNumberOption(options=>options.setName("gain").setDescription("combien de d'argent avez vous touché").setRequired(true))
.addNumberOption(options=>options.setName("poulet").setDescription("combien de poulet avez vous vendu ?").setRequired(true))



client.on("ready",async t=>{
    var date1 = new Date()
    var heur = date1.getHours()
    var min = date1.getMinutes()
console.log("Lancement du module de compta\n"+heur+":"+min)
client.channels.cache.get('1194778960656081031').send("Lancement du module de compta")


client.guilds.cache.get("1194778958349221938").commands.create(clear)
client.guilds.cache.get("1194778958349221938").commands.create(run)
client.guilds.cache.get("1194778958349221938").commands.create(vente)
client.guilds.cache.get("1194778958349221938").commands.create(connect)
client.guilds.cache.get("1194778958349221938").commands.create(prime)
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
  if(interaction.commandName==="connect"){
    if(interaction.channel.parentId ==="1194778959318098059"){
        
const auth = new google.auth.GoogleAuth({
    keyFile:"credential.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const shet = await auth.getClient()
const googleSheets = google.sheets({version: "v4", auth: shet})
const spreadsheetId = "1mbPmlrEGt0GwLzt5z819__Zk2oXuNUnnL8uzErSkJCI"
const getRowsb = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "bdd!B1:B15"

})
const b = getRowsb.data.values
var b1 = b[0].join("")
var b2 = b[1].join("")
var b3 = b[2].join("")
var b4 = b[3].join("")
var b5 = b[4].join("")
var b6 = b[5].join("")
var b7 = b[6].join("")
var b8 = b[7].join("")
var b9 = b[8].join("")
var b10 = b[9].join("")
var b11 = b[10].join("")
var b12 = b[11].join("")
var b13 = b[12].join("")
var b14 = b[13].join("")
var b15 = b[14].join("")
if(interaction.channelId === b1){
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range:"bdd!D1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values : [[
                ""+interaction.user.id
            ]]
        }
    })
    await interaction.reply("connect réalisé !")
}else{
    if(interaction.channelId === b2){
        await googleSheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range:"bdd!D2",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.user.id
                ]]
            }
        })
        await interaction.reply("connect réalisé !")
    }else{
        if(interaction.channelId === b3){
            await googleSheets.spreadsheets.values.update({
                auth,
                spreadsheetId,
                range:"bdd!D3",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values : [[
                        ""+interaction.user.id
                    ]]
                }
            })
            await interaction.reply("connect réalisé !")
        }else{
            if(interaction.channelId === b4){
                await googleSheets.spreadsheets.values.update({
                    auth,
                    spreadsheetId,
                    range:"bdd!D4",
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values : [[
                            ""+interaction.user.id
                        ]]
                    }
                })
                await interaction.reply("connect réalisé !")
            }else{
                if(interaction.channelId === b5){
                    await googleSheets.spreadsheets.values.update({
                        auth,
                        spreadsheetId,
                        range:"bdd!D5",
                        valueInputOption: "USER_ENTERED",
                        resource: {
                            values : [[
                                ""+interaction.user.id
                            ]]
                        }
                    })
                    await interaction.reply("connect réalisé !")
                }else{
                    if(interaction.channelId === b6){
                        await googleSheets.spreadsheets.values.update({
                            auth,
                            spreadsheetId,
                            range:"bdd!D6",
                            valueInputOption: "USER_ENTERED",
                            resource: {
                                values : [[
                                    ""+interaction.user.id
                                ]]
                            }
                        })
                        await interaction.reply("connect réalisé !")
                    }else{
                        if(interaction.channelId === b7){
                            await googleSheets.spreadsheets.values.update({
                                auth,
                                spreadsheetId,
                                range:"bdd!D7",
                                valueInputOption: "USER_ENTERED",
                                resource: {
                                    values : [[
                                        ""+interaction.user.id
                                    ]]
                                }
                            })
                            await interaction.reply("connect réalisé !")
                        }else{
                            if(interaction.channelId === b8){
                                await googleSheets.spreadsheets.values.update({
                                    auth,
                                    spreadsheetId,
                                    range:"bdd!D8",
                                    valueInputOption: "USER_ENTERED",
                                    resource: {
                                        values : [[
                                            ""+interaction.user.id
                                        ]]
                                    }
                                })
                                await interaction.reply("connect réalisé !")
                            }else{
                                if(interaction.channelId === b9){
                                    await googleSheets.spreadsheets.values.update({
                                        auth,
                                        spreadsheetId,
                                        range:"bdd!D9",
                                        valueInputOption: "USER_ENTERED",
                                        resource: {
                                            values : [[
                                                ""+interaction.user.id
                                            ]]
                                        }
                                    })
                                    await interaction.reply("connect réalisé !")
                                }else{
                                    if(interaction.channelId === b10){
                                        await googleSheets.spreadsheets.values.update({
                                            auth,
                                            spreadsheetId,
                                            range:"bdd!D10",
                                            valueInputOption: "USER_ENTERED",
                                            resource: {
                                                values : [[
                                                    ""+interaction.user.id
                                                ]]
                                            }
                                        })
                                        await interaction.reply("connect réalisé !")
                                    }else{
                                        if(interaction.channelId === b11){
                                            await googleSheets.spreadsheets.values.update({
                                                auth,
                                                spreadsheetId,
                                                range:"bdd!D11",
                                                valueInputOption: "USER_ENTERED",
                                                resource: {
                                                    values : [[
                                                        ""+interaction.user.id
                                                    ]]
                                                }
                                            })
                                            await interaction.reply("connect réalisé !")
                                        }else{
                                            if(interaction.channelId === b12){
                                                await googleSheets.spreadsheets.values.update({
                                                    auth,
                                                    spreadsheetId,
                                                    range:"bdd!D12",
                                                    valueInputOption: "USER_ENTERED",
                                                    resource: {
                                                        values : [[
                                                            ""+interaction.user.id
                                                        ]]
                                                    }
                                                })
                                                await interaction.reply("connect réalisé !")
                                            }else{
                                                if(interaction.channelId === b13){
                                                    await googleSheets.spreadsheets.values.update({
                                                        auth,
                                                        spreadsheetId,
                                                        range:"bdd!D13",
                                                        valueInputOption: "USER_ENTERED",
                                                        resource: {
                                                            values : [[
                                                                ""+interaction.user.id
                                                            ]]
                                                        }
                                                    })
                                                    await interaction.reply("connect réalisé !")
                                                }else{
                                                    if(interaction.channelId === b14){
                                                        await googleSheets.spreadsheets.values.update({
                                                            auth,
                                                            spreadsheetId,
                                                            range:"bdd!D14",
                                                            valueInputOption: "USER_ENTERED",
                                                            resource: {
                                                                values : [[
                                                                    ""+interaction.user.id
                                                                ]]
                                                            }
                                                        })
                                                        await interaction.reply("connect réalisé !")
                                                    }else{
                                                        if(interaction.channelId === b15){
                                                            await googleSheets.spreadsheets.values.update({
                                                                auth,
                                                                spreadsheetId,
                                                                range:"bdd!D15",
                                                                valueInputOption: "USER_ENTERED",
                                                                resource: {
                                                                    values : [[
                                                                        ""+interaction.user.id
                                                                    ]]
                                                                }
                                                            })
                                                            await interaction.reply("connect réalisé !")
                                                        }else{
                                                            interaction.channel.send("<@!698136779689295912> erreur connect")
                                                        }   
                                                    }   
                                                }   
                                            }   
                                        }   
                                    }   
                                }   
                            }   
                        }   
                    }   
                }   
            }   
        }    
    }

}

}else{
    interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
   }
  }
   if(interaction.commandName==="run"){
    if(interaction.channel.parentId ==="1194778959318098059"){

       
var poulet = Math.floor(interaction.options.getNumber("poulet"))
var gain =interaction.options.getNumber("gain")
var pour = Math.floor(poulet/2)
var pourcentage = Math.floor(gain/pour)
var a = 0xFF0000
if(pourcentage === NaN)var a = 0xFF0000 
if(pourcentage <11)var a = 0x008000
if(pourcentage>11) var a = 0xFF8000
if(pourcentage >12)var a =0xFF0000
if(gain <1)var a =0xFF0000


        const embed = new EmbedBuilder().setTitle("Déclaration de run").setColor(a).addFields(
            { name: 'déclarant:', value: interaction.channel.name , inline: true},
        ).addFields(
            { name: '\u200B', value: '\u200B' }, 
            ).addFields(
           { name: 'Nombre de poulet:', value: ""+poulet, inline: false }, 
            ).addFields(
           { name: "Nombre d'argent touché:", value: ""+gain, inline: false }, 
             ).addFields(
            { name: "Argent moyen par transaction", value: ""+pourcentage, inline: false },
        )

interaction.reply("réponse envoyé 1/3 !")
interaction.guild.channels.cache.get("1209762200324153394").send({embeds : [embed]})













const auth = new google.auth.GoogleAuth({
    keyFile:"credential.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const shet = await auth.getClient()
const googleSheets = google.sheets({version: "v4", auth: shet})
const spreadsheetId = "1mbPmlrEGt0GwLzt5z819__Zk2oXuNUnnL8uzErSkJCI"
const getRowsb = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "bdd!B1:B15"

})
const b = getRowsb.data.values
var b1 = b[0].join("")
var b2 = b[1].join("")
var b3 = b[2].join("")
var b4 = b[3].join("")
var b5 = b[4].join("")
var b6 = b[5].join("")
var b7 = b[6].join("")
var b8 = b[7].join("")
var b9 = b[8].join("")
var b10 = b[9].join("")
var b11 = b[10].join("")
var b12 = b[11].join("")
var b13 = b[12].join("")
var b14 = b[13].join("")
var b15 = b[14].join("")

const getRowsc = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "bdd!C1:C15"

})
const c = getRowsc.data.values
const c1 = c[0].join("")
const c2 = c[1].join("")
const c3 = c[2].join("")
const c4 = c[3].join("")
const c5 = c[4].join("")
const c6 = c[5].join("")
const c7 = c[6].join("")
const c8 = c[7].join("")
const c9 = c[8].join("")
const c10 = c[9].join("")
const c11 = c[10].join("")
const c12 = c[11].join("")
const c13 = c[12].join("")
const c14 = c[13].join("")
const c15 = c[14].join("")

if(interaction.channelId === b1){
    if(interaction.channel.name === c1){
        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")




    }else{
        await googleSheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range:"bdd!C1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name
                ]]
            }
        })
        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
    }
   
}else{
    if(interaction.channelId === b2){
        if(interaction.channel.name === c2){
            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
        }else{
            await googleSheets.spreadsheets.values.update({
                auth,
                spreadsheetId,
                range:"bdd!C2",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values : [[
                        ""+interaction.channel.name
                    ]]
                }
            })
            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
        }
    }else{
        if(interaction.channelId === b3){
            if(interaction.channel.name === c3){
                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
            }else{
                await googleSheets.spreadsheets.values.update({
                    auth,
                    spreadsheetId,
                    range:"bdd!C3",
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values : [[
                            ""+interaction.channel.name
                        ]]
                    }
                })
                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
            }
        }else{
            if(interaction.channelId === b4){
                if(interaction.channel.name === c4){
                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                }else{
                    await googleSheets.spreadsheets.values.update({
                        auth,
                        spreadsheetId,
                        range:"bdd!C4",
                        valueInputOption: "USER_ENTERED",
                        resource: {
                            values : [[
                                ""+interaction.channel.name
                            ]]
                        }
                    })
                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                }
            }else{
                if(interaction.channelId === b5){
                    if(interaction.channel.name === c5){
                        
                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                    }else{
                        
                        await googleSheets.spreadsheets.values.update({
                            auth,
                            spreadsheetId,
                            range:"bdd!C5",
                            valueInputOption: "USER_ENTERED",
                            resource: {
                                values : [[
                                    interaction.channel.name
                                ]]
                            }
                        })
                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                    }
                }else{
                    if(interaction.channelId === b6){
                        if(interaction.channel.name === c6){
                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                        }else{
                            await googleSheets.spreadsheets.values.update({
                                auth,
                                spreadsheetId,
                                range:"bdd!C6",
                                valueInputOption: "USER_ENTERED",
                                resource: {
                                    values : [[
                                        ""+interaction.channel.name
                                    ]]
                                }
                            })
                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                        }
                    }else{
                        if(interaction.channelId === b7){
                            if(interaction.channel.name === c7){
                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                            }else{
                                await googleSheets.spreadsheets.values.update({
                                    auth,
                                    spreadsheetId,
                                    range:"bdd!C7",
                                    valueInputOption: "USER_ENTERED",
                                    resource: {
                                        values : [[
                                            ""+interaction.channel.name
                                        ]]
                                    }
                                })
                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                            }
                        }else{
                            if(interaction.channelId === b8){
                                if(interaction.channel.name === c8){
                                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                }else{
                                    await googleSheets.spreadsheets.values.update({
                                        auth,
                                        spreadsheetId,
                                        range:"bdd!C8",
                                        valueInputOption: "USER_ENTERED",
                                        resource: {
                                            values : [[
                                                ""+interaction.channel.name
                                            ]]
                                        }
                                    })
                                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                }
                            }else{
                                if(interaction.channelId === b9){
                                    if(interaction.channel.name === c9){
                                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                    }else{
                                        await googleSheets.spreadsheets.values.update({
                                            auth,
                                            spreadsheetId,
                                            range:"bdd!C9",
                                            valueInputOption: "USER_ENTERED",
                                            resource: {
                                                values : [[
                                                    ""+interaction.channel.name
                                                ]]
                                            }
                                        })
                                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                    }
                                }else{
                                    if(interaction.channelId === b10){
                                        if(interaction.channel.name === c10){
                                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                        }else{
                                            await googleSheets.spreadsheets.values.update({
                                                auth,
                                                spreadsheetId,
                                                range:"bdd!C10",
                                                valueInputOption: "USER_ENTERED",
                                                resource: {
                                                    values : [[
                                                        ""+interaction.channel.name
                                                    ]]
                                                }
                                            })
                                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                        }
                                    }else{
                                        if(interaction.channelId === b11){
                                            if(interaction.channel.name === c11){
                                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                            }else{
                                                await googleSheets.spreadsheets.values.update({
                                                    auth,
                                                    spreadsheetId,
                                                    range:"bdd!C11",
                                                    valueInputOption: "USER_ENTERED",
                                                    resource: {
                                                        values : [[
                                                            ""+interaction.channel.name
                                                        ]]
                                                    }
                                                })
                                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                            }
                                        }else{
                                            if(interaction.channelId === b12){
                                                if(interaction.channel.name === c12){
                                                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                }else{
                                                    await googleSheets.spreadsheets.values.update({
                                                        auth,
                                                        spreadsheetId,
                                                        range:"bdd!C12",
                                                        valueInputOption: "USER_ENTERED",
                                                        resource: {
                                                            values : [[
                                                                ""+interaction.channel.name
                                                            ]]
                                                        }
                                                    })
                                                    await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                }
                                            }else{
                                                if(interaction.channelId === b13){
                                                    if(interaction.channel.name === c13){
                                                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                    }else{
                                                        await googleSheets.spreadsheets.values.update({
                                                            auth,
                                                            spreadsheetId,
                                                            range:"bdd!C13",
                                                            valueInputOption: "USER_ENTERED",
                                                            resource: {
                                                                values : [[
                                                                    ""+interaction.channel.name
                                                                ]]
                                                            }
                                                        })
                                                        await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                    }
                                                }else{
                                                    if(interaction.channelId === b14){
                                                        if(interaction.channel.name === c14){
                                                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                        }else{
                                                            await googleSheets.spreadsheets.values.update({
                                                                auth,
                                                                spreadsheetId,
                                                                range:"bdd!C14",
                                                                valueInputOption: "USER_ENTERED",
                                                                resource: {
                                                                    values : [[
                                                                        ""+interaction.channel.name
                                                                    ]]
                                                                }
                                                            })
                                                            await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                        }
                                                    }else{
                                                        if(interaction.channelId === b15){
                                                            if(interaction.channel.name === c15){
                                                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                            }else{
                                                                await googleSheets.spreadsheets.values.update({
                                                                    auth,
                                                                    spreadsheetId,
                                                                    range:"bdd!C15",
                                                                    valueInputOption: "USER_ENTERED",
                                                                    resource: {
                                                                        values : [[
                                                                            ""+interaction.channel.name
                                                                        ]]
                                                                    }
                                                                })
                                                                await interaction.channel.send("réponse envoyé 2/3 !")

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range:"bdd2!A:A",
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [[
                    ""+interaction.channel.name,poulet,gain
                ]]
            }
        })

        await interaction.channel.send("réponse envoyé 3/3 !")
                                                            }
                                                        }else{
                                                            interaction.channel.send("<@!698136779689295912> erreur etape 2")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}












    }else{
     interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
    }
    }
    if(interaction.commandName==="clear"){
        if(interaction.guild.members.cache.get(interaction.user.id).permissions.has("Administrator")){
            

const auth = new google.auth.GoogleAuth({
    keyFile:"credential.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const shet = await auth.getClient()
const googleSheets = google.sheets({version: "v4", auth: shet})
const spreadsheetId = "1mbPmlrEGt0GwLzt5z819__Zk2oXuNUnnL8uzErSkJCI"
            await googleSheets.spreadsheets.values.clear({
                auth,
                spreadsheetId,
                range:"bdd2!A:C",
               
            })
            await googleSheets.spreadsheets.values.clear({
                auth,
                spreadsheetId,
                range:"bdd3!A:D",
               
            })
            await interaction.reply("Clear réalisé")
            await interaction.guild.channels.cache.get("1209762200324153394").send("Clear réalisé sur demande de: <@!"+ interaction.user.id +">") 
        }else{
            interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
        }
    }
    if(interaction.commandName==="vente"){
        if(interaction.channel.parentId ==="1194778960656081033"){
            if(interaction.member.roles.cache.get("1194778958349221939")){//a changer



                const auth = new google.auth.GoogleAuth({
                    keyFile:"credential.json",
                    scopes: "https://www.googleapis.com/auth/spreadsheets"
                })
                
                const shet = await auth.getClient()
                const googleSheets = google.sheets({version: "v4", auth: shet})
                const spreadsheetId = "1mbPmlrEGt0GwLzt5z819__Zk2oXuNUnnL8uzErSkJCI"

                await googleSheets.spreadsheets.values.append({
                    auth,
                    spreadsheetId,
                    range:"bdd3!A:D",
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values : [[
                            interaction.user.id,interaction.channel.name,interaction.options.getNumber("poulet"),interaction.options.getNumber("gain")
                        ]]
                    }
                })



                const embed = new EmbedBuilder().setTitle("Déclaration de vente").setColor(0x000000).addFields(
                    { name: 'déclarant:', value: interaction.user.id , inline: true},
                ).addFields(
                    { name: '\u200B', value: '\u200B' }, 
                    ).addFields(
                   { name: 'Nombre de poulet:', value: ""+interaction.options.getNumber("poulet"), inline: false }, 
                    ).addFields(
                   { name: "Nombre d'argent touché:", value: ""+interaction.options.getNumber("gain"), inline: false }, 
                     ).addFields(
                    { name: "Entreprise", value: ""+interaction.channel.name, inline: false },
                )
        
      
        interaction.guild.channels.cache.get("1209762200324153394").send({embeds : [embed]})


await interaction.reply("Vente comptabilisé")

            }else{
                interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
            }
        }else{
           
            interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
           }
    }


    if(interaction.commandName==="prime"){
        if(interaction.channel.parentId ==="1194778959318098059"){
var num = ""

const auth = new google.auth.GoogleAuth({
    keyFile:"credential.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const shet = await auth.getClient()
const googleSheets = google.sheets({version: "v4", auth: shet})
const spreadsheetId = "1mbPmlrEGt0GwLzt5z819__Zk2oXuNUnnL8uzErSkJCI"


const opt = {
    spreadsheetId,
    range:"bdd!A79:A168",
};
let repData = await googleSheets.spreadsheets.values.get(opt);
let repDataArray = repData.data.values;


await  interaction.reply({ content: "calcule en cours", ephemeral: true })
let feuille = 1

for (let pas = 0; pas < 91; pas++) {
    

    if(pas< 90)
{
    await  interaction.editReply({ content: "lecture prime: "+feuille+"/15" })
  
    
    if( repDataArray[pas].join("") === interaction.channel.id){

    
   
     

var pas2 = Math.floor(pas + 2 )  
        var num = ""+repDataArray[pas2]
var nom = "<@"+num+">"
        if(num ==="")var nom = "null"


        var pas3 = Math.floor(pas + 3 )  
        var num2 = ""+repDataArray[pas3]
var poulet = num2
        if(num2 ==="")var poulet = "null"


        var pas4 = Math.floor(pas + 4 )  
        var num3 = ""+repDataArray[pas4]
var poulet2 = num3
        if(num3 ==="")var poulet2 = "null"

        var pas5 = Math.floor(pas + 5 )  
        var num5 = ""+repDataArray[pas5]
var prim = num5
        if(num5 ==="")var prim = "null"

       
    const embed = new EmbedBuilder().setTitle("État de votre prime").setColor(0x008000)
    .addFields(
        { name: 'Feuille connecté:', value: interaction.channel.name , inline: false},
    )
    .addFields(
        { name: 'nom du déclarant:', value: nom , inline: false },  
        )
        .addFields(
            { name: 'nombre de poulet (run):', value: poulet , inline: true},   { name: 'nombre de poulet (vente):', value: poulet2 ,  inline: true},
            )
            .addFields(
                { name: 'Prime actuelle:', value: prim , inline: false },  
                )
    

interaction.channel.send({embeds : [embed]})

pas = 91

    
   }else{
     pas = Math.floor(pas+5)
     feuille = Math.floor(feuille+1)
   }
   
   }else{
 interaction.channel.send("feuille non trouvé dans les payes")
    pas=91
   }




  }
  


       


        }else{
            interaction.reply({content : "Vous n'avez pas les permission requise",  ephemeral: true})
           }
    }


   
}
})









client.login("MTE5NDk4OTU0MDI2NDM4MjU1NA.G1_7Za.tAmMMD7DYtEscQhGtLJjJnC-gRie10HL-SlseI")