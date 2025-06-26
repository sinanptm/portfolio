export interface CookieYesA11yConfig {
    iconId: string;
    position: {
        mobile: string;
        desktop: string;
    };
    language: {
        default: string;
        selected: string[];
    };
}

declare global {
    interface Window {
        _cyA11yConfig: CookieYesA11yConfig;
    }
}

export { };