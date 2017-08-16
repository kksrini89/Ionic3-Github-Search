import { User } from './../models/user.interface';

const Users: User[] = [
    {
        "name": "Paul Halliday",
        "company": "PWH",
        "email": "paul@paul.com",
        "location": "Durham, UK",
        "bio": "I make videos on my favorite technologies. Go Angular!",
        "avatar_url": "http://i.imgur.com/jav62p6.jpg"
    }, {
        "name": "John Doe",
        "company": "Doe and Co.",
        "email": "john@doe.com",
        "location": "London, UK",
        "bio": "I love Ionic!",
        "avatar_url": "http://i.imgur.com/TzWcihb.png"
    }
];

export const USER_LIST = Users;