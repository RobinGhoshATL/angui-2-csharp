declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window.config.environment;
    }

    public get base_href() {
        return window.config.base_href;
    }

  public get client_href() {
    return window.config.base_href;
  }

  public get graph_url() {
    return window.config.graph_url;
  }

  public get staticData() {
    return window.config.staticData;
  }

  public get encryptionToken() {
    return window.config.encryptionToken;
  }

  
}