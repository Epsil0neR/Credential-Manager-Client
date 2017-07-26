export class Environment {
    constructor(
        private _isProduction: boolean = false,
        private _apiHost: string = ''
    ) { }

    get IsProduction(): boolean { return this._isProduction; }
    get ApiHost(): string { return this._apiHost; }

    public ApiKey: string;
    public Expires: Date;

    GetFullPath(url:string) :string {
        return this.ApiHost + url;
    }
}