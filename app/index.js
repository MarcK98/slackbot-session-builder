const { App } = require('@slack/bolt');
const axios = require('axios');

const app = new App({
  // token: process.env.SLACK_BOT_TOKEN,
  // appToken: process.env.SLACK_APP_TOKEN,
  token: 'xoxb-2102817429777-5533511907058-WsTRDPT0pZ2GM6ReQxtM6L5G',
  appToken:
    'xapp-1-A05FRTU6876-5546157832753-8780ab8eeefa794ed2dad7993261699b6de193db550a512a187944c936089d5e',
  socketMode: true,
});

app.message(RegExp('[a-zA-Z]'), async ({ message, say }) => {
  const { text: clientName } = message;
  const { customerId, flowId } = (() => {
    switch (clientName) {
      case 'mest':
        return {
          customerId: '640f0f80dadb9de0604da094',
          flowId: '6411c064a47f80dc7e9bd748',
        };
      case 'tipico':
        return {
          customerId: '63c94fb77376527d33b1a537',
          flowId: '64078b7308949c2ff28b2b25',
        };
      case 'sonnenspiele':
        return {
          customerId: '63eff4e9ffd137969af45804',
          flowId: '640f0ededadb9de0604da092',
        };
      case 'paylado':
        return {
          customerId: '647efca334a855cf37cf58c3',
          flowId: '647efd9734a855cf37cf58c5',
        };
      case 'wealth guardian':
        return {
          customerId: '646227d3c2b1798cd038302b',
          flowId: '646227b1c2b1798cd038302a',
        };
      case 'sira':
        return {
          customerId: '64a2c9c785219dfcb177d2d2',
          flowId: '64a2c9a185219dfcb177d2d1',
        };
      default:
        return { customerId: '', flowId: '' };
    }
  })();

  if (customerId === '' || flowId === '') {
    return await say(
      `Unknown client: ${clientName}\nAvailable clients: mest - tipico - sonnenspiele - paylado - wealth guardian - sira`,
    );
  }

  const {
    data: { startURL },
  } = await axios.post('https://staging.id.sonio-group.com/api/v3/session', {
    customerId,
    flowId,
  });

  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `New session for ${clientName} \n ${startURL} \n\n`,
        },
      },
    ],
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('Bot is running!');
})();
