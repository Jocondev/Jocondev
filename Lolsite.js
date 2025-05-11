import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

const champData = {
    "champions": 
    [
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
        { "name": "UNRANKED", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Season_2023_-_Unranked.png" },
        { "name": "IRON", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f8/Season_2023_-_Iron.png" },
        { "name": "BRONZE", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Season_2023_-_Bronze.png" },
        { "name": "SILVER", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c4/Season_2023_-_Silver.png" },
        { "name": "GOLD", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/7/78/Season_2023_-_Gold.png" },
        { "name": "PLATINUM", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Season_2023_-_Platinum.png" },
        { "name": "EMERALD", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Season_2023_-_Emerald.png" },
        { "name": "DIAMOND", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/3/37/Season_2023_-_Diamond.png" },
        { "name": "MASTER", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Season_2023_-_Master.png" },
        { "name": "GRANDMASTER", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Season_2023_-_Grandmaster.png" },
        { "name": "CHALLENGER", "link": "https://static.wikia.nocookie.net/leagueoflegends/images/1/14/Season_2023_-_Challenger.png" }
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
        _statURL : { type: String },
        _token : {type: String},
        _players : {state: true},
        _playerTags : {state: true}
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

        #champ-icon
        {
            width: 30px;
            height: 30px;
        }

        .rank-info 
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .rank-text 
        {
            flex-grow: 1;
        }

        #rank-image 
        {
            width: 150px;
            height: 150px;
            margin-left: auto;
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

        .player-Info 
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

        .player-Table 
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

        table, th, td
        {
            border: 3px solid;
        }
    `;

    constructor() 
    {
        super();
        this._url = '';
        this._error = '';
        this._name = '';
        this._tag = '';
        this._players = [];
        this._playerTags = [];
        this._fullPlayerData = [];
    }

    connectedCallback() 
    {
        super.connectedCallback();
    }

    _handleSubmit() 
    {
        const token = this.renderRoot.querySelector('#token')?.value;

        if (!token || this._players.length === 0) 
        {
            this._error = 'Token is required and you must add at least one player!';
            return;
        }

        this._token = token;
        this._error = '';
        this._fullPlayerData = [];

        this._players.forEach((puuid, index) => 
        {
            const tag = this._playerTags[index];
            this._fetchPlayerStats(puuid, tag);
        });
    }

    async _fetchPlayerStats(puuid, tag)
    {
        this._error = 'Loading...';
        try 
        {
            const masteryRes = await fetch(
                `https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=9&api_key=${this._token}`
            );
            const statsRes = await fetch(
                `https://oc1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${this._token}`
            );

            if (!masteryRes.ok || !statsRes.ok) 
                throw new Error('One or more fetches failed');

            const masteryData = await masteryRes.json();
            const statsData = await statsRes.json();

            this._fullPlayerData = [
                ...this._fullPlayerData,
                { tag, masteryData, statsData }
            ];

            console.log(this._fullPlayerData);

            this.requestUpdate();
        } 
        catch (error) 
        {
            this._error = 'Error fetching player data';
        }
    }

    async _fetch(name, tag)
    {
        this._error = 'Loading...';
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
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    async _fetchID(puuid)
    {
        this._error = 'Loading...';
        this._idURL = `https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=9&api_key=${this._token}`;
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
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    async _fetchStats(puuid)
    {
        this._error = 'Loading...';
        this._statURL = `https://oc1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${this._token}`;
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

    _addPlayer()
    {
        this._error = 'Loading...';
        const name = this.renderRoot.querySelector('#name')?.value;
        const tag = this.renderRoot.querySelector('#tag')?.value;
        const token = this.renderRoot.querySelector('#token')?.value;
    
        if (!name || !tag || !token) 
        {
            this._error = 'All fields are required!';
            return;
        }

        this._name = name;
        this._tag = tag;
        this._token = token;

        this._error = '';
        this._url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${this._token}`;

        this._fetchArray(name, tag);

    }

    async _fetchArray(name, tag)
    {
        this._error = 'Loading...';
        try
        {
            const response = await fetch(this._url);
            if(!response.ok)
            {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            const temp = data;
            const tempPuuid = temp.puuid;
            this._error = '';
            this._players = [...this._players, tempPuuid];
            this._playerTags = [...this._playerTags, `${name}#${tag}`]

        }
        catch(error)
        {
            this._error = 'Unable to find summoner, check spelling and try again';
        }
    }

    _Reset()
    {
        this._url = '';
        this._error = '';
        this._name = '';
        this._tag = '';
        this._token = '';
        this._puuid = '';
        this._data = null;
        this._playerData = [];
        this._playerStats = [];
        this._players = [];
        this._playerTags = [];
        this._fullPlayerData = [];
        this.requestUpdate();
    }

    render() 
    {
        if (this._fullPlayerData.length > 0) 
        {
            return html`
            <button @click=${this._Reset}>Reset</button>
                ${this._fullPlayerData.map(player => html`
                    <div class="player-Table">
                    <h3>${player.tag}</h3>
                        <div class="rank-info">
                            ${player.statsData.map(data => html`
                                <div class="rank-text">
                                    <h3>${player.tag}</h3>
                                    <p>Rank: ${data.tier} ${data.rank}</p>
                                    <p>Rank Type: ${data.queueType}</p>
                                    <p>Wins: ${data.wins}</p>
                                    <p>Losses: ${data.losses}</p>
                                </div>
                                <img src=${this._getRankImg(data.tier)} id="rank-image">
                            `)}
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Champion</th>
                                    <th>Level</th>
                                    <th>Points</th>
                                    <th>Last Played</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${player.masteryData.map(champ => html`
                                    <tr>
                                        <td>
                                            <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.championId}.png" alt="Champion Icon" id="champ-icon">
                                        </td>
                                        <td>${this._getChampName(champ.championId)}</td>
                                        <td>${champ.championLevel}</td>
                                        <td>${champ.championPoints.toLocaleString()}</td>
                                        <td>${this._getupdatedTime(champ.lastPlayTime)}</td>
                                    </tr>        
                                `)}
                            </tbody>
                        </table>
                    </div>
                `)}
            `;
        }
        else
        {
            return html`
                <div class="setup">
                    <h3>Enter Summoner Details</h3>
                    <p>Token: <input type="text" id="token"></p>
                    <p>Summoner Name:<input type="text" id="name"></p>
                    <p>#Tag: <input type="text" id="tag"  maxlength="5"></p>
                    ${this._error ? html`<p class="error">${this._error}</p>` : null}
                    <button @click=${this._handleSubmit}>Submit</button>
                    <button @click=${this._addPlayer}>Add Player</button>
                    <p>Players:</p>
                    ${this._playerTags.map(tag => html`
                        <p>${tag}</p>`)}
                </div>
            `;
        }
    }
}

customElements.define('lol-site', Lolsite);