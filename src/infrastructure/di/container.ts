import { AuthRepository } from '@/core/domain';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { HttpAuthRepository } from '../http';
import { FetchHttpClient, HttpClient } from '../http/httpClient';

// Configuración del contenedor
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

container.registerSingleton<HttpClient>('HttpClient', FetchHttpClient);
container.register<HttpClient>('HttpClient', {
  useValue: new FetchHttpClient(API_BASE_URL),
});

// Dependencias
container.register<AuthRepository>('AuthRepository', {
  useClass: HttpAuthRepository,
});

//useCase

export { container };
