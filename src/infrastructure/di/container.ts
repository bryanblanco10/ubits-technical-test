import { AuthRepository, ProductRepository } from '@/core/domain';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { HttpAuthRepository, HttpProductRepository } from '../http';
import { ConfigHttpClient, HttpClient } from '../http/httpClient';

// Configuración del contenedor
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

container.register<HttpClient>('HttpClient', {
  useValue: new ConfigHttpClient(API_BASE_URL),
});

// Dependencias
container.register<AuthRepository>('AuthRepository', {
  useClass: HttpAuthRepository,
});
container.register<ProductRepository>('ProductRepository', {
  useClass: HttpProductRepository
})

//useCase

export { container };
