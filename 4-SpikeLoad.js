import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 2 },  // carga normal baja
    { duration: '5s',  target: 10 }, // SPIKE: salto brusco a 10 VUs
    { duration: '10s', target: 10 }, // se mantiene el pico un momento
    { duration: '5s',  target: 2 },  // caída brusca
    { duration: '10s', target: 0 },  // recuperación
  ],
  thresholds: {
    http_req_failed: ['rate<0.10'],
    http_req_duration: ['p(95)<2000'],
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'status es 200': (r) => r.status === 200 });
  sleep(1);
}