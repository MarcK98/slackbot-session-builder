const { App } = require("@slack/bolt");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

const clients = [
  {
    label: "mest",
    value: "mest",
    customerId: "640f0f80dadb9de0604da094",
    flowId: "6411c064a47f80dc7e9bd748",
    apiVersion: "v2",
  },
  {
    label: "tipico",
    value: "tipico",
    customerId: "63c94fb77376527d33b1a537",
    flowId: "640764c178046a37f9b47e26",
    redirectURL: "https://tipico.com",
    apiVersion: "v3",
  },
  {
    label: "sonnenspiele v4",
    value: "sonnenspiele v4",
    customerId: "63eff4e9ffd137969af45804",
    flowId: "65a6a308e446fc3e877725f4",
    apiVersion: "v4",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "sonnenspiele",
    value: "sonnenspiele",
    customerId: "63eff4e9ffd137969af45804",
    flowId: "640f0ededadb9de0604da092",
    apiVersion: "v3",
  },
  {
    label: "mest v4",
    value: "mest v4",
    customerId: "640f0f80dadb9de0604da094",
    flowId: "65ddc5bc649a287d57470f35",
    apiVersion: "v4",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "paylado",
    value: "paylado",
    customerId: "647efca334a855cf37cf58c3",
    flowId: "647efd9734a855cf37cf58c5",
    apiVersion: "v3",
  },
  {
    label: "wealth guardian",
    value: "wealth guardian",
    customerId: "646227d3c2b1798cd038302b",
    flowId: "646227b1c2b1798cd038302a",
    apiVersion: "v3",
  },
  {
    label: "sira",
    value: "sira",
    customerId: "64a2c9c785219dfcb177d2d2",
    flowId: "64a2c9a185219dfcb177d2d1",
    apiVersion: "v3",
  },
  {
    label: "finyoz",
    value: "finyoz",
    customerId: "650bf5968abfd064b5b44e2e",
    flowId: "650bf5e4ef1e42dd2faba8cc",
    apiVersion: "v3",
  },
  {
    label: "intertops",
    value: "intertops",
    customerId: "65f42c272156d096dbe51ca5",
    flowId: "65f42da72156d096dbe51ca6",
    apiVersion: "v4",
  },
  {
    label: "finductive",
    value: "finductive",
    customerId: "64d1eaa7373499249f9fe9ff",
    flowId: "6526590a8abfd064b5b44e39",
    apiVersion: "v4",
  },
  {
    label: "win2day",
    value: "win2day",
    flowId: "67f4d5548e6b3847892c11da",
    customerId: "649025e334a855cf37cf58c7",
    redirectURL: "https://google.com",
    apiVersion: "v4",
    person: {
      firstname: "HARTMUT",
      lastname: "HAR",
    },
  },
  {
    label: "tipico tink sports",
    value: "tipico tink sports",
    customerId: "65cb2fcf8db0af6615cc61eb",
    language: "en",
    apiVersion: "v4",
    flowId: "65e877632156d096dbe51c9e",
    theme: "sports",
    referenceId: `${uuidv4()}`,
    redirectURL: "https://www.google.com",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "tipico games",
    value: "tipico games",
    customerId: "673b607d2d5f62e98bf60121",
    language: "en",
    apiVersion: "v3",
    flowId: "673b61172d5f62e98bf60124",
    redirectURL: "https://www.google.com",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "tink games",
    value: "tink games",
    customerId: "673b77e42d5f62e98bf6012a",
    language: "en",
    apiVersion: "v4",
    flowId: "673c544357cef7322b565964",
    redirectURL: "https://www.google.com",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "daznbet",
    value: "daznbet",
    flowId: "662b76a95e418f8f800fbad5",
    customerId: "660e5bd95e418f8f800fbaa8",
    redirectURL: "https://google.com",
    apiVersion: "v4",
  },
  {
    label: "megapixel",
    value: "megapixel",
    flowId: "667ebfca20b3b7d3d3a64665",
    customerId: "6682626c20b3b7d3d3a64666",
    redirectURL: "https://google.com",
    apiVersion: "v4",
  },
  {
    label: "rootz",
    value: "rootz",
    flowId: "65ddb396649a287d57470f32",
    customerId: "65c34f41e446fc3e87772606",
    redirectURL: "https://google.com",
    apiVersion: "v4",
  },
  {
    label: "wettarena",
    value: "wettarena",
    flowId: "671763b886d55c9e233a40af",
    customerId: "6717636b86d55c9e233a40ae",
    redirectURL: "https://google.com",
    apiVersion: "v4",
  },
  {
    label: "idverse",
    value: "idverse",
    flowId: "66fa75fe0bdca83f076203bc",
    customerId: "6717636b86d55c9e233a40ae",
    redirectURL: "https://google.com",
    apiVersion: "v4",
  },
  {
    label: "shangri la",
    value: "shangri la",
    flowId: "64e8ae9b1ceabc3696e6044d",
    customerId: "65c34f41e446fc3e87772606",
    redirectURL: "https://google.com",
    apiVersion: "v3",
  },
  {
    label: "megapixel poa",
    value: "megapixel poa",
    flowId: "6720cf7b0fde69a791f078c2",
    customerId: "6682626c20b3b7d3d3a64666",
    redirectURL: "https://google.com",
    apiVersion: "v4",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
    },
  },
  {
    label: "bitpanda",
    value: "bitpanda",
    customerId: "649025e334a855cf37cf58c7",
    flowId: "66feadf40bdca83f076203c2",
    redirectURL: "https://google.com",
    apiVersion: "v4",
    person: {
      firstname: "HARTMUT",
      lastname: "HARTMUT",
      phone: "324424324",
    },
    params: {
      option: "noRedirect",
    },
  },
  {
    label: "novibet",
    value: "novibet",
    customerId: "649025e334a855cf37cf58c7",
    flowId: "6602a03716fa031c901fc0cb",
    apiVersion: "v3",
  },
  {
    label: "etoro",
    value: "etoro",
    customerId: "649025e334a855cf37cf58c7",
    flowId: "66fba8000bdca83f076203bf",
    apiVersion: "v3",
  },
  {
    label: "bwin",
    value: "bwin",
    customerId: "649025e334a855cf37cf58c7",
    flowId: "655f3b7878500066d5ce3c91",
    apiVersion: "v3",
  },
  {
    label: "betano",
    value: "betano",
    customerId: "649025e334a855cf37cf58c7",
    flowId: "65d36f128db0af6615cc61f0",
    apiVersion: "v3",
  },
];

app.view("client_select_modal", async ({ ack, body, view, client }) => {
  await ack();

  console.log(view.state);

  const selectedClient =
    view.state.values.client_select_block.client_select_action.selected_option.value;

  const clientData = clients.find(c => c.value === selectedClient);

  if (!clientData || !clientData.customerId || !clientData.flowId) {
    await client.chat.postMessage({
      channel: body.user.id,
      text: `Unknown client: ${selectedClient}`,
    });
    return;
  }

  const {
    customerId,
    flowId,
    apiVersion,
    redirectURL = "https://google.com",
    ...rest
  } = clientData;

  const {
    data: { startURL },
  } = await axios.post(
    `${process.env.SESSION_REQUEST_URL}/api/${apiVersion}/session`,
    {
      language: "en",
      redirectURL,
      customerId,
      flowId,
      ...rest,
    }
  );

  await client.chat.postMessage({
    channel: body.user.id,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `New session for ${selectedClient} \n ${startURL} \n\n`,
        },
      },
    ],
  });
});

app.command('/start-session', async ({ ack, body, client }) => {
  await ack();
  await client.views.open({
    trigger_id: body.trigger_id,
    view: {
      type: "modal",
      callback_id: "client_select_modal",
      title: { type: "plain_text", text: "Select Client" },
      submit: { type: "plain_text", text: "Start Session" },
      close: { type: "plain_text", text: "Cancel" },
      blocks: [
        {
          type: "input",
          block_id: "client_select_block",
          label: { type: "plain_text", text: "Choose a client" },
          element: {
            type: "static_select",
            action_id: "client_select_action",
            options: clients.map((c) => ({
              text: { type: "plain_text", text: c.label },
              value: c.value,
            })),
          },
        },
      ],
    },
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("Bot is running!");
})();
