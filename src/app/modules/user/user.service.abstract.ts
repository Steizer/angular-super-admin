import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

export abstract class AbstractUserService{

    users: BehaviorSubject<User[]>;
    abstract getUsers(): Observable<Array<User>>;
    abstract addUser(user:User): Observable<Array<User>>;
    abstract refresh();

}