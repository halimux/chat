export interface Message {
    topic: number,
    sender: string,
    message: string
};

export var Messages: Message[] = [];

export var Topics: string[] = [
    "Le clonage humain est-il éthique ?",
    "18 ans est-il un bon âge pour voter ?",
    "Les devoirs à la maison sont-ils bénéfiques ?",
    "La mode est-elle importante ?",
    "La guerre peut-elle être justifiée ?"
];

export var User = {name: ''};