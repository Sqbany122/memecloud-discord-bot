const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require('axios');

module.exports = class RandomImage extends BaseCommand {
  constructor() {
    super('random', 'xDDDDDD', []);
  }

  async run(client, message, args) {
    let getRandomMeme = async () => {
        let response = await axios.get('https://memecloud.co/public_api/generate_random_image');
        let randomMeme = response.data;
        return randomMeme;
    }
    let randomMemeValue = await getRandomMeme();
    message.channel.send(randomMemeValue.meme);
  }
}