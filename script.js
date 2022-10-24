// const http = require('k6/http');
// const {sleep} = require('k6')
import http from 'k6/http';
import {sleep, check} from 'k6'
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

// export default function () {
//   // code ...

//   sleep(randomIntBetween(1, 5)); // sleep between 1 and 5 seconds.
// }


export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '10s',
      preAllocatedVUs: 1000, // how large the initial pool of VUs would be
      maxVUs: 1100// if the preAllocatedVUs are not enough, we can initialize more
    },
  },
  // thresholds: {
  //   http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  //   http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  // },
};

export default function (){
  let res = http.get(`http://localhost:3333/qa/?product_id=${randomIntBetween(809817,899855)}&count=4`)
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

}
// k6 run --duration 30s script.js
// k6 run --vus 10 --duration 10s script.js
// k6 run --vus 100 --duration 10s script.js
// k6 run --vus 1000 --duration 10s script.js