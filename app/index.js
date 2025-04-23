const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.message(RegExp("[a-zA-Z]+"), async ({ message, say }) => {
  const { text: clientName } = message;

  const body = (() => {
    switch (clientName) {
      case "mest":
        return {
          customerId: "640f0f80dadb9de0604da094",
          flowId: "6411c064a47f80dc7e9bd748",
          apiVersion: "v2",
        };
      case "tipico":
        return {
          customerId: "63c94fb77376527d33b1a537",
          flowId: "640764c178046a37f9b47e26",
          redirectURL: "https://tipico.com",
          apiVersion: "v3",
        };
      case "sonnenspiele v4":
        return {
          customerId: "63eff4e9ffd137969af45804",
          flowId: "65a6a308e446fc3e877725f4",
          apiVersion: "v4",
          person: {
            firstname: "HARTMUT",
            lastname: "HARTMUT",
          },
        };
      case "sonnenspiele":
        return {
          customerId: "63eff4e9ffd137969af45804",
          flowId: "640f0ededadb9de0604da092",
          apiVersion: "v3",
        };
      case "mest v4":
        return {
          customerId: "640f0f80dadb9de0604da094",
          flowId: "65ddc5bc649a287d57470f35",
          apiVersion: "v4",
          person: {
            firstname: "HARTMUT",
            lastname: "HARTMUT",
          },
        };
      case "paylado":
        return {
          customerId: "647efca334a855cf37cf58c3",
          flowId: "647efd9734a855cf37cf58c5",
          apiVersion: "v3",
        };
      case "wealth guardian":
        return {
          customerId: "646227d3c2b1798cd038302b",
          flowId: "646227b1c2b1798cd038302a",
          apiVersion: "v3",
        };
      case "sira":
        return {
          customerId: "64a2c9c785219dfcb177d2d2",
          flowId: "64a2c9a185219dfcb177d2d1",
          apiVersion: "v3",
        };
      case "finyoz":
        return {
          customerId: "650bf5968abfd064b5b44e2e",
          flowId: "650bf5e4ef1e42dd2faba8cc",
          apiVersion: "v3",
        };
      case "intertops":
        return {
          customerId: "65f42c272156d096dbe51ca5",
          flowId: "65f42da72156d096dbe51ca6",
          apiVersion: "v4",
        };
      case "finductive":
        return {
          customerId: "64d1eaa7373499249f9fe9ff",
          flowId: "6526590a8abfd064b5b44e39",
          apiVersion: "v4",
        };
      case "win2day":
        return {
          flowId: "67f4d5548e6b3847892c11da",
          customerId: "649025e334a855cf37cf58c7",
          redirectURL: "https://google.com",
          apiVersion: "v4",
          person: {
            firstname: "HARTMUT",
            lastname: "HAR",
          },
        };
      case "tipico tink sports":
        return {
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
        };
      case "tipico games":
        return {
          customerId: "673b607d2d5f62e98bf60121",
          language: "en",
          apiVersion: "v3",
          flowId: "673b61172d5f62e98bf60124",
          redirectURL: "https://www.google.com",
          person: {
            firstname: "HARTMUT",
            lastname: "HARTMUT",
          },
        };
      case "tink games":
        return {
          customerId: "673b77e42d5f62e98bf6012a",
          language: "en",
          apiVersion: "v4",
          flowId: "673c544357cef7322b565964",
          redirectURL: "https://www.google.com",
          person: {
            firstname: "HARTMUT",
            lastname: "HARTMUT",
          },
        };
      case "daznbet":
        return {
          flowId: "662b76a95e418f8f800fbad5",
          customerId: "660e5bd95e418f8f800fbaa8",
          redirectURL: "https://google.com",
          apiVersion: "v4",
        };
      case "megapixel":
        return {
          flowId: "667ebfca20b3b7d3d3a64665",
          customerId: "6682626c20b3b7d3d3a64666",
          redirectURL: "https://google.com",
          apiVersion: "v4",
        };
      case "rootz":
        return {
          flowId: "65ddb396649a287d57470f32",
          customerId: "65c34f41e446fc3e87772606",
          redirectURL: "https://google.com",
          apiVersion: "v4",
        };
      case "wettarena":
        return {
          flowId: "671763b886d55c9e233a40af",
          customerId: "6717636b86d55c9e233a40ae",
          redirectURL: "https://google.com",
          apiVersion: "v4",
        };
      case "idverse":
        return {
          flowId: "66fa75fe0bdca83f076203bc",
          customerId: "6717636b86d55c9e233a40ae",
          redirectURL: "https://google.com",
          apiVersion: "v4",
        };
      case "shangri la":
        return {
          flowId: "64e8ae9b1ceabc3696e6044d",
          customerId: "65c34f41e446fc3e87772606",
          redirectURL: "https://google.com",
          apiVersion: "v3",
        };
      case "megapixel poa":
        return {
          flowId: "6720cf7b0fde69a791f078c2",
          customerId: "6682626c20b3b7d3d3a64666",
          redirectURL: "https://google.com",
          apiVersion: "v4",
          person: {
            firstname: "HARTMUT",
            lastname: "HARTMUT",
          },
        };
      case "bitpanda":
        return {
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
        };
      case "novibet":
        return {
          customerId: "649025e334a855cf37cf58c7",
          flowId: "6602a03716fa031c901fc0cb",
          apiVersion: "v3",
        };
      case "etoro":
        return {
          customerId: "649025e334a855cf37cf58c7",
          flowId: "66fba8000bdca83f076203bf",
          apiVersion: "v3",
        };
      case "bwin":
        return {
          customerId: "649025e334a855cf37cf58c7",
          flowId: "655f3b7878500066d5ce3c91",
          apiVersion: "v3",
        };
      case "betano":
        return {
          customerId: "649025e334a855cf37cf58c7",
          flowId: "65d36f128db0af6615cc61f0",
          apiVersion: "v3",
        };

      default:
        return { customerId: "", flowId: "", apiVersion: "v3" };
    }
  })();

  if (body.customerId === "" || body.flowId === "") {
    return await say(
      `Unknown client: ${clientName}\nAvailable clients: tipico sports - tipico games - tink sports - tink games - sonnenspiele v4 - mest - mest poa - finyoz - finductive - interwetten - intertops - megapixel - megapixel poa - rootz - shangri la - wettarena - idverse - bwin - Betano - Novibet - eToro - Bitpanda.`
    );
  }

  const {
    data: { startURL },
  } = await axios.post(
    `${process.env.SESSION_REQUEST_URL}/api/${body.apiVersion}/session`,
    {
      language: "en",
      redirectURL: "https://google.com",
      ...body,
    }
  );

  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `New session for ${clientName} \n ${startURL} \n\n`,
        },
      },
    ],
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("Bot is running!");
})();
