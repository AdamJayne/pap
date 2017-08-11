export class Post {
    usrID: string;
    petName: string;
    petBreed: string;
    description: string
    constructor(
        usrID: string,
        petName: string,
        petBreed: string,
        description: string
    ) {
        this.usrID = usrID
        this.petName = petName
        this.petBreed = petBreed
        this.description = description
    }
}