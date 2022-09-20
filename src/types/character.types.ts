export interface Object {
    generalInformation: GeneralInformation;
    characters: Character[];
}

export interface Character {
    created:  Date;
    episode:  string[];
    gender:   string;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
   }

export interface GeneralInformation {
    count: number;
    nextPage:  string;
    amountPages: number;
    prevPage:  null;
   }