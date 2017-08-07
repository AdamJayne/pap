export class Post {
    public nameOfAnimal: string;
    public description: string;
    public imagePath: string;

    constructor(nameOfAnimal: string, description: string, imagePath: string){
        this.nameOfAnimal = nameOfAnimal;
        this.description = description;
        this.imagePath = imagePath;
    }
}