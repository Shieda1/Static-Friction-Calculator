// https://calculator.swiftutors.com/static-friction-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const staticFrictionRadio = document.getElementById('staticFrictionRadio');
const coefficientofStaticFrictionRadio = document.getElementById('coefficientofStaticFrictionRadio');
const normalForceRadio = document.getElementById('normalForceRadio');

let staticFriction;
let coefficientofStaticFriction = v1;
let normalForce = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

staticFrictionRadio.addEventListener('click', function() {
  variable1.textContent = '(μs) Coefficient of Static Friction';
  variable2.textContent = '(N) Normal Force (N)';
  coefficientofStaticFriction = v1;
  normalForce = v2;
  result.textContent = '';
});

coefficientofStaticFrictionRadio.addEventListener('click', function() {
  variable1.textContent = '(Fs) Static Friction (N)';
  variable2.textContent = '(N) Normal Force (N)';
  staticFriction = v1;
  normalForce = v2;
  result.textContent = '';
});

normalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(Fs) Static Friction (N)';
  variable2.textContent = '(μs) Coefficient of Static Friction';
  staticFriction = v1;
  coefficientofStaticFriction = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(staticFrictionRadio.checked)
    result.textContent = `Static Friction = ${computeStaticFriction().toFixed(2)} N`;

  else if(coefficientofStaticFrictionRadio.checked)
    result.textContent = `Coefficient of Static Friction = ${computeCoefficientofStaticFriction().toFixed(2)}`;

  else if(normalForceRadio.checked)
    result.textContent = `Normal Force = ${computeNormalForce().toFixed(2)} N`;
})

// calculation

function computeStaticFriction() {
  return Number(coefficientofStaticFriction.value) * Number(normalForce.value);
}

function computeCoefficientofStaticFriction() {
  return Number(staticFriction.value) / Number(normalForce.value);
}

function computeNormalForce() {
  return Number(staticFriction.value) / Number(coefficientofStaticFriction.value);
}