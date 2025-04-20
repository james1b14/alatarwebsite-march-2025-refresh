interface Window {
  hbspt: {
    forms: {
      create: (config: {
        region: string;
        portalId: string;
        formId: string;
        target?: string | HTMLElement;
        onFormReady?: () => void;
        onFormSubmit?: () => void;
        [key: string]: any;
      }) => void;
    }
  }
}
