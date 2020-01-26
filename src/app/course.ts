export class Course{
    id: number;
    name: string;
    ects: number;
    semester: number;
    activityType: string;
    participantsLimit: number;
    rating: number;
    numberOfRatings: number;
    description: string;

    constructor(id, name, ects, semester, activityType, participantsLimit, rating, numberOfRatings, description){
        this.id = id;
        this.name = name;
        this.ects = ects;
        this.semester = semester;
        this.activityType = activityType;
        this.participantsLimit = participantsLimit;
        this.rating = rating;
        this.numberOfRatings = numberOfRatings;
        this.description = description;
    }


}