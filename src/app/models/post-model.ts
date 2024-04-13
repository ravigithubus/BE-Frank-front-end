export interface post{
    title: String,
    desc: String,
    timeStamp:Date,
    imgUrl: [{
        imgTitle: String,
        imgUrl: String,
        imgDesc: String
    }], // Array of imgUrl objects
    vidArrUrl: [{
        vidTitle: String,
        vidUrl: String,
        vidDesc: String
    }], // Array of vidArrUrl objects
    addedByUserName: String,
    role: String
}