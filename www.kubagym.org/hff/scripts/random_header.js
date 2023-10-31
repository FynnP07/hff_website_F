/*
 * random_header.js
 *
 * This script generates a random header based on the "headers" array. It then
 * replaces the content of an HTML elements with the ID "random_header" with
 * that string.
 */

var headers = [
  "Grüner <strong>Wasserstoff</strong><br /> statt Erdgas, Erdöl und Kohle"
];

document.getElementById("random_header").innerHTML =
  headers[Math.floor(Math.random() * headers.length)];
