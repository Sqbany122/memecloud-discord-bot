const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('damian', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('A idź w chuj z tym damianem zajebanym');
  }
}