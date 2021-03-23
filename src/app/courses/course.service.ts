import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    private courseURL: string = 'http://localhost:3100/api/courses'

    constructor(private httpClient: HttpClient) { }

    retriveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.courseURL);
    }

    retriveByID(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.courseURL}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.courseURL}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(this.courseURL, course);
        }
    }

    deleteByID(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.courseURL}/${id}`);
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2020',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];