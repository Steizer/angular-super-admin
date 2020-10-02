import { title } from 'process';

export class AppConfig {
    apiEndPoint: string;
    title: string;
    mode: number;
}

export const CONFIG1: AppConfig = {
    apiEndPoint: "blabla",
    title: "main api",
    mode: 1
}

export const CONFIG2: AppConfig = {
    apiEndPoint: "http://91.121.148.187:8080",
    title: "fallback api",
    mode: 2
}