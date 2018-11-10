export class SettingsService {

    private altBackground = false;

    setBacground(isAlt: boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }
}
