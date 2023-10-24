const { App } = require('@slack/bolt');
const axios = require('axios');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.message(RegExp('[a-zA-Z]'), async ({ message, say }) => {
  const { text: clientName } = message;

  const body = (() => {
    switch (clientName) {
      case 'mest':
        return {
          customerId: '640f0f80dadb9de0604da094',
          flowId: '6411c064a47f80dc7e9bd748',
          apiVersion: 'v2',
        };
      case 'tipico':
        return {
          customerId: '63c94fb77376527d33b1a537',
          flowId: '640764c178046a37f9b47e26',
          redirectURL: 'https://tipico.com',
          apiVersion: 'v3',
        };
      case 'sonnenspiele':
        return {
          customerId: '63eff4e9ffd137969af45804',
          flowId: '640f0ededadb9de0604da092',
          apiVersion: 'v3',
        };
      case 'paylado':
        return {
          customerId: '647efca334a855cf37cf58c3',
          flowId: '647efd9734a855cf37cf58c5',
          apiVersion: 'v3',
        };
      case 'wealth guardian':
        return {
          customerId: '646227d3c2b1798cd038302b',
          flowId: '646227b1c2b1798cd038302a',
          apiVersion: 'v3',
        };
      case 'sira':
        return {
          customerId: '64a2c9c785219dfcb177d2d2',
          flowId: '64a2c9a185219dfcb177d2d1',
          apiVersion: 'v3',
        };
      case 'finyoz':
        return {
          customerId: '650bf5968abfd064b5b44e2e',
          flowId: '650bf5e4ef1e42dd2faba8cc',
          apiVersion: 'v3',
        };
      case 'finductive':
        return {
          customerId: '64d1eaa7373499249f9fe9ff',
          flowId: '6526590a8abfd064b5b44e39',
          apiVersion: 'v4',
        };
      default:
        return { customerId: '', flowId: '', apiVersion: 'v3' };
    }
  })();

  if (body.customerId === '' || body.flowId === '') {
    return await say(
      `Unknown client: ${clientName}\nAvailable clients: mest - tipico - sonnenspiele - paylado - wealth guardian - sira - finyoz`,
    );
  }

  const {
    data: { startURL },
  } = await axios.post(
    `${process.env.SESSION_REQUEST_URL}/api/${body.apiVersion}/session`,
    {
      language: 'en',
      redirectURL: 'https://google.com',
      ...body,
    },
  );

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
