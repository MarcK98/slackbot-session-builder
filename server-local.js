const { App } = require('@slack/bolt');
const axios = require('axios');

const app = new App({
  // token: process.env.SLACK_BOT_TOKEN,
  // appToken: process.env.SLACK_APP_TOKEN,
  token: 'xoxb-5015253507968-5529925160533-uq6LuhsmfeBlwBU785tQmoJ2',
  appToken:
    'xapp-1-A05FNMJ8VQT-5526191975222-84511e6e687b21a7b202ee8454c16fdfa2a15d83cd36929878f11d622c944e10',
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

  console.log('⚡️ Bolt app is running!');
})();
