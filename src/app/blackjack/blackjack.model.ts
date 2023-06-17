export class blackjackModel {
    static hearts:Array<String> = ["2","3","4","5","6","7","8","9","10"];
    static diamond:Array<String> = [... blackjackModel.hearts];
    static spade:Array<String> = [... blackjackModel.hearts];
    static club:Array<String> = [... blackjackModel.hearts];
    
    // static pack:Array<String> = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    // static suite:Array<String> = ["H", "S", "D", "C"]

    static jack:Array<String> = ["JH", "JS", "JD", "JC"];
    static queen:Array<String> = [... blackjackModel.jack];
    static king:Array<String> = [... blackjackModel.jack];
    static ace:Array<String> = ["AH", "AS", "AD", "AC"];

    static deck:any = {
        hearts:blackjackModel.hearts, diamond:blackjackModel.diamond, spade:blackjackModel.spade,
        club:blackjackModel.club, jack:blackjackModel.jack, queen:blackjackModel.queen,
        king:blackjackModel.king, ace:blackjackModel.ace
    };
    
    static playersHand = [];
    static dealersHand:Array<any> = [];
}

