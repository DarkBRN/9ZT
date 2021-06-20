//© 9ZT
//CONVITE: https://dsc.gg/9zt

//VIDEO: https://youtu.be/rzcns83_I14

const Discord = require("discord.js");

exports.run = async (client, message, args) => {//9ZT
    let embed = new Discord.MessageEmbed()//9ZT
    .setTitle(`Central de comandos`)//9ZT
    .setDescription(`aperte em uma reação pra ver tal comandos 
     1️⃣ moderação
     2️⃣ diversão
     3️⃣ informação
     4️⃣ utils`)//9ZT
    .setColor("RANDOM")//9ZT    
    message.channel.send(embed).then(msg => {//9ZT
      msg.react("1️⃣")//9ZT
      msg.react("2️⃣")//9ZT
      msg.react("3️⃣")//9ZT
      msg.react("4️⃣")//9ZT

      let filtro1 = (r, u) => r.emoji.name === '1️⃣' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '2️⃣' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '3️⃣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '4️⃣' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de moderação`)
        .setDescription(`Moder`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`Diversão`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de informação`)
        .setDescription(`Info`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de utils`)
        .setDescription(`Utils`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
