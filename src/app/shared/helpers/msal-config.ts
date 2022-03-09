import { MsalAngularConfiguration } from "@azure/msal-angular";
import {
  Configuration,
  InteractionType,
  PopupRequest,
  RedirectRequest,
} from "@azure/msal-browser";

export function getMsalConfig() {
  return {
     tenant: '<fill>',
    clientId: '<fill>',
    redirectUri: window.location.origin,
    domain:"rsgistesting.onmicrosoft.com",
    endpoints: { 
      "https://graph.microsoft.com":"00000003-0000-0000-c000-000000000000", // resourceAppId from manifest azure portal
      "https://localhost/Api/": "4200",
    },
    navigateToLoginRequestUrl: false,
    //extraQueryParameter: "scope=user.read",
    cacheLocation: "localStorage",
    expireOffsetSeconds: "1200",
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { interactionType: InteractionType.Redirect };
}

export type MsalGuardConfiguration = {
  interactionType: InteractionType.Popup | InteractionType.Redirect;
  authRequest?: PopupRequest | Omit<RedirectRequest, "redirectStartPage">;
};
export function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: getMsalConfig().clientId,
      redirectUri: getMsalConfig().redirectUri,
      authority: `https://login.microsoftonline.com/${getMsalConfig().tenant}`,
    },
  };
}
export function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    consentScopes: [
      "user.read",
      `api://${getMsalConfig().clientId}/access_as_user`,
    ],
    protectedResourceMap: [
      ["https://graph.microsoft.com/beta/", ["user.read"]],
    ],
  };
}
