export class Environment {
    public AuthId: string;
    public Expires: Date;

    constructor(
        private _isProduction: boolean = false,
        private _apiHost: string = ''
    ) { }

    get IsProduction(): boolean { return this._isProduction; }
    get ApiHost(): string { return this._apiHost; }

    GetFullPath(url: string): string {
        return this.ApiHost + url;
    }
}
