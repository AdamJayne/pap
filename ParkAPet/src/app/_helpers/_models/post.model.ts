export class Post {
    usrID: string;
    petName: string;
    petBreed: string;
    description: string;
    image: string;
    dateFrom: string;
    dateTo: string;
    createdOn: any;
    constructor(
        usrID: string,
        petName: string,
        petBreed: string,
        description: string,
        image: string,
        dateFrom: string,
        dateTo: string,
        createdOn: any,
    ) {
        this.usrID = usrID
        this.petName = petName
        this.petBreed = petBreed
        this.description = description
        this.image = image
        this.dateFrom = dateFrom
        this.dateTo = dateTo
        this.createdOn = createdOn
    }
}