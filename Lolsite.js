import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

const champData = {
    "champions": [
        { "id": 266, "name": "Aatrox" },
        { "id": 103, "name": "Ahri" },
        { "id": 84, "name": "Akali" },
        { "id": 12, "name": "Alistar" },
        { "id": 32, "name": "Amumu" },
        { "id": 34, "name": "Anivia" },
        { "id": 1, "name": "Annie" },
        { "id": 22, "name": "Ashe" },
        { "id": 268, "name": "Azir" },
        { "id": 432, "name": "Bard" },
        { "id": 53, "name": "Blitzcrank" },
        { "id": 63, "name": "Brand" },
        { "id": 201, "name": "Braum" },
        { "id": 51, "name": "Caitlyn" },
        { "id": 69, "name": "Cassiopeia" },
        { "id": 31, "name": "Cho'Gath" },
        { "id": 42, "name": "Corki" },
        { "id": 122, "name": "Darius" },
        { "id": 131, "name": "Diana" },
        { "id": 36, "name": "Dr. Mundo" },
        { "id": 119, "name": "Draven" },
        { "id": 245, "name": "Ekko" },
        { "id": 60, "name": "Elise" },
        { "id": 28, "name": "Evelynn" },
        { "id": 81, "name": "Ezreal" },
        { "id": 9, "name": "Fiddlesticks" },
        { "id": 114, "name": "Fiora" },
        { "id": 105, "name": "Fizz" },
        { "id": 3, "name": "Galio" },
        { "id": 41, "name": "Gangplank" },
        { "id": 86, "name": "Garen" },
        { "id": 150, "name": "Gnar" },
        { "id": 79, "name": "Gragas" },
        { "id": 104, "name": "Graves" },
        { "id": 120, "name": "Hecarim" },
        { "id": 74, "name": "Heimerdinger" },
        { "id": 39, "name": "Irelia" },
        { "id": 40, "name": "Janna" },
        { "id": 59, "name": "Jarvan IV" },
        { "id": 24, "name": "Jax" },
        { "id": 126, "name": "Jayce" },
        { "id": 222, "name": "Jinx" },
        { "id": 429, "name": "Kalista" },
        { "id": 43, "name": "Karma" },
        { "id": 30, "name": "Karthus" },
        { "id": 38, "name": "Kassadin" },
        { "id": 55, "name": "Katarina" },
        { "id": 10, "name": "Kayle" },
        { "id": 85, "name": "Kennen" },
        { "id": 121, "name": "Kha'Zix" },
        { "id": 96, "name": "Kog'Maw" },
        { "id": 7, "name": "LeBlanc" },
        { "id": 64, "name": "Lee Sin" },
        { "id": 89, "name": "Leona" },
        { "id": 127, "name": "Lissandra" },
        { "id": 236, "name": "Lucian" },
        { "id": 117, "name": "Lulu" },
        { "id": 99, "name": "Lux" },
        { "id": 54, "name": "Malphite" },
        { "id": 90, "name": "Malzahar" },
        { "id": 57, "name": "Maokai" },
        { "id": 11, "name": "Master Yi" },
        { "id": 21, "name": "Miss Fortune" },
        { "id": 82, "name": "Mordekaiser" },
        { "id": 25, "name": "Morgana" },
        { "id": 267, "name": "Nami" },
        { "id": 75, "name": "Nasus" },
        { "id": 111, "name": "Nautilus" },
        { "id": 76, "name": "Nidalee" },
        { "id": 56, "name": "Nocturne" },
        { "id": 20, "name": "Nunu" },
        { "id": 2, "name": "Olaf" },
        { "id": 61, "name": "Orianna" },
        { "id": 80, "name": "Pantheon" },
        { "id": 78, "name": "Poppy" },
        { "id": 133, "name": "Quinn" },
        { "id": 33, "name": "Rammus" },
        { "id": 421, "name": "Rek'Sai" },
        { "id": 58, "name": "Renekton" },
        { "id": 107, "name": "Rengar" },
        { "id": 92, "name": "Riven" },
        { "id": 68, "name": "Rumble" },
        { "id": 13, "name": "Ryze" },
        { "id": 113, "name": "Sejuani" },
        { "id": 35, "name": "Shaco" },
        { "id": 98, "name": "Shen" },
        { "id": 102, "name": "Shyvana" },
        { "id": 27, "name": "Singed" },
        { "id": 14, "name": "Sion" },
        { "id": 15, "name": "Sivir" },
        { "id": 72, "name": "Skarner" },
        { "id": 37, "name": "Sona" },
        { "id": 16, "name": "Soraka" },
        { "id": 50, "name": "Swain" },
        { "id": 134, "name": "Syndra" },
        { "id": 91, "name": "Talon" },
        { "id": 44, "name": "Taric" },
        { "id": 17, "name": "Teemo" },
        { "id": 412, "name": "Thresh" },
        { "id": 18, "name": "Tristana" },
        { "id": 48, "name": "Trundle" },
        { "id": 23, "name": "Tryndamere" },
        { "id": 4, "name": "Twisted Fate" },
        { "id": 29, "name": "Twitch" },
        { "id": 77, "name": "Udyr" },
        { "id": 6, "name": "Urgot" },
        { "id": 110, "name": "Varus" },
        { "id": 67, "name": "Vayne" },
        { "id": 45, "name": "Veigar" },
        { "id": 161, "name": "Vel'Koz" },
        { "id": 254, "name": "Vi" },
        { "id": 112, "name": "Viktor" },
        { "id": 8, "name": "Vladimir" },
        { "id": 106, "name": "Volibear" },
        { "id": 19, "name": "Warwick" },
        { "id": 62, "name": "Wukong" },
        { "id": 101, "name": "Xerath" },
        { "id": 5, "name": "Xin Zhao" },
        { "id": 157, "name": "Yasuo" },
        { "id": 83, "name": "Yorick" },
        { "id": 154, "name": "Zac" },
        { "id": 238, "name": "Zed" },
        { "id": 115, "name": "Ziggs" },
        { "id": 26, "name": "Zilean" },
        { "id": 143, "name": "Zyra" },
        { "id": 223, "name": "Tahm Kench" },
        { "id": 0, "name": "None" },
        { "id": 203, "name": "Kindred" },
        { "id": 420, "name": "Illaoi" },
        { "id": 202, "name": "Jhin" },
        { "id": 136, "name": "Aurelion Sol" },
        { "id": 163, "name": "Taliyah" },
        { "id": 240, "name": "Kled" },
        { "id": 427, "name": "Ivern" },
        { "id": 164, "name": "Camille" },
        { "id": 498, "name": "Xayah" },
        { "id": 497, "name": "Rakan" },
        { "id": 516, "name": "Ornn" },
        { "id": 141, "name": "Kayn" },
        { "id": 142, "name": "Zoe" },
        { "id": 116, "name": "Kai'Sa" },
        { "id": 555, "name": "Pyke" },
        { "id": 518, "name": "Neeko" },
        { "id": 517, "name": "Sylas" },
        { "id": 350, "name": "Yuumi" },
        { "id": 246, "name": "Qiyana" },
        { "id": 235, "name": "Senna" },
        { "id": 523, "name": "Aphelios" },
        { "id": 875, "name": "Sett" },
        { "id": 147, "name": "Seraphine" },
        { "id": 526, "name": "Rell" },
        { "id": 234, "name": "Veigo" },
        { "id": 887, "name": "Gwen" },
        { "id": 166, "name": "Akshan" },
        { "id": 711, "name": "Vex" },
        { "id": 221, "name": "Zeri" },
        { "id": 888, "name": "Renata Glasc" },
        { "id": 200, "name": "Bel'Veth" },
        { "id": 895, "name": "Nilah" },
        { "id": 897, "name": "K'Sante" },
        { "id": 902, "name": "Milio" },
        { "id": 950, "name": "Naafiri" },
        { "id": 233, "name": "Briar" },
        { "id": 910, "name": "Hwei" },
        { "id": 901, "name": "Smolder" },
        { "id": 893, "name": "Aurora" },
        { "id": 799, "name": "Ambessa" },
        { "id": 800, "name": "Mel" }
    ]
};

const rankIcons = {
    "images": [
        { "name": "UNRANKED", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Season_2022_-_Unranked.png/revision/latest?cb=20231007211842" },
        { "name": "IRON", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-iron.png" },
        { "name": "BRONZE", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-bronze.png" },
        { "name": "SILVER", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-silver.png" },
        { "name": "GOLD", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-gold.png" },
        { "name": "PLATINUM", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-platinum.png" },
        { "name": "EMERALD", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-master.png" },
        { "name": "DIAMOND", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-diamond.png" },
        { "name": "MASTER", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-master.png" },
        { "name": "GRANDMASTER", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-grandmaster.png" },
        { "name": "CHALLENGER", "link": "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-challenger.png" }
    ]
}

class Lolsite extends LitElement
{
    static properties = 
    {
        _data: {state: true},
        _playerData : {state: true},
        _playerStats : {state: true},
        _url: { type: String },
        _combined: { state: true },
        _error: { state: true },
        _name : {type: String},
        _tag : {type: String},
        _puuid : {type: String},
        _idURL : { type: String },
        _statURL : { type: String }
    }

    static styles = css
    `
        :host 
        {

        }

        .champion-box 
        {
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 8px 12px;
            margin: 6px;
            background-color: #f9f9f9;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            font-family: sans-serif;
        }

        .champion-mastery
        {
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 10px;
            width: max-content;
            margin: 10px 0;
        }

        img
        {
            width: 75px;
            height: 75px;
        }

        .profile-stats 
        {
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 8px 12px;
            margin: 6px;
            background-color: #f9f9f9;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            font-family: sans-serif;
        }

        .setup 
        {
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 8px 12px;
            margin: 6px;
            background-color: #f9f9f9;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            font-family: sans-serif;
        }
    `;

    constructor() 
    {
        super();
        this._url = '';
        this._error = '';
        this._name = '';
        this._tag = '';
    }

    connectedCallback() 
    {
        super.connectedCallback();
    }

    _handleSubmit() 
    {
        const name = this.renderRoot.querySelector('#name')?.value;
        const tag = this.renderRoot.querySelector('#tag')?.value;
    
        if (!name || !tag) 
        {
            console.warn('Missing name or tag');
            this._error = 'Both fields are required!';
            return;
        }
    
        const fullString = `${name}#${tag}`;
        console.log('Combined string:', fullString);

        this._name = name;
        this._tag = tag;
    
        this._combined = fullString;
        this._error = '';
        this._url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=RGAPI-93cdb132-f95c-43aa-b7c0-d8161b6d93e4`;

        this._fetch(name, tag);
    }

    async _fetch(name, tag)
    {
        try
        {
            const response = await fetch(this._url);
            if(!response.ok)
            {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            this._data = data;
            this._error = '';
            this._puuid = data.puuid;
            this._fetchID(this._puuid);
            this._fetchStats(this._puuid);

        }
        catch(error)
        {
            console.error(error.message);
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    async _fetchID(puuid)
    {
        this._idURL = `https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=9&api_key=RGAPI-93cdb132-f95c-43aa-b7c0-d8161b6d93e4`;
        try
        {
            const response = await fetch(this._idURL);
            if(!response.ok)
            {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            this._error = '';
            this._playerData = data;
        }
        catch(error)
        {
            console.error(error.message);
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    async _fetchStats(puuid)
    {
        this._statURL = `https://oc1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=RGAPI-93cdb132-f95c-43aa-b7c0-d8161b6d93e4`;
        try
        {
            const response = await fetch(this._statURL);
            if(!response.ok)
            {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            this._error = '';
            this._playerStats = data;
        }
        catch(error)
        {
            console.error(error.message);
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    _getChampName(id)
    {
        const champ = champData.champions.find(champID => champID.id == id);
        if(champ != null)
        {
            return champ.name;
        }
        else
        {
            return 'Unknown';
        }
    }

    _getRankImg(rank)
    {
        const rankImg = rankIcons.images.find(imgid => imgid.name == rank);
        if(rankImg != null)
        {
            return rankImg.link;
        }
        else
        {
            return 'Unknown';
        }
    }

    _getupdatedTime(t)
    {
        const time = new Date(t);
        const formatted = time.toLocaleString('en-AU', 
            {
                dateStyle: 'medium',
                timeStyle: 'short'
            });
        return formatted;
    }

    render() 
    {
        if(this._data)
        {
            console.log(this._data);
            console.log(this._name, '#', this._tag, this._puuid);
            console.log(this._playerData);
            console.log(this._playerStats);
            return html
            `
                <div class="setup">
                    <h3>Enter Summoner Details</h3>
                    <p>Summoner Name:<input type="text" id="name"></p>
                    <p>#Tag: <input type="text" id="tag"></p>
                    ${this._error ? html`<p class="error">${this._error}</p>` : null}
                    <button @click=${this._handleSubmit}>Submit</button>
                </div>

                 <div class = "profile-stats">
                    <h3>${this._name}#${this._tag}</h3>
                    ${this._playerStats.map(data => html `
                        <p>Rank: ${data.tier} ${data.rank}</p>
                        <p>Wins: ${data.wins}</p>
                        <p>Losses: ${data.losses}</p>    
                        <img src='${this._getRankImg(data.tier)}'></img>        
                    `)}
                </div>

                <div class = "champion-mastery">
                    ${this._playerData.map(champ => html `
                        <div class = "champion-box">
                            <p>Champion: ${this._getChampName(champ.championId)}</p>
                            <p>Champion Level: ${champ.championLevel}</p>
                            <p>Champion Points: ${champ.championPoints.toLocaleString()}</p>
                            <p>Last Played: ${this._getupdatedTime(champ.lastPlayTime)}</p>
                            <img src = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.championId}.png'></img>
                        </div>
                    `)}
                </div>
            `;
        }
        else
        {
            return html
            `
                <div class="setup">
                    <h3>Enter Summoner Details</h3>
                    <p>Summoner Name:<input type="text" id="name"></p>
                    <p>#Tag: <input type="text" id="tag"></p>
                    ${this._error ? html`<p class="error">${this._error}</p>` : null}
                    <button @click=${this._handleSubmit}>Submit</button>
                </div>
            `;
        }
    }
}

customElements.define('lol-site', Lolsite);