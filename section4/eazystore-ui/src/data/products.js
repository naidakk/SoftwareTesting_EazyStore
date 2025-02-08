import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";
import itsnotabugImage from "../assets/stickers/itsnotabug.png";
import EatSleepCodeImage from "../assets/stickers/EatSleepCode.png";
import BreakingCodeImage from "../assets/stickers/BreakingCode.png";
import youaremycssImage from "../assets/stickers/youaremycss.png";
import CoolAstraunautImage from "../assets/stickers/CoolAstraunaut.png";
import MbappeImage from "../assets/stickers/Mbappe.png";
import ronaldoImage from "../assets/stickers/ronaldo.png";
import MyDrivingScaresMeTooImage from "../assets/stickers/MyDrivingScaresMeToo.png";
import HouseOfTheDragonSymbolImage from "../assets/stickers/HouseOfTheDragonSymbol.png";
import SquidGameImage from "../assets/stickers/SquidGame.png";
import ShinchanImage from "../assets/stickers/Shinchan.png";
import GameOverImage from "../assets/stickers/GameOver.png";
import MessiImage from "../assets/stickers/Messi.png";
import ViratImage from "../assets/stickers/Virat.png";
import LazyCatImage from "../assets/stickers/LazyCat.png";
import OverThinkerImage from "../assets/stickers/OverThinker.png";
import NarutoImage from "../assets/stickers/Naruto.png";
import GokuImage from "../assets/stickers/Goku.png";
import IamOkayImage from "../assets/stickers/IamOkay.png";
import BooImage from "../assets/stickers/Boo.png";
import EwFeelingsImage from "../assets/stickers/EwFeelings.png";
import BeWildImage from "../assets/stickers/BeWild.png";
import AestheticSummerCatImage from "../assets/stickers/AestheticSummerCat.png";
import YourOpinonMeansNothingImage from "../assets/stickers/YourOpinonMeansNothing.png";
import SociallyAwkwardImage from "../assets/stickers/SociallyAwkward.png";
import ButterflyImage from "../assets/stickers/Butterfly.png";
import IWon_tHesitateStickerImage from "../assets/stickers/IWon_tHesitateSticker.png";
import EvilEyeImage from "../assets/stickers/EvilEye.png";

const products = [
  {
    productId: 1,
    name: "Developer",
    description: "Code Wizard!",
    price: 5.0,
    popularity: "85",
    imageUrl: developerImage,
  },
  {
    productId: 2,
    name: "Break",
    description: "Hey, lets take a breather and start fresh on the next line",
    price: 4.5,
    popularity: "40",
    imageUrl: breakImage,
  },
  {
    productId: 3,
    name: "Not a bug ",
    description: "It's a surprise functionality.",
    price: 6.0,
    popularity: "98",
    imageUrl: itsnotabugImage,
  },
  {
    productId: 4,
    name: "Devster",
    description: "They exist!",
    price: 5.0,
    popularity: "72",
    imageUrl: EatSleepCodeImage,
  },
  {
    productId: 5,
    name: "CodeSmasher",
    description: "Fearless developer!",
    price: 7.5,
    popularity: "88",
    imageUrl: BreakingCodeImage,
  },
  {
    productId: 6,
    name: "CodeMate",
    description: "Without you, I'm incomplete!",
    price: 2.0,
    popularity: "79",
    imageUrl: youaremycssImage,
  },
  {
    productId: 7,
    name: "Mbappé",
    description: "Phenomenal!",
    price: 8.0,
    popularity: "55",
    imageUrl: MbappeImage,
  },
  {
    productId: 8,
    name: "AstroChill",
    description: "Cool for gravity!",
    price: 3.0,
    popularity: "52",
    imageUrl: CoolAstraunautImage,
  },
  {
    productId: 9,
    name: "Ronaldo",
    description: "Legendary!",
    price: 8.0,
    popularity: "100",
    imageUrl: ronaldoImage,
  },
  {
    productId: 10,
    name: "My Driving Scares Me Too",
    description: "They exist!",
    price: 5.0,
    popularity: "65",
    imageUrl: MyDrivingScaresMeTooImage,
  },
  {
    productId: 11,
    name: "Three headed dragon symbol",
    description: "Targaryen dynasty strength",
    price: 9.0,
    popularity: "98",
    imageUrl: HouseOfTheDragonSymbolImage,
  },
  {
    productId: 12,
    name: "Squid Game",
    description: "Lets play",
    price: 5.0,
    popularity: "70",
    imageUrl: SquidGameImage,
  },
  {
    productId: 13,
    name: "Shin-Chan",
    description: "Mischievous!",
    price: 5.0,
    popularity: "70",
    imageUrl: ShinchanImage,
  },
  {
    productId: 14,
    name: "Game over",
    description: "Game over!",
    price: 5.0,
    popularity: "50",
    imageUrl: GameOverImage,
  },
  {
    productId: 15,
    name: "Messi",
    description: "Magical!",
    price: 10.0,
    popularity: "99",
    imageUrl: MessiImage,
  },
  {
    productId: 16,
    name: "Virat Kohli",
    description: "King",
    price: 9.0,
    popularity: "99",
    imageUrl: ViratImage,
  },
  {
    productId: 17,
    name: "Lazy Cat",
    description: "Not Today",
    price: 6.0,
    popularity: "60",
    imageUrl: LazyCatImage,
  },
  {
    productId: 18,
    name: "Busy Brain",
    description: "Overthinker!",
    price: 4.0,
    popularity: "50",
    imageUrl: OverThinkerImage,
  },
  {
    productId: 19,
    name: "Naruto",
    description: "Ninja!",
    price: 6.0,
    popularity: "60",
    imageUrl: NarutoImage,
  },
  {
    productId: 20,
    name: "Goku",
    description: "Warrior!",
    price: 6.0,
    popularity: "60",
    imageUrl: GokuImage,
  },
  {
    productId: 21,
    name: "I am okay",
    description: "Persistent!",
    price: 6.0,
    popularity: "60",
    imageUrl: IamOkayImage,
  },
  {
    productId: 22,
    name: "Boo",
    description: "Disapproval!",
    price: 6.0,
    popularity: "60",
    imageUrl: BooImage,
  },
  {
    productId: 23,
    name: "EW feeling",
    description: "Disgust!",
    price: 6.0,
    popularity: "60",
    imageUrl: EwFeelingsImage,
  },
  {
    productId: 24,
    name: "Be wild",
    description: "Unleashed!",
    price: 6.0,
    popularity: "60",
    imageUrl: BeWildImage,
  },
  {
    productId: 25,
    name: "SummerCat",
    description: "Heatwave Whiskers",
    price: 6.0,
    popularity: "60",
    imageUrl: AestheticSummerCatImage,
  },
  {
    productId: 26,
    name: "Savageness",
    description: "Your opinion means nothing",
    price: 6.0,
    popularity: "60",
    imageUrl: YourOpinonMeansNothingImage,
  },
  {
    productId: 27,
    name: "Awkweird",
    description: "Awkward and Weird",
    price: 6.0,
    popularity: "60",
    imageUrl: SociallyAwkwardImage,
  },
  {
    productId: 28,
    name: "Blue Butterfly",
    description: "Gracewing",
    price: 6.0,
    popularity: "60",
    imageUrl: ButterflyImage,
  },
  {
    productId: 29,
    name: "NoHesitation",
    description: "Always ready to take charge!",
    price: 6.0,
    popularity: "60",
    imageUrl: IWon_tHesitateStickerImage,
  },
  {
    productId: 30,
    name: "Wardgaze",
    description: "Protective power of the evil eye",
    price: 6.0,
    popularity: "60",
    imageUrl: EvilEyeImage,
  },
];

export default products;
