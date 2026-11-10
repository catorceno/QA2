import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 2, // 10 usuarios virtuales
  duration: '30s', // duración de 30 segundos
};

export default function () {
  let res = http.get('https://quickpizza.grafana.com/api/quotes');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}