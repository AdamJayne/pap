export class Post {
    usrID: string;
    petName: string;
    petBreed: string;
    description: string;
    image: string;
    constructor(
        usrID: string,
        petName: string,
        petBreed: string,
        description: string,
        image: string
    ) {
        this.usrID = usrID
        this.petName = petName
        this.petBreed = petBreed
        this.description = description
        this.image = image
    }
}