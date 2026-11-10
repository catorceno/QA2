import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 5 }, // Ramp-up: de 0 a 5 VUs
    { duration: '40s', target: 5 }, // Steady state: se mantienen 5 VUs
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],    // menos de 5% de errores
    http_req_duration: ['p(95)<1000'], // 95% de respuestas < 1s
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'status es 200': (r) => r.status === 200 });
  sleep(1);
}