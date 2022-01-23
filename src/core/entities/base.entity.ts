interface Issue {
    title: string;
    description: string;
}

abstract class BaseEntity {

    valid: boolean;
    issues: Issue[];

    constructor() {
        this.valid = false;
        this.issues = [];
    }

    isvalid = () => this.valid;
}

export {
    BaseEntity,
}