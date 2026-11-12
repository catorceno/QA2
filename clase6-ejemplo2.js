import http from 'k6/http';
import { check, sleep } from 'k6';

// Opciones del test
export let options = {
    stages: [
        { duration: '10s', target: 5 },  
        { duration: '20s', target: 10 }, 
        { duration: '30s', target: 20 },  
        { duration: '20s', target: 10 },  
        { duration: '10s', target: 0 },   
    ],
    thresholds: {
        'http_req_duration': ['p(95)<500'], // 95% requests < 500ms
        'http_req_failed': ['rate<0.01'],  // menos de 1% de errores
    },
};


export default function () {

    let res = http.get('https://quickpizza.grafana.com/api/quotes');

    // Validar respuesta
    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    // Pausa de 1 segundo entre requests
    sleep(1);
}